import Image from "next/image";
import { SonoEyePromoTagline } from "@/components/home/SonoEyePromoTagline";
import {
  PORTFOLIO_IMAGE_CAPTION_CLASS,
  PORTFOLIO_IMAGE_SHELL_CLASS,
} from "@/components/home/portfolioImageShared";

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
    <div className={`${PORTFOLIO_IMAGE_SHELL_CLASS} ${className}`}>
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
      <div className={PORTFOLIO_IMAGE_CAPTION_CLASS}>
        <SonoEyePromoTagline className={taglineClassName} />
      </div>
    </div>
  );
}
