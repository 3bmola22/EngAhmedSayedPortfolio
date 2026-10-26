import Reveal from "./Reveal";

/** Drawing-sheet style section header | عنوان قسم بأسلوب لوحة الرسم */
export default function SectionHeading({
  number,
  label,
  sheet,
  title,
}: {
  number: string;
  label: string;
  sheet: string;
  title: string;
}) {
  return (
    <Reveal>
      <div className="mb-10">
        <div className="mb-4 flex items-center justify-between border-b-2 border-line pb-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
          <span>
            <span className="text-accent">{number}</span> — {label}
          </span>
          <span>{sheet}</span>
        </div>
        <h2 className="font-display text-4xl font-extrabold text-head sm:text-5xl">
          {title}
          <span className="text-amber">.</span>
        </h2>
      </div>
    </Reveal>
  );
}