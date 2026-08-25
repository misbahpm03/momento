/* ---------------------------------------------------------------------------
   Contact & order configuration — the only place real details need to go.
   Every value below is optional: leave it '' and the matching link, row or
   button hides itself rather than rendering dead.
   --------------------------------------------------------------------------- */
const ORDER_ENDPOINT = ''; // TODO: Formspree/Getform form URL. Empty = local thank-you only.
const WHATSAPP = '';       // TODO: digits only, no +, e.g. 8801712345678
const EMAIL = '';          // TODO: hello@yourdomain.com
const PHONE = '';          // TODO: display form, e.g. +880 1712 345678
const INSTAGRAM = '';      // TODO: handle without @, e.g. momento.cards
const FACEBOOK = '';       // TODO: page name, e.g. momentocards
const TIKTOK = '';         // TODO: handle without @, e.g. momento.cards
const REPLY_WINDOW = 'usually within a few hours';

/* Handles are stored bare, like WHATSAPP's digits. A pasted '@' is tolerated
   so '@momento' and 'momento' both resolve to the same profile. */
const socialUrl = (kind, handle) => {
  const h = String(handle).trim().replace(/^@+/, '');
  if (!h) return '';
  return {
    instagram: `https://instagram.com/${h}`,
    facebook: `https://facebook.com/${h}`,
    tiktok: `https://tiktok.com/@${h}`,
  }[kind] || '';
};

const CURRENCY = '৳';      // BDT (Bangladeshi Taka)

const fmtPrice = (n) => `৳${n.toLocaleString()}`;

const OCCASIONS = {
  anniversary: 'Anniversary',
  proposal: 'Proposal',
  date: 'Ask Out',
  memories: 'Memories',
  justbecause: 'Just Because',
};

