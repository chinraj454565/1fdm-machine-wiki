/* 1FDM MachineWiki: an information site about commercial food machinery. Product names and links come from 1fdm.com. No prices are shown. */
const CATS = {
  bakery:["Bakery Machinery","Ovens and baking equipment for bakeries, pizzerias and cafes.","Heated chamber baking","Bread, pastries, cookies, pizza","Bakeries, Pizzerias, Cafes, Hotels","Heating elements warm a chamber to a set temperature, and a thermostat holds it while food bakes on trays or a stone base.","Even, repeatable baking in a small footprint","Limited batch size; needs power and ventilation","Tray size, power supply, daily output, floor space"],
  cooking:["Cooking Equipment","Waffle makers, rotisseries, bain maries and other hot-line equipment.","Direct or contact heat","Waffles, grilling, roasting, hot holding","Restaurants, Cafes, Street food, Catering","Heating plates, elements or burners bring the food surface or holding well to temperature. Controls set the heat level.","Fast service and consistent results","Surfaces need daily cleaning; electrical load can be high","Power or gas type, capacity, cleaning access, footprint"],
  mixing:["Mixing Equipment","Planetary mixers and kneaders for dough and batter.","Mechanical mixing and kneading","Dough, batter, cream, atta","Bakeries, Restaurants, Food factories","A motor drives a hook, beater or arm through a fixed bowl. Speed settings control kneading and mixing.","Consistent texture with far less manual effort","Bowl size caps batch size; heavy dough strains small motors","Bowl capacity, motor power, speed range, attachments"],
  frying:["Frying","Electric and gas deep fryers for commercial kitchens.","Hot oil immersion","Chips, chicken, snacks, fried sides","Restaurants, QSR, Street food, Catering","A heater warms oil to a set temperature. Baskets lower food in, and a thermostat keeps the oil steady.","Fast, crisp cooking with high output","Oil upkeep and fire safety need attention","Tank volume, electric or gas, filtration, safety cut-off"],
  cutting:["Cutting & Slicing","Vegetable cutters and slicers for prep work.","Blade cutting","Slicing and cutting vegetables and fruit","Restaurants, Food factories, Canteens","A motor turns blades or discs while food is fed through a chute or tray, cutting it to a set shape.","Even cuts and fast prep","Blades need sharpening and careful cleaning","Throughput per hour, blade options, safety guards, cleaning"],
  fruitveg:["Fruit & Vegetable Processing","Peelers and scrapers for produce.","Abrasion and scraping","Peeling potatoes and roots, scraping coconut","Restaurants, Canteens, Food factories","Abrasive rollers or blades remove skin or flesh in a rotating drum or tray, usually with water to clear waste.","Cuts prep labour sharply","Some waste; best on regular shapes","Batch weight, water supply, drain, motor power"],
  refrigeration:["Refrigeration","Vertical chillers, display units and prep counters.","Compressor cooling","Cold storage, display and prep","Restaurants, Retail, Hotels, Cafes","A compressor and evaporator pull heat from the cabinet, and a thermostat cycles the compressor to hold the temperature.","Keeps food safe and fresh longer","Needs airflow around the unit and regular cleaning","Capacity, door type, temperature range, energy use"],
  beverage:["Beverage Equipment","Juice dispensers, sugarcane machines and water coolers.","Extraction, chilling and dispensing","Juice, sugarcane, drinking water","Cafes, Juice bars, Restaurants, Offices","Depending on type, rollers or pumps extract or move the liquid, and cooling or dispensing hardware serves it.","Fast service and consistent output","Needs regular cleaning and, for coolers, filter care","Output per hour, water connection, capacity, cleaning cycle"],
  grinding:["Grinding","Grinders for batters, spices and pastes.","Mechanical grinding","Grinding batters, pastes and spices","Restaurants, Food factories, Catering","A motor turns stones or blades against food, breaking it down to the size needed.","Consistent output at volume","Wear parts need replacing","Drum capacity, motor power, material, cleaning"],
  meat:["Meat Processing","Poultry and meat preparation equipment.","Mechanical processing","Poultry cleaning and preparation","Poultry shops, Butchers, Restaurants","Rotating drums or blades work on the product, and water or guards handle waste and safety.","Faster, more hygienic prep","Strict cleaning and operator care needed","Batch size, water use, drain, stainless construction"]
};

