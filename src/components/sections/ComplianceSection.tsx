import SectionHeading from '../SectionHeading';
import { SiteCopy } from '../../content/siteContent';

type ComplianceSectionProps = {
  copy: SiteCopy;
};

function ComplianceSection({ copy }: ComplianceSectionProps) {
  return (
    <section
      className="relative py-8 pb-[5.5rem]"
      id="compliance"
    >
      <div className="container">
        <SectionHeading
          eyebrow={copy.compliance.eyebrow}
          title={copy.compliance.title}
          description={copy.compliance.intro}
        />

        <div className="mt-10 flex flex-wrap gap-3">
          {copy.compliance.chips.map((chip) => (
            <span
              key={chip}
              className="inline-flex items-center rounded-xl border border-black/[0.08] bg-white px-5 py-3 text-sm font-semibold text-ink shadow-[0_4px_16px_rgba(28,39,51,0.05)] transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/20 hover:shadow-[0_8px_24px_rgba(28,39,51,0.08)]"
            >
              {chip}
            </span>
          ))}
        </div>

        <p className="mt-6 max-w-3xl text-sm leading-6 text-muted">
          {copy.compliance.note}
        </p>
      </div>
    </section>
  );
}

export default ComplianceSection;