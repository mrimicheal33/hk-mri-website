import type { Dictionary } from "./en";

export const zh: Dictionary = {
  metadata: {
    siteTitle: "HK MRI Instrument | 香港領先醫療設備解決方案",
    siteDescription:
      "HK MRI Instrument Limited — 香港領先的尖端醫療設備及解決方案供應商，致力為醫療機構提供創新技術，提升患者護理及臨床成效。",
    aboutTitle: "關於我們",
    aboutDescription:
      "HK MRI Instrument Limited — 香港及澳門專業醫療診斷與影像設備代理商。",
    contactTitle: "聯絡我們",
    contactDescription: "聯絡 HK MRI Instrument Limited，索取醫療設備報價或預約 SonoEye 演示。",
    productsTitle: "產品總覽",
    productsDescription:
      "HK MRI Instrument Limited 代理之全部醫療設備產品，涵蓋 CHISON、MINDRAY、UNITED IMAGING 及 Perlove。",
    brandNotFound: "品牌未找到",
    productNotFound: "產品未找到",
  },
  nav: {
    home: "首頁",
    products: "產品",
    sonoeye: "SonoEye",
    sonoeyeClinical: "臨床精準方案",
    sonoeyeRoi: "商業回報方案",
    sonoeyeSpecs: "產品規格",
    about: "關於我們",
    contact: "聯絡",
    menu: "選單",
  },
  common: {
    getQuote: "索取報價",
    whatsapp: "WhatsApp",
    whatsappInquiry: "WhatsApp 查詢",
    whatsappInstant: "WhatsApp 即時查詢",
    exploreSonoeye: "探索 SonoEye",
    featured: "Featured",
    featuredProduct: "Featured Product",
    exclusiveAgent: "港澳獨家代理",
    viewDetails: "查看詳情",
    viewPage: "查看專頁",
    viewAll: "查看全部",
    submit: "提交查詢",
    backHome: "返回首頁",
    pageNotFound: "頁面未找到",
    pageNotFoundDesc: "您所尋找的頁面不存在或已被移動。",
    productsCount: "{count} 項產品",
    registrationNo: "註冊編號",
    productOverview: "產品介紹",
    relatedProducts: "同品牌其他產品",
    allProducts: "產品總覽",
    brandPage: "品牌專頁",
    home: "首頁",
    other: "其他",
    selectProduct: "請選擇產品",
  },
  categories: {
    ultrasound: "超聲波系統",
    radiography: "放射影像",
    mri: "磁共振 (MRI)",
    ct: "電腦斷層 (CT)",
    mammography: "乳腺攝影",
    "pet-ct": "PET-CT",
    diagnostic: "診斷檢測",
    veterinary: "獸醫影像",
  },
  company: {
    tagline: "您可信賴的香港醫療設備及解決方案專家",
    description:
      "HK MRI Instrument Ltd. 是香港領先的尖端醫療設備及解決方案供應商。作為醫療機構的可靠夥伴，我們致力提供創新技術，提升患者護理質素及改善臨床成效。",
    address: "香港",
    subsidiaryRole: "醫療設備代理",
    aboutExtra:
      "我們代理 CHISON、MINDRAY 及 UNITED IMAGING，提供超聲波、MRI、CT、肝纖維化檢測及數位放射影像解決方案。",
    footerAgent: "醫療設備及影像解決方案",
  },
  home: {
    hero: {
      label: "先進醫療科技",
      title: "HK MRI Instrument Ltd.",
      headlineLead: "您可信賴的",
      headlineAccent: "香港醫療設備專家",
      tagline: "您可信賴的香港醫療設備及解決方案專家",
      intro:
        "透過提供創新影像及診斷技術，推進患者護理及臨床成效。",
      backgroundImage: "/images/hero-clinical-facility.png",
      ctaProducts: "瀏覽產品",
      ctaAbout: "關於我們",
    },
    portfolio: {
      label: "Our Product Portfolio",
      title: "先進醫學影像及診斷解決方案",
      description:
        "與世界級製造商合作，提供床邊超聲波、肝臟護理、數位放射影像、獸醫影像及 MRI 和 CT 掃描等全面臨床方案。",
      items: [
        {
          key: "sonoeye",
          name: "SonoEye 手持超聲波",
          tagline: "口袋大小的專家級影像",
          brandName: "CHISON",
          brandLogo: "/images/brands/chison.webp",
          description:
            "口袋大小的專家級手持超聲波，重新定義床邊影像（POCUS）。配備可自訂界面、IP67 耐用性及 AI 自動化功能，支援醫美、肌骨物理治療及急症護理等臨床場景。",
          href: "/sonoeye/clinical",
          image: "/images/products/sonoeye-hero.png",
        },
        {
          key: "mini800",
          name: "Mini800 肝纖維化掃描儀",
          tagline: "便攜式非侵入性肝臟評估",
          brandName: "iLivTouch",
          brandLogo: "/images/brands/ilivtouch.svg",
          description:
            "iLivTouch Mini800 便攜式剪切波彈性成像系統，提供肝硬度（LSM）及超聲衰減參數（UAP）定量測量。具 FDA 及 CE 認證，配備闊頻纖維化探頭、電池供電，可選 B-mode 超聲波導引，適用於肝纖維化、肝硬化及脂肪肝評估。",
          href: "/brands/ilivtouch",
          image: "/images/products/mini800-card.png",
          imageFit: "contain",
          imageCaptionTitle: "Mini800",
          imageCaptionSubtitle: "剪切波定量超聲診斷系統",
        },
        {
          key: "mindray",
          name: "超聲波、肝纖維化掃描及數位放射影像",
          tagline: "全面的診斷影像解決方案",
          brandName: "MINDRAY",
          brandLogo: "/images/brands/mindray.png",
          description:
            "MINDRAY 全面方案涵蓋診斷超聲波系統、Hepatus 肝纖維化掃描儀（瞬時彈性成像技術作非侵入性肝臟評估），以及 DigiEye 數位放射影像（DR）平台 — 均符合國際標準，確保臨床準確性、安全及可靠性。",
          href: "/brands/mindray",
          image: "/images/products/hepatus-card.png",
          imageFit: "contain",
          imageCaptionTitle: "Hepatus 5",
          imageCaptionSubtitle: "非侵入性定量肝臟診斷",
        },
        {
          key: "vet1120",
          name: "獸醫移動式數位 C-arm 系統",
          tagline: "專為動物護理手術影像而設",
          brandName: "PERLOVE",
          brandLogo: "/images/brands/perlove.png",
          description:
            "Perlove VET1120 系列 — 緊湊型移動 C-arm，配備整合式工作站及靈活移動設計、Toshiba 影像增強器提供高解像度透視影像、人性化手控器、高功率 X 光管，以及自動、手動及脈衝透視模式，適用於獸醫診斷及外科手術。",
          href: "/brands/perlove",
          image: "/images/products/vet1120-card.png",
          imageFit: "contain",
          imageCaptionTitle: "VET1120 Series",
          imageCaptionSubtitle: "獸醫移動式數位 C-arm 系統",
        },
        {
          key: "mri-ct",
          name: "MRI 及 CT 掃描系統",
          tagline: "滿足各類臨床需求的先進成像",
          brandName: "UNITED IMAGING",
          brandLogo: "/images/brands/united-imaging.png",
          description:
            "結合先進成像技術與患者舒適度的 MRI 系統，以及適用於心臟、創傷及腫瘤等應用的高速高解像度 CT 掃描儀。",
          href: "/brands/united-imaging",
          image: "/images/products/umr-680-hero.png",
        },
      ],
    },
    whyChoose: {
      label: "Why Choose Us",
      title: "為何選擇 HK MRI Instrument Ltd.？",
      image: "/images/hero-clinical-facility.png",
      imageAlt: "臨床影像環境",
      items: [
        {
          title: "專業團隊",
          description:
            "團隊擁有豐富的醫學影像技術知識，深入了解醫療機構的需求，並緊密合作解決臨床挑戰。",
        },
        {
          title: "品質保證",
          description:
            "所有設備均經嚴格品質控制，符合國際標準，以患者安全及臨床準確性為首要考量。",
        },
        {
          title: "卓越服務",
          description:
            "除設備供應外，我們提供全面的售後及保養支援，確保設備保持最佳運作狀態。",
        },
      ],
    },
    partners: {
      label: "Our Partners",
      title: "世界級製造商夥伴",
      description:
        "我們代理全球領先醫療設備製造商，將成熟可靠的技術帶給香港醫療機構。",
      items: [
        {
          slug: "chison",
          name: "CHISON",
          logo: "/images/brands/chison.webp",
          image: "/images/products/sonoeye-hero.png",
          description: "全球超聲波創新者 — SonoEye 手持超聲波及先進 POCUS 方案。",
        },
        {
          slug: "united-imaging",
          name: "UNITED IMAGING",
          logo: "/images/brands/united-imaging.png",
          image: "/images/products/umr-680-hero.png",
          description: "高端 MRI 及 CT 系統，結合尖端成像技術與以患者為本的設計。",
        },
        {
          slug: "mindray",
          name: "MINDRAY",
          logo: "/images/brands/mindray.png",
          image: "/images/products/hepatus-5.jpg",
          description: "數位放射影像、肝纖維化檢測及全面影像解決方案的領先供應商。",
        },
      ],
    },
    connect: {
      label: "Let's Connect",
      title: "與 HK MRI Instrument Ltd. 合作",
      description: "如欲進一步了解我們的產品，歡迎聯絡我們安排會面。",
      closing:
        "感謝您考慮 HK MRI Instrument Ltd. 作為您的醫療設備夥伴。我們期待與您合作，共同推動香港醫療發展。",
      backgroundImage: "/images/products/uct-780.jpg",
    },
  },
  products: {
    title: "Products",
    heading: "產品總覽",
    description:
      "每項產品均有獨立專頁，了解詳細規格與臨床應用。可按品牌篩選瀏覽。",
    featuredTitle: "CHISON SonoEye 手持超聲波",
    featuredDesc: "口袋大小的專業超聲波，連接 iOS 即可即時診斷",
    brandsLabel: "Brands",
    filterAll: "全部",
    interestSonoeye: "CHISON SonoEye",
    interestMindray: "MINDRAY 產品",
    interestUi: "UNITED IMAGING 產品",
    interestPerlove: "Perlove 獸醫 C-arm",
    interestIlivtouch: "iLivTouch Mini800",
  },
  productCta: {
    defaultTitle: "索取產品報價",
    defaultDesc: "聯絡我們的專業團隊，獲取詳細規格、報價及演示安排。",
    interestTitle: "對 {name} 有興趣？",
    interestDesc: "了解 {brand} {name} 的詳細規格、臨床應用及報價方案。",
  },
  brand: {
    productsInterest: "對 {brand} 產品有興趣？",
    productsInterestDesc: "聯絡我們的專業團隊，獲取詳細規格與報價。",
    highlights: "品牌亮點",
  },
  about: {
    label: "About Us",
    heading: "關於 HK MRI Instrument",
    brandsTitle: "代理品牌",
    companyLabel: "Company",
    valuesLabel: "Values",
    valuesTitle: "我們的承諾",
    partnersLabel: "Partners",
    partnersTitle: "信賴我們的醫療機構",
    values: [
      {
        title: "專業代理",
        description: "代理全球領先醫療品牌，確保產品品質與技術支援。",
      },
      {
        title: "臨床導向",
        description: "以臨床需求為核心，提供教育培訓與售後支援。",
      },
      {
        title: "港澳服務",
        description: "深耕香港及澳門市場，了解本地醫療體系需求。",
      },
      {
        title: "B2B 夥伴",
        description: "與 Quality HealthCare、港安、CUHK 等機構長期合作。",
      },
    ],
  },
  contact: {
    label: "Contact",
    heading: "聯絡我們",
    description:
      "無論是產品報價、技術諮詢或 SonoEye 工作坊報名，我們樂意為您服務。",
    getInTouch: "與我們對話",
    formTitle: "索取報價 / 預約演示",
    formDesc: "我們將在 1–2 個工作天內回覆您的查詢。",
    nameLabel: "姓名 / 機構名稱",
    namePlaceholder: "請輸入您的姓名或機構名稱",
    emailLabel: "電郵",
    phoneLabel: "電話",
    productLabel: "感興趣的產品",
    messageLabel: "訊息",
    messagePlaceholder: "請描述您的需求...",
    email: "電郵",
    phone: "電話",
    address: "地址",
    whatsappLabel: "WhatsApp",
    whatsappValue: "即時查詢",
  },
  footer: {
    brands: "產品品牌",
    navigation: "導覽",
    contact: "聯絡",
    productOverview: "產品總覽",
  },
  sonoeye: {
    subtitle: "手持超聲波診斷系統",
    features: {
      label: "Features",
      title: "為現代臨床而生的手持超聲波",
      description:
        "結合便攜性、專業成像與 AI 智能，讓每位醫療人員都能輕鬆掌握超聲波診斷。",
      items: [
        {
          title: "口袋大小，隨身攜帶",
          description:
            "僅手機大小的超聲波探頭，可放入白袍口袋，隨時隨地進行床邊超聲波檢查。",
        },
        {
          title: "一指操作 Go Thumb-play",
          description:
            "開機即用，單手操作，無需複雜設定。連接 iOS 設備後立即開始掃描。",
        },
        {
          title: "IP67 / MIL-STD-810G",
          description:
            "通過 IP67 防水防塵及美軍 MIL-STD-810G 跌落測試，適合嚴苛臨床環境。",
        },
        {
          title: "AI 智能輔助",
          description:
            "內建 SonoMSK 肌骨超聲波、SonoDiaph 肺部分析等 AI 功能，降低操作門檻。",
        },
      ],
    },
    applications: {
      label: "Applications",
      title: "多科室臨床場景",
      description: "針對不同專科需求，SonoEye 提供量身定制的臨床解決方案。",
      items: [
        { title: "ICU / 急症", items: ["肺部積水檢測", "心臟功能評估", "血管通路建立"] },
        { title: "普通科 / GP", items: ["腹部超聲波篩查", "頸動脈快篩", "甲狀腺檢查"] },
        { title: "醫美 / 注射", items: ["精準注射導航", "填充物定位", "血管避開"] },
        { title: "脊醫 / MSK", items: ["關節超聲波", "肌腱病變評估", "超聲波導引注射"] },
      ],
    },
    specs: {
      label: "Specifications",
      title: "專業認證，值得信賴",
      items: [
        { label: "連接方式", value: "iOS (Lightning / USB-C)" },
        { label: "探頭類型", value: "線陣 / 凸陣可選" },
        { label: "防水等級", value: "IP67" },
        { label: "耐用認證", value: "MIL-STD-810G" },
        { label: "AI 功能", value: "SonoMSK, SonoDiaph" },
        { label: "代理區域", value: "香港、澳門" },
      ],
    },
    training: {
      label: "Training",
      title: "課程導向銷售",
      description:
        "我們提供實機工作坊培訓，讓醫生親身體驗 SonoEye 的易用性與臨床價值。課程費用可全額折抵購機款項。",
      steps: [
        "Facebook / Instagram / LinkedIn 精準廣告投放",
        "著陸頁 (Landing Page) 收集報名名單",
        "實機工作坊 — 80% Hands-on 操作",
        "現場購機方案 — 課程費全額折抵",
      ],
    },
    cta: {
      title: "體驗 SonoEye 的臨床力量",
      description:
        "預約實機演示或報名工作坊，親身感受口袋超聲波如何改變您的診斷流程。",
    },
  },
};
