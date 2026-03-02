// components/Projects.jsx
import Section from "../components/Section.jsx";
import ProjectCard from "../components/ProjectCard.jsx";

export default function Projects({ data }) {
  return (
    <Section id="projects" eyebrow="Projects" title="Featured Work">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {data.projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>
      <p className="mt-6 text-center text-sm text-white/40 italic">
        * Live demos and source code available upon request or via links above.
      </p>
    </Section>
  );
}