const LONG = {
  bakery:["Ovens sit at the centre of a bakery or pizzeria, and the type you choose sets what you can bake, how fast, and how much power and floor space you need.","Deck-style and stone-base ovens bake from a hot base and suit bread, cookies, pastries and pizza. Compact single-deck units fit cafes and small shops, while multi-deck and high-speed ovens raise output without widening the footprint.","Before buying, check tray size against your baking sheets, the electrical load (many need a dedicated circuit), ventilation, and whether you need a timer or digital control."],
  cooking:["Hot-line equipment turns prep into served food. This group covers waffle and cone bakers, rotisserie grill machines, bain maries, food warmers and a shawarma machine.","Most units use electric elements or gas and are built from stainless steel for daily washdowns. Choose by menu: waffle plates by shape, rotisseries by bird capacity, bain maries by number of pans.","Check the power or gas supply, how the surfaces clean, and how much counter space you have before you buy."],
  mixing:["Mixers and kneaders take over the heaviest manual job in a bakery or kitchen. Planetary mixers handle batters, creams and light dough, while kneaders are built for stiff atta and bread dough.","Capacity is quoted in litres of bowl volume or kilograms of dough. A mixer running near its limit wears faster, so size for your peak batch, not your average.","Compare motor power, speed settings, available attachments and bowl material, and confirm the machine suits your dough hydration."],
  frying:["Fryers are among the most common machines in commercial kitchens, from snack stalls to QSR chains. The range runs from compact 6 to 10 litre electric units to twin-tank gas fryers with built-in filtration.","Electric models are simpler to install and easy to place. Gas models heat faster and recover temperature quickly under heavy load, which suits high volume.","Think about oil volume, recovery time, filtration, safety cut-offs, and whether you have a gas connection and an extraction hood."],
  cutting:["Cutting machines turn long prep sessions into minutes. Vegetable cutters shape produce into slices, strips or dice, and slicers handle items like bananas for chips.","Throughput is quoted per hour, so match it to your busiest service. Interchangeable discs give different cuts from one machine.","Look at guarding, ease of removing blades for cleaning, and whether the feed chute suits the produce you cut most."],
  fruitveg:["Produce machines remove the slowest hand tasks: peeling potatoes and scraping coconut. Potato peelers use an abrasive drum or disc, and capacity ranges from about 10 kg to 40 kg per batch.","Water flushes peel away, so you need a water supply and drain, and a way to collect peel waste.","Pick batch weight to match your volume, check motor power, and plan for cleaning the abrasive surfaces."],
  refrigeration:["Cold equipment protects stock and speeds up service. Vertical chillers store bulk stock, display units show food while keeping it cold, and prep counters chill ingredients at the work station.","Stainless steel bodies resist daily cleaning. Door count and internal capacity decide how much each unit holds.","Check the temperature range, space around the unit for airflow, power use, and whether the model suits your ambient conditions."],
  beverage:["Beverage machines serve drinks quickly with consistent quality. The range covers juice dispensers, a sugarcane juice machine and water coolers from 20 to 110 litres.","Juice dispensers hold chilled juice for pouring, while sugarcane machines extract juice by pressing cane between rollers.","Consider output per hour, water or power connections, cleaning routines, and food-contact materials."],
  grinding:["Grinders prepare batters and pastes in volume. A drum grinder suits kitchens making large batches of batters or spice pastes.","Capacity is quoted in litres of drum volume, and motor power sets how smooth and how fast the output is.","Check material (stainless steel food-contact parts), tilting or drain design for emptying, and motor rating."],
  meat:["Poultry and meat equipment speeds up preparation while keeping hygiene standards. A feather cleaning machine strips feathers from birds in batches using a rotating drum.","Capacity is quoted in kilograms or number of birds per batch, and water is used to carry waste away.","Check water supply, drainage, drum size and stainless steel construction before buying."]
};

