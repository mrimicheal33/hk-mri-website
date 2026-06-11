"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { brands, products } from "@/data/products";
import { getLocalizedBrand } from "@/data/brand-translations";
import { ProductCard } from "@/components/products/ProductCard";
import { useDictionary, useLocale } from "@/i18n/LocaleProvider";

const filterBase =
  "px-4 py-2 text-sm font-semibold rounded-md transition-all duration-200";
const filterActive =
  "bg-gradient-to-b from-[#0078a8] to-brand text-white shadow-[0_2px_8px_rgba(0,95,138,0.28)]";
const filterInactive =
  "text-text-secondary bg-white border border-border hover:text-brand hover:border-brand/30 hover:bg-brand-light/50";

export function ProductCatalog() {
  const t = useDictionary();
  const locale = useLocale();
  const [activeBrand, setActiveBrand] = useState<string>("all");

  const filtered =
    activeBrand === "all"
      ? products
      : products.filter((p) => p.brandSlug === activeBrand);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-12 border-b border-border pb-6">
        <button
          type="button"
          onClick={() => setActiveBrand("all")}
          className={`${filterBase} ${
            activeBrand === "all" ? filterActive : filterInactive
          }`}
        >
          {t.products.filterAll} ({products.length})
        </button>
        {brands.map((brand) => {
          const count = products.filter((p) => p.brandSlug === brand.slug).length;
          return (
            <button
              key={brand.slug}
              type="button"
              onClick={() => setActiveBrand(brand.slug)}
              className={`${filterBase} ${
                activeBrand === brand.slug ? filterActive : filterInactive
              }`}
            >
              {brand.name} ({count})
            </button>
          );
        })}
      </div>

      {activeBrand !== "all" && (
        <div className="flex items-center gap-5 mb-10 p-6 bg-surface-muted border border-border">
          {(() => {
            const brand = brands.find((b) => b.slug === activeBrand);
            if (!brand) return null;
            return (
              <>
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={80}
                  height={28}
                  className="h-6 w-auto object-contain"
                />
                <p className="text-sm text-text-secondary flex-1">
                  {getLocalizedBrand(brand, locale).description}
                </p>
                <Link
                  href={`/brands/${brand.slug}`}
                  className="text-sm font-semibold text-brand hover:text-[#004a6e] transition-colors shrink-0"
                >
                  {t.common.brandPage} →
                </Link>
              </>
            );
          })()}
        </div>
      )}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
