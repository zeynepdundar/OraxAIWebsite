import { SiteCopy } from '../content/siteContent';

type FooterProps = {
  copy: SiteCopy;
  onOpenPrivacy: () => void;
};

function Footer({ copy, onOpenPrivacy }: FooterProps) {
  return (
    <footer className="pt-8 pb-10">
      <div className="container">
        {/* CTA */}
        <div className="rounded-[28px] bg-[#08172e] px-7 py-10 text-white md:px-10 md:py-12">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-soft">
                {copy.footer.ctaEyebrow}
              </p>

              <h2 className="mt-3 text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold leading-tight tracking-[-0.03em]">
                {copy.footer.ctaTitle}
              </h2>

              <p className="mt-3 max-w-xl leading-7 text-white/70">
                {copy.footer.ctaText}
              </p>
            </div>

            <div className="flex shrink-0 flex-col gap-3 sm:flex-row md:flex-col">
              <a
                href="/tr/demoRequest"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-brand-soft"
              >
                {copy.footer.ctaButton}
                <span>→</span>
              </a>

              <a
                href="mailto:info@oraxai.com"
                className="text-center text-sm font-semibold text-white/70 transition-colors hover:text-white"
              >
                info@oraxai.com
              </a>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="mt-8 flex flex-col gap-5 border-t border-black/10 pt-7 md:flex-row md:items-center md:justify-between">
          <a
            className="inline-flex items-center"
            href="#home"
            aria-label={copy.brandAria}
          >
            <img
              className="block h-9 w-auto object-contain"
              src="/images/logos/orax-ai-transparent.png"
              alt="OraxAI"
            />
          </a>

          <div className="flex flex-col gap-3 text-sm text-muted md:flex-row md:items-center md:gap-6">
            <button
              type="button"
              className="text-left font-semibold transition-colors hover:text-brand-deep"
              onClick={onOpenPrivacy}
            >
              {copy.footer.privacy}
            </button>

            <span>{copy.footer.copyright}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;