const menuToggle = document.getElementById('menu-toggle');
const siteNav = document.getElementById('site-nav');
const tabs = document.querySelectorAll('.tab');
const year = document.getElementById('year');
const emailTriggers = document.querySelectorAll('.email-trigger');
const langButtons = document.querySelectorAll('.lang-btn');

const copy = {
  en: {
    navAbout: 'About',
    navPortfolio: 'Portfolio',
    navServices: 'Services',
    navContact: 'Contact',
    cinemaKicker: 'BOUTIQUE REAL ESTATE ADVISORY',
    cinemaTitle: 'Exceptional Properties. Timeless Elegance.',
    cinemaIntro: 'Discover curated residences and private opportunities across Spain and Europe, presented with discretion, market intelligence, and personal guidance.',
    explorePortfolio: 'Explore Our Portfolio',
    requestConsultation: 'Request a Consultation',
    signalAccessLabel: 'Private access',
    signalAccessValue: 'Select off-market introductions',
    signalCrossBorderLabel: 'Cross-border support',
    signalCrossBorderValue: 'Spain and Portugal transaction guidance',
    signalClientLabel: 'Client profile',
    signalClientValue: 'Buyers, sellers, and family office advisors',
    heroEyebrow: 'BOUTIQUE REAL ESTATE ADVISORY',
    heroTitle: 'Your Private Search, Designed Around You.',
    heroLead: 'Beaumont & Voss delivers curated real estate guidance for buyers, sellers, and investors seeking distinctive residences across Spain and Europe. Our approach is discreet, personal, and shaped around trusted introductions, local insight, and well-judged opportunities.',
    metricCuratedLabel: 'Curated selection',
    metricCuratedValue: 'Hand-picked homes, second residences, and selective off-market possibilities',
    metricDiscreetLabel: 'Discreet service',
    metricDiscreetValue: 'Private, expert guidance from first brief to final negotiation',
    metricLanguagesLabel: 'English · German · Spanish · Dutch',
    metricLanguagesValue: 'Multilingual advice that keeps international conversations natural and clear',
    tabBuy: 'Buy',
    tabSell: 'Sell',
    tabInvest: 'Invest',
    panelTitle: 'Tell us your brief',
    labelRegion: 'Preferred region',
    optAllRegions: 'All regions',
    optSpain: 'Spain',
    optPortugal: 'Portugal',
    labelStyle: 'Property style',
    optAllStyles: 'All styles',
    optCityApartment: 'City apartment',
    optTownhouse: 'Townhouse',
    optVilla: 'Villa',
    optCountryEstate: 'Country estate',
    optSecondHome: 'Second home',
    labelBudget: 'Guide budget',
    optAllBudgets: 'All budgets',
    searchEstates: 'Search matching estates',
    panelNote: 'We advise clients in English, German, Spanish, and Dutch.',
    advisoryEyebrow: 'THE BEAUMONT & VOSS DIFFERENCE',
    advisoryTitle: 'Luxury Meets Expertise',
    advisoryIntro: 'We combine market knowledge, trusted local relationships, and a refined personal approach to help discerning clients move towards the right property with more confidence and less noise.',
    infoCuratedTitle: 'Curated Selection',
    infoCuratedBody: 'Only carefully chosen properties and introductions that genuinely fit the brief, the lifestyle, and the ambition.',
    infoDiscreetTitle: 'Discreet Service',
    infoDiscreetBody: 'Privacy, professionalism, and personal attention at every step, from early search through to negotiation.',
    infoExpertTitle: 'Expert Guidance',
    infoExpertBody: 'Deep market understanding, strong local contacts, and multilingual support in English, German, Spanish, and Dutch.',
    showcaseEyebrow: 'FEATURED PROPERTIES',
    showcaseTitle: 'Our Portfolio',
    showcasePill: 'Selected Properties',
    showcaseIntro: 'Selected properties and opportunities across Spain and Europe for lifestyle-led and investment-minded buyers.',
    cityTag: 'Salamanca, Spain',
    cityTitle: 'Grand city apartment with historic character',
    cityBody: 'For clients seeking architecture, culture, and refined apartment living in one of Spain\'s timeless settings.',
    cityList1: 'Historic centre atmosphere',
    cityList2: 'Approx. 180-240 m² potential',
    cityList3: 'Guide price: €1.25M',
    stoneTag: 'Candelario, Spain',
    stoneTitle: 'Historic stone residence in the village centre',
    stoneBody: 'A beautifully preserved home for buyers who value heritage architecture, timeless character, and a prime central address.',
    stoneList1: 'Traditional stone facade and period details',
    stoneList2: 'Walkable village-centre address',
    stoneList3: 'Guide price: €890k',
    estateTag: 'Portugal',
    estateTitle: 'Historic estate in perfect condition',
    estateBody: 'A distinguished estate for buyers seeking heritage character, mature grounds, and move-in-ready quality.',
    estateList1: 'Period architecture with refined restoration',
    estateList2: 'Elegant reception rooms and private outdoor terraces',
    estateList3: 'Guide price: €3.2M',
    modernTag: 'Villamayor, Spain',
    modernTitle: 'Contemporary golf-front estate',
    modernBody: 'A striking modern home overlooking the fairways, designed for buyers who value architecture, privacy, and turnkey comfort.',
    modernList1: 'Direct golf-front setting with panoramic greenside views',
    modernList2: 'Clean-lined interiors with premium finishes throughout',
    modernList3: 'Guide price: €1.45M',
    marketsEyebrow: 'WHAT WE LOOK FOR',
    marketsTitle: 'The right opportunity matters more than one fixed geography.',
    market1: 'City residences',
    market2: 'Country estates',
    market3: 'Coastal homes',
    market4: 'Second residences',
    market5: 'Investment opportunities',
    market6: 'Off-market mandates',
    servicesEyebrow: 'SERVICES',
    servicesTitle: 'Tailored Services for Discerning Clients',
    servicesBody: 'From acquisition support to strategic sales representation, Beaumont & Voss is designed to offer calm, highly personal guidance for important property decisions.',
    step1: 'Property Acquisition',
    step2: 'Property Sales',
    step3: 'Consultation & Investment',
    step4: 'Lifestyle Advisory',
    contactEyebrow: 'NEXT STEP',
    contactTitle: 'Your Next Exceptional Property Awaits',
    contactBody: 'Schedule a private consultation or share what you are looking for, and Beaumont & Voss will help shape the next step with discretion, care, and clear advice.',
    bookConsultation: 'Book a Consultation',
    footerBrandCopy: 'Private real estate advisory for discerning buyers, sellers, and investors seeking refined opportunities across Spain and Europe.',
    footerContactTitle: 'Contact',
    footerEmail: 'Email Beaumont & Voss',
    footerLocation: 'Spain / Portugal / Remote',
    footerLinksTitle: 'Links',
    footerPrivateTitle: 'Private Office',
    footerPrivate1: 'By-introduction advisory model',
    footerPrivate2: 'Discreet search and negotiation support',
    footerPrivate3: 'Multilingual communication for international clients',
    footerTagline: 'Boutique Real Estate Advisory'
  },
  es: {
    navAbout: 'Nosotros',
    navPortfolio: 'Cartera',
    navServices: 'Servicios',
    navContact: 'Contacto',
    cinemaKicker: 'ASESORÍA INMOBILIARIA BOUTIQUE',
    cinemaTitle: 'Propiedades excepcionales. Elegancia atemporal.',
    cinemaIntro: 'Descubra residencias seleccionadas y oportunidades privadas en España y Europa, con discreción, criterio de mercado y asesoramiento personal.',
    explorePortfolio: 'Explorar nuestra cartera',
    requestConsultation: 'Solicitar una consulta',
    signalAccessLabel: 'Acceso privado',
    signalAccessValue: 'Introducciones selectas fuera de mercado',
    signalCrossBorderLabel: 'Soporte transfronterizo',
    signalCrossBorderValue: 'Asesoría para operaciones en España y Portugal',
    signalClientLabel: 'Perfil de cliente',
    signalClientValue: 'Compradores, vendedores y asesores de family office',
    heroEyebrow: 'ASESORÍA INMOBILIARIA BOUTIQUE',
    heroTitle: 'Su búsqueda privada, diseñada a su medida.',
    heroLead: 'Beaumont & Voss ofrece asesoramiento inmobiliario para compradores, vendedores e inversores que buscan residencias singulares en España y Europa. Nuestro enfoque es discreto, personal y basado en relaciones de confianza, conocimiento local y oportunidades bien evaluadas.',
    metricCuratedLabel: 'Selección curada',
    metricCuratedValue: 'Viviendas seleccionadas, segundas residencias y oportunidades fuera de mercado',
    metricDiscreetLabel: 'Servicio discreto',
    metricDiscreetValue: 'Acompañamiento privado y experto desde el primer contacto hasta la negociación final',
    metricLanguagesLabel: 'Inglés · Alemán · Español · Neerlandés',
    metricLanguagesValue: 'Asesoría multilingüe para conversaciones internacionales claras y fluidas',
    tabBuy: 'Comprar',
    tabSell: 'Vender',
    tabInvest: 'Invertir',
    panelTitle: 'Cuéntenos su perfil',
    labelRegion: 'Región preferida',
    optAllRegions: 'Todas las regiones',
    optSpain: 'España',
    optPortugal: 'Portugal',
    labelStyle: 'Tipo de propiedad',
    optAllStyles: 'Todos los estilos',
    optCityApartment: 'Piso en ciudad',
    optTownhouse: 'Casa adosada',
    optVilla: 'Villa',
    optCountryEstate: 'Finca',
    optSecondHome: 'Segunda residencia',
    labelBudget: 'Presupuesto orientativo',
    optAllBudgets: 'Todos los presupuestos',
    searchEstates: 'Buscar propiedades afines',
    panelNote: 'Asesoramos en inglés, alemán, español y neerlandés.',
    advisoryEyebrow: 'LA DIFERENCIA BEAUMONT & VOSS',
    advisoryTitle: 'Lujo con experiencia',
    advisoryIntro: 'Combinamos conocimiento de mercado, relaciones locales de confianza y un enfoque personal refinado para ayudar a clientes exigentes a avanzar con más seguridad y menor incertidumbre.',
    infoCuratedTitle: 'Selección curada',
    infoCuratedBody: 'Solo propiedades e introducciones cuidadosamente seleccionadas que encajan de verdad con el perfil, el estilo de vida y la ambición.',
    infoDiscreetTitle: 'Servicio discreto',
    infoDiscreetBody: 'Privacidad, profesionalidad y atención personal en cada etapa, desde la búsqueda inicial hasta la negociación.',
    infoExpertTitle: 'Asesoramiento experto',
    infoExpertBody: 'Conocimiento profundo del mercado, sólida red local y soporte multilingüe en inglés, alemán, español y neerlandés.',
    showcaseEyebrow: 'PROPIEDADES DESTACADAS',
    showcaseTitle: 'Nuestra cartera',
    showcasePill: 'Propiedades seleccionadas',
    showcaseIntro: 'Propiedades y oportunidades seleccionadas en España y Europa para compradores orientados al estilo de vida y la inversión.',
    cityTag: 'Salamanca, España',
    cityTitle: 'Gran piso urbano con carácter histórico',
    cityBody: 'Para clientes que buscan arquitectura, cultura y vida residencial refinada en uno de los entornos más atemporales de España.',
    cityList1: 'Ambiente de centro histórico',
    cityList2: 'Potencial aprox. de 180-240 m²',
    cityList3: 'Precio orientativo: €1.25M',
    stoneTag: 'Candelario, España',
    stoneTitle: 'Residencia histórica de piedra en el centro del pueblo',
    stoneBody: 'Una vivienda bellamente conservada para compradores que valoran la arquitectura patrimonial, el carácter atemporal y una ubicación céntrica.',
    stoneList1: 'Fachada tradicional de piedra y detalles de época',
    stoneList2: 'Dirección céntrica, todo a pie',
    stoneList3: 'Precio orientativo: €890k',
    estateTag: 'Portugal',
    estateTitle: 'Finca histórica en estado impecable',
    estateBody: 'Una finca distinguida para compradores que buscan carácter patrimonial, jardines maduros y llave en mano.',
    estateList1: 'Arquitectura de época con restauración refinada',
    estateList2: 'Elegantes salones y terrazas privadas',
    estateList3: 'Precio orientativo: €3.2M',
    modernTag: 'Villamayor, España',
    modernTitle: 'Finca contemporánea en primera línea de golf',
    modernBody: 'Una vivienda moderna y llamativa con vistas al campo, diseñada para compradores que valoran arquitectura, privacidad y confort llave en mano.',
    modernList1: 'Ubicación directa frente al golf con vistas panorámicas',
    modernList2: 'Interiores de líneas limpias y acabados premium',
    modernList3: 'Precio orientativo: €1.45M',
    marketsEyebrow: 'LO QUE BUSCAMOS',
    marketsTitle: 'La oportunidad adecuada importa más que una geografía fija.',
    market1: 'Residencias urbanas',
    market2: 'Fincas de campo',
    market3: 'Viviendas costeras',
    market4: 'Segundas residencias',
    market5: 'Oportunidades de inversión',
    market6: 'Mandatos fuera de mercado',
    servicesEyebrow: 'SERVICIOS',
    servicesTitle: 'Servicios a medida para clientes exigentes',
    servicesBody: 'Desde apoyo en adquisición hasta representación estratégica en venta, Beaumont & Voss está pensado para ofrecer una orientación serena y altamente personalizada en decisiones inmobiliarias importantes.',
    step1: 'Adquisición de propiedades',
    step2: 'Venta de propiedades',
    step3: 'Consultoría e inversión',
    step4: 'Asesoría de estilo de vida',
    contactEyebrow: 'SIGUIENTE PASO',
    contactTitle: 'Su próxima propiedad excepcional le espera',
    contactBody: 'Reserve una consulta privada o cuéntenos lo que busca, y Beaumont & Voss le ayudará a definir el siguiente paso con discreción, cuidado y criterio.',
    bookConsultation: 'Reservar una consulta',
    footerBrandCopy: 'Asesoría inmobiliaria privada para compradores, vendedores e inversores exigentes que buscan oportunidades refinadas en España y Europa.',
    footerContactTitle: 'Contacto',
    footerEmail: 'Escribir a Beaumont & Voss',
    footerLocation: 'España / Portugal / Remoto',
    footerLinksTitle: 'Enlaces',
    footerPrivateTitle: 'Oficina Privada',
    footerPrivate1: 'Modelo de asesoría por introducción',
    footerPrivate2: 'Búsqueda discreta y apoyo en negociación',
    footerPrivate3: 'Comunicación multilingüe para clientes internacionales',
    footerTagline: 'Asesoría inmobiliaria boutique'
  }
};

