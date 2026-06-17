"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { company } from "@/data/company";
import { useDictionary } from "@/i18n/LocaleProvider";

export function HeroCompany() {
  const t = useDictionary();

  return (
    <section className="relative overflow-hidden bg-[#0f1a24] text-white border-b border-white/10">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_-10%,rgba(0,165,181,0.18),transparent)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_0%_100%,rgba(0,95,138,0.22),transparent)]"
        aria-hidden
      />

      <Container className="relative py-16 sm:py-20 lg:py-24">
        <div className="max-w-4xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-brand-accent mb-8">
            {t.home.hero.label}
          </p>

          <div className="mb-8">
            <Image
              src={company.logo}
              alt={company.name}
              width={320}
              height={128}
              priority
              className="h-24 sm:h-28 lg:h-32 w-auto max-w-[320px] object-contain"
              style={{ width: "auto", height: "auto" }}
            />
            <h1 className="mt-5 text-xl sm:text-2xl font-semibold text-white tracking-wide">
              {t.home.hero.title}
            </h1>
          </div>

          <p className="text-xl sm:text-2xl lg:text-[1.75rem] font-semibold leading-snug tracking-tight text-white/95 mb-6">
            {t.home.hero.tagline}
          </p>

          <p className="text-base sm:text-lg text-white/70 leading-relaxed mb-10 max-w-3xl">
            {t.home.hero.intro}
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <Button href="/products" variant="primary" size="lg">
              {t.home.hero.ctaProducts}
              <ArrowRight size={16} />
            </Button>
            <Button href="/about" variant="on-dark" size="lg">
              {t.home.hero.ctaAbout}
            </Button>
            <Button href="/contact" variant="on-dark" size="lg">
              {t.common.getQuote}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
