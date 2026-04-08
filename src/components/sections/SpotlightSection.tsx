import SectionHeading from '../SectionHeading';
import { SiteCopy } from '../../content/siteContent';

type SpotlightSectionProps = {
  copy: SiteCopy;
};

function SpotlightSection({ copy }: SpotlightSectionProps) {
  return (
    <section className="py-6 pb-[5.5rem]" id="spotlight">
      <div className="container grid items-stretch gap-6 lg:grid-cols-[1fr_0.9fr]">
        <div>
          <SectionHeading
            eyebrow={copy.spotlight.eyebrow}
            title={copy.spotlight.title}
            description={copy.spotlight.text}
          />
          <ul className="mt-6 list-disc space-y-3 pl-5 text-muted">
            {copy.spotlight.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
          <a
            className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-brand-deep to-brand px-6 py-4 font-bold text-white shadow-[0_14px_30px_rgba(15,93,97,0.22)] transition-transform hover:-translate-y-px"
            href="#contact"
          >
            {copy.spotlight.cta}
          </a>
        </div>
        <div className="grid min-h-[420px]" aria-hidden="true">
          <div className="overflow-hidden rounded-panel border border-black/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(240,242,244,0.98))] shadow-panel">
            <div className="flex min-h-[420px] flex-col justify-between p-6">
              <div className="rounded-[20px] bg-[radial-gradient(circle_at_top_left,rgba(69,139,201,0.12),transparent_35%),linear-gradient(135deg,rgba(69,139,201,0.08),rgba(31,79,120,0.04))] p-6">
                <img
                  className="mx-auto h-auto max-h-[180px] w-full object-contain"
                  src="/images/logos/wms-transparent.png"
                  alt="OraxAI WMS"
                />
              </div>
              <div className="mt-6 rounded-[20px] border border-black/10 bg-white/80 p-5">
                <p className="text-sm font-extrabold uppercase tracking-[0.12em] text-brand-deep">
                  WMS Demo
                </p>
                <p className="mt-3 text-base leading-7 text-muted">
                  Demo ve ekran kayitlari ile WMS deneyimi canli olarak gosterilebilir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpotlightSection;
