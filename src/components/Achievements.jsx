// Achievements.jsx
import Section from "../components/Section.jsx";
import Card from "../components/Card.jsx";

export default function Achievements({ data }) {
  if (!data.achievements || data.achievements.length === 0) return null;

  return (
    <Section id="achievements" eyebrow="Achievements" title="Milestones & Learning">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {data.achievements.map((a) => (
          <Card key={a.title} className="p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]">
            <div className="flex items-start justify-between gap-3 mb-4">
              <h3 className="text-lg font-semibold text-white/90">{a.title}</h3>
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-white/50 whitespace-nowrap">
                {a.period}
              </span>
            </div>
            <ul className="space-y-2 text-[14px] leading-relaxed text-white/60">
              {a.bullets.map((b, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-2 mt-1.5 flex h-1 w-1 flex-shrink-0 rounded-full bg-white/30"></span>
                  {b}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </Section>
  );
}