const BRANDS = ['Sirman','Butler','Dean','Frymaster','Hoshizaki','KitchenAid','Celfrost','Alister','Andal Food Machineries'];

/* name|cat|sub|optional 1FDM path */
const RAW = `Electric Oven Single Deck One Tray|bakery|Baking Ovens
Commercial 1 Deck 2 Tray Electric Oven|bakery|Baking Ovens
Sirman Electric Pizza Oven – Single Deck – Stone Based|bakery|Pizza Ovens
Sirman Electric Pizza Oven - Two Deck - Stone Based|bakery|Pizza Ovens
Butler Ventless High Speed Oven Concorde|bakery|Commercial Ovens
Hot Dog Waffle Baker|cooking|Waffle Makers
Ice Cream Cone Baker|cooking|Waffle Makers
Lolly Waffle Baker|cooking|Waffle Makers
Mini Pan Cake Baker|cooking|Waffle Makers
Waffle Baker Round|cooking|Waffle Makers
Waffle Baker Square|cooking|Waffle Makers
Electric Belgian Waffle Maker|cooking|Waffle Makers
Tabletop Double Electric Shawarma Machine|cooking|Shawarma Machines
Grill Chicken Machine 25 birds|cooking|Rotisserie|grill-chicken-machine-25-birds.
Grill Chicken Machine – 25 Bird|cooking|Rotisserie
Grill Chicken Machine – 16 Birds|cooking|Rotisserie
Grill Chicken Machine – 9 Birds|cooking|Rotisserie
Grill Chicken Machine 25 birds capacity|cooking|Rotisserie
Popcorn Making Machine - 250-Gram|cooking|Popcorn Machines
Electric Bain Marie Table Top 6 Pans|cooking|Bain Marie
Electric Bain Marie Table Top 4 Pans|cooking|Bain Marie
Food Warmer Regular Double Glass|cooking|Food Warmers
Planetary Mixer –7 Liter|mixing|Planetary Mixers|planetary-mixer–7-liter
Planetary Mixer – 10 Litre Capacity|mixing|Planetary Mixers
Commercial Atta Kneader - 20 Kg|mixing|Dough Kneaders
Atta Kneader - 25 Kg|mixing|Dough Kneaders
6L Electric Deep Fryer|frying|Electric Fryers
Electric Deep Fryer Single 8 Litre|frying|Electric Fryers
Electric Deep Fryer With Tap 10 Litre|frying|Electric Fryers
Electric Deep Fryer Double 4+4 Litre|frying|Electric Fryers|electric-deep-fryer-double-44-litre
Electric Deep Fryer Single Tank Prima Plus 900|frying|Electric Fryers
Electric Deep Fryer Double Tank Prima Plus 900|frying|Electric Fryers
Automatic Gas Fryer With Tap|frying|Gas Fryers
Gas Deep Fryer Single Tank Prima Plus 900|frying|Gas Fryers
Gas Deep Fryer Double Tank Prima Plus 900|frying|Gas Fryers
Dean Super Runner Manual Gas Fryer With Milivolt Control- Single Tank|frying|Gas Fryers
Frymaster High Efficiency Single Tank Fryer With Digital Controls (without Filter) - Gas|frying|Gas Fryers
Frymaster High Efficiency Single Tank Fryer With Digital Controls And In-Built Filter - Gas|frying|Gas Fryers
Frymaster High Efficiency Twin Tank Fryer With Digital Controls (Without Filter)- Gas|frying|Gas Fryers
Vegetable Cutting Machine 100 kg/hour|cutting|Vegetable Cutters|commercial-vegetable-cutting-machine-100-kg-hour
Banana Slicer Machine|cutting|Slicers
Potato Peeler Machine – 10 kg|fruitveg|Potato Peelers
Potato Peeler Machine – 15kg|fruitveg|Potato Peelers
Potato Peeler Machine – 20 kg|fruitveg|Potato Peelers
Potato Peeler Machine - 40 kg|fruitveg|Potato Peelers
Heavy Duty Coconut Scrapper Machine|fruitveg|Coconut Scrapers
Hoshizaki SS Four Door Vertical Chiller|refrigeration|Vertical Chillers
Refrigerated Sushi Display|refrigeration|Display Chillers
Hoshizaki Prep Counter / Cold Bain Marie Three Door|refrigeration|Prep Counters
Juice Dispenser|beverage|Juice Dispensers|index.php?route=product/product&product_id=483
Juice Dispenser – Four Jar|beverage|Juice Dispensers
Sugarcane Juice Machine – Electrical with Dustbin|beverage|Sugarcane Machines
Water Cooler 110 Litre|beverage|Water Coolers
SS Water Cooler 20 Litre|beverage|Water Coolers
Ordinary Grinder 10L|grinding|Grinders
Chicken Feather Cleaning Machine - 3Kg|meat|Poultry Equipment|index.php?route=product/product&product_id=208`;

