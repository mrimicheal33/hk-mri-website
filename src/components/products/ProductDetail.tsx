"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ProductBreadcrumb } from "@/components/products/ProductBreadcrumb";
import { ProductCTA } from "@/components/products/ProductCTA";
import { ProductCard } from "@/components/products/ProductCard";
import { ProductImage } from "@/components/products/ProductImage";
import { getCategoryLabel, getBrandBySlug, getRelatedProducts, type Product } from "@/data/products";
import { getLocalizedBrand } from "@/data/brand-translations";
import { getLocalizedProduct } from "@/data/product-translations";
import { company } from "@/data/company";
import { useDictionary, useLocale } from "@/i18n/LocaleProvider";
import { formatString } from "@/i18n/utils";

interface ProductDetailProps {
  product: Product;
}

export function ProductDetail({ product }: ProductDetailProps) {
  const t = useDictionary();
  const locale = useLocale();
  const localized = getLocalizedProduct(product, locale);
  const brand = getBrandBySlug(product.brandSlug);
  const localizedBrand = brand ? getLocalizedBrand(brand, locale) : null;
  const related = getRelatedProducts(product);

  return (
    <div>
      <section className="bg-white border-b border-border overflow-hidden">
        <Container className="py-10 lg:py-16">
          <ProductBreadcrumb product={product} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <div className="relative w-full aspect-[4/3] bg-surface-muted overflow-hidden min-w-0">
              <ProductImage
                productId={product.id}
                alt={`${product.brand} ${product.name}`}
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="min-w-0">
              {brand && (
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={120}
                  height={36}
                  className="h-7 w-auto object-contain mb-6"
                />
              )}

              <div className="flex flex-wrap items-center gap-2 mb-4">
                <Badge variant="neutral">
                  {getCategoryLabel(product.category, locale)}
                </Badge>
                {localizedBrand?.exclusive && (
                  <Badge variant="brand">{localizedBrand.exclusive}</Badge>
                )}
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-text-primary tracking-tight mb-2">
                {product.name}
              </h1>
              {product.nameEn && (
                <p className="text-sm text-text-muted mb-4 font-[family-name:var(--font-inter)]">
                  {product.nameEn}
                </p>
              )}
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-8">
                {localized.tagline}
              </p>

              <ul className="space-y-3 mb-8 pb-8 border-b border-border">
                {localized.highlights.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-text-secondary"
                  >
                    <CheckCircle2
                      size={16}
                      className="text-brand shrink-0 mt-0.5"
                    />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                <Button href="/contact" variant="primary" size="lg">
                  {t.common.getQuote}
                </Button>
                <Button
                  href={company.contact.whatsapp}
                  variant="outline"
                  size="lg"
                  external
                >
                  {t.common.whatsappInquiry}
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-14 lg:py-20">
        <Container>
          <div className="max-w-3xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand mb-4">
              Overview
            </p>
            <h2 className="text-2xl font-semibold text-text-primary mb-6">
              {t.common.productOverview}
            </h2>
            <p className="text-text-secondary leading-relaxed text-base sm:text-lg">
              {localized.description}
            </p>
          </div>
        </Container>
      </section>

      {related.length > 0 && (
        <section className="bg-surface-muted py-14 lg:py-20 border-t border-border">
          <Container>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand mb-3">
                  Related
                </p>
                <h2 className="text-2xl font-semibold text-text-primary">
                  {t.common.relatedProducts}
                </h2>
              </div>
              {brand && (
                <Link
                  href={`/brands/${brand.slug}`}
                  className="text-sm font-medium text-brand hover:underline"
                >
                  {t.common.viewAll} →
                </Link>
              )}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((item) => (
                <ProductCard key={item.id} product={item} showBrand={false} />
              ))}
            </div>
          </Container>
        </section>
      )}

      <ProductCTA
        title={formatString(t.productCta.interestTitle, { name: product.name })}
        description={formatString(t.productCta.interestDesc, {
          brand: product.brand,
          name: product.name,
        })}
      />
    </div>
  );
}
