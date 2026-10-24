/* ============================================================
   script.js — Mannam Maneesha Birthday Surprise
   ============================================================

   ╔══════════════════════════════════════════════════════╗
   ║  EASY CUSTOMISATION — Edit values in this section   ║
   ╚══════════════════════════════════════════════════════╝
*/

const HER_NAME      = "Mannam Maneesha";
const BIRTHDAY_DATE = "24 October";

const PERSONAL_MESSAGE =
`I hope this new chapter brings you soft mornings, loud laughter,
beautiful surprises, and a hundred reasons to smile.

You deserve kindness, happiness, and all the little things
that make your heart feel full. Keep being your wonderful self —
the world is sweeter with you in it.

And maybe… somewhere in this world, there is someone who
secretly thinks you are more special than you know. ♡`;

const COMPLIMENTS = [
  {
    emoji:   "🌸",
    text:    "Your smile could make an ordinary day feel magical.",
    caption: "A little light in every room ✨"
  },
  {
    emoji:   "🌟",
    text:    "You have the kind of beauty that feels warm, not just pretty.",
    caption: "Glow that comes from within 💛"
  },
  {
    emoji:   "🌙",
    text:    "I hope you know how lovely you are, even on days you don't feel it.",
    caption: "You are enough, always 🤍"
  },
  {
    emoji:   "☁️",
    text:    "Talking to you could turn a boring day into a favorite memory.",
    caption: "Pure, happy company 🌈"
  },
  {
    emoji:   "🦋",
    text:    "If kindness had a little sparkle, I think you'd be full of it.",
    caption: "Rare and truly beautiful 💗"
  }
];

/* Image sources — use Picsum for reliable placeholder photos.
   Replace any URL with your own image path, e.g. "images/flower.jpg"
   Fallback CSS gradient classes are photo-fallback-1 … photo-fallback-6  */
const PHOTO_CARDS = [
  {
    url:     "https://images.unsplash.com/photo-1490750967868-88df5691cc81?w=400&q=80",
    caption: "A little flower energy 🌷",
    message: "Just like flowers bloom after every storm, your beauty keeps finding new ways to show. 🌸",
    icon:    "🌷",
    fallback: "photo-fallback-1"
  },
  {
    url:     "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400&q=80",
    caption: "A little sunshine ☀️",
    message: "You carry the warmth of a golden morning everywhere you go. Never lose that glow. ☀️",
    icon:    "☀️",
    fallback: "photo-fallback-2"
  },
  {
    url:     "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=400&q=80",
    caption: "Made of little dreams ✨",
    message: "Your dreams are as wide as the sky — and they all deserve to come true, one by one. ✨",
    icon:    "✨",
    fallback: "photo-fallback-3"
  },
  {
    url:     "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=400&q=80",
    caption: "A softer kind of magic 🌊",
    message: "There is a quiet magic about you — soft but deep, like the ocean on a calm day. 🌊",
    icon:    "🌊",
    fallback: "photo-fallback-4"
  },
  {
    url:     "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&q=80",
    caption: "Keep growing beautifully 🌱",
    message: "Every version of you has been wonderful. Whatever comes next will be even more so. 🌿",
    icon:    "🌱",
    fallback: "photo-fallback-5"
  },
  {
    url:     "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    caption: "A moment worth keeping 💗",
    message: "Some people leave a little colour in your life just by being in it. You are one of them. 💗",
    icon:    "💗",
    fallback: "photo-fallback-6"
  }
];

/* ============================================================
   ↑ END OF EASY CUSTOMISATION SECTION
   ============================================================ */

/* ── DOM REFERENCES ─────────────────────────────────────────── */
const screens        = document.querySelectorAll(".screen");
const progressDots   = document.querySelectorAll(".dot");
const progressLabel  = document.getElementById("progress-label");
const particlesCont  = document.getElementById("particles-container");
const confettiCanvas = document.getElementById("confetti-canvas");

let currentScreen = 1;
let giftOpened    = false;

/* ── SCREEN NAVIGATION ──────────────────────────────────────── */
function goToScreen(n) {
  if (n === currentScreen) return;

  // Guard: gift must be opened before screen 5
  if (n === 5 && !giftOpened) return;

  const prevEl = document.getElementById(`screen-${currentScreen}`);
  if (prevEl) {
    prevEl.classList.add("exiting");
    setTimeout(() => {
      prevEl.classList.remove("active", "exiting");
    }, 450);
  }

  const target = document.getElementById(`screen-${n}`);
  if (!target) return;

  setTimeout(() => {
    target.classList.add("active");
    target.scrollTop = 0;
  }, 50);

  currentScreen = n;
  updateProgress(n);
}

