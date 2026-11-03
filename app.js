/**
 * GERMYCODE — VANILLA JAVASCRIPT ZERO-DEPENDENCIES
 * Conforme al Documento Maestro de Desarrollo Web
 * Funciona 100% offline, local (file://), Vercel y GitHub Pages
 * Soporte dual: Diccionario nativo instantáneo + Integración Google Translate
 */

// Banderas SVG optimizadas
const FLAGS = {
  es: '<svg viewBox="0 0 640 480" class="flag-svg" aria-hidden="true"><path fill="#c60b1e" d="M0 0h640v480H0z"/><path fill="#ffc400" d="M0 120h640v240H0z"/><path fill="#c60b1e" d="M0 0h640v120H0zm0 360h640v120H0z"/></svg>',
  en: '<svg viewBox="0 0 640 480" class="flag-svg" aria-hidden="true"><path fill="#bd3d44" d="M0 0h640v480H0z"/><path stroke="#fff" stroke-width="37" d="M0 55.4h640M0 129.2h640M0 203.1h640M0 276.9h640M0 350.8h640M0 424.6h640"/><path fill="#192f5d" d="M0 0h256v258.5H0z"/></svg>',
  zh: '<svg viewBox="0 0 640 480" class="flag-svg" aria-hidden="true"><path fill="#de2910" d="M0 0h640v480H0z"/><polygon fill="#ffde00" points="128,48 140,84 178,84 148,106 159,142 128,120 97,142 108,106 78,84 116,84"/><circle fill="#ffde00" cx="200" cy="40" r="12"/></svg>'
};

