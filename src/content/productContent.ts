import type { Language } from './siteContent';

export type ProductSlug = 'wms' | 'tms' | 'lms' | 'tts' | 'qms';

export type ProductPageCopy = {
  name: string;
  label: string;
  title: string;
  lead: string;
  description: string;
  capabilitiesTitle: string;
  capabilities: Array<{ title: string; text: string }>;
  flowTitle: string;
  flow: Array<{ title: string; text: string }>;
  platformTitle: string;
  platformText: string;
  back: string;
  demo: string;
  metaTitle: string;
  metaDescription: string;
};

const trShared = {
  capabilitiesTitle: 'Temel yetenekler',
  flowTitle: 'Operasyonun her adımında görünürlük',
  platformTitle: 'Tek platformun parçası',
  back: 'Tüm ürünlere dön',
  demo: 'Demo talep edin',
};

const enShared = {
  capabilitiesTitle: 'Core capabilities',
  flowTitle: 'Visibility at every operational step',
  platformTitle: 'Part of one platform',
  back: 'Back to all products',
  demo: 'Request a demo',
};

export const productContent: Record<Language, Record<ProductSlug, ProductPageCopy>> = {
  tr: {
    wms: {
      ...trShared, name: 'WMS', label: 'Depo Yönetim Sistemi',
      title: 'Depo operasyonunu gerçek zamanlı yönetin',
      lead: 'Stoktan sevkiyata tüm depo hareketlerini tek ekranda görün, yönetin ve optimize edin.',
      description: 'OraxAI WMS; lokasyon, palet, lot ve seri düzeyinde izlenebilirliği AI destekli karar mekanizmaları ve 3D dijital ikiz deneyimiyle birleştirir.',
      capabilities: [
        { title: 'Stok ve lokasyon', text: 'Anlık stok, adres ve uygunluk bilgisiyle doğru ürünü doğru yerde yönetin.' },
        { title: 'Palet ve lot takibi', text: 'Kabulden sevkiyata her hareketi palet, lot ve seri düzeyinde izleyin.' },
        { title: '3D dijital ikiz', text: 'Deponuzu görsel olarak keşfedin; doluluk ve hareketleri sahaya gitmeden inceleyin.' },
        { title: 'AI karar desteği', text: 'Toplama, yerleştirme ve ikmal kararlarında operasyon verisinden yararlanın.' },
        { title: 'Görev orkestrasyonu', text: 'İş emirlerini öncelik, kaynak ve saha koşullarına göre yönlendirin.' },
        { title: 'Denetim izi', text: 'Kritik işlemleri zaman, kullanıcı ve değişiklik geçmişiyle kayıt altında tutun.' },
      ],
      flow: [
        { title: 'Kabul', text: 'Sipariş, kalite ve lot kontrolleriyle kontrollü mal kabul.' },
        { title: 'Depolama', text: 'Kapasite ve ürün kurallarına göre akıllı yerleştirme.' },
        { title: 'Toplama ve sevkiyat', text: 'Doğrulamalı toplama, paketleme ve yükleme akışları.' },
      ],
      platformText: 'TMS ile sevkiyat planını, QMS ile kalite durumunu ve TTS ile uçtan uca izlenebilirliği aynı veri modeli üzerinde birleştirin.',
      metaTitle: 'OraxAI WMS | AI Destekli Depo Yönetimi', metaDescription: 'Stok, lokasyon, palet, lot ve depo operasyonlarını 3D dijital ikiz ve AI karar desteğiyle yönetin.',
    },
    tms: {
      ...trShared, name: 'TMS', label: 'Taşıma Yönetim Sistemi',
      title: 'Sevkiyatı planlayın, taşıma ağını optimize edin',
      lead: 'Rota, kapasite, maliyet ve saha performansını tek bir taşıma kontrol katmanında birleştirin.',
      description: 'OraxAI TMS; siparişten teslimata taşıma süreçlerini planlar, görünür kılar ve ERP ile depo operasyonları arasında kesintisiz bir akış kurar.',
      capabilities: [
        { title: 'Rota planlama', text: 'Teslimat penceresi, mesafe ve kısıtlara göre verimli rotalar oluşturun.' },
        { title: 'Kapasite yönetimi', text: 'Araç, yük ve hacim kullanımını planlayarak boş kapasiteyi azaltın.' },
        { title: 'Sevkiyat konsolidasyonu', text: 'Siparişleri bölge, tarih ve taşıma koşullarına göre birleştirin.' },
        { title: 'Canlı takip', text: 'Sevkiyat durumunu, gecikmeleri ve teslimat olaylarını anlık izleyin.' },
        { title: 'Maliyet kontrolü', text: 'Planlanan ve gerçekleşen taşıma maliyetlerini karşılaştırın.' },
        { title: 'Taşıyıcı performansı', text: 'Hizmet seviyesi, zamanında teslimat ve sapmaları ölçün.' },
      ],
      flow: [{ title: 'Planlama', text: 'Siparişleri kapasite, zaman ve rotaya dönüştürün.' }, { title: 'Yürütme', text: 'Yükleme, çıkış ve yol olaylarını yönetin.' }, { title: 'Teslimat', text: 'Teslim kanıtını alın, performansı ve maliyeti kapatın.' }],
      platformText: 'WMS çıkışlarını taşıma planına aktarın; teslimat verisini QMS ve kurumsal ERP süreçleriyle aynı operasyon zincirinde tutun.',
      metaTitle: 'OraxAI TMS | Akıllı Taşıma Yönetimi', metaDescription: 'Rota, kapasite, sevkiyat, taşıyıcı ve teslimat performansını tek platformdan yönetin.',
    },
    lms: {
      ...trShared, name: 'LMS', label: 'Öğrenme Yönetim Sistemi',
      title: 'Yetkinliği operasyonun bir parçasına dönüştürün',
      lead: 'Eğitim, prosedür ve yetkinlik kayıtlarını çalışanların gerçek görevleriyle ilişkilendirin.',
      description: 'OraxAI LMS; onboarding, zorunlu eğitim ve prosedür bilgisini kalite ve operasyon akışlarıyla bir araya getirir.',
      capabilities: [
        { title: 'Eğitim atama', text: 'Rol, lokasyon ve görev bazında doğru içeriği doğru kişiye atayın.' },
        { title: 'Yetkinlik matrisi', text: 'Ekiplerin yetkinlik seviyesini ve açıklarını tek görünümde takip edin.' },
        { title: 'Prosedür eğitimi', text: 'Yeni ve güncellenen prosedürler için kontrollü okuma ve onay akışları kurun.' },
        { title: 'Sınav ve değerlendirme', text: 'Bilgi seviyesini ölçün, tekrar ve başarı kurallarını yönetin.' },
        { title: 'Sertifika takibi', text: 'Süreli sertifikaları ve yenileme ihtiyaçlarını otomatik izleyin.' },
        { title: 'Denetlenebilir kayıtlar', text: 'Katılım, sonuç ve onay geçmişini raporlanabilir biçimde saklayın.' },
      ],
      flow: [{ title: 'Planla', text: 'Rol ve risklere göre öğrenme planı oluşturun.' }, { title: 'Uygula', text: 'İçerik, sınav ve onay adımlarını tamamlatın.' }, { title: 'Doğrula', text: 'Yetkinliği ölçün ve operasyon yetkileriyle eşleştirin.' }],
      platformText: 'QMS prosedür değişikliklerini otomatik eğitim ihtiyacına dönüştürün; WMS ve TMS görevlerini yalnızca yetkin çalışanlara yönlendirin.',
      metaTitle: 'OraxAI LMS | Kurumsal Eğitim ve Yetkinlik', metaDescription: 'Eğitim, onboarding, prosedür ve yetkinlik kayıtlarını operasyon ve kalite süreçleriyle birleştirin.',
    },
    tts: {
      ...trShared, name: 'TTS', label: 'Takip ve İzlenebilirlik Sistemi',
      title: 'Her ürünün yolculuğunu uçtan uca izleyin',
      lead: 'Seri, lot ve hareket verisini tedarik zinciri boyunca güvenilir bir izlenebilirlik kaydına dönüştürün.',
      description: 'OraxAI TTS; özellikle ilaç ve regüle sektörlerde ürün hareketlerini geriye ve ileriye dönük sorgulanabilir hale getirir.',
      capabilities: [
        { title: 'Seri ve lot takibi', text: 'Ürün kimliğini üretimden teslimata kadar koruyun.' },
        { title: 'Hareket geçmişi', text: 'Kim, neyi, ne zaman ve nerede işledi sorularını hızla yanıtlayın.' },
        { title: 'İlaç takip akışları', text: 'Bildirim, doğrulama ve durum yönetimi ihtiyaçlarını destekleyin.' },
        { title: 'Geri çağırma desteği', text: 'Etkilenen ürün, lokasyon ve müşterileri dakikalar içinde belirleyin.' },
        { title: 'İstisna yönetimi', text: 'Tutarsız, eksik veya şüpheli hareketleri otomatik işaretleyin.' },
        { title: 'Raporlama', text: 'Denetim ve operasyon ekipleri için sorgulanabilir kayıtlar oluşturun.' },
      ],
      flow: [{ title: 'Kimliklendir', text: 'Seri, lot ve ürün kimliklerini güvenilir biçimde kaydedin.' }, { title: 'İzle', text: 'Her el değiştirme ve durum olayını zincire ekleyin.' }, { title: 'Doğrula', text: 'Geçmişi sorgulayın, istisnaları ve kapsamı belirleyin.' }],
      platformText: 'WMS hareketlerini ve TMS teslimat olaylarını aynı izlenebilirlik zincirine bağlayın; kalite sapmalarında QMS ile etkilenen kapsamı anında görün.',
      metaTitle: 'OraxAI TTS | Ürün Takip ve İzlenebilirlik', metaDescription: 'Seri ve lot bazında uçtan uca izlenebilirlik, ilaç takip ve geri çağırma süreçlerini yönetin.',
    },
    qms: {
      ...trShared, name: 'QMS', label: 'Kalite Yönetim Sistemi',
      title: 'Kaliteyi operasyondan koparmadan yönetin',
      lead: 'Sapma, CAPA, doküman, değişiklik ve denetim süreçlerini gerçek operasyon verisiyle ilişkilendirin.',
      description: 'OraxAI QMS; kalite süreçlerini kontrollü iş akışları, sorumluluklar ve denetlenebilir kayıtlarla tek merkezde toplar.',
      capabilities: [
        { title: 'Sapma yönetimi', text: 'Olayları kaydedin, sınıflandırın ve kök neden analizine taşıyın.' },
        { title: 'CAPA', text: 'Düzeltici ve önleyici faaliyetleri sorumlu, tarih ve etkinlikle takip edin.' },
        { title: 'Doküman kontrolü', text: 'Versiyon, inceleme, onay ve yürürlük süreçlerini yönetin.' },
        { title: 'Değişiklik kontrolü', text: 'Etki, risk, görev ve onayları yapılandırılmış akışta değerlendirin.' },
        { title: 'Denetim yönetimi', text: 'Plan, bulgu ve aksiyonları tek denetim izi üzerinde yönetin.' },
        { title: 'Kalite göstergeleri', text: 'Trendleri, gecikmeleri ve tekrar eden sorunları görünür hale getirin.' },
      ],
      flow: [{ title: 'Kaydet', text: 'Olayı, kanıtı ve ilgili operasyon verisini toplayın.' }, { title: 'Değerlendir', text: 'Risk, kök neden ve gerekli aksiyonları belirleyin.' }, { title: 'Kapat ve izle', text: 'Etkinliği doğrulayın, trendleri ve tekrarları takip edin.' }],
      platformText: 'WMS, TMS ve TTS olaylarından doğrudan kalite kaydı açın; prosedür değişikliklerini LMS eğitimlerine dönüştürerek kapalı döngü kalite kurun.',
      metaTitle: 'OraxAI QMS | Entegre Kalite Yönetimi', metaDescription: 'Sapma, CAPA, doküman, değişiklik ve denetim süreçlerini operasyon verileriyle birlikte yönetin.',
    },
  },
  en: {} as Record<ProductSlug, ProductPageCopy>,
};

