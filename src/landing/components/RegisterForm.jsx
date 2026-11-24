import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight, Check, ChevronDown, LoaderCircle } from 'lucide-react';
import { FORM_ENDPOINT } from '../config';

const EMPTY = { fullName: '', email: '', company: '', jobTitle: '' };
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function trackLead(eventChoice) {
  // Fires into the GTM / Meta Pixel already installed on vcloudmaster.com, if present.
  try {
    window.dataLayer?.push({ event: 'agentic_ai_registration', event_choice: eventChoice });
    window.fbq?.('track', 'Lead', { content_name: 'Agentic AI Finance & Operations', content_category: eventChoice });
  } catch {
    /* analytics must never break the form */
  }
}

export default function RegisterForm({ t, lang, eventChoice, setEventChoice }) {
  const f = t.form;
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [honeypot, setHoneypot] = useState('');

  const validate = () => {
    const next = {};
    for (const key of Object.keys(EMPTY)) if (!values[key].trim()) next[key] = f.errors.required;
    if (values.email.trim() && !EMAIL_RE.test(values.email.trim())) next.email = f.errors.email;
    setErrors(next);
    return next;
  };

  const onChange = (key) => (e) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const found = validate();
    const firstInvalid = Object.keys(EMPTY).find((k) => found[k]);
    if (firstInvalid) {
      document.getElementById(`reg-${firstInvalid === 'fullName' ? 'name' : firstInvalid}`)?.focus();
      return;
    }
    if (honeypot) {
      setStatus('success');
      return;
    }

    setStatus('sending');
    const payload = {
      ...Object.fromEntries(Object.entries(values).map(([k, v]) => [k, v.trim()])),
      event: eventChoice,
      language: lang,
      source: 'agentic-ai-finance-operations-landing',
      pageUrl: window.location.href,
      submittedAt: new Date().toISOString(),
    };

    try {
      if (FORM_ENDPOINT) {
        const res = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
      } else {
        // No endpoint configured: simulate a request so the flow can be tested locally.
        console.info('[Registration] VITE_FORM_ENDPOINT is not set. Payload:', payload);
        await new Promise((r) => setTimeout(r, 900));
      }
      trackLead(eventChoice);
      setStatus('success');
    } catch (err) {
      console.error('[Registration] submit failed', err);
      setStatus('error');
    }
  };

  const reset = () => {
    setValues(EMPTY);
    setErrors({});
    setStatus('idle');
  };

  return (
    <div id="register" className="relative scroll-mt-28">
      {/* glow frame */}
      <div className="absolute -inset-px rounded-[1.75rem] bg-gradient-to-br from-brand-400/70 via-white/10 to-royal-500/70 blur-[1px]" aria-hidden="true" />
      <div className="relative overflow-hidden rounded-[1.75rem] bg-white p-6 text-ink-950 shadow-[0_40px_80px_-24px_rgba(0,0,0,0.6)] sm:p-7">
        <AnimatePresence mode="wait" initial={false}>
          {status === 'success' ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="flex min-h-[25rem] flex-col items-center justify-center text-center"
              role="status"
              aria-live="polite"
            >
              <motion.span
                initial={{ scale: 0.4, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 260, damping: 18, delay: 0.1 }}
                className="grid size-16 place-items-center rounded-full bg-gradient-to-br from-brand-400 to-brand-600 text-white shadow-lg shadow-brand-500/40"
              >
                <Check className="size-8" strokeWidth={3} aria-hidden="true" />
              </motion.span>
              <h2 className="mt-6 text-2xl font-semibold">{f.successTitle}</h2>
              <p className="mt-3 max-w-xs text-slate-600">{f.successBody}</p>
              <button
                type="button"
                onClick={reset}
                className="mt-8 text-sm font-semibold text-royal-600 underline-offset-4 hover:underline"
              >
                {f.again}
              </button>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
              onSubmit={onSubmit}
              noValidate
            >
              <h2 className="text-xl font-semibold tracking-tight sm:text-[1.4rem]">{f.title}</h2>
              <p className="mt-1 text-sm text-slate-500">{f.subtitle}</p>

              <div className="mt-5 grid gap-x-3 gap-y-3.5 sm:grid-cols-2">
                <Field id="reg-name" label={f.name} value={values.fullName} onChange={onChange('fullName')} error={errors.fullName} autoComplete="name" />
                <Field id="reg-email" label={f.email} type="email" value={values.email} onChange={onChange('email')} error={errors.email} autoComplete="email" inputMode="email" dir="ltr" />
                <Field id="reg-company" label={f.company} value={values.company} onChange={onChange('company')} error={errors.company} autoComplete="organization" />
                <Field id="reg-jobTitle" label={f.job} value={values.jobTitle} onChange={onChange('jobTitle')} error={errors.jobTitle} autoComplete="organization-title" />

                <div className="sm:col-span-2">
                  <label htmlFor="reg-event" className="mb-1.5 block text-[13px] font-medium text-ink-900">
                    {f.join}
                  </label>
                  <div className="relative">
                    <select
                      id="reg-event"
                      value={eventChoice}
                      onChange={(e) => setEventChoice(e.target.value)}
                      className="h-11 w-full appearance-none rounded-xl border border-slate-200 bg-slate-50 pe-10 ps-4 text-[15px] text-ink-950 transition outline-none hover:border-slate-300 focus:border-royal-500 focus:bg-white focus:ring-4 focus:ring-royal-500/15"
                    >
                      <option value="both">{f.options.both}</option>
                      <option value="dubai">{f.options.dubai}</option>
                      <option value="online">{f.options.online}</option>
                    </select>
                    <ChevronDown className="pointer-events-none absolute end-3.5 top-1/2 size-4 -translate-y-1/2 text-slate-500" aria-hidden="true" />
                  </div>
                </div>
              </div>

              {/* honeypot */}
              <div className="absolute -start-[9999px] top-0" aria-hidden="true">
                <label>
                  Website
                  <input tabIndex={-1} autoComplete="off" value={honeypot} onChange={(e) => setHoneypot(e.target.value)} />
                </label>
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="group mt-5 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-brand-500 px-6 text-[15px] font-semibold text-ink-950 shadow-[0_12px_30px_-12px_rgba(244,131,34,0.9)] transition hover:bg-brand-400 hover:shadow-[0_18px_36px_-12px_rgba(244,131,34,0.9)] disabled:cursor-wait disabled:opacity-80"
              >
                {status === 'sending' ? (
                  <>
                    <LoaderCircle className="size-4 animate-spin" aria-hidden="true" />
                    {f.sending}
                  </>
                ) : (
                  <>
                    {f.submit}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1" aria-hidden="true" />
                  </>
                )}
              </button>

              {status === 'error' && (
                <p role="alert" className="mt-3 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">
                  {f.error}
                </p>
              )}

              <p className="mt-3.5 text-center text-[11px] leading-relaxed text-slate-500">{f.consent}</p>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

function Field({ id, label, error, className = '', ...inputProps }) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-1.5 block text-[13px] font-medium text-ink-900">
        {label}
      </label>
      <input
        id={id}
        name={id}
        required
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`h-11 w-full rounded-xl border bg-slate-50 px-4 text-[15px] text-ink-950 transition outline-none placeholder:text-slate-400 hover:border-slate-300 focus:bg-white focus:ring-4 ${
          error ? 'border-red-400 focus:border-red-500 focus:ring-red-500/15' : 'border-slate-200 focus:border-royal-500 focus:ring-royal-500/15'
        }`}
        {...inputProps}
      />
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-xs font-medium text-red-600">
          {error}
        </p>
      )}
    </div>
  );
}
