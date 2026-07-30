"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/products/ProductCard";
import { company } from "@/data/company";
import {
  getSpecialtyProducts,
  specialtyIcons,
  type SpecialtyId,
} from "@/data/specialties";
import { useDictionary } from "@/i18n/LocaleProvider";
import { formatString } from "@/i18n/utils";

interface SpecialtyContentProps {
  specialtyId: SpecialtyId;
}

export function SpecialtyContent({ specialtyId }: SpecialtyContentProps) {
  const t = useDictionary();
  const page = t.specialtyPage;
  const home = t.home.specialties;
  const item = home.items.find((entry) => entry.id === specialtyId);

  if (!item) return null;

  const Icon = specialtyIcons[specialtyId];
  const specialtyProducts = getSpecialtyProducts(specialtyId);

  return (
    <div>
      <section className="bg-white border-b border-border">
        <Container className="py-12 lg:py-16">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-brand hover:text-brand-hover mb-8 transition-colors"
          >
            <ArrowLeft size={16} />
            {page.backHome}
          </Link>

          <div className="flex flex-col sm:flex-row sm:items-start gap-6 lg:gap-8">
            <div className="shrink-0 w-16 h-16 rounded-xl bg-brand-light flex items-center justify-center">
              <Icon size={32} strokeWidth={1.5} className="text-brand" />
            </div>
            <div className="min-w-0 max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-3">
                {page.label}
              </p>
              <h1 className="text-3xl lg:text-4xl font-semibold text-text-primary tracking-tight mb-4">
                {item.specialty}
              </h1>
              <p className="text-text-secondary leading-relaxed mb-5">
                {item.pitch}
              </p>
              <div className="rounded-xl border border-border bg-surface-muted/40 p-4 sm:p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-brand mb-2">
                  {home.needsLabel}
                </p>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {item.needs}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Section muted>
        <SectionHeading
          label={page.productsLabel}
          title={formatString(page.productsTitle, {
            specialty: item.specialty,
          })}
          description={page.productsDescription}
        />

        {specialtyProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialtyProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-text-secondary">{page.noProducts}</p>
        )}
      </Section>

      <section className="bg-surface-muted border-t border-border">
        <Container className="py-16 text-center">
          <h2 className="text-2xl font-semibold text-text-primary mb-4">
            {formatString(page.ctaTitle, { specialty: item.specialty })}
          </h2>
          <p className="text-text-secondary mb-8 max-w-lg mx-auto">
            {page.ctaDesc}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button href="/contact" variant="primary" size="lg">
              {t.common.getQuote}
              <ArrowRight size={18} />
            </Button>
            <Button
              href={company.contact.whatsapp}
              variant="whatsapp"
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
