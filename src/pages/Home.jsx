import { Link } from "react-router-dom";
import { useLanguage } from "../i18n/LanguageContext.jsx";
import BootLog from "../components/BootLog.jsx";
import Tag from "../components/Tag.jsx";
import SectionHeading from "../components/SectionHeading.jsx";
import profilePhoto from "../assets/profile.jpg";

export default function Home() {
  const { t, projects } = useLanguage();
  const preview = projects.slice(0, 3);

  return (
    <div className="mx-auto max-w-4xl px-6">
      {/* Hero */}
      <section className="py-16 md:py-20 border-b border-hairline">
        <div className="flex flex-col-reverse md:flex-row md:items-start gap-8 md:gap-12">
          <div className="flex-1 min-w-0">
            <p className="font-mono text-xs text-muted mb-6">{t.hero.kicker}</p>

            <h1 className="font-heading text-4xl md:text-5xl font-semibold text-ink mb-3">
              {t.hero.name}
            </h1>

            <p className="font-heading text-2xl md:text-3xl mb-6">
              <span className="text-teal">{t.hero.taglineAi}</span>{" "}
              <span className="text-muted">{t.hero.taglinePlus}</span>{" "}
              <span className="text-amber">{t.hero.taglineSec}</span>
            </p>

            <p className="max-w-xl text-muted leading-relaxed mb-6">
              {t.hero.positioning}
            </p>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border border-teal text-teal px-4 py-2 font-mono text-sm hover:bg-teal-soft"
            >
              {t.hero.ctaContact} →
            </Link>
          </div>

          <div className="relative shrink-0 self-center md:self-start w-32 sm:w-40 md:w-44 opacity-90 overflow-hidden">
            <img
              src={profilePhoto}
              alt="Mustafa Gocmen"
              width={960}
              height={1348}
              className="w-full aspect-[3/4] object-cover"
              style={{
                objectPosition: "100% 100%",
                transform: "scale(1.4)",
                transformOrigin: "bottom right",
                maskImage:
                  "radial-gradient(ellipse 85% 75% at center, black 55%, transparent 100%)",
                WebkitMaskImage:
                  "radial-gradient(ellipse 85% 75% at center, black 55%, transparent 100%)",
              }}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start mt-10">
          <div className="flex flex-wrap gap-8">
            {t.hero.stats.map((s, i) => (
              <div key={i} className="border-l-2 border-teal pl-3">
                <div className="font-mono text-sm text-ink">{s.value}</div>
                <div className="font-mono text-[11px] uppercase tracking-wide text-muted mt-0.5">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

          <div className="border border-hairline bg-surface px-4 py-3">
            <BootLog lines={t.hero.bootLines} />
          </div>
        </div>
      </section>

      {/* Latest experience */}
      <section className="py-14 border-b border-hairline">
        <SectionHeading index="01" title={t.home.experienceEyebrow} />
        <p className="text-ink max-w-xl leading-relaxed mb-3">{t.home.experienceLead}</p>
        <Link to="/about" className="font-mono text-sm text-teal hover:underline">
          {t.home.readMore}
        </Link>
      </section>

      {/* Projects preview */}
      <section className="py-14">
        <SectionHeading index="02" title={t.home.projectsEyebrow} />
        <ul>
          {preview.map((p) => (
            <li key={p.id} className="border-b border-hairline py-4 first:pt-0">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-heading text-base font-medium text-ink">{p.title}</span>
                <Tag type={p.tagType}>{p.tag}</Tag>
              </div>
            </li>
          ))}
        </ul>
        <Link
          to="/projects"
          className="inline-block mt-6 font-mono text-sm text-teal hover:underline"
        >
          {t.home.viewAll}
        </Link>
      </section>
    </div>
  );
}
