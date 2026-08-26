export type Language = 'tr' | 'en';

export type ProductItem = {
  tag: string;
  name: string;
  text: string;
};

export type PillarItem = {
  icon: string;
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
    features: string[];
    title2: string;
    text: string
  };
  showcaseTitle: string;
  showcaseText: string;
  compliance: {
    eyebrow: string;
    title: string;
    intro: string;
    chips: string[];
    note: string
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
    ctaEyebrow: string;
    ctaTitle: string;
    ctaText: string;
    ctaButton: string;
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
    metaTitle: "OraxAI - Akıllı Depo ve Kurumsal Operasyonlar",
    metaDescription:
      'OraxAI: yapay zekâ destekli kurumsal operasyon platformu. WMS, TMS, LMS, TTS ve QMS ile depo, sevkiyat, eğitim, izlenebilirlik ve kaliteyi tek veri modelinde birleştirin. SAP, Oracle ve Dynamics entegrasyonu; regüle sektörlere uygun tasarım.',
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
    langLabel: 'Dil seçimi',
    hero: {
      badge:
        'Yapay zekâ destekli operasyonlar',
      title: 'Daha akıllı yönetin.',
      highlight: 'Daha verimli çalışın.',
      lead: 'ORAXAI; depo, taşımacılık, kalite ve diğer operasyonel süreçleri tek bir platformda yönetmenizi sağlar.',
      primaryCta: 'Ücretsiz demo alın',
      secondaryCta: 'Ürünleri inceleyin',
      features: [
        'Stok ve lokasyon yönetimi',
        'Palet ve lot izlenebilirliği',
        'AI destekli operasyon akışları',
      ],
      title2: "Yapay Zekâ Destekli Depo",
      text: "Gerçek Operasyonlar için Üretildi"
    },
    showcaseTitle: 'Tek ürün değil, tek operasyon dilinde',
    showcaseText:
      'Depodan kaliteye, eğitimden sevkiyata kadar aynı veri sözlüğüyle çalışan moduller. Kopuk entegrasyonlar yerine tasarim geregi birlikte çalışan bir ekosistem.',
    compliance: {
      eyebrow: 'Regülasyon ve uyumluluk',
      title: 'Regüle operasyonlar için tasarlandı',
      intro:
        'OraxAI; izlenebilirlik, denetlenebilirlik, veri bütünlüğü ve validasyon gereksinimlerini platform ve modül seviyesinde dikkate alır.',
      chips: [
        'FDA',
        'TİTCK',
        'EU GMP / GDP',
        'Annex 11',
        'GAMP 5',
        'ALCOA+',
      ],
      note:
        'Teknik mimari ve validasyon dokümantasyonu talep üzerine paylaşılır.',
    },
    products: {
      eyebrow: 'Ürün ailesi',
      title: 'OraxAI modulleri',
      desc:
        'Yapay zekâ modüllerimiz burada yüksek seviyede sunulur; her biri kendi ürün sayfasında teknik detaylarıyla ele alınır.', items: [
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
          icon: 'Layers3',
          title: 'Ortak platform çekirdeği',
          text: 'Kimlik, yetki, denetim izi ve AI servisleri modüller arasında paylaşılır.',
        },
        {
          icon: 'BrainCircuit',
          title: 'AI operasyon katmanı',
          text: 'Karar desteği ve LLM etkileşimi depo ile sınırlı değildir; tüm platforma yayılır.',
        },
        {
          icon: 'PlugZap',
          title: 'Kurumsal entegrasyon',
          text: 'SAP, Oracle, Dynamics ve yerel ERP’lerle kontrollü veri sözleşmeleri üzerinden ilerler.',
        },
        {
          icon: 'ShieldCheck',
          title: 'Regülasyon uyumluluğu',
          text: 'Regüle ilaç ve sağlık operasyonları için uyumluluk ve veri bütünlüğü gözetilerek tasarlanır.',
        },
      ],
    },
    integration: {
      eyebrow: 'Bağlantı',
      title: 'Kurumsal entegrasyon',
      desc:
        'Kontrollü veri sözleşmeleri, OraxAI ile mevcut kurumsal ekosisteminiz arasında bağlantı sağlar.',
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
        'Üretim ve finans ERP üzerinde kalırken; saha operasyonları, lojistik, kalite ve eğitim süreçleri OraxAI üzerinden yönetilir. Özel geliştirilmiş ve sektöre özgü sistemler entegrasyon kapsamı içinde değerlendirilebilir.',
    },
    spotlight: {
      eyebrow: 'Öne çıkan modül',
      title: 'WMS ile depoda derin görünürlük',
      text:
        'Depo yönetimi birçok müşteri için giriş kapısı olmaya devam ediyor. 3D ikiz, palet düzeyi detay ve AI destekli saha karar mekanizmalarıyla platformun en olgun yüzeylerinden biri.',
      bullets: [
        'İnteraktif 3D depo keşfi',
        'Yerleşik LLM ve kurumsal AI yetenekleri',
        'FDA · TİTCK · EU GMP/GDP odaklı doğrulanabilir tasarım',
      ],
      cta: 'WMSi inceleyin',
      action: "Demo ve ekran kayıtları ile WMS deneyimi canlı olarak gösterilebilir."
    },
    contact: {
      eyebrow: 'İletişim',
      title: 'Ekibimizle bağlantı kurun',
      desc:
        'Demo, teknik dokümantasyon veya modul bazlı yol haritasi için bize ulaşın.',
      emailLabel: 'E-posta',
      email: 'info@oraxai.com',
      note:
        'Teknik mimari ve validasyon dokümantasyonu talep üzerine paylaşılır.',
    },
    footer: {
      ctaEyebrow: "ORAXAI'ı keşfedin",
      ctaTitle: 'ORAXAI ile tanışmaya hazır mısınız?',
      ctaText:
        'ORAXAI’ın operasyonel ihtiyaçlarınıza nasıl uyum sağlayabileceğini keşfedin.',
      ctaButton: 'Demo talep edin',
      privacy: 'Gizlilik',
      copyright: '© 2026 OraxAI. Tüm hakları saklıdır.',
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
    metaTitle: "OraxAI - AI for Warehouse & Enterprise Operations",
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
        'AI-powered operations',
      title: 'Manage smarter.',
      highlight: 'Operate better.',
      lead: 'ORAXAI brings warehouse, transport, quality, and other operational processes together in one intelligent platform.',
      primaryCta: 'Request a Demo',
      secondaryCta: 'Explore modules',
      features: [
        'Inventory and location control',
        'Pallet and lot traceability',
        'AI-assisted workflows',
      ],
      title2: "AI-Powered Warehouse",
      text: "Built for Real Warehouse Operations"
    },
    showcaseTitle: 'Not separate tools, one operational language',
    showcaseText:
      'From warehouse to quality, from training to shipment, every module speaks the same data model. Instead of fragmented integrations, you get an ecosystem designed to work together.',
    compliance: {
      eyebrow: 'Regulatory compliance',
      title: 'Built for regulated operations',
      intro:
        'ORAXAI is designed for regulated environments, with traceability, auditability, data integrity, and validation considered across the platform and its modules.',
      chips: [
        'FDA',
        'TITCK',
        'EU GMP / GDP',
        'Annex 11',
        'GAMP 5',
        'ALCOA+',
      ],
      note: 'Technical architecture and validation documentation are available on request.',
    },
    products: {
      eyebrow: 'Product family',
      title: 'OraxAI modules',
      desc:
        'Explore the modules that bring warehouse, transport, learning, traceability, and quality together.',
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
          icon: 'Layers3',
          title: 'Shared platform core',
          text: 'Identity, authorization, audit trail, and AI services are shared across modules.',
        },
        {
          icon: 'BrainCircuit',
          title: 'AI operations layer',
          text: 'AI-powered decision support and LLM capabilities extend across the platform.',
        },
        {
          icon: 'PlugZap',
          title: 'Enterprise integration',
          text: 'Connects with SAP, Oracle, Dynamics, and local ERP ecosystems.',
        },
        {
          icon: 'ShieldCheck',
          title: 'Regulatory readiness',
          text: 'Designed for regulated pharma and healthcare operations.',
        },
      ],
    },
    integration: {
      eyebrow: 'Connectivity',
      title: 'Enterprise integration',
      desc:
        'Controlled data contracts connect ORAXAI with your existing enterprise ecosystem.',
      sublabel: 'Connected to your existing ecosystem',
      chips: [
        'SAP (ECC, S/4HANA)',
        'Oracle ERP',
        'Logo, Netsis, Mikro',
        'Microsoft Dynamics',
        'Nebim V3, ETA, IAS',
        'Uyumsoft, Unity, Tiger',
      ],
      note:
        'Production and finance stay in the ERP while field operations, logistics, quality, and training are managed through ORAXAI.',
    },
    spotlight: {
      eyebrow: 'Featured module',
      title: 'Deep warehouse visibility with WMS',
      text:
        'WMS is the entry point for many teams, combining 3D warehouse visibility, pallet-level traceability, and AI-assisted operations.',
      bullets: [
        'Interactive 3D warehouse exploration',
        'Pallet-level operational visibility',
        'Built-in LLM and enterprise AI extensibility',
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
    privacy: {
      title: 'ORAXAI - Privacy Policy',
      effective: 'Effective date: 05.08.2025',
      body:
        'ORAXAI processes data shared while using its services in accordance with applicable data protection obligations. Identity, device, usage, and where necessary location data are protected for service delivery, security, support, and legal compliance. Third-party services are used only for limited functions. For detailed requests, please contact us at info@oraxai.com.',
      close: 'Close',
    },
    footer: {
      ctaEyebrow: 'Explore ORAXAI',
      ctaTitle: 'Ready to explore ORAXAI?',
      ctaText:
        'See how ORAXAI can fit your operational environment.',
      ctaButton: 'Request a demo',
      privacy: 'Privacy',
      copyright: '© 2026 OraxAI. All rights reserved.',
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
