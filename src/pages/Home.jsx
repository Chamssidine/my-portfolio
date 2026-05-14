/* eslint-disable react/prop-types */
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  FaArrowRight,
  FaArrowUpRightFromSquare,
  FaCode,
  FaDatabase,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaRobot,
  FaServer,
} from "react-icons/fa6";

const projects = [
  {
    title: "weg-to-deutschland",
    category: "Web App",
    visibility: "Private",
    visual: "./web.webp",
    tech: ["TypeScript", "Product UX", "Web App"],
    description: {
      fr: "Projet TypeScript recent autour d'une experience web produit, pense pour accompagner un parcours utilisateur concret.",
      de: "Aktuelles TypeScript-Projekt mit Produktfokus und einer klaren Web-User-Journey.",
    },
  },
  {
    title: "AIToolkitMaster",
    category: "AI Tools",
    visibility: "Private",
    visual: "./web.webp",
    tech: ["TypeScript", "AI", "Automation"],
    description: {
      fr: "Toolkit prive pour structurer des fonctionnalites IA utiles dans une experience web exploitable.",
      de: "Privates Toolkit, das KI-Funktionen in eine nutzbare Web-Erfahrung bringt.",
    },
  },
  {
    title: "RecruteMoi Back-End",
    category: "Backend",
    visibility: "Private",
    visual: "./web.webp",
    tech: ["TypeScript", "API", "Recruitment"],
    description: {
      fr: "Backend TypeScript pour un produit de recrutement avec logique serveur et structure API.",
      de: "TypeScript-Backend fur ein Recruiting-Produkt mit API-Struktur und Business-Logik.",
    },
  },
  {
    title: "ResumeArchit",
    category: "SaaS",
    visibility: "Public",
    url: "https://github.com/Chamssidine/ResumeArchit",
    visual: "./web.webp",
    tech: ["TypeScript", "React", "Next.js", "Firebase"],
    description: {
      fr: "Application web pour creer, sauvegarder et exporter des CV professionnels avec preview en temps reel.",
      de: "Web-App zum Erstellen, Speichern und Exportieren professioneller Lebenslaufe mit Live-Preview.",
    },
  },
  {
    title: "AI Chat App",
    category: "AI",
    visibility: "Public",
    url: "https://github.com/Chamssidine/chat-app",
    visual: "./web.webp",
    tech: ["React", "Node.js", "Express", "OpenAI API"],
    description: {
      fr: "Application full-stack de chat IA avec upload de documents, analyse de CV et integration OpenAI.",
      de: "Full-Stack KI-Chat-App mit Dokument-Upload, CV-Analyse und OpenAI-Integration.",
    },
  },
  {
    title: "Job-Scrawler",
    category: "Automation",
    visibility: "Public",
    url: "https://github.com/Chamssidine/Job-Scrawler",
    visual: "./web.webp",
    tech: ["JavaScript", "Scraping", "Automation"],
    description: {
      fr: "Automatisation de recherche et collecte d'offres, utile pour montrer le traitement de donnees web.",
      de: "Automatisierung fur Jobsuche und Web-Datenverarbeitung.",
    },
  },
];

const otherProjects = [
  "BidSense",
  "Trendora",
  "PriceTrackr",
  "youtube-summary-tool",
  "ImageAuth",
  "FaceDetection",
  "my-portfolio",
  "IdeaHub",
];

