import { ArrowLeft, ArrowRight, CheckCircle2, Network } from 'lucide-react';
import type { Language } from '../content/siteContent';
import type { ProductPageCopy, ProductSlug } from '../content/productContent';

type Props = { copy: ProductPageCopy; language: Language; slug: ProductSlug };

const accents: Record<ProductSlug, string> = {
  wms: 'from-orange-500 to-red-500', tms: 'from-cyan-400 to-blue-500',
  lms: 'from-slate-400 to-slate-600', tts: 'from-yellow-400 to-orange-500',
  qms: 'from-fuchsia-500 to-rose-500',
};

const productLogos: Partial<Record<ProductSlug, string>> = {
  wms: '/images/logos/wms.png',
  tms: '/images/logos/tms.png',
  lms: '/images/logos/lms.png',
  tts: '/images/logos/tts.png',
  qms: '/images/logos/qms.png',
};

const wmsDetail = {
  tr: {
    eyebrow: 'Uçtan uca depo yönetimi',
    title: 'Sahadaki her hareket, tek operasyon modelinde',
    intro: 'OraxAI WMS; yalnızca stok miktarını göstermez. Fiziksel hareketi, iş emrini, kullanıcıyı, ekipmanı ve kalite durumunu aynı işlem zincirinde birleştirir.',
    areas: [
      { num: '01', title: 'Mal kabul ve giriş kalite', text: 'Satın alma veya transfer siparişini doğrulayın; lot, seri, SKT, sıcaklık ve kalite statüsünü kabul anında kaydedin.', bullets: ['ASN ve sipariş doğrulama', 'Etiketleme ve barkodlama', 'Karantina ve kalite statüsü'] },
      { num: '02', title: 'Yerleştirme ve ikmal', text: 'Ürün özellikleri, lokasyon kapasitesi ve toplama ihtiyacına göre uygun adres önerileri üretin.', bullets: ['Kural bazlı adresleme', 'Kapasite ve doluluk kontrolü', 'Min–maks ikmal görevleri'] },
      { num: '03', title: 'Sipariş ve toplama', text: 'Dalga, öncelik ve teslimat penceresine göre işleri planlayın; her adımı sahada doğrulayın.', bullets: ['Dalga ve görev planlama', 'FIFO · FEFO · lot kuralları', 'Eksik ve istisna yönetimi'] },
      { num: '04', title: 'Paketleme ve sevkiyat', text: 'Toplanan ürünleri kontrol edin, taşıma birimlerini oluşturun ve sevkiyat doğruluğunu artırın.', bullets: ['Paket ve palet birleştirme', 'Yükleme sırası ve kapı yönetimi', 'TMS ve ERP aktarımı'] },
    ],
    twinLabel: '3D dijital ikiz',
    twinTitle: 'Deponuzu veriden değil, sahadan bakar gibi görün',
    twinText: 'Lokasyonları, paletleri ve doluluk durumunu görsel depo modeli üzerinde inceleyin. Operasyon ekibi bir ürünün nerede olduğunu görürken yönetim darboğazları ve kullanılmayan kapasiteyi daha kolay değerlendirebilir.',
    twinPoints: ['Koridor, raf ve hücre düzeyinde görünüm', 'Palet ve ürün detayına görsel erişim', 'Doluluk, blokaj ve durum katmanları', 'Operasyon hareketleriyle güncellenen model'],
    aiLabel: 'AI operasyon katmanı',
    aiTitle: 'Kararı destekleyen, operatörü yönlendiren zeka',
    aiText: 'Yerleşik AI katmanı; depo verisini anlaşılır hale getirmek, istisnaları öne çıkarmak ve saha ekiplerinin doğru aksiyona daha hızlı ulaşmasını desteklemek için tasarlanır.',
    aiPoints: ['Doğal dille stok ve hareket sorguları', 'Yerleştirme ve ikmal önerileri', 'Anomali ve gecikme sinyalleri', 'Operasyon özeti ve karar desteği'],
    traceTitle: 'Regüle operasyonlar için izlenebilirlik',
    traceText: 'Lot, seri, son kullanma tarihi, kalite statüsü ve kullanıcı hareketlerini tek denetim izi üzerinde tutun. Yetkilendirme, elektronik kayıt disiplini ve kontrollü iş akışları proje ihtiyaçlarına göre yapılandırılır.',
    traceItems: ['Lot ve seri soy ağacı', 'Karantina · serbest · bloke statüleri', 'Kullanıcı ve zaman damgalı hareket geçmişi', 'Geri çağırma ve etki analizi desteği'],
  },
  en: {
    eyebrow: 'End-to-end warehouse management', title: 'Every floor movement in one operational model',
    intro: 'OraxAI WMS goes beyond stock balances. It connects physical movement, work orders, users, equipment, and quality status in one transaction chain.',
    areas: [
      { num: '01', title: 'Receiving and inbound quality', text: 'Verify purchase or transfer orders and capture lot, serial, expiry, temperature, and quality status at receipt.', bullets: ['ASN and order verification', 'Labelling and barcoding', 'Quarantine and quality status'] },
      { num: '02', title: 'Putaway and replenishment', text: 'Recommend suitable locations based on product attributes, capacity, and picking demand.', bullets: ['Rule-based location selection', 'Capacity and occupancy control', 'Min–max replenishment tasks'] },
      { num: '03', title: 'Order and picking', text: 'Plan work by wave, priority, and delivery window, with floor-level verification at each step.', bullets: ['Wave and task planning', 'FIFO · FEFO · lot rules', 'Shortage and exception handling'] },
      { num: '04', title: 'Packing and dispatch', text: 'Verify picked goods, build handling units, and improve dispatch accuracy.', bullets: ['Package and pallet consolidation', 'Loading sequence and dock management', 'TMS and ERP handoff'] },
    ],
    twinLabel: '3D digital twin', twinTitle: 'See your warehouse as if you were on the floor', twinText: 'Explore locations, pallets, and occupancy on a visual warehouse model. Operations can find inventory while management assesses bottlenecks and unused capacity.', twinPoints: ['Aisle, rack, and bin-level views', 'Visual access to pallet and item detail', 'Occupancy, blockage, and status layers', 'A model updated by operational movements'],
    aiLabel: 'AI operations layer', aiTitle: 'Intelligence that supports decisions and guides operators', aiText: 'The built-in AI layer makes warehouse data easier to use, surfaces exceptions, and helps floor teams reach the right action faster.', aiPoints: ['Natural-language inventory and movement queries', 'Putaway and replenishment suggestions', 'Anomaly and delay signals', 'Operational summaries and decision support'],
    traceTitle: 'Traceability for regulated operations', traceText: 'Keep lot, serial, expiry, quality status, and user actions on one audit trail. Authorization, electronic records, and controlled workflows can be configured to project requirements.', traceItems: ['Lot and serial genealogy', 'Quarantine · released · blocked statuses', 'User- and time-stamped movement history', 'Recall and impact-analysis support'],
  },
};

