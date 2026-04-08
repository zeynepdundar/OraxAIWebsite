import { MouseEvent } from 'react';
import { SiteCopy } from '../content/siteContent';

type PrivacyModalProps = {
  copy: SiteCopy;
  open: boolean;
  onClose: () => void;
};

function PrivacyModal({ copy, open, onClose }: PrivacyModalProps) {
  const handleBackdropClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={`fixed inset-0 z-30 grid place-items-center bg-[rgba(20,23,30,0.46)] p-4 transition-opacity ${
        open ? 'visible opacity-100' : 'invisible opacity-0'
      }`}
      role="dialog"
      aria-modal="true"
      aria-hidden={!open}
      aria-labelledby="privacy-title"
      onClick={handleBackdropClick}
    >
      <div className="w-full max-w-[720px] overflow-hidden rounded-[28px] bg-white shadow-modal">
        <div className="flex items-center justify-between gap-4 border-b border-black/10 px-6 py-5">
          <h2 id="privacy-title" className="text-xl font-display text-ink">
            {copy.privacy.title}
          </h2>
          <button type="button" className="border-0 bg-transparent text-[2rem] leading-none" onClick={onClose}>
            ×
          </button>
        </div>
        <div className="px-6 py-5">
          <p>
            <strong>{copy.privacy.effective}</strong>
          </p>
          <p className="mt-4 leading-7 text-muted">{copy.privacy.body}</p>
          <button
            type="button"
            className="mt-4 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-brand-deep to-brand px-5 py-3 font-bold text-white shadow-[0_14px_30px_rgba(15,93,97,0.22)] transition-transform hover:-translate-y-px"
            onClick={onClose}
          >
            {copy.privacy.close}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PrivacyModal;
