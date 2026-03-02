import Section from "../components/Section.jsx";
import Card from "../components/Card.jsx";

export default function Skills({ data }) {
  return (
    <Section id="skills" eyebrow="Skills" title="Tools & Technologies">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {Object.entries(data.skills).map(([group, items]) => (
          <Card 
            key={group} 
            className="p-6 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]"
          >
            <h3 className="text-sm font-semibold tracking-wider text-white/90 uppercase">
              {group}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {items.map((it) => (
                <span
                  key={it}
                  className="rounded-lg border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/70 transition-all duration-200 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10 hover:text-white"
                >
                  {it}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}