const copy = {
  fr: {
    heroBadge: "Full-Stack Developer web",
    title: "Je construis des applications web full-stack modernes et fiables.",
    subtitle:
      "Je conçois des interfaces React/Next.js propres et des backends solides en TypeScript pour transformer des besoins concrets en produits web utilisables.",
    primary: "Voir les projets",
    secondary: "Me contacter",
    stats: [
      ["25", "projets GitHub"],
      ["10+", "produits web & IA"],
      ["TS", "stack principale"],
    ],
    profileLabel: "Profil",
    profileTitle: "Un profil full-stack centre sur le produit web.",
    profileText:
      "Mes projets montrent un axe clair : applications web, backends, outils IA, automatisation et plateformes metier. Les experiences mobile ou VR existent, mais elles restent secondaires face a mon positionnement principal : livrer des produits web de bout en bout.",
    skillLabel: "Stack",
    skillTitle: "Ce que je mets en avant",
    skills: [
      {
        icon: FaCode,
        title: "Frontend",
        text: "React, Next.js, Tailwind, interfaces responsives et UX claire.",
      },
      {
        icon: FaServer,
        title: "Backend",
        text: "APIs TypeScript, Express, ASP.NET, auth et logique metier.",
      },
      {
        icon: FaRobot,
        title: "IA & automation",
        text: "OpenAI API, analyse de documents, scraping, outils de productivite.",
      },
      {
        icon: FaDatabase,
        title: "Data",
        text: "Firebase, stockage, workflows, donnees produit et integrations.",
      },
    ],
    projectsLabel: "Projets selectionnes",
    projectsTitle: "Des projets publics et prives qui racontent une progression.",
    privateLabel: "Case study privee",
    publicLabel: "Repository",
    otherTitle: "Autres projets",
    contactLabel: "Contact",
    contactTitle: "Discutons d'une application web a construire.",
    contactText:
      "Je suis ouvert aux opportunites full-stack, projets freelance et collaborations produit.",
    email: "Envoyer un email",
  },
  de: {
    heroBadge: "Full-Stack Webentwickler",
    title: "Ich baue moderne und verlassliche Full-Stack-Webanwendungen.",
    subtitle:
      "Ich entwickle saubere React/Next.js-Interfaces und robuste TypeScript-Backends, um konkrete Anforderungen in nutzbare Webprodukte zu verwandeln.",
    primary: "Projekte ansehen",
    secondary: "Kontakt aufnehmen",
    stats: [
      ["25", "GitHub-Projekte"],
      ["10+", "Web- und KI-Produkte"],
      ["TS", "Hauptstack"],
    ],
    profileLabel: "Profil",
    profileTitle: "Ein Full-Stack-Profil mit Fokus auf Webprodukte.",
    profileText:
      "Meine Projekte zeigen eine klare Richtung: Webanwendungen, Backends, KI-Tools, Automatisierung und Business-Plattformen. Mobile oder VR-Erfahrung ist vorhanden, bleibt aber sekundar gegenuber meinem Kernfokus: Webprodukte von Anfang bis Ende liefern.",
    skillLabel: "Stack",
    skillTitle: "Was ich hervorhebe",
    skills: [
      {
        icon: FaCode,
        title: "Frontend",
        text: "React, Next.js, Tailwind, responsive Interfaces und klare UX.",
      },
      {
        icon: FaServer,
        title: "Backend",
        text: "TypeScript-APIs, Express, ASP.NET, Auth und Business-Logik.",
      },
      {
        icon: FaRobot,
        title: "KI & Automation",
        text: "OpenAI API, Dokumentanalyse, Scraping und Produktivitatstools.",
      },
      {
        icon: FaDatabase,
        title: "Data",
        text: "Firebase, Storage, Workflows, Produktdaten und Integrationen.",
      },
    ],
    projectsLabel: "Ausgewahlte Projekte",
    projectsTitle: "Offentliche und private Projekte, die Entwicklung zeigen.",
    privateLabel: "Private Case Study",
    publicLabel: "Repository",
    otherTitle: "Weitere Projekte",
    contactLabel: "Kontakt",
    contactTitle: "Lass uns uber eine Webanwendung sprechen.",
    contactText:
      "Ich bin offen fur Full-Stack-Rollen, Freelance-Projekte und Produkt-Kollaboration.",
    email: "E-Mail senden",
  },
};