// Diccionario exhaustivo de Traducciones para toda la página (Offline + Local + Online)
const TRANSLATIONS = {
  es: {
    // Nav
    nav_differentials: "Diferenciales",
    nav_services: "Servicios",
    nav_demos: "Demos",
    nav_calc: "Cotizador",
    nav_compare: "Comparativa",
    nav_faq: "FAQ",
    nav_contact: "Contacto",
    nav_whatsapp: "WhatsApp Directo",

    // Hero
    hero_badge: "Diseño Web para Negocios · Burzaco y Zona Sur",
    hero_title_1: "Diseño web en Burzaco para que tu negocio convierta visitas en ",
    hero_title_gradient: "consultas",
    hero_subtitle: "En GermyCode creamos páginas web, tiendas online y landing pages para comercios y profesionales de Burzaco, Adrogué y Zona Sur, con diseño adaptable, información clara y contacto directo por WhatsApp.",
    hero_cta_calc: "⚡ Cotizar mi Web en 3 Pasos",
    hero_cta_compare: "Ver Por Qué Somos Mejores",
    metric_speed_label: "Tiempo de carga promedio",
    metric_owner_label: "Propiedad tuya (Sin cuotas)",
    metric_seo_label: "Base técnica y contenido local",
    metric_local_label: "Atención desde Burzaco",

    // Diferenciales
    diff_tag: "Ingeniería Web de Vanguardia",
    diff_title: "¿Por qué nuestro diseño supera a las agencias tradicionales?",
    diff_subtitle: "Muchas agencias locales te entregan plantillas pesadas de WordPress o sitios estáticos de hace 15 años. Nosotros diseñamos para el usuario de hoy.",
    diff_c1_title: "Rendimiento optimizado y medible",
    diff_c1_desc: "Priorizamos código liviano, carga eficiente y una experiencia adaptable a celulares. El rendimiento se mide en el sitio publicado con métricas comprobables.",
    diff_c2_title: "100% Tuya, Cero Rehenes",
    diff_c2_desc: "Te entregamos el control total del dominio y los archivos. Nada de pagar un 'abono mensual obligatorio' solo para que tu página siga online.",
    diff_c3_title: "Dominio en Google Maps Burzaco",
    diff_c3_desc: "Configuración quirúrgica de Schema LocalBusiness para que los clientes de Almirante Brown te encuentren cuando busquen tus servicios en Google.",
    diff_c4_title: "Conversión Inmediata a WhatsApp Contextual",
    diff_c4_desc: "No ponemos un simple logo verde: integramos botones inteligentes que le avisan a tu WhatsApp exactamente qué servicio o producto estaba mirando el cliente.",

    // Servicios
    serv_tag: "Diseño Web Local",
    serv_title: "Páginas web para comercios y profesionales de Burzaco",
    serv_subtitle: "Cada sitio se organiza según lo que necesita resolver el negocio: explicar un servicio, recibir consultas, mostrar productos o vender online.",
    serv_c1_title: "Web para profesionales y oficios",
    serv_c1_desc: "Presentamos servicios, zona de atención, horarios y formas de contacto para que potenciales clientes de Burzaco y Almirante Brown sepan qué ofrecés.",
    serv_c2_title: "Web para comercios locales",
    serv_c2_desc: "Una página para comercios de Burzaco, Adrogué y Zona Sur reúne catálogo, ubicación, horarios, promociones e indicaciones para hacer pedidos por WhatsApp.",
    serv_c3_title: "Landing pages y tiendas online",
    serv_c3_desc: "Creamos landing pages para campañas o servicios puntuales y tiendas online para negocios que necesitan presentar productos y gestionar compras.",

    // Demos
    demos_tag: "Demos por Rubro",
    demos_title: "Mirá cómo se vería tu negocio antes de contratar",
    demos_subtitle: "Las demos no son conceptos abstractos: son maquetas reales adaptadas a un rubro concreto, con tono comercial, diseño premium y CTA directo a WhatsApp.",
    demo_c1_tag: "Demo · Presencia local",
    demo_c1_title: "Panadería El Maná",
    demo_c1_desc: "Horarios, ubicación en mapa, productos del día y contacto directo para pedidos y consultas. Un lanzamiento pensado para negocios de barrio.",
    demo_c1_cta: "Ver demo en vivo ↗",
    demo_c2_tag: "Demo · Catálogo que consulta",
    demo_c2_title: "Almacén Doña Rosa",
    demo_c2_desc: "Categorías, fotos y precios con mensajes listos para WhatsApp. La solución ideal para comercios con stock variado que necesitan vender sin fricción.",
    demo_c2_cta: "Ver demo en vivo ↗",
    demo_c3_tag: "Demo · Tienda online",
    demo_c3_title: "Almacén Doña Rosa · Tienda",
    demo_c3_desc: "Carrito, paso a paso de compra y flujo de venta digital. Un ejemplo de e-commerce ligero, claro y móvil-first para clientes recurrentes.",
    demo_c3_cta: "Ver demo en vivo ↗",
    demo_c4_tag: "Antes / después",
    demo_c4_title: "Tu negocio hoy",
    demo_c4_desc: "Si ya tenés sitio o Google Business, te diagnosticamos qué falta: tráfico, claridad, CTA, mapa o mensajes de venta en una demo orientada a resultados.",
    demo_c4_cta: "Pedir diagnóstico",
    demos_note_1: "Son demos conceptuales de diferentes rubros y se publican como referencia de funcionamiento real en ",
    demos_note_2: " para mostrarte el flujo antes de empezar.",

    // Cotizador
    calc_tag: "Transparencia Total",
    calc_title: "Cotizador Interactivo en 3 Pasos",
    calc_subtitle: "Selecciona lo que tu negocio necesita y obtén un presupuesto al instante sin vueltas ni sorpresas.",
    calc_step1: "1. Elige el tipo de sitio base",
    calc_step2: "2. Agrega funciones potentes (Opcionales)",
    calc_p1_title: "Landing Page Vendedora",
    calc_p1_desc: "1 sección fluida, ideal para pauta o servicio puntual.",
    calc_p2_title: "Sitio Empresa Pro",
    calc_p2_desc: "Hasta 5 secciones interactivas + panel autoadministrable.",
    calc_p3_title: "Tienda E-Commerce",
    calc_p3_desc: "Catálogo, carrito, envíos y pagos automáticos.",
    calc_opt_wa: "WhatsApp Inteligente",
    calc_opt_wa_badge: "¡Bonificado $0!",
    calc_opt_seo: "SEO Local Google Maps",
    calc_opt_mp: "Checkout Mercado Pago",
    calc_opt_turns: "Agendamiento de Citas",
    calc_total_title: "Presupuesto Estimado Final",
    calc_note: "* Incluye hosting de alta velocidad y certificado SSL el primer año.",
    calc_cta_btn: "Enviar Presupuesto a Germán por WhatsApp",
    wa_greeting: "Hola Germán! Estuve usando el cotizador de GermyCode:",
    wa_plan: "📌 Plan Base:",
    wa_extras: "➕ Adicionales:",
    wa_total: "💰 Presupuesto estimado:",
    wa_closing: "¿Podemos coordinar para avanzar con mi página web?",

    // Comparativa
    comp_tag: "Cara a Cara",
    comp_title: "GermyCode vs Agencias Tradicionales de la Zona",
    comp_subtitle: "Analizamos la oferta en Burzaco y Zona Sur para que tomes la decisión más rentable para tu inversión.",
    comp_th_feat: "Característica Clave",
    comp_th_us: "✨ GermyCode",
    comp_th_others: "Agencias Típicas de la Zona",
    comp_r1_feat: "Precio Landing de Conversión",
    comp_r1_us: "$190.000 ARS (Más accesible y veloz)",
    comp_r1_oth: "$200.000 – $240.000 ARS",
    comp_r2_feat: "Precio Web Empresa (5 secciones)",
    comp_r2_us: "$340.000 ARS (Con diseño Bento exclusivo)",
    comp_r2_oth: "$320.000 – $450.000 ARS (Plantilla estándar)",
    comp_r3_feat: "Velocidad Móvil",
    comp_r3_us: "✓ Ultra Rápida (<1 seg)",
    comp_r3_oth: "✕ Lenta (3 a 5 seg por plugins pesados)",
    comp_r4_feat: "Propiedad y Sin Abonos Forzados",
    comp_r4_us: "✓ 100% tuya, sin costos ocultos",
    comp_r4_oth: "Muchas cobran abono mensual forzado",
    comp_r5_feat: "Cotizador & WhatsApp Inteligente",
    comp_r5_us: "✓ Incluido de serie",
    comp_r5_oth: "✕ Solo formulario básico por correo",
    comp_r6_feat: "Atención y Soporte Local",
    comp_r6_us: "✓ En Burzaco, contacto directo y transparente",
    comp_r6_oth: "Soporte por ticket o demoras de varios días",

    // FAQ
    faq_tag: "Preguntas Frecuentes",
    faq_title: "Diseño web y SEO local en Burzaco: respuestas claras",
    faq_subtitle: "Información sobre alcance, servicios y visibilidad en buscadores antes de iniciar un proyecto.",
    faq_q1: "¿Hacen páginas web para negocios de Burzaco y Zona Sur?",
    faq_a1: "Sí. GermyCode trabaja desde Burzaco con comercios, profesionales y prestadores de servicios de Almirante Brown y Zona Sur. También se pueden coordinar proyectos a distancia.",
    faq_q2: "¿Qué incluye el SEO local de una página web?",
    faq_a2: "La base incluye estructura clara, títulos y descripciones relevantes, información local consistente y datos estructurados cuando corresponden. La visibilidad también depende de la competencia, el contenido y el perfil de negocio.",
    faq_q3: "¿Pueden crear una tienda online o una landing page?",
    faq_a3: "Sí. Se desarrollan landing pages para presentar un servicio puntual, sitios institucionales para empresas y tiendas online con catálogo y flujo de compra, según el alcance acordado.",
    faq_q4: "¿El sitio y el dominio quedan a nombre del cliente?",
    faq_a4: "El sitio se entrega al cliente con acceso a sus archivos. El dominio y las cuentas de hosting se configuran a nombre del cliente para que mantenga el control absoluto.",
    faq_q5: "¿Cuánto tarda en aparecer mi página en Google?",
    faq_a5: "El tiempo de rastreo e indexación varía según Google. Facilitamos el rastreo con una página accesible, enlaces internos y herramientas como Google Search Console.",

    // Contacto
    contact_tag: "Presencia Local en Burzaco",
    contact_title: "Hablemos de tu proyecto",
    contact_desc: "Estamos en Burzaco, Partido de Almirante Brown. Trabajamos de manera presencial o virtual para todo el Gran Buenos Aires y el país.",
    contact_lbl_dir: "Dirección:",
    contact_lbl_wa: "WhatsApp Directo:",
    contact_lbl_resp: "Responsable y Dirección de Proyectos:",
    contact_linkedin: "Perfil en LinkedIn",
    contact_btn_wa: "Iniciar Conversación por WhatsApp",
    contact_map_title: "Ubicación en Burzaco",
    contact_map_btn: "Abrir en Google Maps ↗",
    contact_qr_desc: "Escaneá para abrir esta web desde tu celular",
    qr_zoom_hint: "🔍 Clic para agrandar",
    qr_modal_title: "Escaneá desde tu Celular",
    qr_modal_desc: "Apuntá con la cámara de tu teléfono para abrir germycode.com.ar al instante.",
    qr_modal_btn: "Cerrar",

    // Bottom App & Footer
    bot_home: "Inicio",
    bot_services: "Servicios",
    bot_calc: "Cotizar",
    bot_loc: "Ubicación",
    footer_tagline: "Diseño & Desarrollo Web de Alto Rendimiento",
    footer_linkedin: "LinkedIn",
    footer_rights: "Todos los derechos reservados."
  },

  en: {
    // Nav
    nav_differentials: "Why Us",
    nav_services: "Services",
    nav_demos: "Demos",
    nav_calc: "Quote",
    nav_compare: "Comparison",
    nav_faq: "FAQ",
    nav_contact: "Contact",
    nav_whatsapp: "Direct WhatsApp",

    // Hero
    hero_badge: "High-Performance Web Design · Burzaco & South Zone",
    hero_title_1: "Web design in Burzaco tailored to convert your visitors into ",
    hero_title_gradient: "inquiries",
    hero_subtitle: "At GermyCode we engineer websites, e-commerce stores, and high-conversion landing pages for businesses and professionals in Burzaco, Adrogué, and Greater Buenos Aires, equipped with responsive layout and instant WhatsApp connection.",
    hero_cta_calc: "⚡ Instant 3-Step Quote",
    hero_cta_compare: "Why We Stand Out",
    metric_speed_label: "Average page load speed",
    metric_owner_label: "Full client ownership (No recurring fees)",
    metric_seo_label: "Technical base & local schema",
    metric_local_label: "Headquartered in Burzaco",

    // Diferenciales
    diff_tag: "Cutting-Edge Web Engineering",
    diff_title: "Why Our Design Outperforms Traditional Agencies",
    diff_subtitle: "Many local agencies deliver bloated WordPress templates or 15-year-old static sites. We build for today's user.",
    diff_c1_title: "Optimized and Measurable Performance",
    diff_c1_desc: "We prioritize lightweight code, efficient loading, and a seamless mobile experience. Performance is measured live on the published site with verifiable metrics.",
    diff_c2_title: "100% Yours, Zero Lock-in",
    diff_c2_desc: "We hand over total control of your domain and files. No mandatory monthly subscriptions just to keep your page alive online.",
    diff_c3_title: "Google Maps & Local SEO Burzaco",
    diff_c3_desc: "Precision Schema LocalBusiness configuration so clients in Almirante Brown discover you immediately when searching on Google.",
    diff_c4_title: "Direct Conversion via Smart WhatsApp",
    diff_c4_desc: "More than just a green icon: smart buttons notify your WhatsApp with the exact service or product the visitor was viewing.",

    // Servicios
    serv_tag: "Local Web Design",
    serv_title: "Websites for Businesses & Professionals in Burzaco",
    serv_subtitle: "Each site is tailored to solve specific business needs: explain services, capture inquiries, showcase products, or sell online.",
    serv_c1_title: "Web for Professionals & Trades",
    serv_c1_desc: "We showcase services, service area, hours, and direct contact methods so local clients in Burzaco and Almirante Brown know what you offer.",
    serv_c2_title: "Web for Local Merchants",
    serv_c2_desc: "A digital hub for shops in Burzaco, Adrogué and South Zone combining catalog, location, hours, offers, and WhatsApp order prompts.",
    serv_c3_title: "Landing Pages & Online Stores",
    serv_c3_desc: "High-converting landing pages for targeted campaigns and full-featured e-commerce stores for seamless online selling.",

    // Demos
    demos_tag: "Industry Demos",
    demos_title: "See How Your Business Looks Before Hiring",
    demos_subtitle: "Demos are not abstract concepts: they are real interactive mockups tailored to specific industries with premium aesthetics and WhatsApp integration.",
    demo_c1_tag: "Demo · Local Presence",
    demo_c1_title: "El Maná Bakery",
    demo_c1_desc: "Hours, map location, daily specials, and direct contact for orders and inquiries tailored for neighborhood stores.",
    demo_c1_cta: "View Live Demo ↗",
    demo_c2_tag: "Demo · Inquiring Catalog",
    demo_c2_title: "Doña Rosa Grocery",
    demo_c2_desc: "Categories, photos, and prices with pre-filled WhatsApp messages. The ideal friction-free sales solution for inventory.",
    demo_c2_cta: "View Live Demo ↗",
    demo_c3_tag: "Demo · Online Store",
    demo_c3_title: "Doña Rosa Store",
    demo_c3_desc: "Cart, step-by-step checkout, and seamless digital ordering flow. Lightweight mobile-first e-commerce for regular shoppers.",
    demo_c3_cta: "View Live Demo ↗",
    demo_c4_tag: "Before / After",
    demo_c4_title: "Your Business Today",
    demo_c4_desc: "If you already have a site or Google Business profile, we diagnose what's missing: clarity, traffic, CTA, or sales messages in a results-driven audit.",
    demo_c4_cta: "Request Free Audit",
    demos_note_1: "These are conceptual demos from different industries published as real operating references on ",
    demos_note_2: " to show you the workflow before getting started.",

    // Cotizador
    calc_tag: "Total Transparency",
    calc_title: "Interactive 3-Step Quote Generator",
    calc_subtitle: "Select what your business requires and get an immediate estimate without hidden costs.",
    calc_step1: "1. Select your base website plan",
    calc_step2: "2. Add powerful optional features",
    calc_p1_title: "High-Converting Landing Page",
    calc_p1_desc: "1 fluid section, ideal for ad campaigns or specific service.",
    calc_p2_title: "Pro Business Website",
    calc_p2_desc: "Up to 5 interactive sections + self-managed admin panel.",
    calc_p3_title: "Full E-Commerce Store",
    calc_p3_desc: "Catalog, shopping cart, shipping, and automated payments.",
    calc_opt_wa: "Smart WhatsApp Integration",
    calc_opt_wa_badge: "Free $0!",
    calc_opt_seo: "Local SEO Google Maps",
    calc_opt_mp: "Mercado Pago Checkout",
    calc_opt_turns: "Online Appointment Booking",
    calc_total_title: "Estimated Total Investment",
    calc_note: "* Includes high-speed hosting and SSL certificate for the first year.",
    calc_cta_btn: "Send Quote to Germán via WhatsApp",
    wa_greeting: "Hello Germán! I was using the GermyCode quote calculator:",
    wa_plan: "📌 Base Plan:",
    wa_extras: "➕ Add-ons:",
    wa_total: "💰 Estimated budget:",
    wa_closing: "Can we schedule a call to move forward with my website?",

    // Comparativa
    comp_tag: "Head to Head",
    comp_title: "GermyCode vs Traditional Local Agencies",
    comp_subtitle: "We analyze options in Burzaco and South Zone so you make the highest-return investment for your budget.",
    comp_th_feat: "Key Feature",
    comp_th_us: "✨ GermyCode",
    comp_th_others: "Typical Local Agencies",
    comp_r1_feat: "Landing Page Price",
    comp_r1_us: "$190.000 ARS (Faster & accessible)",
    comp_r1_oth: "$200,000 – $240,000 ARS",
    comp_r2_feat: "Business Site (5 sections)",
    comp_r2_us: "$340.000 ARS (Exclusive Bento Grid)",
    comp_r2_oth: "$320,000 – $450,000 ARS (Generic template)",
    comp_r3_feat: "Mobile Speed",
    comp_r3_us: "✓ Ultra Fast (<1 sec)",
    comp_r3_oth: "✕ Slow (3-5s due to bloated plugins)",
    comp_r4_feat: "Ownership & No Hidden Fees",
    comp_r4_us: "✓ 100% yours, zero hidden fees",
    comp_r4_oth: "Many enforce mandatory monthly fees",
    comp_r5_feat: "Quote Engine & Smart WhatsApp",
    comp_r5_us: "✓ Included as standard",
    comp_r5_oth: "✕ Basic email contact form only",
    comp_r6_feat: "Local Support & Direct Attention",
    comp_r6_us: "✓ Burzaco based, direct transparent contact",
    comp_r6_oth: "Ticket systems with days of delay",

    // FAQ
    faq_tag: "Frequently Asked Questions",
    faq_title: "Web Design & Local SEO in Burzaco: Clear Answers",
    faq_subtitle: "Clear details on scope, services, and search engine visibility before launching your project.",
    faq_q1: "Do you build websites for businesses in Burzaco and South Zone?",
    faq_a1: "Yes. GermyCode operates from Burzaco serving merchants, professionals, and service providers across Almirante Brown and Greater Buenos Aires, as well as remote projects.",
    faq_q2: "What does Local SEO include?",
    faq_a2: "It covers clean semantic architecture, optimized meta tags, consistent NAP data, and schema structured markup to maximize local search signals.",
    faq_q3: "Can you build an online store or a landing page?",
    faq_a3: "Yes. We engineer landing pages for specific campaigns, corporate business portals, and complete e-commerce stores with catalogs and checkouts.",
    faq_q4: "Are the site and domain registered under the client's name?",
    faq_a4: "All files and assets belong to you. Domains and hosting accounts are registered under your name so you retain absolute ownership and control.",
    faq_q5: "How long does it take to appear on Google?",
    faq_a5: "Indexing schedules depend on Google's crawlers. We optimize speed, sitemaps, and integration with Google Search Console to expedite discovery.",

    // Contacto
    contact_tag: "Local Presence in Burzaco",
    contact_title: "Let's Talk About Your Project",
    contact_desc: "We are located in Burzaco, Almirante Brown. We work in person or remotely throughout Greater Buenos Aires and nationwide.",
    contact_lbl_dir: "Address:",
    contact_lbl_wa: "Direct WhatsApp:",
    contact_lbl_resp: "Project Director:",
    contact_linkedin: "LinkedIn Profile",
    contact_btn_wa: "Start Conversation on WhatsApp",
    contact_map_title: "Burzaco Location",
    contact_map_btn: "Open in Google Maps ↗",
    contact_qr_desc: "Scan to open this site on your mobile phone",
    qr_zoom_hint: "🔍 Click to enlarge",
    qr_modal_title: "Scan from your Phone",
    qr_modal_desc: "Point your phone's camera to instantly open germycode.com.ar.",
    qr_modal_btn: "Close",

    // Bottom App & Footer
    bot_home: "Home",
    bot_services: "Services",
    bot_calc: "Quote",
    bot_loc: "Location",
    footer_tagline: "High-Performance Web Design & Engineering",
    footer_linkedin: "LinkedIn",
    footer_rights: "All rights reserved."
  },

  zh: {
    // Nav
    nav_differentials: "核心优势",
    nav_services: "专业服务",
    nav_demos: "精选案例",
    nav_calc: "在线测算",
    nav_compare: "同行对比",
    nav_faq: "常见疑问",
    nav_contact: "联系我们",
    nav_whatsapp: "WhatsApp直连",

    // Hero
    hero_badge: "商业高转化网站设计 · 布尔萨科与南部地区",
    hero_title_1: "在布尔萨科打造专业网站，将每位访客高效转化为",
    hero_title_gradient: "商机与咨询",
    hero_subtitle: "在 GermyCode，我们为布尔萨科、阿德罗格及周边地区的商家和专业人士定制开发高转化落地页、企业官网和在线商城，提供自适应设计与 WhatsApp 即时对话通道。",
    hero_cta_calc: "⚡ 3步快速测算报价",
    hero_cta_compare: "查看我们的独特优势",
    metric_speed_label: "平均网页加载耗时",
    metric_owner_label: "归您所有（无隐性月租）",
    metric_seo_label: "本地化结构与谷歌地图优化",
    metric_local_label: "立足布尔萨科 本地直面服务",

    // Diferenciales
    diff_tag: "前沿网页工程技术",
    diff_title: "为什么我们的设计超越传统建站公司？",
    diff_subtitle: "许多传统机构交付臃肿卡顿的 WordPress 模板或十年前的过时页面。我们为当今快节奏用户量身定制。",
    diff_c1_title: "极致性能与可衡量指标",
    diff_c1_desc: "坚持轻量化原生代码与秒级加载，在实际线上通过权威指标验证卓越性能。",
    diff_c2_title: "100% 产权归您，拒绝绑架",
    diff_c2_desc: "交付域名与代码文件的全部控制权，杜绝强制按月收费绑架客户。",
    diff_c3_title: "布尔萨科谷歌地图与本地SEO",
    diff_c3_desc: "深度配置本地商家结构化数据，让本地潜在客户在谷歌搜索中第一时间找到您。",
    diff_c4_title: "智能 WhatsApp 即时商机转化",
    diff_c4_desc: "不仅是一个绿色图标：智能按钮将访客当前浏览的具体项目精准预填至对话框。",

    // Servicios
    serv_tag: "本地网站定制",
    serv_title: "为布尔萨科商户与专业人士打造专属网站",
    serv_subtitle: "针对实际商业目标量身定制：展示服务、获取客资、陈列商品或直接在线销售。",
    serv_c1_title: "专业人士与技术服务类网站",
    serv_c1_desc: "清晰呈现业务范围、服务时段与即时联络通道，让本地客户清晰了解您的专长。",
    serv_c2_title: "实体商户与门店展示网站",
    serv_c2_desc: "整合产品画册、门店导航、营业时间与一键 WhatsApp 订购通道。",
    serv_c3_title: "高转化落地页与在线商城",
    serv_c3_desc: "打造适合广告投放的高转化单页，或支持购物车与在线结算的全功能独立商城。",

    // Demos
    demos_tag: "行业精选案例",
    demos_title: "合作前即可直观预览您的专属设计",
    demos_subtitle: "绝非虚无概念图：真实运行的交互式案例，具备商业转化逻辑与 WhatsApp 直达通道。",
    demo_c1_tag: "案例 · 本地实体",
    demo_c1_title: "El Maná 烘焙面包坊",
    demo_c1_desc: "营业时间、地图导航、每日主推与一键预订，专为本地街区实体店打造。",
    demo_c1_cta: "查看在线案例 ↗",
    demo_c2_tag: "案例 · 咨询型商品画册",
    demo_c2_title: "Doña Rosa 综合超市",
    demo_c2_desc: "按类别陈列高清图片与价格，一键生成 WhatsApp 询价清单，省去琐碎沟通。",
    demo_c2_cta: "查看在线案例 ↗",
    demo_c3_tag: "案例 · 在线独立商城",
    demo_c3_title: "Doña Rosa 线上商城",
    demo_c3_desc: "购物车、结账步骤与数字下单流程，专为手机端优化的轻量独立电商。",
    demo_c3_cta: "查看在线案例 ↗",
    demo_c4_tag: "改造前后对比",
    demo_c4_title: "您当前的业务诊断",
    demo_c4_desc: "如果您已有网站或谷歌商家主页，我们免费诊断转化瓶颈并提供改善方案。",
    demo_c4_cta: "获取免费诊断",
    demos_note_1: "这些是不同行业的概念演示，作为实际操作参考发布在 ",
    demos_note_2: " 上，以便在开始前向您展示具体流程。",

    // Cotizador
    calc_tag: "价格透明 公开无套路",
    calc_title: "交互式3步费用测算器",
    calc_subtitle: "勾选您业务所需的功能，即刻计算准确预算，无需来回扯皮或担心隐藏附加费。",
    calc_step1: "第 1 步：选择基础网站类型",
    calc_step2: "第 2 步：添加实用拓展功能（可选）",
    calc_p1_title: "高转化单页落地页",
    calc_p1_desc: "1个流畅滚动板块，极适合广告投放或专项业务展示。",
    calc_p2_title: "企业专业版官网",
    calc_p2_desc: "多达5个交互板块 + 便捷自主后台管理面板。",
    calc_p3_title: "全功能电商独立站",
    calc_p3_desc: "商品目录、购物车、物流运费与全自动收款对接。",
    calc_opt_wa: "智能 WhatsApp 场景化直连",
    calc_opt_wa_badge: "免费赠送 $0！",
    calc_opt_seo: "本地 SEO 与 Google 地图优化",
    calc_opt_mp: "Mercado Pago 线上支付对接",
    calc_opt_turns: "在线预约与排期系统",
    calc_total_title: "预估最终总投资",
    calc_note: "* 包含首年极速云托管与安全 SSL 证书。",
    calc_cta_btn: "将测算方案发送给 Germán (WhatsApp)",
    wa_greeting: "您好 Germán！我正在使用 GermyCode 网站费用测算器：",
    wa_plan: "📌 基础方案:",
    wa_extras: "➕ 增值功能:",
    wa_total: "💰 预估总额:",
    wa_closing: "能否沟通一下具体的合作推进细节？",

    // Comparativa
    comp_tag: "直观对比",
    comp_title: "GermyCode 与传统建站公司的全方位对比",
    comp_subtitle: "深度分析本地服务差异，助您做出投资回报率最高的明智抉择。",
    comp_th_feat: "核心维度",
    comp_th_us: "✨ GermyCode",
    comp_th_others: "周边普通传统建站",
    comp_r1_feat: "转化单页价格",
    comp_r1_us: "$190.000 ARS (更具性价比且极速)",
    comp_r1_oth: "$200.000 – $240.000 ARS",
    comp_r2_feat: "多页面企业官网 (5板块)",
    comp_r2_us: "$340.000 ARS (独家现代化 Bento 布局)",
    comp_r2_oth: "$320.000 – $450.000 ARS (老旧通用模板)",
    comp_r3_feat: "手机端加载速度",
    comp_r3_us: "✓ 极速首屏 (<1 秒)",
    comp_r3_oth: "✕ 缓慢 (因插件冗余需3至5秒)",
    comp_r4_feat: "所有权与无捆绑月租",
    comp_r4_us: "✓ 100% 客户全权所有，无隐藏消费",
    comp_r4_oth: "许多强制绑定高额维护月租",
    comp_r5_feat: "费用测算与智能 WhatsApp 直连",
    comp_r5_us: "✓ 原厂标准标配内置",
    comp_r5_oth: "✕ 仅提供传统迟缓的邮件表单",
    comp_r6_feat: "本地对接与售后保障",
    comp_r6_us: "✓ 立足布尔萨科，一对一高效直接沟通",
    comp_r6_oth: "工单流转慢，往往数日得不到答复",

    // FAQ
    faq_tag: "常见解答",
    faq_title: "布尔萨科网页设计与本地SEO常见问题解答",
    faq_subtitle: "合作启动前，关于开发周期、服务范畴及搜索引擎收录的透明解答。",
    faq_q1: "你们为布尔萨科和南部地区的商家建站吗？",
    faq_a1: "是的。GermyCode 根植于布尔萨科，服务于本地及大布宜诺斯艾利斯各行业的商户与从业者，同时也支持全远程协作开发。",
    faq_q2: "网站自带的本地SEO包含哪些内容？",
    faq_a2: "包含语义化结构、页面元标签优化、精准地址电话标定与 Schema 本地商家微数据，助力提升谷歌排名基础。",
    faq_q3: "可以开发在线商城或独立落地页吗？",
    faq_a3: "完全可以。我们根据您的具体业务诉求定制单页推广落地页、企业形象官网或具备完整结算流程的在线独立商城。",
    faq_q4: "网站与域名归属客户所有吗？",
    faq_a4: "代码与文件完整移交，域名与服务器均以您的名义开设，您享有百分之百的独立自主控制权。",
    faq_q5: "新网站需要多久才能被谷歌收录？",
    faq_a5: "抓取与收录时间取决于谷歌算法，我们提供标准化站点地图、极速性能与 Search Console 登记以加速收录。",

    // Contacto
    contact_tag: "布尔萨科本地实体工作室",
    contact_title: "即刻交流您的项目构想",
    contact_desc: "我们位于布尔萨科（阿尔米兰特布朗区），支持面对面沟通或全程在线协同服务。",
    contact_lbl_dir: "办公地址：",
    contact_lbl_wa: "官方 WhatsApp：",
    contact_lbl_resp: "项目总监负责人：",
    contact_linkedin: "LinkedIn 领英主页",
    contact_btn_wa: "在 WhatsApp 发起即时咨询",
    contact_map_title: "布尔萨科地图定位",
    contact_map_btn: "在谷歌地图中打开 ↗",
    contact_qr_desc: "扫码即可在手机上浏览此网站",
    qr_zoom_hint: "🔍 点击放大二维码",
    qr_modal_title: "手机扫码即刻访问",
    qr_modal_desc: "使用手机相机扫描二维码，即刻在手机端浏览 germycode.com.ar。",
    qr_modal_btn: "关闭",

    // Bottom App & Footer
    bot_home: "首页",
    bot_services: "服务",
    bot_calc: "测算",
    bot_loc: "地址",
    footer_tagline: "高性能网页设计与开发",
    footer_linkedin: "LinkedIn",
    footer_rights: "版权所有。"
  }
};

