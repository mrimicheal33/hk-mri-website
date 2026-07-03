export interface SonoEyeProbe {
  slug: string;
  model: string;
  image: string;
  heroImage: string;
}

export type SonoEyeProbeSlug = "p1" | "p2" | "p3" | "p5" | "p6";

export const sonoeyeProbes: SonoEyeProbe[] = [
  {
    slug: "p1",
    model: "P1",
    image: "/images/products/sonoeye-probes/p1.png",
    heroImage: "/images/products/sonoeye-probes/p1-hero.png",
  },
  {
    slug: "p2",
    model: "P2",
    image: "/images/products/sonoeye-probes/p2.png",
    heroImage: "/images/products/sonoeye-probes/p2-hero.png",
  },
  {
    slug: "p3",
    model: "P3",
    image: "/images/products/sonoeye-probes/p3.png",
    heroImage: "/images/products/sonoeye-probes/p3-hero.png",
  },
  {
    slug: "p5",
    model: "P5",
    image: "/images/products/sonoeye-probes/p5.png",
    heroImage: "/images/products/sonoeye-probes/p5-hero.png",
  },
  {
    slug: "p6",
    model: "P6",
    image: "/images/products/sonoeye-probes/p6.png",
    heroImage: "/images/products/sonoeye-probes/p6-hero.png",
  },
];

export function getSonoEyeProbeBySlug(slug: string): SonoEyeProbe | undefined {
  return sonoeyeProbes.find((p) => p.slug === slug);
}

export function getSonoEyeProbeHref(slug: string): string {
  return `/products/sonoeye/${slug}`;
}
