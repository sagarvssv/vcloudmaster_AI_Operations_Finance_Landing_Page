import { ArrowRight } from 'lucide-react';
import { Reveal } from './ui';

export default function CtaBand({ t, onRegister }) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-500">
      <div
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_120%,rgba(255,255,255,0.35),transparent_45%),radial-gradient(circle_at_90%_-20%,rgba(176,85,10,0.55),transparent_50%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 opacity-[0.12] [background-image:radial-gradient(rgba(2,10,42,1)_1px,transparent_1px)] [background-size:18px_18px]"
        aria-hidden="true"
      />
      <div className="container-x flex flex-col items-start justify-between gap-8 py-16 sm:py-20 md:flex-row md:items-center">
        <Reveal>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl">{t.cta.title}</h2>
        </Reveal>
        <Reveal delay={0.1}>
          <button
            type="button"
            onClick={onRegister}
            className="group inline-flex shrink-0 items-center gap-2 rounded-xl bg-ink-950 px-7 py-4 text-base font-semibold text-white shadow-xl shadow-ink-950/25 transition hover:-translate-y-0.5 hover:bg-ink-800"
          >
            {t.cta.button}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" aria-hidden="true" />
          </button>
        </Reveal>
      </div>
    </section>
  );
}
