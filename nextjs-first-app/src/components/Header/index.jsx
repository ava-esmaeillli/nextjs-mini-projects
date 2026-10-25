"use client";
import { LuSearch, LuUser, LuShoppingCart } from "react-icons/lu";
import { useEffect, useState } from "react";

const navIcons = [
  { id:"search", icon: LuSearch, href: "#" },
  { id:"user", icon: LuUser, href: "#" },
  { id:"shopping", icon: LuShoppingCart, href: "#" },
];

const Header = ({navItems}) => {
  const [open, setOpen] = useState(false);

  // Close Menu By Esc
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Lock Screen and No Scroll
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close Menu By Rotate
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = (e) => e.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <header className="relative z-50 flex w-full max-w-[1920px] items-center justify-between px-4 py-4 sm:px-8 lg:px-16 lg:py-5 mx-auto">
      {/* Logo */}
      <a href="#" className="text-2xl text-secondary">
        مینی‌استور
        <span className="text-4xl text-primary">.</span>
      </a>

      {/* Desktop Menu */}
      <nav className="hidden lg:block">
        <ul className="text-md flex w-full items-center justify-center gap-6 uppercase">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                className="cursor-pointer text-secondary text-sm transition hover:text-primary"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Icons */}
      <div className="flex items-center gap-3">
        {navIcons.map((item) => {
          const Icon = item.icon;
          return (
            <a
              href={item.href}
              key={item.id}
              className="flex size-9 items-center justify-center rounded-full transition hover:bg-black/5"
            >
              <Icon className="size-5 cursor-pointer transition hover:text-primary" />
            </a>
          );
        })}

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="relative z-60 flex size-9 flex-col items-center justify-center gap-1.25 rounded-full transition hover:bg-black/5 lg:hidden"
        >
          <span
            className={`h-0.5 w-5 rounded bg-secondary transition-all duration-300 ${
              open ? "translate-y-1.75 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 rounded bg-secondary transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 rounded bg-secondary transition-all duration-300 ${
              open ? "-translate-y-1.75 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Bg Dark */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden="true"
      />

      {/* Mobile Menu */}
      <aside
        id="mobile-menu"
        className={`fixed inset-y-0 right-0 flex w-[80%] max-w-sm flex-col bg-white px-8 pb-8 pt-24 shadow-2xl transition-transform duration-300 ease-out lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-hidden={!open}
      >
        <nav>
          <ul className="flex flex-col">
            {navItems.map((item, i) => (
              <li
                key={item.href}
                className={`border-b border-black/10 transition-all duration-300 ${
                  open ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"
                }`}
                style={{ transitionDelay: open ? `${100 + i * 50}ms` : "0ms" }}
              >
                <a
                  href={item.href}
                  tabIndex={open ? 0 : -1}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-4 text-lg uppercase text-secondary transition hover:text-primary"
                >
                  {item.title}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-40"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="mt-auto text-sm text-secondary/60">
          MiniStore<span className="text-primary">.</span>
        </p>
      </aside>
    </header>
  );
};

export default Header;
