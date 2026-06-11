import type { Locale } from "@/i18n/config";
import type { Product } from "./products";

export interface ProductLocaleFields {
  tagline: string;
  description: string;
  highlights: string[];
}

const en: Record<string, ProductLocaleFields> = {
  sonoeye: {
    tagline: "Pocket-sized professional ultrasound for diagnosis anywhere",
    description:
      "CHISON SonoEye is a revolutionary handheld ultrasound that connects to iOS smartphones and tablets for a seamless Go Thumb-play experience. Ideal for ICU, general practice, chiropractic, and aesthetic medicine, with AI-assisted features including SonoMSK and SonoDiaph.",
    highlights: [
      "Pocket-sized, one-hand operation",
      "Native iOS integration, ready on startup",
      "IP67 waterproof / MIL-STD-810G certified",
      "AI lung analysis and MSK injection guidance",
      "ICU, GP, chiropractic, and aesthetic use cases",
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
      "Perlove VET1120 mobile digital C-arm designed for veterinary surgical image guidance.",
    highlights: ["Mobile C-arm", "Digital imaging", "Veterinary surgery"],
  },
};

export function getLocalizedProduct(
  product: Product,
  locale: Locale
): Product & ProductLocaleFields {
  if (locale === "en" && en[product.id]) {
    return { ...product, ...en[product.id] };
  }
  return {
    ...product,
    tagline: product.tagline,
    description: product.description,
    highlights: product.highlights,
  };
}
