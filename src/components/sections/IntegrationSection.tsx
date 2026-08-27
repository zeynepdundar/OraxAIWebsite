import SectionHeading from '../SectionHeading';
import { SiteCopy } from '../../content/siteContent';
import { ArrowRight, Database, Workflow } from 'lucide-react';

type IntegrationSectionProps = {
  copy: SiteCopy;
};

function IntegrationSection({ copy }: IntegrationSectionProps) {
  return (
    <section className="section-y relative" id="integration">
      <div className="reveal container">
        <SectionHeading
          eyebrow={copy.integration.eyebrow}
          title={copy.integration.title}
          description={copy.integration.desc}
        />

        <div className="mt-10 overflow-hidden rounded-[28px] border border-black/[0.08] bg-white shadow-[0_18px_54px_rgba(28,39,51,0.08)]">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            {/* Integration visual */}
            <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden bg-[linear-gradient(135deg,#0b1b30_0%,#102b49_55%,#163d61_100%)] p-8">
              {/* Background grid */}
              <div
                className="absolute inset-0 opacity-[0.12]"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(255,255,255,.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.35) 1px, transparent 1px)',
                  backgroundSize: '38px 38px',
                }}
              />

              {/* Glow */}
              <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand/20 blur-3xl" />

              <div className="relative flex w-full max-w-md items-center justify-center">
                {/* Center platform */}
                <div className="relative z-10 flex h-28 w-28 flex-col items-center justify-center rounded-[24px] border border-white/20 bg-white/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.25)] backdrop-blur-xl">
                  <Workflow className="h-8 w-8 text-white" />
                  <span className="mt-2 text-xs font-bold uppercase tracking-[0.12em] text-white/80">
                    ORAXAI
                  </span>
                </div>

                {/* Connection lines */}
                <div className="absolute left-1/2 top-1/2 h-px w-[42%] -translate-y-1/2 bg-gradient-to-r from-transparent via-white/30 to-white/50" />
                <div className="absolute left-1/2 top-1/2 h-[42%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-white/30 to-white/50" />

                {/* Ecosystem nodes */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 rounded-xl border border-white/15 bg-white/[0.08] px-4 py-3 text-xs font-bold text-white backdrop-blur-md">
                  ERP
                </div>

                <div className="absolute right-0 top-1/2 -translate-y-1/2 rounded-xl border border-white/15 bg-white/[0.08] px-4 py-3 text-xs font-bold text-white backdrop-blur-md">
                  MES
                </div>

                <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-xl border border-white/15 bg-white/[0.08] px-4 py-3 text-xs font-bold text-white backdrop-blur-md">
                  Enterprise
                </div>

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-xl border border-white/15 bg-white/[0.08] px-4 py-3 text-xs font-bold text-white backdrop-blur-md">
                  Custom systems
                </div>
              </div>
            </div>

            {/* Integration content */}
            <div className="p-8 md:p-10">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand/10 text-brand-deep">
                  <Database className="h-5 w-5" />
                </div>

                <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-deep">
                  {copy.integration.sublabel}
                </p>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {copy.integration.chips.map((chip) => (
                  <div
                    key={chip}
                    className="group flex items-center justify-between rounded-xl border border-black/[0.07] bg-slate-50/80 px-4 py-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-brand/20 hover:bg-white hover:shadow-[0_8px_24px_rgba(28,39,51,0.07)]"
                  >
                    <span className="text-sm font-semibold text-ink">
                      {chip}
                    </span>

                    <ArrowRight className="h-4 w-4 text-muted/50 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-brand" />
                  </div>
                ))}
              </div>

              <div className="mt-8 border-t border-black/[0.07] pt-6">
                <p className="max-w-2xl text-base leading-7 text-muted">
                  {copy.integration.note}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default IntegrationSection;