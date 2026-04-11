import { useEffect, useState } from 'react';
import Footer from './components/Footer';
import Header from './components/Header';
import PrivacyModal from './components/PrivacyModal';
import ComplianceSection from './components/sections/ComplianceSection';
import ContactSection from './components/sections/ContactSection';
import HeroSection from './components/sections/HeroSection';
import IntegrationSection from './components/sections/IntegrationSection';
import PlatformSection from './components/sections/PlatformSection';
import ProductsSection from './components/sections/ProductsSection';
import SpotlightSection from './components/sections/SpotlightSection';
import { Language, siteContent } from './content/siteContent';
import DemoRequestPage from './pages/DemoRequestPage';
import { applySeo } from './seo/applySeo';

function App() {
  const [language, setLanguage] = useState<Language>('tr');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);

  const copy = siteContent[language];

  useEffect(() => {
    document.documentElement.lang = language;
    const path = window.location.pathname === '/demo' ? '/demo' : '/';
    const isDemo = path === '/demo';
    applySeo({
      title: isDemo ? copy.demoMetaTitle : copy.metaTitle,
      description: isDemo ? copy.demoMetaDescription : copy.metaDescription,
      path,
      language,
    });
  }, [
    copy.demoMetaDescription,
    copy.demoMetaTitle,
    copy.metaDescription,
    copy.metaTitle,
    language,
  ]);

  const isDemoPage = window.location.pathname === '/demo';

  useEffect(() => {
    if (isDemoPage) {
      return;
    }

    document.body.style.overflow = privacyOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isDemoPage, privacyOpen]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setPrivacyOpen(false);
        setMobileOpen(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  const closeMenus = () => setMobileOpen(false);

  if (isDemoPage) {
    return (
      <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(69,139,201,0.08),transparent_28%),radial-gradient(circle_at_right_10%_top_16%,rgba(31,79,120,0.06),transparent_24%),linear-gradient(180deg,#f7f8f9_0%,#edf1f4_100%)]">
        <Header
          copy={copy}
          language={language}
          mobileOpen={mobileOpen}
          onCloseMenu={closeMenus}
          onToggleMenu={() => setMobileOpen((open) => !open)}
          onLanguageChange={setLanguage}
        />
        <DemoRequestPage copy={copy.demoRequest} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f6f8f9_0%,#f9fbfc_100%)]">
      <Header
        copy={copy}
        language={language}
        mobileOpen={mobileOpen}
        onCloseMenu={closeMenus}
        onToggleMenu={() => setMobileOpen((open) => !open)}
        onLanguageChange={setLanguage}
      />

      <main>
        <HeroSection copy={copy} />
        <ComplianceSection copy={copy} />
        <ProductsSection copy={copy} />
        <PlatformSection copy={copy} />
        <SpotlightSection copy={copy} />
        <IntegrationSection copy={copy} />
        <ContactSection copy={copy} />
      </main>

      <Footer copy={copy} onOpenPrivacy={() => setPrivacyOpen(true)} />
      <PrivacyModal copy={copy} open={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </div>
  );
}

export default App;
