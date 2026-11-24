import { motion } from 'motion/react';
import logo from '../assets/vcloudmaster-logo.png';

export function Reveal({ children, delay = 0, y = 24, className = '', as = 'div' }) {
  const Comp = motion[as] ?? motion.div;
  return (
    <Comp
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Comp>
  );
}

export function Eyebrow({ children, tone = 'light' }) {
  const color = tone === 'dark' ? 'text-brand-400' : 'text-brand-700';
  return (
    <p className={`mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] ${color}`}>
      <span className="h-px w-6 bg-current opacity-70" aria-hidden="true" />
      {children}
    </p>
  );
}

export function SectionHeading({ eyebrow, title, body, tone = 'light', className = '' }) {
  const titleColor = tone === 'dark' ? 'text-white' : 'text-ink-950';
  const bodyColor = tone === 'dark' ? 'text-slate-300' : 'text-slate-600';
  return (
    <Reveal className={`max-w-2xl ${className}`}>
      {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
      <h2 className={`text-3xl font-semibold tracking-tight sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1] ${titleColor}`}>
        {title}
      </h2>
      {body && <p className={`mt-5 text-lg leading-relaxed ${bodyColor}`}>{body}</p>}
    </Reveal>
  );
}

const GLOW_PRESETS = {
  a: ['-top-40 -end-40 size-[30rem] bg-brand-400/[0.14]', '-bottom-48 -start-48 size-[32rem] bg-royal-500/[0.10]'],
  b: ['-top-40 -start-40 size-[30rem] bg-royal-500/[0.10]', 'top-1/3 -end-48 size-[28rem] bg-brand-400/[0.12]'],
  c: ['top-1/4 -end-40 size-[34rem] bg-brand-400/[0.16]', '-bottom-40 -start-40 size-[30rem] bg-royal-500/[0.12]'],
  d: ['-top-32 start-1/3 size-[28rem] bg-brand-300/[0.14]', '-bottom-40 -end-32 size-[26rem] bg-royal-400/[0.10]'],
};

/** Soft, warm brand-colour glows for light sections. Parent needs `relative isolate overflow-hidden`. */
export function SoftGlows({ variant = 'a' }) {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
      {GLOW_PRESETS[variant].map((cls) => (
        <div key={cls} className={`absolute rounded-full blur-[110px] ${cls}`} />
      ))}
    </div>
  );
}

export function Logo({ className = '' }) {
  return (
    <span className={`inline-flex items-center rounded-xl bg-white px-3 py-1.5 shadow-sm ring-1 ring-black/5 ${className}`}>
      <img src={logo} alt="VCloudMaster" className="h-7 w-auto sm:h-8" width="96" height="40" />
    </span>
  );
}

export function PrimaryButton({ children, className = '', ...props }) {
  return (
    <button
      type="button"
      className={`group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-brand-500 px-6 py-3.5 text-sm font-semibold text-ink-950 shadow-[0_10px_30px_-10px_rgba(244,131,34,0.7)] transition duration-300 hover:-translate-y-0.5 hover:bg-brand-400 hover:shadow-[0_18px_40px_-12px_rgba(244,131,34,0.8)] active:translate-y-0 disabled:pointer-events-none disabled:opacity-70 ${className}`}
      {...props}
    >
      <span
        className="pointer-events-none absolute inset-y-0 -start-full w-1/2 skew-x-[-20deg] bg-white/30 transition-all duration-700 group-hover:start-[150%]"
        aria-hidden="true"
      />
      <span className="relative inline-flex items-center gap-2">{children}</span>
    </button>
  );
}
