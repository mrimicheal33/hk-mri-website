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
    tagline: "Concrete to Resonate — entry-level diagnostic ultrasound",
    description:
      "MINDRAY Consona N6 is the entry model in the Consona diagnostic ultrasound series — built on the ZST+ platform with ComboWave transducers for exceptional image quality and wide clinical coverage. With comprehensive clinical solutions, smart measurement tools, and ergonomic design, Consona N6 delivers reliable ultrasound diagnostics for hospitals, clinics, and primary care settings.",
    highlights: [],
    featureGroups: [
      {
        title: "Clinical Applications",
        items: [
          "Wide clinical application coverage supporting extensive patient types and clinical scenarios",
          "Concrete solutions for smooth diagnoses — ideal for hospitals, clinics, and skill development",
          "Highly powerful tools to keep clinicians ahead across routine and advanced examinations",
        ],
      },
      {
        title: "ZST+ Imaging Platform",
        items: [
          "ZST+ platform transforms ultrasound from conventional beam-forming to channel data based processing",
          "Delivers exceptional image quality with continuous platform improvements",
          "ComboWave transducers enhance imaging sensitivity across clinical applications",
        ],
      },
      {
        title: "Advanced Imaging Technologies",
        items: [
          "PSH, Glazing Flow, NTE, iClear, HR Flow, and iBeam technologies",
          "HD-Scope and UWN+ Contrast Imaging for enhanced diagnostic confidence",
          "Real-time dynamic image optimization for clearer assessment",
        ],
      },
      {
        title: "Comprehensive Clinical Solutions",
        items: [
          "General Imaging Solution — smart tools for smooth everyday diagnosis",
          "Cardiovascular Solution — effective cardiovascular evaluation with dedicated tools",
          "Women's Health Solution — designed for efficiency and patient satisfaction",
        ],
      },
      {
        title: "Smart Measurement Tools",
        items: [
          "Smart HRI — automatic hepatic steatosis index calculation",
          "Smart Bladder — automatic bladder volume measurement",
          "Smart Calc — automatic trace, measurement, and calculation",
          "RIMT — RF-data based real-time IMT measurement",
          "AutoEF — automatic ejection fraction by diastole/systole frames",
          "TDI — myocardial movement display based on Doppler theory",
          "Smart Face — one-click automatic removal of occlusions over fetal face",
          "Glazing Flow — improved 3D presentation of fetal flow",
          "Smart OB — automatic measurement of fetal biometrics",
          "iTouch+ with HD Scope and NTE — improved ROI resolution and Shell quantitative stiffness assessment",
        ],
      },
      {
        title: "Workflow & Learning Tools",
        items: [
          "iScanHelper — step-by-step scanning guidance to practice and improve skills",
          "Smart Vue — automatic recognition and restoration of standard imaging planes",
          "iWorks — standardized step-by-step protocols to avoid plane omission",
        ],
      },
      {
        title: "Ergonomic Design & System Features",
        items: [
          "21.5\" full HD monitor and 13.3\" full HD touch screen",
          "Rotatable control panel with adjustable monitor viewing angle",
          "Adjustable height, integrated storage, and ease-of-transportation design",
          "Noise-reduced design with water and dust proof panel and built-in battery",
        ],
      },
    ],
  },
  "consona-n7": {
    tagline: "Concrete to Resonate — mid-range diagnostic ultrasound",
    description:
      "MINDRAY Consona N7 is the mid-tier model in the Consona diagnostic ultrasound series — built on the ZST+ platform with ComboWave transducers for exceptional image quality and broader clinical coverage. With Smart Scene 3D full-stack obstetric intelligence, comprehensive clinical solutions, smart measurement tools, and ergonomic design, Consona N7 meets the advanced diagnostic needs of hospitals and clinics.",
    highlights: [],
    featureGroups: [
      {
        title: "Clinical Applications",
        items: [
          "Wide clinical application coverage supporting extensive patient types and clinical scenarios",
          "Concrete solutions for smooth diagnoses — ideal for hospitals, clinics, and skill development",
          "Highly powerful tools to keep clinicians ahead across routine and advanced examinations",
        ],
      },
      {
        title: "ZST+ Imaging Platform",
        items: [
          "ZST+ platform transforms ultrasound from conventional beam-forming to channel data based processing",
          "Delivers exceptional image quality with continuous platform improvements",
          "ComboWave transducers enhance imaging sensitivity across clinical applications",
        ],
      },
      {
        title: "Advanced Imaging Technologies",
        items: [
          "PSH, NTE, iClear, HR Flow, and iBeam technologies",
          "HD Scope for enhanced ROI resolution and clearer assessment",
          "Real-time dynamic image optimization via iTouch+",
        ],
      },
      {
        title: "Comprehensive Clinical Solutions",
        items: [
          "General Imaging Solution — smart tools for smooth everyday diagnosis",
          "Cardiovascular Solution — effective cardiovascular evaluation with dedicated tools",
          "Women's Health Solution — full-stack smartness based on Smart Scene 3D",
          "Full-stack smartness obstetric solution empowered by ZST+",
        ],
      },
      {
        title: "Smart Measurement Tools",
        items: [
          "Smart HRI — easy and fast liver steatosis assessment via hepatic steatosis index",
          "Smart Calc — automatic trace, measurement, and calculation",
          "RIMT — RF-data based real-time IMT measurement",
          "AutoEF — automatic ejection fraction by diastole/systole frames",
          "TTQA — myocardial synchronization evaluation with quantitative analysis",
          "NTE with Shell — ROI stiffness display with quantitative assessment",
          "Smart Face — one-click automatic removal of occlusions over fetal face",
          "Smart FLC 2D/3D — automatic follicle counting and measurement",
          "Smart OB — automatic measurement of fetal biometrics",
          "Smart Fetal HR, Smart Planes CNS — fetal heart and brain standard plane analysis",
          "Smart Scene 3D — innovation in fetal face, spine, and long bone presentation",
        ],
      },
      {
        title: "Workflow & Learning Tools",
        items: [
          "iScanHelper — step-by-step scanning guidance to practice and improve skills",
          "Smart Vue — automatic recognition and restoration of standard imaging planes",
          "iWorks — standardized step-by-step protocols to avoid plane omission",
        ],
      },
      {
        title: "Ergonomic Design & System Features",
        items: [
          "21.5\" full HD monitor with lifting monitor arm and 13.3\" full HD touch screen",
          "Rotatable control panel with adjustable height and integrated storage",
          "Ease-of-transportation design with noise-reduced operation",
          "Water and dust proof panel with built-in battery",
        ],
      },
    ],
  },
  "consona-n9": {
    tagline: "Concrete to Resonate — flagship diagnostic ultrasound",
    description:
      "MINDRAY Consona N9 is the flagship model in the Consona diagnostic ultrasound series — built on the ZST+ platform with Single-Crystal and ComboWave transducers for premium image quality and the broadest clinical coverage. With Smart Scene 3D full-stack intelligence, STE/STQ elastography, AI-assisted measurement tools, and dual-wing floating arm ergonomics, Consona N9 meets the advanced diagnostic demands of hospitals and imaging centres.",
    highlights: [],
    featureGroups: [
      {
        title: "Clinical Applications",
        items: [
          "Wide clinical application coverage supporting extensive patient types and clinical scenarios",
          "Concrete solutions for smooth diagnoses — ideal for hospitals, clinics, and advanced imaging centres",
          "Highly powerful tools to keep clinicians ahead across routine and specialist examinations",
        ],
      },
      {
        title: "ZST+ Imaging Platform & Transducers",
        items: [
          "ZST+ platform transforms ultrasound from conventional beam-forming to channel data based processing",
          "Single-Crystal transducers provide deeper penetration with fine detail",
          "ComboWave transducers enhance imaging sensitivity — designed for comfortable gripping",
        ],
      },
      {
        title: "Advanced Imaging Technologies",
        items: [
          "PSH, Glazing Flow, NTE, iClear, HR Flow, STE/STQ, and iBeam technologies",
          "HD-Scope and UMW+ Contrast Imaging for enhanced diagnostic confidence",
          "Fetus 3D with iLive and real-time dynamic image optimization via iTouch+",
        ],
      },
      {
        title: "Comprehensive Clinical Solutions",
        items: [
          "General Imaging Solution — smart tools for smooth everyday diagnosis",
          "Cardiovascular Solution — effective cardiovascular evaluation with dedicated tools",
          "Women's Health Solution — full-stack smartness based on Smart Scene 3D",
          "Full-stack smartness obstetric solution empowered by ZST+",
        ],
      },
      {
        title: "Smart Measurement & AI Tools",
        items: [
          "Smart HRI — automatic liver and renal cortex recognition with brightness ratio calculation",
          "Smart Bladder — automatic three-diameter measurement and bladder volume calculation",
          "Smart Hip — automatic α/β angle measurement for Graf classification",
          "Smart B-line — automatic and rapid assessment of pulmonary edema",
          "Smart Calc — automatic trace, measurement, and calculation",
          "Smart Breast & Smart Thyroid — BI-RADS and TI-RADS analysis with efficient workflow",
          "RIMT, AutoEF, TTQA, and R-VQS — vascular hardness coefficient and pulse wave velocity (PWV)",
          "Smart Face, Smart FLC 2D/3D, Smart OB, Smart Fetal HR, Smart Planes CNS, and Smart Scene 3D",
        ],
      },
      {
        title: "Workflow & Learning Tools",
        items: [
          "iScanHelper — step-by-step scanning guidance to practice and improve skills",
          "Smart Vue — automatic recognition and restoration of standard imaging planes",
          "iWorks — standardized step-by-step protocols to avoid plane omission",
        ],
      },
      {
        title: "Ergonomic Design & System Features",
        items: [
          "Up to 23.8\" FHD monitor with dual-wing floating arm and up to 15.6\" touch screen",
          "Rotatable control panel with adjustable height and integrated storage",
          "Ease-of-transportation design with noise-reduced operation",
          "Water and dust proof panel with built-in battery",
        ],
      },
    ],
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
    tagline: "Non-invasive and quantitative Fibrosis & Steatosis analysis",
    description:
      "MINDRAY Hepatus Series is a professional non-invasive diagnostic system for liver disease — delivering quantitative liver stiffness (E/kPa) and steatosis assessment via transient elastography and LiSA technology. With Advanced ViTE visual guidance, Q-Scan intelligent acquisition, and built-in quality control indices, Hepatus supports early screening, diagnosis, monitoring, and treatment evaluation of liver fibrosis and steatosis across a wide range of clinical indications.",
    highlights: [],
    featureGroups: [
      {
        title: "Clinical Applications",
        items: [
          "Screening, diagnosis, monitoring, and treatment assessment of liver fibrosis and steatosis — especially at early, reversible stages",
          "Applicable to NAFLD, alcoholic liver disease, chronic hepatitis B/C, drug-induced liver injury, autoimmune liver disease, and biliary tract disease",
          "Non-invasive alternative to liver biopsy — reduces biopsy risk; simple, fast, safe, and economical with easy patient follow-up",
          "High sensitivity and accuracy for early fibrosis and fatty liver, supporting prevention before progression to cirrhosis or liver cancer",
        ],
      },
      {
        title: "Quantitative Measurement",
        items: [
          "Quantitative liver stiffness (E/kPa) and fibrosis staging (F0–F4) by transient elastography",
          "LiSA (Liver Ultra-Sound Attenuation) technology for quantitative steatosis evaluation",
          "Sensitive to mild–moderate hepatic fibrosis and early fatty liver — mature, guideline-backed diagnostic criteria",
          "Widely recommended by global liver disease guidelines as a preferred chronic liver disease examination method",
        ],
      },
      {
        title: "Advanced ViTE Technology",
        items: [
          "Advanced ViTE (Visualized Transient Elastography) under real-time 2D ultrasound guidance",
          "Avoid blood vessels and lesions to improve measurement accuracy and reliability",
          "Greatly reduces operator difficulty and improves repeatability vs conventional shear-wave systems",
        ],
      },
      {
        title: "Q-Scan & Quality Control",
        items: [
          "Q-Scan intelligent acquisition — 10 valid measurement groups auto-collected and screened with one button",
          "Results available within approximately 7 seconds after positioning — significantly faster workflow",
          "Pressure index (P) and motion stability index (m-STB) with color-coded guidance for examination quality control",
        ],
      },
      {
        title: "Integrated Probe & Workflow",
        items: [
          "Ultra-wideband multi-element integrated probe — covers all ages and body types without probe switching",
          "One-button acquisition with probe status light; streamlined, slip-resistant, fully sealed design for easy disinfection",
          "Smart trend analysis with batch data export — supports disease tracking, treatment evaluation, and research",
        ],
      },
      {
        title: "System Design & User Experience",
        items: [
          "Full touch-screen tablet interface; built-in battery for mobile and outreach applications",
          "Barcode patient ID input; flexible adjustable panel and excellent cable management",
          "Dual-probe sockets for fast switching; optional ultrasound for ascites, biopsy guidance, portal hemodynamics, and liver morphology",
        ],
      },
      {
        title: "Guidelines & Clinical Validation",
        items: [
          "Recommended by AASLD, EASL, APASL, CMA, WFUMB, and other global liver disease guidelines",
          "Clinical validation at leading centres including Beijing Ditan Hospital, Shanghai Ruijin Hospital, and Shenzhen Third People's Hospital",
        ],
      },
    ],
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
  "consona-n6": {
    tagline: "Concrete to Resonate — 入門級診斷超聲波系統",
    description:
      "MINDRAY Consona N6 為 Consona 系列入門型診斷超聲波系統，搭載 ZST+ 超聲平台及 ComboWave 探頭，提供卓越影像品質及廣泛臨床應用覆蓋 — 結合綜合臨床解決方案、智能測量工具及人體工學設計，支援醫院、診所及基層醫療的可靠超聲診斷。",
    highlights: [],
    featureGroups: [
      {
        title: "臨床應用",
        items: [
          "廣泛臨床應用覆蓋，支援多種患者類型及臨床場景",
          "提供具體可靠的診斷方案 — 適合醫院、診所及技能提升培訓",
          "強大工具支援日常及進階檢查，助臨床人員保持領先",
        ],
      },
      {
        title: "ZST+ 超聲平台",
        items: [
          "ZST+ 平台將超聲指標從傳統波束合成提升至通道數據處理",
          "提供卓越影像品質，平台持續優化升級",
          "ComboWave 探頭提升成像靈敏度，覆蓋更廣臨床應用",
        ],
      },
      {
        title: "先進成像技術",
        items: [
          "PSH、Glazing Flow、NTE、iClear、HR Flow 及 iBeam 技術",
          "HD-Scope 及 UWN+ 造影成像，提升診斷信心",
          "即時動態影像優化，影像更清晰易判讀",
        ],
      },
      {
        title: "綜合臨床解決方案",
        items: [
          "General Imaging Solution — 智能工具支援流暢日常診斷",
          "Cardiovascular Solution — 有效心血管評估及專用工具",
          "Women's Health Solution — 提升效率及患者滿意度",
        ],
      },
      {
        title: "智能測量工具",
        items: [
          "Smart HRI — 自動計算肝脂肪變性指數（HRI）",
          "Smart Bladder — 自動膀胱容量測量",
          "Smart Calc — 自動描記、測量及計算",
          "RIMT — 基於 RF 數據的即時 IMT 測量",
          "AutoEF — 依舒張/收縮幀自動計算射血分數",
          "TDI — 基於都卜勒理論顯示心肌運動",
          "Smart Face — 一鍵自動去除胎兒面部遮擋",
          "Glazing Flow — 改善胎兒血流 3D 呈現",
          "Smart OB — 自動測量胎兒生物測量參數",
          "iTouch+ 配合 HD Scope 及 NTE — 提升 ROI 解析度及 Shell 定量硬度評估",
        ],
      },
      {
        title: "工作流程及學習工具",
        items: [
          "iScanHelper — 逐步掃描引導，助操作者練習及提升技能",
          "Smart Vue — 自動識別及還原標準切面",
          "iWorks — 標準化逐步掃描協議，避免切面遺漏",
        ],
      },
      {
        title: "人體工學設計及系統配置",
        items: [
          "21.5 吋全高清顯示器及 13.3 吋全高清觸控屏",
          "可旋轉控制面板，顯示器視角可調",
          "高度可調、整合收納空間及易於搬運設計",
          "降噪設計，防水防塵面板及內建電池",
        ],
      },
    ],
  },
  "consona-n7": {
    tagline: "Concrete to Resonate — 中階診斷超聲波系統",
    description:
      "MINDRAY Consona N7 為 Consona 系列中階診斷超聲波系統，搭載 ZST+ 超聲平台及 ComboWave 探頭，提供卓越影像品質及更廣泛臨床覆蓋 — 結合 Smart Scene 3D 全棧智能婦產解決方案、綜合臨床工具及人體工學設計，滿足醫院及診所的中高階超聲診斷需求。",
    highlights: [],
    featureGroups: [
      {
        title: "臨床應用",
        items: [
          "廣泛臨床應用覆蓋，支援多種患者類型及臨床場景",
          "提供具體可靠的診斷方案 — 適合醫院、診所及技能提升培訓",
          "強大工具支援日常及進階檢查，助臨床人員保持領先",
        ],
      },
      {
        title: "ZST+ 超聲平台",
        items: [
          "ZST+ 平台將超聲指標從傳統波束合成提升至通道數據處理",
          "提供卓越影像品質，平台持續優化升級",
          "ComboWave 探頭提升成像靈敏度，覆蓋更廣臨床應用",
        ],
      },
      {
        title: "先進成像技術",
        items: [
          "PSH、NTE、iClear、HR Flow 及 iBeam 技術",
          "HD Scope 提升 ROI 解析度，影像更清晰易判讀",
          "iTouch+ 即時動態影像優化",
        ],
      },
      {
        title: "綜合臨床解決方案",
        items: [
          "General Imaging Solution — 智能工具支援流暢日常診斷",
          "Cardiovascular Solution — 有效心血管評估及專用工具",
          "Women's Health Solution — 基於 Smart Scene 3D 的全棧智能方案",
          "ZST+ 賦能的全棧智能婦產解決方案",
        ],
      },
      {
        title: "智能測量工具",
        items: [
          "Smart HRI — 快速簡便的肝脂肪變性指數（HRI）評估",
          "Smart Calc — 自動描記、測量及計算",
          "RIMT — 基於 RF 數據的即時 IMT 測量",
          "AutoEF — 依舒張/收縮幀自動計算射血分數",
          "TTQA — 心肌同步化定量分析評估",
          "NTE 配合 Shell — ROI 定量硬度評估",
          "Smart Face — 一鍵自動去除胎兒面部遮擋",
          "Smart FLC 2D/3D — 自動卵泡計數及測量",
          "Smart OB — 自動測量胎兒生物測量參數",
          "Smart Fetal HR、Smart Planes CNS — 胎兒心臟及腦部標準切面分析",
          "Smart Scene 3D — 創新呈現胎兒面部、脊柱及長骨",
        ],
      },
      {
        title: "工作流程及學習工具",
        items: [
          "iScanHelper — 逐步掃描引導，助操作者練習及提升技能",
          "Smart Vue — 自動識別及還原標準切面",
          "iWorks — 標準化逐步掃描協議，避免切面遺漏",
        ],
      },
      {
        title: "人體工學設計及系統配置",
        items: [
          "21.5 吋全高清顯示器配合升降臂及 13.3 吋全高清觸控屏",
          "可旋轉控制面板，高度可調及整合收納空間",
          "易於搬運設計及降噪運行",
          "防水防塵面板及內建電池",
        ],
      },
    ],
  },
  "consona-n9": {
    tagline: "Concrete to Resonate — 旗艦診斷超聲波系統",
    description:
      "MINDRAY Consona N9 為 Consona 系列旗艦診斷超聲波系統，搭載 ZST+ 超聲平台、Single-Crystal 及 ComboWave 探頭，提供頂級影像品質及最廣泛臨床覆蓋 — 結合 Smart Scene 3D 全棧智能方案、STE/STQ 彈性成像、AI 輔助測量工具及雙翼浮動臂人體工學設計，滿足大型醫院及影像中心的高階診斷需求。",
    highlights: [],
    featureGroups: [
      {
        title: "臨床應用",
        items: [
          "廣泛臨床應用覆蓋，支援多種患者類型及臨床場景",
          "提供具體可靠的診斷方案 — 適合醫院、診所及進階影像中心",
          "強大工具支援日常及專科檢查，助臨床人員保持領先",
        ],
      },
      {
        title: "ZST+ 超聲平台及探頭",
        items: [
          "ZST+ 平台將超聲指標從傳統波束合成提升至通道數據處理",
          "Single-Crystal 探頭提供更深度穿透及精細細節",
          "ComboWave 探頭提升成像靈敏度 — 人體工學握持設計",
        ],
      },
      {
        title: "先進成像技術",
        items: [
          "PSH、Glazing Flow、NTE、iClear、HR Flow、STE/STQ 及 iBeam 技術",
          "HD-Scope 及 UMW+ 造影成像，提升診斷信心",
          "Fetus 3D with iLive 及 iTouch+ 即時動態影像優化",
        ],
      },
      {
        title: "綜合臨床解決方案",
        items: [
          "General Imaging Solution — 智能工具支援流暢日常診斷",
          "Cardiovascular Solution — 有效心血管評估及專用工具",
          "Women's Health Solution — 基於 Smart Scene 3D 的全棧智能方案",
          "ZST+ 賦能的全棧智能婦產解決方案",
        ],
      },
      {
        title: "智能測量及 AI 工具",
        items: [
          "Smart HRI — 自動識別肝臟及腎皮質並計算亮度比值",
          "Smart Bladder — 自動測量三徑及膀胱容量",
          "Smart Hip — 自動測量髖關節 α/β 角，支援 Graf 分類",
          "Smart B-line — 自動快速評估肺水腫",
          "Smart Calc — 自動描記、測量及計算",
          "Smart Breast 及 Smart Thyroid — BI-RADS 及 TI-RADS 分析，高效工作流程",
          "RIMT、AutoEF、TTQA 及 R-VQS — 血管硬度係數及脈搏波速度（PWV）",
          "Smart Face、Smart FLC 2D/3D、Smart OB、Smart Fetal HR、Smart Planes CNS 及 Smart Scene 3D",
        ],
      },
      {
        title: "工作流程及學習工具",
        items: [
          "iScanHelper — 逐步掃描引導，助操作者練習及提升技能",
          "Smart Vue — 自動識別及還原標準切面",
          "iWorks — 標準化逐步掃描協議，避免切面遺漏",
        ],
      },
      {
        title: "人體工學設計及系統配置",
        items: [
          "最高 23.8 吋全高清顯示器配合雙翼浮動臂及最高 15.6 吋觸控屏",
          "可旋轉控制面板，高度可調及整合收納空間",
          "易於搬運設計及降噪運行",
          "防水防塵面板及內建電池",
        ],
      },
    ],
  },
  "hepatus-5": {
    tagline: "非侵入性定量肝纖維化及脂肪肝分析",
    description:
      "MINDRAY Hepatus 系列為專業非侵入性肝臟疾病診斷系統，透過瞬時彈性成像及 LiSA 技術提供肝硬度（E/kPa）及脂肪肝定量評估。結合 Advanced ViTE 視覺化引導、Q-Scan 智能採集及內建質控指標，支援肝纖維化及脂肪肝的早期篩查、診斷、監測及治療評估。",
    highlights: [],
    featureGroups: [
      {
        title: "臨床應用",
        items: [
          "適用於肝纖維化及脂肪肝的篩查、診斷、監測及治療評估 — 尤其早期可逆階段",
          "涵蓋非酒精性脂肪肝、酒精性肝病、慢性乙型/丙型肝炎、藥物性肝損傷、自體免疫性肝病及膽道疾病",
          "非侵入性替代肝活檢 — 降低活檢風險；操作簡便、快速、安全、經濟，易於患者隨訪",
          "對早期肝纖維化及脂肪肝具高靈敏度及準確度，有助在演變為肝硬化或肝癌前介入",
        ],
      },
      {
        title: "定量測量",
        items: [
          "瞬時彈性成像定量測量肝硬度（E/kPa）及肝纖維化分期（F0–F4）",
          "LiSA（Liver Ultra-Sound Attenuation）技術定量評估脂肪肝程度",
          "對輕中度肝纖維化及早期脂肪肝敏感 — 診斷標準成熟，獲全球指南廣泛推薦",
          "慢性肝病首選檢查方法之一",
        ],
      },
      {
        title: "Advanced ViTE 技術",
        items: [
          "Advanced ViTE（Visualized Transient Elastography）配合即時二維超聲引導",
          "避開血管及病灶，提升測量準確度及可靠性",
          "大幅降低操作難度，改善定量測量的可重複性",
        ],
      },
      {
        title: "Q-Scan 及質量控制",
        items: [
          "Q-Scan 智能採集 — 一鍵自動連續採集並篩選 10 組有效數據",
          "定位後約 7 秒內即可獲得有效結果 — 顯著提升檢查效率",
          "壓力指數（P）及運動穩定性指數（m-STB），以顏色提示輔助質控",
        ],
      },
      {
        title: "整合探頭及工作流程",
        items: [
          "超寬頻多陣元整合探頭 — 涵蓋不同年齡及體型，無需更換探頭",
          "一鍵採集配合探頭狀態指示燈；流線型防滑全密封設計，易於清潔消毒",
          "智能趨勢分析支援批量數據導出 — 方便疾病追蹤、治療評估及科研",
        ],
      },
      {
        title: "系統設計及使用體驗",
        items: [
          "全觸控平板介面；內建電池，適合移動及外展應用",
          "條碼掃描輸入患者資料；面板可靈活調節，線材管理完善",
          "雙探頭接口快速切換；可選超聲功能支援腹水、穿刺引導、門脈血流及形態評估",
        ],
      },
      {
        title: "指南認可及臨床驗證",
        items: [
          "獲 AASLD、EASL、APASL、CMA、WFUMB 等全球肝病指南推薦",
          "於北京地壇醫院、上海瑞金醫院、深圳第三人民醫院等中心完成臨床驗證",
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