let currentLang = 'es';

// Función para cambiar idioma en la UI y sincronizar diccionarios (100% Nativo Zero-CDN)
function setLanguage(lang) {
  if (!TRANSLATIONS[lang]) return;
  currentLang = lang;
  try {
    localStorage.setItem('germycode_lang', lang);
  } catch (e) {}

  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : lang;

  // 1. Actualizar textos con atributo data-i18n en todo el DOM
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
      el.textContent = TRANSLATIONS[lang][key];
    }
  });

  // 2. Actualizar bandera e indicador del botón en el navbar
  const currentFlagBox = document.getElementById('currentFlagBox');
  if (currentFlagBox && FLAGS[lang]) {
    currentFlagBox.innerHTML = FLAGS[lang];
  }

  const currentLangLabel = document.getElementById('currentLangLabel');
  if (currentLangLabel) {
    currentLangLabel.textContent = lang === 'es' ? 'ES' : lang === 'en' ? 'EN' : '中文';
  }

  // 3. Marcar opción activa en el dropdown
  document.querySelectorAll('.lang-item').forEach(btn => {
    const isActive = btn.getAttribute('data-lang') === lang;
    btn.classList.toggle('active', isActive);
  });

  // 4. Re-calcular presupuesto con textos traducidos
  updateQuoteTotal();

  // 5. Actualizar enlaces de demos externas con pasarela de traducción
  updateDemoLinks(lang);
}

