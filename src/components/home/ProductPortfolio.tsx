"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BrandLogoSlot } from "@/components/ui/BrandLogo";
import { useDictionary } from "@/i18n/LocaleProvider";

const PRODUCT_IMAGE_HEIGHT = "h-52 sm:h-56";

export function ProductPortfolio() {
  const t = useDictionary();

  return (
    <Section muted border>
      <SectionHeading
        label={t.home.portfolio.label}
        title={t.home.portfolio.title}
        description={t.home.portfolio.description}
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
        {t.home.portfolio.items.map((item) => (
          <Link
            key={item.key}
            href={item.href}
            className="group bg-white p-8 lg:p-10 hover:bg-surface-muted transition-colors flex flex-col h-full"
          >
            <div
              className={`relative w-full ${PRODUCT_IMAGE_HEIGHT} mb-6 overflow-hidden rounded-lg bg-surface-muted shrink-0`}
            >
              <Image
                src={item.image}
                alt={item.name}
                fill
                unoptimized
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-300"
              />
            </div>

            <BrandLogoSlot
              src={item.brandLogo}
              alt={item.brandName}
              className="mb-4"
            />

            <h3 className="text-lg font-bold text-[#0f1a24] mb-3 group-hover:text-brand transition-colors leading-snug">
              {item.name}
            </h3>
            <p className="text-sm text-[#2d3848] font-medium leading-relaxed mb-6 flex-1 antialiased">
              {item.description}
            </p>
            <span className="inline-flex items-center gap-2 text-sm font-bold text-brand mt-auto">
              {t.common.viewDetails}
              <ArrowRight
                size={16}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </span>
          </Link>
        ))}
      </div>
    </Section>
  );
}
