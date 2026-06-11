import type { Locale } from "@/i18n/config";
import type { Brand } from "./products";

const en: Record<
  string,
  { description: string; exclusive?: string }
> = {
  chison: {
    description:
      "Global leader in ultrasound imaging solutions. Exclusive agent for SonoEye handheld ultrasound in Hong Kong and Macau.",
    exclusive: "HK & Macau Exclusive Agent",
  },
  mindray: {
    description:
      "World-leading medical device supplier covering ultrasound, radiography, and liver fibrosis assessment.",
  },
  "united-imaging": {
    description:
      "Premium medical imaging manufacturer offering MRI, CT, DR, mammography, and PET-CT systems.",
  },
  perlove: {
    description: "Specialist in veterinary imaging with mobile digital C-arm systems.",
  },
};

export function getLocalizedBrand(brand: Brand, locale: Locale): Brand {
  if (locale === "en" && en[brand.slug]) {
    return { ...brand, ...en[brand.slug] };
  }
  return brand;
}
