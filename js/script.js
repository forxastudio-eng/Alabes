/* ==========================================================================
   ÁLABES — Landing page interactions + datos de tipologías
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {
  /* ---------- CONFIG: reemplazar con datos reales antes de publicar ---------- */
  var WHATSAPP_NUMBER = "593939087030";

  /* ---------- Apertura robusta de WhatsApp ----------
     Abre WhatsApp en una pestaña nueva mediante un <a target="_blank"> real con
     clic simulado (más fiable ante bloqueadores de pop-ups que window.open()).
     Si por algún motivo el navegador no permite abrir la pestaña nueva, como
     último recurso se usa window.open() directo. */
  function openWhatsApp(url) {
    try {
      var a = document.createElement("a");
      a.href = url;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.style.display = "none";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (err) {
      try { window.open(url, "_blank", "noopener"); } catch (err2) { /* sin más opciones */ }
    }
  }

  /* =========================================================================
     DATOS DE TIPOLOGÍAS
     ficha: imagen real de la ficha técnica del brochure (se abre en grande al click)
     thumb: miniatura usada en la tarjeta (ruta explícita para que funcione también
            en el HTML autocontenido con imágenes incrustadas)
     ========================================================================= */
  var UNITS = {
    a: [
      { code: "A0", title: "Suite A0", area: "54.07", status: "disponible", dorm: "1 dormitorio", banos: "1 baño", extra: "Patio 16.19 m²", ficha: "img/fichas/A0.jpg", thumb: "img/fichas/thumbs/A0.jpg" },
      { code: "A1", title: "Suite A1", area: "54.97", status: "disponible", dorm: "1 dormitorio", banos: "1 baño", extra: "Patio 16.23 m²", ficha: "img/fichas/A1.jpg", thumb: "img/fichas/thumbs/A1.jpg" },
      { code: "A2", title: "Suite A2", area: "56.31", status: "disponible", dorm: "1 dormitorio", banos: "1 baño", extra: "Patio 16.90 m²", ficha: "img/fichas/A2.jpg", thumb: "img/fichas/thumbs/A2.jpg" },
      { code: "A3", title: "Suite A3", tag: "Monoambiente", area: "50.86", status: "disponible", dorm: "1 dormitorio", banos: "1 baño", extra: "Patio 13.60 m²", ficha: "img/fichas/A3.jpg", thumb: "img/fichas/thumbs/A3.jpg" }
    ],
    b: [
      { code: "B0", title: "Suite B0", area: "38.02", status: "disponible", dorm: "1 dormitorio", banos: "1 baño", extra: "Balcón 2.21 m²", ficha: "img/fichas/B0.jpg", thumb: "img/fichas/thumbs/B0.jpg" },
      { code: "B1", title: "Suite B1", area: "38.51", status: "disponible", dorm: "1 dormitorio", banos: "1 baño", extra: "Balcón 2.21 m²", ficha: "img/fichas/B1.jpg", thumb: "img/fichas/thumbs/B1.jpg" },
      { code: "B2", title: "Suite B2", area: "39.38", status: "disponible", dorm: "1 dormitorio", banos: "1 baño", extra: "Balcón 2.95 m²", ficha: "img/fichas/B2.jpg", thumb: "img/fichas/thumbs/B2.jpg" },
      { code: "B3", title: "Suite B3", tag: "Monoambiente", area: "37.02", status: "disponible", dorm: "1 dormitorio", banos: "1 baño", extra: "", ficha: "img/fichas/B3.jpg", thumb: "img/fichas/thumbs/B3.jpg" },
      { code: "B4", title: "Suite B4", area: "41.83", status: "disponible", dorm: "1 dormitorio", banos: "1 baño", extra: "Balcón 3.29 m²", ficha: "img/fichas/B4.jpg", thumb: "img/fichas/thumbs/B4.jpg" },
      { code: "B5", title: "Suite B5", area: "47.59", status: "disponible", dorm: "1 dormitorio", banos: "1 baño", extra: "Balcón 3.34 m²", ficha: "img/fichas/B5.jpg", thumb: "img/fichas/thumbs/B5.jpg" },
      { code: "B6", title: "Suite B6", area: "47.33", status: "disponible", dorm: "1 dormitorio", banos: "1 baño", extra: "Balcón 3.36 m²", ficha: "img/fichas/B6.jpg", thumb: "img/fichas/thumbs/B6.jpg" },
      { code: "B7", title: "Suite B7", area: "50.14", status: "disponible", dorm: "1 dormitorio", banos: "1 baño", extra: "Balcón 5.67 m²", ficha: "img/fichas/B7.jpg", thumb: "img/fichas/thumbs/B7.jpg" },
      { code: "B8", title: "Suite B8", area: "38.84", status: "disponible", dorm: "1 dormitorio", banos: "1 baño", extra: "Balcón 2.81 m²", ficha: "img/fichas/B8.jpg", thumb: "img/fichas/thumbs/B8.jpg" },
      { code: "B9", title: "Suite B9", area: "38.84", status: "disponible", dorm: "1 dormitorio", banos: "1 baño", extra: "Balcón 2.81 m²", ficha: "img/fichas/B9.jpg", thumb: "img/fichas/thumbs/B9.jpg" },
      { code: "B10", title: "Suite B10", area: "55.85", status: "vendido", dorm: "1 dormitorio", banos: "1 baño", extra: "Balcón 5.66 m²", ficha: "img/fichas/B10.jpg", thumb: "img/fichas/thumbs/B10.jpg" },
      { code: "B11", title: "Suite B11", area: "57.18", status: "disponible", dorm: "1 dormitorio", banos: "1½ baños", extra: "Balcón 8.88 m²", ficha: "img/fichas/B11.jpg", thumb: "img/fichas/thumbs/B11.jpg" },
      { code: "B12", title: "Suite B12", area: "53.16", status: "disponible", dorm: "1 dormitorio", banos: "1½ baños", extra: "Balcón 8.91 m²", ficha: "img/fichas/B12.jpg", thumb: "img/fichas/thumbs/B12.jpg" }
    ],
    c: [
      { code: "C0", title: "Suite C0", area: "38.02", status: "disponible", dorm: "1 dormitorio", banos: "1 baño", extra: "Balcón 2.21 m²", ficha: "img/fichas/C0.jpg", thumb: "img/fichas/thumbs/C0.jpg" },
      { code: "C1", title: "Suite C1", area: "38.72", status: "disponible", dorm: "1 dormitorio", banos: "1 baño", extra: "Balcón 2.42 m²", ficha: "img/fichas/C1.jpg", thumb: "img/fichas/thumbs/C1.jpg" },
      { code: "C2", title: "Suite C2", area: "39.38", status: "disponible", dorm: "1 dormitorio", banos: "1 baño", extra: "Balcón 2.95 m²", ficha: "img/fichas/C2.jpg", thumb: "img/fichas/thumbs/C2.jpg" },
      { code: "C3", title: "Suite C3", tag: "Monoambiente", area: "36.99", status: "disponible", dorm: "1 dormitorio", banos: "1 baño", extra: "", ficha: "img/fichas/C3.jpg", thumb: "img/fichas/thumbs/C3.jpg" },
      { code: "C4", title: "Dep. C4", tag: "Dúplex", area: "64.02", status: "disponible", dorm: "2 dormitorios", banos: "2 baños", extra: "Balcón 3.29 m²", ficha: "img/fichas/C4.jpg", thumb: "img/fichas/thumbs/C4.jpg" },
      { code: "C5", title: "Dep. C5", tag: "Dúplex", area: "70.19", status: "disponible", dorm: "2 dormitorios", banos: "2 baños", extra: "Balcón 3.34 m²", ficha: "img/fichas/C5.jpg", thumb: "img/fichas/thumbs/C5.jpg" },
      { code: "C6", title: "Dep. C6", tag: "Dúplex", area: "66.97", status: "disponible", dorm: "2 dormitorios", banos: "2 baños", extra: "Balcón 2.67 m²", ficha: "img/fichas/C6.jpg", thumb: "img/fichas/thumbs/C6.jpg" },
      { code: "C7", title: "Dep. C7", tag: "Dúplex", area: "64.39", status: "disponible", dorm: "2 dormitorios", banos: "1 baño", extra: "Balcón 5.67 m²", ficha: "img/fichas/C7.jpg", thumb: "img/fichas/thumbs/C7.jpg" },
      { code: "C8", title: "Suite C8", area: "38.84", status: "disponible", dorm: "1 dormitorio", banos: "1 baño", extra: "Balcón 2.81 m²", ficha: "img/fichas/C8.jpg", thumb: "img/fichas/thumbs/C8.jpg" },
      { code: "C9", title: "Suite C9", area: "38.84", status: "disponible", dorm: "1 dormitorio", banos: "1 baño", extra: "Balcón 2.81 m²", ficha: "img/fichas/C9.jpg", thumb: "img/fichas/thumbs/C9.jpg" },
      { code: "C10", title: "Dep. C10", tag: "Dúplex + Terraza", area: "89.92", status: "disponible", dorm: "2 dormitorios", banos: "2 baños", extra: "Terraza 8.19 m²", ficha: "img/fichas/C10.jpg", thumb: "img/fichas/thumbs/C10.jpg" },
      { code: "C11", title: "Dep. C11", tag: "Dúplex + Terraza", area: "83.48", status: "disponible", dorm: "2 dormitorios", banos: "2 baños", extra: "Terraza 8.22 m²", ficha: "img/fichas/C11.jpg", thumb: "img/fichas/thumbs/C11.jpg" },
      { code: "C12", title: "Dep. C12", tag: "Dúplex + Terraza", area: "Consultar", status: "reservado", dorm: "2 dormitorios", banos: "2 baños", extra: "Terraza 22.64 m²", ficha: "img/fichas/C12.jpg", thumb: "img/fichas/thumbs/C12.jpg" }
    ]
  };

  function unitCardHTML(u) {
    var statusLabel = u.status === "vendido" ? "Vendido" : (u.status === "reservado" ? "Reservado" : "Disponible");
    var areaVal = u.area === "Consultar" ? "Consultar" : u.area + " m²";
    var tag = u.tag ? '<small>' + u.tag + '</small>' : "";
    var extra = u.extra ? '<li><svg class="icon"><use href="#i-tree"></use></svg> ' + u.extra + '</li>' : "";
    var thumb = u.thumb;
    return (
      '<div class="unit-card reveal is-visible" data-ficha="' + u.ficha + '" data-title="' + u.title + ' · ' + areaVal + '">' +
        '<div class="unit-card__img">' +
          '<img src="' + thumb + '" loading="lazy" alt="Ficha técnica ' + u.title + '" />' +
          '<span class="unit-card__zoom"><svg class="icon"><use href="#i-expand"></use></svg></span>' +
        '</div>' +
        '<div class="unit-card__body">' +
          '<div class="unit-card__top">' +
            '<h4>' + u.title + tag + '</h4>' +
            '<span class="area">' + areaVal + (u.area !== "Consultar" ? '<small>área útil</small>' : '') + '</span>' +
          '</div>' +
          '<span class="status status--' + u.status + '">' + statusLabel + '</span>' +
          '<ul class="unit-card__specs">' +
            '<li><svg class="icon"><use href="#i-bed"></use></svg> ' + u.dorm + '</li>' +
            '<li><svg class="icon"><use href="#i-bath"></use></svg> ' + u.banos + '</li>' +
            '<li><svg class="icon"><use href="#i-sofa"></use></svg> Sala</li>' +
            '<li><svg class="icon"><use href="#i-kitchen"></use></svg> Cocina</li>' +
            '<li><svg class="icon"><use href="#i-laundry"></use></svg> Lavandería</li>' +
            extra +
          '</ul>' +
        '</div>' +
      '</div>'
    );
  }

  ["a", "b", "c"].forEach(function (key) {
    var container = document.getElementById("grid-" + key);
    if (!container) return;
    container.innerHTML = UNITS[key].map(unitCardHTML).join("");
  });

  /* ---------- Header scroll state ---------- */
  var header = document.getElementById("header");
  function onScroll() {
    if (window.scrollY > 40) header.classList.add("is-scrolled");
    else header.classList.remove("is-scrolled");
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- Mobile nav toggle ---------- */
  var navToggle = document.getElementById("navToggle");
  var nav = document.getElementById("nav");
  navToggle.addEventListener("click", function () {
    nav.classList.toggle("is-open");
    navToggle.classList.toggle("is-open");
  });
  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("is-open");
      navToggle.classList.remove("is-open");
    });
  });

  /* ---------- Reveal on scroll ---------- */
  function observeReveal() {
    var revealEls = document.querySelectorAll(".reveal:not(.is-visible)");
    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 }
      );
      revealEls.forEach(function (el) { io.observe(el); });
    } else {
      revealEls.forEach(function (el) { el.classList.add("is-visible"); });
    }
  }
  observeReveal();

  /* ---------- Tabs (Tipologías) ---------- */
  var tabButtons = document.querySelectorAll(".tab-btn");
  var tabPanels = document.querySelectorAll(".tab-panel");
  tabButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var target = btn.getAttribute("data-tab");
      tabButtons.forEach(function (b) { b.classList.remove("is-active"); });
      tabPanels.forEach(function (p) { p.classList.remove("is-active"); });
      btn.classList.add("is-active");
      document.getElementById(target).classList.add("is-active");
    });
  });

  /* =========================================================================
     LIGHTBOX — modo galería (con navegación) y modo ficha (imagen única)
     ========================================================================= */
  var lightbox = document.getElementById("lightbox");
  var lightboxImg = document.getElementById("lightboxImg");
  var lightboxCaption = document.getElementById("lightboxCaption");
  var lbPrev = document.getElementById("lightboxPrev");
  var lbNext = document.getElementById("lightboxNext");
  var lbClose = document.getElementById("lightboxClose");

  var galleryImgs = Array.prototype.slice.call(document.querySelectorAll("[data-lightbox]"));
  var currentIndex = 0;
  var navMode = "gallery"; // "gallery" | "single"

  /* ---------- Bloqueo de scroll de fondo sin "saltos" ----------
     Usar solo document.body.style.overflow = "hidden" puede hacer que la página
     "salte"/se desplace al desaparecer la barra de scroll (cambia el ancho
     disponible y el layout se reacomoda). Para que la tarjeta/ficha aparezca
     centrada y estable, y el scroll de fondo quede realmente congelado en su
     lugar, fijamos el body en su posición de scroll actual; al cerrar, se
     restaura exactamente esa posición y el scroll sigue en la página normal. */
  var scrollLockY = 0;
  function lockScroll() {
    scrollLockY = window.scrollY || document.documentElement.scrollTop || 0;
    document.body.style.position = "fixed";
    document.body.style.top = "-" + scrollLockY + "px";
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
  }
  function unlockScroll() {
    document.body.style.position = "";
    document.body.style.top = "";
    document.body.style.left = "";
    document.body.style.right = "";
    document.body.style.width = "";
    window.scrollTo(0, scrollLockY);
  }

  function openGalleryAt(index) {
    navMode = "gallery";
    currentIndex = index;
    lightboxImg.src = galleryImgs[index].getAttribute("data-full") || galleryImgs[index].src;
    lightboxCaption.textContent = galleryImgs[index].getAttribute("alt") || "";
    lbPrev.classList.remove("is-hidden");
    lbNext.classList.remove("is-hidden");
    lightbox.classList.remove("is-ficha");
    lightbox.classList.add("is-open");
    lockScroll();
  }

  /* "Ficha" = unidades, locales y planos: se abren en una ventana fija
     (1500x800 máx.) en vez de a pantalla completa, con la X en la esquina
     superior izquierda de esa ventana. El fondo queda fijo (no se puede
     desplazar) mientras está abierta; al cerrarla, el scroll continúa
     normalmente en la página principal desde donde se quedó. */
  function openSingle(src, caption) {
    navMode = "single";
    lightboxImg.src = src;
    lightboxCaption.textContent = caption || "";
    lbPrev.classList.add("is-hidden");
    lbNext.classList.add("is-hidden");
    lightbox.classList.add("is-ficha");
    lightbox.classList.add("is-open");
    lockScroll();
  }

  function closeLightbox() {
    lightbox.classList.remove("is-open");
    lightbox.classList.remove("is-ficha");
    unlockScroll();
  }

  function showRelative(delta) {
    if (navMode !== "gallery") return;
    currentIndex = (currentIndex + delta + galleryImgs.length) % galleryImgs.length;
    lightboxImg.src = galleryImgs[currentIndex].getAttribute("data-full") || galleryImgs[currentIndex].src;
    lightboxCaption.textContent = galleryImgs[currentIndex].getAttribute("alt") || "";
  }

  galleryImgs.forEach(function (img, index) {
    img.addEventListener("click", function () { openGalleryAt(index); });
  });

  // Delegated click for unit cards + local cards + plan cards (rendered dynamically)
  document.addEventListener("click", function (e) {
    var card = e.target.closest("[data-ficha]");
    if (card) {
      openSingle(card.getAttribute("data-ficha"), card.getAttribute("data-title") || "");
    }
  });

  if (lbClose) lbClose.addEventListener("click", closeLightbox);
  if (lbPrev) lbPrev.addEventListener("click", function () { showRelative(-1); });
  if (lbNext) lbNext.addEventListener("click", function () { showRelative(1); });
  lightbox.addEventListener("click", function (e) { if (e.target === lightbox) closeLightbox(); });
  document.addEventListener("keydown", function (e) {
    if (!lightbox.classList.contains("is-open")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowRight") showRelative(1);
    if (e.key === "ArrowLeft") showRelative(-1);
  });

  /* ---------- Contact form -> WhatsApp ---------- */
  var form = document.getElementById("contactForm");
  var formStatus = document.getElementById("formStatus");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var name = form.querySelector("#name").value.trim();
      var phone = form.querySelector("#phone").value.trim();
      var email = form.querySelector("#email").value.trim();
      var unit = form.querySelector("#unit").value;
      var message = form.querySelector("#message").value.trim();

      if (!name || !phone) {
        formStatus.textContent = "Por favor completa al menos tu nombre y teléfono.";
        formStatus.classList.add("is-visible");
        return;
      }

      var text = "Hola, soy " + name + ". Me interesa el proyecto Álabes";
      if (unit) text += " (interés: " + unit + ")";
      text += ". Teléfono: " + phone;
      if (email) text += ". Correo: " + email;
      if (message) text += ". Mensaje: " + message;

      var url = "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodeURIComponent(text);
      openWhatsApp(url);

      formStatus.textContent = "¡Listo! Te llevamos a WhatsApp para enviar tu consulta.";
      formStatus.classList.add("is-visible");
    });
  }

  /* Nota: los enlaces fijos de WhatsApp (hero, teléfono de contacto, botón
     flotante) ya llevan su href="https://wa.me/..." y target="_top" escritos
     directamente en el HTML — son links normales, sin JS de por medio, para
     minimizar cualquier fricción con el sandbox de Wix. Solo el formulario de
     contacto necesita JS porque su mensaje se arma con los datos que escribe
     la persona. */

  /* Re-run reveal observer after dynamic unit cards were injected */
  observeReveal();
});
