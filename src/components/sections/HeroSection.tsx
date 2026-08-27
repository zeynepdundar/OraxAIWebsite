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
      className="relative -mt-[82px] flex min-h-[100svh] flex-col overflow-hidden bg-[#0a1a30] pb-10 pt-[110px] text-white"
    >
      {/* Full-bleed warehouse background */}
      <img
        src="/images/site/depo.jpeg"
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        className="absolute inset-0 z-0 h-full w-full object-cover object-center"
      />

      {/* Neutral dark overlays for readability */}
      <div className="absolute inset-0 z-[1] bg-[linear-gradient(90deg,rgba(8,23,46,0.94)_0%,rgba(10,20,35,0.62)_38%,rgba(10,20,35,0.14)_70%,transparent_100%)]" />

      <div className="absolute inset-0 z-[1] bg-[linear-gradient(180deg,rgba(8,23,46,0.5)_0%,transparent_32%,rgba(6,17,34,0.5)_100%)]" />

      {/* Hero content */}
      <div className="container relative z-10 flex flex-1 items-center">
        <div className="w-full max-w-2xl -translate-y-4 md:-translate-y-8">
          <div className="text-xs font-semibold leading-4 uppercase tracking-[0.08em] text-[#80b6d3]">
            {heroBadges[0]}
          </div>

          <h1 className="mt-4 break-words text-[3.25rem] leading-[3.6rem] md:text-[4.25rem] md:leading-[4.6rem]">  
            <span className="block">{copy.hero.title}</span>
            <span className="block bg-gradient-to-r from-brand-soft to-brand bg-clip-text text-transparent">
              {copy.hero.highlight}
            </span>
          </h1>
          <p className="mt-6 max-w-xl text-base font-normal leading-6 text-white">
            {copy.hero.lead}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={`/${lang}/demoRequest`}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-brand to-brand-deep px-7 py-3.5 text-[1rem] font-bold text-white shadow-[0_16px_40px_rgba(31,79,120,0.45)] transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_50px_rgba(31,79,120,0.55)]"
            >
              {copy.hero.primaryCta}
              <span className="transition-transform group-hover:translate-x-1">
                &rarr;
              </span>
            </a>

            <a
              href="#products"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-[1rem] font-bold text-white backdrop-blur transition-all hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/10"
            >
              {copy.hero.secondaryCta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;