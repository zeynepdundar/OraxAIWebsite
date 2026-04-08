import { SiteCopy } from '../../content/siteContent';

type ComplianceSectionProps = {
  copy: SiteCopy;
};

function ComplianceSection({ copy }: ComplianceSectionProps) {
  return (
    <section className="py-6 pb-20" id="compliance">
      <div className="container grid gap-6 rounded-[32px] border border-black/10 bg-[linear-gradient(135deg,rgba(69,139,201,0.04),rgba(31,79,120,0.03)),rgba(255,255,255,0.76)] p-7">
        <div>
          <p className="text-[0.78rem] font-extrabold uppercase tracking-[0.12em] text-brand-deep">
            {copy.compliance.label}
          </p>
          <p className="mt-3 text-base leading-7 text-muted">{copy.compliance.intro}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          {copy.compliance.chips.map((chip) => (
            <span
              className="inline-flex items-center rounded-full border border-black/10 bg-white/80 px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.6)]"
              key={chip}
            >
              {chip}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ComplianceSection;
