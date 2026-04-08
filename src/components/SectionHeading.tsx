type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  centered?: boolean;
};

function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-10 max-w-[760px] ${centered ? 'mx-auto text-center' : ''}`}
    >
      <p className="text-[0.78rem] font-extrabold uppercase tracking-[0.12em] text-brand-deep">
        {eyebrow}
      </p>
      <h2 className="mt-1 text-[clamp(2rem,5vw,3.6rem)] font-display tracking-[-0.05em] text-ink">
        {title}
      </h2>
      <p className="mt-3 text-base leading-7 text-muted md:text-[1.02rem]">
        {description}
      </p>
    </div>
  );
}

export default SectionHeading;
