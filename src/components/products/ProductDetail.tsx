"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, FileDown } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ProductBreadcrumb } from "@/components/products/ProductBreadcrumb";
import { ProductCTA } from "@/components/products/ProductCTA";
import { SonoEyeProbeGuide } from "@/components/products/SonoEyeProbeGuide";
import { ProductCard } from "@/components/products/ProductCard";
import { ProductImage } from "@/components/products/ProductImage";
import { ProductVideos } from "@/components/products/ProductVideos";
import { getCategoryLabel, getBrandBySlug, getBrandHref, getRelatedProducts, type Product } from "@/data/products";
import { getLocalizedProduct } from "@/data/product-translations";
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
  const related = getRelatedProducts(product);
  const brandIsProductPage = brand?.pageHref === `/products/${product.id}`;
  const pageTitle = product.name;
  const videos = localized.videos ?? product.videos;

  return (
    <div>
      <section className="bg-white border-b border-border overflow-hidden">
        <Container className="py-10 lg:py-16">
          <ProductBreadcrumb product={product} />

          <div className="max-w-3xl mb-10 lg:mb-14">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand mb-4">
              Overview
            </p>
            <h2 className="text-2xl font-semibold text-text-primary mb-6">
              {t.common.productOverview}
            </h2>
            <p className="text-text-secondary leading-relaxed text-base sm:text-lg">
              {localized.description}
            </p>
            {product.brochure && (
              <div className="mt-8">
                <Button href={product.brochure} variant="outline" size="md" external>
                  <FileDown size={16} />
                  {t.common.downloadBrochure}
                </Button>
              </div>
            )}
            {videos && videos.length > 0 && (
              <ProductVideos
                videos={videos}
                label={t.common.productVideos}
                className="mt-10"
              />
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <div
              className={`relative w-full aspect-[4/3] overflow-hidden min-w-0 ${
                product.image?.includes("-card.") ? "bg-white" : "bg-surface-muted"
              }`}
            >
              <ProductImage
                productId={product.id}
                alt={`${product.brand} ${product.name}`}
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="min-w-0">
              {brand && !brandIsProductPage && (
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={brand.slug === "chison" ? 220 : 120}
                  height={brand.slug === "chison" ? 72 : 36}
                  className={
                    brand.slug === "chison"
                      ? "h-14 sm:h-16 w-auto object-contain mb-6"
                      : "h-7 w-auto object-contain mb-6"
                  }
                />
              )}

              <div className="flex flex-wrap items-center gap-2 mb-4">
                <Badge variant="neutral">
                  {getCategoryLabel(product.category, locale)}
                </Badge>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-text-primary tracking-tight mb-2">
                {pageTitle}
              </h1>
              {product.nameEn && (
                <p className="text-sm text-text-muted mb-4 font-[family-name:var(--font-inter)]">
                  {product.nameEn}
                </p>
              )}
              <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-8">
                {localized.tagline}
              </p>

              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand mb-4">
                {t.common.keyFeatures}
              </p>
              {localized.featureGroups && localized.featureGroups.length > 0 ? (
                <div className="space-y-8">
                  {localized.featureGroups.map((group) => (
                    <div key={group.title}>
                      <p className="text-sm font-semibold text-text-primary mb-3">
                        {group.title}
                      </p>
                      <ul className="space-y-3">
                        {group.items.map((item) => (
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
                    </div>
                  ))}
                </div>
              ) : (
                <ul className="space-y-3">
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
              )}
            </div>
          </div>
        </Container>
      </section>

      {product.id === "sonoeye" && <SonoEyeProbeGuide />}

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
                  href={getBrandHref(brand)}
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
        title={
          product.id === "sonoeye"
            ? t.sonoeye.cta.title
            : formatString(t.productCta.interestTitle, { name: pageTitle })
        }
        description={
          product.id === "sonoeye"
            ? t.sonoeye.cta.description
            : formatString(t.productCta.interestDesc, {
                brand: product.brand,
                name: product.name,
              })
        }
      />
    </div>
  );
}
