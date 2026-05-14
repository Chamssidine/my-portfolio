/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

function ProjectCard({ project, onOpenModal }) {
  return (
    <motion.article
      className="group overflow-hidden rounded-[32px] border border-white bg-white/85 shadow-xl shadow-slate-200/70 transition hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-300/70"
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{ duration: 0.45 }}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
        <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-black text-slate-700 backdrop-blur">
          {project.category}
        </span>
        <span className="absolute right-4 top-4 rounded-full bg-slate-950/85 px-3 py-1 text-xs font-black text-white backdrop-blur">
          {project.visibility}
        </span>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-black text-slate-950">{project.title}</h3>
        {project.updated && (
          <p className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-sky-700">
            {project.updated}
          </p>
        )}
        <p className="mt-3 line-clamp-3 min-h-[4.5rem] text-sm leading-6 text-slate-600">
          {project.description}
        </p>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700"
            >
              {tech}
            </span>
          ))}
        </div>

        <button
          type="button"
          onClick={() => onOpenModal(project)}
          className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white transition hover:bg-sky-600"
        >
          Voir le detail
          <FaArrowUpRightFromSquare className="text-xs" />
        </button>
      </div>
    </motion.article>
  );
}

export default ProjectCard;
