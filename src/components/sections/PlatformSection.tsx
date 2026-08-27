import SectionHeading from '../SectionHeading';
import { SiteCopy } from '../../content/siteContent';
import {
  BrainCircuit,
  Layers3,
  PlugZap,
  ShieldCheck,
} from 'lucide-react';

type PlatformSectionProps = {
  copy: SiteCopy;
};

function PlatformSection({ copy }: PlatformSectionProps) {
  const pillarIcons = {
  Layers3,
  BrainCircuit,
  PlugZap,
  ShieldCheck,
};
  return (
    <section className="section-y" id="platform">
      <div className="reveal container">
        <SectionHeading
          eyebrow={copy.platform.eyebrow}
          title={copy.platform.title}
          description={copy.platform.desc}
        />

        <div className="reveal-stagger grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {copy.platform.pillars.map((pillar) => {
            const Icon = pillarIcons[pillar.icon as keyof typeof pillarIcons];

            return (
              <article
                className="rounded-panel border border-black/10 bg-white/85 p-7 shadow-panel md:p-8"
                key={pillar.title}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 text-brand-deep">
                  <Icon className="h-5 w-5" strokeWidth={1.8} />
                </div>

                <h3 className="mt-5 text-[1.55rem] tracking-[-0.025em] text-ink">
                  {pillar.title}
                </h3>

                <p className="mt-3 leading-7 text-muted">
                  {pillar.text}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default PlatformSection;
