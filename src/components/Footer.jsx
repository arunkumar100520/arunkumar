// Footer.jsx
export default function Footer({ data }) {
  return (
    <footer className="border-t border-white/10 bg-[#0b0d12]/60 py-8 mt-12">
      <div className="mx-auto flex w-[min(1100px,calc(100%-40px))] flex-col items-center justify-between gap-4 sm:flex-row text-sm text-white/50">
        <span>© {new Date().getFullYear()} {data.name}. Built with React & Tailwind.</span>
        <div className="flex gap-6">
          <a className="transition-colors hover:text-white" href={data.github} target="_blank" rel="noreferrer">GitHub</a>
          <a className="transition-colors hover:text-white" href={data.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="transition-colors hover:text-white" href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}