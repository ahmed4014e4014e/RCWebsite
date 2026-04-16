/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useMemo, useState } from "react";
import { useLocation } from "react-router-dom";
import { themeImages } from "../lib/themeImages";

const services = [
  {
    title: "Free Individual Tutoring",
    description:
      "Students can schedule individualized tutoring sessions for free when they need focused help in a course.",
  },
  {
    title: "Free Group Tutoring",
    description:
      "Students can attend group tutoring sessions for free and learn together around shared course topics.",
  },
  {
    title: "Online Student Community",
    description:
      "College students can ask questions, explain ideas, and help each other understand coursework in a supportive space.",
  },
  {
    title: "Document Library",
    description:
      "Access a free library of documents that helps students review lessons, assignments, and course concepts more clearly.",
  },
  {
    title: "Useful Videos",
    description:
      "Find useful videos that improve understanding of college course material and make difficult topics easier to follow.",
  },
  {
    title: "Course WhatsApp Groups",
    description:
      "Access collections of WhatsApp group chats made for specific college courses so students can get help more easily.",
  },
];

const privateTutors = [
  {
    name: "Ahmed Al Ruqaishi",
    institute: "MCBS",
    courses: [
      "MCBS ENG 213",
      "MCBS ICT 128",
      "MCBS MAT 255",
      "MCBS COSC 1301",
      "MCBS CPT 220",
    ],
    bio: "Offers free one-on-one tutoring sessions for selected MCBS courses.",
    bookingUrl: "https://calendly.com/ahmed4014e/30min",
    bookingLabel: "book tutor Ahmed Al Ruqaishi",
    availability: "Available for private tutoring",
  },
];

const groupTutors = [
  {
    name: "Ahmed Al Ruqaishi",
    institute: "MCBS",
    courses: [
      "MCBS ENG 213",
      "MCBS ICT 128",
      "MCBS MAT 255",
      "MCBS COSC 1301",
      "MCBS CPT 220",
    ],
    bio: "Runs free group tutoring sessions for selected MCBS courses.",
    bookingUrl: "https://calendly.com/ahmed4014e/30min",
    bookingLabel: "book group tutoring with Ahmed Al Ruqaishi",
    availability: "Available for group tutoring",
  },
];

const institutes = ["All Institutes", "MCBS", "SQU", "UTAS", "Middle East College"];

const serviceHighlights = [
  { number: "2", label: "tutoring sections for private and group support" },
  { number: "Filter", label: "tutors by institute and course" },
  { number: "Free", label: "booking support for students" },
];

