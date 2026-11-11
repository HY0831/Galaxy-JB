const maintenanceMode = false;

if (maintenanceMode) {
  document.body.innerHTML = `
    <main class="maintenance-page" style="min-height:100vh;display:grid;place-items:center;padding:24px;background:#000;color:#fff;font-family:Manrope,sans-serif;text-align:center;">
      <div>
        <h1>Website Under Maintenance</h1>
        <p>We will be back soon. For urgent enquiries, kindly contact us on WhatsApp.</p>
        <a href="https://wa.me/60187911077?text=Hi%2C%20I'm%20interested%20in%20your%20product" style="display:inline-flex;padding:12px 18px;border-radius:999px;background:#fff;color:#000;text-decoration:none;">Contact WhatsApp</a>
      </div>
    </main>
  `;
}

const whatsappUrl = "https://wa.me/60187911077?text=Hi%2C%20I'm%20interested%20in%20your%20product";
const productOrder = ["v", "u", "s", "k", "b"];

const products = {
  v: { image: "./assets/galaxy-v.jpg" },
  u: { image: "./assets/galaxy-u.jpg" },
  s: { image: "./assets/galaxy-s.jpg" },
  k: { image: "./assets/galaxy-k.jpg" },
  b: { image: "./assets/galaxy-b.jpg" }
};

