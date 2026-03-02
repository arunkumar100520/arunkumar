// Card.jsx
export default function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-[#12151c]/40 shadow-xl backdrop-blur-md ${className}`}
    >
      {children}
    </div>
  );
}