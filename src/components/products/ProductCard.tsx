"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { ProductImage } from "@/components/products/ProductImage";
import { getCategoryLabel, getProductHref, type Product } from "@/data/products";
import { getLocalizedProduct } from "@/data/product-translations";
import { useDictionary, useLocale } from "@/i18n/LocaleProvider";

interface ProductCardProps {
  product: Product;
  showBrand?: boolean;
}

export function ProductCard({ product, showBrand = true }: ProductCardProps) {
  const t = useDictionary();
  const locale = useLocale();
  const localized = getLocalizedProduct(product, locale);
  const href = getProductHref(product.id);

  return (
    <Link
      href={href}
      className="group flex flex-col bg-white border border-border hover:border-brand/40 transition-colors h-full min-w-0"
    >
      <div className="relative w-full aspect-[4/3] bg-surface-muted overflow-hidden shrink-0">
        <ProductImage
          productId={product.id}
          alt={`${product.brand} ${product.name}`}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <div className="flex flex-col flex-1 p-5 sm:p-6 min-w-0">
        <div className="mb-3 min-w-0">
          {showBrand && (
            <p className="text-[11px] font-semibold uppercase tracking-wider text-brand mb-1.5">
              {product.brand}
            </p>
          )}
          <h3 className="text-base sm:text-lg font-semibold text-text-primary group-hover:text-brand transition-colors truncate">
            {product.name}
          </h3>
        </div>

        <p className="text-xs text-text-muted uppercase tracking-wide mb-2">
          {getCategoryLabel(product.category, locale)}
        </p>

        <p className="text-sm text-text-secondary leading-relaxed mb-4 flex-1 line-clamp-2">
          {localized.tagline}
        </p>

        <div className="flex items-center gap-1.5 text-sm font-medium text-brand pt-4 border-t border-border">
          {t.common.viewDetails}
          <ArrowRight
            size={14}
            className="group-hover:translate-x-0.5 transition-transform shrink-0"
          />
        </div>
      </div>
    </Link>
  );
}
