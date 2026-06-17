"use client";

import Image from "next/image";
import { Building2, Users, Globe, Award } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { company } from "@/data/company";
import { brands } from "@/data/products";
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
            <p className="text-text-secondary leading-relaxed mb-6">
              {t.company.description}
            </p>
            <p className="text-text-secondary leading-relaxed">{t.company.aboutExtra}</p>
          </div>

          <div className="space-y-px bg-border border border-border min-w-0">
            <div className="bg-surface-muted p-6">
              <h3 className="font-semibold text-text-primary mb-2">
                {t.about.brandsTitle}
              </h3>
              <p className="text-sm text-text-secondary mb-4">
                {t.company.subsidiaryRole}
              </p>
              <div className="flex flex-wrap gap-2">
                {brands.map((b) => (
                    <span
                      key={b.slug}
                      className="text-xs bg-white border border-border px-3 py-1 text-text-secondary"
                    >
                      {b.name}
                    </span>
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

      <Section>
        <SectionHeading
          label={t.about.partnersLabel}
          title={t.about.partnersTitle}
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
          {company.partners.map((partner) => (
            <div
              key={partner}
              className="flex items-center gap-3 bg-white px-6 py-5"
            >
              <span className="w-1.5 h-1.5 bg-brand shrink-0" />
              <span className="text-sm text-text-secondary">{partner}</span>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
}