/* Curated Atelier Templates — Luxury typography, bespoke palettes, paper textures, & SVG ornaments */
const TEMPLATES = [
  {
    slug: 'gold-leaf',
    name: 'Royal Gold Foil',
    price: 1500,
    occasion: 'anniversary',
    desc: 'Deep warm ivory with an opulent double gold foil arch and calligraphy script. Crafted for milestone celebrations.',
    tags: ['Luxury', 'Gold Foil', 'Calligraphy'],
    ornament: 'gold-arch',
    paperStyle: 'gold-foil-ivory',
    fonts: { display: "'Pinyon Script', cursive", body: "'Cormorant Garamond', serif" },
    titleScale: 1.25,
    foilTitle: true,
    palette: { bg: '#fdfbf7', ink: '#362819', accent: '#c69842', soft: '#e8d7b8' },
    content: { eyebrow: 'Twenty-Five Years', title: 'Anne & Peter', sub: 'a silver evening & a lifetime of love', date: '20 · 09 · 2026', note: 'Black tie dinner at The Glasshouse, 7:00 PM.' },
    new: true,
  },
  {
    slug: 'velvet-rose',
    name: 'Velvet Noir & Rose',
    price: 1400,
    occasion: 'anniversary',
    desc: 'Deep burgundy velvet texture with hand-lettered romantic typography and delicate rose gold botanical vines.',
    tags: ['Velvet', 'Rose Gold', 'Romantic'],
    ornament: 'botanical-vine',
    paperStyle: 'velvet-noir',
    tone: 'dark',
    characterArt: 'velvet-embrace',
    fonts: { display: "'Playfair Display', serif", body: "'Cormorant Garamond', serif" },
    palette: { bg: '#2b0d16', ink: '#f7ebed', accent: '#e098a5', soft: '#521a2a' },
    content: { eyebrow: 'Five Years of Us', title: 'Maya & Rohan', sub: 'still choosing each other every single day', date: '14 · 02 · 2026', note: 'Dinner at the place we had our very first date, 8pm.' },
    new: true,
  },
  {
    slug: 'paper-moon',
    name: 'Midnight Celestial',
    price: 1200,
    occasion: 'proposal',
    desc: 'Deep cosmic navy paper with hand-drawn gold constellation starbursts and elegant imperial serif type.',
    tags: ['Celestial', 'Navy & Gold', 'Proposal'],
    ornament: 'constellation-stars',
    paperStyle: 'midnight-navy',
    tone: 'dark',
    characterArt: 'paper-moon',
    titleScale: 0.82,
    foilTitle: true,
    fonts: { display: "'Cinzel', serif", body: "'Cormorant Garamond', serif" },
    palette: { bg: '#0e182a', ink: '#f4f6fa', accent: '#d4af37', soft: '#1c2d4a' },
    content: { eyebrow: 'A Promise Under the Stars', title: 'Will You Marry Me?', sub: 'I have known the answer since the day we met', date: 'Tonight', note: 'Say yes and I will handle every detail after this.' },
    new: true,
  },
  {
    slug: 'garden-note',
    name: 'Sage Botanical',
    price: 950,
    occasion: 'anniversary',
    desc: 'Pressed olive sage linen cardstock featuring delicate engraved leaf branches and understated serif typography.',
    tags: ['Botanical', 'Linen', 'Organic'],
    ornament: 'botanical-vine',
    paperStyle: 'sage-linen',
    titleScale: 1.08,
    fonts: { display: "'Cormorant Garamond', serif", body: "'Plus Jakarta Sans', sans-serif" },
    palette: { bg: '#f2f5f0', ink: '#243328', accent: '#5b7a54', soft: '#cfdccb' },
    content: { eyebrow: 'Ten Years Together', title: 'Elena & Marcus', sub: 'the garden we planted together', date: '09 · 06 · 2026', note: 'Same quiet table. Same favourite wine. Come as you are.' },
  },
  {
    slug: 'blush-letter',
    name: 'Silk & Blush',
    price: 750,
    occasion: 'date',
    desc: 'Soft silk pink card with romantic calligraphic script and subtle gold leaf heart embellishments.',
    tags: ['Calligraphy', 'Blush', 'Sweet'],
    ornament: 'hearts-delicate',
    paperStyle: 'blush-silk',
    titleScale: 1.25,
    fonts: { display: "'Pinyon Script', cursive", body: "'Plus Jakarta Sans', sans-serif" },
    palette: { bg: '#fdf2f4', ink: '#5c1d2e', accent: '#d96884', soft: '#f7d2dc' },
    content: { eyebrow: 'Passing You a Note', title: 'Go Out With Me?', sub: 'I promise to bring good coffee and better stories', date: 'This Saturday', note: 'Yes · Absolutely Yes · Ask me again tomorrow' },
  },
  {
    slug: 'polaroid-year',
    name: 'Archival Memories',
    price: 1300,
    occasion: 'memories',
    desc: 'Textured gallery matte paper with instant photo overlays and modern minimalist architectural spacing.',
    tags: ['Modern', 'Photo Deck', 'Gallery'],
    ornament: 'polaroid-deck',
    paperStyle: 'cotton-deboss',
    titleScale: 0.92,
    fonts: { display: "'Plus Jakarta Sans', sans-serif", body: "'Plus Jakarta Sans', sans-serif" },
    palette: { bg: '#f4f3f0', ink: '#1c1b18', accent: '#c45a43', soft: '#dedbd3' },
    content: { eyebrow: '2025 · The Highlights', title: 'Our Year in Moments', sub: 'sixty-one photos, four cities, endless laughter', date: 'Dec 2025', note: 'Scroll slowly. We took our time making these memories.' },
  },
  {
    slug: 'sunday-picnic',
    name: 'Sunlit Picnic',
    price: 600,
    occasion: 'date',
    desc: 'Warm honey cream paper with playful golden confetti dust and clean contemporary typography.',
    tags: ['Playful', 'Warm', 'Casual'],
    ornament: 'confetti-sparkle',
    paperStyle: 'sunlit-cream',
    fonts: { display: "'Playfair Display', serif", body: "'Plus Jakarta Sans', sans-serif" },
    palette: { bg: '#fcf8eb', ink: '#3b341f', accent: '#cc8d1a', soft: '#ebdcae' },
    content: { eyebrow: 'A Small Invitation', title: 'Are You Free Friday?', sub: 'found a quiet spot with fresh bread and terrible parking', date: 'Fri · 7:30pm', note: 'Bring your favourite smile.' },
  },
  {
    slug: 'coastal-light',
    name: 'Coastal Breeze',
    price: 950,
    occasion: 'memories',
    desc: 'Airy ocean blue cardstock framed with a grand architectural arch and timeless Playfair serif headings.',
    tags: ['Airy', 'Ocean Blue', 'Arch'],
    ornament: 'gold-arch',
    paperStyle: 'coastal-paper',
    fonts: { display: "'Playfair Display', serif", body: "'Plus Jakarta Sans', sans-serif" },
    palette: { bg: '#f0f6f8', ink: '#183344', accent: '#3b829e', soft: '#c7e0e8' },
    content: { eyebrow: 'That Summer by the Sea', title: 'The Water House', sub: 'where we promised to return every year', date: 'Aug 2025', note: 'Forty photos and one unforgettable sunset.' },
  },
  {
    slug: 'midnight-vow',
    name: 'Onyx Monogram',
    price: 1250,
    occasion: 'proposal',
    desc: 'Pure matte black cardstock with embossed gold lettering and a regal crest ring motif.',
    tags: ['Onyx', 'Luxury Noir', 'Crest'],
    ornament: 'monogram-ring',
    paperStyle: 'onyx-noir',
    tone: 'dark',
    titleScale: 0.82,
    foilTitle: true,
    fonts: { display: "'Cinzel', serif", body: "'Cormorant Garamond', serif" },
    palette: { bg: '#121214', ink: '#f8f5ee', accent: '#dfb35a', soft: '#2a2a30' },
    content: { eyebrow: 'Somewhere Past Midnight', title: 'Marry Me', sub: 'and every version of me that comes after', date: 'Whenever You Say', note: 'The ring has been waiting in my coat pocket for weeks.' },
  },
  {
    slug: 'neon-tuesday',
    name: 'Electric Crimson',
    price: 750,
    occasion: 'justbecause',
    desc: 'Modern charcoal dark mode card with high-contrast crimson accents and crisp geometric styling.',
    tags: ['Modern Noir', 'Bold', 'Crimson'],
    ornament: 'confetti-sparkle',
    paperStyle: 'charcoal-dark',
    tone: 'dark',
    titleScale: 0.92,
    fonts: { display: "'Plus Jakarta Sans', sans-serif", body: "'Plus Jakarta Sans', sans-serif" },
    palette: { bg: '#1a191c', ink: '#f5f3f0', accent: '#ff4d6d', soft: '#36343b' },
    content: { eyebrow: 'No Special Occasion', title: 'Thinking of You', sub: 'it is a Tuesday afternoon and that felt like reason enough', date: 'Right Now', note: 'Send me a photo of whatever is right in front of you.' },
  },
  {
    slug: 'first-frost',
    name: 'First Frost',
    price: 750,
    occasion: 'date',
    desc: 'Silver slate paper with minimal starburst accents and serene winter evening tones.',
    tags: ['Minimal', 'Slate Silver', 'Serene'],
    ornament: 'constellation-stars',
    paperStyle: 'slate-silver',
    titleScale: 0.92,
    fonts: { display: "'Plus Jakarta Sans', sans-serif", body: "'Plus Jakarta Sans', sans-serif" },
    palette: { bg: '#f2f4f7', ink: '#232a30', accent: '#5c7a99', soft: '#d9dfe5' },
    content: { eyebrow: 'The Evenings Are Cold', title: 'Walk With Me?', sub: 'the crisp winter air kind of evening', date: 'Sunday · 4:00 PM', note: 'I will bring the warm thermos. You bring the stories.' },
  },
  {
    slug: 'oldfilm',
    name: 'Vintage Sepia',
    price: 1300,
    occasion: 'memories',
    desc: 'Handcrafted antiqued linen paper with warm sepia tones, photo tape overlays, and classical serif text.',
    tags: ['Vintage', 'Sepia', 'Linen'],
    ornament: 'polaroid-deck',
    paperStyle: 'vintage-sepia',
    titleScale: 1.08,
    fonts: { display: "'Cormorant Garamond', serif", body: "'Cormorant Garamond', serif" },
    palette: { bg: '#f7f1e6', ink: '#423323', accent: '#b06b3b', soft: '#e5d7c3' },
    content: { eyebrow: 'Before Digital Screens', title: 'The Early Years', sub: 'grainy, imperfect, and completely golden', date: '1998 — 2006', note: 'Found in the old photo box kept up in the attic.' },
  },
];

