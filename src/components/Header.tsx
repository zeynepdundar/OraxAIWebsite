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
  const isHomePage = window.location.pathname === '/';
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
        <a
          className="inline-flex items-center gap-3"
          href={homeHref}
          aria-label={copy.brandAria}
          onClick={onCloseMenu}
        >
          <img
            className="block h-[42px] w-auto object-contain"
            src="/images/logos/xms-transparent.png"
            alt="OraxAI"
          />
        </a>

        <button
          type="button"
          className="block p-1 md:hidden"
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation"
          onClick={onToggleMenu}
        >
          <span className="my-[0.3rem] block h-0.5 w-6 bg-ink" />
          <span className="my-[0.3rem] block h-0.5 w-6 bg-ink" />
          <span className="my-[0.3rem] block h-0.5 w-6 bg-ink" />
        </button>

        <nav
          className={`absolute left-4 right-4 top-[calc(100%+0.55rem)] rounded-[26px] border border-white/70 bg-[rgba(255,255,255,0.92)] p-4 shadow-panel md:static md:flex md:items-center md:gap-6 md:rounded-none md:border-0 md:bg-transparent md:p-0 md:shadow-none ${
            mobileOpen ? 'block' : 'hidden md:flex'
          }`}
          aria-label="Primary"
        >
          <ul className="flex list-none flex-col items-start gap-4 p-0 text-muted md:flex-row md:items-center md:gap-[1.35rem]">
            {navItems.map(([id, label]) => (
              <li key={id}>
                <a
                  className="transition-colors hover:text-brand-deep focus-visible:text-brand-deep"
                  href={isHomePage ? `#${id}` : `/#${id}`}
                  onClick={onCloseMenu}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-col items-start gap-4 md:mt-0 md:flex-row md:items-center md:gap-4">
            <div
              className="inline-flex items-center rounded-full border border-black/10 bg-white/80 p-1"
              role="group"
              aria-label={copy.langLabel}
            >
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
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-br from-brand-deep to-brand px-5 py-4 font-bold text-white shadow-[0_14px_30px_rgba(15,93,97,0.18)] transition-all hover:-translate-y-px hover:shadow-[0_18px_36px_rgba(15,93,97,0.24)]"
              href="/demo"
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
