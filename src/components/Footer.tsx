import { ArrowUpRight } from 'lucide-react';
import { useParams } from 'react-router-dom';
import { SiteCopy } from '../content/siteContent';

type FooterProps = {
  copy: SiteCopy;
  onOpenPrivacy: () => void;
};

function Footer({ copy, onOpenPrivacy }: FooterProps) {
  const { lang = 'tr' } = useParams();

  return (
    <footer className="pt-8 pb-8">
      <div className="container">
        {/* CTA */}
        <div className="flex flex-col gap-6 border-y border-black/[0.08] py-12 md:flex-row md:items-center md:justify-between md:py-14">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-deep">
              {copy.footer.ctaEyebrow}
            </p>

            <h2 className="mt-3 text-[clamp(1.8rem,3vw,2.5rem)] font-extrabold tracking-[-0.04em] text-ink">
              {copy.footer.ctaTitle}
            </h2>

            <p className="mt-2 max-w-xl text-base leading-7 text-muted">
              {copy.footer.ctaText}
            </p>
          </div>

          <a
            href={`/${lang}/demoRequest`}
            className="group inline-flex shrink-0 items-center gap-2 text-sm font-bold text-brand-deep"
          >
            {copy.footer.ctaButton}

            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Footer */}
        <div className="flex flex-col gap-5 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <a
            className="inline-flex items-center"
            href="#home"
            aria-label={copy.brandAria}
          >
            <img
              className="block h-8 w-auto object-contain"
              src="/images/logos/orax-ai-transparent.png"
              alt="OraxAI"
            />
          </a>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted">
            <a
              href="mailto:info@oraxai.com"
              className="font-medium transition-colors hover:text-brand-deep"
            >
              info@oraxai.com
            </a>

            <button
              type="button"
              className="font-medium transition-colors hover:text-brand-deep"
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