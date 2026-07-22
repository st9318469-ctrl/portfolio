import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = ["Home", "About", "Projects", "Skills", "Contact"];

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-cyan-300/20 bg-slate-950/75 shadow-[0_18px_45px_rgba(8,145,178,0.16)] backdrop-blur-xl [perspective:1000px]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="text-xl font-bold text-white transition duration-300 [transform-style:preserve-3d] hover:[transform:translateY(-2px)_rotateX(12deg)] sm:text-2xl"
        >
          Port<span className="text-cyan-400">folio</span>
        </a>

        <div className="hidden items-center gap-3 md:flex lg:gap-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="group relative rounded-lg px-3 py-2 text-sm font-medium text-slate-300 transition duration-300 [transform-style:preserve-3d] before:absolute before:inset-0 before:-z-10 before:rounded-lg before:border before:border-cyan-300/0 before:bg-cyan-300/0 before:shadow-[0_0_0_rgba(34,211,238,0)] before:transition before:duration-300 after:absolute after:bottom-1 after:left-3 after:h-0.5 after:w-0 after:rounded-full after:bg-cyan-300 after:transition-all after:duration-300 hover:text-white hover:[transform:translateY(-4px)_rotateX(18deg)] hover:before:border-cyan-300/30 hover:before:bg-cyan-300/10 hover:before:shadow-[0_14px_30px_rgba(34,211,238,0.22)] hover:after:w-[calc(100%-1.5rem)]"
            >
              {link}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden rounded-full bg-cyan-400 px-5 py-2 text-sm font-semibold text-slate-950 shadow-[0_10px_0_#0e7490,0_18px_28px_rgba(34,211,238,0.25)] transition duration-300 [transform-style:preserve-3d] hover:bg-cyan-300 hover:shadow-[0_6px_0_#0e7490,0_14px_26px_rgba(34,211,238,0.34)] hover:[transform:translateY(4px)_rotateX(10deg)] md:inline-flex"
        >
          Hire Me
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg border border-cyan-300/20 bg-white/5 px-3 py-2 text-white shadow-[0_8px_0_rgba(8,145,178,0.35)] transition duration-300 hover:bg-cyan-300/10 hover:[transform:translateY(3px)_rotateX(12deg)] md:hidden"
          aria-label="Toggle menu"
        >
          <span className="text-2xl leading-none">{open ? "x" : "="}</span>
        </button>
      </div>

      {open && (
        <div className="border-t border-cyan-300/20 bg-slate-950/95 px-4 py-4 shadow-[0_18px_40px_rgba(8,145,178,0.18)] sm:px-6 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-slate-300 transition duration-300 hover:bg-cyan-300/10 hover:text-cyan-300 hover:[transform:translateX(6px)]"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
