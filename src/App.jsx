import React, { useState, useEffect } from 'react';

// ─── Data ────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const SKILLS = [
  { name: 'React.js',      icon: '⚛️' },
  { name: 'Node.js',       icon: '🟢' },
  { name: 'Express.js',    icon: '🚀' },
  { name: 'MongoDB',       icon: '🍃' },
  { name: 'JavaScript',    icon: '𝐉𝐒' },
  { name: 'Java',          icon: '☕' },
  { name: 'Python',        icon: '🐍' },
  { name: 'SQL / MySQL',   icon: '🗄️' },
  { name: 'Redux',         icon: '🔄' },
  { name: 'Tailwind CSS',  icon: '🎨' },
  { name: 'Docker',        icon: '🐳' },
  { name: 'AWS',           icon: '☁️' },
  { name: 'Git & GitHub',  icon: '🐙' },
  { name: 'REST APIs',     icon: '🔌' },
  { name: 'Postman',       icon: '📬' },
  { name: 'HTML5 & CSS3',  icon: '🌐' },
];

const PROJECTS = [
  {
    title: 'Voting App',
    description:
      'A full-stack MERN voting platform where registered users can browse candidates, cast a single secure vote, and track live vote counts — featuring JWT authentication, role-based access, and a real-time voter dashboard.',
    tech: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
    image: '/images/project-one.jpg.png',
    live: 'https://voting-app-frontend1.vercel.app',
    github: 'https://github.com/st9318469-ctrl/voting-app-frontend',
  },
  {
    title: 'EasyStay',
    description:
      'A sleek travel booking platform where users can search destinations, filter stays by category (Beach, Mountain, Luxury…), pick check-in/out dates, and view live property and guest stats — all wrapped in a clean, fully responsive UI.',
    tech: ['React', 'Tailwind CSS', 'REST API'],
    image: '/images/project-two.jpg.png',
    live: 'https://agent-6aa2494158b6e74608caf6dd--easystay-sachin.netlify.app/',
    github: 'https://github.com/st9318469-ctrl/EasyStay',
  },
  {
    title: 'EasyStay Rental Platform',
    description:
      'Internship MERN project for an Airbnb-style rental platform with reusable React components, Redux state, JWT-protected APIs, API error handling, and MongoDB schemas for listings and users.',
    tech: ['React', 'Redux', 'Node.js', 'Express', 'MongoDB', 'JWT'],
    image: null,
    live: null,
    github: null,
    note: 'Internship project',
  },
];

const EXPERIENCE = [
  {
    type: 'Internship',
    title: 'MERN Stack Developer Intern',
    place: 'Grownited',
    period: 'Jan 2026 - Apr 2026',
    details: [
      'Built reusable React components and managed app state with Redux.',
      'Implemented JWT middleware, protected API routes, and handled API error flows.',
      'Designed MongoDB schemas for a full-stack rental platform.',
    ],
  },
  {
    type: 'Education',
    title: 'B.Tech in Information Technology',
    place: 'Gujarat Technological University',
    period: 'CGPA 8.22 / 10',
    details: [
      'Focused on DSA, DBMS, OOP, web development, and system design fundamentals.',
    ],
  },
  {
    type: 'Education',
    title: 'Higher Secondary Education',
    place: 'N.G. School',
    period: 'Completed',
    details: [
      'Built the academic foundation for engineering and software development.',
    ],
  },
];

// ─── Helpers / Sub-components ─────────────────────────────────────────────────

function Tag({ children }) {
  return (
    <span className="rounded-full bg-slate-800 px-3 py-1 text-xs font-medium text-slate-300 ring-1 ring-slate-700">
      {children}
    </span>
  );
}

function ExternalIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function SectionHeading({ children, subtitle }) {
  return (
    <div className="mb-10 text-center sm:text-left">
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{children}</h2>
      {subtitle && <p className="mt-2 text-slate-400">{subtitle}</p>}
    </div>
  );
}

// ─── Sections ─────────────────────────────────────────────────────────────────

