/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { FaArrowUpRightFromSquare, FaXmark } from "react-icons/fa6";

function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-slate-950/70 px-4 py-8 backdrop-blur-sm">
      <motion.div
        className="relative max-h-[90vh] w-full max-w-4xl overflow-auto rounded-[36px] border border-white/20 bg-white shadow-2xl shadow-slate-950/40"
        initial={{ opacity: 0, scale: 0.96, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.25 }}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 z-10 grid h-11 w-11 place-items-center rounded-full bg-white text-slate-950 shadow-lg transition hover:bg-slate-950 hover:text-white"
          aria-label="Fermer"
        >
          <FaXmark />
        </button>

        <img
          src={project.imageUrl}
          alt={project.title}
          className="h-72 w-full object-cover"
        />

        <div className="p-6 sm:p-8">
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full bg-sky-50 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-sky-700">
              {project.category}
            </span>
            <span className="rounded-full bg-slate-950 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-white">
              {project.visibility}
            </span>
          </div>
          <h3 className="mt-4 text-3xl font-black text-slate-950">
            {project.title}
          </h3>
          {project.updated && (
            <p className="mt-2 text-sm font-bold text-slate-500">
              {project.updated}
            </p>
          )}
          <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
            {project.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-bold text-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {project.downloadUrl ? (
              <a
                href={project.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-slate-950 px-6 py-3 text-sm font-black text-white transition hover:bg-sky-600"
              >
                Voir le repository
                <FaArrowUpRightFromSquare className="text-xs" />
              </a>
            ) : (
              <span className="inline-flex items-center justify-center rounded-full bg-slate-100 px-6 py-3 text-sm font-black text-slate-600">
                Case study privee
              </span>
            )}
            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-black text-slate-700 transition hover:border-slate-950 hover:text-slate-950"
            >
              Fermer
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ProjectModal;
