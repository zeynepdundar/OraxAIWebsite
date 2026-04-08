import SectionHeading from '../SectionHeading';
import { productAccent, SiteCopy } from '../../content/siteContent';

type ProductsSectionProps = {
  copy: SiteCopy;
};

function ProductsSection({ copy }: ProductsSectionProps) {
  return (
    <section className="bg-[linear-gradient(180deg,rgba(232,236,240,0.32),rgba(232,236,240,0.18))] py-8 pb-[5.5rem]" id="products">
      <div className="container">
        <SectionHeading
          eyebrow={copy.products.eyebrow}
          title={copy.products.title}
          description={copy.products.desc}
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {copy.products.items.map((item, index) => {
            const accentClass =
              productAccent[index] === 'copper'
                ? 'text-accent'
                : productAccent[index] === 'teal'
                  ? 'text-brand-deep'
                  : productAccent[index] === 'slate'
                    ? 'text-slate-600'
                    : productAccent[index] === 'gold'
                      ? 'text-amber-700'
                      : 'text-stone-500';

            return (
              <article
                className="rounded-[26px] border border-white/80 bg-white/88 p-6 shadow-[0_18px_48px_rgba(28,39,51,0.08)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(28,39,51,0.12)]"
                key={item.name}
              >
                <p className={`text-[0.78rem] font-extrabold uppercase tracking-[0.12em] ${accentClass}`}>
                  {item.tag}
                </p>
                <h3 className={`mt-1 text-[1.55rem] tracking-[-0.04em] ${accentClass}`}>
                  {item.name}
                </h3>
                <p className="mt-3 leading-7 text-muted">{item.text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ProductsSection;