function HeroSection() {
  return (
    <header className="relative flex min-h-[85vh] flex-col justify-center pb-12 pt-28">
      {/* subtle grid background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(56,189,248,0.08),transparent)]"
      />

      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">
        Full-Stack MERN Developer
      </p>

      <h1 className="mt-4 max-w-3xl text-5xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-6xl lg:text-7xl">
        Sachin{' '}
        <span className="bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">
          Rajeshbhai
        </span>{' '}
        Thakor
      </h1>

      <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
        I craft fast, scalable web apps with{' '}
        <span className="font-semibold text-white">React</span>,{' '}
        <span className="font-semibold text-white">Node.js</span>,{' '}
        <span className="font-semibold text-white">Express</span> &amp;{' '}
        <span className="font-semibold text-white">MongoDB</span>.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <a
          href="#projects"
          className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-6 py-3 font-semibold text-white shadow-lg shadow-sky-500/25 transition hover:bg-sky-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-6 py-3 font-semibold text-white transition hover:border-slate-500 hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500"
        >
          Contact Me
        </a>
        <a
          href="/resume.pdf"
          download="Sachin_Thakor_Resume.pdf"
          className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-900 px-6 py-3 font-semibold text-white transition hover:border-sky-500/50 hover:bg-slate-800 hover:text-sky-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7 10 12 15 17 10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Download CV
        </a>
      </div>

      {/* scroll cue */}
      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-slate-500 transition hover:text-slate-300"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </a>
    </header>
  );
}

