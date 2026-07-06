import Image from "next/image";
import { PerlovePromoCaption } from "@/components/home/PerlovePromoCaption";
import {
  PORTFOLIO_IMAGE_CAPTION_CLASS,
  PORTFOLIO_IMAGE_SHELL_CLASS,
} from "@/components/home/portfolioImageShared";

interface Vet1120PortfolioImageProps {
  className?: string;
  captionTitle: string;
  captionSubtitle: string;
  sizes?: string;
}

export function Vet1120PortfolioImage({
  className = "h-64 sm:h-72",
  captionTitle,
  captionSubtitle,
  sizes = "(max-width: 768px) 100vw, 20vw",
}: Vet1120PortfolioImageProps) {
  return (
    <div className={`${PORTFOLIO_IMAGE_SHELL_CLASS} ${className}`}>
      <div className="relative min-h-0 flex-1 overflow-hidden">
        <Image
          src="/images/products/vet1120-card.png?v=7"
          alt="PERLOVE VET1120 Series"
          fill
          unoptimized
          quality={100}
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-contain object-center"
          style={{ imageRendering: "auto" }}
        />
      </div>
      <div className={PORTFOLIO_IMAGE_CAPTION_CLASS}>
        <PerlovePromoCaption title={captionTitle} subtitle={captionSubtitle} />
      </div>
    </div>
  );
}
