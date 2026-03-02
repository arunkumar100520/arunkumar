import Section from "../components/Section.jsx";
import Card from "../components/Card.jsx";

export default function Contact({ data }) {
  return (
    <Section id="contact" eyebrow="Contact" title="Let’s connect">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-[1.1fr_0.9fr]">
        <Card className="p-5">
          <div className="text-lg font-semibold tracking-tight">
            Open to Frontend / React roles
          </div>
          <p className="mt-2 text-[15px] leading-7 text-white/70">
            If you’re hiring for React + TypeScript work, I’d love to share projects and walk through impact.
          </p>
          <div className="mt-4 flex flex-wrap gap-2.5">
            <a className="rounded-xl border border-[#8ab4ff]/30 bg-gradient-to-br from-[#8ab4ff]/20 to-[#9df2c8]/15 px-4 py-2 text-sm hover:brightness-110" href={`mailto:${data.email}`}>
              Email me
            </a>
            <a className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/80 hover:bg-white/[0.06]" href={data.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-white/80 hover:bg-white/[0.06]" href={data.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
          </div>
          <div className="mt-3 text-sm text-white/60">{data.location}</div>
        </Card>

        <Card className="p-5 bg-white/[0.035]">
          <div className="text-sm font-semibold">Quick details</div>
          <div className="mt-3 divide-y divide-white/10 text-sm">
            <Row k="Email" v={data.email} />
            <Row k="LinkedIn" v="linkedin.com/in/arunkumar" href={data.linkedin} />
            <Row k="GitHub" v="github.com/arunkumar" href={data.github} />
            <Row k="Resume" v="Download PDF" href={data.resumeUrl} />
          </div>
        </Card>
      </div>
    </Section>
  );
}

function Row({ k, v, href }) {
  return (
    <div className="grid grid-cols-[90px_1fr] gap-3 py-3">
      <div className="text-[11px] uppercase tracking-[0.12em] text-white/60">{k}</div>
      <div className="text-white/75">
        {href ? (
          <a className="hover:text-white/90" href={href} target="_blank" rel="noreferrer">
            {v}
          </a>
        ) : (
          v
        )}
      </div>
    </div>
  );
}