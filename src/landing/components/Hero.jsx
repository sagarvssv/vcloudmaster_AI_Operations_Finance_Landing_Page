import { motion } from 'motion/react';
import { ArrowRight, Building2, MonitorPlay } from 'lucide-react';
import { PrimaryButton } from './ui';
import AgentConsole from './AgentConsole';
import RegisterForm from './RegisterForm';

const EASE = [0.16, 1, 0.3, 1];
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24, filter: 'blur(6px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  transition: { duration: 0.9, delay, ease: EASE },
});

const NOISE =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

export default function Hero({ t, eventChoice, setEventChoice, onRegister, lang }) {
  const h = t.hero;
  return (
    <section className="relative isolate overflow-hidden bg-ink-950 pb-14 pt-28 text-white sm:pt-32 lg:pb-16">
      {/* Background layers */}
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(70%_55%_at_50%_-5%,rgba(39,69,223,0.45),transparent_70%)]" />
        <div className="bg-grid absolute inset-0 [mask-image:radial-gradient(ellipse_75%_60%_at_50%_0%,black,transparent)]" />
        <div className="animate-float-slow absolute -top-48 start-[-12%] size-[34rem] rounded-full bg-royal-600/25 blur-[130px]" />
        <div
          className="animate-float-slow absolute bottom-[-14rem] end-[-8%] size-[30rem] rounded-full bg-brand-500/15 blur-[130px]"
          style={{ animationDelay: '-6s' }}
        />
        <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay" style={{ backgroundImage: NOISE }} />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>

      <div className="container-x">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Copy */}
          <div className="lg:col-span-7">
            <motion.p
              {...fadeUp(0)}
              className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/[0.04] py-1 pe-3.5 ps-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-300 backdrop-blur"
            >
              <span className="rounded-full bg-brand-500 px-2 py-0.5 text-[10px] tracking-[0.12em] text-ink-950">AWS</span>
              {h.eyebrow}
            </motion.p>

            <motion.h1
              key={lang}
              {...fadeUp(0.08)}
              className="mt-6 text-[2.5rem] font-semibold leading-[1.04] tracking-[-0.02em] sm:text-[3.25rem] lg:text-[3.6rem]"
            >
              <span className="bg-gradient-to-b from-white to-slate-300 bg-clip-text text-transparent">{h.titleLead}</span>{' '}
              <span className="text-gradient-brand">{h.titleAccent}</span>
            </motion.h1>

            <motion.p {...fadeUp(0.16)} className="mt-5 max-w-lg text-base leading-relaxed text-slate-400 sm:text-lg">
              {h.sub}
            </motion.p>

            <motion.div {...fadeUp(0.24)} className="mt-8 flex flex-wrap items-center gap-3">
              <PrimaryButton onClick={onRegister} className="px-6 py-3.5">
                {h.primary}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" aria-hidden="true" />
              </PrimaryButton>
              <a
                href="#events"
                className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition hover:border-white/30 hover:bg-white/[0.08]"
              >
                {h.secondary}
              </a>
            </motion.div>

            <motion.ul {...fadeUp(0.32)} className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-slate-400">
              <li className="inline-flex items-center gap-2">
                <Building2 className="size-4 text-brand-400" aria-hidden="true" />
                {h.formats[0]}
              </li>
              <li className="h-3.5 w-px bg-white/15" aria-hidden="true" />
              <li className="inline-flex items-center gap-2">
                <MonitorPlay className="size-4 text-brand-400" aria-hidden="true" />
                {h.formats[1]}
              </li>
            </motion.ul>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 32, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: EASE }}
            className="lg:col-span-5"
          >
            <RegisterForm t={t} lang={lang} eventChoice={eventChoice} setEventChoice={setEventChoice} />
          </motion.div>
        </div>

        {/* Agent preview strip */}
        <motion.div {...fadeUp(0.45)} className="mt-12 hidden md:block lg:mt-14">
          <AgentConsole t={t} />
        </motion.div>
      </div>
    </section>
  );
}
