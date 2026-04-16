import { themeImages } from "../lib/themeImages";

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
    <main className="oman-page min-h-screen text-slate-900">
      <section
        className="oman-hero text-white"
        style={{ backgroundImage: `url(${themeImages.studentsGroup})` }}
      >
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28">
          <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
            <div className="text-center lg:text-left">
              <p className="oman-kicker mb-4 text-xs font-semibold uppercase sm:text-sm">
                Contact Ucan Oman
              </p>
              <h1 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl lg:mx-0 lg:text-5xl">
                Reach a support platform that feels welcoming, local, and student-centered.
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#f4e8d6] sm:mt-6 sm:text-lg sm:leading-8 lg:mx-0">
                Whether you want help finding tutoring, study resources, or the
                right course community, here are the best ways to reach Ucan Oman.
              </p>
            </div>

            <div className="oman-card rounded-[1.75rem] p-4 text-[var(--oman-ink)] sm:p-5">
              <div className="oman-photo-frame aspect-[4/5]">
                <img
                  src={themeImages.heroFort}
                  alt="Traditional Omani fort tower under a bright sky"
                />
              </div>
              <p className="mt-4 text-sm leading-7 text-[var(--oman-ink)]/80">
                We want the platform to feel as dependable and recognizable as the landmarks that shape Oman’s identity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="max-w-2xl text-center lg:text-left">
          <p className="oman-section-kicker text-xs font-semibold uppercase sm:text-sm">
            Other Ways to Reach Us
          </p>
          <h2 className="oman-title-accent mt-4 text-2xl font-semibold sm:text-3xl">
            Clear ways to connect with the Ucan Oman team.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 sm:mt-12 sm:gap-8 md:grid-cols-3">
          {contactMethods.map((method) => (
            <article key={method.title} className="rounded-3xl oman-card p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-[var(--oman-ink)]">{method.title}</h3>
              <p className="mt-4 break-words text-lg font-medium text-[var(--oman-terracotta)]">
                {method.value}
              </p>
              <p className="mt-4 leading-7 text-[var(--oman-ink)]/75">{method.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20">
        <div className="grid items-center gap-6 rounded-[1.75rem] oman-dark-panel px-6 py-10 text-white sm:px-8 sm:py-12 lg:grid-cols-[1fr_0.88fr]">
          <div className="text-center lg:text-left">
            <p className="oman-kicker text-xs font-semibold uppercase sm:text-sm">
              We Are Here to Help
            </p>
            <h2 className="mt-4 text-2xl font-semibold sm:text-3xl">
              Reach out whenever you need better support for your college courses.
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-7 text-[#eadfcf] sm:text-lg sm:leading-8">
              Ucan Oman is here to help students connect with free tutoring,
              stronger learning resources, and course communities that make studying easier.
            </p>
          </div>
          <div className="oman-photo-frame aspect-[5/4]">
            <img
              src={themeImages.studentsStudyHall}
              alt="Students working quietly inside a library"
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
