import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { getDashboardPath, getUserRole } from "../lib/authRouting";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { user, profile, signOut, loading } = useAuth();
  const role = getUserRole(profile, user);

  const baseLinks = [
    { name: "Home", to: "/home/" },
    { name: "About", to: "/about/" },
    { name: "Services", to: "/services/" },
    { name: "Contact", to: "/contact/" },
  ];
  const guestLinks = [
    { name: "Student Access", to: "/student-access/" },
    { name: "Tutor Access", to: "/tutor-access/" },
  ];
  const memberLinks = [{ name: "Dashboard", to: getDashboardPath(role) }];
  const links = [...baseLinks, ...(user ? memberLinks : guestLinks)];

  const navLinkClass = ({ isActive }) =>
    [
      "transition duration-200",
      isActive ? "text-blue-700" : "text-slate-700 hover:text-blue-600",
    ].join(" ");

  return (
    <>
      <nav className="fixed top-0 left-0 z-50 w-full border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6">
          <h1 className="text-lg font-bold sm:text-2xl">Ucan Oman</h1>

          <div className="hidden items-center gap-6 md:flex">
            {user && (
              <div className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                {profile?.role || "member"}
              </div>
            )}

            <ul className="flex items-center gap-8 text-lg">
              {links.map((link) => (
                <li key={link.name}>
                  <NavLink to={link.to} className={navLinkClass}>
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>

            {!loading && user && (
              <button
                type="button"
                onClick={signOut}
                className="rounded-2xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
              >
                Logout
              </button>
            )}
          </div>

          <button
            onClick={() => setOpen((value) => !value)}
            className="rounded-xl border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 md:hidden"
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>

        {open && (
          <div className="border-t border-slate-200 bg-white px-4 py-4 shadow-md md:hidden">
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    [
                      "rounded-2xl px-4 py-3 text-base font-medium transition",
                      isActive
                        ? "bg-blue-50 text-blue-700"
                        : "text-slate-700 hover:bg-slate-50 hover:text-blue-600",
                    ].join(" ")
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              {!loading && user && (
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    signOut();
                  }}
                  className="rounded-2xl bg-slate-900 px-4 py-3 text-base font-medium text-white transition hover:bg-slate-800"
                >
                  Logout
                </button>
              )}
            </div>
          </div>
        )}
      </nav>
      <Outlet />
    </>
  );
}
