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
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28">
          <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
            <div className="text-center lg:text-left">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-blue-100 sm:text-sm">
                Our Services
              </p>
              <h1 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl lg:mx-0 lg:text-5xl">
                Free services designed to help students understand college courses better.
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-blue-50 sm:mt-6 sm:text-lg sm:leading-8 lg:mx-0">
                Ucan Oman gives students free access to tutoring, community help,
                course resources, and study groups built around real college needs.
              </p>
            </div>

            <div className="rounded-[1.75rem] bg-white/12 p-6 shadow-2xl ring-1 ring-white/20 backdrop-blur-sm sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-100 sm:text-sm">
                What you get
              </p>
              <h2 className="mt-4 text-xl font-semibold leading-8 sm:text-2xl sm:leading-9">
                Support that stays free and easy to reach.
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-7 text-blue-50 sm:text-base">
                <p>Free individualized tutoring and free group tutoring.</p>
                <p>Documents and useful videos for stronger understanding.</p>
                <p>WhatsApp groups and student communities for ongoing help.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="grid gap-4 rounded-[1.75rem] bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:gap-6 sm:p-8 md:grid-cols-3">
          {serviceHighlights.map((item) => (
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
            Free Tutoring With Ahmed
          </p>
          <h2 className="mt-4 text-2xl font-semibold text-slate-900 sm:text-3xl">
            Book free tutoring for the courses currently offered.
          </h2>
          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            One-on-one tutoring is currently available for the following MCBS
            courses. Students can use the booking link below to schedule a session.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:mt-12 sm:gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-[1.75rem] bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
            <h3 className="text-xl font-semibold text-slate-900">
              Available Courses
            </h3>
            <div className="mt-6 grid gap-4">
              {tutoringCourses.map((course) => (
                <div
                  key={course}
                  className="rounded-2xl bg-slate-50 px-5 py-4 text-center font-medium text-slate-700 ring-1 ring-slate-200 sm:grid sm:min-h-16 sm:place-items-center sm:text-left"
                >
                  {course}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[1.75rem] bg-slate-900 p-6 text-white shadow-xl sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300 sm:text-sm">
              Booking Link
            </p>
            <h3 className="mt-4 text-xl font-semibold sm:text-2xl">
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
              className="mt-8 inline-flex w-full items-center justify-center rounded-2xl bg-cyan-400 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-300 sm:w-auto"
            >
              book tutor Ahmed Al Ruqaishi
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-4 sm:px-6 sm:py-8">
        <div className="max-w-2xl text-center lg:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-700 sm:text-sm">
            What Else We Offer
          </p>
          <h2 className="mt-4 text-2xl font-semibold text-slate-900 sm:text-3xl">
            More free ways for students to study better and support each other.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 sm:mt-12 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8"
            >
              <h3 className="text-xl font-semibold text-slate-900">{service.title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-10">
        <div className="text-center lg:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-700 sm:text-sm">
            Why It Matters
          </p>
          <h2 className="mt-4 text-2xl font-semibold text-slate-900 sm:text-3xl">
            Students need support that is free, practical, and connected to real coursework.
          </h2>
        </div>

        <div className="space-y-5 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
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
        <div className="rounded-[1.75rem] bg-slate-900 px-6 py-10 text-center text-white shadow-xl sm:px-8 sm:py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300 sm:text-sm">
            Start Your Journey
          </p>
          <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">
            Explore free tutoring, resources, and course communities today.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            Ucan Oman is built to help students find support faster and improve
            their understanding across the courses they are taking.
          </p>
          <button className="mt-8 w-full rounded-2xl bg-cyan-400 px-8 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300 sm:w-auto">
            Explore Courses
          </button>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-4 py-8 text-center text-sm text-slate-500 sm:px-6">
        Copyright {new Date().getFullYear()} Ucan Oman. Free learning support for everyone.
      </footer>
    </main>
  );
}
