"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { useDictionary } from "@/i18n/LocaleProvider";

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
            className="group bg-white p-8 lg:p-10 hover:bg-surface-muted transition-colors flex flex-col"
          >
            <div className="relative w-full aspect-[16/10] bg-surface-muted mb-6 overflow-hidden">
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-contain object-center p-4 group-hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
            <BrandLogo
              src={item.brandLogo}
              alt={item.brandName}
              className="mb-4"
            />
            <h3 className="text-lg font-semibold text-text-primary mb-3 group-hover:text-brand transition-colors">
              {item.name}
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed mb-6 flex-1">
              {item.description}
            </p>
            <span className="inline-flex items-center gap-2 text-sm font-semibold text-brand">
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
