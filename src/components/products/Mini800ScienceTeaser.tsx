"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { useDictionary } from "@/i18n/LocaleProvider";

const HREF = "/products/mini800/liver-fibrosis";
const IMAGE = "/images/products/mini800-liver-fibrosis.png";

export function Mini800ScienceTeaser() {
  const { mini800Science: t } = useDictionary();

  return (
    <section className="bg-surface-muted border-t border-border">
      <Container className="py-14 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <div className="relative w-full aspect-[4/3] bg-white border border-border overflow-hidden">
            <Image
              src={IMAGE}
              alt={t.imageAlt}
              fill
              unoptimized
              className="object-contain p-4 sm:p-6"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="min-w-0">
            <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand mb-3">
              {t.teaserLabel}
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight mb-4">
              {t.teaserTitle}
            </h2>
            <p className="text-text-secondary leading-relaxed mb-8">
              {t.teaserDesc}
            </p>
            <Button href={HREF} variant="primary" size="md">
              {t.button}
              <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
