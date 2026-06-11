"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { ProductCatalog } from "@/components/products/ProductCatalog";
import { brands } from "@/data/products";
import { useDictionary } from "@/i18n/LocaleProvider";

export function ProductsContent() {
  const t = useDictionary();

  return (
    <div>
      <section className="bg-white border-b border-border">
        <Container className="py-12 lg:py-16">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand mb-4">
            {t.products.title}
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-text-primary tracking-tight mb-4">
            {t.products.heading}
          </h1>
          <p className="text-base sm:text-lg text-text-secondary max-w-2xl leading-relaxed">
            {t.products.description}
          </p>
        </Container>
      </section>

      <section className="bg-surface-muted border-b border-border">
        <Container className="py-8 lg:py-10">
          <Link
            href="/sonoeye/clinical"
            className="group grid grid-cols-1 md:grid-cols-[280px_1fr] bg-white border border-border hover:border-brand/30 transition-colors overflow-hidden"
          >
            <div className="relative w-full aspect-[16/10] md:aspect-auto md:min-h-[200px] bg-surface-muted">
              <Image
                src="/images/products/sonoeye.jpg"
                alt="CHISON SonoEye"
                fill
                className="object-cover object-center"
                sizes="280px"
              />
            </div>
            <div className="flex flex-col justify-center p-6 sm:p-8 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <Badge variant="brand">{t.common.featured}</Badge>
                <Badge variant="neutral">{t.common.exclusiveAgent}</Badge>
              </div>
              <h2 className="text-lg sm:text-xl font-semibold text-text-primary group-hover:text-brand transition-colors mb-2">
                {t.products.featuredTitle}
              </h2>
              <p className="text-sm text-text-secondary mb-4">
                {t.products.featuredDesc}
              </p>
              <span className="flex items-center gap-1.5 text-sm font-medium text-brand">
                {t.common.viewPage} <ArrowRight size={14} />
              </span>
            </div>
          </Link>
        </Container>
      </section>

      <section className="bg-white border-b border-border">
        <Container className="py-10 lg:py-12">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand mb-6">
            {t.products.brandsLabel}
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-px bg-border border border-border">
            {brands.map((brand) => (
              <Link
                key={brand.slug}
                href={`/brands/${brand.slug}`}
                className="flex flex-col items-center justify-center gap-3 p-5 sm:p-6 bg-white hover:bg-surface-muted transition-colors text-center min-h-[100px] min-w-0"
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={80}
                  height={28}
                  className="h-5 sm:h-6 w-auto object-contain max-w-full"
                />
                <span className="text-xs font-medium text-text-muted truncate w-full">
                  {brand.name}
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <Section muted>
        <ProductCatalog />
      </Section>
    </div>
  );
}
