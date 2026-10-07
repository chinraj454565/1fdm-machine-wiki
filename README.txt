1FDM MachineWiki
================
Files: index.html, style.css, script.js, art.js (illustrations), get-images.mjs (photo fetcher)

Run the site (use a local server, because the browser blocks products.json when index.html is opened by double-click):
    npx serve .          or          python3 -m http.server 8000

Get the REAL product photos from 1fdm.com (run once, on your own computer; needs Node 18+):
    node get-images.mjs
It creates products.json. Reload the site and every machine it found shows its real photo and its correct 1FDM link.
Machines it could not find keep a drawing until you add them to products.json by hand:
    [{"name":"6L Electric Deep Fryer","image":"https://.../photo.jpg","url":"https://1fdm.com/..."}]