const translations = {
  en: {
    ageKicker: "Age Confirmation",
    ageTitle: "Are you above 18 years old?",
    ageCopy: "You must confirm that you are at least 18 years old before entering this website.",
    ageConfirm: "Yes, I am above 18",
    ageDecline: "No, leave website",
    navProducts: "Products",
    navPromotion: "Promotion",
    navContact: "Contact",
    carouselKicker: "Swipe Collection",
    carouselTitle: "Galaxy Signature Selection",
    carouselCopy: "Swipe across the cards to explore each product. The active card stays solid while the others remain partially transparent.",
    swipeHint: "Swipe or tap the cards",
    featuredLabel: "Signature Product",
    promoKicker: "Promotion",
    promoTitle: "Current Galaxy Promotion",
    promoCopy: "Check out our latest campaign and contact us on WhatsApp for more details.",
    contactKicker: "Contact",
    contactTitle: "Interested in the Galaxy lineup?",
    contactCopy: "Tap the WhatsApp button below and our team will reply with more information as soon as possible.",
    contactSubcopy: "Share the product name you are interested in and we will assist you directly.",
    contactButton: "Chat on WhatsApp",
    footerNote: "Premium product information with direct WhatsApp assistance.",
    productNameB: "GALAXY KRETEK BOLEH",
    productCodeB: "(GKBO)",
    productB1: "Milder clove aroma, similar to the taste of LA",
    productB2: "Affordable pricing, suitable for mass consumers",
    productB3: "Smooth draw, easy to accept for new kretek smokers",
    productB4: "Well-balanced flavour, suitable for daily smoking",
    productB5: "Popular among young adult kretek smokers",
    productNameS: "GALAXY GOLD S PREMIUM",
    productCodeS: "(GBS)",
    productS1: "A higher-end premium product in the Galaxy series",
    productS2: "Smoother and more refined texture",
    productS3: "Features an elegant aroma with a premium smoking experience",
    productNameU: "GALAXY BLUE MENTHOL",
    productCodeU: "(GMU)",
    productU1: "A combination of cooling menthol and light tobacco",
    productU2: "One of the most popular choices among younger consumers",
    productU3: "Delivers a refreshing taste preferred by menthol smokers",
    productNameK: "GALAXY KRETEK BARU",
    productCodeK: "(GKB)",
    productK1: "Rich clove aroma, closely resembling the taste of Gudang Garam",
    productK2: "Affordable pricing, suitable for mass consumers",
    productK3: "Smooth draw, easy to accept for new kretek smokers",
    productK4: "Well-balanced flavour, suitable for daily smoking",
    productK5: "Popular among young adult kretek smokers",
    productNameV: "GALAXY RED FULL FLAVOUR",
    productCodeV: "(GRV)",
    productV1: "A classic in the Galaxy series and one of the most stable-selling core flavours",
    productV2: "Rich and full-bodied taste with a smooth, non-harsh finish",
    productV3: "Widely accepted by both retailers and consumers"
  },
  ms: {
    ageKicker: "Pengesahan Umur",
    ageTitle: "Adakah anda berumur 18 tahun ke atas?",
    ageCopy: "Anda mesti mengesahkan bahawa anda berumur sekurang-kurangnya 18 tahun sebelum memasuki laman web ini.",
    ageConfirm: "Ya, saya berumur lebih 18 tahun",
    ageDecline: "Tidak, keluar dari laman web",
    navProducts: "Produk",
    navPromotion: "Promosi",
    navContact: "Hubungi",
    carouselKicker: "Koleksi Swipe",
    carouselTitle: "Pilihan Istimewa Galaxy",
    carouselCopy: "Leret merentasi kad untuk meneroka setiap produk. Kad aktif kekal jelas manakala kad lain lebih lutsinar.",
    swipeHint: "Leret atau tekan kad",
    featuredLabel: "Produk Istimewa",
    promoKicker: "Promosi",
    promoTitle: "Promosi Galaxy Terkini",
    promoCopy: "Lihat kempen terbaru kami dan hubungi kami di WhatsApp untuk maklumat lanjut.",
    contactKicker: "Hubungi",
    contactTitle: "Berminat dengan pilihan Galaxy?",
    contactCopy: "Tekan butang WhatsApp di bawah dan pasukan kami akan membalas dengan maklumat lanjut secepat mungkin.",
    contactSubcopy: "Nyatakan nama produk yang anda minati dan kami akan bantu anda secara terus.",
    contactButton: "Chat di WhatsApp",
    footerNote: "Maklumat produk premium dengan bantuan terus melalui WhatsApp.",
    productNameB: "GALAXY KRETEK BOLEH",
    productCodeB: "(GKBO)",
    productB1: "Aroma cengkih yang lebih lembut, hampir menyerupai rasa LA",
    productB2: "Harga berpatutan, sesuai untuk pengguna umum",
    productB3: "Hisapan lancar, mudah diterima oleh pengguna baru kretek",
    productB4: "Rasa seimbang, sesuai untuk penggunaan harian",
    productB5: "Digemari oleh golongan muda dewasa penggemar kretek",
    productNameS: "GALAXY GOLD S PREMIUM",
    productCodeS: "(GBS)",
    productS1: "Produk premium dalam siri Galaxy dengan posisi lebih tinggi",
    productS2: "Tekstur lebih halus dan lembut",
    productS3: "Menampilkan aroma elegan dengan pengalaman hisapan premium",
    productNameU: "GALAXY BLUE MENTHOL",
    productCodeU: "(GMU)",
    productU1: "Gabungan mentol sejuk dan tembakau ringan",
    productU2: "Antara perisa paling popular dalam kalangan pengguna muda",
    productU3: "Memberikan rasa segar yang digemari oleh penghisap mentol",
    productNameK: "GALAXY KRETEK BARU",
    productCodeK: "(GKB)",
    productK1: "Aroma cengkih yang pekat, hampir menyerupai rasa Gudang Garam",
    productK2: "Harga berpatutan, sesuai untuk pengguna umum",
    productK3: "Hisapan lancar, mudah diterima oleh pengguna baru kretek",
    productK4: "Rasa seimbang, sesuai untuk penggunaan harian",
    productK5: "Digemari oleh golongan muda dewasa penggemar kretek",
    productNameV: "GALAXY RED FULL FLAVOUR",
    productCodeV: "(GRV)",
    productV1: "Perisa klasik dalam siri Galaxy, salah satu produk utama dengan jualan paling stabil",
    productV2: "Ciri rasa yang pekat, penuh dan tidak terlalu tajam",
    productV3: "Diterima baik oleh peniaga dan pengguna"
  },
  zh: {
    ageKicker: "年龄确认",
    ageTitle: "您是否已满 18 岁？",
    ageCopy: "进入本网站前，您必须确认自己已年满 18 岁。",
    ageConfirm: "是，我已年满 18 岁",
    ageDecline: "否，离开网站",
    navProducts: "产品",
    navPromotion: "促销活动",
    navContact: "联系",
    carouselKicker: "滑动系列",
    carouselTitle: "Galaxy 精选产品",
    carouselCopy: "左右滑动卡片即可查看每款产品。当前卡片保持清晰，其他卡片则稍微透明。",
    swipeHint: "滑动或点击卡片",
    featuredLabel: "主打产品",
    promoKicker: "促销活动",
    promoTitle: "Galaxy 最新促销",
    promoCopy: "查看我们的最新活动，并通过 WhatsApp 联系我们了解更多详情。",
    contactKicker: "联系",
    contactTitle: "对 Galaxy 系列感兴趣？",
    contactCopy: "点击下方 WhatsApp 按钮，我们的团队会尽快回复您并提供更多信息。",
    contactSubcopy: "告诉我们您感兴趣的产品名称，我们将直接为您提供协助。",
    contactButton: "WhatsApp 咨询",
    footerNote: "高级产品资料展示，并提供 WhatsApp 直接协助。",
    productNameB: "GALAXY KRETEK BOLEH",
    productCodeB: "(GKBO)",
    productB1: "GKBO 的丁香风味柔和，与 LA 的口味几乎相似",
    productB2: "价格亲民，适合大众消费层",
    productB3: "口感顺滑，新手也容易接受的 Kretek（丁香烟）",
    productB4: "风味均衡，适合每日抽吸",
    productB5: "深受年轻成年 Kretek 烟民喜爱的人气口味",
    productNameS: "GALAXY GOLD S PREMIUM",
    productCodeS: "(GBS)",
    productS1: "GALAXY GOLD S 是 Galaxy 系列中定位更高端、",
    productS2: "口感更细腻的金色精品款，主打柔顺、香气高雅、",
    productS3: "烟气细腻的 Premium 体验",
    productNameU: "GALAXY BLUE MENTHOL",
    productCodeU: "(GMU)",
    productU1: "GALAXY BLUE 主打清凉薄荷 + 轻盈烟草的结合，",
    productU2: "是 Galaxy 系列里最受年轻族群",
    productU3: "与长抽薄荷客户欢迎的清新口味",
    productNameK: "GALAXY KRETEK BARU",
    productCodeK: "(GKB)",
    productK1: "GKB的丁香香味浓郁，与Gudang Garam口味几乎相似",
    productK2: "价格亲民，适合大众消费层",
    productK3: "口感顺滑，新手也容易接受的 Kretek（丁香烟）",
    productK4: "风味均衡，适合每日抽吸",
    productK5: "深受年轻成年 Kretek 烟民喜爱的人气口味",
    productNameV: "GALAXY RED FULL FLAVOUR",
    productCodeV: "(GRV)",
    productV1: "GALAXY RED 是 GALAXY 系列中最经典、销量最稳定的主力口味之一，",
    productV2: "以厚实浓郁、顺口不刺激的特征，",
    productV3: "深受店家与消费者欢迎"
  }
};

