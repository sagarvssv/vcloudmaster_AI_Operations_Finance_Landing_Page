import { useId, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight, Mail, MessageCircleQuestion, Plus } from 'lucide-react';
import { Reveal, SectionHeading, SoftGlows } from './ui';
import { CONTACT } from '../config';

export default function Faq({ t }) {
  const f = t.faq;
  const [open, setOpen] = useState(0);
  const baseId = useId();

  return (
    <section className="relative isolate overflow-hidden bg-white py-24 sm:py-28 lg:py-32">
      <SoftGlows variant="d" />
      <div className="container-x grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading eyebrow={f.eyebrow} title={f.title} />

          {/* Contact card */}
          <Reveal delay={0.1} className="mt-10">
            <div className="relative isolate overflow-hidden rounded-3xl bg-ink-950 p-7 text-white shadow-[0_30px_60px_-30px_rgba(2,10,42,0.6)]">
              <div className="bg-grid absolute inset-0 -z-10 [mask-image:radial-gradient(circle_at_100%_0%,black,transparent_70%)] rtl:[mask-image:radial-gradient(circle_at_0%_0%,black,transparent_70%)]" aria-hidden="true" />
              <div className="absolute -end-16 -top-16 -z-10 size-48 rounded-full bg-brand-500/25 blur-3xl" aria-hidden="true" />
              <span className="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-brand-400 to-brand-600 text-ink-950 shadow-lg shadow-brand-500/30">
                <MessageCircleQuestion className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-xl font-semibold">{f.contact.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{f.contact.body}</p>
              <a
                href={`mailto:${CONTACT.email}`}
                className="group mt-6 inline-flex items-center gap-2.5 rounded-xl bg-white/[0.07] px-4 py-3 text-sm font-semibold ring-1 ring-white/15 transition hover:bg-white hover:text-ink-950"
              >
                <Mail className="size-4 text-brand-400 transition group-hover:text-brand-600" aria-hidden="true" />
                {f.contact.button}
                <span className="hidden text-slate-400 transition group-hover:text-slate-500 sm:inline" dir="ltr">
                  · {CONTACT.email}
                </span>
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5 rtl:-scale-x-100 rtl:group-hover:-translate-x-0.5" aria-hidden="true" />
              </a>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <ul className="space-y-3">
            {f.items.map((item, i) => {
              const isOpen = open === i;
              const panelId = `${baseId}-panel-${i}`;
              const btnId = `${baseId}-btn-${i}`;
              return (
                <Reveal key={item.q} delay={i * 0.06} as="li">
                  <div
                    className={`rounded-2xl border bg-white/80 backdrop-blur transition duration-300 ${
                      isOpen ? 'border-brand-500/30 shadow-[0_20px_40px_-24px_rgba(2,10,42,0.3)]' : 'border-ink-950/[0.08] hover:border-ink-950/20'
                    }`}
                  >
                    <h3>
                      <button
                        id={btnId}
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setOpen(isOpen ? -1 : i)}
                        className="group flex w-full items-center gap-4 px-5 py-5 text-start text-base font-semibold text-ink-950 sm:px-6 sm:text-lg"
                      >
                        <span className="font-display text-xs tabular-nums text-slate-400">0{i + 1}</span>
                        <span className="flex-1">{item.q}</span>
                        <span
                          className={`grid size-9 shrink-0 place-items-center rounded-full border transition duration-300 ${
                            isOpen ? 'rotate-45 border-brand-500 bg-brand-500 text-ink-950' : 'border-ink-950/15 text-ink-950 group-hover:border-royal-500'
                          }`}
                        >
                          <Plus className="size-4" aria-hidden="true" />
                        </span>
                      </button>
                    </h3>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={panelId}
                          role="region"
                          aria-labelledby={btnId}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <p className="pb-6 pe-16 ps-12 leading-relaxed text-slate-600 sm:ps-[3.25rem]">{item.a}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
