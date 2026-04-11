import { FormEvent, useMemo, useState } from 'react';
import type { SiteCopy } from '../content/siteContent';

type DemoRequestPageProps = {
  copy: SiteCopy['demoRequest'];
};

type DemoFormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  module: string;
  timeWindow: string;
  note: string;
};

const initialFormState: DemoFormState = {
  name: '',
  company: '',
  email: '',
  phone: '',
  module: '',
  timeWindow: '',
  note: '',
};

function DemoRequestPage({ copy }: DemoRequestPageProps) {
  const [formState, setFormState] = useState<DemoFormState>(initialFormState);

  const mailtoLink = useMemo(() => {
    const { mailto: m } = copy;
    const subject = m.subject;
    const body = [
      m.bodyTitle,
      '',
      `${m.name}: ${formState.name || '-'}`,
      `${m.company}: ${formState.company || '-'}`,
      `${m.email}: ${formState.email || '-'}`,
      `${m.phone}: ${formState.phone || '-'}`,
      `${m.module}: ${formState.module || '-'}`,
      `${m.timeWindow}: ${formState.timeWindow || '-'}`,
      `${m.note}: ${formState.note || '-'}`,
    ].join('\n');

    return `mailto:info@oraxai.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [copy, formState]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.location.href = mailtoLink;
  };

  const handleChange = (field: keyof DemoFormState, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,rgba(69,139,201,0.08),transparent_28%),radial-gradient(circle_at_right_10%_top_16%,rgba(31,79,120,0.06),transparent_24%),linear-gradient(180deg,#f7f8f9_0%,#edf1f4_100%)]">
      <main className="container py-14 md:py-20">
        <a
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-4 py-2 text-sm font-semibold text-ink transition-all hover:-translate-y-px hover:border-brand/20 hover:bg-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 shrink-0"
            aria-hidden={true}
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          {copy.backHome}
        </a>

        <section className="mx-auto mt-8 max-w-3xl rounded-[28px] border border-white/70 bg-white/90 p-6 shadow-panel md:p-10">
          <h1 className="text-[clamp(1.8rem,3vw,2.5rem)] tracking-[-0.02em] text-ink">{copy.title}</h1>
          <p className="mt-4 text-[1.04rem] leading-7 text-muted">{copy.lead}</p>
          <p className="mt-3 max-w-4xl text-[0.98rem] leading-7 text-muted">{copy.description}</p>
          <p className="mt-3 text-sm text-muted">{copy.requiredNote}</p>

          <form className="mx-auto mt-8 grid max-w-2xl gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
            <label className="flex flex-col gap-2 text-sm font-medium text-ink">
              {copy.fields.name}
              <input
                type="text"
                value={formState.name}
                onChange={(event) => handleChange('name', event.target.value)}
                className="rounded-xl border border-black/10 bg-white px-4 py-3 text-base font-normal text-ink outline-none transition-colors focus:border-brand"
                required
              />
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium text-ink">
              {copy.fields.company}
              <input
                type="text"
                value={formState.company}
                onChange={(event) => handleChange('company', event.target.value)}
                className="rounded-xl border border-black/10 bg-white px-4 py-3 text-base font-normal text-ink outline-none transition-colors focus:border-brand"
                required
              />
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium text-ink">
              {copy.fields.email}
              <input
                type="email"
                value={formState.email}
                onChange={(event) => handleChange('email', event.target.value)}
                className="rounded-xl border border-black/10 bg-white px-4 py-3 text-base font-normal text-ink outline-none transition-colors focus:border-brand"
                required
              />
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium text-ink">
              {copy.fields.phone}
              <input
                type="tel"
                value={formState.phone}
                onChange={(event) => handleChange('phone', event.target.value)}
                className="rounded-xl border border-black/10 bg-white px-4 py-3 text-base font-normal text-ink outline-none transition-colors focus:border-brand"
              />
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium text-ink md:col-span-2">
              {copy.fields.module}
              <input
                type="text"
                value={formState.module}
                onChange={(event) => handleChange('module', event.target.value)}
                placeholder={copy.placeholders.module}
                className="rounded-xl border border-black/10 bg-white px-4 py-3 text-base font-normal text-ink outline-none transition-colors focus:border-brand"
                required
              />
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium text-ink md:col-span-2">
              {copy.fields.timeWindow}
              <input
                type="text"
                value={formState.timeWindow}
                onChange={(event) => handleChange('timeWindow', event.target.value)}
                placeholder={copy.placeholders.timeWindow}
                className="rounded-xl border border-black/10 bg-white px-4 py-3 text-base font-normal text-ink outline-none transition-colors focus:border-brand"
                required
              />
            </label>

            <label className="flex flex-col gap-2 text-sm font-medium text-ink md:col-span-2">
              {copy.fields.note}
              <textarea
                value={formState.note}
                onChange={(event) => handleChange('note', event.target.value)}
                rows={4}
                className="rounded-xl border border-black/10 bg-white px-4 py-3 text-base font-normal text-ink outline-none transition-colors focus:border-brand"
              />
            </label>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-br from-brand-deep to-brand px-7 py-4 font-bold text-white shadow-[0_14px_30px_rgba(15,93,97,0.18)] transition-all hover:-translate-y-px hover:shadow-[0_18px_36px_rgba(15,93,97,0.24)]"
              >
                {copy.submit}
              </button>
            </div>
          </form>
        </section>
      </main>
    </div>
  );
}

export default DemoRequestPage;
