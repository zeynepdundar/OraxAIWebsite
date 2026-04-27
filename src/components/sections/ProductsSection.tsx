import SectionHeading from '../SectionHeading';
import { productAccent, SiteCopy } from '../../content/siteContent';

type ProductsSectionProps = {
  copy: SiteCopy;
};

function ProductsSection({ copy }: ProductsSectionProps) {
  return (
    <section
      className="relative py-8 pb-[5.5rem]"
      id="products"
    >
      <div className="container">
        <SectionHeading
          eyebrow={copy.products.eyebrow}
          title={copy.products.title}
          description={copy.products.desc}
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {copy.products.items.map((item, index) => {
            const gradientClass =
              productAccent[index] === 'copper'
                ? 'from-orange-500 to-red-500'
                : productAccent[index] === 'teal'
                ? 'from-cyan-400 to-blue-500'
                : productAccent[index] === 'slate'
                ? 'from-slate-400 to-slate-600'
                : productAccent[index] === 'gold'
                ? 'from-yellow-400 to-orange-500'
                : 'from-stone-400 to-stone-600';

            const glowClass =
              productAccent[index] === 'copper'
                ? 'hover:shadow-[0_0_40px_rgba(249,115,22,0.25)]'
                : productAccent[index] === 'teal'
                ? 'hover:shadow-[0_0_40px_rgba(34,211,238,0.25)]'
                : productAccent[index] === 'slate'
                ? 'hover:shadow-[0_0_40px_rgba(148,163,184,0.25)]'
                : productAccent[index] === 'gold'
                ? 'hover:shadow-[0_0_40px_rgba(250,204,21,0.25)]'
                : 'hover:shadow-[0_0_40px_rgba(168,162,158,0.25)]';

            const blobPosition =
              index % 2 === 0
                ? '-right-8 -top-8'
                : '-left-8 -bottom-8';

            return (
              <article
                key={item.name}
                className={`group relative overflow-hidden rounded-[26px] border border-white/20 bg-gradient-to-br from-slate-900/95 to-slate-800/95 p-6 shadow-xl backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-white/30 ${glowClass}`}
              >
                {/* Glow blob */}
                <div
                  className={`absolute ${blobPosition} h-32 w-32 rounded-full bg-gradient-to-br ${gradientClass} opacity-10 blur-2xl transition-all duration-500 group-hover:opacity-20`}
                />

                {/* Tag */}
                <p className="relative text-[0.78rem] font-extrabold uppercase tracking-[0.12em] text-slate-300">
                  {item.tag}
                </p>

                {/* Title */}
                <h3
                  className={`relative mt-1 text-[1.55rem] tracking-[-0.04em] bg-gradient-to-r ${gradientClass} bg-clip-text font-bold text-transparent`}
                >
                  {item.name}
                </h3>

                {/* Description */}
                <p className="relative mt-3 leading-7 text-slate-100">
                  {item.text}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProductsSection;