import { useContext, useState } from "react";
import { NavLink } from "react-router";
import { ThemeContext } from "../context/ThemeContext";
import { AuthContext } from "../context/AuthContext";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const themeContext = useContext(ThemeContext);
  const auth = useContext(AuthContext);

  return (
    <header className="bg-slate-50">
      <nav className="relative flex items-center justify-between p-4">
        <div className="shrink-0">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white ">MiniMarket</h1>
        </div>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 lg:hidden"
          aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isMenuOpen}
          aria-controls="navbar-menu"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18 18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        <div
          id="navbar-menu"
          className={`${isMenuOpen ? "flex" : "hidden"} absolute left-0 top-full z-10 w-full flex-col gap-4 bg-slate-50 p-4 shadow-md lg:static lg:flex lg:w-auto lg:flex-row lg:items-center lg:gap-4 lg:bg-transparent lg:p-0 lg:shadow-none`}
        >
          {themeContext && (
            <button
              onClick={themeContext.toggleTheme}
              type="button"
              aria-label={`Cambiar a tema ${
                themeContext.theme === "light" ? "oscuro" : "claro"
              }`}
              aria-pressed={themeContext.theme === "dark"}
              className={`relative inline-flex h-7 w-14 items-center rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                themeContext.theme === "dark" ? "bg-blue-700" : "bg-slate-300"
              }`}
            >
              <span
                className={`flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-md transition-transform duration-300 ${
                  themeContext.theme === "dark" ? "translate-x-8" : "translate-x-1"
                }`}
              >
                <svg
                  className={`h-5 w-5 ${
                    themeContext.theme === "dark"
                      ? "text-indigo-700"
                      : "text-amber-500"
                  }`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {themeContext.theme === "dark" ? (
                    <path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z" />
                  ) : (
                    <>
                      <circle cx="12" cy="12" r="4" />
                      <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
                    </>
                  )}
                </svg>
              </span>
            </button>
          )}
          <NavLink
            className="border-b-2 w-max border-b-blue-500 text-blue-600"
            to="/"
            onClick={() => setIsMenuOpen(false)}
          >
            Inicio
          </NavLink>
          {auth?.user ? (
            <>
              <span className="max-w-48 truncate text-sm text-slate-600 dark:text-slate-300">
                Hola "{auth.user.name}"
              </span>
              <button
                type="button"
                className="w-max text-slate-700 hover:text-blue-600 dark:text-slate-200"
                onClick={() => {
                  auth.logout();
                  setIsMenuOpen(false);
                }}
              >
                Cerrar sesión
              </button>
            </>
          ) : (
            <NavLink
              className="w-max border-b-transparent hover:border-b-2 hover:border-b-blue-500 hover:text-blue-600"
              to="/login"
              onClick={() => setIsMenuOpen(false)}
            >
              Iniciar Sesión
            </NavLink>
          )}
        </div>
      </nav>
    </header>
  );
};
