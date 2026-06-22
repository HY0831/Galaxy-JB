const maintenanceMode = true;

if (maintenanceMode) {
  document.body.innerHTML = `
    <main class="maintenance-page">
      <h1>Website Under Maintenance</h1>
      <p>We will be back soon. For urgent enquiries, kindly contact us on WhatsApp.</p>
      <a href="https://wa.me/60187911077">Contact WhatsApp</a>
    </main>
  `;
}

const translations = {
  en: {
    ageKicker: "Age Confirmation",
    ageTitle: "Are you above 18 years old?",
    ageCopy:
      "You must confirm that you are at least 18 years old before entering this website.",
    ageConfirm: "Yes, I am above 18",
    ageDecline: "No, leave website",
    heroEyebrow: "Signature Selection",
    heroTitle: "Explore the Galaxy collection in a refined showcase.",
    heroCopy:
      "Browse our featured lineup and contact us on WhatsApp for more information.",
    browseButton: "Browse Menu",
    heroContactButton: "Contact on WhatsApp",
    heroNote: "Premium presentation. Personal assistance. Fast reply on WhatsApp.",
    highlightOne: "Premium Selection",
    highlightTwo: "Fast WhatsApp Reply",
    highlightThree: "Elegant Presentation",
    promoKicker: "Promotion",
    promoTitle: "Current Galaxy Promotion",
    promoCopy: "Check out our latest campaign and contact us on WhatsApp for more details.",
    menuKicker: "Product Menu",
    menuTitle: "Galaxy Signature Lineup",
    menuCopy: "Browse the current collection below and contact us for more product information.",
    imagePlaceholder: "Add Product Image",
    featuredLabel: "Signature Product",
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
    productV3: "Widely accepted by both retailers and consumers",
    contactKicker: "Contact",
    contactBadge: "Direct WhatsApp Assistance",
    contactTitle: "Interested in the Galaxy lineup?",
    contactCopy:
      "Tap the WhatsApp button below and our team will reply with more information as soon as possible.",
    contactButton: "Chat on WhatsApp",
    contactSubcopy:
      "Share the product name you are interested in and we will assist you directly.",
    whatsappMessage: "Hi, I'm interested in your product"
  },
  ms: {
    ageKicker: "Pengesahan Umur",
    ageTitle: "Adakah anda berumur 18 tahun ke atas?",
    ageCopy:
      "Anda mesti mengesahkan bahawa anda berumur sekurang-kurangnya 18 tahun sebelum memasuki laman web ini.",
    ageConfirm: "Ya, saya berumur lebih 18 tahun",
    ageDecline: "Tidak, keluar dari laman web",
    heroEyebrow: "Pilihan Istimewa",
    heroTitle: "Terokai koleksi Galaxy dalam paparan yang kemas dan eksklusif.",
    heroCopy:
      "Lihat pilihan utama kami dan hubungi kami terus di WhatsApp untuk maklumat lanjut.",
    browseButton: "Lihat Menu",
    heroContactButton: "Hubungi di WhatsApp",
    heroNote: "Paparan premium. Bantuan peribadi. Balasan pantas di WhatsApp.",
    highlightOne: "Pilihan Premium",
    highlightTwo: "Balasan WhatsApp Pantas",
    highlightThree: "Paparan Elegan",
    promoKicker: "Promosi",
    promoTitle: "Promosi Galaxy Terkini",
    promoCopy: "Lihat kempen terbaru kami dan hubungi kami di WhatsApp untuk maklumat lanjut.",
    menuKicker: "Menu Produk",
    menuTitle: "Barisan Istimewa Galaxy",
    menuCopy: "Lihat koleksi semasa di bawah dan hubungi kami untuk maklumat lanjut produk.",
    imagePlaceholder: "Letak Gambar Produk",
    featuredLabel: "Produk Istimewa",
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
    productV3: "Diterima baik oleh peniaga dan pengguna",
    contactKicker: "Hubungi",
    contactBadge: "Bantuan WhatsApp Secara Terus",
    contactTitle: "Berminat dengan pilihan Galaxy?",
    contactCopy:
      "Tekan butang WhatsApp di bawah dan pasukan kami akan membalas dengan maklumat lanjut secepat mungkin.",
    contactButton: "Chat di WhatsApp",
    contactSubcopy:
      "Nyatakan nama produk yang anda minati dan kami akan bantu anda secara terus.",
    whatsappMessage: "Hi, saya berminat dengan produk anda"
  },
  zh: {
    ageKicker: "年龄确认",
    ageTitle: "您是否已满 18 岁？",
    ageCopy: "进入本网站前，您必须确认自己已年满 18 岁。",
    ageConfirm: "是，我已年满 18 岁",
    ageDecline: "否，离开网站",
    heroEyebrow: "精选系列",
    heroTitle: "以更精致的方式浏览 Galaxy 产品系列。",
    heroCopy: "查看我们的主打系列，并通过 WhatsApp 直接联系我们了解更多信息。",
    browseButton: "查看目录",
    heroContactButton: "WhatsApp 联系我们",
    heroNote: "高级展示。专属协助。WhatsApp 快速回复。",
    highlightOne: "精选系列",
    highlightTwo: "WhatsApp 快速回复",
    highlightThree: "优雅展示",
    promoKicker: "促销活动",
    promoTitle: "Galaxy 最新促销",
    promoCopy: "查看我们的最新活动，并通过 WhatsApp 联系我们了解更多详情。",
    menuKicker: "产品目录",
    menuTitle: "Galaxy 精选产品",
    menuCopy: "浏览以下当前系列，并联系我们获取更多产品详情。",
    imagePlaceholder: "添加产品图片",
    featuredLabel: "主打产品",
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
    productV3: "深受店家与消费者欢迎",
    contactKicker: "联系",
    contactBadge: "WhatsApp 直接协助",
    contactTitle: "对 Galaxy 系列感兴趣？",
    contactCopy: "点击下方 WhatsApp 按钮，我们的团队会尽快回复您并提供更多信息。",
    contactButton: "WhatsApp 咨询",
    contactSubcopy: "告诉我们您感兴趣的产品名称，我们将直接为您提供协助。",
    whatsappMessage: "Hi, 我对你们的产品感兴趣"
  }
};

