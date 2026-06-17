"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { useDictionary } from "@/i18n/LocaleProvider";

export function PartnersSection() {
  const t = useDictionary();

  return (
    <Section muted border>
      <SectionHeading
        label={t.home.partners.label}
        title={t.home.partners.title}
        description={t.home.partners.description}
      />

      <div className="grid sm:grid-cols-3 gap-px bg-border border border-border">
        {t.home.partners.items.map((partner) => (
          <Link
            key={partner.slug}
            href={`/brands/${partner.slug}`}
            className="group bg-white p-10 lg:p-12 hover:bg-surface-muted transition-colors flex flex-col items-center text-center"
          >
            <BrandLogo
              src={partner.logo}
              alt={partner.name}
              align="center"
              className="mb-8 mx-auto"
            />
            <h3 className="text-base font-semibold text-text-primary mb-2">
              {partner.name}
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed mb-6 flex-1">
              {partner.description}
            </p>
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-brand uppercase tracking-wide">
              {t.common.viewPage}
              <ArrowRight
                size={14}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </span>
          </Link>
        ))}
      </div>
    </Section>
  );
}