const productMap = {
  v: { nameKey: "productNameV", codeKey: "productCodeV", descKeys: ["productV1", "productV2", "productV3"] },
  u: { nameKey: "productNameU", codeKey: "productCodeU", descKeys: ["productU1", "productU2", "productU3"] },
  s: { nameKey: "productNameS", codeKey: "productCodeS", descKeys: ["productS1", "productS2", "productS3"] },
  k: { nameKey: "productNameK", codeKey: "productCodeK", descKeys: ["productK1", "productK2", "productK3", "productK4", "productK5"] },
  b: { nameKey: "productNameB", codeKey: "productCodeB", descKeys: ["productB1", "productB2", "productB3", "productB4", "productB5"] }
};

const languageButtons = document.querySelectorAll(".lang-btn");
const translatableNodes = document.querySelectorAll("[data-i18n]");
const whatsappLinks = document.querySelectorAll(".whatsapp-link");
const entryScreen = document.getElementById("entryScreen");
const mainSite = document.getElementById("mainSite");
const confirmAgeButton = document.getElementById("confirmAgeButton");
const declineAgeButton = document.getElementById("declineAgeButton");
const menuButton = document.getElementById("menuButton");
const mobileMenu = document.getElementById("mobileMenu");
const cardsTrack = document.getElementById("cardsTrack");
const cardsViewport = document.getElementById("cardsViewport");
const swipeDots = document.getElementById("swipeDots");
const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const activeProductName = document.getElementById("activeProductName");
const activeProductCode = document.getElementById("activeProductCode");
const activeProductDesc = document.getElementById("activeProductDesc");
const stageIndex = document.getElementById("stageIndex");

