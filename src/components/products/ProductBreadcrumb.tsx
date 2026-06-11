"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import type { Product } from "@/data/products";
import { getBrandBySlug } from "@/data/products";
import { useDictionary } from "@/i18n/LocaleProvider";

interface ProductBreadcrumbProps {
  product: Product;
  light?: boolean;
}

export function ProductBreadcrumb({ product, light = false }: ProductBreadcrumbProps) {
  const t = useDictionary();
  const brand = getBrandBySlug(product.brandSlug);
  const linkClass = light
    ? "text-white/60 hover:text-white"
    : "text-text-muted hover:text-brand";
  const currentClass = light ? "text-white" : "text-text-primary";
  const sepClass = light ? "text-white/30" : "text-border-strong";

  return (
    <nav className="flex flex-wrap items-center gap-2 text-sm mb-10">
      <Link href="/" className={linkClass}>
        {t.common.home}
      </Link>
      <ChevronRight size={14} className={sepClass} />
      <Link href="/products" className={linkClass}>
        {t.nav.products}
      </Link>
      {brand && (
        <>
          <ChevronRight size={14} className={sepClass} />
          <Link href={`/brands/${brand.slug}`} className={linkClass}>
            {brand.name}
          </Link>
        </>
      )}
      <ChevronRight size={14} className={sepClass} />
      <span className={`font-medium ${currentClass}`}>{product.name}</span>
    </nav>
  );
}
