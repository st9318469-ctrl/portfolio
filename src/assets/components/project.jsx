const projects = [
  {
    title: "Portfolio Website",
    description:
      "A modern personal portfolio built with React and Tailwind CSS.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    tags: ["React", "Tailwind", "Vite"],
    live: "#",
    github: "#",
  },
  {
    title: "Weather App",
    description:
      "A responsive weather app that shows real-time weather details.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b",
    tags: ["JavaScript", "API", "CSS"],
    live: "#",
    github: "#",
  },
  {
    title: "Todo App",
    description:
      "A clean task management app with add, delete, and complete features.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b",
    tags: ["React", "State", "UI"],
    live: "#",
    github: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-slate-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
            My Work
          </p>

          <h2 className="text-4xl font-black tracking-tight md:text-5xl">
            Featured Projects
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            Here are some projects I've built while learning and practicing
            frontend development.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const hasLiveLink = project.live && project.live !== "#";
            const hasGithubLink = project.github && project.github !== "#";

            return (
              <div
                key={project.title}
                className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-xl shadow-black/20 transition hover:-translate-y-2 hover:border-cyan-400/40"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-52 w-full object-cover"
                />

                <div className="p-6">
                  <h3 className="text-2xl font-bold">{project.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {project.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={hasLiveLink ? project.live : undefined}
                      aria-disabled={!hasLiveLink}
                      className={`rounded-full px-5 py-2 text-center text-sm font-semibold transition ${
                        hasLiveLink
                          ? "bg-cyan-400 text-slate-950 hover:bg-cyan-300"
                          : "cursor-not-allowed bg-slate-700 text-slate-400"
                      }`}
                    >
                      Live Demo
                    </a>

                    <a
                      href={hasGithubLink ? project.github : undefined}
                      aria-disabled={!hasGithubLink}
                      className={`rounded-full border px-5 py-2 text-center text-sm font-semibold transition ${
                        hasGithubLink
                          ? "border-white/15 text-white hover:border-cyan-400 hover:text-cyan-300"
                          : "cursor-not-allowed border-white/10 text-slate-500"
                      }`}
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