const bySlug = (slug) => TEMPLATES.find((t) => t.slug === slug);

/* SVG Vector Ornament Generator — Pure Crisp Vector Filigree */
function ornamentHTML(kind) {
  switch (kind) {
    case 'gold-arch':
      return `
        <div class="orn orn-gold-arch">
          <svg viewBox="0 0 300 420" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M25 150 C25 60, 275 60, 275 150 L275 390 L25 390 Z" stroke="currentColor" stroke-width="2" opacity="0.6"/>
            <path d="M33 153 C33 70, 267 70, 267 153 L267 382 L33 382 Z" stroke="currentColor" stroke-width="1.3" opacity="0.4" stroke-dasharray="4 4"/>
            <circle cx="150" cy="50" r="4.5" fill="currentColor" opacity="0.8"/>
            <path d="M140 50 L160 50 M150 40 L150 60" stroke="currentColor" stroke-width="1.6" opacity="0.7"/>
          </svg>
        </div>`;
    case 'botanical-vine':
      return `
        <div class="orn orn-botanical-vine">
          <svg viewBox="0 0 300 420" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 20 Q50 30 70 60 Q40 50 20 20 Z" fill="currentColor" opacity="0.45"/>
            <path d="M280 20 Q250 30 230 60 Q260 50 280 20 Z" fill="currentColor" opacity="0.45"/>
            <path d="M20 400 Q50 390 70 360 Q40 370 20 400 Z" fill="currentColor" opacity="0.45"/>
            <path d="M280 400 Q250 390 230 360 Q260 370 280 400 Z" fill="currentColor" opacity="0.45"/>
            <circle cx="150" cy="30" r="3.5" fill="currentColor" opacity="0.6"/>
            <circle cx="150" cy="390" r="3.5" fill="currentColor" opacity="0.6"/>
          </svg>
        </div>`;
    case 'constellation-stars':
      return `
        <div class="orn orn-constellation-stars">
          <svg viewBox="0 0 300 420" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 40 L54 50 L64 54 L54 58 L50 68 L46 58 L36 54 L46 50 Z" fill="currentColor" opacity="0.7"/>
            <path d="M250 80 L253 87 L260 90 L253 93 L250 100 L247 93 L240 90 L247 87 Z" fill="currentColor" opacity="0.6"/>
            <path d="M80 360 L83 367 L90 370 L83 373 L80 380 L77 373 L70 370 L77 367 Z" fill="currentColor" opacity="0.6"/>
            <path d="M230 340 L234 350 L244 354 L234 358 L230 368 L226 358 L216 354 L226 350 Z" fill="currentColor" opacity="0.7"/>
            <circle cx="150" cy="45" r="1.5" fill="currentColor" opacity="0.5"/>
            <circle cx="110" cy="80" r="1.2" fill="currentColor" opacity="0.4"/>
            <circle cx="190" cy="70" r="1" fill="currentColor" opacity="0.4"/>
          </svg>
        </div>`;
    case 'monogram-ring':
      return `
        <div class="orn orn-monogram-ring">
          <svg viewBox="0 0 300 420" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="150" cy="65" r="28" stroke="currentColor" stroke-width="1.7" opacity="0.6"/>
            <circle cx="150" cy="65" r="24" stroke="currentColor" stroke-width="1.2" stroke-dasharray="3 3" opacity="0.5"/>
            <path d="M142 65 L158 65 M150 57 L150 73" stroke="currentColor" stroke-width="1.4" opacity="0.7"/>
            <line x1="40" y1="380" x2="260" y2="380" stroke="currentColor" stroke-width="1.4" opacity="0.4"/>
          </svg>
        </div>`;
    case 'polaroid-deck':
      return `
        <div class="orn orn-polaroid-deck">
          <div class="photo-frame f1"></div>
          <div class="photo-frame f2"></div>
        </div>`;
    case 'hearts-delicate':
      return `
        <div class="orn orn-hearts-delicate">
          <svg viewBox="0 0 300 420" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M150 35 C145 28 135 28 130 35 C125 43 135 55 150 64 C165 55 175 43 170 35 C165 28 155 28 150 35 Z" fill="currentColor" opacity="0.55"/>
            <line x1="30" y1="45" x2="120" y2="45" stroke="currentColor" stroke-width="1.4" opacity="0.4"/>
            <line x1="180" y1="45" x2="270" y2="45" stroke="currentColor" stroke-width="1.4" opacity="0.4"/>
          </svg>
        </div>`;
    case 'confetti-sparkle':
      return `
        <div class="orn orn-confetti-sparkle">
          <svg viewBox="0 0 300 420" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="45" cy="45" r="2" fill="currentColor" opacity="0.6"/>
            <circle cx="255" cy="55" r="2.5" fill="currentColor" opacity="0.5"/>
            <rect x="70" y="30" width="3" height="6" transform="rotate(25 70 30)" fill="currentColor" opacity="0.4"/>
            <rect x="220" y="40" width="4" height="7" transform="rotate(-30 220 40)" fill="currentColor" opacity="0.4"/>
            <circle cx="50" cy="370" r="2" fill="currentColor" opacity="0.5"/>
            <circle cx="250" cy="365" r="2.5" fill="currentColor" opacity="0.6"/>
          </svg>
        </div>`;
    default:
      return `
        <div class="orn orn-flourish-gold">
          <svg viewBox="0 0 300 420" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M150 25 L154 35 L164 39 L154 43 L150 53 L146 43 L136 39 L146 35 Z" fill="currentColor" opacity="0.65"/>
            <line x1="40" y1="39" x2="120" y2="39" stroke="currentColor" stroke-width="1.4" opacity="0.4"/>
            <line x1="180" y1="39" x2="260" y2="39" stroke="currentColor" stroke-width="1.4" opacity="0.4"/>
          </svg>
        </div>`;
  }
}

