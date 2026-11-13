const menuButton = document.querySelector('.mobile-nav'), mobileMenu = document.querySelector('.mobile-menu');
    const translations = {
      sv: {
        htmlLang: 'sv', top: ['100% naturligt från Finland', 'Premium kvalitet bär', 'Hållbart & ansvarsfullt'], nav: ['Hem', 'Om oss', 'Våra bär', 'Kvalitet', 'Kontakt'], contact: 'Kontakta oss', openMenu: 'Öppna meny', eyebrow: 'Premium kvalitet från Finland', heroCopy: 'Vi erbjuder 100% naturliga och vilda bär av högsta kvalitet. Plockade i de rena skogarna i Finland.', products: 'Våra produkter', badges: ['100%<br>naturligt', 'från<br>Finland', 'hållbart<br>ansvarsfullt'], aboutKicker: 'Om Wild Finnish Berries', aboutTitle: 'Ren natur. Äkta smak.<br>Direkt från Finland.', aboutBody: 'Wildfinnishberries Oy är ett finskt företag som specialiserar sig på partihandel, inköp och försäljning av vilda bär. Vi samarbetar med bärplockare, leverantörer och företagskunder för att erbjuda högkvalitativa finska bär till den nationella och internationella marknaden.', aboutMore: 'Läs mer om oss', quality: [['100% naturligt', 'Inga tillsatser, inga konserveringsmedel.'], ['Premium kvalitet', 'Noggrant utvalda bär av högsta kvalitet.'], ['Från Finland', 'Plockade i de renaste områdena i Finland.'], ['Hållbart', 'Vi värnar om naturen och framtida generationer.']], berriesKicker: 'Våra bär', berriesTitle: 'Vilda bär fulla av smak och näring', berryNames: ['Blåbär', 'Lingon', 'Hjortron', 'Svarta vinbär'], berryDescriptions: ['Söta och smakrika blåbär fyllda med antioxidanter och vitaminer.', 'Syrliga och friska lingon. Perfekta för både mat och dryck.', 'Exklusiva och sällsynta hjortron med unik smak.', 'Aromatiska och rika på C-vitamin. Perfekta för juicer och desserter.'], seasons: ['Säsong: Juli – September', 'Säsong: Augusti – September', 'Säsong: Juli – Augusti', 'Säsong: Juli – Augusti'], seeAll: 'Se alla produkter', strips: [['Handplockade', 'Plockade för hand med omsorg.'], ['Rena områden', 'De renaste skogarna i Finland.'], ['Snabb frysning', 'För att bevara smak och näring.']], formTitle: 'Skicka meddelande', fields: ['Namn', 'E-post', 'Ämne', 'Meddelande'], formButton: 'Skicka meddelande', formNote: 'Formuläret öppnar ditt e-postprogram och skickar till info@wildfinnishberries.fi.', footerTag: '100% natural from Finland', contactLabels: ['FO-nummer:', 'Öppettider:', 'Tel:', 'Plats:', 'E-post:'], copyright: '© 2026 Wildfinnishberries Oy. Alla rättigheter förbehållna.', policies: 'Integritetspolicy    Villkor', mailName: 'Namn', mailEmail: 'E-post', alts: ['Finska blåbär', 'Finska lingon', 'Finska hjortron', 'Finska svarta vinbär']
      },
      fi: {
        htmlLang: 'fi', top: ['100% luonnollista Suomesta', 'Ensiluokkaisia marjoja', 'Kestävästi ja vastuullisesti'], nav: ['Etusivu', 'Meistä', 'Marjamme', 'Laatu', 'Yhteystiedot'], contact: 'Ota yhteyttä', openMenu: 'Avaa valikko', eyebrow: 'Ensiluokkaista laatua Suomesta', heroCopy: 'Tarjoamme 100 % luonnollisia, luonnonvaraisia marjoja korkeimmalla laadulla. Poimittu Suomen puhtaista metsistä.', products: 'Tuotteemme', badges: ['100%<br>luonnollista', 'Suomesta', 'kestävästi<br>vastuullisesti'], aboutKicker: 'Tietoa Wild Finnish Berriesistä', aboutTitle: 'Puhdasta luontoa. Aitoa makua.<br>Suoraan Suomesta.', aboutBody: 'Wildfinnishberries Oy on suomalainen yritys, joka on erikoistunut luonnonmarjojen tukkukauppaan, hankintaan ja myyntiin. Teemme yhteistyötä poimijoiden, toimittajien ja yritysasiakkaiden kanssa tarjotaksemme korkealaatuisia suomalaisia marjoja kotimaisille ja kansainvälisille markkinoille.', aboutMore: 'Lue lisää meistä', quality: [['100% luonnollista', 'Ei lisäaineita eikä säilöntäaineita.'], ['Ensiluokkaista laatua', 'Huolella valitut marjat korkeimmalla laadulla.'], ['Suomesta', 'Poimittu Suomen puhtaimmilta alueilta.'], ['Kestävästi', 'Kunnioitamme luontoa ja tulevia sukupolvia.']], berriesKicker: 'Marjamme', berriesTitle: 'Luonnonmarjoja täynnä makua ja ravintoa', berryNames: ['Mustikka', 'Puolukka', 'Lakka', 'Mustaherukka'], berryDescriptions: ['Makeita ja maukkaita mustikoita, täynnä antioksidantteja ja vitamiineja.', 'Raikkaita ja kirpeitä puolukoita. Täydellisiä ruokaan ja juomaan.', 'Arvokkaita ja harvinaisia lakkoja, joissa on ainutlaatuinen maku.', 'Aromaattisia, C-vitamiinipitoisia mustaherukoita. Erinomaisia mehuihin ja jälkiruokiin.'], seasons: ['Kausi: Heinäkuu – Syyskuu', 'Kausi: Elokuu – Syyskuu', 'Kausi: Heinäkuu – Elokuu', 'Kausi: Heinäkuu – Elokuu'], seeAll: 'Katso kaikki tuotteet', strips: [['Käsin poimittuja', 'Poimittu käsin huolella.'], ['Puhtaat alueet', 'Suomen puhtaimmista metsistä.'], ['Nopea pakastus', 'Säilyttää maun ja ravintoaineet.']], formTitle: 'Lähetä viesti', fields: ['Nimi', 'Sähköposti', 'Aihe', 'Viesti'], formButton: 'Lähetä viesti', formNote: 'Lomake avaa sähköpostiohjelmasi ja lähettää viestin osoitteeseen info@wildfinnishberries.fi.', footerTag: '100% natural from Finland', contactLabels: ['Y-tunnus:', 'Aukioloajat:', 'Puh:', 'Sijainti:', 'Sähköposti:'], copyright: '© 2026 Wildfinnishberries Oy. Kaikki oikeudet pidätetään.', policies: 'Tietosuojaseloste    Käyttöehdot', mailName: 'Nimi', mailEmail: 'Sähköposti', alts: ['Suomalaisia mustikoita', 'Suomalaisia puolukoita', 'Suomalaisia lakkoja', 'Suomalaisia mustaherukoita']
      },
      en: {
        htmlLang: 'en', top: ['100% natural from Finland', 'Premium quality berries', 'Sustainable & responsible'], nav: ['Home', 'About us', 'Our berries', 'Quality', 'Contact'], contact: 'Contact us', openMenu: 'Open menu', eyebrow: 'Premium quality from Finland', heroCopy: 'We offer 100% natural wild berries of the highest quality, hand-picked in Finland’s clean forests.', products: 'Our products', badges: ['100%<br>natural', 'from<br>Finland', 'sustainable<br>& responsible'], aboutKicker: 'About Wild Finnish Berries', aboutTitle: 'Pure nature. True taste.<br>Directly from Finland.', aboutBody: 'Wildfinnishberries Oy is a Finnish company specialising in the wholesale, sourcing and sale of wild berries. We work with berry pickers, suppliers and business customers to offer high-quality Finnish berries to domestic and international markets.', aboutMore: 'Read more about us', quality: [['100% natural', 'No additives, no preservatives.'], ['Premium quality', 'Carefully selected berries of the highest quality.'], ['From Finland', 'Picked in Finland’s purest regions.'], ['Sustainable', 'We care for nature and future generations.']], berriesKicker: 'Our berries', berriesTitle: 'Wild berries full of flavour and nourishment', berryNames: ['Blueberries', 'Lingonberries', 'Cloudberries', 'Blackcurrants'], berryDescriptions: ['Sweet, flavourful blueberries packed with antioxidants and vitamins.', 'Fresh, tangy lingonberries, perfect for food and drinks.', 'Exclusive, rare cloudberries with a distinctive taste.', 'Aromatic, vitamin C-rich blackcurrants, perfect for juices and desserts.'], seasons: ['Season: July – September', 'Season: August – September', 'Season: July – August', 'Season: July – August'], seeAll: 'See all products', strips: [['Hand-picked', 'Picked by hand with care.'], ['Pure regions', 'From Finland’s cleanest forests.'], ['Quick freezing', 'Preserves flavour and nutrients.']], formTitle: 'Send a message', fields: ['Name', 'Email', 'Subject', 'Message'], formButton: 'Send message', formNote: 'The form opens your email app and sends to info@wildfinnishberries.fi.', footerTag: '100% natural from Finland', contactLabels: ['Business ID:', 'Opening hours:', 'Tel:', 'Location:', 'Email:'], copyright: '© 2026 Wildfinnishberries Oy. All rights reserved.', policies: 'Privacy policy    Terms', mailName: 'Name', mailEmail: 'Email', alts: ['Finnish blueberries', 'Finnish lingonberries', 'Finnish cloudberries', 'Finnish blackcurrants']
      }
    };
    const languageFlags = { sv: 'assets/flag-se.png', fi: 'assets/flag-fi.png', en: 'assets/flag-gb.png' };
    const setText = (selector, value, html = false) => { const node = document.querySelector(selector); if (node) html ? node.innerHTML = value : node.textContent = value; };
    const applyLanguage = language => {
      const t = translations[language] || translations.sv;
      document.documentElement.lang = t.htmlLang;
      document.querySelectorAll('.topbar span').forEach((node, index) => node.textContent = t.top[index]);
      document.querySelectorAll('.nav-links a, .mobile-menu a').forEach((node, index) => node.textContent = t.nav[index % t.nav.length]);
      document.querySelector('.nav-links').setAttribute('aria-label', t.htmlLang === 'en' ? 'Main menu' : t.htmlLang === 'fi' ? 'Päävalikko' : 'Huvudmeny');
      menuButton.setAttribute('aria-label', t.openMenu);

      setText('.eyebrow', t.eyebrow); setText('.hero-copy', t.heroCopy); setText('.hero .gold-btn', `${t.products} <span>→</span>`, true);
      document.querySelectorAll('.hero-badge').forEach((node, index) => { node.setAttribute('aria-label', t.badges[index].replace('<br>', ' ')); node.querySelector('.badge-label').innerHTML = t.badges[index]; });
      setText('.intro .kicker', t.aboutKicker); setText('.intro .h2', t.aboutTitle, true); setText('.intro .body-copy', t.aboutBody); setText('.intro .outline-btn', `${t.aboutMore} <span>→</span>`, true);
      document.querySelectorAll('.quality').forEach((node, index) => { node.querySelector('h3').textContent = t.quality[index][0]; node.querySelector('p').textContent = t.quality[index][1]; });
      setText('.products .kicker', t.berriesKicker); setText('.products .h2', t.berriesTitle);
      document.querySelectorAll('.product').forEach((node, index) => { node.querySelector('img').alt = t.alts[index]; node.querySelector('h3').textContent = t.berryNames[index]; node.querySelector('p').textContent = t.berryDescriptions[index]; node.querySelector('.season').textContent = t.seasons[index]; });
      setText('.products .gold-btn', `${t.seeAll} <span>→</span>`, true);
      document.querySelectorAll('.strip').forEach((node, index) => { node.querySelector('strong').textContent = t.strips[index][0]; node.querySelector('small').textContent = t.strips[index][1]; });
      setText('.contact > .container h3', t.contact);
      const contactLabels = document.querySelectorAll('.contact-list .contact-label');
      contactLabels.forEach((label, index) => label.textContent = t.contactLabels[index]);
      setText('.footer-logo p', t.footerTag);
      setText('#contact-form h3', t.formTitle); document.querySelectorAll('#contact-form input, #contact-form textarea').forEach((node, index) => { node.placeholder = t.fields[index]; node.setAttribute('aria-label', t.fields[index]); });
      setText('#contact-form button', t.formButton); setText('.form-note', t.formNote); const copyright = document.querySelectorAll('.copyright span'); copyright[0].textContent = t.copyright; copyright[1].textContent = t.policies;
      document.querySelectorAll('.language-trigger').forEach(button => {
        button.querySelector('.language-code').textContent = language.toUpperCase();
        button.querySelector('.language-flag').src = languageFlags[language];
      });
      document.querySelectorAll('.language-option').forEach(button => button.setAttribute('aria-current', String(button.dataset.language === language)));
      try { window.localStorage.setItem('wild-finnish-berries-language', t.htmlLang); } catch {}
      document.dispatchEvent(new CustomEvent('languagechange', { detail: t.htmlLang }));
    };
    let initialLanguage = 'sv';
    try { initialLanguage = window.localStorage.getItem('wild-finnish-berries-language') || 'sv'; } catch {}
    if (!translations[initialLanguage]) initialLanguage = 'sv';
    applyLanguage(initialLanguage);
    document.querySelectorAll('.language-trigger').forEach(trigger => trigger.addEventListener('click', event => {
      event.stopPropagation();
      const picker = trigger.closest('.language-picker');
      document.querySelectorAll('.language-picker').forEach(item => { if (item !== picker) { item.classList.remove('open'); item.querySelector('.language-trigger').setAttribute('aria-expanded', 'false'); } });
      const open = picker.classList.toggle('open'); trigger.setAttribute('aria-expanded', String(open));
    }));
    document.querySelectorAll('.language-option').forEach(option => option.addEventListener('click', () => {
      applyLanguage(option.dataset.language);
      document.querySelectorAll('.language-picker').forEach(picker => { picker.classList.remove('open'); picker.querySelector('.language-trigger').setAttribute('aria-expanded', 'false'); });
    }));
    document.addEventListener('click', () => document.querySelectorAll('.language-picker').forEach(picker => { picker.classList.remove('open'); picker.querySelector('.language-trigger').setAttribute('aria-expanded', 'false'); }));
    menuButton.addEventListener('click', () => { const open = mobileMenu.classList.toggle('open'); menuButton.setAttribute('aria-expanded', open); menuButton.textContent = open ? '×' : '☰' });
    document.querySelectorAll('.mobile-menu a').forEach(link => link.addEventListener('click', () => { mobileMenu.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); menuButton.textContent = '☰' }));
    document.querySelector('#contact-form').addEventListener('submit', event => { event.preventDefault(); const f = new FormData(event.currentTarget), t = translations[document.documentElement.lang] || translations.sv, subject = encodeURIComponent(f.get('subject')), body = encodeURIComponent(`${t.mailName}: ${f.get('name')}\n${t.mailEmail}: ${f.get('email')}\n\n${f.get('message')}`); window.location.href = `mailto:info@wildfinnishberries.fi?subject=${subject}&body=${body}` });

    document.addEventListener('keydown', event => {
      if (event.key !== 'Escape') return;
      document.querySelectorAll('.language-picker.open').forEach(picker => {
        picker.classList.remove('open');
        picker.querySelector('.language-trigger').setAttribute('aria-expanded', 'false');
        picker.querySelector('.language-trigger').focus();
      });
      if (mobileMenu.classList.contains('open')) {
        mobileMenu.classList.remove('open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.textContent = '☰';
        menuButton.focus();
      }
    });
