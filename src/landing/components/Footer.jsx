import { Globe, Mail, MapPin } from 'lucide-react';
import { Logo } from './ui';
import { CONTACT } from '../config';

export default function Footer({ t }) {
  const f = t.footer;
  return (
    <footer className="bg-ink-900 py-14 text-slate-300">
      <div className="container-x">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xl">
            <a href={CONTACT.website} aria-label={t.nav.home} className="inline-block">
              <Logo />
            </a>
            <p className="mt-6 font-display text-base font-semibold text-white">{f.company}</p>
            <p className="mt-3 flex items-start gap-2.5 text-sm leading-relaxed text-slate-400">
              <MapPin className="mt-0.5 size-4 shrink-0 text-brand-400" aria-hidden="true" />
              {f.address}
            </p>
          </div>
          <ul className="space-y-3 text-sm">
            <li>
              <a href={`mailto:${CONTACT.email}`} className="inline-flex items-center gap-2.5 transition hover:text-brand-400" dir="ltr">
                <Mail className="size-4 text-brand-400" aria-hidden="true" />
                {CONTACT.email}
              </a>
            </li>
            <li>
              <a href={CONTACT.website} className="inline-flex items-center gap-2.5 transition hover:text-brand-400" dir="ltr">
                <Globe className="size-4 text-brand-400" aria-hidden="true" />
                {CONTACT.websiteLabel}
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row sm:justify-between">
          <p>{f.trademark}</p>
          <p>
            © {new Date().getFullYear()} {f.company}. {f.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
