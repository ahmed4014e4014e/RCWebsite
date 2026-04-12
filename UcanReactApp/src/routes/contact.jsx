const contactMethods = [
  {
    title: "Email",
    value: "20258971@mcbs.edu.om",
    description: "Reach out with questions about tutoring, study resources, or joining the Ucan Oman student community.",
  },
  {
    title: "Phone",
    value: "+968 9575 9446",
    description: "Contact us directly for help with free tutoring sessions, course support, and platform guidance.",
  },
  {
    title: "Location",
    value: "Qurum Beach, Muscat, Oman",
    description: "Ucan Oman serves students online while supporting a growing college learning community from Oman.",
  },
];

export default function Contact() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <section className="bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 text-white">
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28">
          <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
            <div className="text-center lg:text-left">
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-blue-100 sm:text-sm">
                Contact Ucan Oman
              </p>
              <h1 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl lg:mx-0 lg:text-5xl">
                Get in touch about free tutoring, course support, and student communities.
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-blue-50 sm:mt-6 sm:text-lg sm:leading-8 lg:mx-0">
                Whether you want help finding tutoring, study resources, or the
                right course community, here are the best ways to reach Ucan Oman.
              </p>
            </div>

            <div className="rounded-[1.75rem] bg-white/12 p-6 shadow-2xl ring-1 ring-white/20 backdrop-blur-sm sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-100 sm:text-sm">
                Reach us
              </p>
              <h2 className="mt-4 text-xl font-semibold leading-8 sm:text-2xl sm:leading-9">
                Simple contact options for students who need free academic support.
              </h2>
              <div className="mt-6 space-y-4 text-sm leading-7 text-blue-50 sm:text-base">
                <p>Ask about free individual or group tutoring sessions.</p>
                <p>Learn how to access documents, videos, and course support.</p>
                <p>Find the right WhatsApp group or student help community.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="max-w-2xl text-center lg:text-left">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-700 sm:text-sm">
            Other Ways to Reach Us
          </p>
          <h2 className="mt-4 text-2xl font-semibold text-slate-900 sm:text-3xl">
            Clear ways to connect with the Ucan Oman team.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 sm:mt-12 sm:gap-8 md:grid-cols-3">
          {contactMethods.map((method) => (
            <article
              key={method.title}
              className="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8"
            >
              <h3 className="text-xl font-semibold text-slate-900">{method.title}</h3>
              <p className="mt-4 break-words text-lg font-medium text-blue-700">
                {method.value}
              </p>
              <p className="mt-4 leading-7 text-slate-600">{method.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20">
        <div className="rounded-[1.75rem] bg-slate-900 px-6 py-10 text-center text-white shadow-xl sm:px-8 sm:py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300 sm:text-sm">
            We Are Here to Help
          </p>
          <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">
            Reach out whenever you need better support for your college courses.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            Ucan Oman is here to help students connect with free tutoring,
            stronger learning resources, and course communities that make studying easier.
          </p>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-4 py-8 text-center text-sm text-slate-500 sm:px-6">
        Copyright {new Date().getFullYear()} Ucan Oman. Free learning support for everyone.
      </footer>
    </main>
  );
}