const assuranceContent = {
  tr: {
    eyebrow: 'Validasyon ve uyumluluk yetkinliği',
    title: 'Güvenilir, denetlenebilir ve bütünlüğü korunan süreçler',
    intro: 'OraxAI ürün ailesi; validasyon, Denetim İzi (Audit Trail) ve Veri Bütünlüğü (Data Integrity) gereksinimleri gözetilerek geliştirilir. Regüle operasyonlarda sistemin amaçlanan kullanıma uygunluğu, kayıtların güvenilirliği ve değişikliklerin izlenebilirliği desteklenir.',
    items: [
      { title: 'Yazılım validasyonu', text: 'Risk temelli validasyon yaklaşımı; gereksinim, test, izlenebilirlik ve kontrollü değişiklik yaşam döngüsünü destekler.' },
      { title: 'Denetim İzi (Audit Trail)', text: 'Kritik işlemler ve veri değişiklikleri; kullanıcı, zaman, eski-yeni değer ve işlem bağlamıyla izlenebilir biçimde kaydedilir.' },
      { title: 'Veri Bütünlüğü (Data Integrity)', text: 'Kayıtların doğru, eksiksiz, tutarlı ve erişilebilir kalmasını destekleyen kontroller ALCOA+ ilkeleri doğrultusunda ele alınır.' },
    ],
    standards: 'FDA 21 CFR Part 11 · EU GMP Annex 11 · GAMP 5 · ALCOA+',
    note: 'Validasyon kapsamı, dokümantasyon paketi ve teknik kontroller; ürün, kullanım senaryosu ve kurumun kalite sistemi doğrultusunda proje bazında netleştirilir.',
  },
  en: {
    eyebrow: 'Validation and compliance expertise',
    title: 'Reliable, auditable processes with protected data integrity',
    intro: 'The OraxAI product family is developed with software validation, Audit Trail, and Data Integrity requirements in mind. It supports fitness for intended use, trustworthy records, and traceable changes in regulated operations.',
    items: [
      { title: 'Software validation', text: 'A risk-based validation approach supports the requirements, testing, traceability, and controlled-change lifecycle.' },
      { title: 'Audit Trail', text: 'Critical actions and data changes are recorded with user, timestamp, old and new values, and transaction context.' },
      { title: 'Data Integrity', text: 'Controls designed to keep records accurate, complete, consistent, and available are addressed in line with ALCOA+ principles.' },
    ],
    standards: 'FDA 21 CFR Part 11 · EU GMP Annex 11 · GAMP 5 · ALCOA+',
    note: 'Validation scope, documentation packages, and technical controls are defined per project according to the product, intended use, and the organization’s quality system.',
  },
};

