// Section.jsx
import Reveal from "./Reveal.jsx";

export default function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="py-20 sm:py-24 scroll-mt-16">
      <div className="mx-auto w-[min(1100px,calc(100%-40px))]">
        <Reveal>
          <div className="mb-10 max-w-2xl">
            <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.2em] text-[#8ab4ff]">
              {eyebrow}
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {title}
            </h2>
          </div>
          {children}
        </Reveal>
      </div>
    </section>
  );
}