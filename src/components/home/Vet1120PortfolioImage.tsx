import Image from "next/image";
import { PerlovePromoCaption } from "@/components/home/PerlovePromoCaption";

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
    <div className={`flex flex-col overflow-hidden rounded-lg bg-white ${className}`}>
      <div className="relative min-h-0 flex-1 overflow-hidden">
        <Image
          src="/images/products/vet1120-card.png?v=7"
          alt="Perlove VET1120 Series"
          fill
          unoptimized
          quality={100}
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-contain object-center"
          style={{ imageRendering: "auto" }}
        />
      </div>
      <div className="shrink-0 border-t border-[#eef2f6] bg-white px-2 py-1.5 sm:px-3 sm:py-2">
        <PerlovePromoCaption title={captionTitle} subtitle={captionSubtitle} />
      </div>
    </div>
  );
}
