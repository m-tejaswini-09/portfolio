import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  ExternalLink,
  Download,
  Briefcase,
  GraduationCap,
  Award,
  Code2,
  Database,
  Wrench,
  Sparkles,
  Send,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

const RESUME_URL =
  "https://drive.google.com/file/d/1uGhRdfSGO7f_5LQJobO-L47jS336BXqz/view?usp=drive_link";
const LOGO_URL = "https://tapportfolio.lovable.app/assets/logo-CxDGoOCE.png";
const PHOTO_URL = "https://cdn.corenexis.com/f/4O9qbJDyygT.jpeg";
const EMAIL = "mtejaswiniii09@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/m-tejaswini09";
const GITHUB = "https://github.com/m-tejaswini-09";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mandapalli Tejaswini — Full Stack Developer Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Mandapalli Tejaswini, a Full Stack Java Developer in Bengaluru building scalable solutions with Java, Spring Boot, React, data analytics and AI.",
      },
      { property: "og:title", content: "Mandapalli Tejaswini — Full Stack Developer" },
      {
        property: "og:description",
        content:
          "Full Stack Java Developer skilled in Spring Boot, React.js, MySQL, Python and Generative AI. Explore projects, skills and certifications.",
      },
      { property: "og:type", content: "profile" },
      { property: "og:image", content: PHOTO_URL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: PHOTO_URL },
    ],
  }),
  component: Portfolio,
});

/* ---------------- helpers ---------------- */

