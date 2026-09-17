import { useLanguage } from "../i18n/LanguageContext.jsx";
import Tag from "../components/Tag.jsx";
import SectionHeading from "../components/SectionHeading.jsx";

export default function Projects() {
  const { t, projects } = useLanguage();

  return (
    <div className="mx-auto max-w-4xl px-6 py-14">
      <SectionHeading index="00" title={t.projects.eyebrow} />

      <ol className="space-y-0">
        {projects.map((p, i) => (
          <li key={p.id} className="border-b border-hairline py-7 first:pt-0 last:border-b-0">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-xs text-muted w-6 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="font-heading text-lg font-medium text-ink">{p.title}</h3>
                  <Tag type={p.tagType}>{p.tag}</Tag>
                </div>

                {p.stack && (
                  <p className="font-mono text-xs text-muted mb-3">{p.stack}</p>
                )}

                {p.description && (
                  <p className="text-ink leading-relaxed max-w-2xl">{p.description}</p>
                )}

                {p.bullets && p.bullets.length > 0 && (
                  <ul className="mt-3 space-y-1.5">
                    {p.bullets.map((b, bi) => (
                      <li key={bi} className="flex gap-2 text-muted leading-relaxed max-w-2xl">
                        <span className="text-teal shrink-0">–</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {(p.repoUrl || p.siteUrl) && (
                  <div className="flex flex-wrap items-center gap-x-5 gap-y-2 mt-4">
                    {p.repoUrl && (
                      <a
                        href={p.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-xs text-teal hover:underline"
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
                        </svg>
                        GitHub ↗
                      </a>
                    )}

                    {p.siteUrl && (
                      <a
                        href={p.siteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 font-mono text-xs text-teal hover:underline"
                      >
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 16 16"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.3"
                          aria-hidden="true"
                        >
                          <circle cx="8" cy="8" r="6.5" />
                          <path d="M1.5 8h13M8 1.5c1.8 1.8 2.8 4.2 2.8 6.5s-1 4.7-2.8 6.5c-1.8-1.8-2.8-4.2-2.8-6.5S6.2 3.3 8 1.5Z" />
                        </svg>
                        arfhewallet.dev ↗
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
