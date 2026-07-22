
const skills = [
  { name: "HTML", level: "95%", color: "from-orange-400 to-red-500" },
  { name: "CSS", level: "90%", color: "from-blue-400 to-cyan-500" },
  { name: "JavaScript", level: "85%", color: "from-yellow-300 to-yellow-500" },
  { name: "React", level: "80%", color: "from-cyan-300 to-blue-500" },
  { name: "Tailwind CSS", level: "88%", color: "from-teal-300 to-emerald-500" },
  { name: "Node.js", level: "82%", color: "from-green-400 to-emerald-600" },
  { name: "Express.js", level: "78%", color: "from-slate-300 to-slate-500" },
  { name: "REST APIs", level: "84%", color: "from-indigo-400 to-blue-500" },
  { name: "MongoDB", level: "76%", color: "from-lime-400 to-green-600" },
  { name: "SQL", level: "72%", color: "from-sky-400 to-indigo-500" },
  { name: "Authentication", level: "74%", color: "from-rose-400 to-pink-500" },
  { name: "Git & GitHub", level: "80%", color: "from-purple-400 to-fuchsia-500" },
];

const skillHighlights = [
  "Responsive Design",
  "Clean UI",
  "API Integration",
  "Version Control",
  "Database Design",
  "Backend Logic",
  "Deployment",
  "Debugging",
];

export default function Skills() {
  return (
    <section id="skills" className="bg-slate-950 px-4 py-16 text-white sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300 sm:text-sm sm:tracking-[0.3em]">
            My Skills
          </p>

          <h2 className="text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
            Technologies I Work With
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-slate-400">
            A practical full-stack toolkit for building responsive interfaces,
            reliable APIs, database-backed features, and production-ready web
            apps.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 shadow-xl shadow-black/10 transition hover:-translate-y-1 hover:border-cyan-400/40 sm:p-6"
            >
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-lg font-bold">{skill.name}</h3>
                <span className="text-sm font-semibold text-cyan-300">
                  {skill.level}
                </span>
              </div>

              <div className="h-3 overflow-hidden rounded-full bg-slate-800">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                  style={{ width: skill.level }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillHighlights.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-slate-900 p-5 text-center text-sm font-semibold text-slate-300"
              >
                {item}
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
