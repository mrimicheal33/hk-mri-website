import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export type ProductCategory =
  | "ultrasound"
  | "radiography"
  | "liver-fibrosis"
  | "mri"
  | "ct"
  | "mammography"
  | "pet-ct"
  | "diagnostic"
  | "veterinary";

export interface Product {
  id: string;
  name: string;
  nameEn?: string;
  brand: string;
  brandSlug: string;
  category: ProductCategory;
  tagline: string;
  description: string;
  highlights: string[];
  brochure?: string;
  image?: string;
  featured?: boolean;
  hero?: boolean;
}

export interface Brand {
  slug: string;
  name: string;
  nameEn: string;
  logo: string;
  description: string;
  exclusive?: string;
  color: string;
  pageHref?: string;
}

export const brands: Brand[] = [
  {
    slug: "chison",
    name: "CHISON",
    nameEn: "CHISON Medical Technologies",
    logo: "/images/brands/chison.webp",
    description: "全球領先的超聲波影像解決方案供應商，SonoEye 手持超聲波。",
    color: "#2563eb",
    pageHref: "/products/sonoeye",
  },
  {
    slug: "ilivtouch",
    name: "HISKY",
    nameEn: "HISKY Medical",
    logo: "/images/brands/hisky.png",
    description: "非侵入性肝纖維化及脂肪肝管理系統，採用振動控制瞬時彈性成像技術。",
    color: "#0097a7",
    pageHref: "/products/mini800",
  },
  {
    slug: "mindray",
    name: "MINDRAY",
    nameEn: "MINDRAY Bio-Medical Electronics",
    logo: "/images/brands/mindray.png",
    description: "全球領先的醫療設備與解決方案供應商，涵蓋超聲波、放射影像及肝纖維化檢測。",
    color: "#dc2626",
  },
  {
    slug: "perlove",
    name: "PERLOVE",
    nameEn: "PERLOVE Medical",
    logo: "/images/brands/perlove.png",
    description: "專注獸醫影像設備，提供移動式數位 C-arm 系統。",
    color: "#b91c1c",
    pageHref: "/products/vet1120",
  },
  {
    slug: "united-imaging",
    name: "UNITED IMAGING",
    nameEn: "United Imaging Healthcare",
    logo: "/images/brands/united-imaging.png",
    description: "高端醫學影像設備製造商，提供 MRI、CT、DR、乳腺及 PET-CT 全系統解決方案。",
    color: "#0f4c5c",
  },
  {
    slug: "vetoo",
    name: "VETOO",
    nameEn: "Shenzhen Vetoo Medical Technology",
    logo: "/images/brands/vetoo.svg",
    description: "專注獸醫動態數位放射影像（Dynamic DR）及智能寵物影像解決方案。",
    color: "#0f4c5c",
    pageHref: "/products/vf1",
  },
];

export const categoryLabels: Record<ProductCategory, string> = {
  ultrasound: "超聲波系統",
  radiography: "放射影像",
  "liver-fibrosis": "肝纖維化掃描儀",
  mri: "磁共振 (MRI)",
  ct: "電腦斷層 (CT)",
  mammography: "乳腺攝影",
  "pet-ct": "PET-CT",
  diagnostic: "診斷檢測",
  veterinary: "獸醫影像",
};

/** Preferred section order on brand pages (e.g. MINDRAY). */
export const categoryDisplayOrder: ProductCategory[] = [
  "liver-fibrosis",
  "ultrasound",
  "radiography",
  "diagnostic",
  "mri",
  "ct",
  "mammography",
  "pet-ct",
  "veterinary",
];

