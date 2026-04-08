import SectionHeading from '../SectionHeading';
import { SiteCopy } from '../../content/siteContent';

type PlatformSectionProps = {
  copy: SiteCopy;
};

function PlatformSection({ copy }: PlatformSectionProps) {
  return (
    <section className="py-6 pb-[5.5rem]" id="platform">
      <div className="container">
        <SectionHeading
          eyebrow={copy.platform.eyebrow}
          title={copy.platform.title}
          description={copy.platform.desc}
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {copy.platform.pillars.map((pillar) => (
            <article
              className="rounded-panel border border-black/10 bg-white/85 p-6 shadow-panel"
              key={pillar.num}
            >
              <p className="text-[0.78rem] font-extrabold uppercase tracking-[0.12em] text-brand-deep">
                {pillar.num}
              </p>
              <h3 className="mt-1 text-[1.55rem] tracking-[-0.04em] text-ink">{pillar.title}</h3>
              <p className="mt-3 leading-7 text-muted">{pillar.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PlatformSection;
