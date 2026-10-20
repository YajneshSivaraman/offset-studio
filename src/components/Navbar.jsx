import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

// Main navigation for the OFFSET Studio website.
export default function Navbar() {
  // Track whether the mobile navigation is expanded.
  const [menuOpen, setMenuOpen] = useState(false);

  // Keep desktop and mobile navigation links consistent.
  const links = [
    { label: 'Work', href: '#work', number: '01' },
    { label: 'Services', href: '#services', number: '02' },
    { label: 'About', href: '#about', number: '03' },
  ];

  return (
    // Fixed header keeps the original dark Signal Chaos palette.
<header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#111111]/75 text-[#F4F0E8] shadow-[0_8px_32px_rgba(0,0,0,0.2)] backdrop-blur-xl">
      {/* Subtle cyan line adds a technical edge to the header. */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00D9FF]/70 to-transparent"
      />

      <nav
        className="mx-auto flex min-h-[77px] max-w-[1600px] items-center justify-between gap-5 px-5 py-4 md:px-10"
        aria-label="Main navigation"
      >
        {/* Studio wordmark and small descriptor. */}
        <a
          href="#home"
          className="group flex shrink-0 flex-col"
          aria-label="OFFSET Studio home"
          onClick={() => setMenuOpen(false)}
        >
          <span className="font-display text-2xl font-bold tracking-[-0.07em] sm:text-3xl">
            OFFSET
            <span className="text-[#FF4D00] transition-colors group-hover:text-[#00D9FF]">
              .
            </span>
          </span>

          <span className="mt-0.5 font-mono text-[8px] uppercase tracking-[0.24em] text-white/40">
            Independent digital studio
          </span>
        </a>

        {/* Desktop navigation with numbered links. */}
        <div className="hidden items-center gap-8 md:flex lg:gap-10">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="group flex items-center gap-2 py-2"
            >
              <span className="font-mono text-[9px] text-[#FF4D00]">
                {link.number}
              </span>

              <span className="relative text-sm text-white/65 transition-colors duration-200 group-hover:text-[#00D9FF]">
                {link.label}

                {/* Animated underline appears on hover. */}
                <span className="absolute -bottom-2 left-0 h-px w-0 bg-[#00D9FF] transition-all duration-300 group-hover:w-full" />
              </span>
            </a>
          ))}
        </div>

        {/* Studio status and desktop contact action. */}
        <div className="hidden items-center gap-5 md:flex">
          <div className="hidden items-center gap-2 lg:flex">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#00D9FF] shadow-[0_0_10px_#00D9FF]" />

            <span className="font-mono text-[9px] uppercase tracking-widest text-white/40">
              Open for projects
            </span>
          </div>

          <a
            href="#contact"
            className="group inline-flex items-center gap-3 bg-[#FF4D00] px-4 py-3 font-display text-xs font-bold uppercase tracking-wider text-[#111111] transition-colors duration-300 hover:bg-[#00D9FF]"
          >
            Start a project

            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>

        {/* Mobile menu toggle. */}
        <button
          type="button"
          className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/20 text-[#00D9FF] transition-colors hover:border-[#FF4D00] hover:text-[#FF4D00] md:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {/* Mobile navigation panel with the same studio styling. */}
      {menuOpen && (
        <div
          id="mobile-navigation"
          className="absolute inset-x-0 top-full border-b border-[#00D9FF]/30 bg-[#111111] px-5 pb-6 pt-5 shadow-[0_20px_50px_rgba(0,0,0,0.45)] md:hidden"
        >
          {/* Small panel heading. */}
          <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/40">
              Navigation / Menu
            </span>

            <span className="font-mono text-[9px] text-[#00D9FF]">
              OF—001
            </span>
          </div>

          {/* Numbered mobile links. */}
          <div className="flex flex-col">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="group flex items-center justify-between border-b border-white/10 py-4"
              >
                <span className="flex items-center gap-4">
                  <span className="font-mono text-[10px] text-[#FF4D00]">
                    {link.number}
                  </span>

                  <span className="font-display text-2xl font-bold uppercase tracking-tight transition-colors group-hover:text-[#00D9FF]">
                    {link.label}
                  </span>
                </span>

                <ArrowUpRight
                  size={19}
                  className="text-white/35 transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#00D9FF]"
                />
              </a>
            ))}
          </div>

          {/* Mobile contact action. */}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="group mt-6 flex items-center justify-between bg-[#FF4D00] px-5 py-4 font-display text-sm font-bold uppercase tracking-wider text-[#111111] transition-colors hover:bg-[#00D9FF]"
          >
            Start a project

            <ArrowUpRight
              size={19}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>

          {/* Matching status indicator. */}
          <div className="mt-5 flex items-center gap-2 font-mono text-[9px] uppercase tracking-widest text-white/40">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#00D9FF]" />
            Independent digital studio
          </div>
        </div>
      )}
    </header>
  );
}
