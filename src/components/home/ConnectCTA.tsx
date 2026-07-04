"use client";

import { Mail, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { company } from "@/data/company";
import { useDictionary } from "@/i18n/LocaleProvider";

export function ConnectCTA() {
  const t = useDictionary();

  return (
    <section className="bg-surface-muted border-t border-border">
      <Container className="py-16 lg:py-20">
        <div className="max-w-3xl">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand mb-4">
            {t.home.connect.label}
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-text-primary leading-tight mb-5">
            {t.home.connect.title}
          </h2>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-4">
            {t.home.connect.description}
          </p>
          <p className="text-sm text-text-muted leading-relaxed mb-8">
            {t.home.connect.closing}
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-8 text-text-secondary text-sm">
            <a
              href={`mailto:${company.contact.email}`}
              className="inline-flex items-center gap-2 hover:text-brand transition-colors"
            >
              <Mail size={16} />
              {company.contact.email}
            </a>
            <a
              href={`tel:${company.contact.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 hover:text-brand transition-colors"
            >
              <Phone size={16} />
              {company.contact.phone}
            </a>
            <a
              href={company.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-brand transition-colors"
            >
              <MessageCircle size={16} />
              WhatsApp {company.contact.whatsappPhone}
            </a>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
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
