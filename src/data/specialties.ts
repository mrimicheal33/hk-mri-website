import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Bone,
  Droplet,
  Droplets,
  Heart,
  HeartPulse,
  PawPrint,
  Scan,
  Shield,
  Siren,
  Sparkles,
  Stethoscope,
  Syringe,
} from "lucide-react";
import {
  getBrandBySlug,
  getProductById,
  getProductsByBrand,
  type Product,
} from "@/data/products";

export type SpecialtyId =
  | "aesthetician"
  | "anesthesiologist"
  | "cardiologist"
  | "cardiothoracic"
  | "chiropractor"
  | "emergency"
  | "gastroenterologist"
  | "gp"
  | "obgyn"
  | "orthopedic"
  | "physiotherapist"
  | "radiologist"
  | "urologist"
  | "veterinarian";

export type SpecialtyRecommendation =
  | { type: "product"; id: string }
  | { type: "brand"; slug: string };

/** Alphabetical — drives static specialty routes + nav ordering base. */
export const specialtyIds: SpecialtyId[] = [
  "aesthetician",
  "anesthesiologist",
  "cardiologist",
  "cardiothoracic",
  "chiropractor",
  "emergency",
  "gastroenterologist",
  "gp",
  "obgyn",
  "orthopedic",
  "physiotherapist",
  "radiologist",
  "urologist",
  "veterinarian",
];

export const specialtyIcons: Record<SpecialtyId, LucideIcon> = {
  aesthetician: Sparkles,
  anesthesiologist: Syringe,
  cardiologist: HeartPulse,
  cardiothoracic: HeartPulse,
  chiropractor: Bone,
  emergency: Siren,
  gastroenterologist: Droplets,
  gp: Stethoscope,
  obgyn: Heart,
  orthopedic: Shield,
  physiotherapist: Activity,
  radiologist: Scan,
  urologist: Droplet,
  veterinarian: PawPrint,
};

/**
 * Canonical product matches per specialty (drives specialty landing pages).
 * Prefer explicit product IDs over whole-brand expansion so mammography /
 * PET-CT etc. only appear where clinically appropriate.
 */
export const specialtyRecommendations: Record<
  SpecialtyId,
  SpecialtyRecommendation[]
