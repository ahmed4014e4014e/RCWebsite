import { themeImages } from "../lib/themeImages";

const values = [
  {
    title: "Free Access",
    description:
      "Everything on Ucan Oman is designed to be free of charge so every student can reach support more easily.",
  },
  {
    title: "Students Helping Students",
    description:
      "The platform is built around an online community of college students helping each other in college courses.",
  },
  {
    title: "Practical Support",
    description:
      "We focus on tutoring, study resources, useful videos, and course communities that improve understanding.",
  },
];

const highlights = [
  { number: "Free", label: "individual and group tutoring" },
  { number: "Shared", label: "documents and useful videos" },
  { number: "Connected", label: "course-based WhatsApp groups" },
];

export default function About() {
  return (
    <main className="oman-page min-h-screen text-slate-900">
      <section
        className="oman-hero text-white"
        style={{ backgroundImage: `url(${themeImages.heritageFort})` }}
      >
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28">
          <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
            <div className="text-center lg:text-left">
              <p className="oman-kicker mb-4 text-xs font-semibold uppercase sm:text-sm">
                About Ucan Oman
              </p>
              <h1 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl lg:mx-0 lg:text-5xl">
                A learning platform inspired by Omani generosity, heritage, and student ambition.
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#f4e8d6] sm:mt-6 sm:text-lg sm:leading-8 lg:mx-0">
                Ucan Oman hosts an online community where college students help
                each other understand course material, prepare for classes, and
                stay supported throughout the semester.
              </p>
            </div>

            <div className="oman-card rounded-3xl p-4 text-[var(--oman-ink)] sm:p-5">
              <div className="oman-photo-frame aspect-[4/5]">
                <img
                  src={themeImages.studentsStudyHall}
                  alt="Students studying together in a library hall"
                />
              </div>
              <p className="mt-4 text-sm leading-7 text-[var(--oman-ink)]/80">
                We imagine academic support as something warm, dignified, and shared across a real community.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-4 rounded-[1.75rem] oman-card p-5 sm:gap-6 sm:p-8 md:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.label} className="rounded-2xl oman-outline-panel p-5 text-center sm:p-6">
              <p className="oman-stat-number text-2xl font-bold sm:text-3xl">{item.number}</p>
              <p className="mt-2 text-sm leading-6 text-[var(--oman-ink)]/75">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-4 sm:px-6 sm:py-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
        <div className="text-center lg:text-left">
          <p className="oman-section-kicker text-xs font-semibold uppercase sm:text-sm">
            Our Mission
          </p>
          <h2 className="oman-title-accent mt-4 text-2xl font-semibold sm:text-3xl">
            Make course help free and community-driven for every college student.
          </h2>
        </div>

        <div className="space-y-5 rounded-[1.75rem] oman-card p-6 text-base leading-7 text-[var(--oman-ink)]/80 sm:p-8 sm:text-lg sm:leading-8">
          <p>
            Ucan Oman exists to give students a free place to find support for
            their college courses through community help, tutoring, and better study resources.
          </p>
          <p>
            The platform combines free individualized tutoring sessions, free
            group tutoring sessions, a library of documents and useful videos,
            and collections of course-based WhatsApp group chats.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="max-w-2xl text-center lg:text-left">
            <p className="oman-section-kicker text-xs font-semibold uppercase sm:text-sm">
              Core Values
            </p>
            <h2 className="oman-title-accent mt-4 text-2xl font-semibold sm:text-3xl">
              The ideas shaping how Ucan Oman supports students.
            </h2>
          </div>

          <div className="mt-10 grid gap-6 sm:mt-12 sm:gap-8 md:grid-cols-3">
            {values.map((value) => (
              <article key={value.title} className="rounded-3xl oman-card p-6 sm:p-8">
                <h3 className="text-xl font-semibold text-[var(--oman-ink)]">{value.title}</h3>
                <p className="mt-4 leading-7 text-[var(--oman-ink)]/75">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="grid items-center gap-6 rounded-[1.75rem] oman-dark-panel px-6 py-10 text-white sm:px-8 sm:py-12 lg:grid-cols-[1fr_0.82fr]">
          <div className="text-center lg:text-left">
            <p className="oman-kicker text-xs font-semibold uppercase sm:text-sm">
              Our Community
            </p>
            <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">
              Students, tutors, and course communities working together to make learning easier.
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-7 text-[#eadfcf] sm:text-lg sm:leading-8">
              Ucan Oman is built for college students who want better explanations,
              free support, and stronger connections around the courses they are taking.
            </p>
          </div>
          <div className="oman-photo-frame aspect-[5/4]">
            <img
              src={themeImages.studentsLibrary}
              alt="Students collaborating in a modern university study environment"
            />
          </div>
        </div>
      </section>

      <footer className="border-t border-[rgba(111,49,29,0.12)] bg-[rgba(255,248,238,0.9)] px-4 py-8 text-center text-sm text-[var(--oman-ink)]/70 sm:px-6">
        Copyright {new Date().getFullYear()} Ucan Oman. Free learning support for everyone.
      </footer>
    </main>
  );
}
