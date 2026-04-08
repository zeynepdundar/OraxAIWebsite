import SectionHeading from '../SectionHeading';
import { SiteCopy } from '../../content/siteContent';

type ContactSectionProps = {
  copy: SiteCopy;
};

function ContactSection({ copy }: ContactSectionProps) {
  return (
    <section className="pb-[4.5rem] pt-6" id="contact">
      <div className="container grid items-center gap-6 md:grid-cols-[1.1fr_0.9fr]">
        <SectionHeading
          eyebrow={copy.contact.eyebrow}
          title={copy.contact.title}
          description={copy.contact.desc}
        />
        <div className="rounded-panel border border-black/10 bg-[linear-gradient(135deg,rgba(69,139,201,0.06),rgba(31,79,120,0.03)),rgba(255,255,255,0.88)] p-8 shadow-panel">
          <p className="text-[0.78rem] font-extrabold uppercase tracking-[0.12em] text-brand-deep">
            {copy.contact.emailLabel}
          </p>
          <a
            className="mt-2 inline-block font-display text-[clamp(1.5rem,4vw,2.3rem)] font-extrabold tracking-[-0.05em] text-ink"
            href={`mailto:${copy.contact.email}`}
          >
            {copy.contact.email}
          </a>
          <p className="mt-3 text-base leading-7 text-muted">{copy.contact.note}</p>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
