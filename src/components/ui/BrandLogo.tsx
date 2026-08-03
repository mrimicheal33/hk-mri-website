import Image from "next/image";

interface BrandLogoProps {
  src: string;
  alt: string;
  align?: "left" | "center";
  className?: string;
  /** Fixed cap height for consistent rows (e.g. product cards). */
  size?: "default" | "uniform";
}

const LOGO_HEIGHT = {
  default: 40,
  uniform: 40,
} as const;

/** Per-brand cap heights tuned for even visual weight in shared rows. */
const UNIFORM_LOGO_HEIGHT: Record<string, number> = {
  "/images/brands/chison.webp": 52,
  "/images/brands/hisky.png": 40,
  "/images/brands/perlove.png": 32,
  "/images/brands/vetoo.svg": 36,
  "/images/brands/united-imaging.png": 40,
  "/images/brands/vinno.png": 40,
};

/** Fixed row height for portfolio / product-card logo bands. */
export const BRAND_LOGO_SLOT_HEIGHT = 56;

function getLogoHeight(src: string, size: keyof typeof LOGO_HEIGHT) {
  const base =
    size === "uniform" && UNIFORM_LOGO_HEIGHT[src]
      ? UNIFORM_LOGO_HEIGHT[src]
      : LOGO_HEIGHT[size];
  if (size === "uniform") {
    return Math.min(base, BRAND_LOGO_SLOT_HEIGHT);
  }
  return base;
}

const BRAND_NATIVE_SIZE: Record<string, { width: number; height: number }> = {
  "/images/brands/chison.webp": { width: 412, height: 266 },
  "/images/brands/united-imaging.png": { width: 616, height: 184 },
  "/images/brands/perlove.png": { width: 303, height: 82 },
  "/images/brands/hisky.png": { width: 155, height: 42 },
  "/images/brands/vetoo.svg": { width: 160, height: 40 },
  "/images/brands/vinno.png": { width: 320, height: 80 },
};

function getDisplayDimensions(src: string, targetHeight: number) {
  const native = BRAND_NATIVE_SIZE[src];
  if (!native) {
    return { width: Math.round(targetHeight * 4), height: targetHeight };
  }
  const width = Math.round(targetHeight * (native.width / native.height));
  return { width, height: targetHeight };
}

export function BrandLogo({
  src,
  alt,
  align = "left",
  className = "",
  size = "default",
}: BrandLogoProps) {
  const height = getLogoHeight(src, size);
  const { width } = getDisplayDimensions(src, height);

  return (
    <div
      className={`flex items-center min-w-0 ${
        align === "center" ? "w-full justify-center" : "justify-start"
      } ${className}`}
      style={{ height: `${height}px` }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        quality={100}
        unoptimized
        className={align === "center" ? "mx-auto" : ""}
        style={{
          width: `${width}px`,
          height: `${height}px`,
          maxWidth: "100%",
        }}
      />
    </div>
  );
}

/** Fixed slot height — all brand logos share the same baseline row. */
export function BrandLogoSlot({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-end shrink-0 overflow-hidden ${className}`}
      style={{ height: `${BRAND_LOGO_SLOT_HEIGHT}px` }}
    >
      <BrandLogo src={src} alt={alt} size="uniform" />
    </div>
  );
}