function Home({ language }) {
  const t = copy[language];
  const [activeProject, setActiveProject] = useState(projects[0]);

  const subject = useMemo(
    () =>
      encodeURIComponent(
        language === "fr"
          ? "Projet full-stack depuis le portfolio"
          : "Full-Stack Projekt aus dem Portfolio",
      ),
    [language],
  );

  return (
    <div id="home" className="relative">
      <section className="mx-auto grid min-h-[calc(100vh-80px)] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[1.04fr_0.96fr] lg:px-10 lg:py-20">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-black text-[#5eead4] shadow-sm backdrop-blur">
            <FaCode />
            {t.heroBadge}
          </span>
          <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[0.95] tracking-tight text-[#f7f0e6] sm:text-6xl lg:text-7xl">
            {t.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#cdd8d0]">
            {t.subtitle}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-3 rounded-full bg-[#5eead4] px-7 py-4 text-base font-black text-[#08110f] shadow-xl shadow-[#5eead4]/20 transition hover:-translate-y-1 hover:bg-[#f4c76b]"
            >
              {t.primary}
              <FaArrowRight className="text-sm" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/10 px-7 py-4 text-base font-black text-white shadow-sm backdrop-blur transition hover:-translate-y-1 hover:border-[#5eead4]"
            >
              {t.secondary}
            </a>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
            {t.stats.map(([value, label]) => (
              <div
                key={label}
                className="rounded-3xl border border-white/10 bg-white/10 p-4 shadow-sm shadow-black/10 backdrop-blur"
              >
                <p className="text-3xl font-black text-[#f7f0e6]">{value}</p>
                <p className="mt-1 text-xs font-bold uppercase text-[#aab8b0]">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.6 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-[44px] border border-white/10 bg-white/10 p-5 shadow-2xl shadow-black/30 backdrop-blur">
            <div className="hero-console rounded-[34px] bg-[#101b18]/95 p-6 text-white">
              <div className="flex items-center justify-between gap-5">
                <div>
                  <p className="text-sm font-bold text-[#f4c76b]">Portfolio 2026</p>
                  <h2 className="mt-1 text-3xl font-black">Chamssidine Abdallah</h2>
                </div>
                <img
                  src="/profile.png"
                  alt="Chamssidine Abdallah"
                  className="h-24 w-24 rounded-[28px] border-4 border-white/10 object-cover"
                />
              </div>

              <div className="mt-8 overflow-hidden rounded-[28px] border border-white/10 bg-black/20">
                <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
                  <span className="h-3 w-3 rounded-full bg-[#ff6b6b]" />
                  <span className="h-3 w-3 rounded-full bg-[#f4c76b]" />
                  <span className="h-3 w-3 rounded-full bg-[#5eead4]" />
                  <span className="ml-2 text-xs font-bold text-[#8fa39a]">
                    fullstack.profile.ts
                  </span>
                </div>
                <div className="space-y-3 p-4 font-mono text-sm">
                  {[
                    "const stack = ['TypeScript', 'React', 'Node'];",
                    "build(product).with(api).ship();",
                    "focus: web apps + AI automation;",
                  ].map((line, index) => (
                    <div
                      key={line}
                      className="code-line rounded-2xl bg-white/5 px-4 py-3 text-[#d7dfd8]"
                      style={{ animationDelay: `${index * 0.45}s` }}
                    >
                      <span className="text-[#5eead4]">0{index + 1}</span>{" "}
                      {line}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 grid gap-3">
                {t.skills.slice(0, 3).map(({ icon: Icon, title, text }) => (
                  <div
                    key={title}
                    className="floating-card rounded-3xl border border-white/10 bg-white/10 p-4 backdrop-blur"
                  >
                    <Icon className="mb-4 text-2xl text-[#5eead4]" />
                    <h3 className="text-lg font-black">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#d7dfd8]">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-10 rounded-[44px] border border-white/10 bg-white/10 p-6 shadow-xl shadow-black/10 backdrop-blur lg:grid-cols-[0.8fr_1.2fr] lg:p-10">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#0f766e]">
              {t.profileLabel}
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight text-[#f7f0e6] sm:text-5xl">
              {t.profileTitle}
            </h2>
          </div>
          <p className="text-lg leading-8 text-[#cdd8d0] lg:pt-10">{t.profileText}</p>
        </div>
      </section>

      <section id="skills" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <p className="text-sm font-black uppercase tracking-[0.24em] text-[#0f766e]">
          {t.skillLabel}
        </p>
        <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight text-[#f7f0e6] sm:text-5xl">
          {t.skillTitle}
        </h2>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {t.skills.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="rounded-[32px] border border-white/10 bg-white/10 p-6 shadow-sm shadow-black/10 backdrop-blur transition hover:-translate-y-1 hover:border-[#5eead4]/50"
            >
              <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-[#0f766e] text-white">
                <Icon />
              </div>
              <h3 className="text-xl font-black text-[#f7f0e6]">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#cdd8d0]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="max-w-4xl">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-[#0f766e]">
            {t.projectsLabel}
          </p>
          <h2 className="mt-4 text-4xl font-black leading-tight text-[#f7f0e6] sm:text-5xl">
            {t.projectsTitle}
          </h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="grid gap-3">
            {projects.map((project) => (
              <button
                key={project.title}
                type="button"
                onClick={() => setActiveProject(project)}
                className={`rounded-[28px] border p-5 text-left transition ${
                  activeProject.title === project.title
                    ? "border-[#5eead4] bg-[#5eead4] text-[#08110f] shadow-xl shadow-[#5eead4]/15"
                    : "border-white/10 bg-white/10 text-[#f7f0e6] backdrop-blur hover:-translate-y-1 hover:border-[#5eead4]/50"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.18em] opacity-70">
                      {project.category}
                    </p>
                    <h3 className="mt-2 text-xl font-black">{project.title}</h3>
                  </div>
                  <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-black">
                    {project.visibility}
                  </span>
                </div>
              </button>
            ))}
          </div>

          <div className="overflow-hidden rounded-[36px] border border-white/10 bg-white/10 p-6 shadow-2xl shadow-black/20 backdrop-blur lg:sticky lg:top-28 lg:self-start">
            <div className="mb-6 overflow-hidden rounded-[28px] border border-white/10 bg-black/20">
              <img
                src={activeProject.visual}
                alt={activeProject.title}
                className="project-preview h-56 w-full object-cover opacity-85"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-[#e5f4ef] px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-[#0f766e]">
                {activeProject.category}
              </span>
              <span className="rounded-full bg-[#17211f] px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-white">
                {activeProject.visibility}
              </span>
            </div>
            <h3 className="mt-5 text-3xl font-black text-[#f7f0e6]">
              {activeProject.title}
            </h3>
            <p className="mt-4 text-base leading-8 text-[#cdd8d0]">
              {activeProject.description[language]}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {activeProject.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-[#d7dfd8]"
                >
                  {tech}
                </span>
              ))}
            </div>
            {activeProject.url ? (
              <a
                href={activeProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#5eead4] px-6 py-3 text-sm font-black text-[#08110f] transition hover:-translate-y-1 hover:bg-[#f4c76b]"
              >
                {t.publicLabel}
                <FaArrowUpRightFromSquare className="text-xs" />
              </a>
            ) : (
              <span className="mt-8 inline-flex rounded-full bg-[#f4c76b]/20 px-6 py-3 text-sm font-black text-[#f4c76b]">
                {t.privateLabel}
              </span>
            )}
          </div>
        </div>

        <div className="mt-10 rounded-[36px] border border-white/10 bg-white/10 p-6 backdrop-blur">
          <h3 className="text-xl font-black text-[#f7f0e6]">{t.otherTitle}</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {otherProjects.map((project) => (
              <span
                key={project}
                className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-bold text-[#d7dfd8]"
              >
                {project}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="rounded-[44px] border border-white/10 bg-[#101b18]/95 p-6 text-white shadow-2xl shadow-black/30 sm:p-10 lg:p-14">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-[#5eead4]">
            {t.contactLabel}
          </p>
          <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <h2 className="max-w-3xl text-4xl font-black leading-tight sm:text-5xl">
                {t.contactTitle}
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#d7dfd8]">
                {t.contactText}
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href={`mailto:chamssidineab@gmail.com?subject=${subject}`}
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#f4c76b] px-6 py-4 text-sm font-black text-[#17211f] transition hover:-translate-y-1 hover:bg-white"
              >
                <FaEnvelope />
                {t.email}
              </a>
              <a
                href="https://github.com/Chamssidine"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 px-6 py-4 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-white/10"
              >
                <FaGithub />
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/abdallah-ambininstoa-chamssidine-219450219/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/15 px-6 py-4 text-sm font-black text-white transition hover:-translate-y-1 hover:bg-white/10"
              >
                <FaLinkedin />
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
