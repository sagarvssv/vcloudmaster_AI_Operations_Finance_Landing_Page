import { Reveal, SectionHeading, SoftGlows } from './ui';

export default function Takeaways({ t }) {
  const k = t.takeaways;
  return (
    <section className="relative isolate overflow-hidden bg-white py-24 sm:py-28 lg:py-32">
      <SoftGlows variant="a" />
      <div className="container-x">
        <SectionHeading title={k.title} />
        <ol className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-ink-950/[0.07] bg-ink-950/[0.07] md:grid-cols-3">
          {k.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1} as="li" className="group relative bg-white p-8 transition-colors duration-500 hover:bg-mist-50 sm:p-10">
              <span
                className="block font-display text-6xl font-bold leading-none text-transparent transition-colors duration-500 [-webkit-text-stroke:1.5px_var(--color-royal-500)] group-hover:text-royal-500/10"
                aria-hidden="true"
              >
                0{i + 1}
              </span>
              <h3 className="mt-8 text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 leading-relaxed text-slate-600">{item.body}</p>
              <span className="absolute inset-x-8 bottom-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-brand-500 to-royal-500 transition-transform duration-500 group-hover:scale-x-100 rtl:origin-right sm:inset-x-10" aria-hidden="true" />
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
