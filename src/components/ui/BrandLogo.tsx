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

/** Wordmarks that read larger at the same cap height. */
const UNIFORM_LOGO_HEIGHT: Record<string, number> = {
  "/images/brands/chison.webp": 52,
  "/images/brands/mindray.png": 30,
  "/images/brands/perlove.webp": 38,
  "/images/brands/ilivtouch.svg": 32,
};

function getLogoHeight(src: string, size: keyof typeof LOGO_HEIGHT) {
  if (size === "uniform" && UNIFORM_LOGO_HEIGHT[src]) {
    return UNIFORM_LOGO_HEIGHT[src];
  }
  return LOGO_HEIGHT[size];
}

const BRAND_NATIVE_SIZE: Record<string, { width: number; height: number }> = {
  "/images/brands/chison.webp": { width: 412, height: 266 },
  "/images/brands/mindray.png": { width: 192, height: 56 },
  "/images/brands/united-imaging.png": { width: 616, height: 184 },
  "/images/brands/perlove.webp": { width: 474, height: 381 },
  "/images/brands/ilivtouch.svg": { width: 200, height: 48 },
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
        align === "center" ? "justify-center" : "justify-start"
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

/** Fixed slot height — all brand logos align on the same baseline row. */
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
      className={`h-14 flex items-end shrink-0 ${className}`}
    >
      <BrandLogo src={src} alt={alt} size="uniform" />
    </div>
  );
}