function AboutSection() {
  return (
    <section
      id="about"
      className="scroll-mt-20 rounded-3xl border border-slate-800 bg-slate-900/60 p-8 shadow-2xl shadow-slate-950/40 sm:p-10"
    >
      <SectionHeading subtitle="A little bit about me">About</SectionHeading>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-4 text-slate-300 leading-relaxed">
          <p>
            I&apos;m a Full Stack Developer skilled in the <span className="font-semibold text-white">MERN stack</span> (MongoDB, Express, React, Node.js)
            and Java/OOP, with a strong foundation in DSA, DBMS, and system design. I love turning
            ideas into real products — writing clean, maintainable code and shipping fast, reliable
            experiences that users enjoy.
          </p>
          <p>
            I completed a <span className="font-semibold text-white">MERN internship at Grownited</span> (Jan–Apr 2026), where I built
            reusable React components with Redux, implemented JWT middleware, handled API error flows,
            and designed MongoDB schemas for a full-stack rental platform.
          </p>
          <p>
            I hold a <span className="font-semibold text-white">B.Tech in Information Technology</span> from Gujarat Technological
            University (CGPA 8.22/10) and I&apos;m actively seeking a Junior Software Developer role
            where I can build scalable, database-driven applications.
          </p>

          {/* Contact details row */}
          <div className="mt-2 flex flex-wrap gap-4 text-sm">
            <span className="flex items-center gap-1.5 text-slate-400">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              Salem, Tamil Nadu, India
            </span>
            <a href="tel:+917837051325" className="flex items-center gap-1.5 text-slate-400 transition hover:text-sky-400">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.35 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6 6l.94-.94a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16z"/></svg>
              +91 78370 51325
            </a>
            <a href="mailto:sachinthakor1804@gmail.com" className="flex items-center gap-1.5 text-slate-400 transition hover:text-sky-400">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              sachinthakor1804@gmail.com
            </a>
          </div>

          {/* Certifications */}
          <div className="mt-2">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-slate-500">Certifications</p>
            <div className="flex flex-wrap gap-2">
              {['Blockchain Technology — BSE Institute', 'Data Analytics Simulation — Deloitte (Forage)'].map((cert) => (
                <span key={cert} className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1 text-xs text-slate-300">
                  🏅 {cert}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {[
            { label: 'CGPA', value: '8.22' },
            { label: 'Technologies', value: '16+' },
            { label: 'Projects Built', value: '3+' },
            { label: 'Internship', value: '4mo' },
          ].map(({ label, value }) => (
            <div
              key={label}
              className="flex flex-col items-center rounded-2xl border border-slate-800 bg-slate-900 p-4 text-center"
            >
              <span className="text-3xl font-extrabold text-sky-400">{value}</span>
              <span className="mt-1 text-xs text-slate-400">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-20">
      <SectionHeading subtitle="Technologies I work with regularly">Skills</SectionHeading>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {SKILLS.map(({ name, icon }) => (
          <div
            key={name}
            className="group flex items-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/60 px-4 py-4 transition hover:border-sky-500/50 hover:bg-slate-900"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-800 text-xl transition group-hover:bg-slate-700">
              {icon}
            </span>
            <span className="font-medium text-slate-200">{name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-20">
      <SectionHeading subtitle="Internship and education recruiters can scan quickly">
        Experience
      </SectionHeading>

      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute left-4 top-2 hidden h-[calc(100%-1rem)] w-px bg-slate-800 sm:block"
        />

        <div className="grid gap-5">
          {EXPERIENCE.map((item) => (
            <article
              key={`${item.title}-${item.place}`}
              className="relative rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-lg shadow-slate-950/20 transition hover:border-sky-500/40 sm:ml-12 sm:p-6"
            >
              <span className="absolute -left-[3.25rem] top-6 hidden h-8 w-8 items-center justify-center rounded-full border border-sky-500/40 bg-slate-950 text-xs font-bold text-sky-300 shadow-md shadow-sky-950/30 sm:flex">
                {item.type === 'Internship' ? 'EX' : 'ED'}
              </span>

              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-sky-400">
                    {item.type}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-1 text-sm font-medium text-slate-300">{item.place}</p>
                </div>

                <span className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1 text-xs font-semibold text-slate-300">
                  {item.period}
                </span>
              </div>

              <ul className="mt-4 grid gap-2 text-sm leading-relaxed text-slate-400">
                {item.details.map((detail) => (
                  <li key={detail} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-400" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-20">
      <SectionHeading subtitle="A selection of things I've built">Projects</SectionHeading>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project) => (
          <article
            key={project.title}
            className="group flex flex-col overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/60 shadow-lg shadow-slate-950/30 transition hover:border-slate-700 hover:shadow-xl hover:shadow-sky-950/20"
          >
            {/* ── Screenshot thumbnail ── */}
            <div className="relative overflow-hidden bg-slate-950" style={{ aspectRatio: '16/9' }}>
              {project.image ? (
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
                  <div className="text-center">
                    <div className="mx-auto mb-2 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-700 text-2xl">
                      🖥️
                    </div>
                    <p className="text-xs text-slate-500">Screenshot coming soon</p>
                  </div>
                </div>
              )}
              {/* subtle dark overlay that lifts on hover */}
              <div className="absolute inset-0 bg-slate-950/30 transition duration-300 group-hover:bg-slate-950/10" />
              {(project.live || project.github) && (
                <div className="absolute right-3 top-3 flex gap-2 opacity-0 transition duration-300 group-hover:opacity-100">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} live demo`}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/80 text-sky-400 ring-1 ring-slate-700 backdrop-blur-sm transition hover:bg-sky-500 hover:text-white"
                    >
                      <ExternalIcon />
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} GitHub`}
                      className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900/80 text-slate-300 ring-1 ring-slate-700 backdrop-blur-sm transition hover:bg-slate-700 hover:text-white"
                    >
                      <GitHubIcon />
                    </a>
                  )}
                </div>
              )}
            </div>

            {/* ── Card body ── */}
            <div className="flex flex-1 flex-col p-6">
              {/* accent bar */}
              <div className="mb-4 h-0.5 w-8 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 transition-all duration-300 group-hover:w-14" />

              <h3 className="text-lg font-semibold text-white">{project.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-3">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-sky-500/10 px-4 py-1.5 text-xs font-semibold text-sky-400 ring-1 ring-sky-500/30 transition hover:bg-sky-500/20"
                  >
                    <ExternalIcon /> Live
                  </a>
                )}
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-slate-800 px-4 py-1.5 text-xs font-semibold text-slate-300 ring-1 ring-slate-700 transition hover:bg-slate-700"
                  >
                    <GitHubIcon /> GitHub
                  </a>
                )}
                {project.note && (
                  <span className="inline-flex items-center rounded-full border border-slate-700 px-4 py-1.5 text-xs font-semibold text-slate-400">
                    {project.note}
                  </span>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    const form = e.target;
    const body = {
      name: form.name.value.trim(),
      email: form.email.value.trim(),
      message: form.message.value.trim(),
    };

    try {
      const apiUrl = import.meta.env.VITE_CONTACT_API_URL || '/api/contact';
      const res = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Something went wrong.');
      setStatus('sent');
      form.reset();
    } catch (err) {
      setErrorMsg(err.message);
      setStatus('error');
    }
  }

  return (
    <section
      id="contact"
      className="scroll-mt-20 rounded-3xl border border-slate-800 bg-slate-900/60 p-8 shadow-2xl shadow-slate-950/40 sm:p-10"
    >
      <SectionHeading subtitle="Have a project in mind? Let's talk.">Contact</SectionHeading>

      {status === 'sent' ? (
        <div className="flex flex-col items-center gap-4 py-12 text-center">
          <span className="text-5xl">🎉</span>
          <p className="text-lg font-semibold text-white">Message sent!</p>
          <p className="text-slate-400">Thanks! I'll get back to you as soon as possible.</p>
          <button
            onClick={() => setStatus('idle')}
            className="mt-4 rounded-full border border-slate-700 px-5 py-2 text-sm text-slate-300 transition hover:border-slate-500"
          >
            Send another
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="grid max-w-2xl gap-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-sm font-medium text-slate-300">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Sachin Thakor"
                required
                className="rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-white placeholder:text-slate-500 transition focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-sm font-medium text-slate-300">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="sachinthakor1804@gmail.com"
                required
                className="rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-white placeholder:text-slate-500 transition focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400"
              />
            </div>
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="text-sm font-medium text-slate-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Tell me about your project or opportunity…"
              required
              className="rounded-2xl border border-slate-700 bg-slate-950 px-4 py-3 text-white placeholder:text-slate-500 transition focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400"
            />
          </div>

          {status === 'error' && (
            <p className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
              ⚠️ {errorMsg}
            </p>
          )}

          <button
            type="submit"
            disabled={status === 'sending'}
            className="inline-flex w-fit items-center gap-2 rounded-full bg-sky-500 px-6 py-3 font-semibold text-white shadow-md shadow-sky-500/25 transition hover:bg-sky-400 disabled:opacity-60"
          >
            {status === 'sending' ? (
              <>
                <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 12a9 9 0 1 1-6.219-8.56"/>
                </svg>
                Sending…
              </>
            ) : 'Send Message'}
          </button>
        </form>
      )}
    </section>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-slate-800 bg-slate-950/90 shadow-xl shadow-slate-950/40 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#" className="text-sm font-bold tracking-widest text-sky-400 uppercase">
          Sachin.dev
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className="text-sm font-medium text-slate-400 transition hover:text-white"
              >
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              className="rounded-full bg-sky-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-400"
            >
              Hire Me
            </a>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700 text-slate-400 transition hover:border-slate-500 hover:text-white md:hidden"
        >
          {open ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-slate-800 bg-slate-950/95 px-4 pb-4 md:hidden">
          <ul className="mt-2 flex flex-col gap-1">
            {[...NAV_LINKS, { label: 'Hire Me', href: '#contact' }].map(({ label, href }) => (
              <li key={label}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-slate-800 hover:text-white"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-800 py-10 text-center text-sm text-slate-500">
      <div className="flex justify-center gap-6 mb-4">
        <a href="https://github.com/st9318469-ctrl" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="transition hover:text-white">
          <GitHubIcon />
        </a>
        <a href="https://www.linkedin.com/in/sachin-thakor-947b85423/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition hover:text-white">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
        <a href="mailto:sachinthakor1804@gmail.com" aria-label="Email" className="transition hover:text-white">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
          </svg>
        </a>
      </div>
      <p>© {new Date().getFullYear()} Sachin Rajeshbhai Thakor. Built with React &amp; Tailwind CSS.</p>
    </footer>
  );
}

// ─── App ──────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <HeroSection />

        <main className="space-y-20 pb-20">
          <AboutSection />
          <SkillsSection />
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />
        </main>
      </div>

      <Footer />
    </div>
  );
}
