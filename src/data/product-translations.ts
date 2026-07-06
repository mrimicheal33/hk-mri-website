import type { Locale } from "@/i18n/config";
import type { Product } from "./products";

export interface ProductFeatureGroup {
  title: string;
  items: string[];
}

export interface ProductLocaleFields {
  tagline: string;
  description: string;
  highlights: string[];
  featureGroups?: ProductFeatureGroup[];
}

const en: Record<string, ProductLocaleFields> = {
  sonoeye: {
    tagline: "Pocket-sized professional ultrasound for diagnosis anywhere",
    description:
      "CHISON SonoEye is a revolutionary handheld ultrasound that connects to iOS and Android smartphones, tablets, and pads for a seamless Go Thumb-play experience. Ideal for ICU, general practice, chiropractic, and aesthetic medicine, with AI-assisted features including SonoMSK and SonoDiaph.",
    highlights: [],
    featureGroups: [
      {
        title: "Clinical Performance & Medical Grade",
        items: [
          "Expert-grade imaging rated 4.1/5.0 by ultrasound specialists — on par with leading premium handheld systems",
          "Clinical-grade POCUS for ICU, emergency, GP, aesthetics, MSK, and diagnostic centers",
          "High-definition imaging quality comparable to larger cart-based systems",
        ],
      },
      {
        title: "Portability & Connectivity",
        items: [
          "Pocket-sized design with one-hand Go Thumb-play operation",
          "iOS and Android integration — connect to smartphone, tablet, or pad, ready on startup",
          "Wired USB connection for zero-latency, zero-interference scanning in high-density clinics",
          "No subscription fees — one-time purchase with full clinical functionality",
        ],
      },
      {
        title: "AI-Assisted Imaging",
        items: [
          "Super Needle guidance for filler safety and precise injections",
          "Auto-IMT, Auto-Bladder, and Auto-EF for streamlined cardiac and urology measurements",
          "SonoMSK musculoskeletal and SonoDiaph lung analysis",
        ],
      },
      {
        title: "Durability & Infection Control",
        items: [
          "IP67 waterproof and dustproof — immersion-ready for high-turnover sterilization",
          "MIL-STD-810G drop-tested for demanding clinical environments",
        ],
      },
      {
        title: "Regulatory & Safety Standards",
        items: [
          "FDA 510(k) cleared and CE marked (EU MDR 2017/745) — Class II diagnostic ultrasound",
          "IEC 60601-1 medical electrical safety standard",
          "CMD (NMPA), CSA (Canada), and KFDA (Korea) certified",
        ],
      },
    ],
  },
  "consona-n6": {
    tagline: "Entry-level diagnostic ultrasound system",
    description:
      "MINDRAY Consona N6 — the entry model in the Consona series, delivering reliable foundational ultrasound diagnostics.",
    highlights: ["High value", "Stable and dependable", "Ideal for primary care clinics"],
  },
  "consona-n7": {
    tagline: "Mid-range diagnostic ultrasound system",
    description:
      "A feature-rich mid-tier Consona model meeting broader clinical application needs.",
    highlights: ["Advanced imaging", "Multi-probe support", "Wide clinical coverage"],
  },
  "consona-n9": {
    tagline: "Flagship diagnostic ultrasound system",
    description:
      "The Consona N9 flagship with advanced ultrasound imaging and AI-assisted clinical tools.",
    highlights: ["Flagship imaging quality", "AI-assisted workflow", "Comprehensive clinical coverage"],
  },
  "digieye-330": {
    tagline: "Digital radiography system",
    description: "MINDRAY DigiEye 330 series digital X-ray imaging system.",
    highlights: ["Digital imaging", "Fast acquisition", "Low radiation dose"],
  },
  "digieye-350": {
    tagline: "Advanced digital radiography system",
    description: "DigiEye 350 series — efficient digital radiography for modern workflows.",
    highlights: ["High-resolution imaging", "Intelligent post-processing", "Workflow optimisation"],
  },
  "digieye-680": {
    tagline: "Premium digital radiography system",
    description:
      "DigiEye 680 flagship DR system for large hospitals and imaging centres.",
    highlights: ["Flagship DR performance", "Large-area detector", "Hospital-grade applications"],
  },
  "hepatus-5": {
    tagline: "Liver fibrosis and steatosis scanner",
    description:
      "Non-invasive quantitative assessment of liver fibrosis and fatty liver, measuring liver stiffness (LSM) and controlled attenuation (CAP).",
    highlights: ["Non-invasive testing", "Quantitative liver stiffness", "Fatty liver assessment", "Instant results"],
  },
  mini800: {
    tagline: "Compact, simple, fast — cost-effective solution for liver diagnosis",
    description:
      "iLivTouch Mini800 is a portable shear-wave quantificational ultrasound diagnostic system. Using vibration-controlled transient elastography (TE), it delivers quantitative liver stiffness (LSM) and ultrasound attenuation parameter (UAP) measurements — a cost-effective aid for non-invasive assessment of liver fibrosis, cirrhosis, and steatosis, supporting early screening, prevention, diagnosis, and treatment of chronic liver diseases.",
    highlights: [],
    featureGroups: [
      {
        title: "Clinical Applications",
        items: [
          "Cost-effective solution for liver diagnosis",
          "Aid to overall assessment of fibrosis, cirrhosis, and steatosis",
          "Early screening, prevention, diagnosis, and treatment of chronic liver disease",
          "Non-invasive — ideal for regular monitoring and patient follow-up",
        ],
      },
      {
        title: "Technology & Measurement",
        items: [
          "Vibration-controlled transient elastography (TE) technology",
          "Quantitative LSM and UAP measurement",
          "Wideband fibrosis scanning probe",
          "Ultrasound B-mode imaging probe (optional)",
        ],
      },
      {
        title: "Portability & Workflow",
        items: [
          "Compact, simple, and fast operation",
          "Lightweight — easy to carry and transport",
          "Battery operated for flexible bedside and outreach use",
          "Rapid measurement with immediate results",
        ],
      },
      {
        title: "Regulatory & Safety Standards",
        items: [
          "U.S. FDA 510(k) clearance and CE marked",
        ],
      },
    ],
  },
  "mobieye-700": {
    tagline: "Mobile digital radiography system",
    description:
      "Portable mobile DR for ICU, emergency, and bedside imaging of immobile patients.",
    highlights: ["Mobile and portable", "Bedside imaging", "Motorised lift"],
  },
  "uct-780": {
    tagline: "Premium 128-slice CT scanner",
    description:
      "United Imaging uCT 780 — fast, low-dose, high-quality CT for demanding clinical environments.",
    highlights: ["128-slice scanning", "Low-dose technology", "Rapid acquisition"],
  },
  "uct-960": {
    tagline: "Ultra-premium CT scanner",
    description: "United Imaging flagship CT with state-of-the-art tomographic imaging.",
    highlights: ["Ultra-premium performance", "Precision diagnosis", "Wide detector coverage"],
  },
  "udr-596i": {
    tagline: "Dual-column digital radiography system",
    description: "United Imaging uDR 596i dual-column DR for flexible positioning and imaging.",
    highlights: ["Dual-column design", "Flexible positioning", "High-quality imaging"],
  },
  "umammo-890i": {
    tagline: "Full-field digital mammography system",
    description:
      "United Imaging uMammo 890i full-field digital mammography with 2D/3D tomosynthesis.",
    highlights: ["Full-field digital mammography", "3D tomosynthesis", "Low dose"],
  },
  "umr-670": {
    tagline: "1.5T magnetic resonance imaging system",
    description:
      "United Imaging 1.5T MRI delivering high-quality MR imaging for general hospitals.",
    highlights: ["1.5T superconducting magnet", "Multi-sequence imaging", "Patient comfort design"],
  },
  "umr-680": {
    tagline: "Advanced 1.5T MRI system",
    description:
      "United Imaging uMR 680 advanced 1.5T MRI with expanded imaging capability and clinical applications.",
    highlights: ["Advanced 1.5T", "Fast scanning", "Broad clinical applications"],
  },
  "umr-omega": {
    tagline: "3T ultra-high-field MRI system",
    description:
      "United Imaging 3T ultra-high-field MRI flagship for exceptional image resolution.",
    highlights: ["3T ultra-high field", "Flagship image quality", "Research-grade performance"],
  },
  "umi-vista": {
    tagline: "Digital PET-CT scanner",
    description:
      "United Imaging uMI Vista digital PET-CT integrating functional and anatomical imaging.",
    highlights: ["Digital PET technology", "Integrated CT", "Oncology diagnosis"],
  },
  vet1120: {
    tagline: "Veterinary mobile digital C-arm system",
    description:
      "PERLOVE VET1120 is a compact mobile digital C-arm for real-time fluoroscopic guidance in veterinary orthopedics, trauma, and soft-tissue surgery — combining 5.0 kW imaging power, an integrated workstation, and a space-saving footprint tailored to modern clinic environments.",
    highlights: [],
    featureGroups: [
      {
        title: "Clinical Applications",
        items: [
          "Real-time fluoroscopy for precise intraoperative guidance in orthopedic and trauma surgery",
          "Supports accurate implant placement — helps reduce surgical time and improve outcomes",
          "5.0 kW generator suitable for large-breed dogs (e.g. German Shepherds, Labradors) where lower-power units lose penetration",
          "Automatic, manual, and pulse fluoroscopy modes for flexible surgical workflow",
        ],
      },
      {
        title: "Imaging Technology",
        items: [
          "Japanese Toshiba image intensifier for high-resolution fluoroscopic clarity",
          "Digital imaging chain designed for precision in orthopedic and trauma interventions",
          "High-power X-ray tube delivering reliable penetration for veterinary anatomy",
        ],
      },
      {
        title: "Space-Saving Mobile Design",
        items: [
          "Integrated workstation eliminates the need for a separate monitor cart — saves critical OR floor space",
          "Compact mobile C-arm footprint for tight operating theaters and urban clinics",
          "Flexible movement and positioning for diverse clinical layouts",
        ],
      },
      {
        title: "Ergonomics & Ease of Use",
        items: [
          "Humanized hand controller for intuitive operation within the sterile field",
          "Surgeon can adjust imaging without leaving the operating table",
          "Streamlined workflow for daily high-throughput veterinary surgery",
        ],
      },
      {
        title: "Regulatory & Quality Standards",
        items: [
          "EU MDR CE certified to international medical device safety standards",
          "Premium core components with value-focused positioning for strong clinical ROI",
        ],
      },
    ],
  },
  vf1: {
    tagline: "Next-generation veterinary dynamic digital radiography system",
    description:
      "VETOO VF1 is an animal-specific Dynamic DR system for intelligent pet imaging — 30 fps dynamic imaging, up to 15-minute fluoroscopy, and optional DSA for interventional procedures. Covers esophageal, pulmonary, and joint guidance, contrast studies, and more. Features a 17×17\" flat panel detector, 32kW generator (125kV / 400mA), and veterinary-specific software.",
    highlights: [],
    featureGroups: [
      {
        title: "Clinical Applications",
        items: [
          "Dynamic observation of motor organs — esophagus, lungs, diaphragm, intestine, and trachea",
          "Orthopedic surgery support: joint placement, nail changes, and bone localization",
          "Gastrointestinal contrast studies — esophageal peristalsis, gastric emptying, and barium meal evaluation",
          "Cardiac and pulmonary assessment with contrast agents; optional DSA for interventional procedures",
          "Extended dynamic video helps reduce misdiagnosis when pets are nervous, trembling, or short of breath",
        ],
      },
      {
        title: "Dynamic DR Technology",
        items: [
          "Converts digital X-ray data into both still images and smooth video — beyond static DR alone",
          "30 fps dynamic imaging with full static DR high-definition images and advanced measurement tools",
          "Up to 15 minutes continuous dynamic video mode per session for difficult surgeries and extended observation",
          "Optional DSA module for angiography-assisted interventional use",
          "Broader clinical scenarios and higher diagnostic value compared with conventional static DR",
        ],
      },
      {
        title: "Imaging Performance",
        items: [
          "17×17\" flat panel detector with cesium iodide evaporation — low radiation, high DQE (~80%), 3.6 Lp/mm limiting resolution",
          "32 kW high-power generator (125 kV / 400 mA) — reliable penetration for both large and small pets",
          "0.6 / 1.2 mm small focal spot for high-resolution imaging suited to cats, dogs, and other companion animals",
          "DAEC technology for automatic exposure parameter selection during radiography",
        ],
      },
      {
        title: "Software & Ease of Use",
        items: [
          "HD touch screen with intuitive, veterinary-specific software workflow",
          "Automatic exposure parameter selection — imaging parameters clearly visible and adjustable in real time",
          "Full-function measurement and imaging tools tailored to veterinary clinical characteristics",
          "User-friendly interface designed for efficient daily clinic operation",
        ],
      },
      {
        title: "Installation & Site Requirements",
        items: [
          "Main unit approximately 205 × 151 × 95 cm; weight 120 kg",
          "Minimum radiation room size 2 × 1.5 m; door width minimum 65 cm",
          "220 V single-phase three-wire power supply with dedicated high-voltage line recommended",
        ],
      },
      {
        title: "Quality & Support",
        items: [
          "From Vetoo Med — professional veterinary DR manufacturer with strong independent R&D and national invention patents",
          "Strict supplier management and quality control with comprehensive pre-sales and after-sales service",
          "Proven market track record with over 2,800 units installed in China",
        ],
      },
    ],
  },
};

