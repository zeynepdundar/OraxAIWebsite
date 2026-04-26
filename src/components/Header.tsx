import { useLocation, useParams } from 'react-router-dom';
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

  const isHomePage = location.pathname === '/' || location.pathname === '/tr' || location.pathname === '/en';
  const homeHref = isHomePage ? '#home' : '/#home';
  const navItems: Array<[string, string]> = [
    ['home', copy.nav.home],
    ['products', copy.nav.products],
    ['platform', copy.nav.platform],
    ['integration', copy.nav.integration],
    ['compliance', copy.nav.compliance],
    ['contact', copy.nav.contact],
  ];
  return (
    <header className="sticky top-0 z-20 bg-[rgba(243,245,247,0.72)] backdrop-blur-[18px]">
      <div className="container flex min-h-[82px] items-center justify-between gap-4">
        {/* Logo */}
        <a
          className="inline-flex items-center gap-3"
          href={homeHref}
          onClick={onCloseMenu}
        >
          <img
            className="block h-[42px] w-auto object-contain"
            src="/images/logos/just-orax-ai-transparent.png"
            alt="OraxAI"
          />
        </a>
        {/* Mobile menu */}
        <button
          type="button"
          className="block p-1 md:hidden"
          aria-expanded={mobileOpen}
          onClick={onToggleMenu}
        >
          <span className="my-[0.3rem] block h-0.5 w-6 bg-ink" />
          <span className="my-[0.3rem] block h-0.5 w-6 bg-ink" />
          <span className="my-[0.3rem] block h-0.5 w-6 bg-ink" />
        </button>
        {/* Nav */}
        <nav
          className={`absolute left-4 right-4 top-[calc(100%+0.55rem)] rounded-[26px] border border-white/70 bg-[rgba(255,255,255,0.92)] p-4 shadow-panel md:static md:flex md:items-center md:gap-6 md:rounded-none md:border-0 md:bg-transparent md:p-0 md:shadow-none ${
            mobileOpen ? 'block' : 'hidden md:flex'
          }`}
        >
          <ul className="flex flex-col gap-4 md:flex-row md:gap-[1.35rem]">
            {navItems.map(([id, label]) => (
              <li key={id}>
                <a
                  className="transition-colors hover:text-brand-deep"
                  href={isHomePage ? `#${id}` : `/${language}#${id}`}
                  onClick={onCloseMenu}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          {/* Language + CTA */}
          <div className="mt-4 flex flex-col gap-4 md:mt-0 md:flex-row md:items-center">
            <div className="inline-flex items-center rounded-full border border-black/10 bg-white/80 p-1">
              <button
                type="button"
                className={`rounded-full px-3 py-2 text-sm font-medium ${
                  language === 'tr' ? 'bg-ink text-white' : 'text-muted'
                }`}
                onClick={() => onLanguageChange('tr')}
              >
                TR
              </button>
              <button
                type="button"
                className={`rounded-full px-3 py-2 text-sm font-medium ${
                  language === 'en' ? 'bg-ink text-white' : 'text-muted'
                }`}
                onClick={() => onLanguageChange('en')}
              >
                EN
              </button>
            </div>
            <a
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-br from-brand-deep to-brand px-5 py-4 font-bold text-white"
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