function ProductPage({ copy, language, slug }: Props) {
  const accent = accents[slug];
  const productLogo = productLogos[slug];
  return (
    <main>
      <section className="relative overflow-hidden bg-slate-950 py-20 text-white md:py-28">
        <div className={`absolute -right-24 -top-24 h-96 w-96 rounded-full bg-gradient-to-br ${accent} opacity-20 blur-3xl`} />
        <div className="container relative">
          <a href={`/${language}#products`} className="inline-flex items-center gap-2 text-sm font-semibold text-slate-300 transition hover:text-white"><ArrowLeft className="h-4 w-4" />{copy.back}</a>
          <div className="mt-12 max-w-4xl">
            {productLogo ? (
              <div className="inline-flex rounded-xl bg-white px-4 py-3 shadow-[0_16px_42px_rgba(0,0,0,0.24)]">
                <img src={productLogo} alt={`OraxAI ${copy.name}`} className="h-auto w-[min(72vw,370px)] object-contain" />
              </div>
            ) : (
              <div className="flex items-center gap-4"><span className={`bg-gradient-to-r ${accent} bg-clip-text text-5xl font-black tracking-[-0.06em] text-transparent md:text-7xl`}>{copy.name}</span><span className="h-8 w-px bg-white/20" /><span className="max-w-[14rem] text-sm font-bold uppercase tracking-[0.13em] text-slate-300">{copy.label}</span></div>
            )}
            <h1 className="mt-8 text-[clamp(2.3rem,5vw,4.8rem)] font-bold leading-[1.02] tracking-[-0.05em]">{copy.title}</h1>
            <p className="mt-7 max-w-3xl text-xl leading-8 text-slate-200">{copy.lead}</p>
            <p className="mt-4 max-w-3xl leading-7 text-slate-400">{copy.description}</p>
            <a href={`/${language}/demoRequest`} className="mt-9 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 font-bold text-slate-950 transition hover:-translate-y-0.5">{copy.demo}<ArrowRight className="h-4 w-4" /></a>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-brand">{copy.name}</p>
          <h2 className="mt-3 text-4xl font-bold tracking-[-0.04em] text-slate-900 md:text-5xl">{copy.capabilitiesTitle}</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {copy.capabilities.map((item) => <article key={item.title} className="rounded-[24px] border border-slate-200 bg-white p-7 shadow-[0_18px_50px_rgba(15,23,42,0.06)]"><CheckCircle2 className="h-6 w-6 text-brand" /><h3 className="mt-5 text-xl font-bold text-slate-900">{item.title}</h3><p className="mt-3 leading-7 text-slate-600">{item.text}</p></article>)}
          </div>
        </div>
      </section>

      {slug === 'wms' && (() => {
        const detail = wmsDetail[language];
        return <>
          <section className="border-y border-slate-200 bg-white py-20 md:py-28">
            <div className="container">
              <p className="text-sm font-extrabold uppercase tracking-[0.14em] text-orange-600">{detail.eyebrow}</p>
              <h2 className="mt-3 max-w-3xl text-4xl font-bold tracking-[-0.04em] text-slate-900 md:text-5xl">{detail.title}</h2>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">{detail.intro}</p>
              <div className="mt-12 grid gap-6 md:grid-cols-2">
                {detail.areas.map((area) => <article key={area.num} className="rounded-[28px] border border-slate-200 bg-slate-50 p-7 md:p-8"><span className="text-sm font-black text-orange-600">{area.num}</span><h3 className="mt-4 text-2xl font-bold tracking-[-0.02em] text-slate-900">{area.title}</h3><p className="mt-3 leading-7 text-slate-600">{area.text}</p><ul className="mt-6 space-y-3">{area.bullets.map((bullet) => <li key={bullet} className="flex items-start gap-3 text-sm font-semibold text-slate-700"><CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-orange-500" />{bullet}</li>)}</ul></article>)}
              </div>
            </div>
          </section>

          <section className="bg-slate-950 py-20 text-white md:py-28"><div className="container grid gap-6 lg:grid-cols-2">
            {[{ label: detail.twinLabel, title: detail.twinTitle, text: detail.twinText, points: detail.twinPoints }, { label: detail.aiLabel, title: detail.aiTitle, text: detail.aiText, points: detail.aiPoints }].map((block, index) => <article key={block.label} className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.05] p-8 md:p-10"><div className={`absolute -right-16 -top-16 h-52 w-52 rounded-full ${index ? 'bg-cyan-400' : 'bg-orange-500'} opacity-10 blur-3xl`} /><p className="relative text-sm font-extrabold uppercase tracking-[0.14em] text-slate-400">{block.label}</p><h2 className="relative mt-4 text-3xl font-bold tracking-[-0.04em]">{block.title}</h2><p className="relative mt-5 leading-7 text-slate-300">{block.text}</p><ul className="relative mt-7 space-y-3">{block.points.map((point) => <li key={point} className="flex gap-3 text-sm font-semibold text-slate-200"><CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-400" />{point}</li>)}</ul></article>)}
          </div></section>

          <section className="py-20 md:py-28"><div className="container grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]"><div><p className="text-sm font-extrabold uppercase tracking-[0.14em] text-brand">WMS · TTS · QMS</p><h2 className="mt-3 text-4xl font-bold tracking-[-0.04em] text-slate-900 md:text-5xl">{detail.traceTitle}</h2><p className="mt-6 text-lg leading-8 text-slate-600">{detail.traceText}</p></div><div className="rounded-[28px] bg-slate-100 p-7 md:p-9"><ul className="space-y-5">{detail.traceItems.map((item) => <li key={item} className="flex items-center gap-4 font-bold text-slate-800"><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-brand shadow-sm"><CheckCircle2 className="h-5 w-5" /></span>{item}</li>)}</ul></div></div></section>
        </>;
      })()}

      {(() => {
        const assurance = assuranceContent[language];
        return <section className="border-y border-slate-200 bg-white py-20 md:py-28"><div className="container">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div><p className="text-sm font-extrabold uppercase tracking-[0.14em] text-brand">{assurance.eyebrow}</p><h2 className="mt-3 text-4xl font-bold tracking-[-0.04em] text-slate-900 md:text-5xl">{assurance.title}</h2><p className="mt-6 text-lg leading-8 text-slate-600">{assurance.intro}</p><div className="mt-7 inline-flex rounded-full border border-brand/20 bg-brand/5 px-5 py-2.5 text-sm font-extrabold text-brand">{assurance.standards}</div></div>
            <div className="space-y-4">{assurance.items.map((item, index) => <article key={item.title} className="flex gap-5 rounded-[24px] border border-slate-200 bg-slate-50 p-6"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-900 text-sm font-black text-white">0{index + 1}</span><div><h3 className="text-xl font-bold text-slate-900">{item.title}</h3><p className="mt-2 leading-7 text-slate-600">{item.text}</p></div></article>)}</div>
          </div>
          <p className="mt-10 rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm leading-6 text-amber-950">{assurance.note}</p>
        </div></section>;
      })()}

      <section className="bg-slate-100 py-20 md:py-24"><div className="container"><h2 className="max-w-2xl text-4xl font-bold tracking-[-0.04em] text-slate-900">{copy.flowTitle}</h2><div className="mt-10 grid gap-5 md:grid-cols-3">{copy.flow.map((item, i) => <div key={item.title} className="relative rounded-[24px] bg-white p-7"><span className={`bg-gradient-to-r ${accent} bg-clip-text text-sm font-black text-transparent`}>0{i + 1}</span><h3 className="mt-4 text-xl font-bold">{item.title}</h3><p className="mt-3 leading-7 text-slate-600">{item.text}</p></div>)}</div></div></section>

      <section className="py-20 md:py-28"><div className="container"><div className="relative overflow-hidden rounded-[32px] bg-slate-900 p-8 text-white md:p-14"><div className={`absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-gradient-to-br ${accent} opacity-20 blur-3xl`} /><Network className="h-9 w-9 text-slate-300" /><h2 className="relative mt-6 text-3xl font-bold tracking-[-0.04em] md:text-4xl">{copy.platformTitle}</h2><p className="relative mt-5 max-w-3xl text-lg leading-8 text-slate-300">{copy.platformText}</p><a href={`/${language}/demoRequest`} className="relative mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-bold text-slate-950">{copy.demo}<ArrowRight className="h-4 w-4" /></a></div></div></section>
    </main>
  );
}

export default ProductPage;
