import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import {
  Github, Linkedin, Mail, Download, ArrowRight, ExternalLink,
  Code2, Sparkles, Cpu, Cloud, Database, Brain, Wrench,
  GraduationCap, Award, Briefcase, MapPin, Send, Phone,
} from "lucide-react";
import { ParticlesBg } from "@/components/ParticlesBg";
import { ProjectModal } from "@/components/ProjectModal";
import {
  projects, experience, skills, techBadges, certifications, education, social, personal,
  type Project,
} from "@/lib/portfolio-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Oshadi Jayananda — Software Engineer & Full Stack Developer" },
      { name: "description", content: personal.summary.slice(0, 160) },
      { property: "og:title", content: "Oshadi Jayananda — Software Engineer & Full Stack Developer" },
      { property: "og:description", content: personal.summary.slice(0, 160) },
    ],
  }),
  component: Portfolio,
});

const skillIcons = [Code2, Cpu, Cloud, Database, Brain, Wrench];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

function Portfolio() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <div className="relative min-h-screen text-foreground">
      <ParticlesBg />
      <Nav />
      <main className="mx-auto max-w-6xl px-5 sm:px-8">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects onOpen={setActive} />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <ProjectModal project={active} onClose={() => setActive(null)} />
    </div>
  );
}

function Nav() {
  const links = [
    ["About", "#about"], ["Experience", "#experience"], ["Skills", "#skills"],
    ["Projects", "#projects"], ["Education", "#education"], ["Contact", "#contact"],
  ];
  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}
      className="sticky top-4 z-40 mx-auto mt-4 w-[calc(100%-2rem)] max-w-5xl"
    >
      <div className="glass flex items-center justify-between rounded-full px-5 py-3">
        <a href="#top" className="font-display text-sm font-bold tracking-tight">
          <span className="gradient-text">&lt;dev/&gt;</span>
        </a>
        <nav className="hidden gap-6 md:flex">
          {links.map(([l, h]) => (
            <a key={h} href={h} className="text-sm text-muted-foreground transition hover:text-foreground">{l}</a>
          ))}
        </nav>
        <a href={social.cv} download className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[oklch(0.7_0.26_295)] to-[oklch(0.65_0.22_250)] px-4 py-1.5 text-xs font-medium text-white transition hover:opacity-90">
          <Download className="h-3.5 w-3.5" /> CV
        </a>
      </div>
    </motion.header>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section id="top" ref={ref} className="flex min-h-[92vh] flex-col items-center justify-center pt-12 text-center">
      <motion.div style={{ y, opacity }} className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
          className="glass mx-auto inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs text-muted-foreground"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
          Available for internships & freelance
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-8 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl md:text-8xl"
        >
          Oshadi Jayananda
          <br />
          <span className="gradient-text">Full Stack Developer.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}
          className="mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg"
        >
          Final-year Software Engineering undergraduate at SLIIT crafting
          performant, accessible products across <span className="text-foreground">React, Node.js, Laravel, Python</span> and beyond.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[oklch(0.7_0.26_295)] to-[oklch(0.65_0.22_250)] px-6 py-3 text-sm font-medium text-white shadow-lg shadow-[oklch(0.7_0.26_295/0.3)] transition hover:shadow-[oklch(0.7_0.26_295/0.5)]">
            View Projects
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
          </a>
          <a href="#contact" className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition hover:bg-white/10">
            <Mail className="h-4 w-4" /> Get in touch
          </a>
          <div className="flex items-center gap-1">
            <SocialIcon href={social.github} icon={Github} />
            <SocialIcon href={social.linkedin} icon={Linkedin} />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
          className="mt-16 flex flex-wrap justify-center gap-2"
        >
          {techBadges.map((t, i) => (
            <motion.span
              key={t}
              initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + i * 0.04 }}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground backdrop-blur-sm"
            >
              {t}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

function SocialIcon({ href, icon: Icon }: { href: string; icon: typeof Github }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="glass grid h-10 w-10 place-items-center rounded-full text-muted-foreground transition hover:text-foreground">
      <Icon className="h-4 w-4" />
    </a>
  );
}

function SectionHeader({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <motion.div
      variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}
      className="mx-auto mb-12 max-w-2xl text-center"
    >
      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[oklch(0.78_0.15_200)]">{eyebrow}</div>
      <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">{title}</h2>
      {sub && <p className="mt-3 text-muted-foreground">{sub}</p>}
    </motion.div>
  );
}

