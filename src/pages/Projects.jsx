import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { FaMagnifyingGlass } from "react-icons/fa6";
import FilterButtons from "../components/FilterButtons";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";

const projects = [
  {
    id: 1,
    title: "weg-to-deutschland",
    description: "Projet TypeScript recent autour d'une experience web produit, a presenter comme case study privee orientee utilisateur.",
    technologies: ["TypeScript", "Web App", "Product UX"],
    category: "Web",
    visibility: "Private",
    updated: "Mis a jour il y a 2 semaines",
    imageUrl: "./web.webp",
  },
  {
    id: 2,
    title: "AIToolkitMaster",
    description: "Toolkit TypeScript prive pour regrouper des fonctionnalites IA utiles dans une experience web exploitable.",
    technologies: ["TypeScript", "AI Tools", "Web App"],
    category: "AI",
    visibility: "Private",
    updated: "Mis a jour le 16 fevrier 2026",
    imageUrl: "./web.webp",
  },
  {
    id: 3,
    title: "RecruteMoi Back-End",
    description: "Backend TypeScript pour un produit de recrutement, avec logique serveur et structure API.",
    technologies: ["TypeScript", "Backend", "API", "Recruitment"],
    category: "Backend",
    visibility: "Private",
    updated: "Mis a jour le 17 octobre 2025",
    imageUrl: "./web.webp",
  },
  {
    id: 4,
    title: "BidSense",
    description: "Projet TypeScript prive oriente analyse, decision et workflow metier autour d'opportunites ou d'offres.",
    technologies: ["TypeScript", "Dashboard", "Business Logic"],
    category: "Web",
    visibility: "Private",
    updated: "Mis a jour le 19 octobre 2025",
    imageUrl: "./web.webp",
  },
  {
    id: 5,
    title: "Trendora",
    description: "Application TypeScript privee orientee produit web, tendances et experience utilisateur moderne.",
    technologies: ["TypeScript", "Web App", "UI/UX"],
    category: "Web",
    visibility: "Private",
    updated: "Mis a jour le 21 septembre 2025",
    imageUrl: "./web.webp",
  },
  {
    id: 6,
    title: "ResumeArchit",
    description: "Application web pour creer, personnaliser, sauvegarder et exporter des CV professionnels avec preview en temps reel.",
    technologies: ["React", "Next.js", "Firebase", "Tailwind CSS", "PDF Export"],
    category: "Web",
    visibility: "Public",
    updated: "Mis a jour le 24 mai 2025",
    imageUrl: "./web.webp",
    downloadUrl: "https://github.com/Chamssidine/ResumeArchit",
  },
  {
    id: 7,
    title: "AI Chat App",
    description: "Application full-stack de chat IA avec upload de documents/images, analyse de CV et integration OpenAI.",
    technologies: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "OpenAI API"],
    category: "AI",
    visibility: "Public",
    updated: "Mis a jour le 23 mai 2025",
    imageUrl: "./web.webp",
    downloadUrl: "https://github.com/Chamssidine/chat-app",
  },
  {
    id: 8,
    title: "Job-Scrawler",
    description: "Projet JavaScript oriente automatisation/recherche d'offres, utile pour montrer la collecte de donnees et le traitement web.",
    technologies: ["JavaScript", "Automation", "Web Data"],
    category: "Web",
    visibility: "Public",
    updated: "Mis a jour le 16 fevrier 2026",
    imageUrl: "./web.webp",
    downloadUrl: "https://github.com/Chamssidine/Job-Scrawler",
  },
  {
    id: 9,
    title: "PriceTrackr",
    description: "Projet Python prive pour suivre des prix, extraire des donnees et automatiser une veille produit.",
    technologies: ["Python", "Automation", "Data Tracking"],
    category: "Automation",
    visibility: "Private",
    updated: "Mis a jour le 18 fevrier 2025",
    imageUrl: "./web.webp",
  },
  {
    id: 10,
    title: "youtube-summary-tool",
    description: "Outil JavaScript prive pour resumer du contenu YouTube et automatiser une tache IA utile.",
    technologies: ["JavaScript", "AI", "Automation"],
    category: "AI",
    visibility: "Private",
    updated: "Mis a jour le 4 juillet 2025",
    imageUrl: "./web.webp",
  },
  {
    id: 11,
    title: "Image Authentication API",
    description: "API REST ASP.NET pour authentifier des images et verifier des donnees via une logique blockchain.",
    technologies: ["C#", "ASP.NET", "REST API", "Solidity"],
    category: "Backend",
    visibility: "Public",
    updated: "Mis a jour le 11 aout 2024",
    imageUrl: "./blockChain.jfif",
    downloadUrl: "https://github.com/Chamssidine/ImageAuth",
  },
  {
    id: 12,
    title: "Facial Recognition Application",
    technologies: ["Python", "PyQt6", "Computer Vision"],
    category: "AI",
    description: "Application de detection et reconnaissance faciale basee sur HAAR cascade et HOG.",
    visibility: "Public",
    updated: "Mis a jour le 8 juin 2025",
    imageUrl: "./facial_detection.png",
    downloadUrl: "https://github.com/Chamssidine/FaceDetection",
  },
  {
    id: 13,
    title: "Portfolio Website",
    description: "Portfolio personnel construit avec React et Tailwind CSS pour presenter un profil full-stack clair et professionnel.",
    technologies: ["React", "Tailwind CSS", "JavaScript", "Vite"],
    category: "Web",
    visibility: "Public",
    updated: "Mis a jour le 9 novembre 2025",
    imageUrl: "./web.webp",
    downloadUrl: "https://github.com/Chamssidine/my-portfolio",
  },
  {
    id: 14,
    title: "IdeaHub",
    description: "Projet personnel de plateforme collaborative pour partager, organiser et developper des idees en communaute.",
    technologies: ["Kotlin", "Jetpack Compose"],
    category: "Other",
    visibility: "Public",
    updated: "Mis a jour le 22 mai 2025",
    imageUrl: "./ideahub.jfif",
    downloadUrl: "https://github.com/Chamssidine/IdeaHub",
  },
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("Tous");

  const filters = useMemo(
    () => ["Tous", ...Array.from(new Set(projects.map((project) => project.category)))],
    [],
  );

  const filteredProjects = projects.filter((project) => {
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(query));
    const matchesFilter =
      selectedFilter === "Tous" || project.category === selectedFilter;

    return matchesSearch && matchesFilter;
  });

  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl"
      >
        <p className="text-sm font-black uppercase tracking-[0.24em] text-sky-700">
          Selected work
        </p>
        <h1 className="mt-4 text-4xl font-black leading-tight text-slate-950 sm:text-6xl">
          Des projets qui montrent la polyvalence, pas seulement le code.
        </h1>
        <p className="mt-5 text-lg leading-8 text-slate-600">
          Une selection de projets publics et prives autour de TypeScript, du
          full-stack web, des APIs, de IA appliquee et de automatisation.
        </p>
      </motion.div>

      <div className="mt-10 grid gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
        <label className="relative block">
          <FaMagnifyingGlass className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Rechercher un projet, une techno..."
            className="w-full rounded-full border border-slate-200 bg-white/85 py-4 pl-12 pr-5 text-sm font-semibold text-slate-950 shadow-sm outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-100"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </label>

        <FilterButtons
          filters={filters}
          selectedFilter={selectedFilter}
          onFilterChange={setSelectedFilter}
        />
      </div>

      <motion.div
        className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.08 },
          },
        }}
      >
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onOpenModal={setSelectedProject}
          />
        ))}
      </motion.div>

      {filteredProjects.length === 0 && (
        <div className="mt-10 rounded-[32px] border border-slate-200 bg-white/80 p-8 text-center font-bold text-slate-500">
          Aucun projet ne correspond a cette recherche.
        </div>
      )}

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}

export default Projects;