const zh: Record<string, ProductLocaleFields> = {
  sonoeye: {
    tagline: "口袋大小的專業超聲波，隨時隨地精準診斷",
    description:
      "CHISON SonoEye 是一款革命性的手持超聲波設備，可連接 iOS 及 Android 智能手機、平板或 Pad，實現「一指操作 (Go Thumb-play)」的流暢體驗。適用於 ICU、普通科、脊醫、醫美等多個臨床場景，支援 SonoMSK、SonoDiaph 等 AI 輔助功能。",
    highlights: [],
    featureGroups: [
      {
        title: "臨床性能與醫療級別",
        items: [
          "超聲專家評級 4.1/5.0 專家級影像 — 媲美頂級手持超聲波系統",
          "臨床級床旁超聲波（POCUS），適用 ICU、急症、普通科、醫美、肌骨及診斷中心",
          "高清晰度影像，媲美大型推車式超聲波系統",
        ],
      },
      {
        title: "便攜性與連接",
        items: [
          "口袋大小設計，單手 Go Thumb-play 操作",
          "iOS 及 Android 整合 — 連接智能手機、平板或 Pad，開機即用",
          "有線 USB 連接，零延遲、零干擾，適合高密度診所環境",
          "無訂閱費用 — 一次購買，享有完整臨床功能",
        ],
      },
      {
        title: "AI 輔助成像",
        items: [
          "Super Needle 導引，提升填充劑注射及穿刺安全性",
          "Auto-IMT、Auto-Bladder、Auto-EF 心臟及泌尿系統自動測量",
          "SonoMSK 肌骨系統及 SonoDiaph 肺部分析",
        ],
      },
      {
        title: "耐用性與感控",
        items: [
          "IP67 防水防塵 — 可浸沒消毒，適合高周轉感染控制（如急症室）",
          "MIL-STD-810G 軍規跌落測試，適應嚴苛臨床環境",
        ],
      },
      {
        title: "法規與安全標準",
        items: [
          "美國 FDA 510(k) 及 CE 標誌（EU MDR 2017/745）— Class II 診斷超聲波",
          "IEC 60601-1 醫療電氣安全標準",
          "CMD（NMPA）、CSA（加拿大）及 KFDA（韓國）認證",
        ],
      },
    ],
  },
  mini800: {
    tagline: "緊湊、簡便、快速 — 經濟實惠的肝臟診斷方案",
    description:
      "iLivTouch Mini800 便攜式剪切波定量超聲波診斷系統，採用振動控制瞬時彈性成像（TE）技術，提供肝硬度（LSM）及超聲衰減參數（UAP）定量測量，輔助肝纖維化、肝硬化及脂肪肝的非侵入性全面評估，支援慢性肝病的早期篩查、預防、診斷及治療。",
    highlights: [],
    featureGroups: [
      {
        title: "臨床應用",
        items: [
          "經濟實惠的肝臟診斷方案",
          "輔助評估肝纖維化、肝硬化及脂肪肝",
          "支援慢性肝病早期篩查、預防、診斷及治療",
          "非侵入性 — 適合定期監測及患者隨訪",
        ],
      },
      {
        title: "技術與測量",
        items: [
          "振動控制瞬時彈性成像（TE）技術",
          "LSM 及 UAP 定量測量",
          "闊頻纖維化掃描探頭",
          "超聲波 B-mode 影像探頭（可選）",
        ],
      },
      {
        title: "便攜性與工作流程",
        items: [
          "緊湊、簡便、快速操作",
          "輕巧便攜，易於搬運",
          "電池供電，適合床邊及外展篩查",
          "快速測量，即時結果",
        ],
      },
      {
        title: "法規與安全標準",
        items: [
          "美國 FDA 510(k) 及 CE 認證",
        ],
      },
    ],
  },
  vet1120: {
    tagline: "獸醫移動式數位 C-arm 系統",
    description:
      "PERLOVE VET1120 為緊湊型移動式數位 C-arm，提供獸醫骨科、創傷及軟組織手術的即時透視導引 — 結合 5.0 kW 成像功率、整合式工作站及節省空間的設計，適合現代診所環境。",
    highlights: [],
    featureGroups: [
      {
        title: "臨床應用",
        items: [
          "即時透視影像，支援骨科及創傷手術的術中精準導引",
          "協助準確植入物定位 — 有助縮短手術時間並改善臨床成效",
          "5.0 kW 發生器適用大型犬（如德國牧羊犬、拉布拉多），低功率機型難以穿透的部位亦可清晰成像",
          "自動、手動及脈衝透視模式，配合不同手術流程",
        ],
      },
      {
        title: "成像技術",
        items: [
          "日本 Toshiba 影像增強器，提供高解像度透視影像",
          "數位成像鏈專為骨科及創傷介入的精準度而設",
          "高功率 X 光管，為獸醫解剖結構提供可靠穿透力",
        ],
      },
      {
        title: "節省空間的移動設計",
        items: [
          "整合式工作站，無需另設顯示器推車 — 節省寶貴的手術室空間",
          "緊湊移動式 C-arm 機身，適合狹小手術室及市區診所",
          "靈活移動及定位，適應不同臨床布局",
        ],
      },
      {
        title: "人體工學與易用性",
        items: [
          "人性化手控器，可在無菌區內直觀操作",
          "外科醫生無需離開手術台即可調整影像",
          "簡化日常工作流程，適合高周轉獸醫外科",
        ],
      },
      {
        title: "法規與品質標準",
        items: [
          "EU MDR CE 認證，符合國際醫療器械安全標準",
          "採用優質核心部件，以具競爭力的定位提供強勁臨床投資回報",
        ],
      },
    ],
  },
  vf1: {
    tagline: "新一代獸醫動態數位放射影像系統",
    description:
      "VETOO VF1 專為智能寵物影像設計的動態 DR 系統，支援 30 fps 動態成像、最長 15 分鐘透視錄影及可選 DSA 模組，涵蓋食道/肺部/關節定位、造影及介入等臨床應用。配備 17×17 吋平板探測器、32kW 高壓發生器（125kV / 400mA）及獸醫專用軟件。",
    highlights: [],
    featureGroups: [
      {
        title: "臨床應用",
        items: [
          "動態觀察運動器官 — 食道、肺部、橫膈膜、腸道及氣管",
          "骨科手術支援：關節置換、釘板調整及骨骼定位",
          "消化道造影 — 食道蠕動、胃排空及鋇餐檢查，提供診斷依據",
          "心臟及肺部造影評估；可選 DSA 模組支援介入手術",
          "長時間動態錄影有助減少寵物緊張、顫抖或呼吸急促造成的誤診",
        ],
      },
      {
        title: "動態 DR 技術",
        items: [
          "將數位 X 光資料轉換為靜態影像及流暢視頻 — 超越傳統靜態 DR",
          "30 fps 動態成像，兼備靜態 DR 高清影像及進階測量功能",
          "每次最長 15 分鐘連續動態透視模式，適合複雜手術及長時間觀察",
          "可選 DSA 模組，支援血管造影輔助介入治療",
          "臨床應用場景更廣，診斷價值高於傳統靜態 DR",
        ],
      },
      {
        title: "成像性能",
        items: [
          "17×17 吋平板探測器，採用碘化銫蒸發技術 — 低輻射、高 DQE（約 80%）、極限解析度 3.6 Lp/mm",
          "32 kW 高功率發生器（125 kV / 400 mA）— 大小型寵物均可獲得可靠穿透力",
          "0.6 / 1.2 mm 小焦點，高解像度成像，適合貓、狗及其他寵物",
          "DAEC 自動曝光控制技術，透視時自動選擇最佳曝光參數",
        ],
      },
      {
        title: "軟件與易用性",
        items: [
          "高清觸控螢幕，配備直觀的獸醫專用軟件工作流程",
          "自動曝光參數選擇 — 成像參數清晰可見，可即時調整",
          "完整測量及成像工具，專為獸醫臨床特點而設",
          "友善操作介面，適合日常高周轉診所使用",
        ],
      },
      {
        title: "安裝及場地要求",
        items: [
          "主機尺寸約 205 × 151 × 95 cm；重量 120 kg",
          "最小輻射房尺寸 2 × 1.5 m；門寬最少 65 cm",
          "220 V 單相三線電源，建議配置獨立高壓電源線",
        ],
      },
      {
        title: "品質與支援",
        items: [
          "Vetoo Med 專業獸醫 DR 製造商，具備強大自主研發能力及多項國家發明專利",
          "嚴格供應商管理及品質控制，提供完善的售前及售後服務",
          "中國市場累計裝機量超過 2,800 台，獲用戶廣泛好評",
        ],
      },
    ],
  },
};

export function getLocalizedProduct(
  product: Product,
  locale: Locale
): Product & ProductLocaleFields {
  if (locale === "en" && en[product.id]) {
    return { ...product, ...en[product.id] };
  }
  if (locale === "zh" && zh[product.id]) {
    return { ...product, ...zh[product.id] };
  }
  return {
    ...product,
    tagline: product.tagline,
    description: product.description,
    highlights: product.highlights,
  };
}