/* Character SVG Line-Art & Animated Silhouette Engine */
function characterSVG(kind) {
  switch (kind) {
    case 'velvet-embrace':
      return `
        <div class="character-art char-velvet-embrace">
          <svg viewBox="0 0 200 130" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g class="anim-couple-embrace">
              <circle cx="94" cy="52" r="8.5" fill="currentColor" opacity="0.9"/>
              <circle cx="106" cy="54" r="8" fill="currentColor" opacity="0.9"/>
              <path d="M80 115 C80 78, 120 78, 120 115 Z" fill="currentColor" opacity="0.85"/>
            </g>
            <path class="anim-petal-1" d="M30 30 C40 20, 50 40, 30 30 Z" fill="currentColor" opacity="0.5"/>
            <path class="anim-petal-2" d="M170 35 C160 25, 150 45, 170 35 Z" fill="currentColor" opacity="0.5"/>
          </svg>
        </div>`;
    case 'paper-moon':
      return `
        <div class="character-art char-paper-moon">
          <svg viewBox="0 0 200 130" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path class="anim-moon-glow" d="M125 15 A 40 40 0 1 0 125 105 A 30 30 0 1 1 125 15 Z" fill="currentColor" opacity="0.75"/>
            <g class="anim-couple-moon">
              <circle cx="95" cy="62" r="7.5" fill="currentColor" opacity="0.9"/>
              <circle cx="107" cy="64" r="7" fill="currentColor" opacity="0.9"/>
              <path d="M86 98 C86 78, 116 78, 116 98 Z" fill="currentColor" opacity="0.85"/>
            </g>
          </svg>
        </div>`;
    default:
      return `
        <div class="character-art char-couple-arch">
          <svg viewBox="0 0 200 130" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path class="anim-star" d="M100 10 L102 17 L109 19 L102 21 L100 28 L98 21 L91 19 L98 17 Z" fill="currentColor" opacity="0.85"/>
            <path class="anim-star-small" d="M40 25 L41 29 L45 30 L41 31 L40 35 L39 31 L35 30 L39 29 Z" fill="currentColor" opacity="0.6"/>
            <path class="anim-star-small" d="M160 28 L161 32 L165 33 L161 34 L160 38 L159 34 L155 33 L159 32 Z" fill="currentColor" opacity="0.6"/>
            <g class="anim-couple-sway">
              <circle cx="88" cy="58" r="9" fill="currentColor" opacity="0.9"/>
              <path d="M76 110 C76 78, 100 78, 100 110 Z" fill="currentColor" opacity="0.85"/>
              <circle cx="112" cy="60" r="8.5" fill="currentColor" opacity="0.9"/>
              <path d="M100 110 C100 80, 124 80, 124 110 Z" fill="currentColor" opacity="0.85"/>
            </g>
          </svg>
        </div>`;
  }
}

/* Card HTML Renderer — a folded notecard: cover, inside, back */
const PAGE_LABELS = ['Cover', 'Inside', 'Back'];

function cardHTML(t, { badge = true } = {}) {
  const c = t.content;
  const paper = t.paperStyle || 'cotton-deboss';
  const charKind = t.characterArt || 'couple-arch';
  const vars = [
    `--c-bg:${t.palette.bg}`,
    `--c-ink:${t.palette.ink}`,
    `--c-accent:${t.palette.accent}`,
    `--c-soft:${t.palette.soft}`,
    `--c-display:${t.fonts.display}`,
    `--c-body:${t.fonts.body}`,
    `--c-title-scale:${t.titleScale ?? 1}`,
  ].join(';');

  return `
    <article class="card card-paper-${paper}${t.foilTitle ? ' has-foil-title' : ''}" data-slug="${t.slug}" data-tone="${t.tone || 'light'}" style="${vars}">
      <div class="card-texture"></div>
      <div class="card-plate"></div>
      <div class="card-shine"></div>
      ${badge && t.new ? '<span class="card-badge">Atelier Edition</span>' : ''}
      ${ornamentHTML(t.ornament)}

      <div class="card-scroll-viewport">
        <!-- Page 1: Cover & Character Artwork -->
        <div class="card-page card-page-cover" data-page-index="0">
          <p class="card-eyebrow">${c.eyebrow}</p>
          ${characterSVG(charKind)}
          <h3 class="card-title">${c.title}</h3>
          <p class="card-sub">${c.sub}</p>
        </div>

        <!-- Page 2: The inside of the fold — the written note -->
        <div class="card-page card-page-letter" data-page-index="1">
          <div class="card-fold"></div>
          <div class="card-letter-badge">✦ Personalized Note ✦</div>
          <p class="card-note">${c.note}</p>
          <p class="card-date">${c.date}</p>
        </div>

        <!-- Page 3: Back — the maker's mark -->
        <div class="card-page card-page-details" data-page-index="2">
          <div class="card-seal">
            <svg viewBox="0 0 80 80" fill="none"><circle cx="40" cy="40" r="35" stroke="currentColor" stroke-width="1.4" stroke-dasharray="4 3"/><circle cx="40" cy="40" r="29" stroke="currentColor" stroke-width="0.8" opacity="0.6"/></svg>
            <span class="card-seal-word">Momento</span>
          </div>
          <p class="card-name">${t.name}</p>
          <p class="card-back-sub">High-Res Card Photo</p>
        </div>
      </div>

      <div class="card-pips" aria-label="Card pages">
        ${PAGE_LABELS.map(
          (label, i) =>
            `<button type="button" class="card-pip${i === 0 ? ' is-active' : ''}" data-pip="${i}"${i === 0 ? ' aria-current="true"' : ''} aria-label="Show ${label.toLowerCase()}"></button>`
        ).join('')}
      </div>
    </article>`;
}

