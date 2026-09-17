export default function SectionHeading({ index, title }) {
  return (
    <div className="flex items-baseline gap-3 mb-6">
      <span className="font-mono text-xs text-muted">{index}</span>
      <h2 className="font-heading text-xl font-semibold text-ink">{title}</h2>
      <span className="flex-1 border-t border-hairline ml-2" aria-hidden="true" />
    </div>
  );
}
