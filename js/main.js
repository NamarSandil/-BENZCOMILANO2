/* BENZCO MILANO — language switching, header, hero effects */
(function () {
  'use strict';

  var I18N = {
    ar: {
      title: 'BENZCO MILANO — أناقة إيطالية منذ 2007',
      description: 'BENZCO MILANO — دار أزياء فاخرة تجمع بين الحرفية الميلانية وروح العصر منذ عام 2007.',
      announce: 'تم تغيير اللغة إلى العربية',
      skip: 'تخطَّ إلى المحتوى',
      navLabel: 'القائمة الرئيسية',
      langLabel: 'اختيار اللغة',
      menuOpen: 'فتح القائمة',
      menuClose: 'إغلاق القائمة',
      navHome: 'الرئيسية',
      navCollections: 'المجموعات',
      navNew: 'وصل حديثاً',
      navAbout: 'عن الدار',
      navContact: 'تواصل معنا',
      eyebrow: 'مجموعة خريف وشتاء 2026',
      tagline: 'أناقة إيطالية تُروى في كل تفصيلة',
      sub: 'منذ عام 2007 نصمّم قطعاً خالدة تجمع بين الحرفية الميلانية وروح العصر.',
      ctaPrimary: 'اكتشف المجموعة',
      ctaSecondary: 'قصتنا',
      scroll: 'مرّر للأسفل'
    },
    en: {
      title: 'BENZCO MILANO — Italian Elegance Since 2007',
      description: 'BENZCO MILANO — a luxury fashion house uniting Milanese craftsmanship with a modern spirit since 2007.',
      announce: 'Language changed to English',
      skip: 'Skip to content',
      navLabel: 'Main navigation',
      langLabel: 'Choose language',
      menuOpen: 'Open menu',
      menuClose: 'Close menu',
      navHome: 'Home',
      navCollections: 'Collections',
      navNew: 'New In',
      navAbout: 'The House',
      navContact: 'Contact',
      eyebrow: 'Autumn / Winter 2026 Collection',
      tagline: 'Italian elegance, told in every detail',
      sub: 'Since 2007, we have crafted timeless pieces that unite Milanese craftsmanship with a modern spirit.',
      ctaPrimary: 'Discover the collection',
      ctaSecondary: 'Our story',
      scroll: 'Scroll'
    },
    sv: {
      title: 'BENZCO MILANO — Italiensk elegans sedan 2007',
      description: 'BENZCO MILANO — ett exklusivt modehus som förenar milanesiskt hantverk med en modern anda sedan 2007.',
      announce: 'Språket har ändrats till svenska',
      skip: 'Hoppa till innehållet',
      navLabel: 'Huvudmeny',
      langLabel: 'Välj språk',
      menuOpen: 'Öppna menyn',
      menuClose: 'Stäng menyn',
      navHome: 'Hem',
      navCollections: 'Kollektioner',
      navNew: 'Nyheter',
      navAbout: 'Om oss',
      navContact: 'Kontakt',
      eyebrow: 'Kollektion höst / vinter 2026',
      tagline: 'Italiensk elegans i varje detalj',
      sub: 'Sedan 2007 skapar vi tidlösa plagg som förenar milanesiskt hantverk med en modern anda.',
      ctaPrimary: 'Upptäck kollektionen',
      ctaSecondary: 'Vår historia',
      scroll: 'Scrolla'
    }
  };

  // strings for the content, sidebar and footer sections
  var MORE = {
    ar: {
      colEyebrow: 'المجموعات',
      colTitle: 'عالمٌ من الأناقة المصنوعة بإتقان',
      colIntro: 'من البدلات المفصّلة إلى الإكسسوارات الدقيقة، تحمل كل قطعة في مجموعاتنا توقيع الدار.',
      catAll: 'الكل', catWomen: 'المرأة', catMen: 'الرجل', catBags: 'الحقائب', catShoes: 'الأحذية', catAcc: 'الإكسسوارات',
      catWomenDesc: 'فساتين سهرة وتصاميم يومية راقية',
      catMenDesc: 'بدلات مفصّلة وسترات كلاسيكية',
      catBagsDesc: 'حقائب يد وسهرة بخطوط أنيقة',
      catShoesDesc: 'صُنعت لخطوة واثقة',
      catAccDesc: 'أوشحة وخواتم وتفاصيل تكمل إطلالتك',
      explore: 'استكشف',
      featCraft: 'حرفية إيطالية', featCraftText: 'كل قطعة تُنفَّذ بأيدٍ خبيرة وعناية بأدق التفاصيل.',
      featMaterial: 'خامات فاخرة', featMaterialText: 'أقمشة وجلود مختارة بعناية لتدوم وتبقى أنيقة.',
      featTimeless: 'تصاميم خالدة', featTimelessText: 'قصّات كلاسيكية بلمسة معاصرة تتجاوز المواسم.',
      featService: 'خدمة شخصية', featServiceText: 'نرافقك في اختيار ما يناسب ذوقك ومقاسك.',

      newEyebrow: 'وصل حديثاً',
      newTitle: 'أحدث القطع من الدار',
      sideLabel: 'الشريط الجانبي',
      filtersToggle: 'البحث والتصفية',
      searchLabel: 'ابحث في المنتجات',
      searchPh: 'ابحث عن فستان، بدلة، حقيبة…',
      sideCategories: 'التصنيفات', sideColor: 'اللون', sidePrice: 'السعر', priceUpTo: 'حتى',
      resetFilters: 'إعادة الضبط',
      noResults: 'لا توجد منتجات مطابقة. جرّب تعديل البحث أو الفلاتر.',
      sideJournal: 'أحدث المقالات',
      art1: 'كيف تختار البدلة المناسبة لقوامك',
      art2: 'دليل العناية بالجلد الفاخر',
      art3: 'ألوان خريف 2026 من ميلانو',
      promoEyebrow: 'المجموعة الجديدة', promoTitle: 'خريف وشتاء 2026',
      promoText: 'اكتشف قصّات الموسم الجديد وألوانه.', promoCta: 'تسوّق الآن',
      newsTitle: 'النشرة البريدية',
      newsText: 'كن أول من يعرف بالمجموعات الجديدة والدعوات الخاصة.',
      newsEmail: 'بريدك الإلكتروني', newsSubmit: 'اشترك',
      newsOk: 'شكراً لاشتراكك.', newsErr: 'يرجى إدخال بريد إلكتروني صحيح.',
      newsNote: 'يمكنك إلغاء الاشتراك في أي وقت.',
      badgeNew: 'جديد',
      colBlack: 'أسود', colPlum: 'برقوقي', colChampagne: 'شمبانيا', colCognac: 'كونياك', colIvory: 'عاجي', colGold: 'ذهبي', colNavy: 'كحلي',
      p1: 'فستان سهرة من الحرير', p2: 'فستان ميدي ملفوف', p3: 'بدلة صوف مفصّلة', p4: 'سترة بأزرار مزدوجة',
      p5: 'حقيبة يد جلدية', p6: 'حذاء ساتان بكعب عالٍ', p7: 'خاتم بشعار الدار', p8: 'وشاح من الكشمير',

      footAbout: 'دار أزياء فاخرة تأسست عام 2007، تجمع بين الحرفية الميلانية وروح العصر.',
      footFollow: 'تابعنا', footLinks: 'روابط سريعة', footCare: 'خدمة العملاء', footLegal: 'قانوني', footContact: 'تواصل معنا',
      careShipping: 'الشحن والتوصيل', careReturns: 'الإرجاع والاستبدال', careSize: 'دليل المقاسات', careFaq: 'الأسئلة الشائعة',
      legalPrivacy: 'سياسة الخصوصية', legalTerms: 'الشروط والأحكام', legalCookies: 'سياسة ملفات الارتباط',
      contactAddress: 'ميلانو، إيطاليا',
      copyright: 'جميع الحقوق محفوظة.', backTop: 'العودة للأعلى'
    },
    en: {
      colEyebrow: 'The Collections',
      colTitle: 'A world of elegance, crafted with care',
      colIntro: 'From tailored suits to refined accessories, every piece in our collections carries the signature of the house.',
      catAll: 'All', catWomen: 'Women', catMen: 'Men', catBags: 'Bags', catShoes: 'Shoes', catAcc: 'Accessories',
      catWomenDesc: 'Evening gowns & refined everyday wear',
      catMenDesc: 'Tailored suits & classic blazers',
      catBagsDesc: 'Handbags & evening bags with elegant lines',
      catShoesDesc: 'Made for a confident step',
      catAccDesc: 'Scarves, rings & finishing touches',
      explore: 'Explore',
      featCraft: 'Italian craftsmanship', featCraftText: 'Every piece is finished by skilled hands, down to the smallest detail.',
      featMaterial: 'Premium materials', featMaterialText: 'Carefully chosen fabrics and leathers, made to last.',
      featTimeless: 'Timeless design', featTimelessText: 'Classic cuts with a modern touch that outlast the seasons.',
      featService: 'Personal service', featServiceText: 'We help you choose what suits your style and fit.',

      newEyebrow: 'New In',
      newTitle: 'The latest from the house',
      sideLabel: 'Sidebar',
      filtersToggle: 'Search & filter',
      searchLabel: 'Search products',
      searchPh: 'Search for a dress, suit, bag…',
      sideCategories: 'Categories', sideColor: 'Colour', sidePrice: 'Price', priceUpTo: 'Up to',
      resetFilters: 'Reset filters',
      noResults: 'No matching products. Try adjusting your search or filters.',
      sideJournal: 'Latest articles',
      art1: 'How to choose a suit that fits your frame',
      art2: 'A guide to caring for fine leather',
      art3: 'The colours of autumn 2026 from Milan',
      promoEyebrow: 'The new collection', promoTitle: 'Autumn – Winter 2026',
      promoText: "Discover the new season's cuts and colours.", promoCta: 'Shop now',
      newsTitle: 'Newsletter',
      newsText: 'Be the first to hear about new collections and private invitations.',
      newsEmail: 'Your email address', newsSubmit: 'Subscribe',
      newsOk: 'Thank you for subscribing.', newsErr: 'Please enter a valid email address.',
      newsNote: 'You can unsubscribe at any time.',
      badgeNew: 'New',
      colBlack: 'Black', colPlum: 'Plum', colChampagne: 'Champagne', colCognac: 'Cognac', colIvory: 'Ivory', colGold: 'Gold', colNavy: 'Navy',
      p1: 'Silk evening gown', p2: 'Midi wrap dress', p3: 'Tailored wool suit', p4: 'Double-breasted blazer',
      p5: 'Leather top-handle bag', p6: 'Satin stiletto pumps', p7: 'Crest signet ring', p8: 'Cashmere scarf',

      footAbout: 'A luxury fashion house founded in 2007, uniting Milanese craftsmanship with a modern spirit.',
      footFollow: 'Follow us', footLinks: 'Quick links', footCare: 'Customer care', footLegal: 'Legal', footContact: 'Contact us',
      careShipping: 'Shipping & delivery', careReturns: 'Returns & exchanges', careSize: 'Size guide', careFaq: 'FAQ',
      legalPrivacy: 'Privacy policy', legalTerms: 'Terms & conditions', legalCookies: 'Cookie policy',
      contactAddress: 'Milan, Italy',
      copyright: 'All rights reserved.', backTop: 'Back to top'
    },
    sv: {
      colEyebrow: 'Kollektionerna',
      colTitle: 'En värld av elegans, skapad med omsorg',
      colIntro: 'Från skräddarsydda kostymer till förfinade accessoarer bär varje plagg i våra kollektioner husets signatur.',
      catAll: 'Alla', catWomen: 'Dam', catMen: 'Herr', catBags: 'Väskor', catShoes: 'Skor', catAcc: 'Accessoarer',
      catWomenDesc: 'Aftonklänningar & förfinat vardagsmode',
      catMenDesc: 'Skräddarsydda kostymer & klassiska kavajer',
      catBagsDesc: 'Handväskor & aftonväskor med eleganta linjer',
      catShoesDesc: 'Gjorda för ett självsäkert steg',
      catAccDesc: 'Sjalar, ringar & detaljer som fulländar looken',
      explore: 'Utforska',
      featCraft: 'Italienskt hantverk', featCraftText: 'Varje plagg färdigställs av skickliga händer, ända in i minsta detalj.',
      featMaterial: 'Förstklassiga material', featMaterialText: 'Noggrant utvalda tyger och läder, gjorda för att hålla.',
      featTimeless: 'Tidlös design', featTimelessText: 'Klassiska snitt med modern touch som överlever säsongerna.',
      featService: 'Personlig service', featServiceText: 'Vi hjälper dig att välja det som passar din stil och passform.',

      newEyebrow: 'Nyheter',
      newTitle: 'Det senaste från huset',
      sideLabel: 'Sidofält',
      filtersToggle: 'Sök & filtrera',
      searchLabel: 'Sök produkter',
      searchPh: 'Sök efter klänning, kostym, väska…',
      sideCategories: 'Kategorier', sideColor: 'Färg', sidePrice: 'Pris', priceUpTo: 'Upp till',
      resetFilters: 'Återställ filter',
      noResults: 'Inga matchande produkter. Prova att ändra sökningen eller filtren.',
      sideJournal: 'Senaste artiklarna',
      art1: 'Så väljer du en kostym som passar din kropp',
      art2: 'En guide till skötsel av fint läder',
      art3: 'Höstens färger 2026 från Milano',
      promoEyebrow: 'Den nya kollektionen', promoTitle: 'Höst – Vinter 2026',
      promoText: 'Upptäck säsongens nya snitt och färger.', promoCta: 'Handla nu',
      newsTitle: 'Nyhetsbrev',
      newsText: 'Bli först med att få veta om nya kollektioner och exklusiva inbjudningar.',
      newsEmail: 'Din e-postadress', newsSubmit: 'Prenumerera',
      newsOk: 'Tack för din prenumeration.', newsErr: 'Ange en giltig e-postadress.',
      newsNote: 'Du kan avsluta prenumerationen när som helst.',
      badgeNew: 'Nyhet',
      colBlack: 'Svart', colPlum: 'Plommon', colChampagne: 'Champagne', colCognac: 'Konjak', colIvory: 'Elfenben', colGold: 'Guld', colNavy: 'Marinblå',
      p1: 'Aftonklänning i siden', p2: 'Omlottklänning i midilängd', p3: 'Skräddarsydd ullkostym', p4: 'Dubbelknäppt kavaj',
      p5: 'Handväska i läder', p6: 'Stilettpumps i satin', p7: 'Signetring med vapen', p8: 'Kashmirsjal',

      footAbout: 'Ett exklusivt modehus grundat 2007 som förenar milanesiskt hantverk med en modern anda.',
      footFollow: 'Följ oss', footLinks: 'Snabblänkar', footCare: 'Kundservice', footLegal: 'Juridiskt', footContact: 'Kontakta oss',
      careShipping: 'Frakt & leverans', careReturns: 'Returer & byten', careSize: 'Storleksguide', careFaq: 'Vanliga frågor',
      legalPrivacy: 'Integritetspolicy', legalTerms: 'Villkor', legalCookies: 'Cookiepolicy',
      contactAddress: 'Milano, Italien',
      copyright: 'Alla rättigheter förbehållna.', backTop: 'Till toppen'
    }
  };
  Object.keys(MORE).forEach(function (l) {
    Object.keys(MORE[l]).forEach(function (k) { I18N[l][k] = MORE[l][k]; });
  });

  // fonts each language needs, loaded before its text is shown (avoids a font flash mid-switch)
  var FONTS = {
    ar: ['400 16px Tajawal', '500 16px Tajawal', '400 16px Amiri'],
    en: ['300 16px Montserrat', '500 16px Montserrat', 'italic 500 16px "Cormorant Garamond"'],
    sv: ['300 16px Montserrat', '500 16px Montserrat', 'italic 500 16px "Cormorant Garamond"']
  };
  var SAMPLE = { ar: 'أبجد', en: 'Abc', sv: 'Åäö' };

  var root = document.documentElement;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var finePointer = window.matchMedia('(pointer: fine)').matches;

  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  var langSwitch = $('.lang-switch');
  var langButtons = $$('.lang-switch button');
  var announcer = $('#langAnnounce');
  var current = I18N[root.lang] ? root.lang : 'ar';

  function wait(ms) { return new Promise(function (r) { setTimeout(r, ms); }); }

  function loadFonts(lang, timeout) {
    if (!document.fonts || !document.fonts.load) return Promise.resolve();
    var jobs = FONTS[lang].map(function (f) { return document.fonts.load(f, SAMPLE[lang]).catch(function () {}); });
    return Promise.race([Promise.all(jobs), wait(timeout)]);
  }

  function setPressed(lang) {
    langSwitch.setAttribute('data-active', lang);
    langButtons.forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-lang') === lang));
    });
  }

  var langHooks = [];

  function applyLang(lang) {
    var dict = I18N[lang];
    root.lang = lang;
    root.dir = lang === 'ar' ? 'rtl' : 'ltr';

    $$('[data-i18n]').forEach(function (el) {
      var v = dict[el.getAttribute('data-i18n')];
      if (v != null) el.textContent = v;
    });
    $$('[data-i18n-attr]').forEach(function (el) {
      el.getAttribute('data-i18n-attr').split(';').forEach(function (pair) {
        var p = pair.split(':');
        if (dict[p[1]] != null) el.setAttribute(p[0].trim(), dict[p[1]]);
      });
    });

    langHooks.forEach(function (fn) { fn(lang, dict); });

    document.title = dict.title;
    var meta = $('meta[name="description"]');
    if (meta) meta.setAttribute('content', dict.description);

    setPressed(lang);
    try { localStorage.setItem('bc-lang', lang); } catch (e) {}
    try {
      var url = new URL(location.href);
      if (url.searchParams.has('lang')) { url.searchParams.set('lang', lang); history.replaceState(null, '', url); }
    } catch (e) {}
  }

  function onScreen(r) { return r.width > 0 && r.bottom > 0 && r.top < window.innerHeight; }

  /* FLIP: on-screen blocks glide to their mirrored positions when direction flips */
  function flip(els, mutate) {
    els = els.filter(function (el) { return !el.classList.contains('sr') || el.classList.contains('is-in'); });
    var first = els.map(function (el) { return el.getBoundingClientRect(); });
    mutate();
    if (reduceMotion || !Element.prototype.animate) return;
    els.forEach(function (el, i) {
      var a = first[i], b = el.getBoundingClientRect();
      if (!onScreen(a) && !onScreen(b)) return;
      var dx = a.left - b.left, dy = a.top - b.top;
      if (Math.abs(dx) < 1 && Math.abs(dy) < 1) return;
      var far = Math.abs(dx) > 120;
      el.animate([
        { transform: 'translate(' + dx + 'px,' + dy + 'px)', opacity: 1 },
        { opacity: far ? 0.3 : 1, offset: 0.5 },
        { transform: 'translate(0,0)', opacity: 1 }
      ], { duration: far ? 820 : 520, easing: 'cubic-bezier(.65,0,.25,1)' });
    });
  }

  // stagger only the texts the visitor can see; everything off-screen swaps instantly
  function stagger() {
    var i = 0;
    $$('[data-i18n]').forEach(function (el) {
      if (onScreen(el.getBoundingClientRect())) {
        el.style.setProperty('--so', Math.min(i * 18, 160) + 'ms');
        el.style.setProperty('--si', Math.min(i * 40, 420) + 'ms');
        i++;
      } else {
        el.style.removeProperty('--so');
        el.style.removeProperty('--si');
      }
    });
  }

  var busy = false, queued = null, settleTimer;

  function settle() {
    clearTimeout(settleTimer);
    root.classList.add('lang-settle');
    settleTimer = setTimeout(function () { root.classList.remove('lang-settle'); }, reduceMotion ? 0 : 1300);
  }

  function setLang(lang) {
    if (!I18N[lang]) return;
    if (busy) { queued = lang; setPressed(lang); return; }
    if (lang === current) { setPressed(lang); return; }
    busy = true;

    var fontsReady = loadFonts(lang, 900);
    setPressed(lang);              // indicator starts sliding right away
    stagger();
    root.classList.add('lang-out');

    Promise.all([fontsReady, wait(reduceMotion ? 0 : 420)]).then(function () {
      flip($$('[data-flip]'), function () { applyLang(lang); });
      current = lang;

      root.classList.add('lang-in');
      void root.offsetWidth;       // commit the "below" start position before rising in
      root.classList.remove('lang-out', 'lang-in');
      settle();

      if (announcer) announcer.textContent = I18N[lang].announce;
      return wait(reduceMotion ? 0 : 500);
    }).then(function () {
      busy = false;
      if (queued && queued !== current) { var next = queued; queued = null; setLang(next); }
      else queued = null;
    });
  }

  langButtons.forEach(function (btn) {
    btn.addEventListener('click', function () { setLang(btn.getAttribute('data-lang')); });
  });

  /* =========================================================
     Products, sidebar filters, newsletter
     (sample catalogue — replace with the real products/prices)
     ========================================================= */
  var COLORS = {
    black: '#141014', plum: '#5e2c72', champagne: '#e6d0a2', cognac: '#9b5a2c',
    ivory: '#efe7d8', gold: '#c9a45c', navy: '#22304f'
  };
  var CAT_KEY = { women: 'catWomen', men: 'catMen', bags: 'catBags', shoes: 'catShoes', acc: 'catAcc' };
  var PRODUCTS = [
    { id: 'p1', cat: 'women', icon: 'i-dress', price: 6900, colors: ['plum', 'black', 'champagne'], isNew: true },
    { id: 'p2', cat: 'women', icon: 'i-dress', price: 3900, colors: ['ivory', 'navy'] },
    { id: 'p3', cat: 'men',   icon: 'i-suit',  price: 8400, colors: ['navy', 'black'], isNew: true },
    { id: 'p4', cat: 'men',   icon: 'i-suit',  price: 4600, colors: ['cognac', 'black'] },
    { id: 'p5', cat: 'bags',  icon: 'i-bag',   price: 5200, colors: ['black', 'cognac', 'plum'], isNew: true },
    { id: 'p6', cat: 'shoes', icon: 'i-shoe',  price: 3600, colors: ['black', 'gold'] },
    { id: 'p7', cat: 'acc',   icon: 'i-ring',  price: 2900, colors: ['gold'] },
    { id: 'p8', cat: 'acc',   icon: 'i-scarf', price: 1900, colors: ['plum', 'ivory'], isNew: true }
  ];
  var colKey = function (c) { return 'col' + c.charAt(0).toUpperCase() + c.slice(1); };
  // extra search words per product type, in all three languages
  var TYPE_WORDS = {
    'i-dress': 'فستان فساتين dress dresses gown klänning',
    'i-suit':  'بدلة سترة جاكيت suit blazer jacket kostym kavaj',
    'i-bag':   'حقيبة حقائب bag handbag väska',
    'i-shoe':  'حذاء أحذية كعب shoes heels pumps skor klackar',
    'i-ring':  'خاتم مجوهرات ring jewellery jewelry ring smycke',
    'i-scarf': 'وشاح شال scarf shawl sjal halsduk'
  };

  function formatPrice(n, lang) {
    if (lang === 'sv') return n.toLocaleString('sv-SE') + ' kr';
    if (lang === 'en') return 'SEK ' + n.toLocaleString('en-GB');
    return n.toLocaleString('en-US') + ' كرونة';
  }
  function countText(n, lang) {
    if (lang === 'ar') {
      if (n === 0) return 'لا توجد منتجات';
      if (n === 1) return 'منتج واحد';
      if (n === 2) return 'منتجان';
      return n + (n <= 10 ? ' منتجات' : ' منتجاً');
    }
    if (lang === 'sv') return n + (n === 1 ? ' produkt' : ' produkter');
    return n + (n === 1 ? ' product' : ' products');
  }
  function formatDate(iso, lang) {
    var loc = lang === 'ar' ? 'ar-u-nu-latn' : lang === 'sv' ? 'sv-SE' : 'en-GB';
    try { return new Intl.DateTimeFormat(loc, { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(iso + 'T12:00:00')); }
    catch (e) { return iso; }
  }
  // search matches every language, ignoring Arabic diacritics/hamza forms and Latin accents
  function norm(s) {
    return String(s).toLowerCase()
      .replace(/[ً-ْـ]/g, '')
      .replace(/[أإآ]/g, 'ا').replace(/ة/g, 'ه').replace(/ى/g, 'ي')
      .normalize('NFD').replace(/[̀-ͯ]/g, '');
  }

  var grid = $('#productGrid');
  var langs = Object.keys(I18N);

  grid.innerHTML = PRODUCTS.map(function (p) {
    var dots = p.colors.map(function (c) {
      return '<i style="--c:' + COLORS[c] + '" data-i18n-attr="title:' + colKey(c) + '"></i>';
    }).join('');
    return '<li class="pc sr" data-id="' + p.id + '" data-flip>' +
      '<a class="pc-link" href="#" data-placeholder>' +
        '<span class="p-media" style="--pc:' + COLORS[p.colors[0]] + '">' +
          '<svg class="art" aria-hidden="true"><use href="#' + p.icon + '"/></svg>' +
          (p.isNew ? '<span class="p-badge" data-i18n="badgeNew"></span>' : '') +
        '</span>' +
        '<span class="p-info">' +
          '<span class="p-cat" data-i18n="' + CAT_KEY[p.cat] + '"></span>' +
          '<span class="p-name" data-i18n="' + p.id + '"></span>' +
          '<span class="p-price" data-i18n="__price" data-price="' + p.price + '"></span>' +
          '<span class="p-colors">' + dots + '</span>' +
        '</span>' +
      '</a></li>';
  }).join('');

  PRODUCTS.forEach(function (p) {
    var words = [TYPE_WORDS[p.icon] || ''];
    langs.forEach(function (l) {
      words.push(I18N[l][p.id], I18N[l][CAT_KEY[p.cat]]);
      p.colors.forEach(function (c) { words.push(I18N[l][colKey(c)]); });
    });
    p.search = norm(words.join(' '));
    p.el = grid.querySelector('[data-id="' + p.id + '"]');
  });

  // category counts
  $$('#catList button').forEach(function (b) {
    var cat = b.getAttribute('data-cat');
    $('.count', b).textContent = cat === 'all' ? PRODUCTS.length
      : PRODUCTS.filter(function (p) { return p.cat === cat; }).length;
  });

  // colour swatches (only colours that exist in the catalogue)
  var swatchWrap = $('#swatches');
  Object.keys(COLORS).forEach(function (c) {
    if (!PRODUCTS.some(function (p) { return p.colors.indexOf(c) > -1; })) return;
    var b = document.createElement('button');
    b.type = 'button';
    b.style.setProperty('--c', COLORS[c]);
    b.setAttribute('data-color', c);
    b.setAttribute('aria-pressed', 'false');
    b.setAttribute('data-i18n-attr', 'aria-label:' + colKey(c) + ';title:' + colKey(c));
    swatchWrap.appendChild(b);
  });

  var range = $('#priceRange'), priceOut = $('#priceOut');
  var maxPrice = Math.ceil(Math.max.apply(null, PRODUCTS.map(function (p) { return p.price; })) / 1000) * 1000;
  var minPrice = Math.floor(Math.min.apply(null, PRODUCTS.map(function (p) { return p.price; })) / 1000) * 1000;
  range.min = minPrice; range.max = maxPrice; range.value = maxPrice;

  var state = { q: '', cat: 'all', color: null, max: maxPrice };
  var filterTimer;

  function paintRange() {
    var pct = (range.value - minPrice) / (maxPrice - minPrice) * 100;
    range.style.setProperty('--p', pct + '%');
    priceOut.textContent = formatPrice(+range.value, current);
  }
  function updateCount(n) {
    $('#resultCount span').textContent = countText(n, current);
  }
  function runFilters() {
    var q = norm(state.q.trim()), n = 0;
    PRODUCTS.forEach(function (p) {
      var ok = (state.cat === 'all' || p.cat === state.cat) &&
               (!state.color || p.colors.indexOf(state.color) > -1) &&
               p.price <= state.max &&
               (!q || q.split(/\s+/).every(function (w) { return p.search.indexOf(w) > -1; }));
      p.el.hidden = !ok;
      if (ok) n++;
    });
    updateCount(n);
    $('#noResults').hidden = n > 0;
  }
  function applyFilters() {
    if (reduceMotion) return runFilters();
    clearTimeout(filterTimer);
    grid.classList.add('is-filtering');
    filterTimer = setTimeout(function () { runFilters(); grid.classList.remove('is-filtering'); }, 220);
  }
  function setCategory(cat) {
    state.cat = cat;
    $$('#catList button').forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute('data-cat') === cat));
    });
    applyFilters();
  }

  $$('#catList button').forEach(function (b) {
    b.addEventListener('click', function () { setCategory(b.getAttribute('data-cat')); });
  });
  $$('.bento .cc').forEach(function (card) {
    card.addEventListener('click', function () { setCategory(card.getAttribute('data-cat')); });
  });
  swatchWrap.addEventListener('click', function (e) {
    var b = e.target.closest('button'); if (!b) return;
    var c = b.getAttribute('data-color');
    state.color = state.color === c ? null : c;
    $$('button', swatchWrap).forEach(function (x) {
      x.setAttribute('aria-pressed', String(x.getAttribute('data-color') === state.color));
    });
    applyFilters();
  });
  var searchTimer;
  $('#searchInput').addEventListener('input', function (e) {
    clearTimeout(searchTimer);
    searchTimer = setTimeout(function () { state.q = e.target.value; applyFilters(); }, 160);
  });
  range.addEventListener('input', function () {
    state.max = +range.value; paintRange();
    clearTimeout(searchTimer);
    searchTimer = setTimeout(applyFilters, 120);
  });
  $('#resetFilters').addEventListener('click', function () {
    state = { q: '', cat: 'all', color: null, max: maxPrice };
    $('#searchInput').value = '';
    range.value = maxPrice; paintRange();
    $$('button', swatchWrap).forEach(function (x) { x.setAttribute('aria-pressed', 'false'); });
    setCategory('all');
  });

  // mobile: filters collapse behind a toggle
  var filtersBox = $('.side-filters'), filtersBtn = $('.filters-toggle');
  filtersBtn.addEventListener('click', function () {
    var open = !filtersBox.classList.contains('is-open');
    filtersBox.classList.toggle('is-open', open);
    filtersBtn.setAttribute('aria-expanded', String(open));
  });

  // newsletter (front-end only — not connected to a mailing service yet)
  var newsForm = $('#newsletter'), newsInput = $('#newsEmail'), newsMsg = $('#newsMsg');
  newsForm.addEventListener('submit', function (e) {
    e.preventDefault();
    var ok = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(newsInput.value.trim());
    var span = $('span', newsMsg);
    span.setAttribute('data-i18n', ok ? 'newsOk' : 'newsErr');
    span.textContent = I18N[current][ok ? 'newsOk' : 'newsErr'];
    newsMsg.className = 'news-msg ' + (ok ? 'is-ok' : 'is-err');
    newsInput.classList.toggle('is-invalid', !ok);
    newsInput.setAttribute('aria-invalid', String(!ok));
    if (ok) newsInput.value = '';
    else newsInput.focus();
  });
  newsInput.addEventListener('input', function () {
    if (newsInput.classList.contains('is-invalid')) {
      newsInput.classList.remove('is-invalid');
      newsInput.removeAttribute('aria-invalid');
    }
  });

  // pages that don't exist yet: keep the visitor where they are
  document.addEventListener('click', function (e) {
    if (e.target.closest('a[data-placeholder]')) e.preventDefault();
  });

  var yearEl = $('#year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // language-dependent formatting (runs inside applyLang, while text is hidden)
  langHooks.push(function (lang) {
    $$('[data-price]').forEach(function (el) { el.textContent = formatPrice(+el.getAttribute('data-price'), lang); });
    $$('time[datetime]').forEach(function (el) { el.textContent = formatDate(el.getAttribute('datetime'), lang); });
    priceOut.textContent = formatPrice(+range.value, lang);
    $('#resultCount span').textContent = countText(PRODUCTS.filter(function (p) { return !p.el.hidden; }).length, lang);
  });

  /* ---------- scroll reveal ---------- */
  var srEls = $$('.sr');
  if ('IntersectionObserver' in window && !reduceMotion) {
    var srObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('is-in'); srObs.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
    srEls.forEach(function (el) { srObs.observe(el); });
  } else {
    srEls.forEach(function (el) { el.classList.add('is-in'); });
  }

  /* ---------- active nav link follows the section in view ---------- */
  var navLinks = $$('.main-nav a');
  if ('IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var id = '#' + en.target.id;
        navLinks.forEach(function (a) {
          var on = a.getAttribute('href') === id;
          a.classList.toggle('is-active', on);
          if (on) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    navLinks.forEach(function (a) {
      var t = document.getElementById(a.getAttribute('href').slice(1));
      if (t) spy.observe(t);
    });
  }

  paintRange();
  runFilters();

  /* ---------- first paint ---------- */
  applyLang(current);
  stagger();
  Promise.all([
    loadFonts(current, 1400),
    loadFonts(current === 'ar' ? 'en' : current, 1400) // brand/nav Latin fonts
  ]).then(function () {
    requestAnimationFrame(function () {
      settle();
      root.classList.remove('i18n-pending');
      root.classList.add('is-ready');
    });
  });

  /* ---------- header on scroll ---------- */
  var header = $('#siteHeader');
  function onScroll() { header.classList.toggle('is-scrolled', window.scrollY > 24); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- mobile menu ---------- */
  var toggle = $('.menu-toggle');
  var menu = $('#mobileMenu');
  var closeTimer;

  function setMenu(open) {
    clearTimeout(closeTimer);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('data-i18n-attr', 'aria-label:' + (open ? 'menuClose' : 'menuOpen'));
    toggle.setAttribute('aria-label', I18N[current][open ? 'menuClose' : 'menuOpen']);
    root.style.overflow = open ? 'hidden' : '';
    if (open) {
      menu.hidden = false;
      requestAnimationFrame(function () {
        requestAnimationFrame(function () { menu.classList.add('is-open'); });
      });
      var first = $('a', menu);
      if (first) setTimeout(function () { first.focus({ preventScroll: true }); }, 250);
    } else {
      menu.classList.remove('is-open');
      closeTimer = setTimeout(function () { menu.hidden = true; }, reduceMotion ? 0 : 450);
    }
  }

  toggle.addEventListener('click', function () { setMenu(toggle.getAttribute('aria-expanded') !== 'true'); });
  $$('a', menu).forEach(function (a) { a.addEventListener('click', function () { setMenu(false); }); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { setMenu(false); toggle.focus(); }
  });
  window.matchMedia('(min-width: 981px)').addEventListener('change', function (mq) { if (mq.matches) setMenu(false); });

  /* ---------- logo tilt ---------- */
  var hero = $('.hero');
  var tilt = $('.logo-tilt');

  if (finePointer && !reduceMotion && tilt) {
    var raf = 0, px = 0, py = 0;
    hero.addEventListener('pointermove', function (e) {
      var r = hero.getBoundingClientRect();
      px = (e.clientX - r.left) / r.width - 0.5;
      py = (e.clientY - r.top) / r.height - 0.5;
      if (!raf) raf = requestAnimationFrame(function () {
        raf = 0;
        tilt.style.setProperty('--ry', (px * 7).toFixed(2) + 'deg');
        tilt.style.setProperty('--rx', (-py * 6).toFixed(2) + 'deg');
      });
    });
    hero.addEventListener('pointerleave', function () {
      ['--rx', '--ry'].forEach(function (p) { tilt.style.setProperty(p, '0deg'); });
    });
  }

  /* ---------- gold dust ---------- */
  var canvas = $('.hero-dust');
  if (canvas && canvas.getContext && !reduceMotion) {
    var ctx = canvas.getContext('2d');
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var W = 0, H = 0, motes = [], running = false, visible = true, last = 0;

    function size() {
      W = canvas.clientWidth; H = canvas.clientHeight;
      canvas.width = W * dpr; canvas.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      var n = Math.min(70, Math.round(W * H / 20000));
      motes = [];
      for (var i = 0; i < n; i++) motes.push(spawn(true));
    }
    function spawn(anywhere) {
      return {
        x: Math.random() * W,
        y: anywhere ? Math.random() * H : H + 10,
        r: Math.random() * 1.5 + 0.35,
        vy: -(Math.random() * 0.22 + 0.05),
        sway: Math.random() * 0.6 + 0.2,
        ph: Math.random() * Math.PI * 2,
        tw: Math.random() * 0.002 + 0.0008
      };
    }
    function frame(t) {
      if (!running) return;
      var dt = Math.min(48, t - (last || t)); last = t;
      ctx.clearRect(0, 0, W, H);
      for (var i = 0; i < motes.length; i++) {
        var m = motes[i];
        m.y += m.vy * dt * 0.06;
        m.x += Math.sin(t * 0.0004 + m.ph) * m.sway * 0.05 * dt * 0.06;
        if (m.y < -10) motes[i] = m = spawn(false);
        var a = 0.25 + 0.55 * (0.5 + 0.5 * Math.sin(t * m.tw + m.ph));
        ctx.beginPath();
        ctx.fillStyle = 'rgba(236, 214, 160,' + (a * 0.55).toFixed(3) + ')';
        ctx.shadowColor = 'rgba(236, 200, 120, .8)';
        ctx.shadowBlur = m.r * 4;
        ctx.arc(m.x, m.y, m.r, 0, Math.PI * 2);
        ctx.fill();
      }
      requestAnimationFrame(frame);
    }
    function play() {
      var should = visible && !document.hidden;
      if (should && !running) { running = true; last = 0; requestAnimationFrame(frame); }
      else if (!should) running = false;
    }

    size();
    var rt;
    window.addEventListener('resize', function () { clearTimeout(rt); rt = setTimeout(size, 150); });
    document.addEventListener('visibilitychange', play);
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (en) { visible = en[0].isIntersecting; play(); }).observe(hero);
    }
    play();
  }
})();
