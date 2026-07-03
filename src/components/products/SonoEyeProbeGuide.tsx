"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getSonoEyeProbeHref, sonoeyeProbes } from "@/data/sonoeye-probes";
import { useDictionary } from "@/i18n/LocaleProvider";

export function SonoEyeProbeGuide() {
  const t = useDictionary();
  const { probes } = t.sonoeye;

  return (
    <Section muted border id="probes">
      <SectionHeading
        label={probes.label}
        title={probes.title}
        description={probes.description}
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
        {probes.items.map((probe) => {
          const asset = sonoeyeProbes.find((p) => p.model === probe.model);
          if (!asset) return null;

          return (
            <Link
              key={probe.model}
              href={getSonoEyeProbeHref(probe.slug)}
              className="group flex flex-col bg-white border border-border hover:border-brand/40 transition-colors min-w-0"
            >
              <div className="relative w-full aspect-[3/4] bg-white overflow-hidden">
                <Image
                  src={asset.image}
                  alt={`SonoEye ${probe.model}`}
                  fill
                  unoptimized
                  className="object-contain p-3 sm:p-4 group-hover:scale-[1.02] transition-transform duration-300"
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 200px"
                />
              </div>
              <div className="px-4 py-5 sm:px-5 sm:py-6 text-center border-t border-border flex-1 flex flex-col">
                <p className="text-sm sm:text-base font-semibold text-text-primary mb-1">
                  SonoEye {probe.model}
                </p>
                <p className="text-xs sm:text-sm text-text-secondary mb-4">
                  {probe.headline}
                </p>
                <div className="mt-auto flex items-center justify-center gap-1 text-xs sm:text-sm font-medium text-brand">
                  {probes.viewMore}
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-0.5 transition-transform shrink-0"
                  />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </Section>
  );
}
