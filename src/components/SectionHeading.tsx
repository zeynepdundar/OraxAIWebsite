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
      className={`mb-12 max-w-[720px] ${centered ? 'mx-auto text-center' : ''}`}
    >
      <p className="text-eyebrow font-semibold uppercase text-brand-deep">
        {eyebrow}
      </p>
      <h2 className="mt-3.5 font-display text-[clamp(2rem,4.6vw,2.5rem)] font-bold tracking-heading text-ink">
        {title}
      </h2>
      <p className="mt-4 max-w-measure text-body text-muted">
        {description}
      </p>
    </div>
  );
}

export default SectionHeading;
