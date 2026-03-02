// Pill.jsx
export default function Pill({ children, className = "" }) {
  return (
    <span className={`inline-flex items-center rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[13px] font-medium text-white/70 backdrop-blur-sm ${className}`}>
      {children}
    </span>
  );
}