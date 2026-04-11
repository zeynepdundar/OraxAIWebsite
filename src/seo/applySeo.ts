import type { Language } from '../content/siteContent';
import { SITE_URL } from './siteConfig';

export type SeoInput = {
  title: string;
  description: string;
  path: string;
  language: Language;
};

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  const selector = `meta[${attr}="${key}"]`;
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(href: string) {
  let el = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.rel = 'canonical';
    document.head.appendChild(el);
  }
  el.href = href;
}

function setJsonLd(data: Record<string, unknown>) {
  const id = 'oraxai-jsonld';
  let el = document.getElementById(id) as HTMLScriptElement | null;
  if (!el) {
    el = document.createElement('script');
    el.type = 'application/ld+json';
    el.id = id;
    document.head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

/**
 * Updates document title, meta description, social cards, canonical URL, and JSON-LD.
 * Safe to call on every language or route change.
 */
export function applySeo({ title, description, path, language }: SeoInput) {
  const pathname = path.startsWith('/') ? path : `/${path}`;
  const canonical = `${SITE_URL}${pathname === '//' ? '/' : pathname}`;
  const imageUrl = `${SITE_URL}/logo512.png`;
  const locale = language === 'tr' ? 'tr_TR' : 'en_US';
  const alternateLocale = language === 'tr' ? 'en_US' : 'tr_TR';

  document.title = title;

  setMeta('name', 'description', description);
  setMeta('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');

  setMeta('property', 'og:type', 'website');
  setMeta('property', 'og:site_name', 'OraxAI');
  setMeta('property', 'og:title', title);
  setMeta('property', 'og:description', description);
  setMeta('property', 'og:url', canonical);
  setMeta('property', 'og:image', imageUrl);
  setMeta('property', 'og:image:alt', 'OraxAI');
  setMeta('property', 'og:locale', locale);
  setMeta('property', 'og:locale:alternate', alternateLocale);

  setMeta('name', 'twitter:card', 'summary_large_image');
  setMeta('name', 'twitter:title', title);
  setMeta('name', 'twitter:description', description);
  setMeta('name', 'twitter:image', imageUrl);

  setCanonical(canonical);

  setJsonLd({
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#organization`,
        name: 'OraxAI',
        url: SITE_URL,
        logo: `${SITE_URL}/logo512.png`,
        email: 'info@oraxai.com',
        description,
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: 'OraxAI',
        publisher: { '@id': `${SITE_URL}/#organization` },
        inLanguage: language === 'tr' ? 'tr' : 'en',
      },
      {
        '@type': 'WebPage',
        '@id': `${canonical}#webpage`,
        url: canonical,
        name: title,
        description,
        isPartOf: { '@id': `${SITE_URL}/#website` },
        inLanguage: language === 'tr' ? 'tr' : 'en',
      },
    ],
  });
}
