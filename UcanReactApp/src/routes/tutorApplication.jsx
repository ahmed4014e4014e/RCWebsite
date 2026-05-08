import { useState } from "react";
import { Link } from "react-router-dom";
import ActionFeedback from "../components/ActionFeedback";
import {
  createContactMessage,
  uploadContactAttachments,
} from "../lib/contactApi";
import {
  ACCEPTED_UPLOAD_ATTRIBUTE,
  ACCEPTED_UPLOAD_TYPES,
  FILE_SIZE_LIMIT_MB,
  validateUploadSelection,
} from "../lib/fileUploadRules";
import { isSupabaseConfigured } from "../lib/supabase";
import { themeImages } from "../lib/themeImages";

const requiredAttachments = [
  "Academic transcript proving a minimum grade of B+ in the selected course(s) to tutor in",
  "Copy of your Omani ID card",
  "Copy of your university ID card",
];

export default function TutorApplication() {
  const [formValues, setFormValues] = useState({
    fullName: "",
    universityName: "",
    universityId: "",
    majorName: "",
    desiredTutoringCourses: "",
    universityEmail: "",
    phoneNumber: "",
  });
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [submitState, setSubmitState] = useState({
    loading: false,
    type: "idle",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleFileChange = (event) => {
    const incomingFiles = Array.from(event.target.files || []);
    const { validFiles, errorMessage } = validateUploadSelection(incomingFiles);

    setSelectedFiles(validFiles);

    if (errorMessage) {
      event.target.value = "";
      setSubmitState({
        loading: false,
        type: "error",
        message: errorMessage,
      });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!acceptedTerms) {
      setSubmitState({
        loading: false,
        type: "error",
        message: "Please read and agree to the Ucan Oman Platform Policies before submitting your tutor application.",
      });
      return;
    }

    if (!isSupabaseConfigured) {
      setSubmitState({
        loading: false,
        type: "error",
        message: "Supabase is not configured yet, so the tutor application cannot submit right now.",
      });
      return;
    }

    if (selectedFiles.length === 0) {
      setSubmitState({
        loading: false,
        type: "error",
        message: "Please attach the required supporting documents before submitting your tutor application.",
      });
      return;
    }

    setSubmitState({
      loading: true,
      type: "idle",
      message: "",
    });

    try {
      const uploadedFiles = await uploadContactAttachments(selectedFiles);

      const message = [
        `Full name: ${formValues.fullName.trim()}`,
        `University Name: ${formValues.universityName.trim()}`,
        `University ID: ${formValues.universityId.trim()}`,
        `Major Name: ${formValues.majorName.trim()}`,
        `Desired Tutoring Courses: ${formValues.desiredTutoringCourses.trim()}`,
        `University Email: ${formValues.universityEmail.trim()}`,
        `Phone number (WhatsApp): ${formValues.phoneNumber.trim()}`,
      ].join("\n");

      await createContactMessage({
        full_name: formValues.fullName.trim(),
        email: formValues.universityEmail.trim(),
        institute: formValues.universityName.trim(),
        role: "tutor",
        subject: `Tutor Application - ${formValues.fullName.trim()}`,
        message,
        attachment_notes: requiredAttachments.join("\n"),
        attachment_files: uploadedFiles,
      });

      setSubmitState({
        loading: false,
        type: "success",
        message:
          "Your tutor application was submitted successfully. The Ucan Oman team can now review your form and attachments. You will recieve a reply in less than 24 hours",
      });
      setFormValues({
        fullName: "",
        universityName: "",
        universityId: "",
        majorName: "",
        desiredTutoringCourses: "",
        universityEmail: "",
        phoneNumber: "",
      });
      setSelectedFiles([]);
    } catch (error) {
      setSubmitState({
        loading: false,
        type: "error",
        message: error.message || "We could not submit your tutor application right now.",
      });
    }
  };

  return (
    <main className="oman-page min-h-screen text-slate-900">
      <section
        className="oman-hero text-white"
        style={{ backgroundImage: `url(${themeImages.mountainFort})` }}
      >
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-24 sm:px-6 sm:pb-20 sm:pt-28">
          <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
            <div className="text-center lg:text-left">
              <p className="oman-kicker mb-4 text-xs font-semibold uppercase sm:text-sm">
                Tutor Application
              </p>
              <h1 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl lg:mx-0 lg:text-5xl">
                Apply separately before joining the Ucan Oman tutor team.
              </h1>
              <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#f4e8d6] sm:mt-6 sm:text-lg sm:leading-8 lg:mx-0">
                Complete this form with your university details, tutoring courses, and supporting
                documents so the platform can review your tutor application properly.
              </p>
            </div>

            <div className="oman-card rounded-[1.75rem] p-4 text-[var(--oman-ink)] sm:p-5">
              <div className="oman-photo-frame aspect-[4/5]">
                <img
                  src={themeImages.studentsStudyHall}
                  alt="Students in a bright academic study hall"
                />
              </div>
              <p className="mt-4 text-sm leading-7 text-[var(--oman-ink)]/80">
                Tutor applications are reviewed using your academic information and required
                supporting documents.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="rounded-[1.75rem] oman-card p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="oman-section-kicker text-xs font-semibold uppercase sm:text-sm">
                Application Form
              </p>
              <h2 className="oman-title-accent mt-4 text-2xl font-semibold sm:text-3xl">
                Submit your tutor application
              </h2>
            </div>
            <Link
              to="/tutor-access/"
              className="oman-button-secondary inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold transition"
            >
              Back to Tutor Access
            </Link>
          </div>

          <ActionFeedback
            type={submitState.type}
            message={submitState.message}
            title="Tutor application update"
            className="mt-6"
          />

          <form onSubmit={handleSubmit} className="mt-8 space-y-4">
            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-[var(--oman-terracotta-dark)]">
                Full name
              </span>
              <input
                type="text"
                name="fullName"
                value={formValues.fullName}
                onChange={handleChange}
                required
                className="min-h-12 rounded-2xl border border-[rgba(111,49,29,0.14)] bg-[rgba(255,250,244,0.92)] px-4 py-3 text-[var(--oman-ink)] outline-none transition focus:border-[var(--oman-brass)] focus:bg-white"
              />
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-[var(--oman-terracotta-dark)]">
                University Name
              </span>
              <input
                type="text"
                name="universityName"
                value={formValues.universityName}
                onChange={handleChange}
                required
                className="min-h-12 rounded-2xl border border-[rgba(111,49,29,0.14)] bg-[rgba(255,250,244,0.92)] px-4 py-3 text-[var(--oman-ink)] outline-none transition focus:border-[var(--oman-brass)] focus:bg-white"
              />
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-[var(--oman-terracotta-dark)]">
                University ID
              </span>
              <input
                type="text"
                name="universityId"
                value={formValues.universityId}
                onChange={handleChange}
                required
                className="min-h-12 rounded-2xl border border-[rgba(111,49,29,0.14)] bg-[rgba(255,250,244,0.92)] px-4 py-3 text-[var(--oman-ink)] outline-none transition focus:border-[var(--oman-brass)] focus:bg-white"
              />
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-[var(--oman-terracotta-dark)]">
                Major Name
              </span>
              <input
                type="text"
                name="majorName"
                value={formValues.majorName}
                onChange={handleChange}
                required
                className="min-h-12 rounded-2xl border border-[rgba(111,49,29,0.14)] bg-[rgba(255,250,244,0.92)] px-4 py-3 text-[var(--oman-ink)] outline-none transition focus:border-[var(--oman-brass)] focus:bg-white"
              />
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-[var(--oman-terracotta-dark)]">
                Desired Tutoring Courses
              </span>
              <textarea
                name="desiredTutoringCourses"
                value={formValues.desiredTutoringCourses}
                onChange={handleChange}
                rows={4}
                required
                placeholder="List the courses you want to become a tutor in."
                className="rounded-2xl border border-[rgba(111,49,29,0.14)] bg-[rgba(255,250,244,0.92)] px-4 py-3 text-[var(--oman-ink)] outline-none transition focus:border-[var(--oman-brass)] focus:bg-white"
              />
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-[var(--oman-terracotta-dark)]">
                University Email
              </span>
              <input
                type="email"
                name="universityEmail"
                value={formValues.universityEmail}
                onChange={handleChange}
                required
                className="min-h-12 rounded-2xl border border-[rgba(111,49,29,0.14)] bg-[rgba(255,250,244,0.92)] px-4 py-3 text-[var(--oman-ink)] outline-none transition focus:border-[var(--oman-brass)] focus:bg-white"
              />
            </label>

            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-[var(--oman-terracotta-dark)]">
                Phone number (WhatsApp)
              </span>
              <input
                type="text"
                name="phoneNumber"
                value={formValues.phoneNumber}
                onChange={handleChange}
                required
                className="min-h-12 rounded-2xl border border-[rgba(111,49,29,0.14)] bg-[rgba(255,250,244,0.92)] px-4 py-3 text-[var(--oman-ink)] outline-none transition focus:border-[var(--oman-brass)] focus:bg-white"
              />
            </label>

            <div className="rounded-2xl bg-[rgba(244,232,214,0.34)] px-4 py-4 text-[var(--oman-ink)]">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--oman-terracotta)]">
                Required Attachments
              </p>
              <ol className="mt-3 space-y-2 text-sm leading-6 text-[var(--oman-ink)]/80">
                {requiredAttachments.map((item, index) => (
                  <li key={item}>
                    {index + 1}. {item}
                  </li>
                ))}
              </ol>
            </div>

            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-[var(--oman-terracotta-dark)]">
                Attach files
              </span>
              <input
                type="file"
                multiple
                required
                accept={ACCEPTED_UPLOAD_ATTRIBUTE}
                onChange={handleFileChange}
                className="rounded-2xl border border-[rgba(111,49,29,0.14)] bg-[rgba(255,250,244,0.92)] px-4 py-3 text-sm text-[var(--oman-ink)] outline-none transition file:mr-4 file:rounded-xl file:border-0 file:bg-[rgba(197,154,68,0.16)] file:px-4 file:py-2 file:font-semibold file:text-[var(--oman-terracotta-dark)] hover:file:bg-[rgba(197,154,68,0.24)]"
              />
              <p className="text-sm leading-6 text-[var(--oman-ink)]/70">
                Accepted files: {ACCEPTED_UPLOAD_TYPES.join(", ")}. Maximum size:{" "}
                {FILE_SIZE_LIMIT_MB} MB per file.
              </p>
              {selectedFiles.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-1">
                  {selectedFiles.map((file) => (
                    <span
                      key={`${file.name}-${file.size}`}
                      className="rounded-full bg-[rgba(244,232,214,0.44)] px-3 py-2 text-sm font-medium text-[var(--oman-ink)] ring-1 ring-[rgba(111,49,29,0.12)]"
                    >
                      {file.name}
                    </span>
                  ))}
                </div>
              )}
            </label>

            <label className="flex items-start gap-3 rounded-2xl bg-[rgba(244,232,214,0.34)] px-4 py-4 text-sm leading-6 text-[var(--oman-ink)]">
              <input
                type="checkbox"
                checked={acceptedTerms}
                onChange={(event) => setAcceptedTerms(event.target.checked)}
                className="mt-1 h-4 w-4 rounded border-[rgba(111,49,29,0.24)] text-[var(--oman-terracotta)] focus:ring-[var(--oman-brass)]"
                required
              />
              <span>
                I have read and agree to the{" "}
                <Link
                  to="/terms/"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-[var(--oman-terracotta)] underline"
                >
                  Ucan Oman Platform Policies
                </Link>
                .
              </span>
            </label>

            <button
              type="submit"
              disabled={submitState.loading}
              className="oman-button-primary mt-2 inline-flex w-full items-center justify-center rounded-2xl px-6 py-3 text-center font-semibold transition disabled:cursor-not-allowed disabled:opacity-70"
            >
              {submitState.loading ? "Submitting Application..." : "Submit Tutor Application"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
