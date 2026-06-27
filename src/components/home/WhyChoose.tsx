"use client";

import Image from "next/image";
import { Award, ShieldCheck, Wrench } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { useDictionary } from "@/i18n/LocaleProvider";

const icons = [Award, ShieldCheck, Wrench];

export function WhyChoose() {
  const t = useDictionary();

  return (
    <section className="py-20 lg:py-28 bg-surface-muted border-y border-border">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative aspect-[4/5] lg:aspect-auto lg:min-h-[560px] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(15,26,36,0.12)]">
            <Image
              src={t.home.whyChoose.image}
              alt={t.home.whyChoose.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover object-center"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#0f1a24]/50 via-transparent to-transparent"
              aria-hidden
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 lg:p-10 overflow-hidden">
              <p className="font-bold text-white leading-tight whitespace-nowrap text-[clamp(0.78rem,2.85vw,1.75rem)]">
                {t.home.whyChoose.title}
              </p>
            </div>
          </div>

          <div>
            <div className="space-y-8">
              {t.home.whyChoose.items.map((item, i) => {
                const Icon = icons[i];
                return (
                  <div
                    key={item.title}
                    className="flex gap-5 p-6 rounded-xl bg-white border border-border/80 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="shrink-0 w-12 h-12 rounded-lg bg-brand-light flex items-center justify-center">
                      <Icon
                        size={24}
                        strokeWidth={1.5}
                        className="text-brand"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-text-primary mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
