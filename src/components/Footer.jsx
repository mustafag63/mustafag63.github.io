import { useLanguage } from "../i18n/LanguageContext.jsx";

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="border-t border-hairline mt-16">
      <div className="mx-auto max-w-4xl px-6 py-8">
        <p className="font-mono text-xs text-muted">{t.footer}</p>
      </div>
    </footer>
  );
}