// Actualizar enlaces de demos para que abran con Google Translate según el idioma activo
function updateDemoLinks(lang) {
  const targetCode = lang === 'zh' ? 'zh-CN' : lang;
  document.querySelectorAll('a[data-original-href]').forEach(a => {
    const rawUrl = a.getAttribute('data-original-href');
    if (!rawUrl) return;
    if (lang === 'es') {
      a.href = rawUrl;
    } else {
      // Abre la URL externa directamente traducida por Google Translate
      a.href = `https://translate.google.com/translate?sl=es&tl=${targetCode}&u=${encodeURIComponent(rawUrl)}`;
    }
  });
}

// Selector de Idioma Dropdown Toggle
function initLanguageSelector() {
  const langBtn = document.getElementById('langBtn');
  const langDropdown = document.getElementById('langDropdown');

  if (langBtn && langDropdown) {
    langBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      langDropdown.classList.toggle('show');
    });

    document.querySelectorAll('.lang-item').forEach(btn => {
      btn.addEventListener('click', () => {
        const selectedLang = btn.getAttribute('data-lang');
        setLanguage(selectedLang);
        langDropdown.classList.remove('show');
      });
    });

    document.addEventListener('click', (e) => {
      if (!langBtn.contains(e.target) && !langDropdown.contains(e.target)) {
        langDropdown.classList.remove('show');
      }
    });
  }

  // Cargar idioma guardado o del navegador
  let initialLang = 'es';
  try {
    const saved = localStorage.getItem('germycode_lang');
    if (saved && TRANSLATIONS[saved]) initialLang = saved;
    else if (navigator.language && navigator.language.startsWith('zh')) initialLang = 'zh';
    else if (navigator.language && navigator.language.startsWith('en')) initialLang = 'en';
  } catch (e) {}

  setLanguage(initialLang);
}