const slug = s => String(s ?? '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const $ = (s, r = document) => r.querySelector(s);

let machines = RAW.split('\n').map((l, i) => {
  const [name, cat, sub, path] = l.split('|'), c = CATS[cat], s = slug(name);
  const brand = BRANDS.find(b => name.toLowerCase().includes(b.toLowerCase())) || '1FDM';
  return {
    id: s, slug: s, name, cat, category: c[0], catSlug: slug(c[0]), subcategory: sub, brand, image: '',
    url: 'https://1fdm.com/' + (path || s), description: `${c[1]} Working principle: ${c[2].toLowerCase()}.`,
    specifications: { 'Brand': brand, 'Machine type': sub }, tags: [sub, c[0]], applications: c[3].split(', '), industries: c[4].split(', '),
    method: c[2], how: c[5], advantages: c[6], limitations: c[7], consider: c[8], added: i, pop: 1 + (i * 7 % 5)
  };
});

const sibs = (m, same) => machines.filter(x => x.slug !== m.slug && (same ? x.subcategory === m.subcategory : x.cat === m.cat && x.subcategory !== m.subcategory));
machines.forEach(m => {
  m.alternatives = sibs(m, true).slice(0, 3).map(x => x.slug);
  m.relatedMachines = sibs(m, false).slice(0, 3).map(x => x.slug);
});

// Fallback illustrations from art.js
machines.forEach(m => { m.art = typeof ART === 'function' ? ART(m.subcategory, m.cat) : ''; });

function applyProductsData(rows) {
  if (!Array.isArray(rows) || !rows.length) return;
  rows.forEach(p => {
    const m = machines.find(x => x.slug === slug(p.name));
    if (m) {
      if (p.image) m.image = p.image;
      if (p.url) m.url = p.url;
      if (p.brand) m.brand = p.brand;
      if (p.description) m.description = p.description;
      if (p.specifications && Object.keys(p.specifications).length > 0) {
        m.specifications = { ...m.specifications, ...p.specifications };
      }
      if (p.tags && p.tags.length > 0) m.tags = p.tags;
    }
  });
}

/* Load real 1FDM product data & images from products.json */
fetch('products.json')
  .then(r => r.ok ? r.json() : [])
  .then(rows => {
    applyProductsData(rows);
    route();
  })
  .catch(() => {});

function hydrate() {
  document.querySelectorAll('img[data-s]').forEach(im => {
    const m = machines.find(x => x.slug === im.dataset.s);
    if (!m) return;
    im.onload = () => im.classList.add('ok');
    im.onerror = () => {
      im.onerror = null;
      if (m.art) im.src = m.art;
    };
    im.src = m.image || m.art;
  });
}

const INDUSTRIES = [...new Set(Object.values(CATS).flatMap(c => c[4].split(', ')))].sort();
const APPS = [...new Set(Object.values(CATS).flatMap(c => c[3].split(', ')))].sort();
const usedCats = Object.values(CATS).filter(c => machines.some(m => m.category === c[0]));
const POPSEARCH = ['Oven', 'Fryer', 'Mixer', 'Peeler', 'Waffle', 'Chiller', 'Grinder'];
const app = $('#app');
const mget = s => machines.find(m => m.slug === s);

const keySpec = m => {
  if (m.specifications['Capacity']) return 'Capacity: ' + m.specifications['Capacity'];
  if (m.specifications['Cutting Capacity']) return 'Capacity: ' + m.specifications['Cutting Capacity'];
  if (m.specifications['Output']) return 'Output: ' + m.specifications['Output'];
  if (m.specifications['Dimensions']) return 'Dimensions: ' + m.specifications['Dimensions'];
  const capMatch = m.name.match(/(\d+\+?\d*\s?(L|Litre|Liter|kg|Kg|Birds?|Pans|Gram)\b)/i);
  if (capMatch) return 'Capacity: ' + capMatch[1];
  return 'Type: ' + m.subcategory;
};

const imgTag = m => `<span class="im" data-l="${esc(m.category)}"><img data-s="${m.slug}" alt="${esc(m.name)}"></span>`;

function card(m) {
  return `<article class="card">
    <a href="#/machine/${m.slug}" style="display:block">${imgTag(m)}</a>
    <div class="bd">
      <div class="meta">${esc(m.category)} &bull; ${esc(m.brand)}</div>
      <h3><a href="#/machine/${m.slug}">${esc(m.name)}</a></h3>
      <p>${esc(m.description)}</p>
      <div class="spec-k">${esc(keySpec(m))}</div>
      <div class="ft">
        <a class="btn" href="#/machine/${m.slug}">View Details</a>
      </div>
    </div>
  </article>`;
}

const tile = (h, t, s) => `<a class="tile" href="${h}"><h3>${esc(t)}</h3><span>${esc(s)}</span></a>`;

function search(q) {
  const t = q.toLowerCase().split(/\s+/).filter(Boolean);
  return machines.filter(m => {
    const h = [m.name, m.category, m.subcategory, m.brand, m.description, ...m.tags, ...m.applications].join(' ').toLowerCase();
    return t.every(w => h.includes(w));
  });
}

const searchBox = v => `<form class="search" data-search>
  <input type="search" value="${esc(v || '')}" placeholder="Search machines, equipment, applications..." aria-label="Search machines">
  <button>Search</button>
</form>`;

function home() {
  const pop = [...machines].sort((a, b) => b.pop - a.pop).slice(0, 8);
  const ctile = c => {
    const m = machines.find(x => x.category === c[0]);
    const n = machines.filter(x => x.category === c[0]).length;
    return `<a class="ctile" href="#/category/${slug(c[0])}">
      <span class="ctile-img">${imgTag(m)}</span>
      <div class="ctile-body">
        <h3>${esc(c[0])}</h3>
        <span>${n} ${n === 1 ? 'machine' : 'machines'}</span>
      </div>
    </a>`;
  };

  return `
    <section class="hero">
      <div class="hero-tag">1FDM MachineWiki Platform</div>
      <h1>Industrial Machinery Knowledge Base</h1>
      <p>Technical specifications, working principles, and operational guidelines for commercial food service equipment.</p>
      ${searchBox()}
      <div class="pop-search">
        <span>Popular searches:</span>
        ${POPSEARCH.map(s => `<a href="#/machines?q=${encodeURIComponent(s)}">${s}</a>`).join('')}
      </div>
    </section>

    <section class="blk">
      <div class="row-h">
        <h2>Popular Categories</h2>
        <a href="#/categories">View all categories &rarr;</a>
      </div>
      <div class="cgrid">${usedCats.map(ctile).join('')}</div>
    </section>

    <section class="blk">
      <div class="row-h">
        <h2>Popular Machines</h2>
        <a href="#/machines">See all ${machines.length} machines &rarr;</a>
      </div>
      <div class="grid">${pop.map(card).join('')}</div>
    </section>

    <section class="blk">
      <div class="about-card">
        <h2>About 1FDM MachineWiki</h2>
        <p>1FDM MachineWiki is an independent equipment documentation platform. It provides clear, practical insights into commercial kitchen and food processing machinery—helping kitchen operators, food factory engineers, and procurement managers evaluate machine types, technical specifications, and working principles.</p>
      </div>
    </section>
  `;
}

function hashWith(patch) {
  const [path, qs] = (location.hash.slice(1) || '/machines').split('?'), p = new URLSearchParams(qs || '');
  Object.entries(patch).forEach(([k, v]) => v ? p.set(k, v) : p.delete(k));
  return '#' + path + (p.toString() ? '?' + p : '');
}

function catalog(p, fixedCat) {
  const f = {
    q: p.get('q') || '',
    cat: fixedCat || p.get('cat') || '',
    sub: p.get('sub') || '',
    brand: p.get('brand') || '',
    ind: p.get('ind') || '',
    app: p.get('app') || '',
    sort: p.get('sort') || 'popular',
    page: Math.max(1, +p.get('p') || 1)
  };
  
  let list = (f.q ? search(f.q) : [...machines]).filter(m => 
    (!f.cat || m.catSlug === f.cat) &&
    (!f.sub || m.subcategory === f.sub) &&
    (!f.brand || m.brand === f.brand) &&
    (!f.ind || m.industries.includes(f.ind)) &&
    (!f.app || m.applications.includes(f.app))
  );

  list.sort(f.sort === 'az' ? (a, b) => a.name.localeCompare(b.name) : f.sort === 'new' ? (a, b) => b.added - a.added : (a, b) => b.pop - a.pop);
  
  const per = 12, pages = Math.max(1, Math.ceil(list.length / per)), pg = Math.min(f.page, pages), from = (pg - 1) * per;
  const opt = (arr, v, label) => `<option value="">${label}</option>` + arr.map(x => { const [val, txt] = Array.isArray(x) ? x : [x, x]; return `<option value="${esc(val)}" ${val === v ? 'selected' : ''}>${esc(txt)}</option>`; }).join('');
  const subs = [...new Set(machines.filter(m => !f.cat || m.catSlug === f.cat).map(m => m.subcategory))].sort();
  const cobj = Object.values(CATS).find(c => slug(c[0]) === fixedCat);
  const title = cobj ? cobj[0] : 'Explore machines', desc = cobj ? cobj[1] : 'Browse every machine in the knowledge base by category, brand, industry or application.';
  const total = fixedCat ? machines.filter(m => m.catSlug === fixedCat).length : machines.length;
  const sl = (k, t) => `<a href="${hashWith({ sort: k, p: '' })}" class="${f.sort === k ? 'on' : ''}">${t}</a>`;
  const pager = pages > 1 ? `<nav class="pager" aria-label="Pages">${Array.from({ length: pages }, (_, i) => i + 1 === pg ? `<span class="cur">${pg}</span>` : `<a href="${hashWith({ p: i + 1 })}">${i + 1}</a>`).join('')}${pg < pages ? `<a href="${hashWith({ p: pg + 1 })}">Next</a>` : ''}</nav>` : '';

  return `<div class="page-h">
    <div class="crumb"><a href="#/">Home</a> / ${cobj ? '<a href="#/categories">Categories</a> / ' : '<a href="#/machines">Machines</a> / '}${esc(title)}</div>
    <h1>${esc(title)}</h1>
    <p>${esc(desc)}</p>
    <p style="margin-top:4px"><strong>${total} machines</strong> in catalog</p>
  </div>
  <div class="toolbar">${searchBox(f.q)}<form id="flt" style="display:contents">
    <select name="cat" aria-label="Category">${opt(usedCats.map(c => [slug(c[0]), c[0]]), f.cat, 'All categories')}</select>
    <select name="sub" aria-label="Subcategory">${opt(subs, f.sub, 'All subcategories')}</select>
    <select name="brand" aria-label="Brand">${opt([...new Set(machines.map(m => m.brand))].sort(), f.brand, 'All brands')}</select>
    <select name="ind" aria-label="Industry">${opt(INDUSTRIES, f.ind, 'All industries')}</select>
    <select name="app" aria-label="Application">${opt(APPS, f.app, 'All applications')}</select>
  </form></div>
  <div class="bar">
    <span>${list.length ? `Showing ${from + 1}–${Math.min(from + per, list.length)} of ${list.length} machines` : '0 machines'}${f.q ? ` for "${esc(f.q)}"` : ''}</span>
    <span class="sort">Sort: ${sl('popular', 'Popular')} | ${sl('az', 'A-Z')} | ${sl('new', 'Recently Added')}</span>
  </div>
  ${list.length ? `<div class="grid">${list.slice(from, from + per).map(card).join('')}</div>${pager}` : `<div class="empty"><h2>No machines found</h2><p>Try searching for a simpler term like "oven" or clear a filter.</p><p style="margin-top:10px"><a class="btn" href="#/machines">Clear search and filters</a></p></div>`}`;
}

function detail(m) {
  const al = m.alternatives.map(mget).filter(Boolean);
  const rl = m.relatedMachines.map(mget).filter(Boolean);
  const L = LONG[m.cat];
  const grp = machines.filter(x => x.subcategory === m.subcategory);
  const ul = a => `<ul>${a.map(x => `<li>${esc(x)}</li>`).join('')}</ul>`;
  const faqs = [
    [`What is a ${m.subcategory.toLowerCase().replace(/s$/, '')} used for?`, `It is used for ${m.applications.join(', ').toLowerCase()}.`],
    ['Who typically buys it?', m.industries.join(', ') + '.'],
    ['What should I check before buying?', m.consider + '.'],
    ['Where can I buy it?', 'You can purchase this exact product directly from the 1FDM store, linked at the bottom of this page.']
  ];

  return `<div class="crumb"><a href="#/">Home</a> / <a href="#/category/${m.catSlug}">${esc(m.category)}</a> / ${esc(m.subcategory)} / ${esc(m.name)}</div>
  <div class="det">
    <div>
      <span class="im photo" data-l="${esc(m.category)}"><img data-s="${m.slug}" alt="${esc(m.name)}"></span>
    </div>
    <div>
      <h1>${esc(m.name)}</h1>
      <p style="margin-top:6px">${esc(m.description)}</p>
      <table class="facts">
        <tr><th>Category</th><td><a href="#/category/${m.catSlug}">${esc(m.category)}</a></td></tr>
        <tr><th>Brand</th><td>${esc(m.brand)}</td></tr>
        <tr><th>Machine Type</th><td>${esc(m.subcategory)}</td></tr>
        <tr><th>Applications</th><td>${esc(m.applications.join(', '))}</td></tr>
        <tr><th>Target Users</th><td>${esc(m.industries.join(', '))}</td></tr>
      </table>
      <p style="margin-top:14px;display:flex;gap:8px;flex-wrap:wrap">
        <a class="btn" href="${esc(m.url)}" target="_blank" rel="noopener">View in 1FDM Store &rarr;</a>
      </p>
    </div>
  </div>
  <div class="doc">
    <section><h2>Overview</h2><p>${esc(L[0])}</p><p>${esc(L[1])}</p></section>
    <section><h2>What is this machine?</h2><p>${esc(m.name)} is ${esc(m.category.toLowerCase())} equipment in the ${esc(m.subcategory.toLowerCase())} category. ${esc(m.description)}</p></section>
    <section><h2>How does it work?</h2><p>${esc(m.how)}</p><p><strong>Working principle:</strong> ${esc(m.method.toLowerCase())}.</p></section>
    <section><h2>Applications and Users</h2>${ul(m.applications)}<p style="margin-top:8px">Typically used by: ${esc(m.industries.join(', '))}.</p></section>
    <section><h2>Types and Variations</h2><p>${grp.length > 1 ? `Machines in this subcategory differ mainly by capacity, power rating and dimensions. Examples in catalog: ${esc(grp.slice(0, 5).map(x => x.name).join('; '))}.` : 'This is the primary machine of its type in the database.'}</p></section>
    <section><h2>Technical Specifications</h2><div class="tblw"><table class="sp">${Object.entries(m.specifications).map(([k, v]) => `<tr><th>${esc(k)}</th><td>${esc(v)}</td></tr>`).join('')}</table></div></section>
    <section><h2>Advantages</h2><p>${esc(m.advantages)}.</p></section>
    <section><h2>Limitations & Drawbacks</h2><p>${esc(m.limitations)}.</p></section>
    <section><h2>Considerations Before Purchasing</h2><p>${esc(L[2])}</p><p>Key checklist: ${esc(m.consider)}.</p></section>
    <section><h2>Alternative Options</h2><div class="grid g3">${al.map(card).join('') || '<p>No alternative machines listed.</p>'}</div></section>
    <section><h2>Related Machinery</h2><div class="grid g3">${rl.map(card).join('') || '<p>No related machines listed.</p>'}</div></section>
    <section><h2>Frequently Asked Questions</h2>${faqs.map(f => `<details><summary>${esc(f[0])}</summary><p style="margin-top:6px">${esc(f[1])}</p></details>`).join('')}</section>
    <section class="cta">
      <h2 style="border:0">Purchase Original Product</h2>
      <p>View complete order details, availability, and delivery on the official 1FDM store.</p>
      <br>
      <a class="btn" href="${esc(m.url)}" target="_blank" rel="noopener">Open 1FDM Store Product Page &rarr;</a>
    </section>
  </div>`;
}

function route() {
  const [path, qs] = (location.hash.slice(1) || '/').split('?'), p = new URLSearchParams(qs || ''), seg = path.split('/').filter(Boolean), r = seg[0] || '', n = seg.slice(1).join('/');
  const grid = (arr, href, sub) => `<div class="grid">${arr.map(a => tile(href(a), a[0], sub(a))).join('')}</div>`;
  let h;
  if (r === 'machines') h = catalog(p);
  else if (r === 'category') h = Object.values(CATS).some(c => slug(c[0]) === n) ? catalog(p, n) : home();
  else if (r === 'categories') h = `<div class="page-h"><div class="crumb"><a href="#/">Home</a> / Categories</div><h1>Categories</h1></div><br>` + grid(usedCats, c => '#/category/' + slug(c[0]), c => machines.filter(m => m.category === c[0]).length + ' machines. ' + c[1]);
  else if (r === 'industries') h = `<div class="page-h"><div class="crumb"><a href="#/">Home</a> / Industries</div><h1>Industries</h1></div><br>` + grid(INDUSTRIES.map(i => [i]), i => '#/machines?ind=' + encodeURIComponent(i[0]), i => machines.filter(m => m.industries.includes(i[0])).length + ' machines');
  else if (r === 'applications') h = `<div class="page-h"><div class="crumb"><a href="#/">Home</a> / Applications</div><h1>Applications</h1></div><br>` + grid(APPS.map(i => [i]), i => '#/machines?app=' + encodeURIComponent(i[0]), i => machines.filter(m => m.applications.includes(i[0])).length + ' machines');
  else if (r === 'machine') { const m = mget(n); h = m ? detail(m) : `<div class="empty" style="margin-top:24px"><h2>Machine not found</h2><a class="btn" href="#/machines">Back to catalog</a></div>`; }
  else h = home();

  app.innerHTML = h;
  
  document.querySelectorAll('.nav a').forEach(a => a.classList.toggle('on', a.getAttribute('href') === '#/' + r || (r === 'category' && a.getAttribute('href') === '#/categories') || (r === '' && a.getAttribute('href') === '#/')));
  $('#nav').classList.remove('open');
  $('#burger').setAttribute('aria-expanded', 'false');
  window.scrollTo(0, 0);
  hydrate();
}

document.addEventListener('submit', e => {
  const f = e.target.closest('[data-search]');
  if (!f) return;
  e.preventDefault();
  const q = f.querySelector('input').value.trim();
  location.hash = '#/machines' + (q ? '?q=' + encodeURIComponent(q) : '');
});

document.addEventListener('change', e => {
  const t = e.target;
  if (t.closest('#flt')) {
    if (t.name === 'cat' && location.hash.startsWith('#/category/')) {
      location.hash = t.value ? '#/category/' + t.value : '#/machines';
    } else {
      location.hash = hashWith({ [t.name]: t.value, p: '', ...(t.name === 'cat' ? { sub: '' } : {}) });
    }
  }
});

document.addEventListener('click', e => {
  if (e.target.closest('#burger')) {
    const o = $('#nav').classList.toggle('open');
    $('#burger').setAttribute('aria-expanded', o);
  }
});

window.addEventListener('hashchange', route);
route();
