# 🌐 JavaScript Browser Events Demo (Hinglish Version)

Yeh project tumhe dikhata hai ki **JavaScript me alag-alag browser events** kab aur kaise trigger hote hain.  
Jaise `DOMContentLoaded`, `click`, `keydown`, `scroll`, `resize`, `online`, `offline`, etc.  
Isse tumhe samajh aayega ki har event ka use kab karna chahiye. 🚀

---

## 📋 Features

✅ Browser ke sabse common aur useful events cover kiye gaye hain:
- Page events (`DOMContentLoaded`, `load`, `beforeunload`, `unload`)
- Keyboard events (`keydown`, `keypress`, `keyup`)
- Mouse events (`click`, `dblclick`, `mousemove`, `mouseenter`, `mouseleave`, `mousedown`, `mouseup`)
- Form events (`input`, `change`, `focus`, `blur`, `submit`)
- Touch events (`touchstart`, `touchmove`, `touchend`, `touchcancel`)
- Window events (`resize`, `scroll`)
- Network events (`online`, `offline`)
- Visibility event (`visibilitychange`)
- Custom event (`CustomEvent`)

---

## 🧠 Tum kya seekhoge

- `DOMContentLoaded` aur `load` me kya farq hota hai  
- Keyboard aur mouse events kaise handle karte hain  
- Form input ke real-time validation  
- Scroll, resize aur visibility change detect karna  
- Network online/offline detection  
- Apne custom events banana aur use karna  

---

# 🎯 JavaScript Events Demo

Yeh project ek simple demo hai jisme **JavaScript ke saare common events** (Page, Mouse, Keyboard, Form, Touch, Window, Network, Visibility, Custom Events) dikhaye gaye hain.  
Console me message show hota hai jab koi event trigger hota hai — taaki aap easily samajh sako ki har event kab chalta hai.

---

## 🚀 Kaise chalaye:
1. Ek `index.html` file banao.
2. Is code ko `<script>` tag me daalo (ya alag `.js` file me link karo).
3. Browser me page open karo aur **Developer Console** (`Ctrl + Shift + I`) me jaake output dekho.

---

## 📜 Code Example:

```javascript
// ==== PAGE EVENTS ====
document.addEventListener("DOMContentLoaded", () => console.log("✅ DOM ready ho gaya!"));
window.addEventListener("load", () => console.log("🌍 Sab kuch (HTML, CSS, images) load ho gaya!"));
window.addEventListener("beforeunload", () => console.log("⚠️ Page band hone wala hai!"));
window.addEventListener("unload", () => console.log("👋 Page unload ho gaya!"));

// ==== KEYBOARD EVENTS ====
document.addEventListener("keydown", e => console.log("⌨️ Key down:", e.key));
document.addEventListener("keypress", e => console.log("⌨️ Key press:", e.key));
document.addEventListener("keyup", e => console.log("⌨️ Key up:", e.key));

// ==== MOUSE EVENTS ====
document.addEventListener("click", () => console.log("🖱️ Mouse click detected"));
document.addEventListener("dblclick", () => console.log("🖱️ Double click detected"));
document.addEventListener("mousemove", () => console.log("🌀 Mouse move ho raha hai"));
document.addEventListener("mouseenter", () => console.log("🐭 Mouse enter hua"));
document.addEventListener("mouseleave", () => console.log("🐭 Mouse leave hua"));
document.addEventListener("mousedown", () => console.log("👇 Mouse button dabaya"));
document.addEventListener("mouseup", () => console.log("👆 Mouse button chhoda"));

// ==== FORM EVENTS ====
const input = document.querySelector("input");
const form = document.querySelector("form");
if (input && form) {
  input.addEventListener("input", () => console.log("✍️ Input change ho raha hai"));
  input.addEventListener("change", () => console.log("📦 Input change ho gaya"));
  input.addEventListener("focus", () => console.log("🎯 Input focus me aaya"));
  input.addEventListener("blur", () => console.log("💤 Input se bahar gaya"));
  form.addEventListener("submit", e => {
    e.preventDefault();
    console.log("📨 Form submit hua!");
  });
}

// ==== TOUCH EVENTS (for mobile) ====
document.addEventListener("touchstart", () => console.log("📱 Touch start"));
document.addEventListener("touchmove", () => console.log("📱 Touch move"));
document.addEventListener("touchend", () => console.log("📱 Touch end"));
document.addEventListener("touchcancel", () => console.log("📱 Touch cancel"));

// ==== WINDOW EVENTS ====
window.addEventListener("resize", () => console.log("📏 Window resize ho gayi"));
window.addEventListener("scroll", () => console.log("🌀 Scroll ho raha hai"));

// ==== NETWORK EVENTS ====
window.addEventListener("online", () => console.log("✅ Internet connected!"));
window.addEventListener("offline", () => console.log("⚠️ Internet disconnected!"));

// ==== VISIBILITY EVENT ====
document.addEventListener("visibilitychange", () => {
  if (document.hidden) console.log("🙈 Tab background me gaya");
  else console.log("👀 Tab wapas active hua");
});

// ==== CUSTOM EVENT ====
const myEvent = new CustomEvent("customHello", { detail: "Hello Veer 👋" });
document.addEventListener("customHello", e => console.log("🎉 Custom Event Triggered:", e.detail));
document.dispatchEvent(myEvent);