// Menú Móvil Hamburguesa
function initMobileMenu() {
  const toggleBtn = document.getElementById('menuToggleBtn');
  const mobileMenu = document.getElementById('mobileNavMenu');

  if (toggleBtn && mobileMenu) {
    toggleBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('show');
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.remove('show');
      });
    });
  }
}

// Cotizador Interactivo en 3 Pasos
let selectedBasePlan = {
  key: "calc_p1_title",
  name: "Landing Page Vendedora",
  price: 190000
};

function updateQuoteTotal() {
  const totalDisplay = document.getElementById('totalDisplay');
  const btnSendWhatsapp = document.getElementById('btnSendWhatsapp');
  if (!totalDisplay || !btnSendWhatsapp) return;

  const t = TRANSLATIONS[currentLang] || TRANSLATIONS.es;

  let total = selectedBasePlan.price;
  let selectedExtras = [];

  document.querySelectorAll('.extra-check').forEach(check => {
    if (check.checked) {
      const price = parseInt(check.getAttribute('data-price') || '0');
      total += price;
      if (price > 0) {
        const key = check.getAttribute('data-name-key');
        const extraName = (key && t[key]) ? t[key] : check.getAttribute('data-name');
        selectedExtras.push(extraName);
      }
    }
  });

  totalDisplay.innerHTML = "$" + total.toLocaleString('es-AR') + " <span>ARS</span>";

  const planName = (selectedBasePlan.key && t[selectedBasePlan.key]) ? t[selectedBasePlan.key] : selectedBasePlan.name;

  let msg = `${t.wa_greeting}\n`;
  msg += `${t.wa_plan} ${planName} ($${selectedBasePlan.price.toLocaleString('es-AR')} ARS)\n`;
  if (selectedExtras.length > 0) {
    msg += `${t.wa_extras}\n- ` + selectedExtras.join('\n- ') + `\n`;
  }
  msg += `${t.wa_total} $${total.toLocaleString('es-AR')} ARS.\n`;
  msg += t.wa_closing;

  btnSendWhatsapp.href = `https://wa.me/5491161079845?text=${encodeURIComponent(msg)}`;
}

