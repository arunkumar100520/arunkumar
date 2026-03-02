// components/ProjectCard.jsx
export default function ProjectCard({ project }) {
  return (
    <div className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.04] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-white/90 group-hover:text-blue-400 transition-colors">
          {project.title}
        </h3>
        <p className="mt-1 text-sm text-white/50">{project.subtitle}</p>
      </div>
      
      <div className="mb-6 flex flex-wrap gap-2">
        {project.badges.map((badge) => (
          <span 
            key={badge} 
            className="rounded-full bg-blue-500/10 px-2.5 py-0.5 text-[11px] font-medium text-blue-300 border border-blue-500/20"
          >
            {badge}
          </span>
        ))}
      </div>

      <ul className="mb-6 flex-grow space-y-2 text-sm text-white/70">
        {project.bullets.map((bullet, idx) => (
          <li key={idx} className="flex items-start">
            <span className="mr-2 mt-1 text-blue-400 opacity-60">•</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto flex gap-4 border-t border-white/5 pt-4">
        {project.links.github && (
          <a href={project.links.github} className="text-sm font-medium text-white/60 hover:text-white transition-colors">
            GitHub ↗
          </a>
        )}
        {project.links.live && (
          <a href={project.links.live} className="text-sm font-medium text-white/60 hover:text-white transition-colors">
            Live Demo ↗
          </a>
        )}
      </div>
    </div>
  );
}