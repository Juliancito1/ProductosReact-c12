import { useState } from "react";
import { NavLink } from "react-router";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-slate-50">
      <nav className="relative flex items-center justify-between p-4">
        <div className="shrink-0">
          <h1 className="text-2xl font-bold text-slate-900 ">MiniMarket</h1>
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
          <button
            type="button"
            className={`
        relative inline-flex h-7 w-14 items-center rounded-full 
        transition-colors duration-300 focus:outline-none cursor-pointer
        
      `}
          >
            {/* Círculo deslizante */}
            <span
              className={`
          inline-block h-5 w-5 rounded-full bg-white shadow-md 
          transition-transform duration-300
          
        `}
            />
          </button>
          <NavLink
            className="border-b-2 w-max border-b-blue-500 text-blue-600"
            to="/"
            onClick={() => setIsMenuOpen(false)}
          >
            Inicio
          </NavLink>
          <NavLink
            className="hover:border-b-2 w-max border-btransparent hover:border-b-blue-500 hover:text-blue-600"
            to="/login"
            onClick={() => setIsMenuOpen(false)}
          >
            Iniciar Sesión
          </NavLink>
        </div>
      </nav>
    </header>
  );
};
