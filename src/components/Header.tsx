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
    <header className="sticky top-0 z-20 bg-white/60 backdrop-blur-xl">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#458bc9]/30 to-transparent" />

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
          className={`absolute left-4 right-4 top-[calc(100%+0.55rem)] rounded-[26px] border border-white/70 bg-[rgba(255,255,255,0.92)] p-4 shadow-panel md:static md:flex md:items-center md:gap-6 md:rounded-none md:border-0 md:bg-transparent md:p-0 md:shadow-none ${mobileOpen ? 'block' : 'hidden md:flex'
            }`}
        >
          <ul className="flex flex-col gap-2 md:flex-row md:gap-5">
            {navItems.map(([id, label]) => (
              <li key={id} className="list-none">
                <a
                  className="inline-flex items-center px-2.5 py-1.5 rounded-lg text-black/85 font-semibold transition-all duration-200 hover:bg-[#458bc9]/10 hover:text-black"
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
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-black/85 font-semibold transition-all duration-200 hover:bg-[#458bc9]/10 cursor-pointer"
            >

              <Globe className="h-4 w-4 text-black/70" />

              <select
                id="lang-select"
                value={language}
                onChange={(e) => onLanguageChange(e.target.value as Language)}
                className="bg-transparent text-sm font-semibold text-black/85 outline-none cursor-pointer appearance-none"
              >
                <option value="tr">TR</option>
                <option value="en">EN</option>
              </select>

            </div>

            {/* CTA */}
            <a
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#458bc9] to-[#6aa6db] px-5 py-2.5 font-semibold text-white shadow-[0_10px_25px_rgba(69,139,201,0.25)] transition-all duration-300 hover:shadow-[0_15px_35px_rgba(69,139,201,0.35)] hover:scale-[1.03]" href={`/${lang}/demoRequest`}
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