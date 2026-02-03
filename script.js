// script.js for Dheeraj Krishna Enterprises - Seeds Shop

const content = {
  en: {
    nav: [
      'Home',
      'What We Offer',
      'Why We Are No.1',
      'Crop & Soil Guidance',
      'Field Visit & Support',
      'Place Order',
      'Contact & Address'
    ],
    homeTitle: 'Welcome to Dheeraj Krishna Enterprises',
    homeDesc: 'Your trusted seeds shop in G Konduru, Vijayawada. We provide quality seeds, expert guidance, and field support for local farmers.',
    offerTitle: 'What We Offer',
    offerList: [
      'Certified seeds for all major crops',
      'Soil-based crop suggestions',
      'On-field support & guidance',
      'Guaranteed field visits',
      'Order by Call or WhatsApp'
    ],
    whyTitle: 'Why We Are No.1',
    whyList: [
      'Trusted by 1000+ farmers in Vijayawada–Mylavaram',
      'Full responsibility for our products',
      'If the issue is from our side, we will take full responsibility.',
      'Transparent advice, no false promises',
      'Local, farmer-friendly service'
    ],
    guidanceTitle: 'Crop & Soil Guidance',
    guidanceDesc: 'Bring your soil sample or share your field details. We suggest the best crops and fertilizers for your land.',
    fieldTitle: 'Field Visit & Support',
    fieldDesc: 'We guarantee field visits for all our customers. Our experts will visit your farm and provide practical solutions.',
    orderTitle: 'Place Order',
    orderDesc: 'Call or WhatsApp us to place your order. No online payments needed. We deliver seeds and advice directly.',
    contactTitle: 'Contact & Address',
    contactDetails: [
      'Dheeraj Krishna Enterprises',
      'Seeds Retail Shop & Farmer Guidance',
      'Main Road, G Konduru, Vijayawada, Andhra Pradesh 521229',
      'Phone: +91 98765 43210',
      'WhatsApp: +91 98765 43210'
    ],
    callNow: 'Call Now',
    whatsapp: 'WhatsApp Order',
    address: 'Main Road, G Konduru, Vijayawada, Andhra Pradesh 521229',
    mapLabel: 'Find us on Google Maps'
  },
  te: {
    nav: [
      'హోమ్',
      'మేము ఏమి అందిస్తున్నాం',
      'ఎందుకు నెం.1 మేమే',
      'పంట & నేల మార్గదర్శనం',
      'ఫీల్డ్ విజిట్ & సహాయం',
      'ఆర్డర్ చేయండి',
      'సంప్రదించండి & చిరునామా'
    ],
    homeTitle: 'ధీరజ్ కృష్ణ ఎంటర్‌ప్రైజెస్‌కు స్వాగతం',
    homeDesc: 'మీ నమ్మకమైన విత్తనాల షాప్ – జి కొండూరు, విజయవాడ. నాణ్యమైన విత్తనాలు, నిపుణుల సలహా, ఫీల్డ్ సపోర్ట్ అందిస్తాము.',
    offerTitle: 'మేము ఏమి అందిస్తున్నాం',
    offerList: [
      'ప్రతి పంటకు ధృవీకృత విత్తనాలు',
      'నేల ఆధారిత పంట సూచనలు',
      'ఫీల్డ్ సపోర్ట్ & మార్గదర్శనం',
      'హామీతో ఫీల్డ్ విజిట్',
      'కాల్ లేదా వాట్సాప్ ద్వారా ఆర్డర్'
    ],
    whyTitle: 'ఎందుకు నెం.1 మేమే',
    whyList: [
      'విజయవాడ–మైలవరం ప్రాంతంలో 1000+ రైతుల విశ్వాసం',
      'మా ఉత్పత్తులకు పూర్తి బాధ్యత',
      'మా వైపు లోపం ఉంటే, పూర్తి బాధ్యత మేమే తీసుకుంటాం.',
      'స్పష్టమైన సలహా, అబద్ధపు హామీలు లేవు',
      'స్థానిక, రైతు-స్నేహిత సేవ'
    ],
    guidanceTitle: 'పంట & నేల మార్గదర్శనం',
    guidanceDesc: 'మీ నేల నమూనా లేదా ఫీల్డ్ వివరాలు ఇవ్వండి. మీ భూమికి సరైన పంటలు, ఎరువులు సూచిస్తాము.',
    fieldTitle: 'ఫీల్డ్ విజిట్ & సహాయం',
    fieldDesc: 'ప్రతి కస్టమర్‌కు ఫీల్డ్ విజిట్ హామీ. మా నిపుణులు మీ పొలాన్ని సందర్శించి, అనువైన పరిష్కారాలు సూచిస్తారు.',
    orderTitle: 'ఆర్డర్ చేయండి',
    orderDesc: 'కాల్ లేదా వాట్సాప్ ద్వారా ఆర్డర్ చేయండి. ఆన్‌లైన్ చెల్లింపులు అవసరం లేదు. విత్తనాలు, సలహా నేరుగా మీకు అందిస్తాము.',
    contactTitle: 'సంప్రదించండి & చిరునామా',
    contactDetails: [
      'ధీరజ్ కృష్ణ ఎంటర్‌ప్రైజెస్',
      'విత్తనాల షాప్ & రైతు మార్గదర్శనం',
      'మెయిన్ రోడ్, జి కొండూరు, విజయవాడ, ఆంధ్రప్రదేశ్ 521229',
      'ఫోన్: +91 98765 43210',
      'వాట్సాప్: +91 98765 43210'
    ],
    callNow: 'కాల్ చేయండి',
    whatsapp: 'వాట్సాప్ ఆర్డర్',
    address: 'మెయిన్ రోడ్, జి కొండూరు, విజయవాడ, ఆంధ్రప్రదేశ్ 521229',
    mapLabel: 'గూగుల్ మ్యాప్స్‌లో చూడండి'
  }
};

