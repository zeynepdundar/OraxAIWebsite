import { SiteCopy } from '../../content/siteContent';

type HeroSectionProps = {
  copy: SiteCopy;
};

function HeroSection({ copy }: HeroSectionProps) {
  const heroBadges = copy.hero.badge.split('·').map((item) => item.trim());

  return (
    <section className="relative overflow-clip px-0 pb-20 pt-24 md:pt-[6.75rem]" id="home">
      <div className="pointer-events-none absolute -left-40 top-16 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(69,139,201,0.18),transparent_68%)] blur-[18px]" />
      <div className="pointer-events-none absolute -right-32 top-8 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(31,79,120,0.14),transparent_68%)] blur-[18px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(255,255,255,0.45),transparent)]" />

      <div className="container grid items-start gap-10 md:grid-cols-[minmax(0,1.18fr)_minmax(22rem,0.82fr)]">
        <div className="min-w-0 pr-2">
          <div className="mb-6 flex flex-wrap gap-x-4 gap-y-2">
            {heroBadges.map((item) => (
              <span
                className="inline-flex items-center gap-2 text-[0.74rem] font-extrabold uppercase tracking-[0.09em] text-brand-deep/90"
                key={item}
              >
                <span className="h-2 w-2 rounded-full bg-gradient-to-br from-brand to-accent shadow-[0_0_0_4px_rgba(69,139,201,0.08)]" />
                {item}
              </span>
            ))}
          </div>

          <h1 className="max-w-[10ch] text-[clamp(2.9rem,5.8vw,5.15rem)] leading-[0.94] tracking-[-0.055em] [text-wrap:balance] md:max-w-[10ch]">
            {copy.hero.title}
            <span className="block bg-gradient-to-br from-brand via-sky-500 to-brand-deep bg-clip-text text-transparent">
              {copy.hero.highlight}
            </span>
          </h1>

          <p className="mt-5 max-w-[42rem] text-[1.02rem] leading-8 text-muted md:text-[1.06rem]">
            {copy.hero.lead}
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-br from-brand-deep to-brand px-6 py-4 font-bold text-white shadow-[0_14px_30px_rgba(15,93,97,0.18)] transition-all hover:-translate-y-px hover:shadow-[0_18px_36px_rgba(15,93,97,0.24)]"
              href="#contact"
            >
              {copy.hero.primaryCta}
            </a>
            <a
              className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/80 px-6 py-4 font-bold text-ink transition-all hover:-translate-y-px hover:border-brand/20 hover:bg-white"
              href="#products"
            >
              {copy.hero.secondaryCta}
            </a>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            {copy.hero.metrics.map((metric) => (
              <span
                className="inline-flex items-center rounded-full border border-white/80 bg-white/85 px-4 py-3 text-sm text-ink/90 shadow-[0_8px_24px_rgba(28,39,51,0.06),inset_0_1px_0_rgba(255,255,255,0.8)]"
                key={metric}
              >
                {metric}
              </span>
            ))}
          </div>
        </div>

        <div className="relative z-[1] ml-0 grid w-full max-w-[36rem] justify-self-end">
          <div className="relative min-h-[520px] overflow-hidden rounded-[36px] border border-white/70 bg-white/80 shadow-[0_28px_80px_rgba(28,39,51,0.16)] ring-1 ring-black/5">
            <img
              className="absolute inset-0 h-full w-full object-cover"
              src="/images/site/depo-koridor.jpg"
              alt="Warehouse corridor with organized racks"
            />
            <div className="relative z-[1] flex min-h-[520px] flex-col justify-end bg-[linear-gradient(180deg,rgba(28,39,51,0.04)_0%,rgba(28,39,51,0.78)_78%),linear-gradient(135deg,rgba(69,139,201,0.08),rgba(31,79,120,0.24))] p-8 text-white">
              <p className="text-[0.76rem] font-extrabold uppercase tracking-[0.14em] text-white/80">
                AI Working Layer
              </p>
              <h2 className="mt-2 max-w-[11ch] text-[clamp(2.1rem,4vw,3.1rem)] tracking-[-0.055em]">
                Built for real warehouse flow
              </h2>
              <div className="mt-5 flex flex-wrap gap-3">
                {copy.hero.metrics.map((metric) => (
                  <span
                    className="inline-flex items-center rounded-full border border-white/20 bg-white/12 px-4 py-3 text-sm text-white backdrop-blur-[10px]"
                    key={metric}
                  >
                    {metric}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
