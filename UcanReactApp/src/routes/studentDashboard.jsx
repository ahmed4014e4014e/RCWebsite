import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ActionFeedback from "../components/ActionFeedback";
import { useAuth } from "../context/AuthContext";
import { isSupabaseConfigured, supabase } from "../lib/supabase";
import { themeImages } from "../lib/themeImages";

const quickLinks = [
  {
    title: "Explore Tutoring",
    description: "Browse private and group tutoring options available on the platform.",
    to: "/services/#tutor-directory",
    action: "Open Services",
  },
  {
    title: "Contact Support",
    description: "Reach out if you need guidance finding the right course support.",
    to: "/contact/",
    action: "Contact Ucan Oman",
  },
];

export default function StudentDashboard() {
  const { user, profile, refreshProfile } = useAuth();
  const [fullName, setFullName] = useState("");
  const [universityName, setUniversityName] = useState("");
  const [savingProfile, setSavingProfile] = useState(false);
  const [feedback, setFeedback] = useState({
    type: "idle",
    message: "",
  });
  const name = profile?.full_name || "Student";
  const profileComplete = Boolean(profile?.full_name?.trim() && profile?.institute?.trim());

  useEffect(() => {
    setFullName(profile?.full_name || "");
    setUniversityName(profile?.institute || "");
  }, [profile?.full_name, profile?.institute]);

  const handleProfileSubmit = async (event) => {
    event.preventDefault();

    if (!user?.id || !isSupabaseConfigured || !supabase) {
      setFeedback({
        type: "error",
        message: "Your student profile cannot be saved until Supabase is configured.",
      });
      return;
    }

    if (!fullName.trim() || !universityName.trim()) {
      setFeedback({
        type: "error",
        message: "Please enter your student name and university name to complete your profile.",
      });
      return;
    }

    setSavingProfile(true);
    setFeedback({
      type: "idle",
      message: "",
    });

    try {
      const profilePayload = {
        id: user.id,
        full_name: fullName.trim(),
        institute: universityName.trim(),
        email: user.email || profile?.email || null,
        role: "student",
      };

      const { error } = await supabase.from("profiles").upsert(profilePayload);

      if (error) {
        throw error;
      }

      const { error: metadataError } = await supabase.auth.updateUser({
        data: {
          full_name: profilePayload.full_name,
          institute: profilePayload.institute,
          role: "student",
        },
      });

      if (metadataError) {
        throw metadataError;
      }

      await refreshProfile();
      setFeedback({
        type: "success",
        message: "Your student profile was saved. You can now send tutoring requests.",
      });
    } catch (error) {
      setFeedback({
        type: "error",
        message: error.message || "We could not save your student profile right now.",
      });
    } finally {
      setSavingProfile(false);
    }
  };

  return (
    <main className="oman-page min-h-screen px-4 pb-16 pt-24 text-slate-900 sm:px-6 sm:pb-20 sm:pt-28">
      <section className="mx-auto max-w-6xl">
        <div
          className="oman-hero overflow-hidden rounded-[1.75rem] px-6 py-10 text-white shadow-xl sm:px-8 sm:py-12"
          style={{ backgroundImage: `url(${themeImages.studentsGroup})` }}
        >
          <div className="grid items-center gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="oman-kicker text-xs font-semibold uppercase sm:text-sm">
                Student Dashboard
              </p>
              <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                Welcome, {name}
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-7 text-[#f4e8d6] sm:text-lg sm:leading-8">
                Complete your student profile first, then use this protected dashboard as your
                home base for tutoring access and academic support.
              </p>
            </div>
            <div className="oman-card rounded-3xl p-4 text-[var(--oman-ink)]">
              <div className="oman-photo-frame aspect-[4/3]">
                <img src={themeImages.studentsStudyHall} alt="Students studying in a library" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-10 grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[1.75rem] oman-card p-6 sm:p-8">
          <p className="oman-section-kicker text-xs font-semibold uppercase sm:text-sm">
            Student Profile
          </p>
          <h2 className="oman-title-accent mt-4 text-2xl font-semibold">
            {profileComplete ? "Profile complete" : "Complete your profile"}
          </h2>
          <p className="mt-4 leading-7 text-[var(--oman-ink)]/75">
            Enter your student name and university name before sending tutoring requests.
          </p>

          <ActionFeedback
            type={feedback.type}
            message={feedback.message}
            title="Student profile update"
            className="mt-5"
          />

          <form className="mt-6 space-y-4" onSubmit={handleProfileSubmit}>
            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-[var(--oman-terracotta-dark)]">
                Student name <span aria-hidden="true" className="text-[var(--oman-terracotta)]">*</span>
              </span>
              <input
                type="text"
                value={fullName}
                onChange={(event) => setFullName(event.target.value)}
                placeholder="Enter your full name"
                required
                className="min-h-12 rounded-2xl border border-[rgba(111,49,29,0.14)] bg-[rgba(255,250,244,0.92)] px-4 py-3 text-[var(--oman-ink)] outline-none transition focus:border-[var(--oman-brass)] focus:bg-white"
              />
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-[var(--oman-terracotta-dark)]">
                University name <span aria-hidden="true" className="text-[var(--oman-terracotta)]">*</span>
              </span>
              <input
                type="text"
                value={universityName}
                onChange={(event) => setUniversityName(event.target.value)}
                placeholder="Example: MCBS"
                required
                className="min-h-12 rounded-2xl border border-[rgba(111,49,29,0.14)] bg-[rgba(255,250,244,0.92)] px-4 py-3 text-[var(--oman-ink)] outline-none transition focus:border-[var(--oman-brass)] focus:bg-white"
              />
            </label>

            <div className="rounded-2xl bg-[rgba(244,232,214,0.34)] px-4 py-4 text-sm leading-6 text-[var(--oman-ink)]/80">
              <p>
                <span className="font-semibold text-[var(--oman-ink)]">Email:</span>{" "}
                {user?.email || "Not set"}
              </p>
              <p className="mt-2">
                <span className="font-semibold text-[var(--oman-ink)]">Role:</span> Student
              </p>
            </div>

            <button
              type="submit"
              disabled={savingProfile}
              className="oman-button-primary inline-flex w-full items-center justify-center rounded-2xl px-6 py-3 font-semibold transition disabled:cursor-not-allowed disabled:opacity-70"
            >
              {savingProfile ? "Saving Profile..." : "Save Student Profile"}
            </button>
          </form>
        </div>

        <div className="rounded-[1.75rem] oman-card p-6 sm:p-8">
          <p className="oman-section-kicker text-xs font-semibold uppercase sm:text-sm">
            Student Actions
          </p>
          {!profileComplete ? (
            <div className="mt-6 rounded-3xl oman-outline-panel p-6 text-center">
              <h2 className="text-lg font-semibold text-[var(--oman-ink)]">
                Complete your profile to unlock tutoring requests
              </h2>
              <p className="mt-3 leading-7 text-[var(--oman-ink)]/75">
                Save your student name and university name first, then tutoring request tools will
                become available.
              </p>
            </div>
          ) : (
            <div className="mt-6 grid gap-4">
              {quickLinks.map((item) => (
                <article key={item.title} className="rounded-3xl oman-outline-panel p-5">
                  <h2 className="text-lg font-semibold text-[var(--oman-ink)]">{item.title}</h2>
                  <p className="mt-3 leading-7 text-[var(--oman-ink)]/75">{item.description}</p>
                  <Link
                    to={item.to}
                    className="oman-button-secondary mt-5 inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold transition"
                  >
                    {item.action}
                  </Link>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
