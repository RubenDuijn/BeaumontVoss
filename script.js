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
    showcasePill: 'Illustrative portfolio',
    showcaseIntro: 'Illustrative examples of the kind of opportunities Beaumont & Voss can present for lifestyle-led and investment-minded buyers.',
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
    contactNote: 'Private contact details are shared after you click.',
    footerBrandCopy: 'Private real estate advisory for discerning buyers, sellers, and investors seeking refined opportunities across Spain and Europe.',
    footerContactTitle: 'Contact',
    footerEmail: 'Email Beaumont & Voss',
    footerCall: 'Call Beaumont & Voss',
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
    cinemaKicker: 'ASESORIA INMOBILIARIA BOUTIQUE',
    cinemaTitle: 'Propiedades excepcionales. Elegancia atemporal.',
    cinemaIntro: 'Descubra residencias seleccionadas y oportunidades privadas en Espana y Europa, con discrecion, criterio de mercado y asesoramiento personal.',
    explorePortfolio: 'Explorar nuestra cartera',
    requestConsultation: 'Solicitar una consulta',
    signalAccessLabel: 'Acceso privado',
    signalAccessValue: 'Introducciones selectas fuera de mercado',
    signalCrossBorderLabel: 'Soporte transfronterizo',
    signalCrossBorderValue: 'Asesoria para operaciones en Espana y Portugal',
    signalClientLabel: 'Perfil de cliente',
    signalClientValue: 'Compradores, vendedores y asesores de family office',
    heroEyebrow: 'ASESORIA INMOBILIARIA BOUTIQUE',
    heroTitle: 'Su busqueda privada, disenada a su medida.',
    heroLead: 'Beaumont & Voss ofrece asesoramiento inmobiliario curado para compradores, vendedores e inversores que buscan residencias singulares en Espana y Europa. Nuestro enfoque es discreto, personal y basado en relaciones de confianza, conocimiento local y oportunidades bien evaluadas.',
    metricCuratedLabel: 'Seleccion curada',
    metricCuratedValue: 'Viviendas seleccionadas, segundas residencias y oportunidades fuera de mercado',
    metricDiscreetLabel: 'Servicio discreto',
    metricDiscreetValue: 'Acompanamiento privado y experto desde el briefing hasta la negociacion final',
    metricLanguagesLabel: 'Ingles · Aleman · Espanol · Neerlandes',
    metricLanguagesValue: 'Asesoria multilingue para conversaciones internacionales claras y fluidas',
    tabBuy: 'Comprar',
    tabSell: 'Vender',
    tabInvest: 'Invertir',
    panelTitle: 'Cuentenos su perfil',
    labelRegion: 'Region preferida',
    optAllRegions: 'Todas las regiones',
    optSpain: 'Espana',
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
    panelNote: 'Asesoramos en ingles, aleman, espanol y neerlandes.',
    advisoryEyebrow: 'LA DIFERENCIA BEAUMONT & VOSS',
    advisoryTitle: 'Lujo con experiencia',
    advisoryIntro: 'Combinamos conocimiento de mercado, relaciones locales de confianza y un enfoque personal refinado para ayudar a clientes exigentes a avanzar con mas seguridad y menos ruido.',
    infoCuratedTitle: 'Seleccion curada',
    infoCuratedBody: 'Solo propiedades e introducciones cuidadosamente seleccionadas que encajan de verdad con el perfil, el estilo de vida y la ambicion.',
    infoDiscreetTitle: 'Servicio discreto',
    infoDiscreetBody: 'Privacidad, profesionalidad y atencion personal en cada etapa, desde la busqueda inicial hasta la negociacion.',
    infoExpertTitle: 'Asesoramiento experto',
    infoExpertBody: 'Conocimiento profundo del mercado, solida red local y soporte multilingue en ingles, aleman, espanol y neerlandes.',
    showcaseEyebrow: 'PROPIEDADES DESTACADAS',
    showcaseTitle: 'Nuestra cartera',
    showcasePill: 'Cartera ilustrativa',
    showcaseIntro: 'Ejemplos ilustrativos del tipo de oportunidades que Beaumont & Voss puede presentar a compradores orientados al estilo de vida y la inversion.',
    cityTag: 'Salamanca, Espana',
    cityTitle: 'Gran piso urbano con caracter historico',
    cityBody: 'Para clientes que buscan arquitectura, cultura y vida residencial refinada en uno de los entornos mas atemporales de Espana.',
    cityList1: 'Ambiente de centro historico',
    cityList2: 'Potencial aprox. de 180-240 m²',
    cityList3: 'Precio orientativo: €1.25M',
    stoneTag: 'Candelario, Espana',
    stoneTitle: 'Residencia historica de piedra en el centro del pueblo',
    stoneBody: 'Una vivienda bellamente conservada para compradores que valoran la arquitectura patrimonial, el caracter atemporal y una ubicacion centrica.',
    stoneList1: 'Fachada tradicional de piedra y detalles de epoca',
    stoneList2: 'Direccion centrica y caminable',
    stoneList3: 'Precio orientativo: €890k',
    estateTag: 'Portugal',
    estateTitle: 'Finca historica en estado impecable',
    estateBody: 'Una finca distinguida para compradores que buscan caracter patrimonial, jardines maduros y calidad lista para entrar.',
    estateList1: 'Arquitectura de epoca con restauracion refinada',
    estateList2: 'Elegantes salones y terrazas privadas',
    estateList3: 'Precio orientativo: €3.2M',
    modernTag: 'Villamayor, Espana',
    modernTitle: 'Finca contemporanea en primera linea de golf',
    modernBody: 'Una vivienda moderna y llamativa con vistas al campo, disenada para compradores que valoran arquitectura, privacidad y confort llave en mano.',
    modernList1: 'Ubicacion directa frente al golf con vistas panoramicas',
    modernList2: 'Interiores de lineas limpias y acabados premium',
    modernList3: 'Precio orientativo: €1.45M',
    marketsEyebrow: 'LO QUE BUSCAMOS',
    marketsTitle: 'La oportunidad adecuada importa mas que una geografia fija.',
    market1: 'Residencias urbanas',
    market2: 'Fincas de campo',
    market3: 'Viviendas costeras',
    market4: 'Segundas residencias',
    market5: 'Oportunidades de inversion',
    market6: 'Mandatos fuera de mercado',
    servicesEyebrow: 'SERVICIOS',
    servicesTitle: 'Servicios a medida para clientes exigentes',
    servicesBody: 'Desde apoyo en adquisicion hasta representacion estrategica en venta, Beaumont & Voss esta pensado para ofrecer una orientacion serena y altamente personalizada en decisiones inmobiliarias importantes.',
    step1: 'Adquisicion de propiedades',
    step2: 'Venta de propiedades',
    step3: 'Consultoria e inversion',
    step4: 'Asesoria de estilo de vida',
    contactEyebrow: 'SIGUIENTE PASO',
    contactTitle: 'Su proxima propiedad excepcional le espera',
    contactBody: 'Agende una consulta privada o comparta lo que busca y Beaumont & Voss le ayudara a definir el siguiente paso con discrecion, cuidado y criterio.',
    bookConsultation: 'Reservar una consulta',
    contactNote: 'Los datos de contacto privados se comparten tras hacer clic.',
    footerBrandCopy: 'Asesoria inmobiliaria privada para compradores, vendedores e inversores exigentes que buscan oportunidades refinadas en Espana y Europa.',
    footerContactTitle: 'Contacto',
    footerEmail: 'Escribir a Beaumont & Voss',
    footerCall: 'Llamar a Beaumont & Voss',
    footerLocation: 'Espana / Portugal / Remoto',
    footerLinksTitle: 'Enlaces',
    footerPrivateTitle: 'Oficina Privada',
    footerPrivate1: 'Modelo de asesoria por introduccion',
    footerPrivate2: 'Busqueda discreta y apoyo en negociacion',
    footerPrivate3: 'Comunicacion multilingue para clientes internacionales',
    footerTagline: 'Asesoria inmobiliaria boutique'
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

  if (user && domain) {
    const mailto = `mailto:${user}@${domain}`;
    button.setAttribute('href', mailto);

    button.addEventListener('click', () => {
      window.location.href = mailto;
    });
  }
});
