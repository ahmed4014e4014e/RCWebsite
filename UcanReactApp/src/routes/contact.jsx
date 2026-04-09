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
        <div className="mx-auto max-w-6xl px-6 pb-20 pt-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-100">
                Contact Ucan Oman
              </p>
              <h1 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl">
                Get in touch about free tutoring, course support, and student communities.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-50">
                Whether you want help finding tutoring, study resources, or the
                right course community, here are the best ways to reach Ucan Oman.
              </p>
            </div>

            <div className="rounded-[2rem] bg-white/12 p-8 shadow-2xl ring-1 ring-white/20 backdrop-blur-sm">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-100">
                Reach us
              </p>
              <h2 className="mt-4 text-2xl font-semibold leading-9">
                Simple contact options for students who need free academic support.
              </h2>
              <div className="mt-6 space-y-4 text-blue-50">
                <p>Ask about free individual or group tutoring sessions.</p>
                <p>Learn how to access documents, videos, and course support.</p>
                <p>Find the right WhatsApp group or student help community.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-700">
            Other Ways to Reach Us
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900">
            Clear ways to connect with the Ucan Oman team.
          </h2>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {contactMethods.map((method) => (
            <article
              key={method.title}
              className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200"
            >
              <h3 className="text-xl font-semibold text-slate-900">{method.title}</h3>
              <p className="mt-4 text-lg font-medium text-blue-700">{method.value}</p>
              <p className="mt-4 leading-7 text-slate-600">{method.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-20">
        <div className="rounded-[2rem] bg-slate-900 px-8 py-12 text-center text-white shadow-xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            We Are Here to Help
          </p>
          <h2 className="mt-4 text-3xl font-semibold">
            Reach out whenever you need better support for your college courses.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            Ucan Oman is here to help students connect with free tutoring,
            stronger learning resources, and course communities that make studying easier.
          </p>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white px-6 py-8 text-center text-sm text-slate-500">
        Copyright {new Date().getFullYear()} Ucan Oman. Free learning support for everyone.
      </footer>
    </main>
  );
}
