"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { company } from "@/data/company";
import { useDictionary } from "@/i18n/LocaleProvider";

interface ProductCTAProps {
  title?: string;
  description?: string;
}

export function ProductCTA({ title, description }: ProductCTAProps) {
  const t = useDictionary();

  return (
    <section className="bg-surface-muted border-t border-border">
      <Container className="py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl lg:text-3xl font-semibold text-text-primary mb-4">
            {title ?? t.productCta.defaultTitle}
          </h2>
          <p className="text-text-secondary leading-relaxed mb-8">
            {description ?? t.productCta.defaultDesc}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button href="/contact" variant="primary" size="lg">
              {t.common.getQuote}
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
        </div>
      </Container>
    </section>
  );
}
