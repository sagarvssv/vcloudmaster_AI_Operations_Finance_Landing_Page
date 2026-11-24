import { motion } from 'motion/react';
import { Landmark, ListChecks, Target, UserCheck, Workflow, Wrench } from 'lucide-react';
import { Reveal, SectionHeading, SoftGlows } from './ui';

const FLOW_ICONS = [Target, ListChecks, Wrench, UserCheck];
const CARD_ICONS = [Landmark, Workflow];

export default function WhatIs({ t }) {
  const w = t.what;
  return (
    <section className="relative isolate overflow-hidden bg-mist-100 py-24 sm:py-28 lg:py-32">
      <SoftGlows variant="a" />
      <div className="bg-grid-light absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent_70%)]" aria-hidden="true" />
      <div className="container-x relative">
        <div className="grid items-end gap-12 lg:grid-cols-12">
          <SectionHeading eyebrow={w.eyebrow} title={w.title} body={w.body} className="lg:col-span-6" />

          {/* Goal -> Plan -> Tools -> Act flow */}
          <ol className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:col-span-6">
            {w.flow.map((step, i) => {
              const Icon = FLOW_ICONS[i];
              const isLast = i === w.flow.length - 1;
              return (
                <motion.li
                  key={step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className={`relative rounded-2xl border p-4 ${
                    isLast ? 'border-brand-500/30 bg-ink-950 text-white' : 'border-ink-950/10 bg-white text-ink-950'
                  }`}
                >
                  <span className={`text-[11px] font-semibold tracking-widest ${isLast ? 'text-brand-400' : 'text-slate-400'}`}>
                    0{i + 1}
                  </span>
                  <Icon className={`mt-3 size-5 ${isLast ? 'text-brand-400' : 'text-royal-500'}`} aria-hidden="true" />
                  <p className="mt-3 text-sm font-semibold leading-snug">{step}</p>
                </motion.li>
              );
            })}
          </ol>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {w.cards.map((card, i) => {
            const Icon = CARD_ICONS[i];
            return (
              <Reveal key={card.title} delay={i * 0.1}>
                <article className="group relative h-full overflow-hidden rounded-3xl border border-ink-950/[0.07] bg-white p-8 shadow-[0_1px_2px_rgba(2,10,42,0.04)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_30px_60px_-30px_rgba(2,10,42,0.35)] sm:p-10">
                  <div
                    className="absolute -end-20 -top-20 size-56 rounded-full bg-gradient-to-br from-royal-500/10 to-brand-500/10 opacity-0 blur-2xl transition duration-700 group-hover:opacity-100"
                    aria-hidden="true"
                  />
                  <span className="relative grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-royal-500 to-royal-700 text-white shadow-lg shadow-royal-500/30">
                    <Icon className="size-6" aria-hidden="true" />
                  </span>
                  <h3 className="relative mt-6 text-2xl font-semibold">{card.title}</h3>
                  <p className="relative mt-3 leading-relaxed text-slate-600">{card.body}</p>
                  <ul className="relative mt-6 flex flex-wrap gap-2">
                    {card.tags.map((tag) => (
                      <li key={tag} className="rounded-full bg-mist-100 px-3 py-1 text-xs font-medium text-royal-700 ring-1 ring-royal-500/10">
                        {tag}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
