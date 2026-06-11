"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Zap,
  Activity,
  Stethoscope,
  TrendingUp,
  Wallet,
  Users,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ProductImage } from "@/components/products/ProductImage";
import { company } from "@/data/company";
import { useDictionary, useLocale } from "@/i18n/LocaleProvider";
import { getSonoEyeLanding } from "@/i18n/get-sonoeye-landing";

const painIcons = [Activity, Stethoscope, Shield];
const clinicalSolutionIcons = [Shield, Zap, Activity, Stethoscope];
const roiSolutionIcons = [Wallet, TrendingUp, Zap, Users];

interface SonoEyeLandingPageProps {
  variant: "clinical" | "roi";
}

export function SonoEyeLandingPage({ variant }: SonoEyeLandingPageProps) {
  const locale = useLocale();
  const t = useDictionary();
  const content = getSonoEyeLanding(locale, variant);
  const isClinical = variant === "clinical";
  const solutionIcons = isClinical ? clinicalSolutionIcons : roiSolutionIcons;
  const otherHref = isClinical ? "/sonoeye/roi" : "/sonoeye/clinical";

  return (
    <div>
      {/* Hero */}
      <section
        className={
          isClinical
            ? "bg-gradient-to-br from-[#0a2a3d] via-[#0f3d56] to-brand text-white"
            : "bg-gradient-to-br from-[#0f1a24] via-[#1a3344] to-[#005f8a] text-white"
        }
      >
        <Container className="py-14 sm:py-20 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
            <div className="min-w-0 order-2 lg:order-1">
              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="inline-flex px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-white/15 border border-white/25 rounded-md">
                  {content.badge}
                </span>
                <span className="inline-flex px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-brand-accent/20 border border-brand-accent/40 text-brand-accent rounded-md">
                  {t.common.exclusiveAgent}
                </span>
              </div>

              <Image
                src="/images/brands/chison.webp"
                alt="CHISON"
                width={120}
                height={36}
                className="h-7 w-auto object-contain mb-6 brightness-0 invert"
              />

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight tracking-tight mb-5">
                {content.heroTitle}
              </h1>
              <p className="text-base sm:text-lg text-white/80 leading-relaxed mb-8">
                {content.heroSubtitle}
              </p>

              {!isClinical && "roiHighlight" in content && (
                <div className="grid grid-cols-3 gap-3 mb-8">
                  {[
                    content.roiHighlight,
                    content.roiPayback,
                    content.roiExpand,
                  ].map((value, i) => (
                    <div
                      key={value}
                      className="bg-white/10 border border-white/20 rounded-md p-3 text-center"
                    >
                      <div className="text-sm sm:text-base font-semibold text-white">
                        {value}
                      </div>
                      {"roiStatLabels" in content && (
                        <div className="text-[10px] text-white/50 mt-1">
                          {content.roiStatLabels[i]}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}

              <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                <Button href="/contact" variant="inverse" size="lg">
                  {content.heroCta}
                  <ArrowRight size={16} />
                </Button>
                <Button
                  href={company.contact.whatsapp}
                  variant="on-dark"
                  size="lg"
                  external
                >
                  {t.common.whatsapp}
                </Button>
              </div>
              <p className="text-sm text-white/55 mt-4">{content.heroCtaSub}</p>
            </div>

            <div className="min-w-0 order-1 lg:order-2">
              <div className="relative w-full aspect-[16/10] bg-white/10 rounded-md overflow-hidden border border-white/15">
                <ProductImage
                  productId="sonoeye"
                  alt="CHISON SonoEye"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-contain object-center"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Pain points */}
      <section className="bg-white border-b border-border">
        <Container className="py-16 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-3">
            {content.painLabel}
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-text-primary mb-4">
            {content.painTitle}
          </h2>
          <p className="text-text-secondary max-w-3xl leading-relaxed mb-10">
            {content.painIntro}
          </p>
          <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
            {content.painPoints.map((point, i) => {
              const Icon = painIcons[i];
              return (
                <div key={point.title} className="bg-white p-8">
                  <Icon size={24} strokeWidth={1.5} className="text-brand mb-5" />
                  <h3 className="font-semibold text-text-primary mb-3">
                    {point.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {point.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Solutions */}
      <section className="bg-surface-muted border-b border-border">
        <Container className="py-16 lg:py-20">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-3">
            {content.solutionLabel}
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-text-primary mb-4">
            {content.solutionTitle}
          </h2>
          <p className="text-text-secondary max-w-3xl leading-relaxed mb-10">
            {content.solutionIntro}
          </p>
          <div className="grid sm:grid-cols-2 gap-px bg-border border border-border">
            {content.solutions.map((item, i) => {
              const Icon = solutionIcons[i];
              return (
                <div key={item.title} className="bg-white p-8">
                  <Icon size={22} strokeWidth={1.5} className="text-brand mb-4" />
                  <h3 className="font-semibold text-text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Workshop */}
      <section className="bg-white border-b border-border">
        <Container className="py-16 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand mb-3">
                {content.workshopLabel}
              </p>
              <h2 className="text-2xl sm:text-3xl font-semibold text-text-primary mb-4">
                {content.workshopTitle}
              </h2>
              <p className="text-text-secondary leading-relaxed mb-8">
                {content.workshopIntro}
              </p>
              <ul className="space-y-4 mb-8">
                {content.workshopPoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 text-sm text-text-secondary"
                  >
                    <CheckCircle2
                      size={18}
                      className="text-brand shrink-0 mt-0.5"
                    />
                    {point}
                  </li>
                ))}
              </ul>
              <Button href="/contact" variant="primary" size="lg">
                {content.workshopCta}
                <ArrowRight size={16} />
              </Button>
            </div>

            <div className="bg-surface-muted border border-border p-8">
              <h3 className="font-semibold text-text-primary mb-4">
                {t.nav.sonoeyeSpecs}
              </h3>
              <p className="text-sm text-text-secondary mb-6">
                {content.specsTeaser}
              </p>
              <div className="flex flex-col gap-3">
                <Button href="/products/sonoeye" variant="outline" size="md">
                  {t.nav.sonoeyeSpecs}
                </Button>
                <Link
                  href={otherHref}
                  className="text-sm font-medium text-brand hover:underline"
                >
                  {content.switchLabel} {content.switchLink} →
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="bg-brand">
        <Container className="py-16 lg:py-20 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-4 max-w-2xl mx-auto">
            {content.finalCtaTitle}
          </h2>
          <p className="text-white/75 mb-8 max-w-xl mx-auto leading-relaxed">
            {content.finalCtaDesc}
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
