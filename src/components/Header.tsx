import { useCallback, useEffect, useRef, useState } from 'react';

import { useLocation, useParams } from 'react-router-dom';

import { Globe } from 'lucide-react';

import { Language, SiteCopy } from '../content/siteContent';

const SECTION_IDS = ['products', 'platform', 'integration', 'compliance'] as const;

type HeaderProps = {
  copy: SiteCopy;
  language: Language;
  mobileOpen: boolean;
  onCloseMenu: () => void;
  onToggleMenu: () => void;
  onLanguageChange: (language: Language) => void;
};

function Header({
  copy,
  language,
  mobileOpen,
  onCloseMenu,
  onToggleMenu,
  onLanguageChange,
}: HeaderProps) {
  const location = useLocation();
  const { lang } = useParams();

  const isHomePage = /^\/(en|tr)?\/?$/.test(location.pathname);
  const homeHref = isHomePage ? '#home' : '/#home';

  // Transparent header over the hero, dark glass header after scrolling.
  const [atTop, setAtTop] = useState(true);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    if (!isHomePage) {
      setAtTop(false);
      setActiveSection('');
      return;
    }

    const onScroll = () => {
      setAtTop(window.scrollY < 40);
    };

    onScroll();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [isHomePage]);

  // A navbar click starts a smooth scroll that travels through every section
  // between here and the target. The scroll-spy below would mark each of them
  // active in turn, so their underlines animate one after another. Lock the
  // spy to the clicked section until the scroll settles.
  const navLockRef = useRef(false);
  const navLockTimerRef = useRef<number | undefined>(undefined);

  const releaseNavLock = useCallback(() => {
    navLockRef.current = false;

    if (navLockTimerRef.current !== undefined) {
      window.clearTimeout(navLockTimerRef.current);
      navLockTimerRef.current = undefined;
    }
  }, []);

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    navLockRef.current = true;

    if (navLockTimerRef.current !== undefined) {
      window.clearTimeout(navLockTimerRef.current);
    }

    // Fallback for browsers without `scrollend`; also covers a scroll that
    // never reaches its target (short page, interrupted navigation).
    navLockTimerRef.current = window.setTimeout(releaseNavLock, 1200);

    onCloseMenu();
  };

  useEffect(() => {
    // A real gesture always wins: browsers cancel an in-flight smooth scroll
    // on wheel/touch/key input, so the spy must take back over immediately.
    const gestures = ['wheel', 'touchstart', 'keydown'];
    const w = window as unknown as {
      addEventListener: (type: string, listener: () => void, options?: unknown) => void;
      removeEventListener: (type: string, listener: () => void) => void;
    };
    const hasScrollEnd = 'onscrollend' in window;

    gestures.forEach((type) =>
      w.addEventListener(type, releaseNavLock, { passive: true }),
    );

    if (hasScrollEnd) {
      w.addEventListener('scrollend', releaseNavLock);
    }

    return () => {
      gestures.forEach((type) => w.removeEventListener(type, releaseNavLock));

      if (hasScrollEnd) {
        w.removeEventListener('scrollend', releaseNavLock);
      }

      if (navLockTimerRef.current !== undefined) {
        window.clearTimeout(navLockTimerRef.current);
      }
    };
  }, [releaseNavLock]);

  useEffect(() => {
    if (!isHomePage) {
      return;
    }

    // Scroll pozisyonuna gore aktif bolumu belirle (scroll-spy).
    const updateActiveSection = () => {
      // Nav click in flight: the target is already set, ignore the sections
      // the page is travelling past.
      if (navLockRef.current) {
        return;
      }

      const offset = 120; // sticky header yuksekligi + biraz pay
      let current = '';

      SECTION_IDS.forEach((id) => {
        const el = document.getElementById(id);

        if (el && el.getBoundingClientRect().top - offset <= 0) {
          current = id;
        }
      });

      // Sayfanin en altindayken son bolum aktif kalsin.
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;

      if (atBottom) {
        const lastVisible = SECTION_IDS.filter((id) =>
          document.getElementById(id),
        ).pop();

        if (lastVisible) {
          current = lastVisible;
        }
      }

      setActiveSection((prev) => (prev === current ? prev : current));
    };

    let frame = 0;

    const onScroll = () => {
      if (frame) {
        return;
      }

      frame = window.requestAnimationFrame(() => {
        frame = 0;
        updateActiveSection();
      });
    };

    updateActiveSection();

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    window.addEventListener('hashchange', updateActiveSection);

    return () => {
      if (frame) {
        window.cancelAnimationFrame(frame);
      }

      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      window.removeEventListener('hashchange', updateActiveSection);
    };
  }, [isHomePage]);

  const overHero = isHomePage && atTop && !mobileOpen;

  const navItems: Array<[string, string]> = SECTION_IDS.map((id) => [
    id,
    copy.nav[id],
  ]);

  return (
    <header
      className={`sticky top-0 z-20 transition-all duration-300 ${overHero
        ? 'bg-transparent'
        : 'border-b border-white/10 bg-[#08172e]/90 shadow-[0_4px_24px_rgba(0,0,0,0.18)] backdrop-blur-md'
        }`}
    >
      {/* Subtle top accent */}
      <div
        className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent transition-opacity duration-300 ${overHero ? 'opacity-100' : 'opacity-60'
          }`}
      />

      <div className="container flex min-h-[82px] items-center justify-between gap-4">
        {/* Logo */}
        <a
          className="inline-flex items-center transition-opacity duration-300 hover:opacity-90"
          href={homeHref}
          onClick={onCloseMenu}
        >
          <img
            className="block h-[42px] w-auto object-contain brightness-0 invert"
            src="/images/logos/orax-ai-transparent.png"
            alt="OraxAI"
          />
        </a>

        {/* Mobile menu */}
        <button
          type="button"
          className="block p-1 md:hidden"
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          onClick={onToggleMenu}
        >
          <span
            className={`my-[0.3rem] block h-0.5 w-6 transition-colors ${overHero ? 'bg-white' : 'bg-white/90'
              }`}
          />
          <span
            className={`my-[0.3rem] block h-0.5 w-6 transition-colors ${overHero ? 'bg-white' : 'bg-white/90'
              }`}
          />
          <span
            className={`my-[0.3rem] block h-0.5 w-6 transition-colors ${overHero ? 'bg-white' : 'bg-white/90'
              }`}
          />
        </button>

        {/* Navigation */}
        <nav
          className={`absolute left-4 right-4 top-[calc(100%+0.55rem)] rounded-[20px] border border-white/10 bg-[#08172e]/95 p-4 shadow-[0_12px_40px_rgba(0,0,0,0.25)] backdrop-blur-md md:static md:flex md:items-center md:gap-6 md:rounded-none md:border-0 md:bg-transparent md:p-0 md:shadow-none md:backdrop-blur-none ${mobileOpen ? 'block' : 'hidden md:flex'
            }`}
        >
          <ul className="flex flex-col gap-2 md:flex-row md:gap-5">
            {navItems.map(([id, label]) => {
              const isActive = activeSection === id;

              return (
                <li key={id} className="list-none">
                  <a
                    className={`group relative inline-flex items-center px-1 py-1.5 font-semibold transition-colors duration-200 ${isActive
                      ? 'text-white'
                      : overHero
                        ? 'text-white/85 hover:text-white'
                        : 'text-white/75 hover:text-white'
                      }`}
                    href={isHomePage ? `#${id}` : `/${language}#${id}`}
                    aria-current={isActive ? 'page' : undefined}
                    onClick={() => handleNavClick(id)}
                  >
                    {label}
                    {/* Active/hover indicator: scales out from the left rather
                        than fading, so moving between items reads as one
                        continuous motion. */}
                    <span
                      aria-hidden="true"
                      className={`pointer-events-none absolute bottom-0 left-0 h-[2px] w-full origin-left rounded-full bg-brand transition-transform duration-300 ease-out motion-reduce:transition-none ${isActive
                        ? 'scale-x-100'
                        : 'scale-x-0 group-hover:scale-x-100 group-focus-visible:scale-x-100'
                        }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="mt-4 flex flex-col gap-3 md:mt-0 md:flex-row md:items-center md:gap-5">
            {/* Language switch */}
            <div
              className={`flex cursor-pointer items-center gap-2 rounded-lg px-3 py-2 font-semibold transition-all duration-200 ${overHero
                ? 'text-white/90 hover:bg-white/10 hover:text-white'
                : 'text-white/80 hover:bg-white/10 hover:text-white'
                }`}
            >
              <Globe
                className={`h-4 w-4 ${overHero ? 'text-white/90' : 'text-white/70'
                  }`}
              />

              <select
                id="lang-select"
                value={language}
                onChange={(e) =>
                  onLanguageChange(e.target.value as Language)
                }
                className="cursor-pointer appearance-none bg-transparent text-sm font-semibold text-white outline-none [&>option]:text-black"
              >
                <option value="tr">TR</option>
                <option value="en">EN</option>
              </select>
            </div>

            {/* CTA */}
<a
  className="inline-block w-auto rounded-[3px] bg-brand px-6 py-3 text-center text-[15px] font-medium leading-none text-white fill-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md hover:brightness-105 active:translate-y-0 active:scale-[0.98] active:brightness-95"
  href={`/${lang}/demoRequest`}
  onClick={onCloseMenu}
>
  {copy.nav.demo}
</a>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;