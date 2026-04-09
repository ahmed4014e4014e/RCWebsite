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

const tutoringCourses = [
  "MCBS ENG 213",
  "MCBS ICT 128",
  "MCBS MAT 255",
  "MCBS COSC 1301",
  "MCBS CPT 220",
];

const serviceHighlights = [
  { number: "Free", label: "tutoring and course support" },
  { number: "5", label: "courses currently available for tutoring" },
  { number: "Online", label: "community help for college students" },
];

export default function Services() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 text-white">
        <div className="mx-auto max-w-6xl px-6 pb-20 pt-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-100">
                Our Services
              </p>
              <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
                Free services designed to help students understand college courses better.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-50">
                Ucan Oman gives students free access to tutoring, community help,
                course resources, and study groups built around real college needs.
              </p>
            </div>

            <div className="rounded-[2rem] bg-white/12 p-8 shadow-2xl ring-1 ring-white/20 backdrop-blur-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-100">
                What you get
              </p>
              <h2 className="mt-4 text-2xl font-semibold leading-9">
                Support that stays free and easy to reach.
              </h2>
              <div className="mt-6 space-y-4 text-blue-50">
                <p>Free individualized tutoring and free group tutoring.</p>
                <p>Documents and useful videos for stronger understanding.</p>
                <p>WhatsApp groups and student communities for ongoing help.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-6 rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200 md:grid-cols-3">
          {serviceHighlights.map((item) => (
            <div key={item.label} className="rounded-2xl bg-slate-50 p-6 text-center">
              <p className="text-3xl font-bold text-blue-700">{item.number}</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">
            Free Tutoring With Ahmed
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900">
            Book free tutoring for the courses currently offered.
          </h2>
          <p className="mt-4 text-lg leading-8 text-slate-600">
            One-on-one tutoring is currently available for the following MCBS
            courses. Students can use the booking link below to schedule a session.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <h3 className="text-xl font-semibold text-slate-900">
              Available Courses
            </h3>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {tutoringCourses.map((course) => (
                <div
                  key={course}
                  className="rounded-2xl bg-slate-50 px-5 py-4 text-center font-medium text-slate-700 ring-1 ring-slate-200"
                >
                  {course}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-slate-900 p-8 text-white shadow-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Booking Link
            </p>
            <h3 className="mt-4 text-2xl font-semibold">
              Schedule a free tutoring session with Ahmed Al Ruqaishi.
            </h3>
            <p className="mt-4 leading-7 text-slate-300">
              Use the appointment scheduler to choose a time that works for you
              and book tutoring for one of the listed courses.
            </p>
            <a
              href="https://calendly.com/ahmed4014e/30min"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              book tutor Ahmed Al Ruqaishi
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">
            What Else We Offer
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900">
            More free ways for students to study better and support each other.
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200"
            >
              <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">
            Why It Matters
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900">
            Students need support that is free, practical, and connected to real coursework.
          </h2>
        </div>

        <div className="space-y-5 text-lg leading-8 text-slate-600">
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

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-[2rem] bg-slate-900 px-8 py-12 text-center text-white shadow-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            Start Your Journey
          </p>
          <h2 className="mt-4 text-3xl font-semibold">
            Explore free tutoring, resources, and course communities today.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Ucan Oman is built to help students find support faster and improve
            their understanding across the courses they are taking.
          </p>
          <button className="mt-8 rounded-2xl bg-cyan-400 px-8 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300">
            Explore Courses
          </button>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-6 py-8 text-center text-sm text-slate-500">
        Copyright {new Date().getFullYear()} Ucan Oman. Free learning support for everyone.
      </footer>
    </main>
  );
}
