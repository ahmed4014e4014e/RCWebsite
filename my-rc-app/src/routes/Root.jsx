import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", to: "/home/" },
    { name: "About", to: "/about/" },
    { name: "Services", to: "/services/" },
    { name: "Contact", to: "/contact/" },
  ];

  return (
    <>
      <nav className="w-full bg-white shadow-md fixed top-0 left-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Ucan</h1>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 text-lg">
            {links.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.to}
                  className="hover:text-blue-600 transition duration-200"
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden bg-white shadow-md px-6 pb-4 flex flex-col gap-4 text-lg">
            {links.map((link) => (
              // <a
              //   key={link.name}
              //   href={link.href}
              //   className="hover:text-blue-600 transition duration-200"
              // >
              //   {link.name}
              // </a>
              <NavLink
                key={link.name}
                to={link.to}
                className="hover:text-blue-600 transition duration-200"
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        )}
      </nav>
      <Outlet />
    </>
  );
}
