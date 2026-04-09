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
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 text-white">
        <div className="mx-auto max-w-6xl px-6 pb-20 pt-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-100">
                About Ucan Oman
              </p>
              <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
                A free online platform built around students helping students.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-50">
                Ucan Oman hosts an online community where college students help
                each other understand course material, prepare for classes, and
                stay supported throughout the semester.
              </p>
            </div>

            <div className="rounded-3xl bg-white/12 p-8 shadow-2xl ring-1 ring-white/20 backdrop-blur-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-100">
                What we believe
              </p>
              <p className="mt-4 text-2xl font-semibold leading-9">
                Academic support should be free, useful, and shared within a strong student community.
              </p>
              <p className="mt-4 text-base leading-7 text-blue-50">
                Students learn better when they can ask questions, find help
                quickly, and support each other through real course challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200 md:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.label} className="rounded-2xl bg-slate-50 p-6 text-center">
              <p className="text-3xl font-bold text-blue-700">{item.number}</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">
            Our Mission
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900">
            Make course help free and community-driven for every college student.
          </h2>
        </div>

        <div className="space-y-5 text-lg leading-8 text-slate-600">
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

      <section className="bg-white py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">
              Core Values
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900">
              The ideas shaping how Ucan Oman supports students.
            </h2>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {values.map((value) => (
              <article
                key={value.title}
                className="rounded-3xl bg-slate-50 p-8 shadow-sm ring-1 ring-slate-200"
              >
                <h3 className="text-xl font-semibold text-slate-900">{value.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="rounded-[2rem] bg-slate-900 px-8 py-12 text-center text-white shadow-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Our Community
          </p>
          <h2 className="mt-4 text-3xl font-semibold">
            Students, tutors, and course communities working together to make learning easier.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Ucan Oman is built for college students who want better explanations,
            free support, and stronger connections around the courses they are taking.
          </p>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-6 py-8 text-center text-sm text-slate-500">
        Copyright {new Date().getFullYear()} Ucan Oman. Free learning support for everyone.
      </footer>
    </main>
  );
}
