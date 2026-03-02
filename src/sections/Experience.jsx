// Experience.jsx
import Section from "../components/Section.jsx";
import Card from "../components/Card.jsx";
import Pill from "../components/Pill.jsx";

export default function Experience({ data }) {
  const e = data.experience;
  return (
    <Section id="work" eyebrow="Experience" title="Where I've Worked">
      <Card className="p-6 sm:p-8 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <h3 className="text-xl font-bold text-white/90">{e.title}</h3>
            <div className="mt-1 flex items-center gap-2 text-base text-[#8ab4ff]">
              {e.company}
              <span className="text-white/30">•</span>
              <span className="text-sm text-white/50">{e.period}</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 md:justify-end">
            <Pill>React.js</Pill><Pill>TypeScript</Pill><Pill>TanStack Query</Pill>
          </div>
        </div>

        <div className="mt-6 border-t border-white/5 pt-6">
          <ul className="space-y-3 text-[15px] leading-relaxed text-white/70">
            {e.highlights.map((h, i) => (
              <li key={i} className="flex items-start">
                <span className="mr-3 mt-1.5 flex h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#8ab4ff]/60"></span>
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </Section>
  );
}