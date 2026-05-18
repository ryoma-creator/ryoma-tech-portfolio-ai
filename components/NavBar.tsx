"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Globe } from "lucide-react";
import { locales } from "@/lib/i18n";
import type { Locale } from "@/lib/i18n";
import { useLanguage } from "@/contexts/LanguageContext";

export function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const { locale, setLocale } = useLanguage();

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-6xl mx-auto px-5 flex items-center justify-between h-16">

        {/* Logo — signature */}
        <Link href="/" className="flex items-center" style={{ height: "40px" }}>
          <Image
            src="/ryoma.sign.png"
            alt="Ryoma"
            width={120}
            height={46}
            className="object-contain object-left"
            style={{ opacity: 0.9, filter: "brightness(1.3) sepia(0.3) saturate(1.8)" }}
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {[
            { label: "Projects", href: "#projects" },
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

        {/* CTA + Language */}
        <div className="flex items-center gap-3">
          <a
            href="/resume.ryoma.taguchi.pdf"
            download
            className="hidden md:inline-flex items-center gap-2 text-sm font-medium px-4 py-1.5 rounded-full border border-zinc-600 text-zinc-300 hover:border-[#d9a441] hover:text-[#d9a441] transition-colors"
          >
            Download CV
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
              <polyline points="7 10 12 15 17 10"/>
              <line x1="12" y1="15" x2="12" y2="3"/>
            </svg>
          </a>

          {/* Language selector — inline, no conflict */}
          <div ref={langRef} className="relative">
            <button
              onClick={() => setLangOpen((v) => !v)}
              className="flex items-center gap-1.5 rounded-full border border-zinc-700/60 bg-zinc-900/80 px-3 py-1.5 text-xs text-zinc-400 backdrop-blur-sm transition-colors hover:border-zinc-600 hover:text-zinc-200"
              aria-label="Change language"
            >
              <Globe className="h-3.5 w-3.5" />
              <span>{locale.toUpperCase()}</span>
            </button>

            {langOpen && (
              <div className="absolute right-0 mt-1.5 w-36 overflow-hidden rounded-xl border border-zinc-700/60 bg-zinc-900/95 shadow-xl backdrop-blur-sm">
                {(Object.entries(locales) as [Locale, string][]).map(([code, label]) => (
                  <button
                    key={code}
                    onClick={() => { setLocale(code); setLangOpen(false); }}
                    className={`w-full px-4 py-2 text-left text-xs transition-colors hover:bg-zinc-800 ${
                      locale === code ? "text-zinc-100" : "text-zinc-400"
                    }`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            )}
          </div>

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
            className="inline-flex items-center gap-2 border border-zinc-600 text-zinc-300 text-sm font-medium px-4 py-2 rounded-full w-fit"
          >
            Download CV
          </a>
        </div>
      )}
    </header>
  );
}
