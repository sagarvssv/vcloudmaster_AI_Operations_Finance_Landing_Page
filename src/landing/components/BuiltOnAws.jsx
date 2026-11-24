import { BrainCircuit, Bot, ScanText, ShieldCheck } from 'lucide-react';
import { Reveal, SectionHeading, SoftGlows } from './ui';

const ICONS = [BrainCircuit, Bot, ShieldCheck, ScanText];

export default function BuiltOnAws({ t }) {
  const a = t.aws;
  return (
    <section className="relative isolate overflow-hidden bg-white py-24 sm:py-28 lg:py-32">
      <SoftGlows variant="b" />
      <div className="container-x">
        <SectionHeading eyebrow={a.eyebrow} title={a.title} body={a.body} />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {a.services.map((s, i) => {
            const Icon = ICONS[i];
            return (
              <Reveal key={s.name} delay={i * 0.08} className="h-full">
                <article className="group relative isolate flex h-full flex-col overflow-hidden rounded-3xl bg-ink-950 p-7 text-white ring-1 ring-white/5 transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-20px_rgba(39,69,223,0.55)]">
                  <div className="bg-grid absolute inset-0 -z-10 opacity-60 [mask-image:radial-gradient(circle_at_100%_0%,black,transparent_70%)] rtl:[mask-image:radial-gradient(circle_at_0%_0%,black,transparent_70%)]" aria-hidden="true" />
                  <div
                    className="absolute -end-16 -top-16 -z-10 size-48 rounded-full bg-royal-500/30 blur-3xl transition duration-700 group-hover:bg-brand-500/30"
                    aria-hidden="true"
                  />
                  <span className="grid size-11 place-items-center rounded-xl bg-white/[0.07] ring-1 ring-white/10 transition duration-500 group-hover:bg-brand-500 group-hover:text-ink-950">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-400">{s.label}</p>
                  <h3 className="mt-2 text-xl font-semibold leading-tight">{s.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">{s.body}</p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <p className="mt-8 max-w-3xl text-sm text-slate-500">{a.note}</p>
        </Reveal>
      </div>
    </section>
  );
}