function updateProgress(n) {
  progressDots.forEach((dot, i) => {
    dot.classList.remove("active", "done");
    if (i + 1 === n)       dot.classList.add("active");
    else if (i + 1 < n)    dot.classList.add("done");
  });
  progressLabel.textContent = `Chapter ${n} of 5`;
  document.getElementById("progress-bar").setAttribute("aria-valuenow", n);
}

/* ── PARTICLES ──────────────────────────────────────────────── */
const PARTICLE_SYMBOLS = ["💗","✨","🌸","🦋","💫","🌷","⭐","🌟","💕","🌺"];
let particleTimer = null;

function spawnParticle() {
  // Keep particle count low for performance
  if (particlesCont.children.length > 25) return;

  const el = document.createElement("span");
  el.className = "particle";
  el.textContent = PARTICLE_SYMBOLS[Math.floor(Math.random() * PARTICLE_SYMBOLS.length)];
  el.style.left = Math.random() * 100 + "vw";
  const dur  = 6 + Math.random() * 8;
  const size = 10 + Math.random() * 12;
  el.style.fontSize    = size + "px";
  el.style.animationDuration = dur + "s";
  el.style.animationDelay    = Math.random() * 3 + "s";
  particlesCont.appendChild(el);

  // Remove after animation
  setTimeout(() => el.remove(), (dur + 3) * 1000);
}

function startParticles() {
  spawnParticle();
  particleTimer = setInterval(spawnParticle, 1200);
}

/* ── SCREEN 2 — COMPLIMENTS ─────────────────────────────────── */
let currentCompliment = 0;

function showCompliment(index) {
  const c        = COMPLIMENTS[index];
  const emojiEl  = document.getElementById("compliment-emoji");
  const textEl   = document.getElementById("compliment-text");
  const capEl    = document.getElementById("compliment-caption");
  const cntEl    = document.getElementById("compliment-counter");

  // Fade out
  textEl.classList.add("fade-out");
  capEl.classList.add("fade-out");
  emojiEl.style.opacity = "0";
  emojiEl.style.transform = "scale(0.7)";

  setTimeout(() => {
    emojiEl.textContent  = c.emoji;
    textEl.textContent   = c.text;
    capEl.textContent    = c.caption;
    cntEl.textContent    = `LITTLE THOUGHT ${index + 1} OF ${COMPLIMENTS.length}`;

    textEl.classList.remove("fade-out");
    capEl.classList.remove("fade-out");
    emojiEl.style.transition = "opacity 0.4s ease, transform 0.4s ease";
    emojiEl.style.opacity  = "1";
    emojiEl.style.transform = "scale(1)";
  }, 360);
}

function nextCompliment() {
  currentCompliment = (currentCompliment + 1) % COMPLIMENTS.length;
  showCompliment(currentCompliment);
}

/* ── SCREEN 3 — GALLERY ─────────────────────────────────────── */
function buildGallery() {
  const grid = document.getElementById("gallery-grid");
  grid.innerHTML = "";

  PHOTO_CARDS.forEach((card, idx) => {
    const item = document.createElement("div");
    item.className = `photo-card ${card.fallback}`;
    item.setAttribute("role", "listitem");
    item.setAttribute("tabindex", "0");
    item.setAttribute("aria-label", card.caption);

    const img = document.createElement("img");
    img.className = "photo-img";
    img.alt       = card.caption;
    img.loading   = "lazy";
    img.src       = card.url;
    img.onerror   = () => {
      img.style.display = "none";
    };

    const overlay = document.createElement("div");
    overlay.className = "photo-overlay";

    const caption = document.createElement("span");
    caption.className = "photo-caption";
    caption.textContent = card.caption;

    const heart = document.createElement("span");
    heart.className = "photo-heart";
    heart.textContent = "💗";
    heart.setAttribute("aria-hidden", "true");

    overlay.append(caption, heart);
    item.append(img, overlay);

    // Click / keyboard interaction
    const activate = () => showGalleryMessage(idx, item);
    item.addEventListener("click", activate);
    item.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); activate(); }
    });

    grid.appendChild(item);
  });
}