> = {
  // High-frequency / small-parts portable US for facial vascular mapping
  aesthetician: [
    { type: "product", id: "sonoeye" },
    { type: "product", id: "vinno-a3" },
    { type: "product", id: "vinno-a5" },
  ],

  // Regional anesthesia, nerve blocks, needle guidance (VINNO 6/10 official)
  anesthesiologist: [
    { type: "product", id: "sonoeye" },
    { type: "product", id: "vinno6" },
    { type: "product", id: "vinno8" },
    { type: "product", id: "vinno10" },
  ],

  // Echo + cardiac-capable CT / PET / MRI
  cardiologist: [
    { type: "product", id: "sonoeye" },
    { type: "product", id: "vinno6" },
    { type: "product", id: "vinno8" },
    { type: "product", id: "vinno10" },
    { type: "product", id: "vinno-r300" },
    { type: "product", id: "uct-780" },
    { type: "product", id: "uct-960" },
    { type: "product", id: "umi-vista" },
    { type: "product", id: "umr-680" },
    { type: "product", id: "umr-omega" },
  ],

  // Surgical planning: CT/MRI/PET + bedside cardiac/thoracic POCUS (no mammo)
  cardiothoracic: [
    { type: "product", id: "sonoeye" },
    { type: "product", id: "vinno6" },
    { type: "product", id: "vinno10" },
    { type: "product", id: "uct-780" },
    { type: "product", id: "uct-960" },
    { type: "product", id: "umr-670" },
    { type: "product", id: "umr-680" },
    { type: "product", id: "umr-omega" },
    { type: "product", id: "umi-vista" },
  ],

  // MSK soft-tissue portable US
  chiropractor: [
    { type: "product", id: "sonoeye" },
    { type: "product", id: "vinno6" },
    { type: "product", id: "vinno-a3" },
    { type: "product", id: "vinno-a5" },
  ],

  // ED / ICU POCUS + trauma / acute CT
  emergency: [
    { type: "product", id: "sonoeye" },
    { type: "product", id: "vinno6" },
    { type: "product", id: "vinno10" },
    { type: "product", id: "vinno-a5" },
    { type: "product", id: "uct-780" },
    { type: "product", id: "uct-960" },
  ],

  // Liver elastography + abdominal / shared-service US (+ CT for staging)
  gastroenterologist: [
    { type: "product", id: "mini800" },
    { type: "product", id: "sonoeye" },
    { type: "product", id: "vinno10" },
    { type: "product", id: "vinno-r300" },
    { type: "product", id: "vinno-r700" },
    { type: "product", id: "uct-780" },
  ],

  // Clinic bedside triage + liver screening + compact colour Doppler
  gp: [
    { type: "product", id: "sonoeye" },
    { type: "product", id: "mini800" },
    { type: "product", id: "vinno-a3" },
    { type: "product", id: "vinno-a5" },
    { type: "product", id: "vinno6" },
  ],

  // OB/GYN US + both mammography systems
  obgyn: [
    { type: "product", id: "sonoeye" },
    { type: "product", id: "vinno8" },
    { type: "product", id: "vinno-a3" },
    { type: "product", id: "vinno-a5" },
    { type: "product", id: "vinno-r300" },
    { type: "product", id: "vinno-r700" },
    { type: "product", id: "navigator-3000a" },
    { type: "product", id: "umammo-890i" },
  ],

  // MSK US + CT/MRI/DR for bone & joint (no mammo / PET)
  orthopedic: [
    { type: "product", id: "sonoeye" },
    { type: "product", id: "vinno6" },
    { type: "product", id: "vinno-a3" },
    { type: "product", id: "vinno-a5" },
    { type: "product", id: "uct-780" },
    { type: "product", id: "uct-960" },
    { type: "product", id: "udr-596i" },
    { type: "product", id: "umr-670" },
    { type: "product", id: "umr-680" },
    { type: "product", id: "umr-omega" },
  ],

  // MSK POCUS / rehab imaging
  physiotherapist: [
    { type: "product", id: "sonoeye" },
    { type: "product", id: "vinno6" },
    { type: "product", id: "vinno-a3" },
    { type: "product", id: "vinno-a5" },
  ],

  // Full diagnostic imaging suite + shared-service US + liver elastography
  radiologist: [
    { type: "product", id: "uct-780" },
    { type: "product", id: "uct-960" },
    { type: "product", id: "udr-596i" },
    { type: "product", id: "umammo-890i" },
    { type: "product", id: "umr-670" },
    { type: "product", id: "umr-680" },
    { type: "product", id: "umr-omega" },
    { type: "product", id: "umi-vista" },
    { type: "product", id: "navigator-3000a" },
    { type: "product", id: "mini800" },
    { type: "product", id: "vinno8" },
    { type: "product", id: "vinno10" },
    { type: "product", id: "vinno-r300" },
    { type: "product", id: "vinno-r700" },
  ],

  // Urology / small-parts / pelvic US (VINNO A3 official urology positioning)
  urologist: [
    { type: "product", id: "sonoeye" },
    { type: "product", id: "vinno-a3" },
    { type: "product", id: "vinno-a5" },
    { type: "product", id: "vinno8" },
    { type: "product", id: "vinno-r300" },
  ],

  veterinarian: [
    { type: "product", id: "vet1120" },
    { type: "product", id: "vf1" },
    { type: "product", id: "vinno-d6-vet" },
  ],
};

export function isSpecialtyId(value: string): value is SpecialtyId {
  return specialtyIds.includes(value as SpecialtyId);
}

export function getSpecialtyHref(id: string) {
  return `/specialties/${id}`;
}

/** Resolve recommended catalog products for a specialty (brand entries expand). */
export function getSpecialtyProducts(id: SpecialtyId): Product[] {
  const result: Product[] = [];
  const seen = new Set<string>();
  const vetCategories = new Set(["veterinary", "veterinary-carm"]);

  for (const rec of specialtyRecommendations[id]) {
    if (rec.type === "product") {
      const product = getProductById(rec.id);
      if (product && !seen.has(product.id)) {
        seen.add(product.id);
        result.push(product);
      }
      continue;
    }

    if (!getBrandBySlug(rec.slug)) continue;
    for (const product of getProductsByBrand(rec.slug)) {
      if (id !== "veterinarian" && vetCategories.has(product.category)) {
        continue;
      }
      if (!seen.has(product.id)) {
        seen.add(product.id);
        result.push(product);
      }
    }
  }

  return result.sort((a, b) =>
    a.name.localeCompare(b.name, undefined, { sensitivity: "base" }),
  );
}
