export type Language = 'tr' | 'en';

export type ProductItem = {
  tag: string;
  name: string;
  text: string;
};

export type PillarItem = {
  num: string;
  title: string;
  text: string;
};

export type SiteCopy = {
  metaTitle: string;
  metaDescription: string;
  demoMetaTitle: string;
  demoMetaDescription: string;
  brandAria: string;
  nav: {
    home: string;
    products: string;
    platform: string;
    integration: string;
    compliance: string;
    contact: string;
    demo: string;
  };
  langLabel: string;
  hero: {
    badge: string;
    title: string;
    highlight: string;
    lead: string;
    primaryCta: string;
    secondaryCta: string;
    metrics: string[];
    features: string[];
    title2:string;
    text:string
  };
  showcaseTitle: string;
  showcaseText: string;
  compliance: {
    label: string;
    intro: string;
    chips: string[];
  };
  products: {
    eyebrow: string;
    title: string;
    desc: string;
    items: ProductItem[];
  };
  platform: {
    eyebrow: string;
    title: string;
    desc: string;
    pillars: PillarItem[];
  };
  integration: {
    eyebrow: string;
    title: string;
    desc: string;
    lead: string;
    sublabel: string;
    chips: string[];
    note: string;
  };
  spotlight: {
    eyebrow: string;
    title: string;
    text: string;
    bullets: string[];
    cta: string;
    action: string
  };
  contact: {
    eyebrow: string;
    title: string;
    desc: string;
    emailLabel: string;
    email: string;
    note: string;
  };
  footer: {
    text: string;
    privacy: string;
    copyright: string;
  };
  privacy: {
    title: string;
    effective: string;
    body: string;
    close: string;
  };
  demoRequest: {
    backHome: string;
    title: string;
    lead: string;
    description: string;
    requiredNote: string;
    fields: {
      name: string;
      company: string;
      email: string;
      phone: string;
      module: string;
      timeWindow: string;
      note: string;
    };
    placeholders: {
      module: string;
      timeWindow: string;
    };
    submit: string;
    mailto: {
      subject: string;
      bodyTitle: string;
      name: string;
      company: string;
      email: string;
      phone: string;
      module: string;
      timeWindow: string;
      note: string;
    };
  };
};

export const productAccent = ['copper', 'teal', 'slate', 'gold', 'berry'] as const;