function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return { ref, visible };
}

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${className}`}
    >
      {children}
    </div>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <Reveal className="mb-10 text-center">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold sm:text-4xl">
        <span className="text-gradient">{title}</span>
      </h2>
      <div className="mx-auto mt-4 h-px w-24 bg-gradient-brand" />
    </Reveal>
  );
}

function Card({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`glass rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:glow ${className}`}
    >
      {children}
    </div>
  );
}

/* ---------------- data ---------------- */

const ROLES = [
  "Developer",
  "Data Analyst",
  "Java Developer",
  "Full Stack Developer",
  "Web Developer",
  "AI/ML Engineer",
];

const NAV = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

const SKILLS = [
  {
    title: "Frontend",
    icon: Code2,
    items: ["HTML", "CSS", "JavaScript", "React.js"],
  },
  {
    title: "Backend",
    icon: Briefcase,
    items: ["Spring Boot", "Hibernate", "Flask", "REST APIs"],
  },
  {
    title: "Databases",
    icon: Database,
    items: ["MySQL", "Oracle SQL", "RDBMS"],
  },
  {
    title: "Tools",
    icon: Wrench,
    items: ["Git", "GitHub", "VS Code", "Eclipse", "PyCharm", "Google Colab"],
  },
  {
    title: "AI Tools",
    icon: Sparkles,
    items: ["ChatGPT", "Grok", "Claude", "GitHub Copilot", "LLMs", "Agentic AI"],
  },
];

const PROJECTS = [
  {
    title: "IPL Auction Value Analysis & Team Spending Intelligence",
    filter: "Data Analytics",
    category: "Data Analytics / Data Science / Data Visualization",
    status: "Completed",
    points: [
      "Engineered an end-to-end data pipeline using Python and MySQL to ingest, clean and aggregate over 261,000 ball-by-ball IPL delivery records across multiple seasons.",
      "Developed an automated entity-resolution pipeline with RapidFuzz string distance algorithms to resolve naming variations between auction records and match scorecards with over 81% precision.",
      "Formulated composite Performance Index and Value Score metrics to measure player cost-efficiency and designed an interactive Power BI dashboard to guide ROI-driven franchise bidding strategies.",
    ],
    stack: ["Python", "MySQL", "RapidFuzz", "Power BI", "Excel"],
    demo: "https://github.com/m-tejaswini-09/ipl-analysis",
    github: "https://github.com/m-tejaswini-09/ipl-analysis",
  },
  {
    title: "AI-Powered Document Q&A Chatbot",
    filter: "AI / ML",
    category: "Generative AI · LLM · Gemini API · NLP · Chatbot",
    status: "Completed",
    points: [
      "AI-powered document Q&A chatbot that parses PDF and TXT files using the Google Gemini API to deliver accurate, context-grounded answers with hallucination-safe fallbacks.",
    ],
    stack: ["Python", "Google Gemini API", "PyPDF2", "google-genai"],
    demo: "https://github.com/m-tejaswini-09/AI-Powered-Document-Q-A-Chatbot",
    github: "https://github.com/m-tejaswini-09/AI-Powered-Document-Q-A-Chatbot",
  },
];

const EDUCATION = [
  {
    degree: "B.Tech in Electronics & Communication Engineering",
    institute: "Sree Venkateswara College of Engineering",
    location: "Nellore, Andhra Pradesh",
    status: "Graduating 2026",
    description:
      "B.Tech in Electronics & Communication Engineering (2022–2026), graduating with 79.8% (≈8.4 CGPA). Alongside core coursework, I built a strong foundation in programming and problem-solving, applied through full-stack development, data analytics and generative AI projects.",
  },
  {
    degree: "Intermediate (MPC)",
    institute: "Narayana Jr. College",
    location: "Nellore, Andhra Pradesh",
    status: "Graduated 2022",
    description:
      "Completed Intermediate (Mathematics, Physics, Chemistry) with 87%, building a strong analytical and quantitative foundation that laid the groundwork for my engineering studies.",
  },
  {
    degree: "SSC",
    institute: "Ravindra Bharathi School",
    location: "Nellore, Andhra Pradesh",
    status: "Graduated 2020",
    description:
      "Completed SSC with 98%, building a strong academic foundation across core subjects that set the stage for my higher education.",
  },
];

const CERTIFICATIONS = [
  {
    name: "Introduction to Artificial Intelligence",
    platform: "Infosys Springboard",
    date: "June 2025",
    skills: [
      "Artificial Intelligence",
      "ML Fundamentals",
      "Supervised & Unsupervised Learning",
      "Neural Networks Basics",
      "NLP Basics",
    ],
    verify:
      "https://media.licdn.com/dms/image/v2/D4E22AQHqYIAIEuHS1g/feedshare-shrink_1280/B4EZgJyn3yGwAk-/0/1752510927004?e=1788998400&v=beta&t=HXrF9cFqkg8uL5OuYtwrkwFJRBWeFWEt2DNvz7yA1Mk",
  },
];

/* ---------------- sections ---------------- */

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <a href="#top" aria-label="Back to top" className="group flex items-center">
          <img
            src={LOGO_URL}
            alt="TAP Academy logo"
            className="h-9 w-auto transition-transform duration-300 group-hover:scale-105"
          />
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                className="relative rounded-full px-3.5 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Button
            asChild
            className="rounded-full bg-gradient-brand text-primary-foreground transition-all duration-300 hover:glow"
          >
            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
              <Download className="mr-1.5 size-4" />
              Download Resume
            </a>
          </Button>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle navigation"
            className="rounded-lg border border-border p-2 lg:hidden"
          >
            <span className="block h-0.5 w-5 bg-foreground" />
            <span className="mt-1 block h-0.5 w-5 bg-foreground" />
            <span className="mt-1 block h-0.5 w-5 bg-foreground" />
          </button>
        </div>
      </nav>

      {open && (
        <ul className="glass flex flex-col gap-1 px-5 pb-4 lg:hidden">
          {NAV.map((n) => (
            <li key={n.href}>
              <a
                href={n.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

function Typewriter() {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = ROLES[index % ROLES.length] ?? "";
    const done = !deleting && text === full;
    const cleared = deleting && text === "";

    const timeout = setTimeout(
      () => {
        if (done) {
          setDeleting(true);
          return;
        }
        if (cleared) {
          setDeleting(false);
          setIndex((i) => (i + 1) % ROLES.length);
          return;
        }
        setText(deleting ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1));
      },
      done ? 1400 : deleting ? 45 : 95,
    );

    return () => clearTimeout(timeout);
  }, [text, deleting, index]);

  return (
    <span className="font-display text-xl font-semibold sm:text-2xl">
      <span className="text-gradient">{text}</span>
      <span className="caret-blink ml-0.5 text-primary">|</span>
    </span>
  );
}

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-5 pb-24 pt-32 sm:pt-40">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <Reveal>
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-primary">
            <span className="size-2 animate-pulse rounded-full bg-primary" />
            Open for opportunities
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.08] sm:text-6xl">
            MANDAPALLI
            <br />
            <span className="text-gradient">TEJASWINI</span>
          </h1>

          <p className="mt-4 text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            Full Stack Developer
          </p>

          <div className="mt-5 min-h-9">
            <Typewriter />
          </div>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            Building scalable solutions with Java, data and AI.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-gradient-brand text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:glow"
            >
              <a href="#projects">
                View Projects <ArrowUpRight className="ml-1 size-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-border bg-transparent transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:bg-secondary"
            >
              <a href="#contact">
                <Mail className="mr-1.5 size-4" /> Contact Me
              </a>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-2">
              <MapPin className="size-4 text-primary" /> Bengaluru, India
            </span>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-primary"
            >
              <Linkedin className="size-4" /> LinkedIn
            </a>
            <a
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition-colors hover:text-primary"
            >
              <Github className="size-4" /> GitHub
            </a>
          </div>
        </Reveal>

        <Reveal delay={150} className="justify-self-center">
          <div className="relative float-slow">
            <div className="absolute -inset-6 rounded-full bg-gradient-brand opacity-25 blur-3xl" />
            <div className="glass relative rounded-full p-2 glow">
              <img
                src={PHOTO_URL}
                alt="Portrait of Mandapalli Tejaswini"
                loading="lazy"
                className="size-64 rounded-full object-cover sm:size-80"
              />
            </div>
            <div className="glass absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-4 py-2 text-xs font-medium">
              <span className="text-gradient font-semibold">1 year</span>
              <span className="text-muted-foreground"> · Full Stack Development</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Who I am" title="About Me" />
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <Card className="h-full">
              <h3 className="text-lg font-semibold">Snapshot</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                I am a passionate Full Stack Java Developer with skills in Java, Spring Boot,
                Hibernate, MySQL, JavaScript and React.js. I enjoy building practical web
                applications and solving problems using programming, data analytics and AI
                technologies. I am eager to learn, grow and contribute to innovative software
                projects.
              </p>
              <dl className="mt-6 grid grid-cols-2 gap-4 text-sm">
                {[
                  ["Experience", "1 year"],
                  ["Domain", "Full Stack Dev"],
                  ["Location", "Bengaluru, India"],
                  ["Status", "Open to work"],
                ].map(([k, v]) => (
                  <div key={k} className="rounded-xl bg-secondary/60 p-3">
                    <dt className="text-xs uppercase tracking-wider text-muted-foreground">{k}</dt>
                    <dd className="mt-1 font-medium">{v}</dd>
                  </div>
                ))}
              </dl>
            </Card>
          </Reveal>

          <Reveal delay={120}>
            <Card className="h-full space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                I am a motivated Full Stack Java Developer with a strong foundation in Java, Spring
                Boot, Hibernate, MySQL, JavaScript, React.js and REST APIs. I have hands-on
                experience developing full-stack applications, including a Placement Preparation &
                Recruitment Portal, where I worked on role-based authentication, recruitment
                workflows and responsive front-end components.
              </p>
              <p>
                I also work with Python, Power BI, Excel and AI technologies. My projects include
                IPL Auction Value Analysis & Team Spending Intelligence, where I developed a data
                pipeline and interactive Power BI dashboard, and DocuQuery AI, an AI-powered
                document Q&A chatbot using the Google Gemini API.
              </p>
              <p>
                Through my internships at Tap Academy and YBI Foundation, I gained practical
                exposure to backend development, REST APIs, databases, machine learning and
                Generative AI workflows. I am a continuous learner with strong problem-solving,
                teamwork, communication and adaptability skills, looking forward to building
                scalable applications and growing as a software developer.
              </p>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Toolbox" title="Skills & Technologies" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SKILLS.map((group, i) => (
            <Reveal key={group.title} delay={i * 90}>
              <Card className="h-full">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 place-items-center rounded-xl bg-gradient-brand text-primary-foreground">
                    <group.icon className="size-5" />
                  </span>
                  <h3 className="text-base font-semibold">{group.title}</h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-xs text-muted-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/50 hover:text-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const filters = useMemo(
    () => ["All", ...Array.from(new Set(PROJECTS.map((p) => p.filter)))],
    [],
  );
  const [active, setActive] = useState("All");
  const list = PROJECTS.filter((p) => active === "All" || p.filter === active);

  return (
    <section id="projects" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Selected work" title="Projects" />

        <Reveal className="mb-10 flex flex-wrap justify-center gap-2">
          <div className="glass inline-flex flex-wrap gap-1 rounded-full p-1">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`rounded-full px-4 py-2 text-sm transition-all duration-300 ${
                  active === f
                    ? "bg-gradient-brand font-semibold text-primary-foreground glow"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          {list.map((p, i) => (
            <Reveal key={p.title} delay={i * 110}>
              <Card className="group h-full">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold leading-snug transition-colors group-hover:text-primary">
                    {p.title}
                  </h3>
                  <span className="shrink-0 rounded-full border border-primary/40 px-3 py-1 text-[11px] font-medium text-primary">
                    {p.status}
                  </span>
                </div>
                <p className="mt-2 text-xs uppercase tracking-wider text-muted-foreground">
                  {p.category}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gradient-brand" />
                      {pt}
                    </li>
                  ))}
                </ul>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-md bg-secondary/70 px-2.5 py-1 text-[11px] text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-6 flex gap-3">
                  <Button
                    asChild
                    size="sm"
                    className="rounded-full bg-gradient-brand text-primary-foreground hover:glow"
                  >
                    <a href={p.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-1.5 size-3.5" /> Live Demo
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="rounded-full border-border bg-transparent hover:border-primary/60 hover:bg-secondary"
                  >
                    <a href={p.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-1.5 size-3.5" /> Code
                    </a>
                  </Button>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Education() {
  return (
    <section id="education" className="px-5 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionTitle eyebrow="Academics" title="Education" />
        <div className="relative pl-6 sm:pl-10">
          <div className="absolute left-0 top-2 h-full w-px bg-gradient-brand opacity-60 sm:left-3" />
          <div className="space-y-6">
            {EDUCATION.map((e, i) => (
              <Reveal key={e.degree} delay={i * 110}>
                <div className="relative">
                  <span className="absolute -left-6 top-7 size-3 rounded-full bg-gradient-brand glow sm:-left-[2.35rem]" />
                  <Card>
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="flex items-center gap-2 text-base font-semibold">
                          <GraduationCap className="size-4 text-primary" />
                          {e.degree}
                        </h3>
                        <p className="mt-1 text-sm text-muted-foreground">
                          {e.institute} · {e.location}
                        </p>
                      </div>
                      <span className="rounded-full border border-primary/40 px-3 py-1 text-[11px] text-primary">
                        {e.status}
                      </span>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {e.description}
                    </p>
                  </Card>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section id="certifications" className="px-5 py-24">
      <div className="mx-auto max-w-4xl">
        <SectionTitle eyebrow="Credentials" title="Certifications" />
        <div className="grid gap-5">
          {CERTIFICATIONS.map((c, i) => (
            <Reveal key={c.name} delay={i * 110}>
              <Card>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex items-start gap-3">
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-gradient-brand text-primary-foreground">
                      <Award className="size-5" />
                    </span>
                    <div>
                      <h3 className="text-base font-semibold">{c.name}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {c.platform} · {c.date}
                      </p>
                    </div>
                  </div>
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="rounded-full border-border bg-transparent hover:border-primary/60 hover:bg-secondary"
                  >
                    <a href={c.verify} target="_blank" rel="noopener noreferrer">
                      Verify <ExternalLink className="ml-1.5 size-3.5" />
                    </a>
                  </Button>
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {c.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border bg-secondary/60 px-3 py-1.5 text-xs text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="px-5 py-16">
      <Reveal className="mx-auto max-w-5xl">
        <div className="glass relative overflow-hidden rounded-3xl px-6 py-14 text-center glow-accent">
          <div className="absolute -left-16 -top-16 size-56 rounded-full bg-gradient-brand opacity-25 blur-3xl" />
          <div className="absolute -bottom-20 -right-10 size-56 rounded-full bg-gradient-brand opacity-20 blur-3xl" />
          <div className="relative">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
              Open for opportunities
            </p>
            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              <span className="text-gradient">Let's work together!</span>
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
              Looking for a full stack developer who can ship across Java, React and AI-driven data
              workflows? Let's talk.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-gradient-brand text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:glow"
              >
                <a href="#contact">
                  <Send className="mr-1.5 size-4" /> Get in touch
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-border bg-transparent transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/60 hover:bg-secondary"
              >
                <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
                  <Download className="mr-1.5 size-4" /> Download Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in every field.");
      return;
    }
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      `Portfolio enquiry from ${form.name}`,
    )}&body=${encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)}`;
    toast.success("Opening your email client…");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="px-5 py-24">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="Say hello" title="Contact" />
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <Card className="h-full">
              <h3 className="text-lg font-semibold">Let's connect</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                I'm currently open to full stack, backend and data-focused roles. Drop a message and
                I'll get back to you soon.
              </p>
              <div className="mt-6 space-y-3 text-sm">
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-3 rounded-xl bg-secondary/60 p-3 transition-all hover:-translate-y-0.5 hover:text-primary"
                >
                  <Mail className="size-4 text-primary" /> {EMAIL}
                </a>
                <div className="flex items-center gap-3 rounded-xl bg-secondary/60 p-3">
                  <MapPin className="size-4 text-primary" /> Bengaluru, India
                </div>
                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl bg-secondary/60 p-3 transition-all hover:-translate-y-0.5 hover:text-primary"
                >
                  <Linkedin className="size-4 text-primary" /> m-tejaswini09
                </a>
                <a
                  href={GITHUB}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 rounded-xl bg-secondary/60 p-3 transition-all hover:-translate-y-0.5 hover:text-primary"
                >
                  <Github className="size-4 text-primary" /> m-tejaswini-09
                </a>
              </div>
            </Card>
          </Reveal>

          <Reveal delay={120}>
            <Card className="h-full">
              <form onSubmit={submit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="text-xs uppercase tracking-wider text-muted-foreground">
                      Name
                    </label>
                    <Input
                      id="name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      className="mt-2 border-border bg-secondary/50 focus-visible:ring-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-xs uppercase tracking-wider text-muted-foreground">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="you@example.com"
                      className="mt-2 border-border bg-secondary/50 focus-visible:ring-primary"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="text-xs uppercase tracking-wider text-muted-foreground">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell me about the role or project…"
                    className="mt-2 border-border bg-secondary/50 focus-visible:ring-primary"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full rounded-full bg-gradient-brand text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:glow"
                >
                  <Send className="mr-1.5 size-4" /> Send Message
                </Button>
              </form>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border px-5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 sm:flex-row">
        <a href="#top" className="flex items-center gap-3">
          <img src={LOGO_URL} alt="TAP Academy logo" className="h-8 w-auto" />
        </a>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()}{" "}
          <span className="font-medium text-foreground">MANDAPALLI TEJASWINI</span>. All rights
          reserved.
        </p>
        <div className="flex items-center gap-3">
          {[
            { href: LINKEDIN, Icon: Linkedin, label: "LinkedIn" },
            { href: GITHUB, Icon: Github, label: "GitHub" },
            { href: `mailto:${EMAIL}`, Icon: Mail, label: "Email" },
          ].map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="glass grid size-9 place-items-center rounded-full transition-all duration-300 hover:-translate-y-0.5 hover:text-primary hover:glow"
            >
              <Icon className="size-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

function Portfolio() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <CTA />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
