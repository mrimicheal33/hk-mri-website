"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { company } from "@/data/company";
import { useDictionary } from "@/i18n/LocaleProvider";

export function CTABanner() {
  const t = useDictionary();

  return (
    <section className="bg-brand">
      <Container className="py-16 lg:py-20">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-4">
            {t.home.cta.label}
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white leading-tight mb-5">
            {t.home.cta.title}
          </h2>
          <p className="text-base sm:text-lg text-white/75 leading-relaxed mb-8">
            {t.home.cta.description}
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
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
        </div>
      </Container>
    </section>
  );
}
