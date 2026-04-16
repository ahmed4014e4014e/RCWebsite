import { useAuth } from "../context/AuthContext";

export default function Account() {
  const { user, profile } = useAuth();

  return (
    <main className="min-h-screen bg-slate-50 px-4 pb-16 pt-24 text-slate-900 sm:px-6 sm:pb-20 sm:pt-28">
      <section className="mx-auto max-w-5xl">
        <div className="rounded-[1.75rem] bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 px-6 py-10 text-white shadow-xl sm:px-8 sm:py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-100 sm:text-sm">
            Account
          </p>
          <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Welcome back, {profile?.full_name || user?.user_metadata?.full_name || "User"}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-blue-50 sm:text-lg sm:leading-8">
            Your session is protected and active. This page can become the base
            for your future student or tutor dashboard.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-10 grid max-w-5xl gap-8 lg:grid-cols-2">
        <div className="rounded-[1.75rem] bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-700 sm:text-sm">
            Profile Details
          </p>
          <div className="mt-6 space-y-4 text-slate-700">
            <p>
              <span className="font-semibold">Full name:</span>{" "}
              {profile?.full_name || user?.user_metadata?.full_name || "Not set"}
            </p>
            <p>
              <span className="font-semibold">Email:</span> {user?.email || "Not set"}
            </p>
            <p>
              <span className="font-semibold">Role:</span>{" "}
              {profile?.role || user?.user_metadata?.role || "Not set"}
            </p>
            <p>
              <span className="font-semibold">Institute:</span>{" "}
              {profile?.institute || user?.user_metadata?.institute || "Not set"}
            </p>
          </div>
        </div>

        <div className="rounded-[1.75rem] bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-700 sm:text-sm">
            Session Status
          </p>
          <div className="mt-6 space-y-4 text-slate-700">
            <p>
              <span className="font-semibold">User ID:</span> {user?.id}
            </p>
            <p>
              <span className="font-semibold">Email confirmed:</span>{" "}
              {user?.email_confirmed_at ? "Yes" : "No"}
            </p>
            <p>
              <span className="font-semibold">Last sign in:</span>{" "}
              {user?.last_sign_in_at || "Unavailable"}
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
