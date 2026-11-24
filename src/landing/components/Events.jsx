import { ArrowRight, CalendarDays, Globe, MapPin, Sparkles, Video } from 'lucide-react';
import { Reveal, SectionHeading, SoftGlows } from './ui';
import { EVENT_DETAILS } from '../config';

export default function Events({ t, onRegister }) {
  const e = t.events;
  return (
    <section id="events" className="relative isolate scroll-mt-20 overflow-hidden bg-mist-100 py-24 sm:py-28 lg:py-32">
      <SoftGlows variant="c" />
      <div className="container-x">
        <SectionHeading eyebrow={e.eyebrow} title={e.title} />

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* In person - Dubai */}
          <Reveal className="h-full">
            <article className="group relative isolate flex h-full flex-col overflow-hidden rounded-3xl bg-ink-950 p-8 text-white shadow-[0_40px_80px_-40px_rgba(2,10,42,0.8)] sm:p-10">
              <div className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_top_right,black,transparent_70%)]" aria-hidden="true" />
              <div className="absolute -end-24 -top-24 -z-10 size-72 rounded-full bg-brand-500/25 blur-3xl transition duration-700 group-hover:bg-brand-500/35" aria-hidden="true" />
              <div className="absolute -bottom-24 -start-24 -z-10 size-72 rounded-full bg-royal-600/30 blur-3xl" aria-hidden="true" />

              <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-brand-500 px-3 py-1 text-xs font-semibold text-ink-950">
                <Sparkles className="size-3.5" aria-hidden="true" />
                {e.dubai.badge}
              </span>
              <h3 className="mt-6 text-2xl font-semibold leading-snug sm:text-[1.75rem]">{e.dubai.title}</h3>

              <dl className="mt-8 space-y-3 text-sm text-slate-300">
                <Meta icon={Globe} label={null} value={e.dubai.series} dark />
                <Meta icon={CalendarDays} label={e.dateLabel} value={EVENT_DETAILS.dubai.date} dark />
                <Meta icon={MapPin} label={e.venueLabel} value={EVENT_DETAILS.dubai.venue} dark />
              </dl>

              <div className="mt-auto pt-10">
                <button
                  type="button"
                  onClick={() => onRegister('dubai')}
                  className="group/btn inline-flex items-center gap-2 rounded-xl bg-brand-500 px-6 py-3.5 text-sm font-semibold text-ink-950 transition hover:bg-brand-400"
                >
                  {e.register}
                  <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1 rtl:-scale-x-100 rtl:group-hover/btn:-translate-x-1" aria-hidden="true" />
                </button>
              </div>
            </article>
          </Reveal>

          {/* Online webinar */}
          <Reveal delay={0.1} className="h-full">
            <article className="group relative isolate flex h-full flex-col overflow-hidden rounded-3xl border border-ink-950/[0.07] bg-white p-8 shadow-[0_30px_60px_-40px_rgba(2,10,42,0.4)] transition duration-500 hover:shadow-[0_40px_80px_-40px_rgba(39,69,223,0.45)] sm:p-10">
              <div className="absolute -end-24 -top-24 -z-10 size-72 rounded-full bg-royal-500/10 blur-3xl" aria-hidden="true" />

              <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-royal-500 px-3 py-1 text-xs font-semibold text-white">
                <Video className="size-3.5" aria-hidden="true" />
                {e.online.badge}
              </span>
              <h3 className="mt-6 text-2xl font-semibold leading-snug text-ink-950 sm:text-[1.75rem]">{e.online.title}</h3>

              <dl className="mt-8 space-y-3 text-sm text-slate-600">
                <Meta icon={Video} label={null} value={e.online.series} />
                <Meta icon={CalendarDays} label={e.dateLabel} value={EVENT_DETAILS.online.date} />
                <Meta icon={Globe} label={null} value={e.online.anywhere} />
              </dl>

              <div className="mt-auto pt-10">
                <button
                  type="button"
                  onClick={() => onRegister('online')}
                  className="group/btn inline-flex items-center gap-2 rounded-xl bg-ink-950 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-royal-600"
                >
                  {e.register}
                  <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1 rtl:-scale-x-100 rtl:group-hover/btn:-translate-x-1" aria-hidden="true" />
                </button>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Meta({ icon: Icon, label, value, dark = false }) {
  return (
    <div className="flex items-center gap-3">
      <span className={`grid size-8 shrink-0 place-items-center rounded-lg ${dark ? 'bg-white/[0.07] text-brand-400' : 'bg-mist-100 text-royal-500'}`}>
        <Icon className="size-4" aria-hidden="true" />
      </span>
      {label && <dt className={dark ? 'text-slate-400' : 'text-slate-500'}>{label}:</dt>}
      <dd className={`font-medium ${dark ? 'text-white' : 'text-ink-950'}`}>{value}</dd>
    </div>
  );
}
