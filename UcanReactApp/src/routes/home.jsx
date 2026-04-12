import { Link } from "react-router-dom";

const features = [
  {
    title: "Free For Everyone",
    description:
      "Ucan Oman is completely free of charge, so every college student can access help without worrying about cost.",
  },
  {
    title: "Student Community",
    description:
      "The platform hosts an online community of college students helping each other in college courses every day.",
  },
  {
    title: "Better Course Support",
    description:
      "Students can find tutoring, study materials, useful videos, and course WhatsApp groups in one place.",
  },
];

const stats = [
  { number: "100%", label: "free access for all students" },
  { number: "1:1", label: "individual tutoring sessions" },
  { number: "Group", label: "shared tutoring and course communities" },
];

const steps = [
  {
    title: "Join The Community",
    description:
      "Connect with college students who are ready to help each other understand assignments, lectures, and exams.",
  },
  {
    title: "Book Free Tutoring",
    description:
      "Schedule individualized tutoring sessions for free or attend free group tutoring sessions for shared learning.",
  },
  {
    title: "Study Smarter",
    description:
      "Access documents, useful videos, and course-based WhatsApp groups to improve your understanding of course material.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 text-white">
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28">
          <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
            <div className="text-center lg:text-left">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-blue-100 sm:text-sm">
                Welcome to Ucan Oman
              </p>
              <h1 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl lg:mx-0 lg:text-5xl">
                A free platform where college students help each other succeed.
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-blue-50 sm:mt-6 sm:text-lg sm:leading-8 lg:mx-0">
                Ucan Oman is an online platform that brings students together to
                support each other in college courses through free tutoring,
                shared resources, and course communities.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:justify-start">
                <Link
                  to="/services#tutor-directory"
                  className="w-full rounded-2xl bg-white px-6 py-3 text-center font-semibold text-blue-700 shadow-lg transition hover:bg-blue-50 sm:w-auto"
                >
                  Explore Services
                </Link>
              </div>
            </div>

            <div className="rounded-[1.75rem] bg-white/12 p-6 shadow-2xl ring-1 ring-white/20 backdrop-blur-sm sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-100 sm:text-sm">
                Why Ucan Oman
              </p>
              <h2 className="mt-4 text-xl font-semibold leading-8 sm:text-2xl sm:leading-9">
                Free academic help built around real college needs.
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-7 text-blue-50 sm:text-base">
                <p>Join a student community focused on helping each other.</p>
                <p>Attend free individual or group tutoring sessions.</p>
                <p>Use study documents, useful videos, and WhatsApp groups.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-4 rounded-[1.75rem] bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:gap-6 sm:p-8 md:grid-cols-3">
          {stats.map((item) => (
            <div key={item.label} className="rounded-2xl bg-slate-50 p-5 text-center sm:p-6">
              <p className="text-2xl font-bold text-blue-700 sm:text-3xl">{item.number}</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-4 sm:px-6 sm:py-8">
        <div className="max-w-2xl text-center lg:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-700 sm:text-sm">
            Why Choose Ucan Oman
          </p>
          <h2 className="mt-4 text-2xl font-semibold text-slate-900 sm:text-3xl">
            A simple way to find free support for your college courses.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 sm:mt-12 sm:gap-8 md:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8"
            >
              <h3 className="text-xl font-semibold text-slate-900">{feature.title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
        <div className="text-center lg:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-700 sm:text-sm">
            How It Works
          </p>
          <h2 className="mt-4 text-2xl font-semibold text-slate-900 sm:text-3xl">
            Three simple ways to get better support in your courses.
          </h2>
        </div>

        <div className="space-y-5 sm:space-y-6">
          {steps.map((step) => (
            <div
              key={step.title}
              className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-7"
            >
              <h3 className="text-xl font-semibold text-slate-900">{step.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20">
        <div className="rounded-[1.75rem] bg-slate-900 px-6 py-10 text-center text-white shadow-xl sm:px-8 sm:py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300 sm:text-sm">
            Start For Free
          </p>
          <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">
            Join a learning space where tutoring, resources, and community support cost nothing.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            Ucan Oman gives students free access to individualized tutoring,
            group sessions, helpful documents, useful videos, and course WhatsApp groups.
          </p>
          <Link
            to="/services#tutor-directory"
            className="mt-8 w-full rounded-2xl bg-cyan-400 px-8 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-300 sm:w-auto"
          >
            Join Now
          </Link>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-4 py-8 text-center text-sm text-slate-500 sm:px-6">
        Copyright {new Date().getFullYear()} Ucan Oman. Free learning support for everyone.
      </footer>
    </main>
  );
}
