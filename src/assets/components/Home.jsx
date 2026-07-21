const stats = [
  { value: "2+", label: "Years Learning" },
  { value: "10+", label: "Projects" },
  { value: "5+", label: "Skills" },
];

export default function Home() {
  return (
    <main id="home" className="min-h-screen overflow-hidden pt-24">
      <section className="relative mx-auto grid min-h-[calc(100vh-6rem)] max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2">
        <div className="absolute -left-20 top-24 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -right-24 bottom-24 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />

        <div className="relative z-10">
          <h1 className="max-w-3xl text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-7xl">
            Hi, I'm{" "}
            <span className="bg-gradient-to-l from-cyan-300 to-fuchsia-500 bg-clip-text text-transparent">
              SACHIN THAKOR
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-300">
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

        <div className="relative z-10 mx-auto w-full max-w-sm">
          <div className="absolute inset-0 rotate-6 rounded-[2rem] bg-gradient-to-br from-cyan-400 to-fuchsia-500 opacity-70 blur-sm" />

          <div className="relative rounded-[2rem] border border-white/10 bg-slate-900 p-6 shadow-2xl">
            <div className="aspect-square rounded-[1.5rem] bg-gradient-to-br from-slate-800 via-slate-900 to-slate-950 p-6">
              <div className="flex h-full flex-col justify-between">
                <div>
                  <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-3xl bg-cyan-400/20 text-3xl font-black text-cyan-300">
                    ST
                  </div>

                  <h2 className="text-3xl font-bold">FULL STACK Developer</h2>

                  <p className="mt-3 text-slate-400">
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
      </section>
    </main>
  );
}
