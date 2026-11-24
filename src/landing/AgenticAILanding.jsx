import { useCallback, useEffect, useState } from 'react';
import { MotionConfig } from 'motion/react';
import { content } from './content';
import Header from './components/Header';
import Hero from './components/Hero';
import WhatIs from './components/WhatIs';
import UseCases from './components/UseCases';
import BuiltOnAws from './components/BuiltOnAws';
import Audience from './components/Audience';
import Events from './components/Events';
import Takeaways from './components/Takeaways';
import Industries from './components/Industries';
import Faq from './components/Faq';
import CtaBand from './components/CtaBand';
import Footer from './components/Footer';

function getInitialLang() {
  if (typeof window === 'undefined') return 'en';
  const fromUrl = new URLSearchParams(window.location.search).get('lang');
  if (fromUrl === 'ar' || fromUrl === 'en') return fromUrl;
  try {
    const saved = window.localStorage.getItem('vcm-lang');
    if (saved === 'ar' || saved === 'en') return saved;
  } catch {
    /* storage unavailable */
  }
  return 'en';
}

/**
 * Agentic AI for Finance & Operations landing page.
 * Self-contained: drop the /landing folder into any React app and render <AgenticAILanding />.
 */
export default function AgenticAILanding() {
  const [lang, setLang] = useState(getInitialLang);
  const [eventChoice, setEventChoice] = useState('both');
  const t = content[lang];

  useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = t.meta.dir;
    try {
      window.localStorage.setItem('vcm-lang', lang);
    } catch {
      /* storage unavailable */
    }
  }, [lang, t.meta.dir]);

  const goToForm = useCallback((choice) => {
    if (choice) setEventChoice(choice);
    const form = document.getElementById('register');
    if (!form) return;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    form.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' });
    window.setTimeout(() => document.getElementById('reg-name')?.focus({ preventScroll: true }), reduce ? 0 : 650);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:start-3 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-ink-950"
      >
        Skip to content
      </a>
      <Header t={t} onSwitchLang={() => setLang(t.meta.switchTo)} onRegister={() => goToForm()} />
      <main id="main">
        <Hero t={t} eventChoice={eventChoice} setEventChoice={setEventChoice} onRegister={() => goToForm()} lang={lang} />
        <WhatIs t={t} />
        <UseCases t={t} />
        <BuiltOnAws t={t} />
        <Audience t={t} />
        <Events t={t} onRegister={goToForm} />
        <Takeaways t={t} />
        <Industries t={t} onRegister={() => goToForm()} />
        <Faq t={t} />
        <CtaBand t={t} onRegister={() => goToForm()} />
      </main>
      <Footer t={t} />
    </MotionConfig>
  );
}
