import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "../lib/utils";
import { Logo } from "./Logo";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Industries", path: "/industries" },
  { name: "Careers", path: "/careers" },
  { name: "Contact", path: "/contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        scrolled
          ? "bg-surface/90 backdrop-blur-xl border-white/10 py-4 shadow-lg shadow-black/10"
          : "bg-surface/70 backdrop-blur-md border-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2">
          <Logo />
        </NavLink>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                cn(
                  "px-4 py-2 rounded-full text-sm font-medium transition-all",
                  isActive
                    ? "text-primary bg-white/5"
                    : "text-gray-400 hover:text-primary"
                )
              }
            >
              {link.name}
            </NavLink>
          ))}

          <NavLink
            to="/contact"
            className="ml-4 px-6 py-2 bg-primary text-surface font-semibold rounded-full hover:bg-white transition-colors text-sm"
          >
            Start Project
          </NavLink>
        </div>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          className="md:hidden text-white"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-surface/95 backdrop-blur-2xl border-b border-white/10 p-6 md:hidden flex flex-col gap-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/"}
              className={({ isActive }) =>
                cn(
                  "text-lg font-medium transition-colors",
                  isActive ? "text-primary" : "text-gray-400"
                )
              }
            >
              {link.name}
            </NavLink>
          ))}

          <NavLink
            to="/contact"
            className="mt-2 px-6 py-3 bg-primary text-surface text-center font-semibold rounded-full"
          >
            Start Project
          </NavLink>
        </div>
      )}
    </nav>
  );
};