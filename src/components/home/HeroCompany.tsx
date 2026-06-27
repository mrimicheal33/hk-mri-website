"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { useDictionary } from "@/i18n/LocaleProvider";

export function HeroCompany() {
  const t = useDictionary();

  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        <Image
          src={t.home.hero.backgroundImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0f1a24]/92 via-[#0f1a24]/78 to-[#0f1a24]/55"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0f1a24]/75 via-[#0f1a24]/20 to-[#0f1a24]/35"
        aria-hidden
      />

      <Container className="relative py-20 sm:py-24 lg:py-28">
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-accent mb-5">
            {t.home.hero.label}
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold uppercase leading-[1.05] tracking-tight mb-6">
            <span className="text-white">{t.home.hero.headlineLead}</span>
            <br />
            <span className="text-brand-accent">{t.home.hero.headlineAccent}</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/85 leading-relaxed mb-10 max-w-2xl">
            {t.home.hero.intro}
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4">
            <Button href="/about" variant="on-dark" size="lg">
              {t.home.hero.ctaAbout}
            </Button>
            <Button href="/products" variant="primary" size="lg">
              {t.home.hero.ctaProducts}
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
