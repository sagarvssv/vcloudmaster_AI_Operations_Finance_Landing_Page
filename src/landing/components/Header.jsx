import { useEffect, useState } from 'react';
import { Languages } from 'lucide-react';
import { Logo } from './ui';
import { CONTACT } from '../config';

export default function Header({ t, onSwitchLang, onRegister }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'border-b border-white/10 bg-ink-950/80 py-3 backdrop-blur-xl' : 'border-b border-transparent bg-transparent py-5'
      }`}
    >
      <div className="container-x flex items-center justify-between gap-4">
        <a href={CONTACT.website} aria-label={t.nav.home} className="shrink-0 transition-opacity hover:opacity-90">
          <Logo />
        </a>
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            type="button"
            onClick={onSwitchLang}
            aria-label={t.meta.switchAria}
            lang={t.meta.switchTo}
            className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-3 py-2.5 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/10 sm:px-4"
          >
            <Languages className="size-4 opacity-80" aria-hidden="true" />
            {t.meta.switchLabel}
          </button>
          <button
            type="button"
            onClick={onRegister}
            className="inline-flex items-center rounded-xl bg-brand-500 px-4 py-2.5 text-sm font-semibold text-ink-950 transition hover:bg-brand-400 sm:px-5"
          >
            {t.nav.cta}
          </button>
        </div>
      </div>
    </header>
  );
}
