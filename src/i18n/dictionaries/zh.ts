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
      "HK MRI Instrument Limited 代理之全部醫療設備產品，涵蓋 CHISON、HISKY、UNITED IMAGING、SINO MDT、VINNO、PERLOVE 及 VETOO。",
    brandNotFound: "品牌未找到",
    productNotFound: "產品未找到",
    specialtyNotFound: "專科未找到",
  },
  nav: {
    home: "首頁",
    products: "產品",
    specialties: "專科",
    specialtiesSearch: "搜尋專科…",
    specialtiesEmpty: "沒有符合的專科",
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
    keyFeatures: "功能與優勢",
    relatedProducts: "同品牌其他產品",
    allProducts: "產品總覽",
    brandPage: "品牌專頁",
    home: "首頁",
    other: "其他",
    selectProduct: "請選擇產品",
    downloadBrochure: "下載產品手冊",
    productVideos: "產品影片",
  },
  categories: {
    ultrasound: "超聲波系統",
    radiography: "放射影像",
    "liver-fibrosis": "肝纖維化掃描儀",
    mri: "MRI（磁共振成像）",
    ct: "CT（電腦斷層掃描）",
    mammography: "乳腺攝影",
    "pet-ct": "PET-CT（正電子發射斷層–電腦斷層）",
    diagnostic: "便攜式剪切波彈性成像",
    veterinary: "獸醫影像",
    "veterinary-carm": "獸醫移動式數位 C-arm 系統",
  },
  company: {
    tagline: "您可信賴的醫療設備及影像解決方案專家",
    description:
      "HK MRI Instrument Ltd. 是尖端醫療設備及先進診斷解決方案的優質供應商。作為全球醫療機構的可靠夥伴，我們致力提供創新技術，提升患者護理質素並優化臨床成效。",
    address: "香港九龍開源道50號利寶時中心7樓03室",
    subsidiaryRole: "醫療設備代理",
    aboutExtra:
      "我們代理 CHISON、HISKY、UNITED IMAGING、SINO MDT、VINNO、PERLOVE 及 VETOO，提供超聲波、MRI、CT、肝臟評估、乳腺攝影、數位放射影像及獸醫影像解決方案。",
    footerAgent: "醫療設備及影像解決方案",
  },
  home: {
    hero: {
      label: "先進醫療科技",
      title: "HK MRI Instrument Ltd.",
      headlineLead: "您可信賴的",
      headlineAccent: "醫療設備專家",
      tagline: "您可信賴的醫療設備及影像解決方案專家",
      intro:
        "透過提供創新影像及診斷技術，推進患者護理及臨床成效。",
      backgroundImage: "/images/hero-clinical-facility.png",
      ctaProducts: "瀏覽產品",
      ctaAbout: "關於我們",
    },
    specialties: {
      label: "臨床配對",
      title: "按專科尋找設備",
      description:
        "選擇您的臨床專科，即時查看切合您執業需求的影像及診斷解決方案。",
      needsLabel: "臨床需求",
      recommendedLabel: "推薦產品",
      items: [
        {
          id: "physiotherapist",
          specialty: "物理治療師",
          needs:
            "快速評估軟組織、肌腱、肌肉撕裂及關節問題；即時導引乾針治療。",
          recommendedProducts: [
            {
              name: "CHISON SonoEye 手持超聲波",
              brand: "CHISON",
              link: "/products/sonoeye",
            },
            {
              name: "VINNO A3 緊湊超聲波",
              brand: "VINNO",
              link: "/products/vinno-a3",
            },
            {
              name: "VINNO 10 旗艦便攜超聲波",
              brand: "VINNO",
              link: "/products/vinno10",
            },
          ],
          pitch:
            "超便攜肌骨床邊超聲波（POCUS），以影像向患者清晰展示治療進度。",
          cta: "查看物理治療設備",        },
        {
          id: "chiropractor",
          specialty: "脊醫",
          needs:
            "在調整計劃中可視化關節炎症、脊柱軟組織及肌肉勞損。",
          recommendedProducts: [
            {
              name: "CHISON SonoEye 手持超聲波",
              brand: "CHISON",
              link: "/products/sonoeye",
            },
            {
              name: "VINNO A3 緊湊超聲波",
              brand: "VINNO",
              link: "/products/vinno-a3",
            },
            {
              name: "VINNO 10 旗艦便攜超聲波",
              brand: "VINNO",
              link: "/products/vinno10",
            },
          ],
          pitch:
            "即時高解像度影像，在診室內驗證脊柱及關節半脫位治療效果。",
          cta: "查看脊醫設備",        },
        {
          id: "aesthetician",
          specialty: "醫美及美容醫生",
          needs:
            "填充劑注射前面部血管定位、深度測量、避免血管栓塞，以及透明質酸酶溶解導引。",
          recommendedProducts: [
            {
              name: "CHISON SonoEye 手持超聲波（高頻線陣）",
              brand: "CHISON",
              link: "/products/sonoeye",
            },
            {
              name: "VINNO A3 緊湊超聲波",
              brand: "VINNO",
              link: "/products/vinno-a3",
            },
            {
              name: "VINNO 10 旗艦便攜超聲波",
              brand: "VINNO",
              link: "/products/vinno10",
            },
          ],
          pitch:
            "高頻微血管可視化，確保填充劑精準安全放置及併發症應急處理。",
          cta: "查看醫美超聲波",        },
        {
          id: "obgyn",
          specialty: "婦產科（產科及婦科）",
          needs:
            "床邊盆腔檢查、胎心偵測、快速孕齡評估及緊急產科評估。",
          recommendedProducts: [
            {
              name: "CHISON SonoEye（凸陣 / POCUS 探頭）",
              brand: "CHISON",
              link: "/products/sonoeye",
            },
            {
              name: "SINO MDT Navigator 3000A 3D 乳腺攝影",
              brand: "SINO MDT",
              link: "/products/navigator-3000a",
            },
            {
              name: "VINNO A3 緊湊超聲波",
              brand: "VINNO",
              link: "/products/vinno-a3",
            },
            {
              name: "VINNO 10 旗艦便攜超聲波",
              brand: "VINNO",
              link: "/products/vinno10",
            },
          ],
          pitch:
            "手持胎兒及盆腔篩查，配合高精度 3D 斷層合成乳腺健康診斷系統。",
          cta: "查看女性健康方案",        },
        {
          id: "orthopedic",
          specialty: "骨科醫生",
          needs:
            "術中透視導引、高解像度關節／韌帶動態影像、術後植入物核實，以及快速 CT／MRI 掃描。",
          recommendedProducts: [
            {
              name: "CHISON SonoEye 肌骨手持超聲波",
              brand: "CHISON",
              link: "/products/sonoeye",
            },
            {
              name: "UNITED IMAGING MRI 及 CT 掃描系統",
              brand: "UNITED IMAGING",
              link: "/brands/united-imaging",
            },
            {
              name: "VINNO A3 緊湊超聲波",
              brand: "VINNO",
              link: "/products/vinno-a3",
            },
            {
              name: "VINNO 10 旗艦便攜超聲波",
              brand: "VINNO",
              link: "/products/vinno10",
            },
          ],
          pitch:
            "由床邊 POCUS 檢查至全身 MRI 診斷，全面涵蓋骨骼、關節及軟組織影像。",
          cta: "查看骨科系統",
        },
        {
          id: "gp",
          specialty: "普通科醫生（GP）",
          needs:
            "快速床邊分流、基本腹部檢查，以及非侵入性脂肪肝快速篩查。",
          recommendedProducts: [
            {
              name: "CHISON SonoEye 手持超聲波",
              brand: "CHISON",
              link: "/products/sonoeye",
            },
            {
              name: "iLivTouch Mini800 剪切波彈性成像",
              brand: "HISKY",
              link: "/products/mini800",
            },
            {
              name: "VINNO A3 緊湊超聲波",
              brand: "VINNO",
              link: "/products/vinno-a3",
            },
            {
              name: "VINNO 10 旗艦便攜超聲波",
              brand: "VINNO",
              link: "/products/vinno10",
            },
          ],
          pitch:
            "即時進行床邊診斷超聲波及肝臟健康評分，無需另行轉介。",
          cta: "查看普通科方案",        },
        {
          id: "gastroenterologist",
          specialty: "腸胃肝病科醫生",
          needs:
            "床邊腹部超聲波、膽道及腹水評估，以及定量肝硬度（LSM）與超聲衰減參數（UAP），用於脂肪肝及肝纖維化監測。",
          recommendedProducts: [
            {
              name: "CHISON SonoEye 手持超聲波",
              brand: "CHISON",
              link: "/products/sonoeye",
            },
            {
              name: "iLivTouch Mini800 便攜式剪切波彈性成像",
              brand: "HISKY",
              link: "/products/mini800",
            },
            {
              name: "VINNO A3 緊湊超聲波",
              brand: "VINNO",
              link: "/products/vinno-a3",
            },
            {
              name: "VINNO 10 旗艦便攜超聲波",
              brand: "VINNO",
              link: "/products/vinno10",
            },
          ],
          pitch:
            "結合便攜腹部 POCUS 與 FDA 認證剪切波彈性成像，快速、可重複、非侵入性進行肝臟及消化系統評估。",
          cta: "查看肝病科設備",
        },
        {
          id: "cardiothoracic",
          specialty: "心胸外科醫生",
          needs:
            "心臟及胸腔床邊超聲波、胸腔積液檢查、術前／術後胸部 CT 及 MRI，以及進階心血管解剖影像。",
          recommendedProducts: [
            {
              name: "CHISON SonoEye 手持超聲波",
              brand: "CHISON",
              link: "/products/sonoeye",
            },
            {
              name: "UNITED IMAGING MRI 及 CT 掃描系統",
              brand: "UNITED IMAGING",
              link: "/brands/united-imaging",
            },
            {
              name: "VINNO A3 緊湊超聲波",
              brand: "VINNO",
              link: "/products/vinno-a3",
            },
            {
              name: "VINNO 10 旗艦便攜超聲波",
              brand: "VINNO",
              link: "/products/vinno10",
            },
          ],
          pitch:
            "床邊心臟及胸腔 POCUS，配合高解像度 CT／MRI 系統，支援手術規劃及術後追蹤。",
          cta: "查看心胸外科設備",
        },
        {
          id: "radiologist",
          specialty: "放射科醫生",
          needs:
            "高通量解剖掃描、低劑量 3D 乳腺斷層合成，以及全身 MRI／CT。",
          recommendedProducts: [
            {
              name: "SINO MDT Navigator 3000A 3D 斷層合成",
              brand: "SINO MDT",
              link: "/products/navigator-3000a",
            },
            {
              name: "UNITED IMAGING MRI 及 CT 掃描系統",
              brand: "UNITED IMAGING",
              link: "/brands/united-imaging",
            },
            {
              name: "VINNO A3 緊湊超聲波",
              brand: "VINNO",
              link: "/products/vinno-a3",
            },
            {
              name: "VINNO 10 旗艦便攜超聲波",
              brand: "VINNO",
              link: "/products/vinno10",
            },
          ],
          pitch:
            "高解像度診斷系統，配備 AI 輔助分析及低劑量成像協議。",
          cta: "查看放射科系統",
        },
        {
          id: "veterinarian",
          specialty: "獸醫外科醫生",
          needs:
            "高幀率寵物透視、動態骨科影像及介入程序。",
          recommendedProducts: [
            {
              name: "PERLOVE VET1120 移動式數位 C-arm",
              brand: "PERLOVE",
              link: "/products/vet1120",
            },
            {
              name: "VETOO VF1 動態 DR 系統",
              brand: "VETOO",
              link: "/products/vf1",
            },
            {
              name: "VINNO D6 VET 緊湊型獸醫超聲波",
              brand: "VINNO",
              link: "/products/vinno-d6-vet",
            },
          ],
          pitch:
            "專為獸醫診所設計的動物超聲波、30fps 動態影像及移動式 C-arm 透視。",
          cta: "查看獸醫設備",        },
      ],
    },
    portfolio: {
      label: "Our Product Portfolio",
      title: "先進醫學影像及診斷解決方案",
      description:
        "與世界級製造商合作，提供床邊超聲波、肝臟護理、數位放射影像、乳腺攝影、獸醫影像及 MRI 和 CT 掃描等全面臨床方案。",
      items: [
        {
          key: "sonoeye",
          name: "CHISON SonoEye 手持超聲波",
          tagline: "口袋大小的專家級影像",
          brandName: "CHISON",
          brandLogo: "/images/brands/chison.webp",
          description:
            "口袋大小的專家級手持超聲波，重新定義床邊影像（POCUS）。配備可自訂界面、IP67 耐用性及 AI 自動化功能，支援醫美、肌骨物理治療及急症護理等臨床場景。",
          href: "/products/sonoeye",
          image: "/images/products/sonoeye-hero.png",
        },
        {
          key: "mini800",
          name: "iLivTouch Mini800 便攜式剪切波彈性成像",
          tagline: "便攜式非侵入性肝臟評估",
          brandName: "HISKY",
          brandLogo: "/images/brands/hisky.png",
          description:
            "iLivTouch Mini800 便攜式剪切波彈性成像系統，提供肝硬度（LSM）及超聲衰減參數（UAP）定量測量。具 FDA 及 CE 認證，配備闊頻纖維化探頭、電池供電，可選 B-mode 超聲波導引，適用於肝纖維化、肝硬化及脂肪肝評估。",
          href: "/products/mini800",
          image: "/images/products/mini800-card.png",
          imageFit: "contain",
          imageCaptionTitle: "iLivTouch Mini800",
          imageCaptionSubtitle: "便攜式剪切波彈性成像",
        },
        {
          key: "vet1120",
          name: "PERLOVE VET1120",
          tagline: "專為動物護理手術影像而設",
          brandName: "PERLOVE",
          brandLogo: "/images/brands/perlove.png",
          description:
            "PERLOVE VET1120 系列 — 緊湊型移動 C-arm，配備整合式工作站及靈活移動設計、Toshiba 影像增強器提供高解像度透視影像、人性化手控器、高功率 X 光管，以及自動、手動及脈衝透視模式，適用於獸醫診斷及外科手術。",
          href: "/products/vet1120",
          image: "/images/products/vet1120-card.png",
          imageFit: "contain",
          imageCaptionTitle: "PERLOVE VET1120",
          imageCaptionSubtitle: "獸醫移動式數位 C-arm 系統",
        },
        {
          key: "navigator-3000a",
          name: "Navigator 3000A 3D 斷層合成乳腺攝影",
          tagline: "第三代數位乳腺攝影",
          brandName: "SINO MDT",
          brandLogo: "/images/brands/sinomdt.svg",
          description:
            "SINO MDT Navigator 3000A（Navigator Star 系列）— 高端數位乳腺攝影系統，配備流線型設計、2D/3D 斷層合成及 2D+3D 組合模式、TIDE 低劑量成像及 AI 智能分析。通過 ISO 9001 及 ISO 13485 認證，適合醫院及移動體檢車部署。",
          href: "/products/navigator-3000a",
          image: "/images/products/navigator-3000a-card.jpg",
          imageFit: "contain",
          imageCaptionTitle: "Navigator 3000A",
          imageCaptionSubtitle: "3D 斷層合成數位乳腺攝影",
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
          imageCaptionTitle: "MRI 及 CT 掃描系統",
          imageCaptionSubtitle: "為全球提供先進醫學影像",
        },
        {
          key: "vf1",
          name: "VETOO VF1 動態 DR",
          tagline: "新一代獸醫動態數位放射影像",
          brandName: "VETOO",
          brandLogo: "/images/brands/vetoo.svg",
          description:
            "VETOO VF1 專為智能寵物影像設計的動態 DR 系統，支援 30 fps 動態成像、最長 15 分鐘透視及可選 DSA 模組，配備 17×17 吋平板探測器及 32kW 高壓發生器，適用於食道、肺部、關節定位及介入等獸醫臨床應用。",
          href: "/products/vf1",
          image: "/images/products/vf1-card.png",
          imageFit: "contain",
          imageCaptionTitle: "VETOO VF1",
          imageCaptionSubtitle: "獸醫動態 DR 系統",
        },
        {
          key: "vinno",
          name: "VINNO 便攜超聲波系統",
          tagline: "由緊湊至旗艦的便攜彩色多普勒",
          brandName: "VINNO",
          brandLogo: "/images/brands/vinno.png",
          description:
            "VINNO 便攜、推車式及獸醫彩色多普勒超聲波 — 涵蓋 A3、A5、VINNO 10、R300、R700 及 D6 VET，建基於 RF 及 VLucid 平台，適合診所、醫院及動物護理。",
          href: "/brands/vinno",
          image: "/images/products/vinno-a3-card.jpg",
          imageFit: "contain",
          imageCaptionTitle: "VINNO 超聲波系列",
          imageCaptionSubtitle: "便攜 · 推車式 · 獸醫",
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
        "我們代理全球領先醫療設備製造商，將成熟可靠的技術帶給區內醫療機構。",
      items: [
        {
          slug: "chison",
          name: "CHISON",
          logo: "/images/brands/chison.webp",
          image: "/images/products/sonoeye-hero.png",
          description: "全球超聲波創新者 — SonoEye 手持超聲波及先進 POCUS 方案。",
        },
        {
          slug: "ilivtouch",
          name: "HISKY",
          logo: "/images/brands/hisky.png",
          image: "/images/products/mini800-card.png",
          description:
            "非侵入性肝臟護理方案，提供剪切波定量彈性成像，用於肝纖維化、肝硬化及脂肪肝評估。",
        },
        {
          slug: "perlove",
          name: "PERLOVE",
          logo: "/images/brands/perlove.png",
          image: "/images/products/vet1120-card.png",
          description: "獸醫影像專家 — 提供緊湊型移動式數位 C-arm 透視及診斷系統。",
        },
        {
          slug: "sinomdt",
          name: "SINO MDT",
          logo: "/images/brands/sinomdt.svg",
          image: "/images/products/navigator-3000a-card.jpg",
          description:
            "國家級高新技術乳腺影像創新者 — 第三代 Navigator 系列數位乳腺攝影，配備 2D/3D 斷層合成及 AI 智能分析。",
        },
        {
          slug: "united-imaging",
          name: "UNITED IMAGING",
          logo: "/images/brands/united-imaging.png",
          image: "/images/products/umr-680-hero.png",
          description: "高端 MRI 及 CT 系統，結合尖端成像技術與以患者為本的設計。",
        },
        {
          slug: "vetoo",
          name: "VETOO",
          logo: "/images/brands/vetoo.svg?v=2",
          image: "/images/products/vf1-card.png",
          description: "獸醫動態 DR 創新者 — 智能寵物影像、高幀率透視及平板探測器方案。",
        },
        {
          slug: "vinno",
          name: "VINNO",
          logo: "/images/brands/vinno.png",
          image: "/images/products/vinno-a3-card.jpg",
          description:
            "創新超聲波技術 — 便攜、推車式及獸醫彩色多普勒系統，涵蓋 A3、A5、VINNO 10、R300、R700 及 D6 VET。",
        },
      ],
    },
    connect: {
      label: "Let's Connect",
      title: "與 HK MRI Instrument Ltd. 合作",
      description: "有興趣了解我們的產品？歡迎在您方便的時間與我們聯繫。",
      closing:
        "感謝您選擇 HK MRI Instrument Ltd. 作為您可信賴的醫療設備夥伴。我們期待與您攜手合作，推進醫療發展及提升患者成效。",
      backgroundImage: "/images/products/uct-780.jpg",
    },
  },
  products: {
    title: "Products",
    heading: "產品總覽",
    description:
      "每項產品均有獨立專頁，了解詳細規格與臨床應用。可按品牌篩選瀏覽。",
    featuredTitle: "CHISON SonoEye 手持超聲波",
    featuredDesc: "口袋大小的專業超聲波 - 可靈活連接 iOS 或 Android 智能手機、平板或 Pad",
    ilivtouchFeaturedTitle: "HISKY iLivTouch Mini800 便攜式剪切波彈性成像",
    ilivtouchFeaturedDesc:
      "緊湊型非侵入性肝臟評估 — LSM 及 UAP 定量測量，具 FDA 及 CE 認證",
    ilivtouchCaptionTitle: "iLivTouch Mini800",
    ilivtouchCaptionSubtitle: "便攜式剪切波彈性成像",
    vinnoFeaturedTitle: "VINNO 便攜彩色多普勒超聲波",
    vinnoFeaturedDesc:
      "VINNO A3、A5、VINNO 10、R300、R700 及 D6 VET — 便攜、推車式及獸醫超聲波，建基於 RF 及 VLucid 平台，適合診所、醫院及動物護理",
    vinnoCaptionTitle: "VINNO 超聲波系列",
    vinnoCaptionSubtitle: "便攜 · 推車式 · 獸醫",
    brandsLabel: "Brands",
    filterAll: "全部",
    interestSonoeye: "CHISON SonoEye 手持超聲波",
    interestUi: "UNITED IMAGING 產品：MRI、CT 掃描",
    interestPerlove: "PERLOVE Vet 移動式數碼 C-arm 系統",
    interestIlivtouch: "HISKY iLivTouch Mini800 便攜式剪切波彈性成像",
    interestVetoo: "VETOO VF1 動態 DR",
    interestVinno: "VINNO 便攜超聲波系統",
  },
  productCta: {
    defaultTitle: "索取產品報價",
    defaultDesc: "聯絡我們的專業團隊，獲取詳細規格、報價及演示安排。",
    interestTitle: "對 {name} 有興趣？",
    interestDesc: "探索 {brand} {name} — 了解規格、臨床應用及報價方案。",
  },
  brand: {
    productsInterest: "對 {brand} 產品有興趣？",
    productsInterestGeneric: "對以下產品有興趣？",
    productsInterestDesc: "聯絡我們的專業團隊，獲取詳細規格與報價。",
    highlights: "品牌亮點",
  },
  specialtyPage: {
    label: "專科解決方案",
    productsLabel: "推薦設備",
    productsTitle: "適合 {specialty} 的設備",
    productsDescription:
      "按臨床流程選擇合適產品。點擊任一產品即可查看完整規格、應用場景及演示安排。",
    noProducts: "此專科暫未列出對應產品。",
    backHome: "返回首頁",
    ctaTitle: "需要協助為 {specialty} 選型？",
    ctaDesc:
      "告訴我們您的診所配置，我們將推薦合適系統、探頭選項及演示方案。",
  },
  about: {
    label: "About Us",
    heading: "關於 HK MRI Instrument Ltd.",
    companyTagline: "以先進影像方案提升患者護理",
    companyIntro:
      "HK MRI Instrument Ltd. 是尖端醫療設備及先進診斷解決方案的優質供應商。作為全球醫療機構的可靠夥伴，我們致力提供創新技術，提升患者護理質素並優化臨床成效。",
    brandsModalitiesTitle: "我們的優質品牌與影像模態",
    brandsModalitiesIntro:
      "我們代理 CHISON、HISKY、PERLOVE、SINO MDT、UNITED IMAGING、VINNO 及 VETOO，提供由床邊超聲波、肝纖維化評估、數位放射影像、乳腺攝影、MRI、CT、PET-CT 至獸醫影像的全線醫學影像及診斷解決方案，涵蓋：",
    modalities: [
      "CT（電腦斷層掃描）— UNITED IMAGING uCT 780 128 層及 uCT 960+ 640 層 CT",
      "便攜式剪切波彈性成像 — HISKY iLivTouch Mini800 便攜式肝纖維化及脂肪定量分析",
      "數位放射影像 (DR) — UNITED IMAGING uDR 596i 落地式 DR",
      "乳腺攝影 — SINO MDT Navigator 3000A 3D 斷層合成數位乳腺攝影、UNITED IMAGING uMammo 890i 低劑量 3D 數位乳腺攝影",
      "MRI（磁共振成像）— UNITED IMAGING uMR 670、680 及 OMEGA 寬孔徑 1.5T/3T 系統",
      "PET-CT（正電子發射斷層–電腦斷層）— UNITED IMAGING uMI Vista 數位 PET-CT",
      "超聲波系統 — CHISON SonoEye 手持超聲波；VINNO A3、A5、VINNO 10、R300、R700 便攜／推車式超聲波及 D6 VET 獸醫超聲波",
      "獸醫移動式數位 C-arm 系統 — PERLOVE VET1120 移動式數位 C-arm",
      "獸醫影像 — VETOO VF1 Dynamic DR",
    ],
    brandsTitle: "代理品牌",
    companyLabel: "Company",
    valuesLabel: "Values",
    valuesTitle: "我們的承諾",
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
        title: "在地專業服務",
        description:
          "提供貼身在地支援，深入了解區內醫療體系與各類機構的實際需求。",
      },
      {
        title: "B2B 夥伴",
        description:
          "與醫院、診所及醫療機構建立長期合作關係，提供可信賴的供應與專屬支援。",
      },
    ],
  },
  contact: {
    label: "Contact",
    heading: "聯絡我們",
    description:
      "無論您需要產品報價、技術支援或實機演示，我們的團隊隨時為您服務。",
    getInTouch: "與我們對話",
    formTitle: "索取報價 / 預約演示",
    formDesc: "我們將在 1–2 個工作天內回覆您的查詢。",
    nameLabel: "姓名 / 機構名稱",
    namePlaceholder: "請輸入您的姓名或機構名稱",
    emailLabel: "電郵",
    phoneLabel: "電話",
    productLabel: "感興趣的產品",
    quoteColBrandProduct: "產品",
    quoteColModel: "型號",
    quoteColSelect: "選擇",
    quoteMultiHint: "可選擇多於一項產品索取報價。",
    messageLabel: "訊息",
    messagePlaceholder: "請描述您的需求...",
    email: "電郵",
    phone: "電話",
    address: "地址",
    whatsappLabel: "WhatsApp",
    whatsappValue: "即時查詢",
    submitSuccess: "謝謝 — 您的查詢已送出，我們將於 1–2 個工作天內回覆。",
    submitError: "暫時未能送出查詢，請直接電郵聯絡我們或稍後再試。",
    submitting: "送出中…",
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
            "開機即用，單手操作，無需複雜設定。連接 iOS 或 Android 智能手機、平板或 Pad 後立即開始掃描。",
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
        { label: "連接方式", value: "iOS 及 Android（智能手機 / 平板 / Pad）" },
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
        "預約實機演示，了解口袋超聲波如何改變您的診斷流程及定價方案。",
    },
    probes: {
      label: "探頭選擇",
      title: "SonoEye P 系列 — 如何選擇探頭？",
      description:
        "CHISON SonoEye 提供多款探頭配置，滿足不同臨床需求。請按專科及應用場景選擇合適的 P 系列探頭。",
      viewMore: "了解更多",
      items: [
        {
          slug: "p2",
          model: "P2",
          headline: "線陣探頭",
          spec: "7.5 MHz，40 mm 線陣探頭",
          use: "血管、MSK（肌骨系統）、神經、肺部、小器官及 EM（急症醫學）。",
        },
        {
          slug: "p3",
          model: "P3",
          headline: "相控陣探頭",
          spec: "2.5 MHz 相控陣探頭",
          use: "心臟、腹部、肺部及 EM（急症醫學）。",
        },
        {
          slug: "p5",
          model: "P5",
          headline: "凸陣探頭",
          spec: "3.5 MHz 凸陣探頭",
          use: "腹部、肺部、OB（產科）/ GYN（婦科）、泌尿及 EM（急症醫學）。",
        },
      ],
    },
    probeDetail: {
      talkToExpert: "聯絡專家",
      specificationsLabel: "規格",
      overview:
        "CHISON SonoEye 可在任何地點提供高品質的 patient care。可連接 iOS 或 Android 智能手機、平板或 Pad，提升便攜性，讓醫護人員可在床邊及基層醫療場景中隨時協作掃查。",
      backToSonoEye: "返回 SonoEye 探頭",
      relatedProbes: "相關探頭",
      features: [
        {
          title: "Go Light",
          description: "重量約為手機的一半，高度整合設計，體積更小巧。",
        },
        {
          title: "多裝置連接",
          description: "可靈活連接 iOS 或 Android 智能手機、平板或 Pad，隨時開始掃查。",
        },
        {
          title: "Go Waterproof",
          description: "手持超聲可自由消毒清潔，符合 IPX67 防水標準。",
        },
        {
          title: "Go Anywhere",
          description: "整合先進手持超聲技術，提供快速、靈活的多場景解決方案。",
        },
        {
          title: "Go Thumb-Play",
          description: "一鍵開機掃查，單手拇指即可完成操作，流程如智能手機般簡便。",
        },
      ],
      items: {
        p2: {
          specLine: "7.5 MHz，40 mm，線陣探頭",
          applications:
            "血管、MSK（肌骨系統）、神經、肺部、小器官、SAT（淺表解剖）、EM（急症醫學）等。",
          modes: "B 模式 | M 模式 | 彩色模式 | PW 模式 | CPA 模式 | DPD 模式 | 2B 模式",
        },
        p3: {
          specLine: "2.5 MHz，相控陣探頭",
          applications: "心臟、腹部、肺部、EM（急症醫學）等。",
          modes: "B 模式 | M 模式 | 彩色模式 | PW 模式 | CPA 模式 | DPD 模式 | 2B 模式",
        },
        p5: {
          specLine: "3.5 MHz，凸陣探頭",
          applications: "腹部、OB（產科）、GYN（婦科）、肺部、泌尿、EM（急症醫學）等。",
          modes: "B 模式 | M 模式 | 彩色模式 | PW 模式 | CPA 模式 | DPD 模式 | 2B 模式",
        },
      },
    },
  },
};
