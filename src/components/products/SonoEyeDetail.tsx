"use client";

import Image from "next/image";
import {
  Smartphone,
  Shield,
  Zap,
  Brain,
  Syringe,
  Heart,
  Sparkles,
  GraduationCap,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProductBreadcrumb } from "@/components/products/ProductBreadcrumb";
import { ProductCTA } from "@/components/products/ProductCTA";
import { ProductImage } from "@/components/products/ProductImage";
import { getHeroProduct } from "@/data/products";
import { getLocalizedProduct } from "@/data/product-translations";
import { company } from "@/data/company";
import { useDictionary, useLocale } from "@/i18n/LocaleProvider";

const featureIcons = [Smartphone, Zap, Shield, Brain];
const applicationIcons = [Heart, Syringe, Sparkles, GraduationCap];

export function SonoEyeDetail() {
  const t = useDictionary();
  const locale = useLocale();
  const product = getHeroProduct();
  if (!product) return null;

  const localized = getLocalizedProduct(product, locale);

  return (
    <div>
      <section className="bg-white border-b border-border overflow-hidden">
        <Container className="py-10 lg:py-16">
          <ProductBreadcrumb product={product} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-start">
            <div className="relative w-full aspect-[4/3] bg-surface-muted overflow-hidden min-w-0">
              <ProductImage
                productId="sonoeye"
                alt="CHISON SonoEye"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="min-w-0">
              <Image
                src="/images/brands/chison.webp"
                alt="CHISON"
                width={120}
                height={36}
                className="h-7 w-auto object-contain mb-6"
              />

              <div className="flex flex-wrap items-center gap-2 mb-4">
                <Badge variant="brand">{t.common.exclusiveAgent}</Badge>
                <Badge variant="neutral">{t.common.featuredProduct}</Badge>
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-text-primary tracking-tight mb-2">
                SonoEye
              </h1>
              <p className="text-base sm:text-lg text-text-secondary mb-6">
                {t.sonoeye.subtitle}
              </p>

              <p className="text-base text-text-secondary leading-relaxed mb-8">
                {localized.description}
              </p>

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

      <Section>
        <SectionHeading
          label={t.sonoeye.features.label}
          title={t.sonoeye.features.title}
          description={t.sonoeye.features.description}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {t.sonoeye.features.items.map((f, i) => {
            const Icon = featureIcons[i];
            return (
              <div key={f.title} className="bg-white p-6 sm:p-8 min-w-0">
                <Icon size={24} strokeWidth={1.5} className="text-brand mb-5" />
                <h3 className="text-base font-semibold text-text-primary mb-2">
                  {f.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {f.description}
                </p>
              </div>
            );
          })}
        </div>
      </Section>

      <Section muted border>
        <SectionHeading
          label={t.sonoeye.applications.label}
          title={t.sonoeye.applications.title}
          description={t.sonoeye.applications.description}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {t.sonoeye.applications.items.map((app, i) => {
            const Icon = applicationIcons[i];
            return (
              <div key={app.title} className="bg-white p-6 sm:p-8 min-w-0">
                <Icon size={22} strokeWidth={1.5} className="text-brand mb-5" />
                <h3 className="font-semibold text-text-primary mb-4">{app.title}</h3>
                <ul className="space-y-2">
                  {app.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 text-sm text-text-secondary"
                    >
                      <CheckCircle2 size={14} className="text-brand shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="min-w-0">
            <SectionHeading
              label={t.sonoeye.specs.label}
              title={t.sonoeye.specs.title}
              align="left"
            />
            <div className="border-t border-border">
              {t.sonoeye.specs.items.map((spec) => (
                <div
                  key={spec.label}
                  className="flex items-center justify-between gap-4 py-4 border-b border-border text-sm"
                >
                  <span className="text-text-muted shrink-0">{spec.label}</span>
                  <span className="font-medium text-text-primary text-right">
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-surface-muted border border-border p-6 sm:p-8 min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand mb-4">
              {t.sonoeye.training.label}
            </p>
            <h3 className="text-xl font-semibold text-text-primary mb-4">
              {t.sonoeye.training.title}
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed mb-6">
              {t.sonoeye.training.description}
            </p>
            <ol className="space-y-4">
              {t.sonoeye.training.steps.map((step, i) => (
                <li key={step} className="flex items-start gap-4 text-sm min-w-0">
                  <span className="w-7 h-7 bg-brand text-white flex items-center justify-center text-xs font-semibold shrink-0 font-[family-name:var(--font-inter)]">
                    {i + 1}
                  </span>
                  <span className="text-text-secondary pt-1">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      <ProductCTA
        title={t.sonoeye.cta.title}
        description={t.sonoeye.cta.description}
      />
    </div>
  );
}
