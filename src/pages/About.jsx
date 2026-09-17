import { useLanguage } from "../i18n/LanguageContext.jsx";
import SectionHeading from "../components/SectionHeading.jsx";

export default function About() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <div className="mx-auto max-w-4xl px-6 py-14">
      {/* About */}
      <section className="pb-12 border-b border-hairline">
        <SectionHeading index="00" title={a.eyebrow} />
        <p className="text-ink leading-relaxed max-w-2xl">{a.body}</p>
      </section>

      {/* Experience */}
      <section className="py-12 border-b border-hairline">
        <SectionHeading index="01" title={a.experienceEyebrow} />

        <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
          <h3 className="font-heading text-lg font-medium text-ink">{a.role}</h3>
          <span className="font-mono text-xs text-muted">{a.dateRange}</span>
        </div>
        <p className="text-muted text-sm mb-1">{a.org}</p>
        <p className="text-muted text-sm mb-6">{a.supervisor}</p>

        <ul className="space-y-2.5 mb-8">
          {a.items.map((item, i) => (
            <li key={i} className="flex gap-2 text-ink leading-relaxed max-w-2xl">
              <span className="text-teal shrink-0">›</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <blockquote className="border-l-2 border-amber bg-surface px-5 py-4 max-w-2xl">
          <p className="text-ink italic leading-relaxed">{a.quote}</p>
          <cite className="block mt-3 font-mono text-xs text-muted not-italic">
            {a.quoteCite}
          </cite>
        </blockquote>
      </section>

      {/* Skills */}
      <section className="py-12 border-b border-hairline">
        <SectionHeading index="02" title={a.skillsEyebrow} />
        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
          {a.skills.map((cat, i) => (
            <div key={i}>
              <h4 className="font-mono text-xs uppercase tracking-wide text-muted mb-1.5">
                {cat.title}
              </h4>
              <p className="text-ink text-sm">{cat.items}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications & Education */}
      <section className="pt-12">
        <SectionHeading index="03" title={a.eduEyebrow} />

        <ul className="mb-8">
          {a.certs.map((c, i) => (
            <li
              key={i}
              className="flex flex-wrap justify-between gap-2 py-2.5 border-b border-hairline text-sm"
            >
              <span className="text-ink">{c.name}</span>
              <span className="font-mono text-xs text-muted">{c.issuer}</span>
            </li>
          ))}
        </ul>

        <div>
          <p className="font-heading text-base font-medium text-ink">{a.degree}</p>
          <p className="text-muted text-sm mt-1">{a.eduMeta}</p>
        </div>
      </section>
    </div>
  );
}
