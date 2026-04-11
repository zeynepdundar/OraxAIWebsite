import { SiteCopy } from '../../content/siteContent';

type HeroSectionProps = {
  copy: SiteCopy;
};

type HeroProductCardProps = {
  copy: SiteCopy;
  imageClassName: string;
  overlayClassName: string;
  fetchPriority?: 'high' | 'low' | 'auto';
};

function HeroProductCard({
  copy,
  imageClassName,
  overlayClassName,
  fetchPriority = 'auto',
}: HeroProductCardProps) {
  const imageAlt = `${copy.hero.title2}: ${copy.hero.text}`;

  return (
    <div className="relative h-full w-full">
      <img
        src="/images/site/oraxa-pict.png"
        alt={imageAlt}
        className={imageClassName}
        fetchPriority={fetchPriority}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
      <div
        className={`absolute inset-0 flex flex-col justify-end text-white ${overlayClassName}`}
      >
        <p className="inline-flex w-fit items-center rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
          {copy.hero.title2}
        </p>

        <h2 className="mt-2 max-w-[14ch] text-[clamp(1.65rem,6vw,3.1rem)] tracking-[-0.045em] md:text-[clamp(2.1rem,4vw,3.1rem)]">
          {copy.hero.text}
        </h2>

        <div className="mt-4 flex flex-wrap gap-2 md:mt-5 md:gap-3">
          {copy.hero.features.map((feature) => (
            <span
              key={feature}
              className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs text-white backdrop-blur-sm md:px-4 md:py-2 md:text-sm"
            >
              {feature}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function HeroSection({ copy }: HeroSectionProps) {
  const heroBadges = copy.hero.badge.split('·').map((item) => item.trim());

  return (
    <section
      id="home"
      className="relative overflow-hidden pb-20 pt-24 md:pt-[6.75rem]"
    >
      <div className="pointer-events-none absolute -left-40 top-16 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(69,139,201,0.18),transparent_68%)] blur-[18px]" />
      <div className="pointer-events-none absolute -right-32 top-8 h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(31,79,120,0.14),transparent_68%)] blur-[18px]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-[linear-gradient(180deg,rgba(255,255,255,0.45),transparent)]" />

      <div className="container grid items-start gap-10 md:grid-cols-[1.18fr_1fr]">

        <div className="relative z-10 min-w-0 pr-2">
          <div className="mb-6 flex flex-wrap gap-x-4 gap-y-2">
            {heroBadges.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 text-[0.74rem] font-extrabold uppercase tracking-[0.09em] text-brand-deep/90"
              >
                <span className="h-2 w-2 rounded-full bg-gradient-to-br from-brand to-accent shadow-[0_0_0_4px_rgba(69,139,201,0.08)]" />
                {item}
              </span>
            ))}
          </div>

          <h1 className="text-[clamp(2.2rem,4.5vw,3.8rem)] leading-[1.05] tracking-[-0.03em]">
            <span className="block whitespace-nowrap">{copy.hero.title}</span>

            <span className="mt-1.5 block whitespace-nowrap bg-gradient-to-br from-brand via-sky-500 to-brand-deep bg-clip-text text-transparent">
              {copy.hero.highlight}
            </span>
          </h1>

          <p className="mt-4 max-w-[44rem] text-[1rem] leading-[1.65] text-muted md:text-[1.05rem]">
            {copy.hero.lead}
          </p>
          <div className="mt-6 space-y-2 text-[0.95rem] text-muted">
            {copy.hero.metrics.map((item) => (
              <div key={item} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a
              href="/demo"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-br from-brand-deep to-brand px-6 py-4 font-bold text-white shadow-[0_14px_30px_rgba(15,93,97,0.18)] transition-all hover:-translate-y-px hover:shadow-[0_18px_36px_rgba(15,93,97,0.24)]"
            >
              {copy.hero.primaryCta}
            </a>

            <a
              href="#products"
              className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/80 px-6 py-4 font-bold text-ink transition-all hover:-translate-y-px hover:border-brand/20 hover:bg-white"
            >
              {copy.hero.secondaryCta}
            </a>
          </div>

          {/* Mobile: show primary product visual (desktop keeps layered collage in second column) */}
          <figure className="relative z-10 mt-10 aspect-[4/5] w-full max-w-lg overflow-hidden rounded-2xl border border-gray-200 shadow-xl sm:aspect-[16/10] md:hidden">
            <HeroProductCard
              copy={copy}
              imageClassName="h-full w-full object-cover"
              overlayClassName="p-5 sm:p-6"
              fetchPriority="high"
            />
          </figure>
        </div>

        <div className="hidden md:flex justify-end">
          <div className="absolute right-0  w-[48vw]">
            <figure className="relative min-h-[520px] overflow-visible">
              <img
                src="/images/site/depo-koridor.jpg"
                alt=""
                loading="lazy"
                aria-hidden="true"
                className="absolute left-0 top-0 h-[70%] w-[70%] rotate-[-4deg] rounded-2xl border border-gray-200 object-cover shadow-md"
              />

              <div className="absolute bottom-0 right-0 z-10 h-[80%] w-[80%]">
                <HeroProductCard
                  copy={copy}
                  imageClassName="h-full w-full rounded-2xl border border-gray-200 object-cover shadow-xl"
                  overlayClassName="p-8"
                  fetchPriority="high"
                />
              </div>

            </figure>
          </div>
        </div>

      </div>
    </section>
  );
}

export default HeroSection;