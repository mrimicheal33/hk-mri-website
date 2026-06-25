import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/get-dictionary";

export type ProductCategory =
  | "ultrasound"
  | "radiography"
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
}

export const brands: Brand[] = [
  {
    slug: "chison",
    name: "CHISON",
    nameEn: "CHISON Medical Technologies",
    logo: "/images/brands/chison.webp",
    description: "全球領先的超聲波影像解決方案供應商，SonoEye 手持超聲波為港澳獨家代理。",
    exclusive: "港澳獨家代理",
    color: "#2563eb",
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
    slug: "united-imaging",
    name: "UNITED IMAGING",
    nameEn: "United Imaging Healthcare",
    logo: "/images/brands/united-imaging.png",
    description: "高端醫學影像設備製造商，提供 MRI、CT、DR、乳腺及 PET-CT 全系統解決方案。",
    color: "#0f4c5c",
  },
  {
    slug: "perlove",
    name: "Perlove",
    nameEn: "Perlove Medical",
    logo: "/images/brands/perlove.webp",
    description: "專注獸醫影像設備，提供移動式數位 C-arm 系統。",
    color: "#b91c1c",
  },
  {
    slug: "ilivtouch",
    name: "iLivTouch",
    nameEn: "Hisky Medical iLivTouch",
    logo: "/images/brands/ilivtouch.svg",
    description: "非侵入性肝纖維化及脂肪肝管理系統，採用振動控制瞬時彈性成像技術。",
    color: "#0097a7",
  },
];

export const categoryLabels: Record<ProductCategory, string> = {
  ultrasound: "超聲波系統",
  radiography: "放射影像",
  mri: "磁共振 (MRI)",
  ct: "電腦斷層 (CT)",
  mammography: "乳腺攝影",
  "pet-ct": "PET-CT",
  diagnostic: "診斷檢測",
  veterinary: "獸醫影像",
};

