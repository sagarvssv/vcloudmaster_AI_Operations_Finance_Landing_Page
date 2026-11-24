import { motion } from 'motion/react';
import { ArrowUpRight, Cpu, Landmark, Workflow } from 'lucide-react';
import { SectionHeading } from './ui';

const STYLES = {
  finance: {
    Icon: Landmark,
    card: 'bg-white ring-ink-950/[0.07] text-ink-950',
    icon: 'from-brand-400 to-brand-600 text-ink-950 shadow-brand-500/40',
    label: 'text-brand-700',
    focus: 'text-slate-500',
    line: 'border-ink-950/[0.08]',
    arrow: 'text-brand-600',
    glow: 'bg-brand-500/20',
    watermark: 'text-ink-950/[0.04]',
  },
  tech: {
    Icon: Cpu,
    card: 'bg-ink-950 ring-white/10 text-white',
    icon: 'from-royal-400 to-royal-700 text-white shadow-royal-500/50',
    label: 'text-royal-300',
    focus: 'text-slate-400',
    line: 'border-white/10',
    arrow: 'text-brand-400',
    glow: 'bg-royal-500/40',
    watermark: 'text-white/[0.04]',
  },
  ops: {
    Icon: Workflow,
    card: 'bg-white ring-ink-950/[0.07] text-ink-950',
    icon: 'from-royal-500 to-royal-700 text-white shadow-royal-500/40',
    label: 'text-royal-600',
    focus: 'text-slate-500',
    line: 'border-ink-950/[0.08]',
    arrow: 'text-royal-500',
    glow: 'bg-royal-500/15',
    watermark: 'text-ink-950/[0.04]',
  },
};

export default function Audience({ t }) {
  const a = t.audience;
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-mist-50 to-mist-100 pt-24 sm:pt-28 lg:pt-32">
      <div className="container-x">
        <SectionHeading eyebrow={a.eyebrow} title={a.title} />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {a.groups.map((g, i) => {
            const s = STYLES[g.key];
            return (
              <motion.article
                key={g.key}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className={`group relative isolate flex flex-col overflow-hidden rounded-3xl p-7 ring-1 transition duration-500 hover:-translate-y-1.5 hover:shadow-[0_40px_70px_-35px_rgba(2,10,42,0.45)] sm:p-8 ${s.card} ${
                  g.key === 'tech' ? 'md:-translate-y-4 md:hover:-translate-y-6' : ''
                }`}
              >
                <div className={`absolute -end-20 -top-20 -z-10 size-56 rounded-full blur-3xl transition duration-700 group-hover:scale-125 ${s.glow}`} aria-hidden="true" />
                {g.key === 'tech' && (
                  <div className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(circle_at_100%_0%,black,transparent_65%)] rtl:[mask-image:radial-gradient(circle_at_0%_0%,black,transparent_65%)]" aria-hidden="true" />
                )}
                <s.Icon
                  className={`pointer-events-none absolute -bottom-8 -end-8 -z-10 size-44 transition duration-700 group-hover:-rotate-6 group-hover:scale-110 ${s.watermark}`}
                  strokeWidth={1.25}
                  aria-hidden="true"
                />

                <div className="flex items-center justify-between">
                  <span className={`grid size-12 place-items-center rounded-2xl bg-gradient-to-br shadow-lg transition duration-500 group-hover:rotate-[-6deg] group-hover:scale-105 ${s.icon}`}>
                    <s.Icon className="size-6" aria-hidden="true" />
                  </span>
                  <span className={`font-display text-sm font-semibold tabular-nums opacity-40`}>0{i + 1}</span>
                </div>

                <p className={`mt-7 text-xs font-semibold uppercase tracking-[0.2em] ${s.label}`}>{g.label}</p>
                <p className={`mt-2 text-sm leading-relaxed ${s.focus}`}>{g.focus}</p>

                <ul className={`mt-6 border-t ${s.line}`}>
                  {g.roles.map((role) => (
                    <li key={role} className={`group/role flex items-center justify-between gap-4 border-b py-4 ${s.line}`}>
                      <span className="font-display text-xl font-semibold tracking-tight transition-transform duration-300 group-hover/role:translate-x-1 rtl:group-hover/role:-translate-x-1 sm:text-2xl">
                        {role}
                      </span>
                      <ArrowUpRight
                        className={`size-5 shrink-0 opacity-0 transition duration-300 group-hover/role:opacity-100 group-hover:opacity-60 rtl:-scale-x-100 ${s.arrow}`}
                        aria-hidden="true"
                      />
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>

      <RoleMarquee roles={a.roles} />
    </section>
  );
}

function RoleMarquee({ roles }) {
  const items = [...roles, ...roles];
  return (
    <div
      className="group relative mt-20 overflow-hidden border-y border-ink-950/[0.06] py-7 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]"
      dir="ltr"
      aria-hidden="true"
    >
      <div className="animate-marquee flex w-max items-center group-hover:[animation-play-state:paused]">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex shrink-0 items-center">
            {items.map((role, i) => (
              <span key={`${copy}-${i}`} className="flex items-center">
                <span
                  className={`whitespace-nowrap px-7 font-display text-4xl font-semibold tracking-tight sm:text-5xl ${
                    i % 2 === 0 ? 'text-ink-950' : 'text-ink-950/20'
                  }`}
                >
                  {role}
                </span>
                <span className="text-2xl text-brand-500">✦</span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
