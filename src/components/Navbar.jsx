/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { FaBars, FaGithub, FaLinkedin, FaXmark } from "react-icons/fa6";

const copy = {
  fr: {
    role: "Full-Stack Developer",
    cta: "Contact",
    menuLabel: "Ouvrir le menu",
    nav: [
      { href: "#home", label: "Accueil" },
      { href: "#about", label: "Profil" },
      { href: "#skills", label: "Stack" },
      { href: "#projects", label: "Projets" },
      { href: "#contact", label: "Contact" },
    ],
  },
  de: {
    role: "Full-Stack Entwickler",
    cta: "Kontakt",
    menuLabel: "Menu offnen",
    nav: [
      { href: "#home", label: "Start" },
      { href: "#about", label: "Profil" },
      { href: "#skills", label: "Stack" },
      { href: "#projects", label: "Projekte" },
      { href: "#contact", label: "Kontakt" },
    ],
  },
};

function Navbar({ language, onLanguageChange }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const t = copy[language];

  const handleNavClick = () => setIsOpen(false);

  useEffect(() => {
    const sectionIds = t.nav.map((item) => item.href.replace("#", ""));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-35% 0px -50% 0px",
        threshold: [0.1, 0.25, 0.5, 0.75],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [t.nav]);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#08110f]/75 text-[#f7f0e6] backdrop-blur-2xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
        <a href="#home" className="flex items-center gap-3" onClick={handleNavClick}>
          <img
            src="/profile.png"
            alt="Chamssidine Abdallah"
            className="h-11 w-11 rounded-2xl border border-white/20 object-cover shadow-md shadow-black/20"
          />
          <span>
            <span className="block text-sm font-black leading-4 text-[#f7f0e6]">
              Chamssidine
            </span>
            <span className="block text-xs font-bold text-[#5eead4]">
              {t.role}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-white/10 bg-white/8 p-1 shadow-sm md:flex">
          {t.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`rounded-full px-4 py-2 text-sm font-black transition ${
                activeSection === item.href.replace("#", "")
                  ? "bg-[#f4c76b] text-[#08110f] shadow-lg shadow-[#f4c76b]/15"
                  : "text-[#d7dfd8] hover:bg-white/10 hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <div className="flex rounded-full border border-white/10 bg-white/8 p-1">
            {["fr", "de"].map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => onLanguageChange(lang)}
                className={`rounded-full px-3 py-1.5 text-xs font-black uppercase transition ${
                  language === lang
                    ? "bg-[#f4c76b] text-[#08110f]"
                    : "text-[#d7dfd8] hover:text-white"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
          <a
            href="https://github.com/Chamssidine"
            target="_blank"
            rel="noopener noreferrer"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/8 text-[#d7dfd8] transition hover:-translate-y-0.5 hover:border-[#f4c76b] hover:text-[#f4c76b]"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/abdallah-ambininstoa-chamssidine-219450219/"
            target="_blank"
            rel="noopener noreferrer"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/8 text-[#5eead4] transition hover:-translate-y-0.5 hover:border-[#5eead4]"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="#contact"
            className="rounded-full bg-[#5eead4] px-5 py-2.5 text-sm font-black text-[#08110f] shadow-lg shadow-[#5eead4]/20 transition hover:-translate-y-0.5 hover:bg-[#f4c76b]"
          >
            {t.cta}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="grid h-11 w-11 place-items-center rounded-2xl bg-[#f4c76b] text-[#08110f] shadow-lg shadow-[#f4c76b]/20 md:hidden"
          aria-label={t.menuLabel}
        >
          {isOpen ? <FaXmark /> : <FaBars />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-[#08110f]/95 px-5 py-4 shadow-xl shadow-black/30 md:hidden">
          <nav className="grid gap-2">
            {t.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`rounded-2xl px-4 py-3 text-sm font-black transition ${
                  activeSection === item.href.replace("#", "")
                    ? "bg-[#f4c76b] text-[#08110f]"
                    : "text-[#d7dfd8] hover:bg-white/10 hover:text-white"
                }`}
                onClick={handleNavClick}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex rounded-full border border-white/10 bg-white/8 p-1">
            {["fr", "de"].map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => onLanguageChange(lang)}
                className={`flex-1 rounded-full px-3 py-2 text-xs font-black uppercase transition ${
                  language === lang
                    ? "bg-[#f4c76b] text-[#08110f]"
                    : "text-[#d7dfd8]"
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;