const languageButtons = document.querySelectorAll(".lang-btn");
const translatableNodes = document.querySelectorAll("[data-i18n]");
const whatsappLinks = document.querySelectorAll(".whatsapp-link");
const productPhotos = document.querySelectorAll(".product-photo");
const entryScreen = document.getElementById("entryScreen");
const mainSite = document.getElementById("mainSite");
const confirmAgeButton = document.getElementById("confirmAgeButton");
const declineAgeButton = document.getElementById("declineAgeButton");
const phoneNumber = "60187911077";
let selectedLanguage = "en";

function updateWhatsAppLinks(message) {
  const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  whatsappLinks.forEach((link) => {
    if (link.classList.contains("secondary-btn")) {
      link.setAttribute("href", "#contact");
      return;
    }

    link.setAttribute("href", url);
  });
}

function setLanguage(lang) {
  const dictionary = translations[lang] || translations.en;
  selectedLanguage = lang;

  translatableNodes.forEach((node) => {
    const key = node.dataset.i18n;
    if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
      node.textContent = dictionary[key];
    }
  });

  languageButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === lang);
  });

  document.documentElement.lang = lang;
  updateWhatsAppLinks(dictionary.whatsappMessage);
}

function unlockSite() {
  entryScreen.style.display = "none";
  mainSite.style.display = "block";
  setLanguage(selectedLanguage);
}

function redirectAway() {
  window.location.href = "https://www.google.com";
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.lang);
  });
});

confirmAgeButton.addEventListener("click", () => {
  unlockSite();
});

declineAgeButton.addEventListener("click", () => {
  redirectAway();
});

productPhotos.forEach((photo) => {
  const syncPhotoState = () => {
    if (photo.complete && photo.naturalWidth > 0) {
      photo.parentElement.classList.remove("is-empty");
      return;
    }

    photo.parentElement.classList.add("is-empty");
  };

  photo.addEventListener("load", () => {
    photo.parentElement.classList.remove("is-empty");
  });

  photo.addEventListener("error", () => {
    photo.parentElement.classList.add("is-empty");
  });

  syncPhotoState();
});

setLanguage(selectedLanguage);
