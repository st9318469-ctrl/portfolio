export default function About() {
  return (
    <section id="about" className="bg-slate-950 px-4 py-16 text-white sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div className="relative mx-auto w-full max-w-sm md:max-w-none">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-cyan-400/30 to-fuchsia-500/30 blur-2xl" />

          <div className="relative rounded-[2rem] border border-white/10 bg-slate-900 p-4 shadow-2xl sm:p-6">
            <div className="aspect-square rounded-[1.5rem] bg-gradient-to-br from-slate-800 to-slate-950 p-5 sm:p-8">
              <div className="flex h-full flex-col justify-between">
                <div>
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-3xl bg-cyan-400/20 text-2xl font-black text-cyan-300 sm:h-20 sm:w-20 sm:text-3xl">
                    ST
                  </div>

                  <h3 className="text-2xl font-bold sm:text-3xl">FULL STACK Developer</h3>

                  <p className="mt-4 leading-7 text-slate-400">
                    I enjoy turning ideas into clean, responsive, and beautiful
                    web interfaces.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <h4 className="text-2xl font-bold text-cyan-300">10+</h4>
                    <p className="mt-1 text-sm text-slate-400">Projects</p>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <h4 className="text-2xl font-bold text-cyan-300">5+</h4>
                    <p className="mt-1 text-sm text-slate-400">Skills</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300 sm:text-sm sm:tracking-[0.3em]">
            About Me
          </p>

          <h2 className="text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
            I Build Websites That Look Good And Work Smoothly
          </h2>

          <p className="mt-6 leading-8 text-slate-300">
            Hi, I'm SACHIN THAKOR. I'm a passionate FULL STACK developer
            focused on creating modern, responsive, and user-friendly websites.
            I love working with React, Tailwind CSS, and JavaScript to build
            interfaces that feel fast, clean, and simple to use.
          </p>

          <p className="mt-4 leading-8 text-slate-400">
            My goal is to keep improving my skills, build real-world projects,
            and create digital experiences that solve problems beautifully.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <h3 className="font-bold text-cyan-300">What I Do</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Responsive websites, landing pages, portfolios, and clean UI
                components.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
              <h3 className="font-bold text-cyan-300">My Focus</h3>
              <p className="mt-2 text-sm leading-6 text-slate-400">
                Clean code, smooth user experience, modern design, and
                performance.
              </p>
            </div>
          </div>

          <a
            href="#contact"
            className="mt-8 inline-flex rounded-full bg-cyan-400 px-7 py-3 font-semibold text-slate-950 transition hover:-translate-y-1 hover:bg-cyan-300"
          >
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}
