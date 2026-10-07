// Fetches the REAL product photo and the correct product link for every machine from 1fdm.com.
// Run it on your own computer (needs Node 18+ and internet):   node get-images.mjs
// It writes products.json next to index.html; the site picks it up automatically.
import fs from 'node:fs';

const BASE = (process.env.BASE || 'https://1fdm.com').replace(/\/$/, '');
const slug = s => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const code = fs.readFileSync(new URL('./script.js', import.meta.url), 'utf8');
const rawMatch = code.match(/const RAW = `([\s\S]*?)`;/);
if (!rawMatch) throw new Error('Could not find RAW in script.js');

const items = rawMatch[1].split('\n').map(l => l.split('|')).map(([name, cat, sub, path]) => ({ name, cat, sub, path }));

const sleep = ms => new Promise(r => setTimeout(r, ms));
const headers = {
  'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8'
};

const get = async u => {
  try {
    const r = await fetch(u, { headers, redirect: 'follow' });
    return r.ok ? await r.text() : null;
  } catch { return null; }
};
const abs = (u, from) => { try { return new URL(u.replace(/&amp;/g, '&'), from).href; } catch { return null; } };
const bad = u => !u || /no_image|placeholder|logo|transparent/i.test(u);
const words = s => new Set(s.toLowerCase().replace(/[^a-z0-9 ]+/g, ' ').split(/\s+/).filter(w => w.length > 1));
const score = (a, b) => { const A = words(a), B = words(b); let n = 0; A.forEach(w => B.has(w) && n++); return n / Math.max(A.size, B.size, 1); };