function initCalculator() {
  const baseCards = document.querySelectorAll('.plan-card');
  baseCards.forEach(card => {
    card.addEventListener('click', () => {
      baseCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      selectedBasePlan = {
        key: card.getAttribute('data-name-key'),
        name: card.getAttribute('data-name'),
        price: parseInt(card.getAttribute('data-price'))
      };
      updateQuoteTotal();
    });
  });

  document.querySelectorAll('.extra-check').forEach(check => {
    check.addEventListener('change', updateQuoteTotal);
  });

  updateQuoteTotal();
}

// Acordeón de Preguntas Frecuentes
function initFaq() {
  document.querySelectorAll('.faq-item').forEach(item => {
    const btn = item.querySelector('.faq-btn');
    if (btn) {
      btn.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');
        document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
        if (!isOpen) item.classList.add('open');
      });
    }
  });
}

// Navegación Inferior Móvil Scroll Spy
function initScrollSpy() {
  const navItems = document.querySelectorAll('.bottom-nav-item');
  if (navItems.length === 0) return;

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 200;
    const servicios = document.getElementById('servicios-locales');
    const cotizador = document.getElementById('cotizador');
    const contacto = document.getElementById('contacto');

    let current = 'home';
    if (contacto && scrollPos >= contacto.offsetTop) current = 'contacto';
    else if (cotizador && scrollPos >= cotizador.offsetTop) current = 'cotizador';
    else if (servicios && scrollPos >= servicios.offsetTop) current = 'servicios';

    navItems.forEach(item => {
      item.classList.toggle('active', item.getAttribute('data-section') === current);
    });
  }, { passive: true });
}

// Modal Lightbox QR (Agrandar al hacer clic)
function initQrModal() {
  const trigger = document.getElementById('qrTrigger');
  const modal = document.getElementById('qrModal');
  const backdrop = document.getElementById('qrModalBackdrop');
  const closeBtn = document.getElementById('qrModalClose');
  const btnClose = document.getElementById('qrModalBtnClose');

  if (!trigger || !modal) return;

  function openModal() {
    modal.style.display = 'flex';
    requestAnimationFrame(() => {
      modal.classList.add('active');
      modal.setAttribute('aria-hidden', 'false');
    });
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    setTimeout(() => {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }, 250);
  }

  trigger.addEventListener('click', openModal);
  trigger.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openModal();
    }
  });

  if (backdrop) backdrop.addEventListener('click', closeModal);
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (btnClose) btnClose.addEventListener('click', closeModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
}

// Inicialización General al cargar DOM
document.addEventListener('DOMContentLoaded', () => {
  initLanguageSelector();
  initMobileMenu();
  initCalculator();
  initFaq();
  initScrollSpy();
  initQrModal();

  // Registro de Service Worker PWA (Offline)
  if ('serviceWorker' in navigator && window.location.protocol !== 'file:') {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  }
});