/* Pips: show which page of the fold you're on, and turn to it on click.
   Cards live inside <a> tiles, so clicks must not navigate. */
function initCardPips(container) {
  container.querySelectorAll('.card').forEach((card) => {
    if (card.dataset.pipsInit) return;
    card.dataset.pipsInit = 'true';

    const viewport = card.querySelector('.card-scroll-viewport');
    const pages = [...card.querySelectorAll('.card-page')];
    const pips = [...card.querySelectorAll('.card-pip')];
    if (!viewport || !pips.length) return;

    const setActive = (i) => {
      pips.forEach((p, n) => {
        p.classList.toggle('is-active', n === i);
        if (n === i) p.setAttribute('aria-current', 'true');
        else p.removeAttribute('aria-current');
      });
    };

    pips.forEach((pip, i) => {
      pip.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        goToCardPage(card, i);
      });
    });

    // Wheel-scrolled cards (preview, carousel, order) keep the pips in sync.
    viewport.addEventListener(
      'scroll',
      () => {
        const i = Math.round(viewport.scrollTop / viewport.clientHeight);
        setActive(Math.min(i, pages.length - 1));
      },
      { passive: true }
    );

    card._setActivePip = setActive;
  });
}

/* Single way to turn to a page, whether a pip or a preview tab asked for it. */
function goToCardPage(card, index) {
  const viewport = card.querySelector('.card-scroll-viewport');
  const pages = card.querySelectorAll('.card-page');
  if (!viewport || !pages[index]) return;

  // Grid cards have overflow hidden, so scrollTo is a no-op there — translate instead.
  if (card.closest('.gallery-grid')) {
    viewport.style.transform = `translateY(${-index * 100}%)`;
  } else {
    viewport.scrollTo({ top: pages[index].offsetTop, behavior: 'smooth' });
  }
  if (card._setActivePip) card._setActivePip(index);
}

/* Interactive 3D Cursor Tilt & Specular Lighting Engine */
function init3DTilt(container) {
  const cards = container.querySelectorAll('.card');
  cards.forEach((card) => {
    if (card.dataset.tiltInit || card.closest('.coverflow-track')) return;
    card.dataset.tiltInit = 'true';
    card.classList.add('is-tiltable');

    const handleMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;

      const shineX = (x / rect.width) * 100;
      const shineY = (y / rect.height) * 100;

      card.style.setProperty('--tilt-x', `${rotateX.toFixed(2)}deg`);
      card.style.setProperty('--tilt-y', `${rotateY.toFixed(2)}deg`);
      card.style.setProperty('--shine-x', `${shineX.toFixed(1)}%`);
      card.style.setProperty('--shine-y', `${shineY.toFixed(1)}%`);
    };

    const handleLeave = () => {
      card.style.setProperty('--tilt-x', '0deg');
      card.style.setProperty('--tilt-y', '0deg');
      card.style.setProperty('--shine-x', '50%');
      card.style.setProperty('--shine-y', '50%');
    };

    card.addEventListener('mousemove', handleMove);
    card.addEventListener('mouseleave', handleLeave);
  });
}

/* Landing Page Coverflow Carousel */
function initCarousel(root) {
  const track = root.querySelector('.coverflow-track');
  const dots = root.querySelector('.coverflow-dots');
  let index = Math.floor(TEMPLATES.length / 2);

  track.innerHTML = TEMPLATES.map(
    (t) => `<a class="coverflow-item" href="preview.html?t=${t.slug}">${cardHTML(t)}</a>`
  ).join('');
  dots.innerHTML = TEMPLATES.map((_, i) => `<button type="button" aria-label="Template ${i + 1}"></button>`).join('');

  initCardPips(track);

  const items = [...track.children];
  const dotEls = [...dots.children];

  function layout() {
    items.forEach((el, i) => {
      const d = i - index;
      const abs = Math.abs(d);
      const visible = abs <= 5;
      el.style.transform = `translateX(${d * 48}%) translateZ(${-abs * 95}px) rotateY(${d * -20}deg) scale(${1 - abs * 0.04})`;
      el.style.opacity = visible ? String(Math.max(0.15, 1 - abs * 0.25)) : '0';
      el.style.zIndex = String(100 - abs);
      el.style.pointerEvents = abs === 0 ? 'auto' : visible ? 'auto' : 'none';
      el.classList.toggle('is-active', abs === 0);
    });
    dotEls.forEach((d, i) => d.classList.toggle('is-active', i === index));
  }

  function go(i) {
    index = (i + TEMPLATES.length) % TEMPLATES.length;
    layout();
  }

  root.querySelector('.coverflow-prev').addEventListener('click', () => go(index - 1));
  root.querySelector('.coverflow-next').addEventListener('click', () => go(index + 1));
  dotEls.forEach((d, i) => d.addEventListener('click', () => go(i)));
  items.forEach((el, i) =>
    el.addEventListener('click', (e) => {
      if (i !== index) {
        e.preventDefault();
        go(i);
      }
    })
  );

  let startX = null;
  track.addEventListener('touchstart', (e) => (startX = e.touches[0].clientX), { passive: true });
  track.addEventListener('touchend', (e) => {
    if (startX === null) return;
    const dx = e.changedTouches[0].clientX - startX;
    if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1));
    startX = null;
  }, { passive: true });

  layout();
}