const setLanguage = (language) => {
  const selected = language === 'es' ? 'es' : 'en';
  const dictionary = copy[selected];

  document.documentElement.lang = selected;

  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    if (dictionary[key]) {
      element.textContent = dictionary[key];
    }
  });

  langButtons.forEach((button) => {
    button.classList.toggle('is-active', button.dataset.lang === selected);
  });

  window.localStorage.setItem('bv-language', selected);
};

const browserPrefersSpanish = (navigator.languages || [navigator.language || ''])
  .some((value) => value.toLowerCase().startsWith('es'));

const savedLanguage = window.localStorage.getItem('bv-language');
const initialLanguage = savedLanguage || (browserPrefersSpanish ? 'es' : 'en');

if (year) {
  year.textContent = new Date().getFullYear();
}

setLanguage(initialLanguage);

langButtons.forEach((button) => {
  button.addEventListener('click', () => {
    setLanguage(button.dataset.lang);
  });
});

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    tabs.forEach((item) => item.classList.remove('is-active'));
    tab.classList.add('is-active');
  });
});

emailTriggers.forEach((button) => {
  const user = button.dataset.user;
  const domain = button.dataset.domain;
  const subject = button.dataset.subject;

  if (user && domain) {
    const subjectQuery = subject ? `?subject=${encodeURIComponent(subject)}` : '';
    const mailto = `mailto:${user}@${domain}${subjectQuery}`;
    button.setAttribute('href', mailto);

    button.addEventListener('click', () => {
      window.location.href = mailto;
    });
  }
});
