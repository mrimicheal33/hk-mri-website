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
  | "veterinary"
  | "veterinary-carm";

export interface ProductVideo {
  title: string;
  youtubeId?: string;
  src?: string;
  start?: number;
}

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
  videos?: ProductVideo[];
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
    description:
      "UNITED IMAGING 致力於為全球客戶提供、研發及生產高性能先進醫學影像、放射治療設備、生命科學儀器，並提供智能數位化解決方案。",
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
  {
    slug: "sinomdt",
    name: "SINO MDT",
    nameEn: "SINO Medical-Device Technology",
    logo: "/images/brands/sinomdt.svg",
    description:
      "國家級高新技術企業，專注乳腺影像及整合乳腺健康解決方案 — 第三代 Navigator 系列數位乳腺攝影系統領先製造商。",
    color: "#1e5a8a",
    pageHref: "/products/navigator-3000a",
  },
];

export const categoryLabels: Record<ProductCategory, string> = {
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
};

/** Preferred section order on brand pages. */
export const categoryDisplayOrder: ProductCategory[] = [
  "liver-fibrosis",
  "ultrasound",
  "radiography",
  "diagnostic",
  "mri",
  "ct",
  "mammography",
  "pet-ct",
  "veterinary-carm",
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
    videos: [
      { youtubeId: "qxoAgtkjUqQ", title: "CHISON SonoEye" },
      {
        youtubeId: "pbaLXwrEeXA",
        title: "SonoEye Live Show",
        start: 936,
      },
      { youtubeId: "W2et0Uaa8BQ", title: "SonoEye Operation Guide" },
    ],
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
    videos: [{ youtubeId: "zPa64aWNBiw", title: "iLivTouch Mini800" }],
  },
  // UNITED IMAGING - CT
  {
    id: "uct-780",
    name: "uCT 780",
    nameEn: "United Imaging uCT 780 128-Slice CT System",
    brand: "UNITED IMAGING",
    brandSlug: "united-imaging",
    category: "ct",
    tagline: "Precision and Speed — 128 層高端 CT",
    description:
      "UNITED IMAGING uCT 780 為 128 層高端 CT 系統 — 以「Precision and Speed」為核心理念，結合 Z-Detector 一體化探測器、70 kV 低劑量成像、uDose 智能劑量調控、0.5 mm 薄層重建及 GWB 加速重建板，為醫院及影像中心提供快速、低劑量、高品質的斷層影像。",
    highlights: [],
    featured: true,
    image: "/images/products/uct-780-card.png?v=1",
    brochure: "/brochures/uct-780-brochure.pdf",
  },
  {
    id: "uct-960",
    name: "uCT 960+",
    nameEn: "United Imaging uCT 960+ 640-Slice CT System",
    brand: "UNITED IMAGING",
    brandSlug: "united-imaging",
    category: "ct",
    tagline: "Attainable Intelligence. Simply Masterful. — 640 層超高端 CT",
    description:
      "UNITED IMAGING uCT 960+ 為 640 層超高端 CT 旗艦系統 — 以「Attainable Intelligence. Simply Masterful.」為核心理念，結合 16 cm Z 軸探測器覆蓋、320 排 640 層、0.25 秒旋轉速度、82 cm 超寬孔徑及 uAI 智能平台，為醫院及影像中心提供心血管、卒中、腫瘤及創傷等全面臨床解決方案。",
    highlights: [],
    featured: true,
    image: "/images/products/uct-960-card.png?v=1",
    brochure: "/brochures/uct-960-brochure.pdf",
  },
  // UNITED IMAGING - DR
  {
    id: "udr-596i",
    name: "uDR 596i",
    nameEn: "United Imaging uDR 596i Digital Radiography System",
    brand: "UNITED IMAGING",
    brandSlug: "united-imaging",
    category: "radiography",
    tagline: "Performance within Reach — 全自動落地式 DR 系統",
    description:
      "UNITED IMAGING uDR 596i 為革命性全自動落地式數位放射攝影（DR）系統，配備無線高清平板探測器 — 結合 Genius Detector、智能控制、全自動管球-探測器追蹤及綜合進階臨床應用，提升放射科工作流程效率及影像品質。",
    highlights: [],
    image: "/images/products/udr-596i-card.png?v=1",
    brochure: "/brochures/udr-596i-brochure.pdf",
  },
  // UNITED IMAGING - Mammography
  {
    id: "umammo-890i",
    name: "uMammo 890i",
    nameEn: "United Imaging uMammo 890i Low-Dose 3D Mammography System",
    brand: "UNITED IMAGING",
    brandSlug: "united-imaging",
    category: "mammography",
    tagline: "Pushing the Boundaries of Breast Imaging — 低劑量 3D 乳腺攝影",
    description:
      "UNITED IMAGING uMammo 890i 為低劑量 3D 乳腺攝影系統 — 以「Pushing the Boundaries of Breast Imaging」為核心理念，結合 CMOS 3D 成像平台、U-View 2D 智能乳腺攝影技術及可選乳腺診斷工作站，以低劑量實現精細結構的卓越可視化，為女性健康提供細緻關懷。",
    highlights: [],
    featured: true,
    image: "/images/products/umammo-890i-card.png?v=1",
    brochure: "/brochures/umammo-890i-brochure.pdf",
  },
  // UNITED IMAGING - MRI
  {
    id: "umr-670",
    name: "uMR 670",
    nameEn: "United Imaging uMR 670 1.5T MRI System",
    brand: "UNITED IMAGING",
    brandSlug: "united-imaging",
    category: "mri",
    tagline: "Freedom Experience · Expand MRI — 1.5T 超導寬孔徑 MRI",
    description:
      "UNITED IMAGING uMR 670 為 uAIFI 賦能的 1.5T 超導寬孔徑 MRI 系統，以「3T Performance from 1.5T Wide-bore System」為核心理念 — 結合 70 cm 星輝環境寬孔徑磁體、48+ 獨立接收通道 RF 系統、DeepRecon 深度學習重建及 EasySense/EasyScan/EasyPlan 智能工作流，為綜合醫院提供接近 3T 的影像品質與更佳患者體驗。",
    highlights: [],
    featured: true,
    image: "/images/products/umr-670-card.png?v=1",
    brochure: "/brochures/umr-670-brochure.pdf",
  },
  {
    id: "umr-680",
    name: "uMR 680",
    nameEn: "United Imaging uMR 680 1.5T MRI System",
    brand: "UNITED IMAGING",
    brandSlug: "united-imaging",
    category: "mri",
    tagline: "1.5T Wide Bore with 3.0T-like Performance",
    description:
      "UNITED IMAGING uMR 680 為 uAIFI 賦能的進階 1.5T 超導寬孔徑 MRI 系統 — 以「3.0T-like Performance」為核心理念，結合 70 cm 超均勻寬孔徑磁體、45 mT/m 梯度、72+ RF 接收通道、uCS 2.0 超高速重建及 DeepRecon/EasySense/QScan 智能技術，為醫院及影像中心提供接近 3T 的影像品質、工作流程效率及患者舒適度。",
    highlights: [],
    image: "/images/products/umr-680-card.png?v=1",
    brochure: "/brochures/umr-680-brochure.pdf",
  },
  {
    id: "umr-omega",
    name: "uMR OMEGA",
    nameEn: "United Imaging uMR OMEGA 3T Ultra-Wide Bore MRI System",
    brand: "UNITED IMAGING",
    brandSlug: "united-imaging",
    category: "mri",
    tagline: "Think BIG — 全球首款 75 cm 超寬孔徑 3T MRI",
    description:
      "UNITED IMAGING uMR OMEGA 為 uAIFI 賦能的 3T 超寬孔徑 MRI 旗艦系統 — 以「Think BIG」為核心理念，結合全球首款 75 cm 超寬孔徑 3T 磁體、310 kg 承重檢查床、3.5 MW 梯度功率放大器、60×60×50 cm 視野及 ACS/DeepRecon/EasySense/QScan 智能技術，為醫院及影像中心提供極致影像解析度、擴展患者准入及高效工作流程。",
    highlights: [],
    featured: true,
    image: "/images/products/umr-omega-card.png?v=1",
    brochure: "/brochures/umr-omega-brochure.pdf",
  },
  // UNITED IMAGING - PET-CT
  {
    id: "umi-vista",
    name: "uMI Vista",
    nameEn: "United Imaging uMI Vista Digital PET-CT System",
    brand: "UNITED IMAGING",
    brandSlug: "united-imaging",
    category: "pet-ct",
    tagline: "Clarity. Profound. — 數位 PET-CT 系統",
    description:
      "UNITED IMAGING uMI Vista 為數位 PET-CT 系統 — 以「Clarity. Profound.」為核心理念，結合 Integrated-Light-Guide 數位 PET 技術、160 層 CT、300 ps TOF、24 cm 軸向視野及 HYPER DPR 深度學習重建，為腫瘤、神經及心臟等領域提供高品質功能與解剖影像及全面臨床應用。",
    highlights: [],
    featured: true,
    image: "/images/products/umi-vista-card.png?v=1",
    brochure: "/brochures/umi-vista-brochure.pdf",
  },
  // SINO MDT - Mammography
  {
    id: "navigator-3000a",
    name: "SINO MDT Navigator 3000A",
    nameEn: "3D Tomosynthesis Digital Mammography",
    brand: "SINO MDT",
    brandSlug: "sinomdt",
    category: "mammography",
    tagline: "Care Your Concern — 第三代 3D 斷層合成數位乳腺攝影",
    description:
      "SINO MDT Navigator 3000A（Navigator Star 系列）為第三代高端數位乳腺攝影系統 — 以優雅流線型外觀及人性化設計，配備 2D、3D 斷層合成及 2D+3D 組合曝光模式、TIDE 低劑量成像技術及 AI 智能分析，為乳腺篩查及診斷提供高解析度影像與更低輻射劑量。",
    highlights: [],
    featured: true,
    image: "/images/products/navigator-3000a-card.jpg",
    brochure: "/brochures/navigator-3000a-brochure.pdf",
  },
  // PERLOVE
  {
    id: "vet1120",
    name: "PERLOVE VET1120",
    nameEn: "Veterinary Mobile Digital C-arm",
    brand: "PERLOVE",
    brandSlug: "perlove",
    category: "veterinary-carm",
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

/** Brands sorted A→Z by display name — use for filters, footers, and selection UIs. */
export function getBrandsSorted(): Brand[] {
  return [...brands].sort((a, b) => a.name.localeCompare(b.name));
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
