import Image from "next/image";
import { Mini800PromoCaption } from "@/components/home/Mini800PromoCaption";

interface Mini800PortfolioImageProps {
  className?: string;
  captionTitle: string;
  captionSubtitle: string;
  sizes?: string;
}

export function Mini800PortfolioImage({
  className = "h-64 sm:h-72",
  captionTitle,
  captionSubtitle,
  sizes = "(max-width: 768px) 100vw, 20vw",
}: Mini800PortfolioImageProps) {
  return (
    <div className={`flex flex-col overflow-hidden rounded-lg bg-white ${className}`}>
      <div className="relative min-h-0 flex-1 overflow-hidden">
        <Image
          src="/images/products/mini800-card.png?v=4"
          alt="iLivTouch Mini800"
          fill
          unoptimized
          sizes={sizes}
          className="object-contain object-center"
        />
      </div>
      <div className="shrink-0 border-t border-[#eef2f6] bg-white px-2 py-2 sm:px-3 sm:py-2.5">
        <Mini800PromoCaption title={captionTitle} subtitle={captionSubtitle} />
      </div>
    </div>
  );
}
