import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowLeftRight,
  ChartColumn,
  Landmark,
  MessagesSquare,
  Plug,
  ScanText,
  ShieldCheck,
  TriangleAlert,
  Workflow,
} from 'lucide-react';
import { SectionHeading } from './ui';

const ICONS = {
  scan: ScanText,
  match: ArrowLeftRight,
  chart: ChartColumn,
  shield: ShieldCheck,
  flow: Workflow,
  alert: TriangleAlert,
  chat: MessagesSquare,
  plug: Plug,
};
const TAB_ICONS = { finance: Landmark, ops: Workflow };
const ACCENT = {
  finance: { icon: 'bg-brand-500/10 text-brand-400 ring-brand-500/25', line: 'from-brand-400 to-brand-600' },
  ops: { icon: 'bg-royal-500/15 text-royal-300 ring-royal-400/30', line: 'from-royal-300 to-royal-500' },
};

export default function UseCases({ t }) {
  const u = t.useCases;
  const [tab, setTab] = useState(u.groups[0].key);
  const group = u.groups.find((g) => g.key === tab);
  const accent = ACCENT[tab];

  const onKeyDown = (e) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    e.preventDefault();
    const idx = u.groups.findIndex((g) => g.key === tab);
    const next = u.groups[(idx + 1) % u.groups.length].key;
    setTab(next);
    document.getElementById(`uc-tab-${next}`)?.focus();
  };

  return (
    <section className="relative isolate overflow-hidden bg-ink-950 py-24 text-white sm:py-28 lg:py-32">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_60%_60%_at_20%_0%,black,transparent)]" />
        <div className="absolute -top-40 start-[-10%] size-[36rem] rounded-full bg-royal-600/25 blur-[130px]" />
        <div className="absolute -bottom-48 end-[-10%] size-[30rem] rounded-full bg-brand-500/15 blur-[130px]" />
      </div>

      <div className="container-x">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading eyebrow={u.eyebrow} title={u.title} body={u.body} tone="dark" />

          <div
            role="tablist"
            aria-label={u.title}
            onKeyDown={onKeyDown}
            className="inline-flex w-fit shrink-0 rounded-2xl bg-white/[0.05] p-1.5 ring-1 ring-white/10 backdrop-blur"
          >
            {u.groups.map((g) => {
              const active = g.key === tab;
              const Icon = TAB_ICONS[g.key];
              return (
                <button
                  key={g.key}
                  id={`uc-tab-${g.key}`}
                  role="tab"
                  type="button"
                  aria-selected={active}
                  aria-controls="uc-panel"
                  tabIndex={active ? 0 : -1}
                  onClick={() => setTab(g.key)}
                  className={`relative inline-flex items-center gap-2.5 rounded-xl px-5 py-3 text-sm font-semibold transition-colors duration-300 ${
                    active ? 'text-ink-950' : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="uc-pill"
                      className="absolute inset-0 rounded-xl bg-white shadow-lg shadow-black/20"
                      transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                    />
                  )}
                  <Icon className="relative size-4" aria-hidden="true" />
                  <span className="relative">{g.label}</span>
                  <span className={`relative rounded-md px-1.5 py-0.5 text-[11px] tabular-nums ${active ? 'bg-ink-950/10' : 'bg-white/10'}`}>
                    0{g.items.length}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div id="uc-panel" role="tabpanel" aria-labelledby={`uc-tab-${tab}`} className="mt-12">
          <AnimatePresence mode="wait" initial={false}>
            <motion.ul
              key={tab}
              className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
              initial="hidden"
              animate="show"
              exit="exit"
              variants={{ show: { transition: { staggerChildren: 0.07 } }, exit: { transition: { staggerChildren: 0.03 } } }}
            >
              {group.items.map((item) => {
                const Icon = ICONS[item.icon];
                return (
                  <motion.li
                    key={item.title}
                    variants={{
                      hidden: { opacity: 0, y: 24 },
                      show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
                      exit: { opacity: 0, y: -12, transition: { duration: 0.2 } },
                    }}
                    className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 transition-colors duration-500 hover:border-white/20 hover:from-white/[0.09]"
                  >
                    <span
                      className={`absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r transition-transform duration-500 group-hover:scale-x-100 rtl:origin-right ${accent.line}`}
                      aria-hidden="true"
                    />
                    <span className={`grid size-11 place-items-center rounded-xl ring-1 transition-transform duration-500 group-hover:-translate-y-0.5 ${accent.icon}`}>
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <h3 className="mt-6 text-lg font-semibold leading-snug">{item.title}</h3>
                    <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate-400">{item.body}</p>
                    <div className="mt-6 border-t border-dashed border-white/10 pt-5">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">{u.poweredBy}</p>
                      <ul className="mt-2.5 flex flex-wrap gap-1.5">
                        {item.services.map((svc) => (
                          <li key={svc} className="rounded-md bg-white/[0.06] px-2 py-1 text-[11px] font-medium text-slate-200 ring-1 ring-white/10">
                            {svc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.li>
                );
              })}
            </motion.ul>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