let currentLang = 'en';

function setLang(lang) {
  currentLang = lang;
  const c = content[lang];
  // Nav
  document.querySelectorAll('.nav-link').forEach((el, i) => {
    el.textContent = c.nav[i];
  });
  // Sections
  document.getElementById('home-title').textContent = c.homeTitle;
  document.getElementById('home-desc').textContent = c.homeDesc;
  document.getElementById('offer-title').textContent = c.offerTitle;
  setList('offer-list', c.offerList);
  document.getElementById('why-title').textContent = c.whyTitle;
  setList('why-list', c.whyList);
  document.getElementById('guidance-title').textContent = c.guidanceTitle;
  document.getElementById('guidance-desc').textContent = c.guidanceDesc;
  document.getElementById('field-title').textContent = c.fieldTitle;
  document.getElementById('field-desc').textContent = c.fieldDesc;
  document.getElementById('order-title').textContent = c.orderTitle;
  document.getElementById('order-desc').textContent = c.orderDesc;
  document.getElementById('contact-title').textContent = c.contactTitle;
  setList('contact-details', c.contactDetails);
  document.getElementById('call-btn').textContent = c.callNow;
  document.getElementById('whatsapp-btn').textContent = c.whatsapp;
  document.getElementById('map-label').textContent = c.mapLabel;
  document.getElementById('address').textContent = c.address;
  // Font for Telugu
  document.body.style.fontFamily = lang === 'te' ? `var(--telugu-font), 'Segoe UI', Arial, sans-serif` : `'Segoe UI', Arial, var(--telugu-font)`;
}

function setList(id, arr) {
  const ul = document.getElementById(id);
  ul.innerHTML = '';
  arr.forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // Nav scroll
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.getElementById(link.getAttribute('href').substring(1));
      if (target) {
        window.scrollTo({
          top: target.offsetTop - 60,
          behavior: 'smooth'
        });
      }
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });
  // Language toggle
  document.getElementById('lang-en').addEventListener('click', () => setLang('en'));
  document.getElementById('lang-te').addEventListener('click', () => setLang('te'));
  // CTA buttons
  document.getElementById('call-btn').addEventListener('click', () => {
    window.open('tel:+919876543210');
  });
  document.getElementById('whatsapp-btn').addEventListener('click', () => {
    window.open('https://wa.me/919876543210');
  });
  setLang('en');
});