function cleanText(t) {
  return (t || '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

const ogImage = (html, from) => {
  const m = html.match(/<meta[^>]+property=["']og:image["'][^>]+content=["']([^"']+)["']/i) ||
            html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:image["']/i);
  const u = m && abs(m[1], from);
  return bad(u) ? null : u;
};
const pageTitle = html => (html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1] || html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] || '').replace(/<[^>]+>/g, '').trim();

function parseSpecs(html) {
  const specs = {};
  const specBlockMatch = html.match(/(?:Product|Technical)\s+Specifications:([\s\S]*?)(?:Applications:|<div class=["']tab|<div class=["']footer|<\/div>\s*<\/div>\s*<\/div>)/i);
  if (specBlockMatch) {
    const rawText = specBlockMatch[1]
      .replace(/<br\s*\/?>/gi, '\n')
      .replace(/<\/p>/gi, '\n')
      .replace(/<\/tr>/gi, '\n')
      .replace(/<[^>]+>/g, ' ');
    for (let line of rawText.split('\n')) {
      line = cleanText(line);
      const colonIdx = line.indexOf(':');
      if (colonIdx > 0 && colonIdx < 40) {
        const k = line.slice(0, colonIdx).trim();
        const v = line.slice(colonIdx + 1).trim();
        if (k && v && !/^(http|www|javascript)/i.test(k) && k.length > 1 && k.length < 35 && v.length < 150) {
          specs[k] = v;
        }
      }
    }
  }
  const tableMatches = [...html.matchAll(/<table[\s\S]*?<\/table>/gi)];
  for (const tm of tableMatches) {
    const rows = [...tm[0].matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/gi)];
    for (const r of rows) {
      const cols = [...r[1].matchAll(/<(?:td|th)[^>]*>([\s\S]*?)<\/(?:td|th)>/gi)].map(m => cleanText(m[1]));
      if (cols.length === 2 && cols[0] && cols[1] && cols[0].length < 40 && cols[1].length < 150) {
        if (!/^(feature|specification|description)/i.test(cols[0]) && !specs[cols[0]]) {
          specs[cols[0]] = cols[1];
        }
      }
    }
  }
  return specs;
}

function parseBrand(html, specs, name) {
  for (const key of ['Brand', 'Manufacturer', 'Manufactured By']) {
    if (specs[key]) return specs[key];
  }
  const knownBrands = ['Sirman', 'Butler', 'Dean', 'Frymaster', 'Hoshizaki', 'KitchenAid', 'Andal Food Machineries'];
  for (const kb of knownBrands) {
    if (name.toLowerCase().includes(kb.toLowerCase())) return kb;
  }
  return '1FDM';
}

function parseDescription(html) {
  const metaDescMatch = html.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i) ||
                        html.match(/<meta\s+property=["']og:description["']\s+content=["']([^"']+)["']/i);
  let desc = metaDescMatch ? cleanText(metaDescMatch[1]) : '';
  const descBlockMatch = html.match(/Show more" data-hidetext=" Show less">\s*([\s\S]*?)(?:Product Specifications:|Technical Specifications:|<table|<div class=)/i);
  if (descBlockMatch) {
    const detail = cleanText(descBlockMatch[1].replace(/<[^>]+>/g, ' '));
    if (detail && detail.length > desc.length && !detail.startsWith('Show more')) {
      desc = detail;
    }
  }
  return desc;
}

function parseTags(html) {
  const metaKwMatch = html.match(/<meta\s+name=["']keywords["']\s+content=["']([^"']+)["']/i);
  if (metaKwMatch) {
    return metaKwMatch[1].split(',').map(s => cleanText(s)).filter(s => s.length > 1);
  }
  return [];
}

async function tryPage(url, name) {
  const html = await get(url); if (!html) return null;
  const img = ogImage(html, url); if (!img) return null;
  return score(name, pageTitle(html)) >= 0.5 ? { url, image: img, html } : null;
}

async function viaSearch(name) {
  const sUrl = `${BASE}/index.php?route=product/search&search=${encodeURIComponent(name)}`;
  const html = await get(sUrl); if (!html) return null;
  const cards = [...html.matchAll(/<a[^>]+href=["']([^"']+)["'][^>]*>\s*<img[^>]+(?:src|data-src)=["']([^"']+)["'][^>]*>/gi)]
    .map(m => ({ href: abs(m[1], sUrl), img: abs(m[2], sUrl), alt: (m[0].match(/(?:alt|title)=["']([^"']*)["']/i) || [])[1] || '' }))
    .filter(c => c.href && c.href.startsWith(BASE) && !bad(c.img));
  let best = null, bs = 0;
  for (const c of cards) { const sc = score(name, c.alt || decodeURIComponent(c.href.split('/').pop())); if (sc > bs) { bs = sc; best = c; } }
  if (!best || bs < 0.5) return null;
  const p = await tryPage(best.href, name);
  return p || { url: best.href, image: best.img, html: null };
}

const out = [], missed = [];
for (const [i, it] of items.entries()) {
  const first = `${BASE}/${it.path || slug(it.name)}`;
  const found = (await tryPage(first, it.name)) || (await viaSearch(it.name));
  if (found) {
    const html = found.html || (await get(found.url)) || '';
    const specs = parseSpecs(html);
    const brand = parseBrand(html, specs, it.name);
    const description = parseDescription(html);
    const tags = parseTags(html);

    if (!specs['Brand'] && brand) specs['Brand'] = brand;
    if (!specs['Machine Type']) specs['Machine Type'] = it.sub;

    const capMatch = it.name.match(/(\d+(?:\+\d+)?\s*(?:Litre|Liter|L|Kg|kg|Birds?|Pans?|Gram|g)\b)/i);
    if (capMatch && !specs['Capacity']) specs['Capacity'] = capMatch[1];

    out.push({
      name: it.name,
      category: it.cat,
      subcategory: it.sub,
      image: found.image,
      url: found.url,
      brand,
      description,
      specifications: specs,
      tags
    });
    console.log(`[${i + 1}/${items.length}] OK    ${it.name}`);
  } else {
    missed.push(it.name);
    console.log(`[${i + 1}/${items.length}] MISS  ${it.name}`);
  }
  await sleep(350);
}
fs.writeFileSync(new URL('./products.json', import.meta.url), JSON.stringify(out, null, 2));
console.log(`\nSaved products.json with ${out.length} products.`);
if (missed.length) console.log('Not found:\n - ' + missed.join('\n - '));