let currentLanguage = localStorage.getItem("galaxy-language") || "en";
let currentIndex = 0;
let touchStartX = 0;
let touchDeltaX = 0;
let isDragging = false;
let ignoreCardClickUntil = 0;
let pointerStartX = null;

function setWhatsAppLink() {
  whatsappLinks.forEach((link) => {
    link.href = whatsappUrl;
  });
}

function mod(index, total) {
  return (index + total) % total;
}

function getRelativeOffset(index, activeIndex) {
  const total = productOrder.length;
  let diff = index - activeIndex;
  if (diff > total / 2) diff -= total;
  if (diff < -total / 2) diff += total;
  return diff;
}

function renderCards() {
  const dictionary = translations[currentLanguage];
  cardsTrack.innerHTML = productOrder
    .map((productId) => {
      const product = productMap[productId];
      return `
        <button class="product-slide" type="button" data-product="${productId}" aria-label="${dictionary[product.nameKey]}">
          <div class="product-slide-inner">
            <div class="product-slide-image-wrap">
              <img class="product-slide-image" src="${products[productId].image}" alt="${dictionary[product.nameKey]} product" />
            </div>
            <div>
              <p class="product-slide-name">${dictionary[product.nameKey]}</p>
              <p class="product-slide-code">${dictionary[product.codeKey]}</p>
            </div>
          </div>
        </button>
      `;
    })
    .join("");

  swipeDots.innerHTML = productOrder
    .map((productId, index) => `<button class="swipe-dot" type="button" data-index="${index}" aria-label="Go to product ${index + 1}"></button>`)
    .join("");

  cardsTrack.querySelectorAll(".product-slide").forEach((card) => {
    card.addEventListener("click", (event) => {
      // A touch swipe may produce a synthetic click after touchend.
      if (Date.now() < ignoreCardClickUntil) {
        event.preventDefault();
        return;
      }
      const index = productOrder.indexOf(card.dataset.product);
      goToIndex(index);
    });
  });

  swipeDots.querySelectorAll(".swipe-dot").forEach((dot) => {
    dot.addEventListener("click", () => {
      goToIndex(Number(dot.dataset.index));
    });
  });
}

function updateCarouselLayout() {
  const cards = cardsTrack.querySelectorAll(".product-slide");
  const dotButtons = swipeDots.querySelectorAll(".swipe-dot");
  const isMobile = window.innerWidth <= 760;
  const shift = isMobile ? 120 : 205;
  const scaleStep = isMobile ? 0.14 : 0.18;

  cards.forEach((card, index) => {
    const offset = getRelativeOffset(index, currentIndex);
    const absOffset = Math.abs(offset);
    const scale = Math.max(0.64, 1 - absOffset * scaleStep);
    const translateX = offset * shift;
    const translateY = absOffset === 0 ? 0 : absOffset * 12;

    card.style.transform = `translateX(calc(-50% + ${translateX}px)) translateY(${translateY}px) scale(${scale})`;
    card.classList.toggle("is-active", absOffset === 0);
    card.classList.toggle("is-near", absOffset === 1);
    card.classList.toggle("is-far", absOffset >= 2);
    card.style.pointerEvents = absOffset <= 1 ? "auto" : "none";
    card.setAttribute("aria-hidden", absOffset > 2 ? "true" : "false");
  });

  dotButtons.forEach((dot, index) => {
    dot.classList.toggle("is-active", index === currentIndex);
    dot.setAttribute("aria-pressed", index === currentIndex ? "true" : "false");
  });
}

