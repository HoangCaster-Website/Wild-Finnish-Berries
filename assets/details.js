// Additional page content shares the language selected on the landing page.
const detailTranslations = {
  sv: {
    back: '← Till startsidan', aboutTitle: 'Om Wild Finnish Berries',
    aboutLead: 'Finska bär för bärplockare, leverantörer och företagskunder.',
    storyTitle: 'Från Finland till din verksamhet',
    storyBody: 'Wildfinnishberries Oy är ett finskt företag som specialiserar sig på partihandel, inköp och försäljning av vilda bär.',
    storyPartners: 'Vi samarbetar med bärplockare, leverantörer och företagskunder för att erbjuda högkvalitativa finska bär till den nationella och internationella marknaden.',
    explore: 'Upptäck våra produkter →', companyLabel: 'Företag', businessLabel: 'FO-nummer', locationLabel: 'Plats',
    qualityTitle: 'Vårt sätt att arbeta', enquiry: 'Kontakta oss →',
    enquiryBody: 'Kontakta oss om dina produktbehov, önskad mängd och leverans. Vi hjälper dig med din förfrågan.',
    productsTitle: 'Alla våra produkter', productsLead: 'Upptäck vårt sortiment av finska bär för livsmedel, drycker och professionella kök.',
    useLabel: 'Användningsområden', use0: 'Bakverk, smoothies, desserter och frukostprodukter.', use1: 'Såser, sylt, drycker och tillbehör till mat.',
    use2: 'Desserter, sylt och specialprodukter.', use3: 'Juicer, sylt och desserter.',
    productEnquiry: 'Fråga om produkten →', subject: 'Produktförfrågan: ',
    availabilityTitle: 'Låt oss prata om dina behov', availabilityBody: 'Kontakta oss för aktuell tillgång, mängder, förpackning och leverans. Säsongerna ovan anger plockningstider; tillgången bekräftas vid förfrågan.',
    titles: { about: 'Om oss', products: 'Alla produkter' }, storyAlt: 'Finska bär i skogen'
  },
  fi: {
    back: '← Takaisin etusivulle', aboutTitle: 'Tietoa Wild Finnish Berriesistä',
    aboutLead: 'Suomalaisia marjoja poimijoille, toimittajille ja yritysasiakkaille.',
    storyTitle: 'Suomesta yrityksesi tarpeisiin',
    storyBody: 'Wildfinnishberries Oy on suomalainen yritys, joka on erikoistunut luonnonmarjojen tukkukauppaan, hankintaan ja myyntiin.',
    storyPartners: 'Teemme yhteistyötä poimijoiden, toimittajien ja yritysasiakkaiden kanssa tarjotaksemme korkealaatuisia suomalaisia marjoja kotimaisille ja kansainvälisille markkinoille.',
    explore: 'Tutustu tuotteisiimme →', companyLabel: 'Yritys', businessLabel: 'Y-tunnus', locationLabel: 'Sijainti',
    qualityTitle: 'Tapamme toimia', enquiry: 'Ota yhteyttä →',
    enquiryBody: 'Kerro meille tarvitsemistasi tuotteista, määrästä ja toimituksesta. Autamme sinua tiedustelussasi.',
    productsTitle: 'Kaikki tuotteemme', productsLead: 'Tutustu suomalaiseen marjavalikoimaamme elintarvikkeisiin, juomiin ja ammattikeittiöihin.',
    useLabel: 'Käyttökohteet', use0: 'Leivonnaiset, smoothiet, jälkiruoat ja aamiaistuotteet.', use1: 'Kastikkeet, hillot, juomat ja lisukkeet.',
    use2: 'Jälkiruoat, hillot ja erikoistuotteet.', use3: 'Mehut, hillot ja jälkiruoat.',
    productEnquiry: 'Kysy tuotteesta →', subject: 'Tuotetiedustelu: ',
    availabilityTitle: 'Kerro meille tarpeistasi', availabilityBody: 'Ota yhteyttä ajankohtaisesta saatavuudesta, määristä, pakkauksista ja toimituksesta. Yllä olevat kaudet ovat poiminta-aikoja; saatavuus vahvistetaan tiedustelun yhteydessä.',
    titles: { about: 'Meistä', products: 'Kaikki tuotteet' }, storyAlt: 'Suomalaisia metsämarjoja'
  },
  en: {
    back: '← Back to home', aboutTitle: 'About Wild Finnish Berries',
    aboutLead: 'Finnish berries for berry pickers, suppliers and business customers.',
    storyTitle: 'From Finland to your business',
    storyBody: 'Wildfinnishberries Oy is a Finnish company specialising in the wholesale, sourcing and sale of wild berries.',
    storyPartners: 'We work with berry pickers, suppliers and business customers to offer high-quality Finnish berries to domestic and international markets.',
    explore: 'Explore our products →', companyLabel: 'Company', businessLabel: 'Business ID', locationLabel: 'Location',
    qualityTitle: 'How we work', enquiry: 'Contact us →',
    enquiryBody: 'Tell us about the products, quantities and delivery you need. We will help you with your enquiry.',
    productsTitle: 'All our products', productsLead: 'Explore our Finnish berry range for food, drinks and professional kitchens.',
    useLabel: 'Suggested uses', use0: 'Baking, smoothies, desserts and breakfast products.', use1: 'Sauces, preserves, drinks and accompaniments.',
    use2: 'Desserts, preserves and speciality products.', use3: 'Juices, preserves and desserts.',
    productEnquiry: 'Enquire about this berry →', subject: 'Product enquiry: ',
    availabilityTitle: 'Let’s talk about your needs', availabilityBody: 'Contact us for current availability, quantities, packaging and delivery. The seasons above indicate harvest periods; availability is confirmed when you enquire.',
    titles: { about: 'About us', products: 'All products' }, storyAlt: 'Finnish berries in the forest'
  }
};

let selectedProduct = null;
function applyDetailLanguage(language) {
  const t = detailTranslations[language] || detailTranslations.sv;
  document.querySelectorAll('[data-detail]').forEach(node => {
    if (t[node.dataset.detail]) node.textContent = t[node.dataset.detail];
  });
  document.querySelectorAll('[data-product]').forEach(link => {
    link.textContent = t.productEnquiry;
    link.setAttribute('aria-label', `${t.productEnquiry.replace(' →', '')}: ${translations[language].berryNames[Number(link.dataset.product)]}`);
  });
  const page = document.querySelector('main').dataset.page;
  if (page) document.title = `${t.titles[page]} | Wild Finnish Berries`;
  const image = document.querySelector('.about-story img');
  if (image) image.alt = t.storyAlt;
  if (selectedProduct !== null) {
    document.querySelector('[name="subject"]').value = t.subject + translations[language].berryNames[selectedProduct];
  }
}
document.addEventListener('languagechange', event => applyDetailLanguage(event.detail));
applyDetailLanguage(document.documentElement.lang);
document.querySelectorAll('[data-product]').forEach(link => link.addEventListener('click', () => {
  selectedProduct = Number(link.dataset.product);
  applyDetailLanguage(document.documentElement.lang);
  document.querySelector('[name="name"]').focus({ preventScroll: true });
}));
