const stats = [
  { value: "2+", label: "Years Learning" },
  { value: "10+", label: "Projects" },
  { value: "5+", label: "Skills" },
];

export default function Home() {
  return (
    <section id="home" className="overflow-hidden pt-20 sm:pt-24">
      <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-6xl items-center gap-10 px-4 py-12 sm:px-6 sm:py-16 md:grid-cols-2 lg:px-8">
        <div className="absolute -left-24 top-24 h-56 w-56 rounded-full bg-cyan-500/20 blur-3xl sm:h-72 sm:w-72" />
        <div className="absolute -right-28 bottom-24 h-56 w-56 rounded-full bg-fuchsia-500/20 blur-3xl sm:h-72 sm:w-72" />

        <div className="relative z-10">
          <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-7xl">
            Hi, I'm{" "}
            <span className="bg-gradient-to-l from-cyan-300 to-fuchsia-500 bg-clip-text text-transparent">
              SACHIN THAKOR
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8">
            I build clean, modern, and responsive web experiences using React,
            Tailwind CSS, and thoughtful design.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="#projects"
              className="rounded-full bg-cyan-400 px-7 py-3 text-center font-semibold text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-300"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/15 px-7 py-3 text-center font-semibold text-white transition hover:-translate-y-1 hover:border-cyan-400 hover:text-cyan-300"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-10 grid max-w-lg grid-cols-1 gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-4"
              >
                <h2 className="text-2xl font-bold text-cyan-300">
                  {stat.value}
                </h2>
                <p className="mt-1 text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-xs sm:max-w-sm">
          <div className="absolute inset-0 rotate-6 rounded-[2rem] bg-gradient-to-br from-cyan-400 to-fuchsia-500 opacity-70 blur-sm" />

          <div className="relative rounded-[2rem] border border-white/10 bg-slate-900 p-4 shadow-2xl sm:p-6">
            <div className="aspect-square rounded-[1.5rem] bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 p-5 sm:p-6">
              <div className="flex h-full flex-col justify-between">
                <div>
                  <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-3xl bg-cyan-400/20 text-2xl font-black text-cyan-300 sm:h-20 sm:w-20 sm:text-3xl">
                    ST
                  </div>

                  <h2 className="text-2xl font-bold sm:text-3xl">FULL STACK Developer</h2>

                  <p className="mt-3 text-sm text-slate-400 sm:text-base">
                    React / Tailwind / MongoDB / Express
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm text-slate-400">Currently building</p>
                  <p className="mt-1 font-semibold text-cyan-300">
                    Beautiful portfolio websites
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
