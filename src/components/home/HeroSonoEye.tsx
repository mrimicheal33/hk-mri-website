"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ProductImage } from "@/components/products/ProductImage";
import { Container } from "@/components/ui/Container";
import { company } from "@/data/company";
import { useDictionary } from "@/i18n/LocaleProvider";

export function HeroSonoEye() {
  const t = useDictionary();

  return (
    <section className="bg-white border-b border-border">
      <Container className="py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="min-w-0 order-2 lg:order-1">
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <Badge variant="brand">{t.common.exclusiveAgent}</Badge>
              <Badge variant="neutral">{t.common.featuredProduct}</Badge>
            </div>

            <Image
              src="/images/brands/chison.webp"
              alt="CHISON"
              width={120}
              height={36}
              className="h-7 w-auto object-contain mb-6"
            />

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight tracking-tight text-text-primary mb-3">
              SonoEye
            </h1>
            <p className="text-lg sm:text-xl text-text-secondary mb-6">
              {t.home.hero.subtitle}
            </p>

            <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-8">
              {t.home.hero.description}
            </p>

            <ul className="space-y-2 mb-8">
              {t.home.hero.features.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm sm:text-base text-text-secondary"
                >
                  <span className="w-1.5 h-1.5 bg-brand shrink-0 rounded-full" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
              <Button href="/sonoeye/clinical" variant="primary" size="lg">
                {t.common.exploreSonoeye}
                <ArrowRight size={16} />
              </Button>
              <Button href="/contact" variant="outline" size="lg">
                {t.common.getQuote}
              </Button>
              <Button
                href={company.contact.whatsapp}
                variant="whatsapp"
                size="lg"
                external
              >
                {t.common.whatsapp}
              </Button>
            </div>
          </div>

          <div className="min-w-0 order-1 lg:order-2">
            <div className="relative w-full aspect-[16/10] bg-surface-muted overflow-hidden">
              <ProductImage
                productId="sonoeye"
                alt="CHISON SonoEye"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-contain object-center"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
