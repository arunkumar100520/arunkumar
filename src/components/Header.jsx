// Header.jsx
import React from "react";

export default function Header({ data }) {
  const [open, setOpen] = React.useState(false);

  const navLinks = [
    ["Work", "#work"],
    ["Projects", "#projects"],
    ["Skills", "#skills"],
    ["Education", "#education"],
    ["Achievements", "#achievements"],
    ["Contact", "#contact"],
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0b0d12]/70 backdrop-blur-md">
      <div className="mx-auto flex w-[min(1100px,calc(100%-40px))] items-center justify-between gap-4 py-3 md:py-4">
        <a href="#top" className="group flex items-center gap-3 transition-opacity hover:opacity-80">
          <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-[#8ab4ff] to-[#9df2c8] shadow-[0_0_12px_rgba(138,180,255,0.4)]" />
          <span className="grid leading-tight">
            <span className="text-sm font-semibold tracking-wide text-white/90">{data.name}</span>
            <span className="text-xs text-white/50">{data.role.split(" ")[0]} Dev</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-[13px] font-medium tracking-wide text-white/60 md:flex">
          {navLinks.map(([label, href]) => (
            <a key={href} className="transition-colors hover:text-white" href={href}>
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            className="hidden items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2 text-sm font-medium text-white/80 transition-all hover:bg-white/[0.08] hover:text-white md:inline-flex"
            href={data.resumeUrl}
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
          <a
            className="hidden items-center justify-center rounded-lg border border-[#8ab4ff]/30 bg-gradient-to-br from-[#8ab4ff]/20 to-[#9df2c8]/15 px-4 py-2 text-sm font-medium text-white transition-all hover:brightness-125 md:inline-flex"
            href={`mailto:${data.email}`}
          >
            Say Hello
          </a>

          <button
            onClick={() => setOpen((s) => !s)}
            className="inline-flex h-10 w-11 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] transition-colors hover:bg-white/[0.08] md:hidden"
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span className={`block h-0.5 w-5 rounded-full bg-white/80 transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-5 rounded-full bg-white/80 transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-5 rounded-full bg-white/80 transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="mx-auto w-[min(1100px,calc(100%-40px))] pb-4 md:hidden animate-in fade-in slide-in-from-top-2">
          <div className="rounded-2xl border border-white/10 bg-[#12151c]/95 p-4 shadow-2xl backdrop-blur-xl">
            <div className="flex flex-col space-y-1">
              {navLinks.map(([label, href]) => (
                <a
                  key={href}
                  className="rounded-lg px-4 py-3 text-sm font-medium text-white/70 transition-colors hover:bg-white/[0.06] hover:text-white"
                  href={href}
                  onClick={() => setOpen(false)}
                >
                  {label}
                </a>
              ))}
            </div>
            <div className="mt-4 grid grid-cols-2 gap-3 pt-4 border-t border-white/10">
              <a className="flex items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-white/80" href={data.resumeUrl} target="_blank" rel="noreferrer">
                Resume
              </a>
              <a className="flex items-center justify-center rounded-lg border border-[#8ab4ff]/30 bg-gradient-to-br from-[#8ab4ff]/20 to-[#9df2c8]/15 px-4 py-2.5 text-sm font-medium text-white" href={`mailto:${data.email}`}>
                Email
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}