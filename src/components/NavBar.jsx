import { NavLink } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext.jsx";

const LANGS = [
  { code: "en", flag: "🇬🇧", name: "English" },
  { code: "fr", flag: "🇫🇷", name: "Français" },
  { code: "tr", flag: "🇹🇷", name: "Türkçe" },
];

function navClass({ isActive }) {
  return [
    "font-mono text-sm px-1 pb-0.5 border-b",
    isActive
      ? "text-ink border-teal"
      : "text-muted border-transparent hover:text-ink hover:border-hairline",
  ].join(" ");
}

export default function NavBar() {
  const { t, lang, setLang } = useLanguage();

  return (
    <header className="border-b border-hairline bg-bg/95 backdrop-blur sticky top-0 z-40">
      <div className="mx-auto max-w-4xl px-6">
        <div className="flex items-center justify-between h-14">
          <nav className="flex items-center gap-6" aria-label="Primary">
            <NavLink to="/" end className={navClass}>
              {t.nav.home}
            </NavLink>
            <NavLink to="/projects" className={navClass}>
              {t.nav.projects}
            </NavLink>
            <NavLink to="/about" className={navClass}>
              {t.nav.about}
            </NavLink>
            <NavLink to="/contact" className={navClass}>
              {t.nav.contact}
            </NavLink>
          </nav>

          <div className="flex items-center gap-1" aria-label="Language switcher">
            {LANGS.map(({ code, flag, name }) => (
              <button
                key={code}
                type="button"
                onClick={() => setLang(code)}
                aria-pressed={lang === code}
                aria-label={name}
                title={name}
                className={[
                  "flex items-center justify-center w-8 h-8 rounded-sm border text-base leading-none",
                  lang === code
                    ? "border-teal bg-teal-soft"
                    : "border-transparent opacity-60 hover:opacity-100",
                ].join(" ")}
              >
                <span aria-hidden="true">{flag}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
