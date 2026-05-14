import { motion } from "framer-motion";
import { FaCodeBranch, FaLayerGroup, FaPuzzlePiece } from "react-icons/fa6";

const skills = [
  "React",
  "Tailwind CSS",
  "JavaScript",
  "Kotlin",
  "Jetpack Compose",
  "C#",
  "Unity",
  "Python",
  "ASP.NET",
  "Solidity",
];

const strengths = [
  {
    icon: FaLayerGroup,
    title: "Produit clair",
    text: "Je pense l'interface, le parcours et le resultat attendu avant d'ecrire les composants.",
  },
  {
    icon: FaCodeBranch,
    title: "Stack polyvalente",
    text: "Web, mobile, desktop, backend et prototypes interactifs selon le besoin du projet.",
  },
  {
    icon: FaPuzzlePiece,
    title: "Resolution concrete",
    text: "J'aime decomposer les problemes complexes en experiences simples a utiliser.",
  },
];

function About() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="absolute -left-8 top-8 h-48 w-48 rounded-full bg-sky-300/30 blur-3xl" />
          <div className="relative overflow-hidden rounded-[40px] border border-white bg-white/80 p-5 shadow-2xl shadow-slate-300/60">
            <img
              className="h-[420px] w-full rounded-[32px] object-cover object-top"
              src="/profile.png"
              alt="Chamssidine Abdallah"
            />
            <div className="absolute bottom-9 left-9 right-9 rounded-3xl border border-white/30 bg-slate-950/85 p-5 text-white backdrop-blur">
              <p className="text-sm font-bold text-sky-200">Full-Stack Developer</p>
              <h2 className="mt-1 text-2xl font-black">Chamssidine Abdallah</h2>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          <p className="text-sm font-black uppercase tracking-[0.24em] text-sky-700">
            A propos
          </p>
          <h1 className="mt-4 text-4xl font-black leading-tight text-slate-950 sm:text-5xl">
            Je construis des applications qui donnent confiance des le premier clic.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Mon profil combine developpement full-stack, experimentation mobile,
            applications desktop et projets immersifs. Je cree des interfaces
            nettes, les parcours simples et les solutions qui repondent vraiment
            au besoin utilisateur.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {strengths.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-3xl border border-white bg-white/80 p-5 shadow-sm shadow-slate-200"
              >
                <Icon className="mb-4 text-2xl text-sky-600" />
                <h3 className="text-lg font-black text-slate-950">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-[32px] border border-slate-200 bg-white/80 p-6">
            <h3 className="text-lg font-black text-slate-950">Technologies</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-bold text-slate-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
