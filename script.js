
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
    heroEyebrow: "Signature Selection",
    featuredLabel: "Signature Product",
    browseButton: "Browse Menu",
    menuKicker: "Product Menu",
    menuTitle: "Galaxy Signature Lineup",
    menuCopy: "Browse the current collection below and contact us for more product information.",
    promoKicker: "Promotion",
    promoTitle: "Current Galaxy Promotion",
    promoCopy: "Check out our latest campaign and contact us on WhatsApp for more details.",
    contactKicker: "Contact",
    contactBadge: "Direct WhatsApp Assistance",
    contactTitle: "Interested in the Galaxy lineup?",
    contactCopy: "Tap the WhatsApp button below and our team will reply with more information as soon as possible.",
    contactSubcopy: "Share the product name you are interested in and we will assist you directly.",
    contactButton: "Chat on WhatsApp",
    footerNote: "Premium product information with direct WhatsApp assistance.",
    viewButton: "View Product",
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
    heroEyebrow: "Pilihan Istimewa",
    featuredLabel: "Produk Istimewa",
    browseButton: "Lihat Menu",
    menuKicker: "Menu Produk",
    menuTitle: "Barisan Istimewa Galaxy",
    menuCopy: "Lihat koleksi semasa di bawah dan hubungi kami untuk maklumat lanjut produk.",
    promoKicker: "Promosi",
    promoTitle: "Promosi Galaxy Terkini",
    promoCopy: "Lihat kempen terbaru kami dan hubungi kami di WhatsApp untuk maklumat lanjut.",
    contactKicker: "Hubungi",
    contactBadge: "Bantuan WhatsApp Secara Terus",
    contactTitle: "Berminat dengan pilihan Galaxy?",
    contactCopy: "Tekan butang WhatsApp di bawah dan pasukan kami akan membalas dengan maklumat lanjut secepat mungkin.",
    contactSubcopy: "Nyatakan nama produk yang anda minati dan kami akan bantu anda secara terus.",
    contactButton: "Chat di WhatsApp",
    footerNote: "Maklumat produk premium dengan bantuan terus melalui WhatsApp.",
    viewButton: "Lihat Produk",
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
    heroEyebrow: "精选系列",
    featuredLabel: "主打产品",
    browseButton: "查看目录",
    menuKicker: "产品目录",
    menuTitle: "Galaxy 精选产品",
    menuCopy: "浏览以下当前系列，并联系我们获取更多产品详情。",
    promoKicker: "促销活动",
    promoTitle: "Galaxy 最新促销",
    promoCopy: "查看我们的最新活动，并通过 WhatsApp 联系我们了解更多详情。",
    contactKicker: "联系",
    contactBadge: "WhatsApp 直接协助",
    contactTitle: "对 Galaxy 系列感兴趣？",
    contactCopy: "点击下方 WhatsApp 按钮，我们的团队会尽快回复您并提供更多信息。",
    contactSubcopy: "告诉我们您感兴趣的产品名称，我们将直接为您提供协助。",
    contactButton: "WhatsApp 咨询",
    footerNote: "高级产品资料展示，并提供 WhatsApp 直接协助。",
    viewButton: "查看产品",
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
  v: { nameKey: "productNameV", codeKey: "productCodeV", descKeys: ["productV1", "productV2", "productV3"], label: { en: "Full Flavour", ms: "Full Flavour", zh: "Full Flavour" } },
  u: { nameKey: "productNameU", codeKey: "productCodeU", descKeys: ["productU1", "productU2", "productU3"], label: { en: "Blue Menthol", ms: "Blue Menthol", zh: "Blue Menthol" } },
  s: { nameKey: "productNameS", codeKey: "productCodeS", descKeys: ["productS1", "productS2", "productS3"], label: { en: "Gold S Premium", ms: "Gold S Premium", zh: "Gold S Premium" } },
  k: { nameKey: "productNameK", codeKey: "productCodeK", descKeys: ["productK1", "productK2", "productK3", "productK4", "productK5"], label: { en: "Kretek Baru", ms: "Kretek Baru", zh: "Kretek Baru" } },
  b: { nameKey: "productNameB", codeKey: "productCodeB", descKeys: ["productB1", "productB2", "productB3", "productB4", "productB5"], label: { en: "Kretek Boleh", ms: "Kretek Boleh", zh: "Kretek Boleh" } }
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
const productChips = document.querySelectorAll(".product-chip");
const productFocusButtons = document.querySelectorAll("[data-product-focus]");
const heroPhoto = document.getElementById("heroPhoto");
const heroProductName = document.getElementById("heroProductName");
const heroProductCode = document.getElementById("heroProductCode");
const heroProductDesc = document.getElementById("heroProductDesc");
const stageIndex = document.getElementById("stageIndex");

let currentLanguage = localStorage.getItem("galaxy-language") || "en";
let currentProduct = "v";

const focusSequence = ["v", "u", "s", "k", "b"];

function setWhatsAppLink(language) {
  whatsappLinks.forEach((link) => {
    link.href = whatsappUrl;
  });
}

function updateProductDisplay(productId) {
  currentProduct = productId;
  const product = productMap[productId];
  const dictionary = translations[currentLanguage];
  heroPhoto.src = products[productId].image;
  heroPhoto.alt = `${dictionary[product.nameKey]} product`;
  heroProductName.textContent = dictionary[product.nameKey];
  heroProductCode.textContent = dictionary[product.codeKey];
  heroProductDesc.innerHTML = product.descKeys.map((key) => `<li>${dictionary[key]}</li>`).join("");
  const index = focusSequence.indexOf(productId) + 1;
  stageIndex.textContent = `${String(index).padStart(2, "0")} / 05`;

  productChips.forEach((chip) => {
    const active = chip.dataset.product === productId;
    chip.classList.toggle("is-active", active);
    chip.setAttribute("aria-pressed", active ? "true" : "false");
  });

  const targetCard = document.getElementById(`card-${productId}`);
  if (targetCard) {
    document.querySelectorAll(".product-card").forEach((card) => card.classList.remove("is-focused"));
    targetCard.classList.add("is-focused");
  }
}

function applyTranslations(language) {
  const dictionary = translations[language];
  translatableNodes.forEach((node) => {
    const key = node.dataset.i18n;
    if (dictionary[key]) {
      node.textContent = dictionary[key];
    }
  });

  document.querySelectorAll("[data-static-label]").forEach((node) => {
    const key = node.dataset.staticLabel;
    if (productMap[key]) {
      node.textContent = productMap[key].label[language];
    }
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.lang === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", isActive ? "true" : "false");
  });

  setWhatsAppLink(language);
  updateProductDisplay(currentProduct);
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

productChips.forEach((chip) => {
  chip.addEventListener("click", () => updateProductDisplay(chip.dataset.product));
});

productFocusButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const productId = button.dataset.productFocus;
    updateProductDisplay(productId);
    document.getElementById("top")?.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

if (localStorage.getItem("galaxy-age-confirmed") === "true") {
  revealSite();
}

applyTranslations(currentLanguage);