/* Machine illustrations: one clean drawing per machine type, generated as inline SVG (no external images). */
const ART = (() => {
  const S = '#d9dfe4', D = '#3f4a54', M = '#98a4ae', R = '#c8102e', G = '#2b333a', O = '#e9a23b', B = '#b9854c', W = '#ffffff';
  const sw = `stroke="${D}" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"`;
  const box = (x, y, w, h, f = S, r = 5) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${f}" ${sw}/>`;
  const circ = (x, y, r, f = S) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${f}" ${sw}/>`;
  const ell = (x, y, rx, ry, f = S) => `<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="${f}" ${sw}/>`;
  const ln = (x1, y1, x2, y2, c = D, w = 2) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${c}" stroke-width="${w}" stroke-linecap="round"/>`;
  const poly = (pts, f = S) => `<polygon points="${pts}" fill="${f}" ${sw}/>`;
  const feet = (a, b, y = 128) => box(a, y, 10, 6, D, 2) + box(b, y, 10, 6, D, 2);
  const deck = y => box(38, y, 124, 46, S) + box(48, y + 8, 82, 30, G, 3) + ln(52, y + 24, 126, y + 24, M, 1.5) + circ(146, y + 15, 5, W) + circ(146, y + 32, 5, W);
  const fryer = gas => box(40, 62, 120, 62, S) + box(48, 40, 44, 24, M, 4) + box(108, 40, 44, 24, M, 4) + ln(54, 40, 54, 26) + ln(54, 26, 84, 26) + ln(114, 40, 114, 26) + ln(114, 26, 144, 26) + box(52, 76, 96, 20, G, 3) + circ(66, 110, 6, W) + circ(134, 110, 6, W) + (gas ? poly('96,122 100,108 104,122', R) : box(88, 106, 24, 10, R, 2)) + feet(46, 144);
  const glass = (x, y, w, h) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="4" fill="#e6f1f7" fill-opacity=".75" ${sw}/>`;
  const chicken = (x, y) => ell(x, y, 11, 8, B) + ell(x - 6, y - 4, 4, 3, '#cf9a5f');
  const pan = (x, y, w) => box(x, y, w, 10, M, 2);
  const A = {
    'Baking Ovens': deck(60) + feet(46, 144, 106),
    'Commercial Ovens': deck(50) + box(38, 100, 124, 22, S) + circ(70, 111, 5, W) + box(90, 106, 54, 10, G, 2) + feet(46, 144, 122),
    'Pizza Ovens': deck(38) + deck(86) + feet(46, 144, 132),
    'Waffle Makers': box(46, 88, 108, 24, S) + box(50, 66, 100, 24, M) + ln(62, 74, 138, 74, D, 1.5) + ln(62, 82, 138, 82, D, 1.5) + ln(82, 68, 82, 88, D, 1.5) + ln(100, 68, 100, 88, D, 1.5) + ln(118, 68, 118, 88, D, 1.5) + ln(150, 72, 172, 58, D, 4) + circ(70, 100, 5, R) + feet(54, 136, 112),
    'Shawarma Machines': box(52, 112, 96, 14, S) + ln(100, 22, 100, 112, D, 3) + poly('78,40 122,40 116,104 84,104', B) + ln(82, 56, 118, 56, '#8a5a2b', 2) + ln(84, 72, 116, 72, '#8a5a2b', 2) + ln(85, 88, 115, 88, '#8a5a2b', 2) + box(42, 34, 8, 76, R, 2) + box(150, 34, 8, 76, R, 2),
    'Rotisserie': box(36, 40, 128, 86, S) + glass(44, 48, 112, 60) + ln(50, 66, 150, 66, D) + ln(50, 90, 150, 90, D) + chicken(70, 66) + chicken(100, 66) + chicken(130, 66) + chicken(70, 90) + chicken(100, 90) + chicken(130, 90) + circ(60, 118, 4, R) + circ(76, 118, 4, W) + feet(44, 146, 126),
    'Popcorn Machines': box(52, 92, 96, 34, S) + box(60, 100, 20, 18, R, 3) + glass(56, 36, 88, 58) + circ(76, 78, 8, W) + circ(94, 70, 9, '#fff4c7') + circ(114, 80, 8, W) + circ(100, 52, 8, '#fff4c7') + circ(128, 66, 7, W) + circ(80, 56, 7, '#fff4c7') + ln(100, 36, 100, 26, D, 3) + ell(100, 24, 14, 4, R),
    'Bain Marie': box(24, 74, 152, 46, S) + pan(34, 66, 40) + pan(80, 66, 40) + pan(126, 66, 40) + ln(34, 66, 74, 66, M) + circ(44, 106, 5, R) + circ(60, 106, 5, W) + feet(34, 156, 120),
    'Food Warmers': box(44, 112, 112, 12, S) + glass(44, 50, 112, 62) + ln(44, 82, 156, 82, D) + box(54, 62, 24, 18, B, 8) + box(88, 62, 24, 18, B, 8) + box(122, 62, 24, 18, B, 8) + box(54, 92, 24, 18, B, 8) + box(88, 92, 24, 18, B, 8) + box(122, 92, 24, 18, B, 8),
    'Planetary Mixers': box(56, 120, 88, 10, D, 3) + box(110, 40, 20, 82, S) + box(62, 28, 76, 26, S, 12) + ln(86, 54, 86, 76, D, 4) + poly('76,76 96,76 90,92 82,92', M) + `<path d="M62 92 H110 L104 122 H68 Z" fill="${M}" ${sw}/>` + circ(124, 38, 4, R),
    'Dough Kneaders': box(54, 70, 92, 56, S) + `<path d="M62 70 Q62 98 100 98 Q138 98 138 70 Z" fill="${M}" ${sw}/>` + ell(100, 70, 38, 7, '#f2e6cf') + ln(100, 30, 100, 66, D, 4) + box(72, 22, 56, 14, S, 7) + circ(120, 112, 5, R) + feet(60, 130, 126),
    'Electric Fryers': fryer(false),
    'Gas Fryers': fryer(true),
    'Vegetable Cutters': poly('62,24 110,24 100,66 72,66', M) + box(52, 66, 96, 58, S) + circ(100, 96, 18, M) + ln(100, 80, 100, 112, D, 1.5) + ln(84, 96, 116, 96, D, 1.5) + box(148, 100, 30, 14, M, 3) + circ(66, 110, 5, R) + feet(58, 132, 124),
    'Slicers': box(40, 100, 120, 24, S) + circ(86, 78, 34, M) + circ(86, 78, 8, D) + ln(86, 44, 86, 112, D, 1.5) + ln(52, 78, 120, 78, D, 1.5) + box(124, 56, 36, 14, S, 3) + circ(146, 112, 5, R),
    'Potato Peelers': `<path d="M52 56 L148 56 L140 112 L60 112 Z" fill="${S}" ${sw}/>` + ell(100, 56, 48, 10, M) + ell(100, 112, 40, 8, M) + box(140, 80, 30, 14, S, 3) + box(60, 112, 80, 14, D, 3) + circ(90, 80, 6, B) + circ(110, 90, 6, B) + circ(100, 70, 5, B),
    'Coconut Scrapers': box(44, 92, 112, 32, S) + box(88, 60, 24, 34, M) + circ(100, 52, 20, '#8a5a2b') + circ(100, 52, 14, W) + ln(100, 32, 100, 22, D, 3) + circ(66, 108, 5, R) + feet(50, 140, 124),
    'Vertical Chillers': box(60, 16, 80, 110, S) + glass(66, 24, 68, 90) + ln(66, 54, 134, 54, D) + ln(66, 84, 134, 84, D) + box(74, 36, 14, 18, '#cfe9f5', 2) + box(96, 36, 14, 18, '#cfe9f5', 2) + box(74, 66, 14, 18, '#cfe9f5', 2) + box(96, 66, 14, 18, '#cfe9f5', 2) + ln(128, 40, 128, 100, D, 3) + feet(66, 124, 126),
    'Display Chillers': box(24, 84, 152, 38, S) + `<path d="M24 84 L36 52 H164 L176 84 Z" fill="#e6f1f7" fill-opacity=".8" ${sw}/>` + box(46, 62, 28, 10, '#f3b8a0', 5) + box(86, 62, 28, 10, '#f3d58c', 5) + box(126, 62, 28, 10, '#f3b8a0', 5) + ln(40, 76, 160, 76, M, 1.5) + feet(34, 156, 122),
    'Prep Counters': box(24, 60, 152, 66, S) + box(30, 42, 140, 18, M, 3) + pan(36, 46, 30) + pan(72, 46, 30) + pan(108, 46, 30) + ln(100, 60, 100, 126, D) + ln(62, 60, 62, 126, D) + ln(138, 60, 138, 126, D) + circ(94, 94, 3, D) + circ(106, 94, 3, D),
    'Juice Dispensers': box(30, 112, 140, 14, S) + glass(36, 40, 40, 72) + glass(80, 40, 40, 72) + glass(124, 40, 40, 72) + box(40, 70, 32, 40, O, 3) + box(84, 70, 32, 40, '#e8532f', 3) + box(128, 70, 32, 40, '#9bc53d', 3) + box(40, 30, 32, 10, R, 3) + box(84, 30, 32, 10, R, 3) + box(128, 30, 32, 10, R, 3),
    'Sugarcane Machines': box(46, 70, 108, 52, S) + circ(82, 60, 16, M) + circ(118, 60, 16, M) + ln(60, 30, 96, 52, '#6fa83a', 6) + ln(40, 22, 80, 46, '#8fc04f', 6) + box(60, 108, 80, 16, G, 3) + circ(160, 100, 5, R) + feet(52, 136, 122),
    'Water Coolers': box(60, 52, 80, 74, S) + box(76, 70, 48, 20, G, 3) + circ(88, 104, 5, '#4a90d9') + circ(112, 104, 5, R) + `<path d="M80 52 V28 Q80 16 100 16 Q120 16 120 28 V52 Z" fill="#cfe9f5" ${sw}/>` + feet(66, 124, 126),
    'Grinders': box(54, 96, 92, 28, S) + `<path d="M58 44 L142 44 L130 98 L70 98 Z" fill="${M}" ${sw}/>` + ell(100, 44, 42, 8, '#efe9dc') + box(88, 28, 24, 10, D, 3) + ln(100, 36, 100, 44, D, 3) + circ(72, 110, 5, R) + feet(60, 130, 124),
    'Poultry Equipment': box(46, 86, 108, 38, S) + `<path d="M56 36 H144 V90 H56 Z" fill="${M}" ${sw}/>` + ell(100, 36, 44, 9, S) + ell(100, 66, 16, 11, '#f1dfc2') + ell(88, 60, 5, 4, '#f1dfc2') + ln(70, 52, 70, 80, D, 1.5) + ln(130, 52, 130, 80, D, 1.5) + circ(72, 108, 5, R) + feet(56, 140, 124)
  };
  const TINT = { bakery: '#fdf2e4', cooking: '#fdeceb', mixing: '#eef4fb', frying: '#fff4dc', cutting: '#eef7ea', fruitveg: '#eef7ea', refrigeration: '#e8f3fa', beverage: '#fdf0e8', grinding: '#f3eefa', meat: '#fbeeee' };
  const cache = {};
  return (sub, cat) => cache[sub + cat] ||= 'data:image/svg+xml;utf8,' + encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 150"><rect width="200" height="150" fill="${TINT[cat] || '#f3f4f5'}"/><ellipse cx="100" cy="134" rx="70" ry="5" fill="#000" opacity=".07"/>${A[sub] || box(50, 40, 100, 80)}</svg>`);
})();

