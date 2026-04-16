import { isSupabaseConfigured, supabase } from "./supabase";

function ensureSupabase() {
  if (!isSupabaseConfigured || !supabase) {
    throw new Error("Supabase is not configured yet.");
  }
}

export async function fetchTutorDirectory() {
  ensureSupabase();

  const { data, error } = await supabase
    .from("tutor_course_offerings")
    .select(
      `
        id,
        session_type,
        is_active,
        tutor:tutor_profiles (
          id,
          display_name,
          institute_code,
          bio,
          booking_url,
          is_active
        ),
        course:courses (
          id,
          code,
          title,
          institute:institutes (
            id,
            code,
            name
          )
        )
      `
    )
    .eq("is_active", true)
    .order("created_at", { ascending: true });

  if (error) {
    throw error;
  }

  return (data ?? [])
    .filter((entry) => entry.tutor?.is_active)
    .filter((entry) => entry.tutor?.display_name)
    .filter((entry) => entry.course?.institute?.code);
}

export function buildTutorCards(offerings, sessionType) {
  const grouped = new Map();

  offerings
    .filter((entry) => entry.session_type === sessionType)
    .forEach((entry) => {
      const tutorId = entry.tutor.id;
      const key = `${tutorId}:${sessionType}`;
      const tutorName = entry.tutor.display_name;
      const instituteCode = entry.course.institute.code;
      const courseLabel = `${instituteCode} ${entry.course.code}`;

      if (!grouped.has(key)) {
        grouped.set(key, {
          id: key,
          tutorId,
          name: tutorName,
          institute: entry.tutor.institute_code || instituteCode,
          institutes: new Set(),
          courses: [],
          courseIds: [],
          bio:
            entry.tutor.bio ||
            `Offers free ${sessionType === "private" ? "one-on-one" : "group"} tutoring sessions.`,
          bookingUrl: entry.tutor.booking_url || "https://calendly.com/ahmed4014e/30min",
          bookingLabel:
            sessionType === "private"
              ? `book tutor ${tutorName}`
              : `book group tutoring with ${tutorName}`,
          availability:
            sessionType === "private"
              ? "Available for private tutoring"
              : "Available for group tutoring",
          sessionType,
        });
      }

      const tutorCard = grouped.get(key);
      tutorCard.institutes.add(instituteCode);
      tutorCard.courses.push({
        id: entry.course.id,
        label: courseLabel,
        title: entry.course.title,
      });
      tutorCard.courseIds.push(entry.course.id);
    });

  return Array.from(grouped.values())
    .map((card) => ({
      ...card,
      institutes: Array.from(card.institutes).sort(),
      courses: card.courses.sort((left, right) => left.label.localeCompare(right.label)),
      courseIds: Array.from(new Set(card.courseIds)),
    }))
    .sort((left, right) => left.name.localeCompare(right.name));
}

export async function createTutoringRequest(payload) {
  ensureSupabase();

  const { data, error } = await supabase
    .from("tutoring_requests")
    .insert(payload)
    .select("*")
    .single();

  if (error) {
    throw error;
  }

  return data;
}
