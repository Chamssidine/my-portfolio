/* eslint-disable react/prop-types */
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const copy = {
  fr: "Portfolio one-page construit avec React et Tailwind CSS.",
  de: "One-Page-Portfolio gebaut mit React und Tailwind CSS.",
  en: "One-page portfolio built with React and Tailwind CSS.",
};

function Footer({ language }) {
  return (
    <footer className="border-t border-[#d9cfc0] bg-[#fbf7ef]/80">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-sm font-bold text-[#5d5a50] sm:px-8 md:flex-row md:items-center md:justify-between lg:px-10">
        <div>
          <p>&copy; {new Date().getFullYear()} Chamssidine Abdallah.</p>
          <p className="mt-1 text-xs uppercase tracking-[0.16em] text-[#8a8172]">
            {copy[language]}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="mailto:chamssidineab@gmail.com"
            className="transition hover:text-[#0f766e]"
          >
            chamssidineab@gmail.com
          </a>
          <a
            href="https://github.com/Chamssidine"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-[#17211f]"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/abdallah-ambininstoa-chamssidine-219450219/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-[#0f766e]"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
