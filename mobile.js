let collapseIdCounter = 0;

function setupMobileCardExpansions() {
  const paragraphs = document.querySelectorAll(".service-item-body p, .portfolio-card p, .why-card p, .assistance-card p");
  const isMobile = window.innerWidth <= 767;

  paragraphs.forEach((paragraph) => {
    if (!paragraph.dataset.fullHtml) paragraph.dataset.fullHtml = paragraph.innerHTML;
    if (!paragraph.dataset.collapseId) {
      collapseIdCounter += 1;
      paragraph.dataset.collapseId = `c${collapseIdCounter}`;
    }

    const ownerId = paragraph.dataset.collapseId;
    const parent = paragraph.parentElement;
    const siblingsAfter = [];
    if (parent) {
      const children = Array.from(parent.children);
      const idx = children.indexOf(paragraph);
      if (idx >= 0) siblingsAfter.push(...children.slice(idx + 1));
    }

    if (!isMobile) {
      paragraph.innerHTML = paragraph.dataset.fullHtml;
      paragraph.classList.remove("card-text-collapsible");
      siblingsAfter.forEach((el) => {
        if (el.dataset.collapsedOwner === ownerId) {
          el.style.display = "";
          delete el.dataset.collapsedOwner;
        }
      });
      return;
    }

    if (paragraph.dataset.expanded === "true") return;

    const plainText = paragraph.textContent ? paragraph.textContent.trim() : "";
    const hasExtraBlocks = siblingsAfter.length > 0;
    const shouldCollapse = plainText.length > 170 || hasExtraBlocks;
    if (!shouldCollapse) return;

    const truncated = `${plainText.slice(0, 165).trim()}...`;
    paragraph.classList.add("card-text-collapsible");
    paragraph.innerHTML = `${truncated} <a href="#" class="card-see-more-link">vedi altro</a>`;

    siblingsAfter.forEach((el) => {
      el.dataset.collapsedOwner = ownerId;
      el.style.display = "none";
    });
  });
}

document.addEventListener("click", (event) => {
  const link = event.target.closest(".card-see-more-link");
  if (!link) return;
  event.preventDefault();

  const paragraph = link.closest("p");
  if (!paragraph || !paragraph.dataset.fullHtml) return;

  paragraph.innerHTML = paragraph.dataset.fullHtml;
  paragraph.dataset.expanded = "true";
  paragraph.classList.remove("card-text-collapsible");

  const ownerId = paragraph.dataset.collapseId;
  const parent = paragraph.parentElement;
  if (!parent || !ownerId) return;
  parent.querySelectorAll(`[data-collapsed-owner="${ownerId}"]`).forEach((el) => {
    el.style.display = "";
    delete el.dataset.collapsedOwner;
  });
});

setupMobileCardExpansions();
window.addEventListener("resize", setupMobileCardExpansions);
const menuToggle = document.getElementById("menu-toggle");
const menuClose = document.getElementById("menu-close");
const mobileMenu = document.getElementById("mobile-menu");
const mobileLinks = mobileMenu ? mobileMenu.querySelectorAll("a") : [];

function openMenu() {
  if (!mobileMenu || !menuToggle) return;
  mobileMenu.hidden = false;
  menuToggle.setAttribute("aria-expanded", "true");
  document.body.style.overflow = "hidden";
}

function closeMenu() {
  if (!mobileMenu || !menuToggle) return;
  mobileMenu.hidden = true;
  menuToggle.setAttribute("aria-expanded", "false");
  document.body.style.overflow = "";
}

if (menuToggle) {
  menuToggle.addEventListener("click", openMenu);
}

if (menuClose) {
  menuClose.addEventListener("click", closeMenu);
}

mobileLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});

closeMenu();

document.querySelectorAll(".faq-q").forEach((button) => {
  const panelId = button.getAttribute("aria-controls");
  const panel = panelId ? document.getElementById(panelId) : null;
  if (!panel) return;

  button.addEventListener("click", () => {
    const expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!expanded));
    panel.hidden = expanded;
  });
});

let collapseIdCounter = 0;

function setupMobileCardExpansions() {
  const paragraphs = document.querySelectorAll(".service-item-body p, .portfolio-card p, .why-card p, .assistance-card p");

  paragraphs.forEach((paragraph) => {
    if (!paragraph.dataset.fullHtml) paragraph.dataset.fullHtml = paragraph.innerHTML;
    if (!paragraph.dataset.collapseId) {
      collapseIdCounter += 1;
      paragraph.dataset.collapseId = `c${collapseIdCounter}`;
    }

    const ownerId = paragraph.dataset.collapseId;
    const parent = paragraph.parentElement;
    const siblingsAfter = [];
    if (parent) {
      const children = Array.from(parent.children);
      const idx = children.indexOf(paragraph);
      if (idx >= 0) siblingsAfter.push(...children.slice(idx + 1));
    }

    if (paragraph.dataset.expanded === "true") return;

    const plainText = paragraph.textContent ? paragraph.textContent.trim() : "";
    const hasExtraBlocks = siblingsAfter.length > 0;
    const shouldCollapse = plainText.length > 170 || hasExtraBlocks;
    if (!shouldCollapse) return;

    const truncated = `${plainText.slice(0, 165).trim()}...`;
    paragraph.classList.add("card-text-collapsible");
    paragraph.innerHTML = `${truncated} <a href="#" class="card-see-more-link">vedi altro</a>`;

    siblingsAfter.forEach((el) => {
      el.dataset.collapsedOwner = ownerId;
      el.style.display = "none";
    });
  });
}

document.addEventListener("click", (event) => {
  const link = event.target.closest(".card-see-more-link");
  if (!link) return;
  event.preventDefault();

  const paragraph = link.closest("p");
  if (!paragraph || !paragraph.dataset.fullHtml) return;

  paragraph.innerHTML = paragraph.dataset.fullHtml;
  paragraph.dataset.expanded = "true";
  paragraph.classList.remove("card-text-collapsible");

  const ownerId = paragraph.dataset.collapseId;
  const parent = paragraph.parentElement;
  if (!parent || !ownerId) return;
  parent.querySelectorAll(`[data-collapsed-owner="${ownerId}"]`).forEach((el) => {
    el.style.display = "";
    delete el.dataset.collapsedOwner;
  });
});

setupMobileCardExpansions();
