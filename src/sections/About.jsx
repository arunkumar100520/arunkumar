// About.jsx
import Section from "../components/Section.jsx";
import Card from "../components/Card.jsx";

export default function About({ data }) {
  return (
    <Section id="about" eyebrow="About" title="My Background">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4 text-base leading-relaxed text-white/70">
          {data.about.map((p, i) => <p key={i}>{p}</p>)}
        </div>

        <Card className="p-6 bg-gradient-to-b from-white/[0.05] to-transparent border-white/10">
          <div className="text-sm font-bold tracking-wide uppercase text-white/90 mb-4">Development Philosophy</div>
          <ul className="space-y-3 text-[14px] leading-relaxed text-white/60">
            <li className="flex gap-2"><span className="text-[#9df2c8]">✓</span> Clean component architecture</li>
            <li className="flex gap-2"><span className="text-[#9df2c8]">✓</span> Performance-minded delivery</li>
            <li className="flex gap-2"><span className="text-[#9df2c8]">✓</span> Seamless API integrations</li>
            <li className="flex gap-2"><span className="text-[#9df2c8]">✓</span> Responsive, user-first UI</li>
          </ul>
        </Card>
      </div>
    </Section>
  );
}