import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

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

  return (
    <main className="min-h-screen bg-slate-50 px-4 pb-16 pt-24 text-slate-900 sm:px-6 sm:pb-20 sm:pt-28">
      <section className="mx-auto max-w-6xl">
        <div className="rounded-[1.75rem] bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-600 px-6 py-10 text-white shadow-xl sm:px-8 sm:py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200 sm:text-sm">
            Tutor Dashboard
          </p>
          <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Welcome, {name}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-slate-200 sm:text-lg sm:leading-8">
            Your tutor session is protected. This dashboard is ready to become
            the starting point for tutor tools, availability, and future teaching workflows.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-10 grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[1.75rem] bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-600 sm:text-sm">
            Profile
          </p>
          <div className="mt-6 space-y-4 text-slate-700">
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

        <div className="rounded-[1.75rem] bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-600 sm:text-sm">
            Tutor Actions
          </p>
          <div className="mt-6 grid gap-4">
            {tutorActions.map((item) => (
              <article key={item.title} className="rounded-3xl bg-slate-50 p-5">
                <h2 className="text-lg font-semibold text-slate-900">{item.title}</h2>
                <p className="mt-3 leading-7 text-slate-600">{item.description}</p>
                <Link
                  to={item.to}
                  className="mt-5 inline-flex items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-slate-800"
                >
                  {item.action}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
