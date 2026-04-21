import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { fetchTutorTutoringRequests } from "../lib/tutoringApi";
import { themeImages } from "../lib/themeImages";

const tutorActions = [
  {
    title: "View Tutoring Services",
    description: "Review how tutoring appears on the public services page.",
    to: "/services/#tutor-directory",
    action: "Open Services",
  },
  {
    title: "Support Students",
    description: "Use the contact page if you want to coordinate new tutoring support or updates.",
    to: "/contact/",
    action: "Open Contact",
  },
];

export default function TutorDashboard() {
  const { user, profile } = useAuth();
  const name = profile?.full_name || user?.user_metadata?.full_name || "Tutor";
  const institute = profile?.institute || user?.user_metadata?.institute || "Not set yet";
  const [requests, setRequests] = useState([]);
  const [requestLoading, setRequestLoading] = useState(true);
  const [requestError, setRequestError] = useState("");

  useEffect(() => {
    let ignore = false;

    const loadRequests = async () => {
      if (!user?.id) {
        setRequests([]);
        setRequestLoading(false);
        return;
      }

      setRequestLoading(true);
      setRequestError("");

      try {
        const results = await fetchTutorTutoringRequests(user.id);

        if (!ignore) {
          setRequests(results);
        }
      } catch (error) {
        if (!ignore) {
          setRequestError(error.message || "Unable to load tutoring requests right now.");
        }
      } finally {
        if (!ignore) {
          setRequestLoading(false);
        }
      }
    };

    loadRequests();

    return () => {
      ignore = true;
    };
  }, [user?.id]);

  const requestStats = useMemo(() => {
    return {
      total: requests.length,
      pending: requests.filter((request) => request.status === "pending").length,
      privateCount: requests.filter((request) => request.session_type === "private").length,
    };
  }, [requests]);

  const formatSubmittedAt = (value) => {
    if (!value) {
      return "Unknown";
    }

    return new Date(value).toLocaleString("en-OM", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
    });
  };

  return (
    <main className="oman-page min-h-screen px-4 pb-16 pt-24 text-slate-900 sm:px-6 sm:pb-20 sm:pt-28">
      <section className="mx-auto max-w-6xl">
        <div
          className="oman-hero overflow-hidden rounded-[1.75rem] px-6 py-10 text-white shadow-xl sm:px-8 sm:py-12"
          style={{ backgroundImage: `url(${themeImages.heroFort})` }}
        >
          <div className="grid items-center gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <p className="oman-kicker text-xs font-semibold uppercase sm:text-sm">
                Tutor Dashboard
              </p>
              <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
                Welcome, {name}
              </h1>
              <p className="mt-5 max-w-3xl text-base leading-7 text-[#f4e8d6] sm:text-lg sm:leading-8">
                Your tutor session is protected. This dashboard is ready to become
                the starting point for tutor tools, availability, and future teaching workflows.
              </p>
            </div>
            <div className="oman-card rounded-3xl p-4 text-[var(--oman-ink)]">
              <div className="oman-photo-frame aspect-[4/3]">
                <img src={themeImages.mountainFort} alt="Historic Omani fort with mountain scenery" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-10 grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[1.75rem] oman-card p-6 sm:p-8">
          <p className="oman-section-kicker text-xs font-semibold uppercase sm:text-sm">
            Profile
          </p>
          <div className="mt-6 space-y-4 text-[var(--oman-ink)]/80">
            <p>
              <span className="font-semibold">Full name:</span> {name}
            </p>
            <p>
              <span className="font-semibold">Email:</span> {user?.email || "Not set"}
            </p>
            <p>
              <span className="font-semibold">Institute:</span> {institute}
            </p>
            <p>
              <span className="font-semibold">Role:</span> Tutor
            </p>
          </div>
        </div>

        <div className="rounded-[1.75rem] oman-card p-6 sm:p-8">
          <p className="oman-section-kicker text-xs font-semibold uppercase sm:text-sm">
            Tutor Actions
          </p>
          <div className="mt-6 grid gap-4">
            {tutorActions.map((item) => (
              <article key={item.title} className="rounded-3xl oman-outline-panel p-5">
                <h2 className="text-lg font-semibold text-[var(--oman-ink)]">{item.title}</h2>
                <p className="mt-3 leading-7 text-[var(--oman-ink)]/75">{item.description}</p>
                <Link
                  to={item.to}
                  className="oman-button-secondary mt-5 inline-flex items-center justify-center rounded-2xl px-5 py-3 font-semibold transition"
                >
                  {item.action}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto mt-8 max-w-6xl">
        <div className="rounded-[1.75rem] oman-card p-6 sm:p-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="oman-section-kicker text-xs font-semibold uppercase sm:text-sm">
                Tutor Requests
              </p>
              <h2 className="oman-title-accent mt-4 text-2xl font-semibold sm:text-3xl">
                View tutoring requests submitted for your tutoring sessions.
              </h2>
            </div>
            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="rounded-2xl bg-[rgba(244,232,214,0.42)] px-3 py-3">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--oman-terracotta)]">
                  Total
                </p>
                <p className="mt-2 text-xl font-bold text-[var(--oman-ink)]">{requestStats.total}</p>
              </div>
              <div className="rounded-2xl bg-[rgba(244,232,214,0.42)] px-3 py-3">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--oman-terracotta)]">
                  Pending
                </p>
                <p className="mt-2 text-xl font-bold text-[var(--oman-ink)]">{requestStats.pending}</p>
              </div>
              <div className="rounded-2xl bg-[rgba(244,232,214,0.42)] px-3 py-3">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--oman-terracotta)]">
                  Private
                </p>
                <p className="mt-2 text-xl font-bold text-[var(--oman-ink)]">{requestStats.privateCount}</p>
              </div>
            </div>
          </div>

          {requestLoading ? (
            <div className="mt-8 rounded-3xl oman-outline-panel p-6 text-center">
              <h3 className="text-xl font-semibold text-[var(--oman-ink)]">Loading tutoring requests...</h3>
              <p className="mt-4 leading-7 text-[var(--oman-ink)]/75">
                Fetching the latest student requests assigned to your tutor account.
              </p>
            </div>
          ) : requestError ? (
            <div className="mt-8 rounded-3xl border border-[rgba(155,77,49,0.22)] bg-[rgba(255,239,232,0.95)] p-6 text-[var(--oman-terracotta-dark)]">
              <h3 className="text-xl font-semibold">Unable to load tutoring requests</h3>
              <p className="mt-4 leading-7">{requestError}</p>
            </div>
          ) : requests.length === 0 ? (
            <div className="mt-8 rounded-3xl oman-outline-panel p-6 text-center">
              <h3 className="text-xl font-semibold text-[var(--oman-ink)]">No tutoring requests yet</h3>
              <p className="mt-4 leading-7 text-[var(--oman-ink)]/75">
                When students submit new requests for your tutoring sessions, they will appear here.
              </p>
            </div>
          ) : (
            <div className="mt-8 grid gap-4">
              {requests.map((request) => (
                <article key={request.id} className="rounded-3xl oman-outline-panel p-5 sm:p-6">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-[var(--oman-ink)]">
                        {request.course?.code || "Course"}{" "}
                        <span className="text-[var(--oman-ink)]/60">
                          - {request.course?.title || "Unknown title"}
                        </span>
                      </h3>
                      <p className="mt-2 text-sm text-[var(--oman-ink)]/70">
                        Institute {request.institute_name_snapshot || "Not provided"}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span className="rounded-full bg-[rgba(197,154,68,0.12)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--oman-terracotta-dark)]">
                        {request.session_type}
                      </span>
                      <span className="rounded-full bg-[rgba(155,77,49,0.12)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--oman-terracotta-dark)]">
                        {request.status}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 grid gap-2 text-sm leading-6 text-[var(--oman-ink)]/75 sm:grid-cols-2">
                    <p>
                      <span className="font-semibold text-[var(--oman-ink)]">Submitted:</span>{" "}
                      {formatSubmittedAt(request.created_at)}
                    </p>
                    <p>
                      <span className="font-semibold text-[var(--oman-ink)]">Attachments:</span>{" "}
                      {Array.isArray(request.attachment_files) ? request.attachment_files.length : 0}
                    </p>
                  </div>

                  <div className="mt-5 rounded-2xl bg-[rgba(255,252,247,0.92)] px-4 py-4 text-[var(--oman-ink)] ring-1 ring-[rgba(111,49,29,0.1)]">
                    <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--oman-terracotta)]">
                      Topics Need Help With
                    </p>
                    <p className="mt-3 whitespace-pre-wrap leading-7 text-[var(--oman-ink)]/80">
                      {request.topics_needed_help_with}
                    </p>
                  </div>

                  {(request.attachment_notes ||
                    (Array.isArray(request.attachment_files) && request.attachment_files.length > 0)) && (
                    <div className="mt-4 rounded-2xl bg-[rgba(244,232,214,0.34)] px-4 py-4 text-[var(--oman-ink)]">
                      <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--oman-terracotta)]">
                        Attachment Details
                      </p>
                      {request.attachment_notes && (
                        <p className="mt-3 whitespace-pre-wrap leading-7 text-[var(--oman-ink)]/80">
                          {request.attachment_notes}
                        </p>
                      )}
                      {Array.isArray(request.attachment_files) && request.attachment_files.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {request.attachment_files.map((file) => (
                            <span
                              key={file.path || file.name}
                              className="rounded-full bg-[rgba(255,252,247,0.98)] px-3 py-2 text-sm font-medium text-[var(--oman-ink)] ring-1 ring-[rgba(111,49,29,0.12)]"
                            >
                              {file.name || "Attachment"}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
