import { useEffect, useRef, useState } from "react";

// Prints a short sequence of status lines once, typewriter-style, then stops.
// Respects prefers-reduced-motion by rendering all lines immediately.
export default function BootLog({ lines }) {
  const reduceMotion = useRef(
    typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ).current;

  const [visibleLines, setVisibleLines] = useState(reduceMotion ? lines.length : 0);
  const [charCount, setCharCount] = useState(reduceMotion ? 0 : 0);

  useEffect(() => {
    if (reduceMotion) return;

    let lineIdx = 0;
    let charIdx = 0;
    let timeoutId;

    function tick() {
      if (lineIdx >= lines.length) return;
      const currentLine = lines[lineIdx];

      if (charIdx <= currentLine.length) {
        setVisibleLines(lineIdx);
        setCharCount(charIdx);
        charIdx += 1;
        timeoutId = setTimeout(tick, 14);
      } else {
        lineIdx += 1;
        charIdx = 0;
        setVisibleLines(lineIdx);
        timeoutId = setTimeout(tick, 120);
      }
    }

    timeoutId = setTimeout(tick, 300);
    return () => clearTimeout(timeoutId);
  }, [lines, reduceMotion]);

  return (
    <div
      className="font-mono text-xs text-muted leading-relaxed select-none"
      aria-hidden="true"
    >
      {lines.map((line, i) => {
        if (reduceMotion || i < visibleLines) {
          return <div key={i}>{line}</div>;
        }
        if (i === visibleLines) {
          return <div key={i}>{line.slice(0, charCount)}<span className="text-teal">▌</span></div>;
        }
        return null;
      })}
    </div>
  );
}
