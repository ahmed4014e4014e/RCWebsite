import { useState } from "react";
import { supabase, isSupabaseConfigured } from "../lib/supabase";

export default function AuthAccessPage({
  audienceLabel,
  title,
  description,
  signupHeading,
  role,
}) {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupInstitute, setSignupInstitute] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);
  const [signupLoading, setSignupLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("info");

  const showMessage = (type, text) => {
    setMessageType(type);
    setMessage(text);
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    if (!isSupabaseConfigured || !supabase) {
      showMessage(
        "error",
        "Supabase is not configured yet. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env.local."
      );
      return;
    }

    setLoginLoading(true);
    setMessage("");

    const { error } = await supabase.auth.signInWithPassword({
      email: loginEmail,
      password: loginPassword,
    });

    if (error) {
      showMessage("error", error.message);
      setLoginLoading(false);
      return;
    }

    showMessage("success", "Login successful.");
    setLoginLoading(false);
  };

  const handleSignup = async (event) => {
    event.preventDefault();

    if (!isSupabaseConfigured || !supabase) {
      showMessage(
        "error",
        "Supabase is not configured yet. Add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env.local."
      );
      return;
    }

    setSignupLoading(true);
    setMessage("");

    const { data, error } = await supabase.auth.signUp({
      email: signupEmail,
      password: signupPassword,
      options: {
        data: {
          full_name: signupName,
          role,
          institute: signupInstitute,
        },
      },
    });

    if (error) {
      showMessage("error", error.message);
      setSignupLoading(false);
      return;
    }

    const userId = data.user?.id;
    const hasSession = Boolean(data.session);

    if (userId && hasSession) {
      const { error: profileError } = await supabase.from("profiles").upsert({
        id: userId,
        full_name: signupName,
        role,
        institute: signupInstitute,
        email: signupEmail,
      });

      if (profileError) {
        showMessage(
          "error",
          `Account created, but profile sync failed: ${profileError.message}`
        );
        setSignupLoading(false);
        return;
      }
    }

    if (data.session) {
      showMessage("success", "Account created successfully.");
    } else {
      showMessage(
        "success",
        "Account created. Check your email for confirmation before logging in."
      );
    }

    setSignupLoading(false);
  };

  return (
    <main className="min-h-screen bg-slate-50 px-4 pb-16 pt-24 text-slate-900 sm:px-6 sm:pb-20 sm:pt-28">
      <section className="mx-auto max-w-5xl">
        <div className="rounded-[1.75rem] bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 px-6 py-10 text-white shadow-xl sm:px-8 sm:py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-100 sm:text-sm">
            {audienceLabel}
          </p>
          <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-blue-50 sm:text-lg sm:leading-8">
            {description}
          </p>
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-5xl">
        {!isSupabaseConfigured && (
          <div className="rounded-3xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm leading-6 text-amber-900">
            Supabase is not configured yet. Add `VITE_SUPABASE_URL` and
            `VITE_SUPABASE_ANON_KEY` to `.env.local` before testing auth.
          </div>
        )}

        {message && (
          <div
            className={[
              "mt-6 rounded-3xl px-5 py-4 text-sm leading-6",
              messageType === "error"
                ? "border border-rose-200 bg-rose-50 text-rose-800"
                : "border border-emerald-200 bg-emerald-50 text-emerald-800",
            ].join(" ")}
          >
            {message}
          </div>
        )}
      </section>

      <section className="mx-auto mt-10 grid max-w-5xl gap-8 lg:grid-cols-2">
        <div className="rounded-[1.75rem] bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-700 sm:text-sm">
            Log In
          </p>
          <h2 className="mt-4 text-2xl font-semibold text-slate-900">Welcome back</h2>
          <form className="mt-6 space-y-4" onSubmit={handleLogin}>
            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-slate-700">Email</span>
              <input
                type="email"
                placeholder="Enter your email"
                value={loginEmail}
                onChange={(event) => setLoginEmail(event.target.value)}
                className="min-h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 outline-none transition focus:border-blue-500 focus:bg-white"
                required
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-slate-700">Password</span>
              <input
                type="password"
                placeholder="Enter your password"
                value={loginPassword}
                onChange={(event) => setLoginPassword(event.target.value)}
                className="min-h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 outline-none transition focus:border-blue-500 focus:bg-white"
                required
              />
            </label>
            <button
              type="submit"
              disabled={loginLoading}
              className="mt-2 inline-flex w-full items-center justify-center rounded-2xl bg-blue-700 px-6 py-3 text-center font-semibold text-white transition hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loginLoading ? "Logging In..." : "Log In"}
            </button>
          </form>
        </div>

        <div className="rounded-[1.75rem] bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-700 sm:text-sm">
            Sign Up
          </p>
          <h2 className="mt-4 text-2xl font-semibold text-slate-900">{signupHeading}</h2>
          <form className="mt-6 space-y-4" onSubmit={handleSignup}>
            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-slate-700">Full Name</span>
              <input
                type="text"
                placeholder="Enter your full name"
                value={signupName}
                onChange={(event) => setSignupName(event.target.value)}
                className="min-h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 outline-none transition focus:border-blue-500 focus:bg-white"
                required
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-slate-700">Institute</span>
              <input
                type="text"
                placeholder="Enter your institute name"
                value={signupInstitute}
                onChange={(event) => setSignupInstitute(event.target.value)}
                className="min-h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 outline-none transition focus:border-blue-500 focus:bg-white"
                required
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-slate-700">Email</span>
              <input
                type="email"
                placeholder="Enter your email"
                value={signupEmail}
                onChange={(event) => setSignupEmail(event.target.value)}
                className="min-h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 outline-none transition focus:border-blue-500 focus:bg-white"
                required
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-slate-700">Password</span>
              <input
                type="password"
                placeholder="Create a password"
                value={signupPassword}
                onChange={(event) => setSignupPassword(event.target.value)}
                className="min-h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 outline-none transition focus:border-blue-500 focus:bg-white"
                required
              />
            </label>
            <button
              type="submit"
              disabled={signupLoading}
              className="mt-2 inline-flex w-full items-center justify-center rounded-2xl bg-cyan-400 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {signupLoading ? "Creating Account..." : "Create Account"}
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