// Keep English routes complete while reusing the same information architecture.
productContent.en = {
  wms: { ...productContent.tr.wms, ...enShared, label: 'Warehouse Management System', title: 'Run warehouse operations in real time', lead: 'See, manage, and optimize every warehouse movement from inventory to dispatch in one place.', description: 'OraxAI WMS combines location, pallet, lot, and serial-level traceability with AI-assisted decisions and a 3D digital twin.', capabilities: [{ title: 'Inventory and locations', text: 'Manage accurate stock, address, and availability data in real time.' }, { title: 'Pallet and lot tracking', text: 'Trace every movement at pallet, lot, and serial level.' }, { title: '3D digital twin', text: 'Explore warehouse occupancy and movement without walking the floor.' }, { title: 'AI decision support', text: 'Use operational data for picking, putaway, and replenishment decisions.' }, { title: 'Task orchestration', text: 'Route work by priority, resource, and live floor conditions.' }, { title: 'Audit trail', text: 'Record critical actions with user, time, and change history.' }], flow: [{ title: 'Receive', text: 'Controlled receiving with order, quality, and lot checks.' }, { title: 'Store', text: 'Intelligent putaway based on capacity and product rules.' }, { title: 'Pick and ship', text: 'Verified picking, packing, and loading workflows.' }], platformText: 'Combine TMS shipment plans, QMS quality status, and TTS traceability on the same shared data model.', metaTitle: 'OraxAI WMS | AI-Powered Warehouse Management', metaDescription: 'Manage inventory, locations, pallets, lots, and warehouse operations with a 3D digital twin and AI decision support.' },
  tms: { ...productContent.tr.tms, ...enShared, label: 'Transportation Management System', title: 'Plan shipments and optimize your transport network', lead: 'Bring routes, capacity, cost, and field performance into one transportation control layer.', description: 'OraxAI TMS plans and makes transport processes visible from order to delivery, connecting ERP and warehouse operations.', capabilities: [{ title: 'Route planning', text: 'Build efficient routes around delivery windows, distance, and constraints.' }, { title: 'Capacity management', text: 'Plan vehicles, loads, and volume to reduce unused capacity.' }, { title: 'Shipment consolidation', text: 'Group orders by region, date, and transport requirements.' }, { title: 'Live tracking', text: 'Monitor shipment status, delays, and delivery events.' }, { title: 'Cost control', text: 'Compare planned and actual transportation costs.' }, { title: 'Carrier performance', text: 'Measure service levels, on-time delivery, and exceptions.' }], flow: [{ title: 'Plan', text: 'Turn orders into capacity, schedules, and routes.' }, { title: 'Execute', text: 'Manage loading, dispatch, and in-transit events.' }, { title: 'Deliver', text: 'Capture proof of delivery and close cost and performance.' }], platformText: 'Move WMS releases into transport plans and connect delivery data with QMS and enterprise ERP workflows.', metaTitle: 'OraxAI TMS | Intelligent Transportation Management', metaDescription: 'Manage routes, capacity, shipments, carriers, and delivery performance from one platform.' },
  lms: { ...productContent.tr.lms, ...enShared, label: 'Learning Management System', title: 'Make competency part of the operation', lead: 'Connect training, procedures, and competency records with employees’ real tasks.', description: 'OraxAI LMS brings onboarding, mandatory training, and procedural knowledge together with quality and operational workflows.', capabilities: [{ title: 'Training assignment', text: 'Assign the right content by role, location, and task.' }, { title: 'Competency matrix', text: 'See team competency levels and gaps in one view.' }, { title: 'Procedure training', text: 'Create controlled read-and-acknowledge flows for procedures.' }, { title: 'Tests and assessment', text: 'Measure knowledge and manage pass and retake rules.' }, { title: 'Certification tracking', text: 'Monitor expiring certificates and renewal needs.' }, { title: 'Auditable records', text: 'Retain attendance, results, and approvals for reporting.' }], flow: [{ title: 'Plan', text: 'Build learning plans around roles and risks.' }, { title: 'Deliver', text: 'Complete content, tests, and acknowledgement steps.' }, { title: 'Verify', text: 'Measure competency and connect it to permissions.' }], platformText: 'Turn QMS procedure changes into training and route WMS and TMS tasks only to qualified employees.', metaTitle: 'OraxAI LMS | Enterprise Learning and Competency', metaDescription: 'Connect training, onboarding, procedures, and competency records with operations and quality.' },
  tts: { ...productContent.tr.tts, ...enShared, label: 'Track and Trace System', title: 'Trace every product journey end to end', lead: 'Turn serial, lot, and movement data into a trusted traceability record across the supply chain.', description: 'OraxAI TTS makes product movements backward and forward traceable, especially for pharma and regulated industries.', capabilities: [{ title: 'Serial and lot tracking', text: 'Protect product identity from production through delivery.' }, { title: 'Movement history', text: 'Answer who, what, when, and where with speed.' }, { title: 'Pharma tracking flows', text: 'Support notification, verification, and status processes.' }, { title: 'Recall support', text: 'Identify affected products, locations, and customers quickly.' }, { title: 'Exception management', text: 'Flag inconsistent, missing, or suspicious movements.' }, { title: 'Reporting', text: 'Build searchable records for operations and audits.' }], flow: [{ title: 'Identify', text: 'Record serial, lot, and product identities reliably.' }, { title: 'Trace', text: 'Add every handoff and status event to the chain.' }, { title: 'Verify', text: 'Query history and determine exceptions and scope.' }], platformText: 'Connect WMS movements and TMS delivery events to one traceability chain, with instant QMS impact visibility.', metaTitle: 'OraxAI TTS | Product Track and Trace', metaDescription: 'Manage end-to-end serial and lot traceability, pharma tracking, and recall workflows.' },
  qms: { ...productContent.tr.qms, ...enShared, label: 'Quality Management System', title: 'Manage quality without disconnecting it from operations', lead: 'Connect deviations, CAPA, documents, changes, and audits with real operational data.', description: 'OraxAI QMS brings quality processes together through controlled workflows, ownership, and auditable records.', capabilities: [{ title: 'Deviation management', text: 'Record and classify events, then move them into root-cause analysis.' }, { title: 'CAPA', text: 'Track corrective and preventive actions by owner, date, and effectiveness.' }, { title: 'Document control', text: 'Manage version, review, approval, and effective-date workflows.' }, { title: 'Change control', text: 'Assess impact, risk, tasks, and approvals in a structured flow.' }, { title: 'Audit management', text: 'Manage plans, findings, and actions on one audit trail.' }, { title: 'Quality metrics', text: 'Expose trends, delays, and recurring issues.' }], flow: [{ title: 'Record', text: 'Collect the event, evidence, and operational context.' }, { title: 'Assess', text: 'Determine risk, root cause, and required actions.' }, { title: 'Close and monitor', text: 'Verify effectiveness and watch trends and recurrence.' }], platformText: 'Open quality records directly from WMS, TMS, and TTS events, then turn procedure changes into LMS training.', metaTitle: 'OraxAI QMS | Integrated Quality Management', metaDescription: 'Manage deviations, CAPA, documents, changes, and audits together with operational data.' },
};
