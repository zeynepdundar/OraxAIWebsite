import { SiteCopy } from '../content/siteContent';

type FooterProps = {
  copy: SiteCopy;
  onOpenPrivacy: () => void;
};

function Footer({ copy, onOpenPrivacy }: FooterProps) {
  return (
    <footer className="pt-2 pb-16">
      <div className="container grid gap-6 border-t border-black/10 py-10 md:flex md:items-end md:justify-between">
        <div>
          <a className="mb-4 inline-flex items-center" href="#home" aria-label={copy.brandAria}>
            <img
              className="block h-12 w-auto object-contain"
              src="/images/logos/xms-transparent.png"
              alt="OraxAI"
            />
          </a>
          <p className="max-w-[42rem] text-base leading-7 text-muted/95">{copy.footer.text}</p>
        </div>
        <div className="max-w-[340px] text-muted">
          <button
            type="button"
            className="mb-4 border-0 bg-transparent p-0 font-bold text-ink transition-colors hover:text-brand-deep"
            onClick={onOpenPrivacy}
          >
            {copy.footer.privacy}
          </button>
          <p>{copy.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
