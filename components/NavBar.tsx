"use client";

import Link from "next/link";
import { useState } from "react";

export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-1.5 group">
          <span className="text-white font-bold text-lg tracking-tight">Ryoma</span>
          <span className="w-1.5 h-1.5 rounded-full bg-red-500 group-hover:scale-125 transition-transform" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: "Projects", href: "#projects" },
            { label: "About",    href: "#about" },
            { label: "Works",    href: "#projects" },
            { label: "Contact",  href: "mailto:ryoma.t.engineer@gmail.com" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-zinc-400 hover:text-white text-sm font-medium transition-colors"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a
            href="/resume.ryoma.taguchi.pdf"
            download
            className="hidden md:inline-flex items-center gap-2 bg-white text-zinc-900 text-sm font-semibold px-4 py-2 rounded-full hover:bg-zinc-100 transition-colors"
          >
            Download CV
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-zinc-400 hover:text-white"
            onClick={() => setMenuOpen((v) => !v)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {menuOpen
                ? <path d="M18 6L6 18M6 6l12 12"/>
                : <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>
              }
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-zinc-950 border-t border-white/5 px-5 py-4 flex flex-col gap-4">
          {[
            { label: "Projects", href: "#projects" },
            { label: "About",    href: "#about" },
            { label: "Contact",  href: "mailto:ryoma.t.engineer@gmail.com" },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-zinc-300 text-sm font-medium"
            >
              {label}
            </a>
          ))}
          <a
            href="/resume.ryoma.taguchi.pdf"
            download
            className="inline-flex items-center gap-2 bg-white text-zinc-900 text-sm font-semibold px-4 py-2 rounded-full w-fit"
          >
            Download CV
          </a>
        </div>
      )}
    </header>
  );
}
