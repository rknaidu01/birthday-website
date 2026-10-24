# 🎂 Mannam Maneesha — Birthday Surprise Website

A beautiful, interactive, 5-screen birthday surprise web experience built with pure HTML, CSS, and JavaScript. No frameworks, no backend, no API keys.

---

## 🚀 How to Run

### Option 1 — VS Code Live Server (recommended)
1. Open the `birthdaym` folder in VS Code.
2. Install the **Live Server** extension (by Ritwick Dey) if you haven't already.
3. Right-click `index.html` → **Open with Live Server**.
4. The site opens in your browser automatically.

### Option 2 — Direct file open
1. Double-click `index.html` in File Explorer.
2. It opens in your default browser.  
   *(Note: remote image loading may be blocked in some browsers without a server.)*

---

## 📱 Test on Your Mobile Phone (same Wi-Fi)

1. Start the site with **Live Server**.
2. Note the local address shown in the VS Code status bar — it looks like `http://192.168.x.x:5500`.
3. Open that address in your phone's browser.  
   *(Your phone and laptop must be on the same Wi-Fi network.)*

---

## ✏️ How to Customise

Open **`script.js`** and edit the values near the **top of the file** (clearly marked):

| Variable | What to change |
|---|---|
| `HER_NAME` | Her full name |
| `BIRTHDAY_DATE` | Her birthday date string |
| `PERSONAL_MESSAGE` | The final birthday letter |
| `COMPLIMENTS` | Array of compliment objects — emoji, text, and caption |
| `PHOTO_CARDS` | Array of photo cards — image URL, caption, message, icon |

### Changing Photos

Each photo card in `PHOTO_CARDS` has a `url` field.  
You can use:
- **Online images**: any direct image URL (HTTPS).
- **Local images**: put your image in the project folder and use a relative path, e.g. `"images/flower.jpg"`.

If an image fails to load, a soft gradient fallback is shown automatically.

### Changing Colours

Open **`style.css`** and edit the CSS custom properties inside `:root { … }` near the top.

---

## 📂 File Structure

```
birthdaym/
├── index.html   — All 5 screens and structure
├── style.css    — All styles, animations, responsive layout
├── script.js    — Navigation, compliments, gallery, gift, confetti
└── README.md    — This file
```

---

## 🌟 Screens Overview

| # | Screen | Content |
|---|---|---|
| 1 | Welcome | Animated portrait, greeting, start button |
| 2 | Compliments | 5 secret compliments with fade transitions |
| 3 | Gallery | 6 tappable photo cards with hidden messages |
| 4 | Gift | Animated gift box that opens with a heart burst |
| 5 | Birthday Reveal | Grand birthday message, cake, confetti, sparkles |

---

## ♿ Accessibility

- Progress bar with ARIA attributes.
- All interactive elements are keyboard-accessible (Tab + Enter/Space).
- `aria-live` regions announce dynamic content to screen readers.
- Animations are disabled for users who prefer reduced motion (`prefers-reduced-motion`).

---

*Made with 💗 — a little birthday surprise wrapped in code.*
