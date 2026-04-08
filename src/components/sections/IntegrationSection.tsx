import SectionHeading from '../SectionHeading';
import { SiteCopy } from '../../content/siteContent';

type IntegrationSectionProps = {
  copy: SiteCopy;
};

function IntegrationSection({ copy }: IntegrationSectionProps) {
  return (
    <section className="py-8 pb-[5.5rem]" id="integration">
      <div className="container rounded-[28px] border border-white/80 bg-white/88 p-8 shadow-[0_18px_54px_rgba(28,39,51,0.08)]">
        <SectionHeading
          eyebrow={copy.integration.eyebrow}
          title={copy.integration.title}
          description={copy.integration.desc}
          centered
        />
        <p className="text-base leading-7 text-muted">{copy.integration.lead}</p>
        <p className="mt-6 text-sm font-extrabold uppercase tracking-[0.12em] text-brand-deep">
          {copy.integration.sublabel}
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {copy.integration.chips.map((chip) => (
            <span
              className="inline-flex items-center rounded-full border border-brand-deep/10 bg-gradient-to-br from-brand-deep to-brand px-4 py-3 text-white shadow-[0_10px_24px_rgba(31,79,120,0.18)]"
              key={chip}
            >
              {chip}
            </span>
          ))}
        </div>
        <p className="mt-6 text-base leading-7 text-muted">{copy.integration.note}</p>
      </div>
    </section>
  );
}

export default IntegrationSection;
