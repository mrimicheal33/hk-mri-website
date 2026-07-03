"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { SonoEyeProbeBreadcrumb } from "@/components/products/SonoEyeProbeBreadcrumb";
import { type SonoEyeProbe } from "@/data/sonoeye-probes";
import { useDictionary } from "@/i18n/LocaleProvider";

interface SonoEyeProbeDetailProps {
  probe: SonoEyeProbe;
}

export function SonoEyeProbeDetail({ probe }: SonoEyeProbeDetailProps) {
  const t = useDictionary();
  const { probeDetail: shared } = t.sonoeye;
  const detail =
    shared.items[probe.slug as keyof typeof shared.items];
  if (!detail) return null;

  return (
    <section className="bg-white border-b border-border">
      <Container className="py-10 lg:py-16">
        <SonoEyeProbeBreadcrumb model={probe.model} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative w-full aspect-square max-w-lg mx-auto lg:max-w-none bg-white">
            <Image
              src={probe.heroImage}
              alt={`SonoEye ${probe.model}`}
              fill
              unoptimized
              priority
              className="object-contain"
              sizes="(max-width: 1024px) 90vw, 50vw"
            />
          </div>

          <div className="min-w-0">
            <h1 className="text-3xl sm:text-4xl font-semibold text-text-primary mb-4">
              SonoEye {probe.model}
            </h1>
            <p className="text-lg text-text-primary font-medium mb-3">
              {detail.specLine}
            </p>
            <p className="text-base text-text-secondary leading-relaxed mb-4">
              {detail.applications}
            </p>
            <p className="text-sm text-text-muted leading-relaxed">
              {detail.modes}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
