import { Link } from "react-router-dom";

export default function TutorApplicationSignupPanel() {
  return (
    <>
      <p className="oman-section-kicker text-xs font-semibold uppercase sm:text-sm">
        Tutor Application
      </p>
      <h2 className="oman-title-accent mt-4 text-2xl font-semibold">
        Apply before creating a tutor account
      </h2>
      <p className="mt-4 leading-7 text-[var(--oman-ink)]/75">
        Tutor signup is now handled through a separate application review process. Submit your
        academic details and required documents first, then approved tutors can be onboarded into
        the platform.
      </p>
      <div className="mt-6 rounded-2xl bg-[rgba(244,232,214,0.34)] px-4 py-4 text-[var(--oman-ink)]">
        <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--oman-terracotta)]">
          You will need
        </p>
        <ul className="mt-3 space-y-2 text-sm leading-6 text-[var(--oman-ink)]/80">
          <li>Full name and university details</li>
          <li>Your desired tutoring courses</li>
          <li>University email and WhatsApp phone number</li>
          <li>Transcript, Omani ID, and university ID attachments</li>
        </ul>
      </div>
      <Link
        to="/tutor-application/"
        className="oman-button-primary mt-6 inline-flex w-full items-center justify-center rounded-2xl px-6 py-3 text-center font-semibold transition"
      >
        Open Tutor Application Form
      </Link>
    </>
  );
}
