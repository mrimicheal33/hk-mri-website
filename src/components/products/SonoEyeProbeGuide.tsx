"use client";

import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { useDictionary } from "@/i18n/LocaleProvider";

const probeImages: Record<string, string> = {
  P1: "/images/products/sonoeye-probes/p1.png",
  P2: "/images/products/sonoeye-probes/p2.png",
  P3: "/images/products/sonoeye-probes/p3.png",
  P5: "/images/products/sonoeye-probes/p5.png",
  P6: "/images/products/sonoeye-probes/p6.png",
};

export function SonoEyeProbeGuide() {
  const t = useDictionary();
  const { probes } = t.sonoeye;

  return (
    <Section muted border>
      <SectionHeading
        label={probes.label}
        title={probes.title}
        description={probes.description}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
        {probes.items.map((probe) => (
          <div key={probe.model} className="bg-white min-w-0 flex flex-col">
            {probeImages[probe.model] && (
              <div className="relative w-full aspect-[3/4] bg-white border-b border-border">
                <Image
                  src={probeImages[probe.model]}
                  alt={`SonoEye ${probe.model}`}
                  fill
                  unoptimized
                  className="object-contain px-6 py-8"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            )}
            <div className="p-6 sm:p-8 flex-1">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand mb-2">
                SonoEye {probe.model}
              </p>
              <h3 className="text-base font-semibold text-text-primary mb-3 leading-snug">
                {probe.spec}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">{probe.use}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