export const products: Product[] = [
  // CHISON - Hero Product
  {
    id: "sonoeye",
    name: "CHISON SonoEye",
    nameEn: "Handheld Ultrasound",
    brand: "CHISON",
    brandSlug: "chison",
    category: "ultrasound",
    tagline: "口袋大小的專業超聲波，隨時隨地精準診斷",
    description:
      "CHISON SonoEye 是一款革命性的手持超聲波設備，可連接 iOS 及 Android 智能手機、平板或 Pad，實現「一指操作 (Go Thumb-play)」的流暢體驗。適用於 ICU、普通科、脊醫、醫美等多個臨床場景，支援 SonoMSK、SonoDiaph 等 AI 輔助功能。",
    highlights: [],
    featured: true,
    hero: true,
    image: "/images/products/sonoeye-hero.png",
    brochure: "/brochures/sonoeye-brochure.pdf",
  },
  // MINDRAY - Liver Fibrosis Scanner
  {
    id: "hepatus-5",
    name: "Hepatus Series",
    nameEn: "Hepatus 5 & Hepatus 6 Diagnostic System",
    brand: "MINDRAY",
    brandSlug: "mindray",
    category: "liver-fibrosis",
    tagline: "非侵入性定量肝纖維化及脂肪肝分析",
    description:
      "MINDRAY Hepatus Series 為專業非侵入性肝臟疾病診斷系統，提供肝纖維化及脂肪肝的定量評估 — 結合 ViTE 視覺化瞬時彈性成像、LiSA 超聲衰減技術、Q-Scan 智能採集及質控指標，適用於慢性肝病的早期篩查、診斷、監測及治療評估。",
    highlights: [],
    featured: true,
    image: "/images/products/hepatus-card.png?v=4",
    brochure: "/brochures/hepatus-5-brochure.pdf",
  },
  // MINDRAY - Ultrasound
  {
    id: "consona-n6",
    name: "Consona N6",
    nameEn: "MINDRAY Consona N6 Diagnostic Ultrasound System",
    brand: "MINDRAY",
    brandSlug: "mindray",
    category: "ultrasound",
    tagline: "Concrete to Resonate — 入門級診斷超聲波系統",
    description:
      "MINDRAY Consona N6 為 Consona 系列入門型診斷超聲波系統，搭載 ZST+ 超聲平台及 ComboWave 探頭，提供卓越影像品質及廣泛臨床應用覆蓋 — 結合綜合臨床解決方案、智能測量工具及人體工學設計，支援醫院、診所及基層醫療的可靠超聲診斷。",
    highlights: [],
    image: "/images/products/consona-n6-card.png?v=2",
    brochure: "/brochures/consona-n6-brochure.pdf",
  },
  {
    id: "consona-n7",
    name: "Consona N7",
    nameEn: "MINDRAY Consona N7 Diagnostic Ultrasound System",
    brand: "MINDRAY",
    brandSlug: "mindray",
    category: "ultrasound",
    tagline: "Concrete to Resonate — 中階診斷超聲波系統",
    description:
      "MINDRAY Consona N7 為 Consona 系列中階診斷超聲波系統，搭載 ZST+ 超聲平台及 ComboWave 探頭，提供卓越影像品質及更廣泛臨床覆蓋 — 結合 Smart Scene 3D 全棧智能婦產解決方案、綜合臨床工具及人體工學設計，滿足醫院及診所的中高階超聲診斷需求。",
    highlights: [],
    image: "/images/products/consona-n7-card.png?v=2",
    brochure: "/brochures/consona-n7-brochure.pdf",
  },
  {
    id: "consona-n9",
    name: "Consona N9",
    nameEn: "MINDRAY Consona N9 Diagnostic Ultrasound System",
    brand: "MINDRAY",
    brandSlug: "mindray",
    category: "ultrasound",
    tagline: "Concrete to Resonate — 旗艦診斷超聲波系統",
    description:
      "MINDRAY Consona N9 為 Consona 系列旗艦診斷超聲波系統，搭載 ZST+ 超聲平台、Single-Crystal 及 ComboWave 探頭，提供頂級影像品質及最廣泛臨床覆蓋 — 結合 Smart Scene 3D 全棧智能方案、STE/STQ 彈性成像、AI 輔助測量工具及雙翼浮動臂人體工學設計，滿足大型醫院及影像中心的高階診斷需求。",
    highlights: [],
    featured: true,
    image: "/images/products/consona-n9-card.png?v=1",
    brochure: "/brochures/consona-n9-brochure.pdf",
  },
  // MINDRAY - Radiography
  {
    id: "digieye-330",
    name: "DigiEye 330",
    nameEn: "MINDRAY DigiEye 330",
    brand: "MINDRAY",
    brandSlug: "mindray",
    category: "radiography",
    image: "/images/products/digieye-330-card.png",
    tagline: "流線型設計，提升數位放射攝影效率",
    description:
      "MINDRAY DigiEye 330 系列為落地式數位放射攝影（DR）系統，以流線型人體工學設計、人性化工作流程及遠程連接功能，滿足多樣化臨床場景的 X 光檢查需求 — 適合基層醫療機構、診斷中心及高周轉放射科使用。",
    highlights: [],
    brochure: "/brochures/digieye-330-brochure.pdf",
  },
  {
    id: "digieye-350",
    name: "DigiEye 350",
    nameEn: "MINDRAY DigiEye 350",
    brand: "MINDRAY",
    brandSlug: "mindray",
    category: "radiography",
    image: "/images/products/digieye-350-card.png",
    tagline: "新一代落地式 DR — 流暢操作，卓越影像",
    description:
      "MINDRAY DigiEye 350 系列為新一代落地式數位放射攝影（DR）系統，融合 Mindray 自主研發的機架、高壓發生器、平板探測器及 DROC 影像算法，提供流暢高效的放射檢查方案 — 配備雙向同步、移動式 FPD、iStitch 自動拼接及人性化觸控工作流程，滿足多樣化臨床場景。",
    highlights: [],
    brochure: "/brochures/digieye-350-brochure.pdf",
  },
  {
    id: "digieye-680",
    name: "DigiEye 680",
    nameEn: "MINDRAY DigiEye 680",
    brand: "MINDRAY",
    brandSlug: "mindray",
    category: "radiography",
    image: "/images/products/digieye-680-card.webp",
    tagline: "吊架式旗艦 DR — 緊湊佔地，全方位患者關懷",
    description:
      "MINDRAY DigiEye 680 系列為吊架式數位放射攝影（DR）系統，緊湊佔地設計適合大型醫院及影像中心 — 配備移動式探測器、Level 後處理軟件、iStitch 全景成像及多種檢查床選項，配合 MiCo+ 遠程連接與 M·Share 共享探測器，提供快速、流暢、高價值的檢查與診斷體驗。",
    highlights: [],
    brochure: "/brochures/digieye-680-brochure.pdf",
    featured: true,
  },
  // HISKY - Liver Fibrosis
  {
    id: "mini800",
    name: "iLivTouch Mini800",
    nameEn: "iLivTouch Mini800",
    brand: "HISKY",
    brandSlug: "ilivtouch",
    category: "diagnostic",
    image: "/images/products/mini800-card.png",
    tagline: "緊湊、簡便、快速 — 經濟實惠的肝臟診斷方案",
    description:
      "iLivTouch Mini800 便攜式剪切波定量超聲波診斷系統，採用振動控制瞬時彈性成像（TE）技術，提供肝硬度（LSM）及超聲衰減參數（UAP）定量測量，輔助肝纖維化、肝硬化及脂肪肝的非侵入性全面評估，支援慢性肝病的早期篩查、預防、診斷及治療。",
    highlights: [],
    brochure: "/brochures/mini800-ilivtouch.pdf",
    featured: true,
  },
  // MINDRAY - Mobile Radiography
  {
    id: "mobieye-700",
    name: "MobiEye 700",
    nameEn: "MINDRAY MobiEye 700",
    brand: "MINDRAY",
    brandSlug: "mindray",
    category: "radiography",
    image: "/images/products/mobieye-700-card.jpg",
    tagline: "智能移動 DR — 強大動力，靈活機動",
    description:
      "MINDRAY MobiEye 700 為新一代移動式數位放射攝影（DR）系統，緊湊輕便、操作便捷 — 配備獨特仿生機械臂、智能速度調控、5G 無線 MPX 探測器及雙模式電源管理，為 ICU、急診及行動不便患者床邊攝影提供卓越影像品質與最大檢查覆蓋範圍。",
    highlights: [],
    brochure: "/brochures/mobieye-700-brochure.pdf",
  },
  // UNITED IMAGING - CT
  {
    id: "uct-780",
    name: "uCT 780",
    brand: "UNITED IMAGING",
    brandSlug: "united-imaging",
    category: "ct",
    tagline: "高端 128 層 CT 掃描儀",
    description: "聯影 uCT 780 高端 CT 系統，提供快速、低劑量、高品質的斷層影像。",
    highlights: ["128 層掃描", "低劑量技術", "快速成像"],
    featured: true,
  },
  {
    id: "uct-960",
    name: "uCT 960+",
    brand: "UNITED IMAGING",
    brandSlug: "united-imaging",
    category: "ct",
    tagline: "超高端 CT 掃描儀",
    description: "聯影旗艦 CT 系統，配備最先進的斷層成像技術。",
    highlights: ["超高端性能", "精準診斷", "寬體探測器"],
  },
  // UNITED IMAGING - DR
  {
    id: "udr-596i",
    name: "uDR 596i",
    brand: "UNITED IMAGING",
    brandSlug: "united-imaging",
    category: "radiography",
    tagline: "雙立柱數位放射攝影系統",
    description: "聯影 uDR 596i 雙立柱 DR 系統，靈活應對多種攝影需求。",
    highlights: ["雙立柱設計", "靈活定位", "高品質成像"],
  },
  // UNITED IMAGING - Mammography
  {
    id: "umammo-890i",
    name: "uMammo 890i",
    brand: "UNITED IMAGING",
    brandSlug: "united-imaging",
    category: "mammography",
    tagline: "全數位乳腺攝影系統",
    description: "聯影 uMammo 890i 全數位乳腺 X 光攝影系統，支援 2D/3D 斷層成像。",
    highlights: ["全數位乳腺攝影", "3D 斷層成像", "低劑量"],
    featured: true,
  },
  // UNITED IMAGING - MRI
  {
    id: "umr-670",
    name: "uMR 670",
    brand: "UNITED IMAGING",
    brandSlug: "united-imaging",
    category: "mri",
    tagline: "1.5T 磁共振成像系統",
    description: "聯影 1.5T MRI 系統，提供高品質磁共振影像，適合綜合醫院部署。",
    highlights: ["1.5T 超導磁體", "多序列成像", "患者舒適設計"],
    featured: true,
  },
  {
    id: "umr-680",
    name: "uMR 680",
    brand: "UNITED IMAGING",
    brandSlug: "united-imaging",
    category: "mri",
    tagline: "1.5T 進階磁共振系統",
    description: "聯影 uMR 680 進階 1.5T MRI，更強大的成像能力與臨床應用。",
    highlights: ["進階 1.5T", "快速掃描", "廣泛臨床應用"],
  },
  {
    id: "umr-omega",
    name: "uMR OMEGA",
    brand: "UNITED IMAGING",
    brandSlug: "united-imaging",
    category: "mri",
    tagline: "3T 超高場磁共振系統",
    description: "聯影 3T 超高場 MRI 旗艦系統，提供極致影像解析度。",
    highlights: ["3T 超高場", "旗艦影像品質", "科研級性能"],
    featured: true,
  },
  // UNITED IMAGING - PET-CT
  {
    id: "umi-vista",
    name: "uMI Vista",
    brand: "UNITED IMAGING",
    brandSlug: "united-imaging",
    category: "pet-ct",
    tagline: "數位 PET-CT 掃描儀",
    description: "聯影 uMI Vista 數位 PET-CT 系統，整合功能與解剖影像。",
    highlights: ["數位 PET 技術", "CT 同機整合", "腫瘤診斷"],
    featured: true,
  },
  // PERLOVE
  {
    id: "vet1120",
    name: "PERLOVE VET1120",
    nameEn: "Veterinary Mobile Digital C-arm",
    brand: "PERLOVE",
    brandSlug: "perlove",
    category: "veterinary",
    tagline: "獸醫移動式數位 C-arm 系統",
    description:
      "PERLOVE VET1120 為緊湊型移動式數位 C-arm，提供獸醫骨科、創傷及軟組織手術的即時透視導引 — 結合 5.0 kW 成像功率、整合式工作站及節省空間的設計。",
    highlights: [],
    brochure: "/brochures/vet1120-product-brochure.pdf",
  },
  // VETOO
  {
    id: "vf1",
    name: "VETOO VF1",
    nameEn: "Veterinary Dynamic DR System",
    brand: "VETOO",
    brandSlug: "vetoo",
    category: "veterinary",
    tagline: "新一代獸醫動態數位放射影像系統",
    description:
      "VETOO VF1 專為智能寵物影像設計的動態 DR 系統，支援 30 fps 動態成像、最長 15 分鐘透視錄影及可選 DSA 模組，涵蓋食道/肺部/關節定位、造影及介入等臨床應用。配備 17×17 吋平板探測器、32kW 高壓發生器（125kV / 400mA）及獸醫專用軟件。",
    highlights: [],
    brochure: "/brochures/vf1-product-brochure.pdf",
    featured: true,
  },
];

export function getBrandBySlug(slug: string) {
  return brands.find((b) => b.slug === slug);
}

export function getBrandHref(brand: Brand) {
  return brand.pageHref ?? `/brands/${brand.slug}`;
}

export function getProductsByBrand(slug: string) {
  return products.filter((p) => p.brandSlug === slug);
}

export function getProductById(id: string) {
  return products.find((p) => p.id === id);
}

export function getProductHref(id: string) {
  return `/products/${id}`;
}

export function getProductImage(id: string) {
  const product = getProductById(id);
  return product?.image ?? `/images/products/${id}.jpg`;
}

export function getHeroProduct() {
  return products.find((p) => p.hero);
}

export function getFeaturedProducts() {
  return products.filter((p) => p.featured && !p.hero);
}

export function getRelatedProducts(product: Product, limit = 3) {
  return products
    .filter(
      (p) =>
        p.brandSlug === product.brandSlug &&
        p.category === product.category &&
        p.id !== product.id,
    )
    .slice(0, limit);
}

export function getCategoryLabel(category: ProductCategory, locale: Locale) {
  return getDictionary(locale).categories[category];
}