function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <SectionHeader eyebrow="About" title="Passionate engineer, continuous learner." />
      <motion.div
        variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}
        className="glass mx-auto max-w-3xl rounded-2xl p-8 sm:p-10"
      >
        <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
          I am a fourth-year undergraduate in Software Engineering at SLIIT, specializing as a
          <span className="text-foreground"> full-stack developer</span>. With a passion for technology
          and continuous learning, I am committed to staying at the forefront of cutting-edge technologies.
        </p>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
          My skills span various programming languages, web development frameworks, and database management
          systems. I aim to contribute to a forward-thinking organization that challenges my abilities
          and supports my professional growth.
        </p>
        <div className="mt-8 grid grid-cols-3 gap-4 text-center">
          {[["3+", "Years coding"], ["6+", "Projects built"], ["10+", "Technologies"]].map(([n, l]) => (
            <div key={l} className="rounded-xl border border-white/5 bg-white/[0.02] p-4">
              <div className="font-display text-2xl font-bold gradient-text sm:text-3xl">{n}</div>
              <div className="mt-1 text-xs text-muted-foreground">{l}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <SectionHeader eyebrow="Experience" title="Where I've been." />
      <div className="relative mx-auto max-w-3xl">
        <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-[oklch(0.7_0.26_295)] via-[oklch(0.65_0.22_250)] to-transparent sm:left-1/2" />
        {experience.map((exp, i) => (
          <motion.div
            key={exp.role}
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}
            className={`relative mb-10 flex flex-col gap-4 pl-12 sm:flex-row sm:pl-0 ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}
          >
            <div className="absolute left-4 top-3 grid h-3 w-3 -translate-x-1/2 place-items-center rounded-full bg-gradient-to-br from-[oklch(0.7_0.26_295)] to-[oklch(0.78_0.15_200)] ring-4 ring-background sm:left-1/2">
              <Briefcase className="h-2 w-2 text-white opacity-0" />
            </div>
            <div className="sm:w-1/2 sm:px-8">
              <div className="glass rounded-xl p-5">
                <div className="text-xs font-medium text-[oklch(0.78_0.15_200)]">{exp.period}</div>
                <h3 className="mt-1 font-display text-lg font-bold">{exp.role}</h3>
                <div className="text-sm text-muted-foreground">{exp.company}</div>
                <ul className="mt-3 space-y-1.5">
                  {exp.points.map((p) => (
                    <li key={p} className="flex gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[oklch(0.7_0.26_295)]" />{p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="hidden sm:block sm:w-1/2" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <SectionHeader eyebrow="Skills" title="The toolkit." sub="A snapshot of the technologies I reach for." />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((s, i) => {
          const Icon = skillIcons[i % skillIcons.length];
          return (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -6 }}
              className="group glass relative overflow-hidden rounded-2xl p-6"
            >
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[oklch(0.7_0.26_295/0.12)] via-transparent to-[oklch(0.78_0.15_200/0.08)] opacity-0 transition group-hover:opacity-100" />
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-[oklch(0.7_0.26_295)] to-[oklch(0.65_0.22_250)]">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mt-4 font-display text-lg font-bold">{s.name}</h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {s.items.map((it) => (
                  <span key={it} className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-xs text-muted-foreground">{it}</span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

function Projects({ onOpen }: { onOpen: (p: Project) => void }) {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <SectionHeader eyebrow="Featured Work" title="Selected projects." sub="A few things I've built recently." />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <motion.button
            key={p.id} onClick={() => onOpen(p)}
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
            whileHover={{ y: -6 }}
            className={`group glass relative overflow-hidden rounded-2xl text-left ${p.featured ? "md:col-span-2" : ""}`}
          >
            <div className={`relative overflow-hidden ${p.featured ? "aspect-[2.4/1]" : "aspect-[2/1]"}`}>
              <img
                src={p.banner}
                alt={`${p.title} banner`}
                loading="lazy"
                width={1280}
                height={640}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
              <div className={`absolute inset-0 bg-gradient-to-br ${p.accent} opacity-0 mix-blend-overlay transition duration-500 group-hover:opacity-60`} />
            </div>
            <div className="relative p-6">
              <div className={`pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-gradient-to-br ${p.accent} opacity-20 blur-3xl transition group-hover:opacity-40`} />
              <div className="relative flex items-start justify-between gap-4">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-white/5 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">{p.category}</span>
                  {p.featured && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-[oklch(0.7_0.26_295)] to-[oklch(0.65_0.22_250)] px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-white">
                      <Sparkles className="h-2.5 w-2.5" /> Featured
                    </span>
                  )}
                </div>
                <ExternalLink className="h-4 w-4 shrink-0 text-muted-foreground transition group-hover:text-foreground" />
              </div>
              <h3 className={`relative mt-3 font-display font-bold ${p.featured ? "text-2xl sm:text-4xl" : "text-xl"}`}>
                {p.title}
              </h3>
              <p className="relative mt-2 text-sm text-muted-foreground">{p.short}</p>
              <div className="relative mt-4 flex flex-wrap gap-1.5">
                {p.stack.slice(0, 5).map((t) => (
                  <span key={t} className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-foreground/80">{t}</span>
                ))}
                {p.stack.length > 5 && (
                  <span className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 text-[11px] text-muted-foreground">+{p.stack.length - 5}</span>
                )}
              </div>
            </div>
          </motion.button>

        ))}
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="py-24 sm:py-32">
      <SectionHeader eyebrow="Education" title="Foundations." />
      <div className="mx-auto grid max-w-3xl gap-5">
        {education.map((e, i) => (
          <motion.div
            key={e.school}
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="glass flex gap-4 rounded-2xl p-6"
          >
            <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-[oklch(0.65_0.22_250)] to-[oklch(0.78_0.15_200)]">
              <GraduationCap className="h-5 w-5 text-white" />
            </div>
            <div className="min-w-0 flex-1">
              <div className="text-xs font-medium text-[oklch(0.78_0.15_200)]">{e.period}</div>
              <h3 className="mt-1 font-display text-lg font-bold">{e.school}</h3>
              <p className="text-sm text-muted-foreground">{e.degree}</p>
              <p className="mt-1 text-xs text-muted-foreground/80">{e.detail}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Certifications() {
  if (certifications.length === 0) return null;
  return (
    <section id="certs" className="py-24 sm:py-32">
      <SectionHeader eyebrow="Certifications" title="Continuously learning." />
      <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
        {certifications.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ delay: i * 0.08 }}
            whileHover={{ y: -4 }}
            className="glass group flex items-start gap-4 rounded-2xl p-5"
          >
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-gradient-to-br from-[oklch(0.7_0.26_295)] to-[oklch(0.65_0.22_250)]">
              <Award className="h-5 w-5 text-white" />
            </div>
            <div className="min-w-0">
              <h3 className="font-display text-sm font-bold leading-snug">{c.name}</h3>
              <div className="mt-1 text-xs text-muted-foreground">{c.issuer} • {c.year}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <motion.div
        variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}
        className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.7_0.26_295/0.25)] via-[oklch(0.65_0.22_250/0.18)] to-[oklch(0.78_0.15_200/0.2)]" />
        <div className="glass relative rounded-3xl p-10 text-center sm:p-14">
          <div className="text-xs font-semibold uppercase tracking-[0.2em] text-[oklch(0.78_0.15_200)]">Contact</div>
          <h2 className="mt-3 font-display text-3xl font-bold sm:text-5xl">Let's build something.</h2>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">
            Open to internships, full-time roles, and freelance collaborations. The fastest way to reach me is email.
          </p>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-3 text-xs text-muted-foreground">
            <span className="inline-flex items-center gap-1"><MapPin className="h-3 w-3" /> {personal.location}</span>
            <span className="hidden sm:inline">•</span>
            <span className="inline-flex items-center gap-1"><Phone className="h-3 w-3" /> {personal.phone}</span>
            <span className="hidden sm:inline">•</span>
            <span>Remote-friendly</span>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={social.email} className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[oklch(0.7_0.26_295)] to-[oklch(0.65_0.22_250)] px-6 py-3 text-sm font-medium text-white shadow-lg shadow-[oklch(0.7_0.26_295/0.4)] transition hover:shadow-[oklch(0.7_0.26_295/0.6)]">
              <Send className="h-4 w-4" /> Send a message
            </a>
            <a href={social.cv} download className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition hover:bg-white/10">
              <Download className="h-4 w-4" /> Download CV
            </a>
          </div>
          <div className="mt-6 flex justify-center gap-2">
            <SocialIcon href={social.github} icon={Github} />
            <SocialIcon href={social.linkedin} icon={Linkedin} />
            <SocialIcon href={social.email} icon={Mail} />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-5 py-10 sm:px-8">
      <div className="flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-xs text-muted-foreground sm:flex-row">
        <div>© {new Date().getFullYear()} Oshadi Jayananda — Built with React, TanStack & Framer Motion.</div>
        <div className="flex items-center gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          All systems operational
        </div>
      </div>
    </footer>
  );
}