/* Gallery with Filter Pills & Real-time Search */
function initGallery(root) {
  const grid = root.querySelector('.gallery-grid');
  const filters = root.querySelector('.gallery-filters');
  const searchInput = root.querySelector('.gallery-search');
  const count = root.querySelector('.gallery-count');
  const keys = ['all', ...Object.keys(OCCASIONS)];
  let activeOccasion = 'all';

  filters.innerHTML = keys
    .map((k) => `<button type="button" data-occasion="${k}">${k === 'all' ? 'All' : OCCASIONS[k]}</button>`)
    .join('');

  function render() {
    const query = searchInput ? searchInput.value.trim().toLowerCase() : '';
    const list = TEMPLATES.filter((t) => {
      const matchOccasion = activeOccasion === 'all' || t.occasion === activeOccasion;
      const matchSearch =
        !query ||
        t.name.toLowerCase().includes(query) ||
        t.desc.toLowerCase().includes(query) ||
        t.tags.some((tag) => tag.toLowerCase().includes(query)) ||
        OCCASIONS[t.occasion].toLowerCase().includes(query);
      return matchOccasion && matchSearch;
    });

    grid.innerHTML = list.length
      ? list
          .map(
            (t) => `
            <a class="gallery-item" href="preview.html?t=${t.slug}">
              <div class="gallery-card">${cardHTML(t)}</div>
              <div class="gallery-meta">
                <h3>${t.name} <span>${OCCASIONS[t.occasion]}</span></h3>
                <p>${t.desc}</p>
                <ul>${t.tags.map((x) => `<li>${x}</li>`).join('')}</ul>
                <p class="gallery-price">${fmtPrice(t.price)}</p>
              </div>
            </a>`
          )
          .join('')
      : `<div class="gallery-empty"><p>No designs match your search criteria.</p></div>`;

    count.textContent = `${list.length} ${list.length === 1 ? 'design' : 'designs'}`;
    [...filters.children].forEach((b) => b.classList.toggle('is-active', b.dataset.occasion === activeOccasion));
    init3DTilt(grid);
    initCardPips(grid);
  }

  filters.addEventListener('click', (e) => {
    const btn = e.target.closest('button');
    if (btn) {
      activeOccasion = btn.dataset.occasion;
      render();
      history.replaceState(null, '', activeOccasion === 'all' ? location.pathname : `?o=${activeOccasion}`);
    }
  });

  if (searchInput) {
    searchInput.addEventListener('input', render);
  }

  const initial = new URLSearchParams(location.search).get('o');
  activeOccasion = keys.includes(initial) ? initial : 'all';
  render();
}

/* Interactive Preview Page & Live Customizer Sandbox */
function initPreview(root) {
  const slug = new URLSearchParams(location.search).get('t');
  const t = bySlug(slug) || TEMPLATES[0];

  const stage = root.querySelector('.preview-stage');
  stage.innerHTML = cardHTML(t, { badge: false });

  root.querySelector('.preview-name').textContent = t.name;
  root.querySelector('.preview-occasion').textContent = OCCASIONS[t.occasion];
  root.querySelector('.preview-desc').textContent = t.desc;
  root.querySelector('.preview-tags').innerHTML = t.tags.map((x) => `<li>${x}</li>`).join('');
  root.querySelector('.preview-price').textContent = fmtPrice(t.price);
  root.querySelector('.preview-order').href = `order.html?t=${t.slug}`;
  document.title = `${t.name} · Atelier Momento`;

  /* Bind Live Customizer Sandbox fields */
  const inEyebrow = root.querySelector('#c-eyebrow');
  const inTitle = root.querySelector('#c-title');
  const inSub = root.querySelector('#c-sub');
  const inDate = root.querySelector('#c-date');
  const inNote = root.querySelector('#c-note');
  const fontBtns = root.querySelectorAll('.btn-font-option');

  if (inEyebrow) inEyebrow.value = t.content.eyebrow;
  if (inTitle) inTitle.value = t.content.title;
  if (inSub) inSub.value = t.content.sub;
  if (inDate) inDate.value = t.content.date;
  if (inNote) inNote.value = t.content.note;

  function updateLiveCard() {
    const cardEl = stage.querySelector('.card');
    if (!cardEl) return;
    if (inEyebrow) cardEl.querySelector('.card-eyebrow').textContent = inEyebrow.value || t.content.eyebrow;
    if (inTitle) cardEl.querySelector('.card-title').textContent = inTitle.value || t.content.title;
    if (inSub) cardEl.querySelector('.card-sub').textContent = inSub.value || t.content.sub;
    if (inDate) cardEl.querySelector('.card-date').textContent = inDate.value || t.content.date;
    if (inNote) cardEl.querySelector('.card-note').textContent = inNote.value || t.content.note;
  }

  [inEyebrow, inTitle, inSub, inDate, inNote].forEach((input) => {
    if (input) input.addEventListener('input', updateLiveCard);
  });

  fontBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      fontBtns.forEach((b) => b.classList.remove('is-active'));
      btn.classList.add('is-active');
      const cardEl = stage.querySelector('.card');
      if (cardEl) {
        cardEl.style.setProperty('--c-display', btn.dataset.fontDisplay);
        cardEl.style.setProperty('--c-body', btn.dataset.fontBody);
      }
    });
  });

  // Tabs and the card's own pips are two controls over one position, so both
  // follow the card rather than tracking state separately.
  const pageTabs = [...root.querySelectorAll('.btn-card-page')];
  const markTab = (i) => pageTabs.forEach((b, n) => b.classList.toggle('is-active', n === i));

  pageTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const cardEl = stage.querySelector('.card');
      if (cardEl) goToCardPage(cardEl, parseInt(tab.dataset.page, 10));
    });
  });

  const stageViewport = stage.querySelector('.card-scroll-viewport');
  if (stageViewport) {
    stageViewport.addEventListener(
      'scroll',
      () => markTab(Math.min(Math.round(stageViewport.scrollTop / stageViewport.clientHeight), pageTabs.length - 1)),
      { passive: true }
    );
  }

  const others = TEMPLATES.filter((x) => x.slug !== t.slug).slice(0, 4);
  const moreGrid = root.querySelector('.preview-more-grid');
  if (moreGrid) {
    moreGrid.innerHTML = others
      .map((x) => `<a class="preview-more-item" href="preview.html?t=${x.slug}">${cardHTML(x)}<span>${x.name}</span></a>`)
      .join('');
    init3DTilt(moreGrid);
    initCardPips(moreGrid);
  }

  init3DTilt(stage);
  initCardPips(stage);
}

