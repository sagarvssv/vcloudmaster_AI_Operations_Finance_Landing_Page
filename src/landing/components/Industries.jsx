import { motion } from 'motion/react';
import { ArrowRight, Briefcase, Building, Factory, HeartPulse, Landmark, ShoppingBag, Truck } from 'lucide-react';
import { SectionHeading } from './ui';

const ICONS = [Landmark, ShoppingBag, HeartPulse, Truck, Factory, Briefcase, Building];

// Cursor-following spotlight on each tile
const trackPointer = (e) => {
  const r = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty('--mx', `${e.clientX - r.left}px`);
  e.currentTarget.style.setProperty('--my', `${e.clientY - r.top}px`);
};

const tileMotion = (i) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.55, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] },
});

export default function Industries({ t, onRegister }) {
  const ind = t.industries;
  return (
    <section className="relative isolate overflow-hidden bg-ink-950 py-24 text-white sm:py-28 lg:py-32">
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_70%_80%_at_50%_0%,black,transparent)]" />
        <div className="absolute -top-48 start-1/2 h-96 w-[52rem] -translate-x-1/2 rounded-full bg-royal-600/30 blur-[110px] rtl:translate-x-1/2" />
        <div className="absolute -bottom-40 end-[-10%] size-[26rem] rounded-full bg-brand-500/10 blur-[120px]" />
      </div>

      <div className="container-x">
        <SectionHeading title={ind.title} body={ind.body} tone="dark" />

        <ul className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {ind.items.map((item, i) => {
            const Icon = ICONS[i] ?? Building;
            return (
              <motion.li
                key={item}
                {...tileMotion(i)}
                onPointerMove={trackPointer}
                className="group relative isolate flex min-h-36 flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors duration-500 hover:border-white/20 sm:min-h-44 sm:p-6"
              >
                <div
                  className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: 'radial-gradient(260px circle at var(--mx, 50%) var(--my, 50%), rgba(244,131,34,0.16), transparent 65%)' }}
                  aria-hidden="true"
                />
                <div className="flex items-start justify-between">
                  <span className="grid size-11 place-items-center rounded-xl bg-white/[0.06] text-brand-400 ring-1 ring-white/10 transition duration-500 group-hover:bg-brand-500 group-hover:text-ink-950">
                    <Icon className="size-5" aria-hidden="true" />
                  </span>
                  <span className="font-display text-xs font-semibold tabular-nums text-slate-500">0{i + 1}</span>
                </div>
                <h3 className="mt-8 text-base font-semibold leading-snug sm:text-lg">{item}</h3>
              </motion.li>
            );
          })}

          {/* CTA tile fills the 8th slot */}
          <motion.li {...tileMotion(ind.items.length)} className="col-span-2 lg:col-span-1">
            <button
              type="button"
              onClick={onRegister}
              className="group relative isolate flex h-full min-h-36 w-full flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 p-5 text-start text-ink-950 shadow-[0_20px_50px_-20px_rgba(244,131,34,0.7)] transition duration-500 hover:-translate-y-1 sm:min-h-44 sm:p-6"
            >
              <span className="absolute -end-10 -top-10 -z-10 size-40 rounded-full bg-white/25 blur-2xl transition-transform duration-700 group-hover:scale-125" aria-hidden="true" />
              <span className="text-sm font-medium text-ink-950/70">{ind.ctaTitle}</span>
              <span className="mt-8 flex items-end justify-between gap-3">
                <span className="font-display text-lg font-semibold leading-snug sm:text-xl">{ind.ctaBody}</span>
                <span className="grid size-10 shrink-0 place-items-center rounded-full bg-ink-950 text-white transition-transform duration-300 group-hover:translate-x-1 rtl:group-hover:-translate-x-1">
                  <ArrowRight className="size-4 rtl:-scale-x-100" aria-hidden="true" />
                </span>
              </span>
            </button>
          </motion.li>
        </ul>
      </div>
    </section>
  );
}
