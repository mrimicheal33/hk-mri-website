"use client";

import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { company } from "@/data/company";
import { useDictionary } from "@/i18n/LocaleProvider";

export function ConnectCTA() {
  const t = useDictionary();

  return (
    <section className="bg-brand">
      <Container className="py-16 lg:py-20">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-4">
            {t.home.connect.label}
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white leading-tight mb-5">
            {t.home.connect.title}
          </h2>
          <p className="text-base sm:text-lg text-white/75 leading-relaxed mb-4">
            {t.home.connect.description}
          </p>
          <p className="text-sm text-white/60 leading-relaxed mb-8">
            {t.home.connect.closing}
          </p>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-8 text-white/85 text-sm">
            <a
              href={`mailto:${company.contact.email}`}
              className="inline-flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail size={16} />
              {company.contact.email}
            </a>
            <a
              href={`tel:${company.contact.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 hover:text-white transition-colors"
            >
              <Phone size={16} />
              {company.contact.phone}
            </a>
          </div>

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