function TutorSection({
  id,
  label,
  title,
  description,
  tutors,
  selectedInstitute,
  setSelectedInstitute,
  selectedCourse,
  setSelectedCourse,
  onTutorClick,
}) {
  const availableCourses = useMemo(() => {
    const relevantTutors =
      selectedInstitute === "All Institutes"
        ? tutors
        : tutors.filter((tutor) => tutor.institute === selectedInstitute);

    const uniqueCourses = Array.from(
      new Set(relevantTutors.flatMap((tutor) => tutor.courses))
    ).sort();

    return ["All Courses", ...uniqueCourses];
  }, [selectedInstitute, tutors]);

  const hasCourseOptions = availableCourses.length > 1;

  const filteredTutors = useMemo(() => {
    return tutors.filter((tutor) => {
      const instituteMatches =
        selectedInstitute === "All Institutes" || tutor.institute === selectedInstitute;
      const courseMatches =
        selectedCourse === "All Courses" || tutor.courses.includes(selectedCourse);

      return instituteMatches && courseMatches;
    });
  }, [selectedCourse, selectedInstitute, tutors]);

  useEffect(() => {
    if (!availableCourses.includes(selectedCourse)) {
      setSelectedCourse("All Courses");
    }
  }, [availableCourses, selectedCourse, setSelectedCourse]);

  return (
    <section id={id} className="mx-auto max-w-6xl scroll-mt-24 px-4 py-4 sm:scroll-mt-28 sm:px-6 sm:py-8">
      <div className="max-w-2xl text-center lg:text-left">
        <p className="oman-section-kicker text-xs font-semibold uppercase sm:text-sm">
          {label}
        </p>
        <h2 className="oman-title-accent mt-4 text-2xl font-semibold sm:text-3xl">
          {title}
        </h2>
        <p className="mt-4 text-base leading-7 text-[var(--oman-ink)]/75 sm:text-lg sm:leading-8">
          {description}
        </p>
      </div>

      <div className="mt-10 rounded-[1.75rem] oman-card p-6 sm:mt-12 sm:p-8">
        <div className="grid gap-4 md:grid-cols-2">
          <label className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-[var(--oman-terracotta-dark)]">Institute</span>
            <select
              value={selectedInstitute}
              onChange={(event) => setSelectedInstitute(event.target.value)}
              className="min-h-12 rounded-2xl border border-[rgba(111,49,29,0.14)] bg-[rgba(255,250,244,0.92)] px-4 py-3 text-[var(--oman-ink)] outline-none transition focus:border-[var(--oman-brass)] focus:bg-white"
            >
              {institutes.map((institute) => (
                <option key={institute} value={institute}>
                  {institute}
                </option>
              ))}
            </select>
          </label>

          <label className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-[var(--oman-terracotta-dark)]">Course</span>
            <select
              value={selectedCourse}
              onChange={(event) => setSelectedCourse(event.target.value)}
              disabled={!hasCourseOptions}
              className="min-h-12 rounded-2xl border border-[rgba(111,49,29,0.14)] bg-[rgba(255,250,244,0.92)] px-4 py-3 text-[var(--oman-ink)] outline-none transition focus:border-[var(--oman-brass)] focus:bg-white disabled:cursor-not-allowed disabled:opacity-60"
            >
              {hasCourseOptions ? (
                availableCourses.map((course) => (
                  <option key={course} value={course}>
                    {course}
                  </option>
                ))
              ) : (
                <option value="All Courses">No courses available yet</option>
              )}
            </select>
          </label>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {filteredTutors.length > 0 ? (
            filteredTutors.map((tutor) => (
              <article
                key={`${id}-${tutor.name}`}
                className="rounded-3xl oman-outline-panel p-6 sm:p-8"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                  <h3 className="text-xl font-semibold text-[var(--oman-ink)]">{tutor.name}</h3>
                  <span className="oman-chip rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em]">
                    {tutor.institute}
                  </span>
                </div>

                <p className="mt-4 leading-7 text-[var(--oman-ink)]/75">{tutor.bio}</p>

                <p className="mt-5 text-sm font-semibold uppercase tracking-[0.18em] text-[var(--oman-terracotta)]/80">
                  Courses
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {tutor.courses.map((course) => (
                    <span
                      key={`${id}-${tutor.name}-${course}`}
                      className="rounded-full bg-[rgba(255,252,247,0.96)] px-3 py-2 text-sm font-medium text-[var(--oman-ink)] ring-1 ring-[rgba(111,49,29,0.12)]"
                    >
                      {course}
                    </span>
                  ))}
                </div>

                <p className="mt-5 text-sm font-medium text-[var(--oman-olive)]">
                  {tutor.availability}
                </p>

                <button
                  type="button"
                  onClick={() => onTutorClick(tutor)}
                  className="oman-button-primary mt-6 inline-flex w-full items-center justify-center rounded-2xl px-6 py-3 text-center font-semibold transition sm:w-auto"
                >
                  {tutor.bookingLabel}
                </button>
              </article>
            ))
          ) : (
            <div className="rounded-3xl oman-outline-panel p-6 text-center sm:p-8 lg:col-span-2">
              <h3 className="text-xl font-semibold text-[var(--oman-ink)]">
                No tutor listed yet for this selection
              </h3>
              <p className="mt-4 leading-7 text-[var(--oman-ink)]/75">
                Try a different institute or course, or add more tutor entries
                to the frontend data later to expand this directory.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default function Services() {
  const [privateInstitute, setPrivateInstitute] = useState("All Institutes");
  const [privateCourse, setPrivateCourse] = useState("All Courses");
  const [groupInstitute, setGroupInstitute] = useState("All Institutes");
  const [groupCourse, setGroupCourse] = useState("All Courses");
  const [activeTutor, setActiveTutor] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const element = document.querySelector(location.hash);
    if (!element) return;

    requestAnimationFrame(() => {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [location.hash]);

  useEffect(() => {
    if (!activeTutor) return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setActiveTutor(null);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [activeTutor]);

  return (
    <main className="oman-page min-h-screen text-slate-900">
      <section
        className="oman-hero text-white"
        style={{ backgroundImage: `url(${themeImages.mountainFort})` }}
      >
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28">
          <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
            <div className="text-center lg:text-left">
              <p className="oman-kicker mb-4 text-xs font-semibold uppercase sm:text-sm">
                Our Services
              </p>
              <h1 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl lg:mx-0 lg:text-5xl">
                Free tutoring and student support presented through an Omani-inspired learning hub.
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#f4e8d6] sm:mt-6 sm:text-lg sm:leading-8 lg:mx-0">
                Ucan Oman helps students find tutors, course support, and study
                communities through a simple frontend directory that can keep growing.
              </p>
            </div>

            <div className="oman-card rounded-[1.75rem] p-4 text-[var(--oman-ink)] sm:p-5">
              <div className="oman-photo-frame aspect-[4/5]">
                <img
                  src={themeImages.studentsGroup}
                  alt="Students gathering around laptops and books"
                />
              </div>
              <p className="mt-4 text-sm leading-7 text-[var(--oman-ink)]/80">
                Browse private tutoring, group sessions, and expanding study support in a directory designed to feel both clear and culturally distinctive.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-4 rounded-[1.75rem] oman-card p-5 sm:gap-6 sm:p-8 md:grid-cols-3">
          {serviceHighlights.map((item) => (
            <div key={item.label} className="rounded-2xl oman-outline-panel p-5 text-center sm:p-6">
              <p className="oman-stat-number text-2xl font-bold sm:text-3xl">{item.number}</p>
              <p className="mt-2 text-sm leading-6 text-[var(--oman-ink)]/75">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <TutorSection
        id="tutor-directory"
        label="Private Tutoring"
        title="Find available tutors for private one-on-one support."
        description="Select an institute and course to see which private tutors are currently available."
        tutors={privateTutors}
        selectedInstitute={privateInstitute}
        setSelectedInstitute={setPrivateInstitute}
        selectedCourse={privateCourse}
        setSelectedCourse={setPrivateCourse}
        onTutorClick={setActiveTutor}
      />

      <TutorSection
        id="group-tutoring"
        label="Group Tutoring"
        title="Find available tutors for free group tutoring sessions."
        description="Use the same filters to explore group tutoring options for supported institutes and courses."
        tutors={groupTutors}
        selectedInstitute={groupInstitute}
        setSelectedInstitute={setGroupInstitute}
        selectedCourse={groupCourse}
        setSelectedCourse={setGroupCourse}
        onTutorClick={setActiveTutor}
      />

      <section className="mx-auto max-w-6xl px-4 py-4 sm:px-6 sm:py-8">
        <div className="max-w-2xl text-center lg:text-left">
          <p className="oman-section-kicker text-xs font-semibold uppercase sm:text-sm">
            What Else We Offer
          </p>
          <h2 className="oman-title-accent mt-4 text-2xl font-semibold sm:text-3xl">
            More free ways for students to study better and support each other.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 sm:mt-12 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-3xl oman-card p-6 sm:p-8"
            >
              <h3 className="text-xl font-semibold text-[var(--oman-ink)]">{service.title}</h3>
              <p className="mt-4 leading-7 text-[var(--oman-ink)]/75">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
        <div className="text-center lg:text-left">
          <p className="oman-section-kicker text-xs font-semibold uppercase sm:text-sm">
            Why It Matters
          </p>
          <h2 className="oman-title-accent mt-4 text-2xl font-semibold sm:text-3xl">
            Students need support that is free, practical, and connected to real coursework.
          </h2>
        </div>

        <div className="space-y-5 rounded-[1.75rem] oman-card p-6 text-base leading-7 text-[var(--oman-ink)]/75 sm:p-8 sm:text-lg sm:leading-8">
          <p>
            Ucan Oman helps students find the support they need most:
            explanation, tutoring, study materials, and communities where asking for help feels easier.
          </p>
          <p>
            By combining tutoring sessions, course resources, and WhatsApp groups,
            the platform creates a stronger support system across college courses.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20">
        <div className="rounded-[1.75rem] oman-dark-panel px-6 py-10 text-center text-white sm:px-8 sm:py-12">
          <p className="oman-kicker text-xs font-semibold uppercase sm:text-sm">
            Start Your Journey
          </p>
          <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">
            Explore free tutoring, resources, and course communities today.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-[#eadfcf] sm:text-lg sm:leading-8">
            Ucan Oman is built to help students find support faster and improve
            their understanding across the courses they are taking.
          </p>
          <button className="oman-button-primary mt-8 w-full rounded-2xl px-8 py-3 font-semibold transition sm:w-auto">
            Explore Courses
          </button>
        </div>
      </section>

      <footer className="border-t border-[rgba(111,49,29,0.12)] bg-[rgba(255,248,238,0.9)] px-4 py-8 text-center text-sm text-[var(--oman-ink)]/70 sm:px-6">
        Copyright {new Date().getFullYear()} Ucan Oman. Free learning support for everyone.
      </footer>

      {activeTutor && (
        <div className="oman-overlay fixed inset-0 z-[70] flex items-center justify-center bg-slate-950/65 px-4 py-6">
          <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-[1.75rem] oman-card p-6 sm:p-8">
            <button
              type="button"
              onClick={() => setActiveTutor(null)}
              className="absolute right-4 top-4 rounded-full bg-[rgba(197,154,68,0.12)] px-3 py-2 text-sm font-semibold text-[var(--oman-terracotta-dark)] transition hover:bg-[rgba(197,154,68,0.2)]"
              aria-label="Close popup"
            >
              Close
            </button>

            <p className="oman-section-kicker text-xs font-semibold uppercase sm:text-sm">
              Booking Instructions
            </p>
            <h3 className="oman-title-accent mt-4 pr-16 text-2xl font-semibold sm:text-3xl">
              Before booking with {activeTutor.name}
            </h3>

            <div className="mt-6 rounded-3xl oman-outline-panel p-5 sm:p-6">
              <p className="text-base leading-7 text-[var(--oman-ink)]">
                please send an email to :{" "}
                <span className="font-semibold">20258971@mcbs.edu.om</span>
              </p>

              <div className="mt-5 space-y-4 text-base leading-7 text-[var(--oman-ink)]">
                <p>with the following:</p>
                <p>Insitiute name (MCBS.....):</p>
                <p>Course Name + Course Code (Example: MAT255 ):</p>
                <p>Topics need help with:</p>
                <p>
                  and attach to the email any relavent files regarding topics and
                  concepts covered.
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:20258971@mcbs.edu.om"
                className="oman-button-primary inline-flex w-full items-center justify-center rounded-2xl px-6 py-3 text-center font-semibold transition sm:w-auto"
              >
                Open Email App
              </a>
              <a
                href={activeTutor.bookingUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center rounded-2xl border border-[rgba(111,49,29,0.14)] bg-[rgba(255,252,247,0.92)] px-6 py-3 text-center font-semibold text-[var(--oman-terracotta-dark)] transition hover:bg-[rgba(197,154,68,0.08)] sm:w-auto"
              >
                Open Calendly Booking
              </a>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
