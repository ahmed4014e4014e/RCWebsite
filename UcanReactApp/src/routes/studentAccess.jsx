export default function StudentAccess() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 pb-16 pt-24 text-slate-900 sm:px-6 sm:pb-20 sm:pt-28">
      <section className="mx-auto max-w-5xl">
        <div className="rounded-[1.75rem] bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-500 px-6 py-10 text-white shadow-xl sm:px-8 sm:py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-100 sm:text-sm">
            Student Access
          </p>
          <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Log in or sign up to access student support on Ucan Oman.
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-7 text-blue-50 sm:text-lg sm:leading-8">
            This page is designed for students who want to create an account,
            log in, and access tutoring, course support, and the wider learning community.
          </p>
        </div>
      </section>

      <section className="mx-auto mt-10 grid max-w-5xl gap-8 lg:grid-cols-2">
        <div className="rounded-[1.75rem] bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-700 sm:text-sm">
            Log In
          </p>
          <h2 className="mt-4 text-2xl font-semibold text-slate-900">Welcome back</h2>
          <div className="mt-6 space-y-4">
            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-slate-700">Email</span>
              <input
                type="email"
                placeholder="Enter your email"
                className="min-h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 outline-none transition focus:border-blue-500 focus:bg-white"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-slate-700">Password</span>
              <input
                type="password"
                placeholder="Enter your password"
                className="min-h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 outline-none transition focus:border-blue-500 focus:bg-white"
              />
            </label>
          </div>
          <button
            type="button"
            className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-blue-700 px-6 py-3 text-center font-semibold text-white transition hover:bg-blue-800"
          >
            Log In
          </button>
        </div>

        <div className="rounded-[1.75rem] bg-white p-6 shadow-sm ring-1 ring-slate-200 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-700 sm:text-sm">
            Sign Up
          </p>
          <h2 className="mt-4 text-2xl font-semibold text-slate-900">Create a student account</h2>
          <div className="mt-6 space-y-4">
            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-slate-700">Full Name</span>
              <input
                type="text"
                placeholder="Enter your full name"
                className="min-h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 outline-none transition focus:border-blue-500 focus:bg-white"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-slate-700">Email</span>
              <input
                type="email"
                placeholder="Enter your email"
                className="min-h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 outline-none transition focus:border-blue-500 focus:bg-white"
              />
            </label>
            <label className="flex flex-col gap-2">
              <span className="text-sm font-semibold text-slate-700">Password</span>
              <input
                type="password"
                placeholder="Create a password"
                className="min-h-12 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 outline-none transition focus:border-blue-500 focus:bg-white"
              />
            </label>
          </div>
          <button
            type="button"
            className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-cyan-400 px-6 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Create Account
          </button>
        </div>
      </section>
    </main>
  );
}
