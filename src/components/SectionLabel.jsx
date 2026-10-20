
// A small editorial label that identifies each section.
export default function SectionLabel({ number, children, light = false }) {
  return (
    <div
      className={`flex items-center gap-3 font-mono text-xs uppercase tracking-widest ${
        light ? 'text-midnight/60' : 'text-warm-white/55'
      }`}
    >
      {/* Orange marker ties the label to OFFSET's visual identity. */}
      <span className="h-2 w-2 bg-signal" />

      <span>{number}</span>

      <span aria-hidden="true" className="h-px w-8 bg-current/40" />

      <span>{children}</span>
    </div>
  );
}
