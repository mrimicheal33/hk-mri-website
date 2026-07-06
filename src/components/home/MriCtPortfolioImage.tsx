import Image from "next/image";
import { Mini800PromoCaption } from "@/components/home/Mini800PromoCaption";
import {
  PORTFOLIO_IMAGE_CAPTION_CLASS,
  PORTFOLIO_IMAGE_SHELL_CLASS,
} from "@/components/home/portfolioImageShared";

interface MriCtPortfolioImageProps {
  className?: string;
  captionTitle: string;
  captionSubtitle: string;
  sizes?: string;
}

export function MriCtPortfolioImage({
  className = "h-64 sm:h-72",
  captionTitle,
  captionSubtitle,
  sizes = "(max-width: 768px) 100vw, 33vw",
}: MriCtPortfolioImageProps) {
  return (
    <div className={`${PORTFOLIO_IMAGE_SHELL_CLASS} ${className}`}>
      <div className="relative min-h-0 flex-1 overflow-hidden bg-surface-muted">
        <Image
          src="/images/products/umr-680-hero.png"
          alt="UNITED IMAGING MRI & CT Scan Systems"
          fill
          unoptimized
          sizes={sizes}
          className="object-cover object-center"
        />
      </div>
      <div className={PORTFOLIO_IMAGE_CAPTION_CLASS}>
        <Mini800PromoCaption
          title={captionTitle}
          subtitle={captionSubtitle}
          titleClassName="text-[#1a3a6e]"
        />
      </div>
    </div>
  );
}
