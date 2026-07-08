import type { Locale } from "@/i18n/config";
import type { Brand } from "./products";

const en: Record<
  string,
  { description: string; exclusive?: string }
> = {
  chison: {
    description:
      "Global leader in ultrasound imaging solutions, including the SonoEye handheld ultrasound.",
  },
  mindray: {
    description:
      "As a world-leading medical device supplier specializing in ultrasound, radiography, and liver fibrosis assessment, Mindray believes it is time for the healthcare industry to respect every life and prioritize patient care.",
  },
  "united-imaging": {
    description:
      "United Imaging is dedicated to providing, developing and producing high-performance advanced medical imaging, radiotherapy equipment, life science instruments and offers intelligent digital solutions to customers worldwide.",
  },
  perlove: {
    description: "Specialist in veterinary imaging with mobile digital C-arm systems.",
  },
  ilivtouch: {
    description:
      "Non-invasive liver disease management with vibration-controlled transient elastography for fibrosis and steatosis assessment.",
  },
  vetoo: {
    description:
      "Specialist in veterinary dynamic digital radiography (Dynamic DR) and intelligent pet imaging solutions.",
  },
};

export function getLocalizedBrand(brand: Brand, locale: Locale): Brand {
  if (locale === "en" && en[brand.slug]) {
    return { ...brand, ...en[brand.slug] };
  }
  return brand;
}
