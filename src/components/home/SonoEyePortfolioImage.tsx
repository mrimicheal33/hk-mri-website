import Image from "next/image";
import { SonoEyePromoTagline } from "@/components/home/SonoEyePromoTagline";

interface SonoEyePortfolioImageProps {
  className?: string;
  taglineClassName?: string;
  sizes?: string;
}

export function SonoEyePortfolioImage({
  className = "h-64 sm:h-72",
  taglineClassName,
  sizes = "(max-width: 768px) 100vw, 20vw",
}: SonoEyePortfolioImageProps) {
  return (
    <div className={`flex flex-col overflow-hidden rounded-lg bg-white ${className}`}>
      <div className="relative min-h-0 flex-1 overflow-hidden">
        <Image
          src="/images/products/sonoeye-portfolio.png"
          alt="CHISON SonoEye"
          fill
          unoptimized
          sizes={sizes}
          className="object-contain object-center"
        />
      </div>
      <div className="shrink-0 border-t border-[#eef2f6] bg-white px-2 py-2 sm:px-3 sm:py-2.5">
        <SonoEyePromoTagline className={taglineClassName} />
      </div>
    </div>
  );
}
