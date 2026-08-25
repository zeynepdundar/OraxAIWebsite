import { useParams } from 'react-router-dom';
import { SiteCopy } from '../../content/siteContent';

type HeroSectionProps = {
  copy: SiteCopy;
};

function HeroSection({ copy }: HeroSectionProps) {
  const heroBadges = copy.hero.badge.split('·').map((item) => item.trim());
  const { lang } = useParams();

  return (
    <section
      id="home"
      className="relative -mt-[82px] flex min-h-[100svh] flex-col justify-end overflow-hidden bg-[#0a1a30] pb-10 pt-[110px] text-white"
    >
      {/* Full-bleed cinematic warehouse background */}
      <img
        src="/images/site/oraxa-pict.png"
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        className="absolute inset-0 z-0 h-full w-full object-cover object-center"
      />
      {/* Modern navy/blue cinematic scrims — dark on the left for text, warehouse stays visible on the right */}
      <div className="absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(8,23,46,0.92)_0%,rgba(11,32,61,0.6)_38%,rgba(11,32,61,0.14)_70%,transparent_100%)]" />
      <div className="absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(8,23,46,0.5)_0%,transparent_32%,rgba(6,17,34,0.62)_100%)]" />
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(115%_85%_at_8%_95%,rgba(37,99,175,0.55),transparent_55%)]" />
      <div className="absolute inset-0 z-[1] bg-[radial-gradient(90%_70%_at_95%_10%,rgba(69,139,201,0.28),transparent_60%)]" />

      <div className="container relative z-10 pb-10 md:pb-16">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.16em] text-white/90 backdrop-blur">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand/80" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
            </span>
            {heroBadges[0]}
          </span>

          <h1 className="mt-6 text-[clamp(2rem,4.4vw,3.5rem)] font-extrabold leading-[1.06] tracking-[-0.03em]">
            <span className="block">{copy.hero.title}</span>
            <span className="block bg-gradient-to-r from-white via-brand-soft to-brand bg-clip-text text-transparent">
              {copy.hero.highlight}
            </span>
          </h1>

          <p className="mt-5 max-w-2xl text-[0.98rem] leading-[1.65] text-white/75 md:text-[1.08rem]">
            {copy.hero.lead}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={`/${lang}/demoRequest`}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-brand to-brand-deep px-7 py-3.5 text-[1rem] font-bold text-white shadow-[0_16px_40px_rgba(31,79,120,0.45)] transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_50px_rgba(31,79,120,0.55)]"
            >
              {copy.hero.primaryCta}
              <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
            </a>
            <a
              href="#products"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-[1rem] font-bold text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/10"
            >
              {copy.hero.secondaryCta}
            </a>
          </div>
        </div>

        {/* Module strip */}
        <div className="mt-10 border-t border-white/15 pt-5 md:mt-14">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <span className="text-[0.66rem] font-bold uppercase tracking-[0.2em] text-white/50">
              {heroBadges[1] ?? copy.hero.title2}
            </span>
            <div className="flex flex-wrap gap-x-5 gap-y-1.5 text-[0.85rem] font-semibold text-white/80">
              {copy.hero.metrics.map((item) => (
                <span key={item} className="inline-flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-brand" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
