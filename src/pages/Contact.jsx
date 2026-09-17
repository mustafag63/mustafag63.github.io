import { useLanguage } from "../i18n/LanguageContext.jsx";
import SectionHeading from "../components/SectionHeading.jsx";

const EMAIL = "mustafagocmen6363@gmail.com";
const LINKEDIN = "linkedin.com/in/mustafa-gocmen-6a4387337";
const GITHUB = "github.com/mustafag63";

export default function Contact() {
  const { t, lang } = useLanguage();
  const c = t.contact;

  const cvHref = `/cv/CV-Mustafa-${lang.toUpperCase()}.pdf`;

  const rows = [
    { label: c.emailLabel, value: EMAIL, href: `mailto:${EMAIL}` },
    { label: c.linkedinLabel, value: LINKEDIN, href: `https://${LINKEDIN}` },
    { label: c.githubLabel, value: GITHUB, href: `https://${GITHUB}` },
    {
      label: c.cvLabel,
      value: c.cvValue,
      href: cvHref,
      download: `CV-Mustafa-Gocmen-${lang.toUpperCase()}.pdf`,
    },
  ];

  return (
    <div className="mx-auto max-w-4xl px-6 py-14">
      <SectionHeading index="00" title={c.eyebrow} />
      <p className="text-ink max-w-xl mb-10 leading-relaxed">{c.lead}</p>

      <ul className="max-w-xl">
        {rows.map((r) => (
          <li key={r.label} className="flex flex-wrap items-baseline gap-x-4 gap-y-1 py-4 border-b border-hairline last:border-b-0">
            <span className="font-mono text-[11px] uppercase tracking-wide text-muted w-20 shrink-0">
              {r.label}
            </span>
            <a
              href={r.href}
              download={r.download}
              target={r.href.startsWith("http") ? "_blank" : undefined}
              rel={r.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="font-mono text-sm text-teal hover:underline"
            >
              {r.value}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
