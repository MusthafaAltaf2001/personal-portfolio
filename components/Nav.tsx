"use client";

import { useEffect, useState } from "react";
import { siteConfig } from "@/lib/data";

const links = [
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Now", href: "#now" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      {/* Blur lives on this inner bar: a backdrop-filter on <header> would turn it
          into the containing block for the fixed drawer below, collapsing it. */}
      <div
        className={`transition-colors duration-300 ${
          scrolled && !open
            ? "border-b border-line bg-ground/80 backdrop-blur-md"
            : "border-b border-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a
            href="#top"
            className="display text-lg text-ink"
            aria-label="Back to top"
          >
            M<span className="text-gold">.</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="label link-draw pb-0.5 hover:text-ink transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={siteConfig.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="label rounded-full border border-line px-4 py-2 text-ink transition-colors hover:border-gold-soft hover:text-gold"
            >
              Resume
            </a>
          </div>

          <button
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            <span
              className={`h-px w-6 bg-ink transition-transform duration-300 ${
                open ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-px w-6 bg-ink transition-transform duration-300 ${
                open ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </nav>
      </div>

      <div
        role="dialog"
        aria-modal="true"
        aria-label="Site menu"
        inert={!open}
        className={`fixed inset-0 top-16 z-30 flex flex-col items-center justify-center gap-10 bg-ground transition-opacity duration-300 md:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            className="display text-3xl text-ink"
          >
            {link.label}
          </a>
        ))}
        <a
          href={siteConfig.resumeUrl}
          target="_blank"
          rel="noreferrer"
          onClick={() => setOpen(false)}
          className="label rounded-full border border-line px-6 py-3"
        >
          Resume
        </a>
      </div>
    </header>
  );
}
