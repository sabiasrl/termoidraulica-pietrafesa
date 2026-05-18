const isMobile = window.matchMedia("(max-width: 767px)").matches;
const script = document.createElement("script");

script.src = isMobile ? "mobile.js" : "desktop.js";
document.body.appendChild(script);