function updateProductDetails() {
  const dictionary = translations[currentLanguage];
  const productId = productOrder[currentIndex];
  const product = productMap[productId];

  activeProductName.textContent = dictionary[product.nameKey];
  activeProductCode.textContent = dictionary[product.codeKey];
  activeProductDesc.innerHTML = product.descKeys.map((key) => `<li>${dictionary[key]}</li>`).join("");
  stageIndex.textContent = `${String(currentIndex + 1).padStart(2, "0")} / ${String(productOrder.length).padStart(2, "0")}`;
}

function goToIndex(index) {
  currentIndex = mod(index, productOrder.length);
  updateCarouselLayout();
  updateProductDetails();
}

function goNext() {
  goToIndex(currentIndex + 1);
}

function goPrev() {
  goToIndex(currentIndex - 1);
}

function applyTranslations(language) {
  const dictionary = translations[language];

  translatableNodes.forEach((node) => {
    const key = node.dataset.i18n;
    if (dictionary[key]) node.textContent = dictionary[key];
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", isActive ? "true" : "false");
  });

  setWhatsAppLink();
  renderCards();
  updateCarouselLayout();
  updateProductDetails();
  localStorage.setItem("galaxy-language", language);
}

function revealSite() {
  entryScreen.hidden = true;
  mainSite.hidden = false;
}

confirmAgeButton?.addEventListener("click", () => {
  localStorage.setItem("galaxy-age-confirmed", "true");
  revealSite();
});

declineAgeButton?.addEventListener("click", () => {
  window.location.href = "https://www.google.com";
});

menuButton?.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!isOpen));
  mobileMenu.hidden = isOpen;
});

mobileMenu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.hidden = true;
    menuButton.setAttribute("aria-expanded", "false");
  });
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentLanguage = button.dataset.lang;
    applyTranslations(currentLanguage);
  });
});

prevButton?.addEventListener("click", goPrev);
nextButton?.addEventListener("click", goNext);

cardsViewport?.addEventListener("touchstart", (event) => {
  touchStartX = event.changedTouches[0].clientX;
  touchDeltaX = 0;
  isDragging = true;
}, { passive: true });

cardsViewport?.addEventListener("touchmove", (event) => {
  if (!isDragging) return;
  touchDeltaX = event.changedTouches[0].clientX - touchStartX;
}, { passive: true });

cardsViewport?.addEventListener("touchend", () => {
  if (!isDragging) return;
  if (Math.abs(touchDeltaX) > 40) {
    ignoreCardClickUntil = Date.now() + 350;
    if (touchDeltaX < 0) goNext();
    else goPrev();
  }
  touchDeltaX = 0;
  isDragging = false;
});

// Desktop users can drag cards with a mouse or stylus as well as use the arrows.
cardsViewport?.addEventListener("pointerdown", (event) => {
  if (event.pointerType !== "touch") pointerStartX = event.clientX;
});

cardsViewport?.addEventListener("pointerup", (event) => {
  if (pointerStartX === null || event.pointerType === "touch") return;
  const distance = event.clientX - pointerStartX;
  pointerStartX = null;
  if (Math.abs(distance) > 45) {
    ignoreCardClickUntil = Date.now() + 350;
    if (distance < 0) goNext();
    else goPrev();
  }
});

cardsViewport?.addEventListener("pointercancel", () => { pointerStartX = null; });

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") goNext();
  if (event.key === "ArrowLeft") goPrev();
});

window.addEventListener("resize", updateCarouselLayout);

if (localStorage.getItem("galaxy-age-confirmed") === "true") {
  revealSite();
}

applyTranslations(currentLanguage);