import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Bot, Check, LoaderCircle, UserCheck } from 'lucide-react';

const STEP_MS = 1700;
const HOLD_MS = 4200;

/** Slim, horizontal, looping preview of an agent working through a finance task. */
export default function AgentConsole({ t }) {
  const c = t.console;
  const last = c.steps.length - 1;
  const reduce = useReducedMotion();
  const [active, setActive] = useState(reduce ? last : 0);

  useEffect(() => {
    if (reduce) {
      setActive(last);
      return undefined;
    }
    const id = window.setTimeout(() => setActive((a) => (a >= last ? 0 : a + 1)), active === last ? HOLD_MS : STEP_MS);
    return () => window.clearTimeout(id);
  }, [active, last, reduce]);

  return (
    <figure className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-5 shadow-[0_30px_60px_-30px_rgba(0,0,0,0.8)] backdrop-blur-xl lg:p-6">
      <div className="pointer-events-none absolute inset-x-10 top-0 h-px bg-gradient-to-r from-transparent via-brand-400/70 to-transparent" aria-hidden="true" />

      {/* Header row */}
      <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
        <div className="flex min-w-0 items-center gap-3">
          <span className="relative grid size-9 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-royal-500 to-royal-700 ring-1 ring-white/20">
            <Bot className="size-[18px] text-white" aria-hidden="true" />
            <span className="absolute -end-0.5 -top-0.5 flex size-2.5">
              <span className="animate-pulse-ring absolute inline-flex size-full rounded-full bg-emerald-400" />
              <span className="relative inline-flex size-2.5 rounded-full border-2 border-ink-950 bg-emerald-400" />
            </span>
          </span>
          <p className="min-w-0 truncate text-sm">
            <span className="font-semibold text-white">{c.label}</span>
            <span className="mx-2 text-white/20" aria-hidden="true">/</span>
            <span className="text-slate-400">{c.goalLabel}: </span>
            <span className="text-slate-200">{c.goal}</span>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-500/10 px-2.5 py-1 text-[11px] font-medium text-brand-300 ring-1 ring-brand-500/25">
            <UserCheck className="size-3.5" aria-hidden="true" />
            {c.human}
          </span>
          <figcaption className="rounded-full px-2.5 py-1 text-[11px] text-slate-500 ring-1 ring-white/10">{c.caption}</figcaption>
        </div>
      </div>

      {/* Steps */}
      <ol className="mt-5 grid grid-cols-2 gap-x-5 gap-y-5 md:grid-cols-4">
        {c.steps.map((step, i) => {
          const state = i < active ? 'done' : i === active ? (i === last ? 'waiting' : 'running') : 'queued';
          const fill = state === 'queued' ? '0%' : '100%';
          return (
            <li key={step} className="min-w-0">
              <div className="h-[3px] overflow-hidden rounded-full bg-white/10">
                <div
                  className={`h-full rounded-full transition-[width] ${state === 'waiting' ? 'bg-brand-500' : 'bg-gradient-to-r from-royal-400 to-royal-300 rtl:bg-gradient-to-l'}`}
                  style={{
                    width: fill,
                    transitionDuration: state === 'running' ? `${STEP_MS - 150}ms` : '350ms',
                    transitionTimingFunction: state === 'running' ? 'linear' : 'ease-out',
                  }}
                />
              </div>
              <div className="mt-3 flex items-center gap-2">
                <StepIcon state={state} />
                <motion.span
                    key={state}
                    initial={{ opacity: 0, y: 3 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className={`text-[11px] font-semibold uppercase tracking-wider ${
                      state === 'done'
                        ? 'text-emerald-300'
                        : state === 'running'
                          ? 'text-royal-300'
                          : state === 'waiting'
                            ? 'text-brand-300'
                            : 'text-slate-500'
                    }`}
                  >
                    {c.status[state]}
                  </motion.span>
              </div>
              <p className={`mt-1.5 text-[13px] leading-snug transition-colors duration-500 ${state === 'queued' ? 'text-slate-500' : 'text-slate-200'}`}>
                {step}
              </p>
            </li>
          );
        })}
      </ol>
    </figure>
  );
}

function StepIcon({ state }) {
  if (state === 'done') {
    return (
      <span className="grid size-[18px] shrink-0 place-items-center rounded-full bg-emerald-400/15 text-emerald-300">
        <Check className="size-3" strokeWidth={3} aria-hidden="true" />
      </span>
    );
  }
  if (state === 'running') {
    return <LoaderCircle className="size-[18px] shrink-0 animate-spin text-royal-300" aria-hidden="true" />;
  }
  if (state === 'waiting') {
    return (
      <span className="relative grid size-[18px] shrink-0 place-items-center">
        <span className="animate-pulse-ring absolute size-2.5 rounded-full bg-brand-500/60" />
        <span className="relative size-2 rounded-full bg-brand-500" />
      </span>
    );
  }
  return <span className="size-[18px] shrink-0 rounded-full border border-dashed border-white/25" aria-hidden="true" />;
}
