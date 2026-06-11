"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { brands, getProductsByBrand } from "@/data/products";
import { getLocalizedBrand } from "@/data/brand-translations";
import { useDictionary, useLocale } from "@/i18n/LocaleProvider";
import { formatString } from "@/i18n/utils";

export function BrandShowcase() {
  const t = useDictionary();
  const locale = useLocale();

  return (
    <Section muted border>
      <SectionHeading
        label={t.home.brands.label}
        title={t.home.brands.title}
        description={t.home.brands.description}
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
        {brands.map((brand) => {
          const localized = getLocalizedBrand(brand, locale);
          const count = getProductsByBrand(brand.slug).length;
          return (
            <Link
              key={brand.slug}
              href={`/brands/${brand.slug}`}
              className="group bg-white p-8 hover:bg-surface-muted transition-colors flex flex-col"
            >
              <div className="h-8 flex items-center mb-8">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={120}
                  height={32}
                  className="h-7 w-auto object-contain"
                />
              </div>

              <h3 className="text-base font-semibold text-text-primary mb-2">
                {brand.name}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-6 flex-1">
                {localized.description}
              </p>

              <div className="flex items-center justify-between pt-4 border-t border-border">
                <span className="text-xs text-text-muted">
                  {formatString(t.common.productsCount, { count })}
                  {localized.exclusive && (
                    <span className="ml-2 text-brand">· {localized.exclusive}</span>
                  )}
                </span>
                <ArrowRight
                  size={16}
                  className="text-text-muted group-hover:text-brand group-hover:translate-x-0.5 transition-all"
                />
              </div>
            </Link>
          );
        })}
      </div>
    </Section>
  );
}
