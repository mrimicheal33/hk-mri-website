"use client";

import { ScanLine, HeartPulse } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useDictionary } from "@/i18n/LocaleProvider";

const icons = [ScanLine, HeartPulse];

export function ServicesSection() {
  const t = useDictionary();

  return (
    <Section>
      <SectionHeading
        label={t.home.services.label}
        title={t.home.services.title}
        description={t.home.services.description}
      />

      <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
        {t.home.services.items.map((service, i) => {
          const Icon = icons[i];
          return (
            <div
              key={service.title}
              className="bg-white p-8 lg:p-10 hover:bg-surface-muted transition-colors"
            >
              <Icon size={28} strokeWidth={1.5} className="text-brand mb-6" />
              <h3 className="text-lg font-semibold text-text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
