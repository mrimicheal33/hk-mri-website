"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BrandLogoSlot } from "@/components/ui/BrandLogo";
import { SonoEyePortfolioImage } from "@/components/home/SonoEyePortfolioImage";
import { Mini800PortfolioImage } from "@/components/home/Mini800PortfolioImage";
import { useDictionary } from "@/i18n/LocaleProvider";

/** Shared image block height so logos and titles align across every card. */
const CARD_IMAGE_HEIGHT = "h-64 sm:h-72";

export function ProductPortfolio() {
  const t = useDictionary();

  return (
    <Section muted border>
      <SectionHeading
        label={t.home.portfolio.label}
        title={t.home.portfolio.title}
        description={t.home.portfolio.description}
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-px bg-border border border-border items-stretch">
        {t.home.portfolio.items.map((item) => {
          const isSonoEye = item.key === "sonoeye";
          const isMini800 = item.key === "mini800";

          return (
            <Link
              key={item.key}
              href={item.href}
              className="group bg-white p-8 lg:p-10 hover:bg-surface-muted transition-colors grid grid-rows-[auto_auto_auto_1fr_auto] h-full min-h-0"
            >
              {isSonoEye ? (
                <SonoEyePortfolioImage
                  className={`${CARD_IMAGE_HEIGHT} mb-6 shrink-0 rounded-lg`}
                />
              ) : isMini800 ? (
                <Mini800PortfolioImage
                  className={`${CARD_IMAGE_HEIGHT} mb-6 shrink-0`}
                  captionTitle={
                    ("imageCaptionTitle" in item ? item.imageCaptionTitle : undefined) ??
                    "Mini800"
                  }
                  captionSubtitle={
                    ("imageCaptionSubtitle" in item
                      ? item.imageCaptionSubtitle
                      : undefined) ??
                    "Shear Wave Quantificational Ultrasound Diagnostic System"
                  }
                />
              ) : (
                <div
                  className={`relative w-full ${CARD_IMAGE_HEIGHT} mb-6 overflow-hidden rounded-lg shrink-0 ${
                    item.imageFit === "contain" ? "bg-white" : "bg-surface-muted"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    unoptimized
                    sizes="(max-width: 768px) 100vw, 20vw"
                    className={`${
                      item.imageFit === "contain" ? "object-contain" : "object-cover"
                    } object-center group-hover:scale-[1.03] transition-transform duration-300`}
                  />
                </div>
              )}

              <BrandLogoSlot
                src={item.brandLogo}
                alt={item.brandName}
                className="mb-4"
              />

              <h3 className="text-lg font-bold text-[#0f1a24] mb-3 group-hover:text-brand transition-colors leading-snug min-h-[4.5rem]">
                {item.name}
              </h3>

              <p className="text-sm text-[#2d3848] font-medium leading-relaxed mb-6 antialiased">
                {item.description}
              </p>

              <span className="inline-flex items-center gap-2 text-sm font-bold text-brand self-start">
                {t.common.viewDetails}
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </span>
            </Link>
          );
        })}
      </div>
    </Section>
  );
}