/* Order Page with Live Synchronized Card Summary */
function orderMessage(t, get) {
  return [
    'Momento Atelier Order',
    `Design: ${t.name} (${fmtPrice(t.price)})`,
    `Occasion: ${get('occasion')}`,
    `Name: ${get('name')}`,
    `Phone: ${get('phone')}`,
    get('email') && `Email: ${get('email')}`,
    get('names') && `Names on Card: ${get('names')}`,
    get('date') && `Date: ${get('date')}`,
    get('contact') && `Preferred Contact: ${get('contact')}`,
    get('message') && `Wording & Notes: ${get('message')}`,
  ]
    .filter(Boolean)
    .join('\n');
}

function initOrder(root) {
  const form = root.querySelector('.order-form');
  const summary = root.querySelector('.order-summary');
  const design = form.elements.design;
  const occasion = form.elements.occasion;
  const waBtn = root.querySelector('.order-wa');
  const errorBox = root.querySelector('.order-error');
  const done = root.querySelector('.order-done');

  design.innerHTML = TEMPLATES.map(
    (t) => `<option value="${t.slug}">${t.name} — ${fmtPrice(t.price)}</option>`
  ).join('');
  occasion.innerHTML = Object.values(OCCASIONS).map((v) => `<option>${v}</option>`).join('');

  const chosen = bySlug(new URLSearchParams(location.search).get('t')) || TEMPLATES[0];
  design.value = chosen.slug;
  occasion.value = OCCASIONS[chosen.occasion];

  function drawSummary() {
    const t = bySlug(design.value);
    summary.querySelector('.order-card').innerHTML = cardHTML(t, { badge: false });
    summary.querySelector('.order-name').textContent = t.name;
    summary.querySelector('.order-occasion').textContent = OCCASIONS[t.occasion];
    summary.querySelector('.order-price').textContent = fmtPrice(t.price);
    init3DTilt(summary.querySelector('.order-card'));
    initCardPips(summary.querySelector('.order-card'));
    syncFormToCard();
  }

  function syncFormToCard() {
    const cardEl = summary.querySelector('.order-card .card');
    if (!cardEl) return;
    const t = bySlug(design.value);
    const val = (name) => (form.elements[name] ? form.elements[name].value : '');

    // Fall back to the template's own words when a field is cleared, so emptying
    // an input never strands the previous value on the card.
    cardEl.querySelector('.card-title').textContent = val('names') || t.content.title;
    cardEl.querySelector('.card-date').textContent = val('date') || t.content.date;
    cardEl.querySelector('.card-note').textContent = val('message') || t.content.note;
  }

  design.addEventListener('change', drawSummary);
  form.addEventListener('input', syncFormToCard);
  drawSummary();



  if (!WHATSAPP) {
    if (waBtn) waBtn.hidden = true;
  } else if (waBtn) {
    const syncWa = () => (waBtn.disabled = !form.checkValidity());
    form.addEventListener('input', syncWa);
    syncWa();
    waBtn.addEventListener('click', () => {
      const f = new FormData(form);
      const text = orderMessage(bySlug(design.value), (k) => f.get(k));
      window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`, '_blank', 'noopener');
    });
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const submit = form.querySelector('[type=submit]');
    submit.disabled = true;
    errorBox.hidden = true;

    if (ORDER_ENDPOINT) {
      try {
        const res = await fetch(ORDER_ENDPOINT, {
          method: 'POST',
          body: new FormData(form),
          headers: { Accept: 'application/json' },
        });
        if (!res.ok) throw new Error(res.status);
      } catch (err) {
        submit.disabled = false;
        errorBox.hidden = false;
        return;
      }
    } else {
      console.warn('ORDER_ENDPOINT is empty — order local confirmation mode.');
    }

    form.hidden = true;
    done.hidden = false;
    done.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
}

/* Contact channels — each row is driven by its constant, and hides when unset
   so an unconfigured channel never renders as a dead link. */
function initContact() {
  const channels = {
    whatsapp: WHATSAPP && { href: `https://wa.me/${WHATSAPP}`, value: PHONE || 'Message us directly' },
    email: EMAIL && { href: `mailto:${EMAIL}`, value: EMAIL },
    phone: PHONE && { href: `tel:${PHONE.replace(/[^\d+]/g, '')}`, value: PHONE },
  };

  document.querySelectorAll('[data-channel]').forEach((row) => {
    const channel = channels[row.dataset.channel];
    if (!channel) {
      row.hidden = true;
      return;
    }
    const link = row.querySelector('a');
    if (link) link.href = channel.href;
    const value = row.querySelector('.channel-value');
    if (value) value.textContent = channel.value;
  });

  // Social profiles: same empty-means-hidden contract as the rows above.
  const socials = { instagram: INSTAGRAM, facebook: FACEBOOK, tiktok: TIKTOK };
  document.querySelectorAll('[data-social]').forEach((item) => {
    const href = socialUrl(item.dataset.social, socials[item.dataset.social] || '');
    if (!href) {
      item.hidden = true;
      return;
    }
    const link = item.querySelector('a');
    if (link) link.href = href;
  });

  // With no handles at all the framing copy would sit above an empty row,
  // so the whole block goes rather than half of it.
  const socialBlock = document.querySelector('#live-preview');
  if (socialBlock && !Object.values(socials).some((h) => h.trim())) {
    socialBlock.hidden = true;
  }

  document.querySelectorAll('[data-reply-window]').forEach((el) => {
    el.textContent = REPLY_WINDOW;
  });

  // Footer email link, shared by every page.
  document.querySelectorAll('[data-footer-email]').forEach((el) => {
    if (!EMAIL) {
      const item = el.closest('li');
      (item || el).hidden = true;
      return;
    }
    el.href = `mailto:${EMAIL}`;
    el.textContent = EMAIL;
  });
}

/* Shared Chrome Navigation & Scroll Reveals */
function initNav() {
  const nav = document.querySelector('.nav');
  if (!nav) return;
  const onScroll = () => nav.classList.toggle('is-stuck', window.scrollY > 12);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  const toggle = nav.querySelector('.nav-toggle');
  if (toggle) toggle.addEventListener('click', () => nav.classList.toggle('is-open'));
}

function initReveal() {
  const els = document.querySelectorAll('[data-reveal]');
  if (!els.length) return;
  if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) {
    els.forEach((el) => el.classList.add('is-in'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => e.isIntersecting && (e.target.classList.add('is-in'), io.unobserve(e.target))),
    { rootMargin: '0px 0px -12% 0px' }
  );
  els.forEach((el) => io.observe(el));
}

/* Selftest Diagnostic Engine */
function selftest() {
  let failed = 0;
  const assert = (cond, ...rest) => {
    if (!cond) failed++;
    console.assert(cond, ...rest);
  };
  const build = (fields) => orderMessage(bySlug('gold-leaf'), (k) => fields[k] || '');

  const bare = build({ occasion: 'Anniversary', name: 'Anne & Peter', phone: '0170000' });
  assert(
    bare.includes('Design: Royal Gold Foil (৳1,500)'),
    'bare order message',
    JSON.stringify(bare)
  );

  const full = build({ occasion: 'Anniversary', name: 'A', phone: '1', message: 'two\nlines' });
  assert(full.endsWith('Wording & Notes: two\nlines'), 'multi-line detail survives', JSON.stringify(full));
  assert(decodeURIComponent(encodeURIComponent(full)) === full, 'round-trips through the wa.me URL');

  assert(TEMPLATES.every((x) => typeof x.price === 'number'), 'every design is priced');
  assert(!bySlug('nonsense'), 'unknown slug returns nothing, so callers fall back');

  // Card markup: the press impression needs a tone, the title needs a scale.
  const markup = cardHTML(bySlug('velvet-rose'));
  assert(markup.includes('data-tone="dark"'), 'dark stock is tagged so the deboss inverts');
  assert(cardHTML(bySlug('gold-leaf')).includes('data-tone="light"'), 'light stock defaults to light tone');
  assert(markup.includes('--c-title-scale:1'), 'titleScale falls back to 1 when unset');
  assert(
    cardHTML(bySlug('paper-moon')).includes('--c-title-scale:0.82'),
    'Cinzel titles are scaled down so long lines fit'
  );
  assert((markup.match(/class="card-pip[ "]/g) || []).length === 3, 'three pips, one per page of the fold');
  assert(!markup.includes('card-scroll-hint'), 'the scroll hint is gone');

  // Social handles: bare or @-prefixed must land on the same profile, and an
  // empty handle must yield no URL so the icon hides instead of linking nowhere.
  assert(socialUrl('instagram', 'momento.cards') === 'https://instagram.com/momento.cards', 'instagram url');
  assert(socialUrl('facebook', 'momentocards') === 'https://facebook.com/momentocards', 'facebook url');
  assert(socialUrl('tiktok', 'momento') === 'https://tiktok.com/@momento', 'tiktok url gets its @');
  assert(socialUrl('tiktok', '@momento') === 'https://tiktok.com/@momento', 'a pasted @ never doubles');
  assert(socialUrl('instagram', '  @momento  ') === 'https://instagram.com/momento', 'handles are trimmed');
  assert(socialUrl('instagram', '') === '', 'empty handle yields no url');
  assert(socialUrl('myspace', 'momento') === '', 'unknown platform yields no url');

  // Every dark template must declare its tone, or its text presses the wrong way.
  const darkBgs = TEMPLATES.filter((x) => {
    const [r, g, b] = [1, 3, 5].map((i) => parseInt(x.palette.bg.slice(i, i + 2), 16));
    return (r * 299 + g * 587 + b * 114) / 1000 < 128;
  });
  assert(
    darkBgs.every((x) => x.tone === 'dark'),
    'every dark-background template is tagged tone:dark',
    darkBgs.filter((x) => x.tone !== 'dark').map((x) => x.slug)
  );

  console.log(failed ? `selftest: ${failed} assertion(s) FAILED — see above` : 'selftest done — all assertions passed!');
  return failed;
}

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initReveal();
  initContact();
  const carousel = document.querySelector('.coverflow');
  const gallery = document.querySelector('.gallery');
  const preview = document.querySelector('.preview');
  const order = document.querySelector('.order');
  if (carousel) initCarousel(carousel);
  if (gallery) initGallery(gallery);
  if (preview) initPreview(preview);
  if (order) initOrder(order);
  if (new URLSearchParams(location.search).has('selftest')) selftest();
});
