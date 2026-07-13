"use client";

import Image from "next/image";
import Link from "next/link";
import { Building2, Users, Globe, Award } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { company } from "@/data/company";
import { getBrandHref, getBrandsSorted } from "@/data/products";
import { useDictionary } from "@/i18n/LocaleProvider";

const valueIcons = [Award, Users, Globe, Building2];

export function AboutContent() {
  const t = useDictionary();

  return (
    <div>
      <section className="bg-white border-b border-border">
        <Container className="py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand mb-4">
                {t.about.label}
              </p>
              <h1 className="text-4xl lg:text-5xl font-semibold text-text-primary tracking-tight mb-5">
                {t.about.heading}
              </h1>
              <p className="text-lg text-text-secondary max-w-2xl leading-relaxed">
                {t.company.tagline}
              </p>
            </div>
            <Image
              src={company.logo}
              alt={company.name}
              width={240}
              height={96}
              priority
              className="h-24 sm:h-28 w-auto max-w-[240px] object-contain shrink-0"
              style={{ width: "auto", height: "auto" }}
            />
          </div>
        </Container>
      </section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="min-w-0">
            <SectionHeading
              label={t.about.companyLabel}
              title={company.name}
              align="left"
            />
            <p className="text-lg font-medium text-text-primary mb-6 leading-relaxed">
              {t.about.companyTagline}
            </p>
            <p className="text-text-secondary leading-relaxed mb-8">
              {t.about.companyIntro}
            </p>
            <h3 className="text-xl font-semibold text-text-primary mb-4">
              {t.about.brandsModalitiesTitle}
            </h3>
            <p className="text-text-secondary leading-relaxed mb-4">
              {t.about.brandsModalitiesIntro}
            </p>
            <ul className="list-disc pl-5 space-y-2 text-text-secondary leading-relaxed">
              {t.about.modalities.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-px bg-border border border-border min-w-0">
            <div className="bg-surface-muted p-6">
              <h3 className="font-semibold text-text-primary mb-2">
                {t.about.brandsTitle}
              </h3>
              <p className="text-sm text-text-secondary mb-4">
                {t.company.subsidiaryRole}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {getBrandsSorted().map((brand) => (
                  <Link
                    key={brand.slug}
                    href={getBrandHref(brand)}
                    className="flex items-center justify-center bg-white border border-border px-4 py-5 min-h-[72px] hover:border-brand/30 transition-colors"
                    title={brand.name}
                  >
                    <BrandLogo
                      src={brand.logo}
                      alt={brand.name}
                      align="center"
                      size="uniform"
                      className="w-full"
                    />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section muted border>
        <SectionHeading label={t.about.valuesLabel} title={t.about.valuesTitle} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {t.about.values.map((v, i) => {
            const Icon = valueIcons[i];
            return (
              <div key={v.title} className="bg-white p-8 text-center lg:text-left">
                <Icon
                  size={24}
                  strokeWidth={1.5}
                  className="text-brand mb-5 mx-auto lg:mx-0"
                />
                <h3 className="font-semibold text-text-primary mb-2">{v.title}</h3>
                <p className="text-sm text-text-secondary">{v.description}</p>
              </div>
            );
          })}
        </div>
      </Section>
    </div>
  );
}
