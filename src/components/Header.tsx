import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Globe } from 'lucide-react';
import { Language, SiteCopy } from '../content/siteContent';

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

  useEffect(() => {
    if (!isHomePage) {
      setAtTop(false);
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

  const overHero = isHomePage && atTop && !mobileOpen;

const navItems: Array<[string, string]> = [
  ['products', copy.nav.products],
  ['platform', copy.nav.platform],
  ['integration', copy.nav.integration],
  ['compliance', copy.nav.compliance],
];

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
            {navItems.map(([id, label]) => (
              <li key={id} className="list-none">
                <a
                  className={`inline-flex items-center rounded-lg px-2.5 py-1.5 font-semibold transition-all duration-200 ${overHero
                      ? 'text-white/90 hover:bg-white/10 hover:text-white'
                      : 'text-white/80 hover:bg-white/10 hover:text-white'
                    }`}
                  href={isHomePage ? `#${id}` : `/${language}#${id}`}
                  onClick={onCloseMenu}
                >
                  {label}
                </a>
              </li>
            ))}
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
              className="inline-flex items-center justify-center rounded-full bg-brand px-5 py-2.5 font-semibold text-white shadow-[0_10px_25px_rgba(69,139,201,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-soft hover:shadow-[0_15px_35px_rgba(69,139,201,0.35)]"
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