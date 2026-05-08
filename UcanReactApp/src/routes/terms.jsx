import { themeImages } from "../lib/themeImages";

const termsDocumentUrl = "https://chatgpt.com/s/t_69fe21ebf8388191a29d06903414b12a";

export default function Terms() {
  return (
    <main className="oman-page min-h-screen text-slate-900">
      <section
        className="oman-hero text-white"
        style={{ backgroundImage: `url(${themeImages.heroFort})` }}
      >
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28">
          <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
            <div className="text-center lg:text-left">
              <p className="oman-kicker mb-4 text-xs font-semibold uppercase sm:text-sm">
                Terms of Service
              </p>
              <h1 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl lg:mx-0 lg:text-5xl">
                Read the Ucan Oman agreement before using student or tutor services.
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#f4e8d6] sm:mt-6 sm:text-lg sm:leading-8 lg:mx-0">
                Ucan Oman uses the external agreement document you provided as the platform’s
                Terms of Service reference for student signup and tutor applications.
              </p>
            </div>

            <div className="oman-card rounded-[1.75rem] p-4 text-[var(--oman-ink)] sm:p-5">
              <div className="oman-photo-frame aspect-[4/5]">
                <img
                  src={themeImages.studentsStudyHall}
                  alt="Students reading and studying together"
                />
              </div>
              <p className="mt-4 text-sm leading-7 text-[var(--oman-ink)]/80">
                Please review the agreement carefully before creating a student account or applying
                to become a tutor.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="rounded-[1.75rem] oman-card p-6 sm:p-8">
          <p className="oman-section-kicker text-xs font-semibold uppercase sm:text-sm">
            Agreement Access
          </p>
          <h2 className="oman-title-accent mt-4 text-2xl font-semibold sm:text-3xl">
            Open the official terms document
          </h2>
          <p className="mt-4 leading-7 text-[var(--oman-ink)]/75 sm:text-lg sm:leading-8">
            Use the button below to read the agreement document that governs platform usage and
            tutor applications.
          </p>

          <a
            href={termsDocumentUrl}
            target="_blank"
            rel="noreferrer"
            className="oman-button-primary mt-8 inline-flex items-center justify-center rounded-2xl px-6 py-3 text-center font-semibold transition"
          >
            Open Terms Document
          </a>

          <div className="mt-8 rounded-3xl oman-outline-panel p-5">
            <h3 className="text-lg font-semibold text-[var(--oman-ink)]">When agreement is required</h3>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-[var(--oman-ink)]/75">
              <li>Student users must agree before creating a student account.</li>
              <li>Tutor applicants must agree before submitting the tutor application form.</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
