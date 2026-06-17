import Image from "next/image";

interface BrandLogoProps {
  src: string;
  alt: string;
  align?: "left" | "center";
  className?: string;
}

export function BrandLogo({
  src,
  alt,
  align = "left",
  className = "",
}: BrandLogoProps) {
  return (
    <div
      className={`relative h-10 w-[168px] shrink-0 ${className}`}
      aria-hidden={false}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="168px"
        className={`object-contain ${
          align === "center" ? "object-center" : "object-left"
        }`}
      />
    </div>
  );
}
