import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Bone,
  Droplets,
  Heart,
  HeartPulse,
  PawPrint,
  Scan,
  Shield,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import {
  getBrandBySlug,
  getProductById,
  getProductsByBrand,
  type Product,
} from "@/data/products";

export type SpecialtyId =
  | "aesthetician"
  | "cardiothoracic"
  | "chiropractor"
  | "gastroenterologist"
  | "gp"
  | "obgyn"
  | "orthopedic"
  | "physiotherapist"
  | "radiologist"
  | "veterinarian";

export type SpecialtyRecommendation =
  | { type: "product"; id: string }
  | { type: "brand"; slug: string };

export const specialtyIds: SpecialtyId[] = [
  "aesthetician",
  "cardiothoracic",
  "chiropractor",
  "gastroenterologist",
  "gp",
  "obgyn",
  "orthopedic",
  "physiotherapist",
  "radiologist",
  "veterinarian",
];

export const specialtyIcons: Record<SpecialtyId, LucideIcon> = {
  aesthetician: Sparkles,
  cardiothoracic: HeartPulse,
  chiropractor: Bone,
  gastroenterologist: Droplets,
  gp: Stethoscope,
  obgyn: Heart,
  orthopedic: Shield,
  physiotherapist: Activity,
  radiologist: Scan,
  veterinarian: PawPrint,
};

/** Canonical product/brand matches per specialty (drives specialty landing pages). */
export const specialtyRecommendations: Record<
  SpecialtyId,
  SpecialtyRecommendation[]
> = {
  aesthetician: [{ type: "product", id: "sonoeye" }],
  cardiothoracic: [
    { type: "brand", slug: "united-imaging" },
    { type: "product", id: "sonoeye" },
  ],
  chiropractor: [{ type: "product", id: "sonoeye" }],
  gastroenterologist: [
    { type: "product", id: "sonoeye" },
    { type: "product", id: "mini800" },
  ],
  gp: [
    { type: "product", id: "sonoeye" },
    { type: "product", id: "mini800" },
  ],
  obgyn: [
    { type: "product", id: "sonoeye" },
    { type: "product", id: "navigator-3000a" },
  ],
  orthopedic: [
    { type: "brand", slug: "united-imaging" },
    { type: "product", id: "sonoeye" },
  ],
  physiotherapist: [{ type: "product", id: "sonoeye" }],
  radiologist: [
    { type: "brand", slug: "united-imaging" },
    { type: "product", id: "navigator-3000a" },
  ],
  veterinarian: [
    { type: "product", id: "vet1120" },
    { type: "product", id: "vf1" },
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
