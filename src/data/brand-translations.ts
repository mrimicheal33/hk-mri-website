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
  sinomdt: {
    description:
      "National high-tech enterprise specialising in breast imaging and integrated breast health solutions — manufacturer of the 3rd-generation Navigator Series digital mammography systems.",
  },
  vinno: {
    description:
      "Innovative ultrasound technology for human clinical care — portable and cart-based colour Doppler systems (A3, A5, VINNO 6, 8, 10, R300, R700) on VLucid platforms with AI-assisted tools. D6 VET is a dedicated veterinary model for animal imaging.",
  },
};

export function getLocalizedBrand(brand: Brand, locale: Locale): Brand {
  if (locale === "en" && en[brand.slug]) {
    return { ...brand, ...en[brand.slug] };
  }
  return brand;
}
