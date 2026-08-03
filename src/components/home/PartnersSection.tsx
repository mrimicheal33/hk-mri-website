"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getBrandBySlug, getBrandHref } from "@/data/products";
import { useDictionary } from "@/i18n/LocaleProvider";

const PARTNER_LOGO_SLOT_HEIGHT = 80;

/** Per-brand display bounds — CHISON needs extra height due to tall wordmark artwork. */
const PARTNER_LOGO_CONFIG: Record<string, { maxH: number; maxW: number }> = {
  chison: { maxH: 96, maxW: 340 },
  ilivtouch: { maxH: 44, maxW: 180 },
  perlove: { maxH: 34, maxW: 190 },
  sinomdt: { maxH: 38, maxW: 160 },
  vetoo: { maxH: 38, maxW: 160 },
  vinno: { maxH: 42, maxW: 180 },
  "united-imaging": { maxH: 50, maxW: 230 },
};

function PartnerBrandLogo({ src, alt, slug }: { src: string; alt: string; slug: string }) {
  const { maxH, maxW } = PARTNER_LOGO_CONFIG[slug] ?? { maxH: 48, maxW: 220 };

  return (
    <div
      className="mb-8 flex w-full items-center justify-center"
      style={{ height: PARTNER_LOGO_SLOT_HEIGHT }}
    >
      <div
        className="relative mx-auto w-full"
        style={{ height: maxH, maxWidth: maxW }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          unoptimized
          sizes={`${maxW}px`}
          className="object-contain object-center"
        />
      </div>
    </div>
  );
}

export function PartnersSection() {
  const t = useDictionary();

  const partners = [...t.home.partners.items].sort((a, b) =>
    a.name.localeCompare(b.name, undefined, { sensitivity: "base" }),
  );

  return (
    <Section muted border>
      <SectionHeading
        label={t.home.partners.label}
        title={t.home.partners.title}
        description={t.home.partners.description}
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
        {partners.map((partner) => {
          const brand = getBrandBySlug(partner.slug);
          const href = brand ? getBrandHref(brand) : `/brands/${partner.slug}`;

          return (
          <Link
            key={partner.slug}
            href={href}
            className="group bg-white p-10 lg:p-12 hover:bg-surface-muted transition-colors flex flex-col items-center text-center"
          >
            <PartnerBrandLogo
              src={partner.logo}
              alt={partner.name}
              slug={partner.slug}
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
          );
        })}
      </div>
    </Section>
  );
}
