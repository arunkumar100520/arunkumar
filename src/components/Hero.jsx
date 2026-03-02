// Hero.jsx
import Card from "./Card.jsx";
import Pill from "./Pill.jsx";
import Reveal from "./Reveal.jsx";

export default function Hero({ data }) {
  return (
    <section id="top" className="py-20 sm:py-28">
      <div className="mx-auto grid w-[min(1100px,calc(100%-40px))] grid-cols-1 gap-10 lg:grid-cols-[1.2fr_0.9fr] lg:items-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#8ab4ff]/30 bg-[#8ab4ff]/10 px-3 py-1 mb-6 text-xs font-medium text-[#8ab4ff]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#8ab4ff] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8ab4ff]"></span>
            </span>
            Available for new opportunities
          </div>
          
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            {data.hero.headline}
          </h1>
          <p className="mt-6 max-w-[60ch] text-base leading-relaxed text-white/60 sm:text-lg">
            {data.hero.sub}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="inline-flex items-center justify-center rounded-xl border border-[#8ab4ff]/30 bg-gradient-to-br from-[#8ab4ff]/20 to-[#9df2c8]/15 px-6 py-3 text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(138,180,255,0.2)]">
              View My Work
            </a>
            <a href="#contact" className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-white/80 transition-all hover:bg-white/[0.08] hover:text-white">
              Contact Me
            </a>
          </div>

          <div className="mt-10 flex items-center gap-4 text-sm font-medium text-white/50">
            <a className="transition-colors hover:text-white" href={data.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
            <span className="h-1 w-1 rounded-full bg-white/20"></span>
            <a className="transition-colors hover:text-white" href={data.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="relative mx-auto max-w-md lg:mr-0">
            <Card className="relative overflow-hidden p-6 sm:p-8">
              <div>
                <h3 className="text-sm font-bold uppercase tracking-widest text-white/80">Core Stack</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {data.hero.chips.map((c) => <Pill key={c}>{c}</Pill>)}
                </div>
              </div>

              <div className="my-6 h-px w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent" />

              <div>
                <h3 className="text-[11px] uppercase tracking-[0.15em] text-white/50">Focus Areas</h3>
                <ul className="mt-3 space-y-2 text-sm text-white/70">
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-[#8ab4ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Component Architecture
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-[#8ab4ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    Performance Optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-[#8ab4ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                    State Management (Redux/TanStack)
                  </li>
                </ul>
              </div>

              <div aria-hidden="true" className="pointer-events-none absolute -bottom-16 -right-16 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(138,180,255,0.15),transparent_70%)] blur-2xl" />
            </Card>
          </div>
        </Reveal>
      </div>
    </section>
  );
}