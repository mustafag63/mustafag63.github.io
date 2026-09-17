export default function Tag({ children, type = "teal" }) {
  const styles =
    type === "amber"
      ? "border-amber text-amber bg-amber-soft"
      : "border-teal text-teal bg-teal-soft";

  return (
    <span
      className={`inline-block font-mono text-xs px-2 py-0.5 border rounded-sm ${styles}`}
    >
      {children}
    </span>
  );
}