function showGalleryMessage(idx, cardEl) {
  const msgBox  = document.getElementById("gallery-message-box");
  const msgText = document.getElementById("gallery-msg-text");
  const msgIcon = document.getElementById("gallery-msg-icon");
  const card    = PHOTO_CARDS[idx];

  // Highlight selected card
  document.querySelectorAll(".photo-card").forEach(c => c.classList.remove("selected"));
  cardEl.classList.add("selected");

  msgIcon.textContent = card.icon;
  msgText.textContent = card.message;
  msgBox.hidden = false;

  // Scroll message into view on mobile
  msgBox.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

/* ── SCREEN 4 — GIFT ────────────────────────────────────────── */
function setupGift() {
  const giftBox    = document.getElementById("gift-box");
  const giftEmoji  = document.getElementById("gift-emoji");
  const instruction= document.getElementById("gift-instruction");
  const revealMsg  = document.getElementById("gift-reveal-msg");
  const nextBtn    = document.getElementById("btn-s4-next");

  const open = () => {
    if (giftOpened) return;
    giftOpened = true;

    giftBox.classList.add("opened");
    giftBox.setAttribute("aria-label", "Gift opened!");
    giftBox.disabled = true;

    setTimeout(() => {
      giftEmoji.textContent = "💝";
    }, 300);

    instruction.style.opacity = "0";

    // Burst hearts & sparkles
    burstHearts(giftBox);

    setTimeout(() => {
      revealMsg.hidden = false;
      nextBtn.hidden   = false;
      nextBtn.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 700);
  };

  giftBox.addEventListener("click", open);
  giftBox.addEventListener("keydown", e => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); }
  });
}

function burstHearts(originEl) {
  const rect   = originEl.getBoundingClientRect();
  const cx     = rect.left + rect.width  / 2;
  const cy     = rect.top  + rect.height / 2;
  const emojis = ["💗","✨","🌸","💝","🦋","💫","⭐","🌷"];

  for (let i = 0; i < 20; i++) {
    const el = document.createElement("span");
    el.textContent   = emojis[Math.floor(Math.random() * emojis.length)];
    el.style.cssText = `
      position:fixed; left:${cx}px; top:${cy}px;
      font-size:${16 + Math.random() * 16}px;
      pointer-events:none; z-index:300;
      transition: transform 1.2s ease-out, opacity 1s ease-out;
      opacity: 1;
    `;
    document.body.appendChild(el);

    const angle = Math.random() * Math.PI * 2;
    const dist  = 80 + Math.random() * 160;
    const tx    = Math.cos(angle) * dist;
    const ty    = Math.sin(angle) * dist - 40;

    requestAnimationFrame(() => {
      el.style.transform = `translate(${tx}px, ${ty}px) scale(0.3)`;
      el.style.opacity   = "0";
    });
    setTimeout(() => el.remove(), 1300);
  }
}

/* ── CONFETTI ────────────────────────────────────────────────── */
const ctx    = confettiCanvas.getContext("2d");
let confettiPieces = [];
let confettiAF     = null;

const CONF_COLORS = [
  "#f9a8d4","#ec4899","#c084fc","#a855f7","#fbbf24",
  "#34d399","#60a5fa","#f472b6","#e879f9","#fb923c"
];

function launchConfetti(count = 120) {
  confettiCanvas.width  = window.innerWidth;
  confettiCanvas.height = window.innerHeight;

  for (let i = 0; i < count; i++) {
    confettiPieces.push({
      x:     Math.random() * confettiCanvas.width,
      y:     -20 - Math.random() * 100,
      w:     6 + Math.random() * 8,
      h:     10 + Math.random() * 8,
      color: CONF_COLORS[Math.floor(Math.random() * CONF_COLORS.length)],
      r:     Math.random() * Math.PI * 2,
      rs:    (Math.random() - 0.5) * 0.15,
      vy:    2 + Math.random() * 4,
      vx:    (Math.random() - 0.5) * 2,
      alpha: 1
    });
  }

  if (confettiAF) cancelAnimationFrame(confettiAF);
  animateConfetti();
}

function animateConfetti() {
  ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);

  confettiPieces = confettiPieces.filter(p => p.alpha > 0.05);

  confettiPieces.forEach(p => {
    p.y  += p.vy;
    p.x  += p.vx;
    p.r  += p.rs;
    if (p.y > confettiCanvas.height - 80) p.alpha -= 0.02;

    ctx.save();
    ctx.globalAlpha = p.alpha;
    ctx.translate(p.x, p.y);
    ctx.rotate(p.r);
    ctx.fillStyle = p.color;
    ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
    ctx.restore();
  });

  if (confettiPieces.length > 0) {
    confettiAF = requestAnimationFrame(animateConfetti);
  } else {
    ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    confettiAF = null;
  }
}

