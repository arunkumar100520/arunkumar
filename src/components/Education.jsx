// Education.jsx
import Section from "../components/Section.jsx";
import Card from "../components/Card.jsx";

export default function Education({ data }) {
  if (!data.education || data.education.length === 0) return null;

  return (
    <Section id="education" eyebrow="Education" title="Academic Background">
      <div className="grid grid-cols-1 gap-4">
        {data.education.map((edu, idx) => (
          <Card key={idx} className="flex flex-col md:flex-row md:items-center justify-between p-6 hover:border-white/20 transition-colors">
            <div>
              <h3 className="text-xl font-bold text-white/90">{edu.degree}</h3>
              <p className="mt-1 text-base text-[#8ab4ff]">{edu.institution}</p>
            </div>
            <div className="mt-4 md:mt-0 text-sm font-medium text-white/50 bg-white/[0.03] px-3 py-1.5 rounded-lg border border-white/5 inline-block">
              Graduated: {edu.period}
            </div>
          </Card>
        ))}
      </div>
    </Section>
  );
}