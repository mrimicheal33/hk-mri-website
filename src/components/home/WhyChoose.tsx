"use client";

import { Award, ShieldCheck, Wrench } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useDictionary } from "@/i18n/LocaleProvider";

const icons = [Award, ShieldCheck, Wrench];

export function WhyChoose() {
  const t = useDictionary();

  return (
    <Section>
      <SectionHeading
        label={t.home.whyChoose.label}
        title={t.home.whyChoose.title}
      />

      <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
        {t.home.whyChoose.items.map((item, i) => {
          const Icon = icons[i];
          return (
            <div
              key={item.title}
              className="bg-white p-8 lg:p-10 hover:bg-surface-muted transition-colors"
            >
              <Icon size={28} strokeWidth={1.5} className="text-brand mb-6" />
              <h3 className="text-lg font-semibold text-text-primary mb-3">
                {item.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