/* ── FLOATING HEART BURST (screen 5 button) ─────────────────── */
function sparkleEffect() {
  launchConfetti(100);

  const emojis = ["💗","🌸","✨","🦋","💫","🌟","💕","🌷","⭐"];
  for (let i = 0; i < 30; i++) {
    setTimeout(() => {
      const el = document.createElement("span");
      el.textContent   = emojis[Math.floor(Math.random() * emojis.length)];
      el.style.cssText = `
        position:fixed;
        left:${Math.random() * 100}vw;
        top:${100 + Math.random() * 20}vh;
        font-size:${18 + Math.random() * 20}px;
        pointer-events:none;
        z-index:201;
        animation: particleFloat ${4 + Math.random() * 4}s linear forwards;
        opacity:0;
      `;
      document.body.appendChild(el);
      setTimeout(() => el.remove(), 9000);
    }, i * 80);
  }
}

/* ── POPULATE PERSONALISED CONTENT ──────────────────────────── */
function populateContent() {
  // Birthday message
  const msgEl = document.getElementById("birthday-message");
  if (msgEl) msgEl.textContent = PERSONAL_MESSAGE;

  // Reveal name (already in HTML but make sure it's right)
  const nameEl = document.getElementById("reveal-name");
  if (nameEl) nameEl.textContent = `${HER_NAME}!`;
}

/* ── RESET / REPLAY ─────────────────────────────────────────── */
function replayAll() {
  giftOpened = false;

  // Reset gift
  const giftBox   = document.getElementById("gift-box");
  const giftEmoji = document.getElementById("gift-emoji");
  const revealMsg = document.getElementById("gift-reveal-msg");
  const nextBtn   = document.getElementById("btn-s4-next");
  const instr     = document.getElementById("gift-instruction");

  giftBox.classList.remove("opened");
  giftBox.disabled = false;
  giftBox.setAttribute("aria-label", "Tap the gift box to open it");
  giftEmoji.textContent = "🎁";
  revealMsg.hidden      = true;
  nextBtn.hidden        = true;
  instr.style.opacity   = "1";

  // Reset gallery selection
  document.querySelectorAll(".photo-card").forEach(c => c.classList.remove("selected"));
  const msgBox = document.getElementById("gallery-message-box");
  if (msgBox) msgBox.hidden = true;

  // Reset compliment index
  currentCompliment = 0;
  showCompliment(0);

  // Clear confetti
  if (confettiAF) cancelAnimationFrame(confettiAF);
  ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
  confettiPieces = [];

  // Remove all floating burst elements
  document.querySelectorAll("[style*='position:fixed'][style*='z-index:300']").forEach(e => e.remove());

  goToScreen(1);
}

/* ── WIRE BUTTONS ────────────────────────────────────────────── */
function wireButtons() {
  // Screen 1
  document.getElementById("btn-start").addEventListener("click", () => goToScreen(2));

  // Screen 2
  document.getElementById("btn-another").addEventListener("click", nextCompliment);
  document.getElementById("btn-s2-back").addEventListener("click", () => goToScreen(1));
  document.getElementById("btn-s2-next").addEventListener("click", () => goToScreen(3));

  // Screen 3
  document.getElementById("btn-s3-back").addEventListener("click", () => goToScreen(2));
  document.getElementById("btn-s3-next").addEventListener("click", () => goToScreen(4));

  // Screen 4
  document.getElementById("btn-s4-back").addEventListener("click", () => goToScreen(3));
  document.getElementById("btn-s4-next").addEventListener("click", () => {
    goToScreen(5);
    setTimeout(() => launchConfetti(150), 400);
  });

  // Screen 5
  document.getElementById("btn-sparkle").addEventListener("click", sparkleEffect);
  document.getElementById("btn-replay").addEventListener("click", replayAll);
}

/* ── RESIZE: fix confetti canvas size ───────────────────────── */
window.addEventListener("resize", () => {
  confettiCanvas.width  = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
});

/* ── INIT ────────────────────────────────────────────────────── */
function init() {
  populateContent();
  buildGallery();
  setupGift();
  wireButtons();
  showCompliment(0);

  // Make sure screen 1 is active
  document.getElementById("screen-1").classList.add("active");
  updateProgress(1);

  // Start gentle particles (check reduced-motion preference)
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!prefersReduced) {
    startParticles();
  }
}

document.addEventListener("DOMContentLoaded", init);
