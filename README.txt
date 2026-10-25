CRYPTO APP - STARTER
====================

FILES
- index.html    App structure, SVG icon sprite, floating nav
- style.css     Styling (blue-to-black gradient, cards, liquid glass nav)
- script.js     Tab switching (Home / Send / Swap)
- manifest.json Web app manifest (installable as a home-screen app)

HOW TO RUN
1. Keep all files in the same folder.
2. Open index.html in a browser (best viewed on a phone or with a narrow window).
3. For "Add to Home Screen" support, serve the folder over HTTP/HTTPS
   (e.g. run `npx serve` or `python -m http.server` in the folder).

WHAT CHANGED
- Bottom bar replaced by a floating pill-shaped nav with a soft liquid-glass look.
- Nav items: Home, Send, Swap. Icons are chunky, filled and rounded (Flex style).
- Currency conversion rows removed.
- "Assets" card added (title top-left, same style as "Products for you").
  It shows "No assets" for a first launch.
- Balance set to $0.00.

CUSTOMISING
- Glass strength:  .dock in style.css (background alpha, blur value).
- Colours:         :root variables and .app gradient in style.css.
- Icons:           SVG <symbol> blocks at the top of index.html.
- Balance:         .balance-amount in index.html.

NEXT STEPS
- Wire real balance and asset data into the Assets card.
- Build out the Send and Swap screens.
- Add a service worker for offline support.
