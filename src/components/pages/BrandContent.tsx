"use client";

import { Container } from "@/components/ui/Container";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/products/ProductCard";
import {
  products,
  getCategoryLabel,
  type ProductCategory,
  type Brand,
} from "@/data/products";
import { getLocalizedBrand } from "@/data/brand-translations";
import { company } from "@/data/company";
import { useDictionary, useLocale } from "@/i18n/LocaleProvider";
import { formatString } from "@/i18n/utils";

interface BrandContentProps {
  brand: Brand;
  brandSlug: string;
}

export function BrandContent({ brand, brandSlug }: BrandContentProps) {
  const t = useDictionary();
  const locale = useLocale();
  const localized = getLocalizedBrand(brand, locale);

  const brandProducts = products.filter((p) => p.brandSlug === brandSlug);
  const categories = [
    ...new Set(brandProducts.map((p) => p.category)),
  ] as ProductCategory[];

  return (
    <div>
      <section className="bg-white border-b border-border">
        <Container className="py-16 lg:py-20">
          <div className="flex flex-col sm:flex-row sm:items-center gap-8">
            <BrandLogo src={brand.logo} alt={brand.name} />
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <h1 className="text-3xl lg:text-4xl font-semibold text-text-primary tracking-tight">
                  {brand.name}
                </h1>
                {localized.exclusive && (
                  <Badge variant="brand">{localized.exclusive}</Badge>
                )}
              </div>
              <p className="text-text-secondary max-w-2xl leading-relaxed">
                {localized.description}
              </p>
              <p className="text-sm text-text-muted mt-3">
                {formatString(t.common.productsCount, {
                  count: brandProducts.length,
                })}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <Section muted>
        {categories.map((cat) => {
          const catProducts = brandProducts.filter((p) => p.category === cat);
          const catLabel = getCategoryLabel(cat, locale);
          return (
            <div key={cat} className="mb-16 last:mb-0">
              <SectionHeading
                label={catLabel}
                title={`${brand.name} — ${catLabel}`}
                align="left"
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {catProducts.map((product) => (
                  <ProductCard key={product.id} product={product} showBrand={false} />
                ))}
              </div>
            </div>
          );
        })}
      </Section>

      <section className="bg-brand border-t border-brand-hover">
        <Container className="py-16 text-center">
          <h2 className="text-2xl font-semibold text-white mb-4">
            {formatString(t.brand.productsInterest, { brand: brand.name })}
          </h2>
          <p className="text-white/75 mb-8 max-w-lg mx-auto">
            {t.brand.productsInterestDesc}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button href="/contact" variant="inverse" size="lg">
              {t.common.getQuote}
            </Button>
            <Button
              href={company.contact.whatsapp}
              variant="on-dark"
              size="lg"
              external
            >
              {t.common.whatsappInquiry}
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