export const siteContent: Record<Language, SiteCopy> = {
  tr: {
    metaTitle:
      'OraxAI - AI tabanli kurumsal operasyon platformu | WMS, TMS, LMS, TTS, QMS',
    metaDescription:
      'OraxAI: yapay zeka destekli kurumsal operasyon platformu. WMS, TMS, LMS, TTS ve QMS ile depo, sevkiyat, eğitim, izlenebilirlik ve kaliteyi tek veri modelinde birleştirin. SAP, Oracle ve Dynamics entegrasyonu; regüle sektörlere uygun tasarım.',
    demoMetaTitle: 'Ücretsiz demo talebi | OraxAI',
    demoMetaDescription:
      'OraxAI WMS, TMS, LMS, TTS ve QMS için demo talep edin. Ekibimiz ihtiyacınıza göre canlı veya kayıtlı oturum planlar; modül ve zaman penceresine göre dönüş yapar.',
    brandAria: 'OraxAI ana sayfa',
    nav: {
      home: 'Ana Sayfa',
      products: 'Ürünler',
      platform: 'Platform',
      integration: 'Entegrasyon',
      compliance: 'Uyumluluk',
      contact: 'İletişim',
      demo: 'Ücretsiz Demo',
    },
    langLabel: 'Dil secimi',
    hero: {
      badge:
        'AI tabanlı operasyon platformu · Çok modüllü kurumsal yazılım · İlaç ve regülasyon sektörü deneyimi',
      title: 'Yapay zeka destekli',
      highlight: 'operasyon platformu',
      lead:
        'OraxAI; depo operasyonları, stok, lokasyon, palet hareketleri ve izlenebilirlik süreçlerini tek veri yapısını ve karar desteğiyle yönetmeniz için tasarlanmış kurumsal bir çalışma platformudur.',
      primaryCta: 'Ücretsiz demo alın',
      secondaryCta: 'Ürünleri inceleyin',
      metrics: [
        'WMS · TMS · LMS · TTS · QMS',
        'Entegre modüller',
        'Yerleşik AI & LLM',
        'Kurumsal ölçek'
      ],
      features:[
        'Stok ve lokasyon yönetimi',
        'Palet ve lot izlenebilirliği',
        'AI destekli operasyon akışları',
      ],
      title2: "Yapay Zeka Destekli Depo",
      text:"Gerçek Operasyonlar için Üretildi"
    },
    showcaseTitle: 'Tek ürün değil, tek operasyon dilinde',
    showcaseText:
      'Depodan kaliteye, egitimden sevkiyata kadar ayni veri sozluguyle calisan moduller. Kopuk entegrasyonlar yerine tasarim geregi birlikte calisan bir ekosistem.',
    compliance: {
      label: 'Regulasyon ve kurumsal disiplin',
      intro:
        'Modul bazında FDA, TITCK, EU GMP/GDP, Annex 11, GAMP 5 ve ALCOA+ gibi cercevelere uyum yaklasimi urun ekipleriyle netlestirilir. Teknik mimari ve validasyon paketi talep uzerine paylasilir.',
      chips: [
        'Çok modüllü platform',
        'Denetlenebilir kayıt disiplini',
        'İlaç ve regüle sektör odağı',
        'SAP · Oracle · ERP ekosistemi',
      ],
    },
    products: {
      eyebrow: 'Ürün ailesi',
      title: 'OraxAI modulleri',
      desc:
        'Yapay zeka modüllerimiz burada yüksek seviyede sunulur; her biri kendi ürün sayfasında teknik detaylarıyla ele alınır.', items: [
          {
            tag: 'Depo ve stok',
            name: 'WMS',
            text: '3D dijital ikiz, palet düzeyi izleme, AI destekli operasyon ve regülasyon süreçleri için geliştirilmiş depo yönetimi.',
          },
          {
            tag: 'Taşıma',
            name: 'TMS',
            text: 'Rota, kapasite, sevkiyat ve saha performansını ERP ile uyumlu biçimde yönetmek için tasarlanmış taşıma katmanı.',
          },
          {
            tag: 'Öğrenme',
            name: 'LMS',
            text: 'Prosedür, onboarding ve yetkinlik izini operasyon ve kalite akışlarını birleştiren eğitim platformu.',
          },
          {
            tag: 'İzlenebilirlik',
            name: 'TTS',
            text: 'İlaç takip, seri ve lot düzeyinde geriye dönük görünürlük sağlayan track and trace  modülü.',
          },
          {
            tag: 'Kalite',
            name: 'QMS',
            text: 'Sapma, CAPA, doküman ve denetim süreçlerini operasyon verileriyle bağlayan kalite yönetim katmanı.',
          },
        ],
    },
    platform: {
      eyebrow: 'Platform yaklaşımı',
      title: 'Hepsi entegre: tek sözlük, tek gerçeklik',
      desc:
        'OraxAI\'ı ayıran şey yalnızca özellik listesi değil; modüller arası sürekliliktir. Depodaki lot bilgisi, taşımadaki durum ve kalitedeki sapma aynı operasyon grafiğinde buluşur.',
      pillars: [
        {
          num: '01',
          title: 'Ortak platform çekirdeği',
          text: 'Kimlik, yetki, denetim izi ve AI servisleri modüller arasında paylaşılır.',
        },
        {
          num: '02',
          title: 'AI operasyon katmanı',
          text: 'Karar desteği ve LLM etkileşimi depo ile sınırlı değildir; tüm platforma yayılır.',
        },
        {
          num: '03',
          title: 'Kurumsal entegrasyon',
          text: 'SAP, Oracle, Dynamics ve yerel ERPlerle kontrollu veri sözleşmeleri üzerinden ilerler.',
        },
        {
          num: '04',
          title: 'Regulasyon bilinci',
          text: 'Özellikle ilac ve sağlık süreçlerinde Part 11, Annex 11 ve ALCOA+ disipliniyle tasarlanır.',
        },
      ],
    },
    integration: {
      eyebrow: 'Bağlantı',
      title: 'Kurumsal entegrasyon',
      desc:
        'OraxAI modülleri; ERP, MES ve kurumsal gözlem yığınınızla birlikte çalışacak şekilde kurgulanır. Veri ve süreç bütünlüğü korunur.',
      lead:
        'Üretim ve finans verisi ERPde kalırken saha, lojistik, kalite ve eğitim katmanları platform üzerinden yönetilir. REST/API ve kurumsal kimlik ile SAP, Oracle, Logo, Microsoft Dynamics ve özel sistemlere kontrollü entegrasyon. Hangi modüllerin hangi sırayla açılacağı yüksek seviye yol haritası olarak birlikte planlanır.',
      sublabel: 'Uyumlu olduğumuz bazı platformlar',
      chips: [
        'SAP (ECC, S/4HANA)',
        'Oracle ERP',
        'Logo, Netsis, Mikro',
        'Microsoft Dynamics',
        'Nebim V3, ETA, IAS (Canias)',
        'Uyumsoft, Unity, Tiger',
      ],
      note:
        'Özel geliştirilmiş yazılımlar ve sektörel sistemlerle entegrasyon ihtiyaçları proje kapsamında değerlendirilir.',
    },
    spotlight: {
      eyebrow: 'Öne çıkan modül',
      title: 'WMS ile depoda derin görünürlük',
      text:
        'Depo yönetimi birçok müşteri için giriş kapısı olmaya devam ediyor. 3D ikiz, palet düzeyi detay ve AI destekli saha karar mekanizmalarıyla platformun en olgun yüzeylerinden biri.',
      bullets: [
        'Street View benzeri 3D depo deneyimi',
        'Yerleşik LLM ve kurumsal AI genişlemesi',
        'FDA · TİTCK · EU GMP/GDP odaklı doğrulanabilir tasarım',
      ],
      cta: 'WMSi inceleyin',
      action: "Demo ve ekran kayıtları ile WMS deneyimi canlı olarak gösterilebilir."
    },
    contact: {
      eyebrow: 'İletişim',
      title: 'Ekibimizle bağlantı kurun',
      desc:
        'Demo, teknik dokumantasyon veya modul bazlı yol haritasi için bize ulaşın.',
      emailLabel: 'E-posta',
      email: 'info@oraxai.com',
      note:
        'Teknik mimari ve validasyon dokumantasyonu talep üzerine paylaşılır.',
    },
    footer: {
      text:
        'OraxAI, yapay zeka destekli kurumsal operasyon platformudur: WMS, TMS, LMS, TTS ve QMS modulleriyle depodan kaliteye entegre cozumler sunar.',
      privacy: 'Gizlilik politikası',
      copyright:
        '© 2026 ORAXAI YAZILIM VE TEKNOLOJI LIMITED SIRKETI. Tüm hakları saklıdır.',
    },
    privacy: {
      title: 'ORAXAI - Gizlilik politikası',
      effective: 'Yürürlük tarihi: 05.08.2025',
      body:
        'ORAXAI, hizmetlerini kullanrken paylaşılan verileri KVKK ve ilgili veri koruma yükümlülükleri doğrultusunda işler. Kimlik, cihaz, kullanım ve gerekli olduğunda konum verileri; hizmet sunumu, güvenlik, destek ve yasal yükümlülükler kapsamında korunur. Üçüncü taraf servisler yalnızca sınırlı işlevler için kullanılır. Detaylı talepleriniz için info@oraxai.com üzerinden bizimle iletişime geçebilirsiniz.',
      close: 'Kapat',
    },
    demoRequest: {
      backHome: 'Ana sayfaya dön',
      title: 'Demo talebi',
      lead: 'Ürünü canlı veya kayıtlı ortamda görmek ister misiniz?',
      description:
        'Formu doldurun; e-posta uygulamanız açılacak ve özeti info@oraxai.com adresine gönderebileceksiniz. İsterseniz metni kopyalayıp kurumsal e-postanızdan da iletebilirsiniz. Ekibimiz iş ihtiyacı, modül ve zaman penceresine göre dönüş yapar.',
      requiredNote: 'Zorunlu alanlar (*) ile işaretlidir.',
      fields: {
        name: 'Ad soyad *',
        company: 'Şirket *',
        email: 'E-posta *',
        phone: 'Telefon',
        module: 'İlgilendiğiniz modül *',
        timeWindow: 'Uygun zaman penceresi *',
        note: 'Ek not',
      },
      placeholders: {
        module: 'Örnek: WMS, TMS, LMS…',
        timeWindow: 'Örnek: Hafta içi 10:00–12:00',
      },
      submit: 'E-posta uygulamasını aç',
      mailto: {
        subject: 'Demo talebi',
        bodyTitle: 'Demo talebi',
        name: 'Ad Soyad',
        company: 'Şirket',
        email: 'E-posta',
        phone: 'Telefon',
        module: 'İlgilendiğim modül',
        timeWindow: 'Uygun zaman penceresi',
        note: 'Ek not',
      },
    },
  },
  en: {
    metaTitle:
      'OraxAI - AI-native enterprise operations platform | WMS, TMS, LMS, TTS, QMS',
    metaDescription:
      'OraxAI is an AI-native enterprise operations platform. Unify WMS, TMS, LMS, TTS, and QMS with ERP integrations (SAP, Oracle, Dynamics) and compliance-ready design for pharma and regulated operations.',
    demoMetaTitle: 'Request a demo | OraxAI',
    demoMetaDescription:
      'Request an OraxAI demo for WMS, TMS, LMS, TTS, or QMS. Our team schedules a live or recorded walkthrough based on your modules, timeline, and operational needs.',
    brandAria: 'OraxAI home',
    nav: {
      home: 'Home',
      products: 'Products',
      platform: 'Platform',
      integration: 'Integration',
      compliance: 'Compliance',
      contact: 'Contact',
      demo: 'Free Demo',
    },
    langLabel: 'Language switcher',
    hero: {
      badge:
        'AI based enterprise operations platform · Multi-module enterprise software · Pharma and regulated-industry expertise',
      title: 'AI-powered',
      highlight: 'operations platform',
      lead:
        'OraxAI is a working platform built to manage warehouse operations, inventory, locations, pallet movements, and traceability through one shared data model and decision layer.',
      primaryCta: 'Book a free demo',
      secondaryCta: 'Explore modules',
      metrics: [
        'WMS · TMS · LMS · TTS · QMS',
        'Integrated Modules',
        'Built-in AI & LLM',
        'Enterprise-Grade Scalability'
      ],
      features: [
        'Inventory and location control',
        'Pallet and lot traceability',
        'AI-assisted workflows',
      ],
      title2: "AI-Powered Warehouse",
      text:"Built for Real Warehouse Operations" 
    },
    showcaseTitle: 'Not separate tools, one operational language',
    showcaseText:
      'From warehouse to quality, from training to shipment, every module speaks the same data model. Instead of fragmented integrations, you get an ecosystem designed to work together.',
    compliance: {
      label: 'Regulation and enterprise rigor',
      intro:
        'Module-level alignment with FDA, TITCK, EU GMP/GDP, Annex 11, GAMP 5, and ALCOA+ is clarified with the product team. Technical architecture and validation packages are shared on request.',
      chips: [
        'Multi-module platform',
        'Auditable record discipline',
        'Pharma and regulated sectors',
        'SAP · Oracle · ERP ecosystem',
      ],
    },
    products: {
      eyebrow: 'Product family',
      title: 'OraxAI modules',
      desc:
        'Our AI modules are presented at a high level; each is detailed on its own product page.',
      items: [
        {
          tag: 'Warehouse and inventory',
          name: 'WMS',
          text: 'Warehouse management built for digital twin visibility, pallet-level traceability, AI-assisted operations, and regulated execution.',
        },
        {
          tag: 'Transport',
          name: 'TMS',
          text: 'A transport layer for route planning, capacity, shipment orchestration, and field performance aligned with ERP workflows.',
        },
        {
          tag: 'Learning',
          name: 'LMS',
          text: 'Training infrastructure that connects procedures, onboarding, and competency records with operations and quality.',
        },
        {
          tag: 'Traceability',
          name: 'TTS',
          text: 'Track and trace for pharma workflows with serial and lot-level visibility across the operation.',
        },
        {
          tag: 'Quality',
          name: 'QMS',
          text: 'Quality management for deviations, CAPA, documents, and audits connected back to operational data.',
        },
      ],
    },
    platform: {
      eyebrow: 'Platform approach',
      title: 'Fully integrated: one vocabulary, one source of truth',
      desc:
        'What differentiates OraxAI is not just its feature list, but continuity across modules. Lot data in the warehouse, shipment status in transport, and deviations in quality all meet in one operational graph.',
      pillars: [
        {
          num: '01',
          title: 'Shared platform core',
          text: 'Identity, authorization, audit trail, and AI services are shared across modules.',
        },
        {
          num: '02',
          title: 'AI operations layer',
          text: 'Decision support and LLM interaction are not limited to a single module; they extend across the platform.',
        },
        {
          num: '03',
          title: 'Enterprise integration',
          text: 'Controlled data contracts connect the platform with SAP, Oracle, Dynamics, and local ERP ecosystems.',
        },
        {
          num: '04',
          title: 'Regulatory awareness',
          text: 'Especially for pharma and healthcare workflows, the platform is shaped with Part 11, Annex 11, and ALCOA+ discipline.',
        },
      ],
    },
    integration: {
      eyebrow: 'Connectivity',
      title: 'Enterprise integration',
      desc:
        'Designed to work alongside your ERP, MES, and observability stack while preserving process and data integrity.',
      lead:
        'Production and finance stay in the ERP while field operations, logistics, quality, and training are managed through the platform. Module rollout sequencing is planned together as a practical roadmap.',
      sublabel: 'Some of the platforms we integrate with',
      chips: [
        'SAP (ECC, S/4HANA)',
        'Oracle ERP',
        'Logo, Netsis, Mikro',
        'Microsoft Dynamics',
        'Nebim V3, ETA, IAS',
        'Uyumsoft, Unity, Tiger',
      ],
      note:
        'Integration needs for custom-built software and industry-specific systems are evaluated as part of the project scope.',
    },
    spotlight: {
      eyebrow: 'Featured module',
      title: 'Deep warehouse visibility with WMS',
      text:
        'Warehouse management remains the entry point for many teams. With 3D twin capabilities, pallet-level detail, and AI-assisted field decisions, WMS is one of the platform’s most mature surfaces.',
      bullets: [
        'Street View-like 3D warehouse exploration',
        'Built-in LLM and enterprise AI extensibility',
        'Validation-oriented, FDA · TITCK · EU GMP/GDP focused design',
      ],
      cta: 'Learn WMS',
      action: "The WMS experience can be demonstrated live through demos and screen recordings."
    },
    contact: {
      eyebrow: 'Contact',
      title: 'Talk to our team',
      desc:
        'Reach out for a demo, technical documentation, or a module-by-module rollout discussion.',
      emailLabel: 'Email',
      email: 'info@oraxai.com',
      note:
        'Technical architecture and validation documentation are available on request.',
    },
    footer: {
      text:
        'OraxAI is an AI-enabled enterprise operations platform connecting warehouse, transport, learning, traceability, and quality in one ecosystem.',
      privacy: 'Privacy policy',
      copyright:
        '© 2026 ORAXAI SOFTWARE AND TECHNOLOGY LIMITED. All rights reserved.',
    },
    privacy: {
      title: 'ORAXAI - Privacy policy',
      effective: 'Effective date: 08/05/2025',
      body:
        'ORAXAI processes shared data in line with applicable privacy obligations. Identity, device, usage, and when required location data may be handled for service delivery, security, support, and legal compliance. Third-party services are used only for limited operational functions. For detailed requests, contact us at info@oraxai.com.',
      close: 'Close',
    },
    demoRequest: {
      backHome: 'Back to home',
      title: 'Demo request',
      lead: 'Would you like to see the product in a live session or a recorded walkthrough?',
      description:
        'Fill out the form; your email app will open so you can send the summary to info@oraxai.com. You can also copy the text and send it from your corporate inbox. Our team will respond based on your needs, modules, and time window.',
      requiredNote: 'Required fields are marked with (*).',
      fields: {
        name: 'Full name *',
        company: 'Company *',
        email: 'Email *',
        phone: 'Phone',
        module: 'Module of interest *',
        timeWindow: 'Preferred time window *',
        note: 'Additional notes',
      },
      placeholders: {
        module: 'e.g. WMS, TMS, LMS…',
        timeWindow: 'e.g. Weekdays 10:00–12:00',
      },
      submit: 'Open email app',
      mailto: {
        subject: 'Demo request',
        bodyTitle: 'Demo request',
        name: 'Full name',
        company: 'Company',
        email: 'Email',
        phone: 'Phone',
        module: 'Module of interest',
        timeWindow: 'Preferred time window',
        note: 'Additional notes',
      },
    },
  },
};
