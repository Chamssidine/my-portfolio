import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaLocationDot,
  FaPaperPlane,
  FaRegClock,
  FaWandMagicSparkles,
} from "react-icons/fa6";

const contactLinks = [
  {
    label: "Email",
    value: "chamssidineab@gmail.com",
    href: "mailto:chamssidineab@gmail.com",
    icon: FaEnvelope,
  },
  {
    label: "GitHub",
    value: "github.com/Chamssidine",
    href: "https://github.com/Chamssidine",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    value: "Profil LinkedIn",
    href: "https://www.linkedin.com/in/abdallah-ambininstoa-chamssidine-219450219/",
    icon: FaLinkedin,
  },
];

const highlights = [
  "Applications web modernes",
  "Interfaces mobiles et desktop",
  "Integration API et backend",
];

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const mailtoHref = useMemo(() => {
    const subject = encodeURIComponent(
      formData.project
        ? `Projet portfolio - ${formData.project}`
        : "Nouveau projet depuis le portfolio",
    );
    const body = encodeURIComponent(
      `Bonjour Chamssidine,\n\nJe m'appelle ${formData.name || "..."}.\nMon email : ${
        formData.email || "..."
      }\n\nProjet : ${formData.project || "..."}\n\nMessage :\n${
        formData.message || "..."
      }\n`,
    );

    return `mailto:chamssidineab@gmail.com?subject=${subject}&body=${body}`;
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setStatus("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Ajoute ton nom, ton email et ton message avant l'envoi.");
      return;
    }

    window.location.href = mailtoHref;
    setStatus("Ton application email va s'ouvrir avec le message prepare.");
  };

  return (
    <motion.section
      className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10 lg:py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-semibold text-sky-700">
              <FaWandMagicSparkles className="h-4 w-4" />
              Disponible pour projets freelance et CDI
            </span>
            <h1 className="mt-6 max-w-2xl text-left text-4xl font-black leading-tight text-slate-950 sm:text-6xl">
              Construisons une interface utile, claire et agreable.
            </h1>
            <p className="mt-5 max-w-xl text-left text-base leading-8 text-slate-600 sm:text-lg">
              Tu as une idee, une application a ameliorer ou un besoin technique
              precis ? Envoie-moi le contexte et je reviens avec une proposition
              simple, concrete et orientee resultat.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/80 bg-white/80 p-4 text-left shadow-sm shadow-slate-200"
              >
                <div className="mb-3 h-1.5 w-10 rounded-full bg-sky-500" />
                <p className="text-sm font-semibold leading-6 text-slate-700">
                  {item}
                </p>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            {contactLinks.map(({ label, value, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white/90 p-4 text-left shadow-sm shadow-slate-200 transition hover:-translate-y-0.5 hover:border-sky-300 hover:shadow-md"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-white transition group-hover:bg-sky-600">
                  <Icon className="h-5 w-5" />
                </span>
                <span>
                  <span className="block text-sm font-semibold text-slate-500">
                    {label}
                  </span>
                  <span className="block break-all text-base font-bold text-slate-900">
                    {value}
                  </span>
                </span>
              </a>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white/80 p-5 text-left">
              <FaRegClock className="mb-3 h-5 w-5 text-sky-600" />
              <p className="text-sm font-semibold text-slate-500">Reponse</p>
              <p className="mt-1 text-lg font-bold text-slate-900">Sous 24h</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white/80 p-5 text-left">
              <FaLocationDot className="mb-3 h-5 w-5 text-sky-600" />
              <p className="text-sm font-semibold text-slate-500">Base</p>
              <p className="mt-1 text-lg font-bold text-slate-900">France / Remote</p>
            </div>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="rounded-[36px] border border-white bg-white/90 p-5 text-left shadow-2xl shadow-slate-300/60 sm:p-8"
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.6 }}
        >
          <div className="mb-7">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-sky-600">
              Contact
            </p>
            <h3 className="mt-2 text-2xl font-black text-slate-950 sm:text-3xl">
              Parle-moi de ton projet
            </h3>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm font-bold text-slate-700">Nom</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-100"
                placeholder="Ton nom"
              />
            </label>

            <label className="space-y-2">
              <span className="text-sm font-bold text-slate-700">Email</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-100"
                placeholder="toi@email.com"
              />
            </label>
          </div>

          <label className="mt-5 block space-y-2">
            <span className="text-sm font-bold text-slate-700">Type de projet</span>
            <select
              name="project"
              value={formData.project}
              onChange={handleChange}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-100"
            >
              <option value="">Choisir une option</option>
              <option value="Application web">Application web</option>
              <option value="Application mobile">Application mobile</option>
              <option value="Backend / API">Backend / API</option>
              <option value="Refonte UI/UX">Refonte UI/UX</option>
              <option value="Autre demande">Autre demande</option>
            </select>
          </label>

          <label className="mt-5 block space-y-2">
            <span className="text-sm font-bold text-slate-700">Message</span>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="min-h-40 w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-sky-500 focus:bg-white focus:ring-4 focus:ring-sky-100"
              placeholder="Explique le besoin, le delai, les objectifs ou les technologies souhaitees."
            />
          </label>

          {status && (
            <motion.p
              className="mt-4 rounded-2xl bg-sky-50 px-4 py-3 text-sm font-semibold text-sky-800"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {status}
            </motion.p>
          )}

          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-slate-950 px-6 py-4 text-base font-bold text-white shadow-lg shadow-slate-300 transition hover:-translate-y-0.5 hover:bg-sky-600 focus:outline-none focus:ring-4 focus:ring-sky-200"
          >
            Envoyer le message
            <FaPaperPlane className="h-4 w-4" />
          </button>
        </motion.form>
      </div>
    </motion.section>
  );
}

export default Contact;