export const products: Product[] = [
  // CHISON - Hero Product
  {
    id: "sonoeye",
    name: "SonoEye",
    nameEn: "CHISON SonoEye Handheld Ultrasound",
    brand: "CHISON",
    brandSlug: "chison",
    category: "ultrasound",
    tagline: "口袋大小的專業超聲波，隨時隨地精準診斷",
    description:
      "CHISON SonoEye 是一款革命性的手持超聲波設備，可連接 iOS 智能手機或平板，實現「一指操作 (Go Thumb-play)」的流暢體驗。適用於 ICU、普通科、脊醫、醫美等多個臨床場景，支援 SonoMSK、SonoDiaph 等 AI 輔助功能。",
    highlights: [
      "口袋大小，單手操作",
      "iOS 原生整合，開機即用",
      "IP67 防水防塵 / MIL-STD-810G 軍規認證",
      "AI 肺部分析、MSK 精準注射導航",
      "適用 ICU、GP、脊醫、醫美等場景",
    ],
    featured: true,
    hero: true,
  },
  // MINDRAY - Ultrasound
  {
    id: "consona-n6",
    name: "Consona N6",
    brand: "MINDRAY",
    brandSlug: "mindray",
    category: "ultrasound",
    tagline: "入門級診斷超聲波系統",
    description: "MINDRAY Consona 系列入門型號，提供可靠的基礎超聲波診斷功能。",
    highlights: ["高性價比", "穩定可靠", "適合基層診所"],
  },
  {
    id: "consona-n7",
    name: "Consona N7",
    brand: "MINDRAY",
    brandSlug: "mindray",
    category: "ultrasound",
    tagline: "中階診斷超聲波系統",
    description: "功能更豐富的中階 Consona 型號，滿足更多臨床應用需求。",
    highlights: ["進階成像技術", "多探頭支援", "臨床應用廣泛"],
  },
  {
    id: "consona-n9",
    name: "Consona N9",
    brand: "MINDRAY",
    brandSlug: "mindray",
    category: "ultrasound",
    tagline: "旗艦診斷超聲波系統",
    description: "Consona 系列旗艦型號，配備最先進的超聲波成像技術與 AI 輔助功能。",
    highlights: ["旗艦級成像", "AI 智能輔助", "全面臨床覆蓋"],
    featured: true,
  },
  // MINDRAY - Radiography
  {
    id: "digieye-330",
    name: "DigiEye 330",
    brand: "MINDRAY",
    brandSlug: "mindray",
    category: "radiography",
    tagline: "數位放射攝影系統",
    description: "MINDRAY DigiEye 330 系列數位 X 光攝影系統。",
    highlights: ["數位化影像", "快速成像", "低輻射劑量"],
  },
  {
    id: "digieye-350",
    name: "DigiEye 350",
    brand: "MINDRAY",
    brandSlug: "mindray",
    category: "radiography",
    tagline: "進階數位放射攝影系統",
    description: "DigiEye 350 系列，提供更高效的數位放射影像解決方案。",
    highlights: ["高解析度成像", "智能後處理", "工作流程優化"],
  },
  {
    id: "digieye-680",
    name: "DigiEye 680",
    brand: "MINDRAY",
    brandSlug: "mindray",
    category: "radiography",
    tagline: "高端數位放射攝影系統",
    description: "DigiEye 680 系列旗艦 DR 系統，適合大型醫院及影像中心。",
    highlights: ["旗艦 DR 性能", "大面積探測器", "醫院級應用"],
    featured: true,
  },
  // MINDRAY - Liver Fibrosis
  {
    id: "hepatus-5",
    name: "Hepatus 5",
    brand: "MINDRAY",
    brandSlug: "mindray",
    category: "ultrasound",
    tagline: "肝纖維化及脂肪肝掃描儀",
    description:
      "非侵入性肝纖維化及脂肪肝定量檢測系統，提供肝硬度 (LSM) 及脂肪變性 (CAP) 測量。",
    highlights: ["非侵入性檢測", "肝硬度定量", "脂肪肝評估", "即時結果"],
    featured: true,
  },
  // iLivTouch - Liver Fibrosis
  {
    id: "mini800",
    name: "Mini800",
    nameEn: "iLivTouch Mini800",
    brand: "iLivTouch",
    brandSlug: "ilivtouch",
    category: "diagnostic",
    tagline: "便攜式肝纖維化及脂肪肝掃描儀",
    description:
      "iLivTouch Mini800 採用振動控制瞬時彈性成像（TE）技術，提供肝硬度（LSM）及超聲衰減參數（UAP）定量測量，支援肝纖維化、肝硬化及脂肪肝非侵入性評估。",
    highlights: [
      "FDA 及 CE 認證",
      "LSM 及 UAP 定量檢測",
      "便攜式電池供電",
      "闊頻纖維化掃描探頭",
      "可選超聲波 B-mode 影像導引",
    ],
    brochure: "/brochures/mini800-ilivtouch.pdf",
    featured: true,
  },
  // MINDRAY - Mobile Radiography
  {
    id: "mobieye-700",
    name: "MobiEye 700",
    brand: "MINDRAY",
    brandSlug: "mindray",
    category: "radiography",
    tagline: "移動式數位放射攝影系統",
    description: "便攜式移動 DR 系統，適合 ICU、急診及行動不便患者床邊攝影。",
    highlights: ["移動便攜", "床邊攝影", "電動升降"],
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
  // Perlove
  {
    id: "vet1120",
    name: "VET1120",
    nameEn: "Veterinary Mobile Digital C-arm",
    brand: "Perlove",
    brandSlug: "perlove",
    category: "veterinary",
    tagline: "獸醫移動式數位 C-arm 系統",
    description: "Perlove VET1120 移動式數位 C-arm，專為獸醫外科手術影像導航設計。",
    highlights: ["移動式 C-arm", "數位成像", "獸醫外科專用"],
  },
];

export function getBrandBySlug(slug: string) {
  return brands.find((b) => b.slug === slug);
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
  return `/images/products/${id}.jpg`;
}

export function getHeroProduct() {
  return products.find((p) => p.hero);
}

export function getFeaturedProducts() {
  return products.filter((p) => p.featured && !p.hero);
}

export function getRelatedProducts(product: Product, limit = 3) {
  return products
    .filter((p) => p.brandSlug === product.brandSlug && p.id !== product.id)
    .slice(0, limit);
}

export function getCategoryLabel(category: ProductCategory, locale: Locale) {
  return getDictionary(locale).categories[category];
}
