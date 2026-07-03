import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SonoEyeProbeDetail } from "@/components/products/SonoEyeProbeDetail";
import {
  getSonoEyeProbeBySlug,
  sonoeyeProbes,
} from "@/data/sonoeye-probes";
import { getDictionary } from "@/i18n/get-dictionary";
import { getLocale } from "@/i18n/get-locale";

interface ProbePageProps {
  params: Promise<{ probeSlug: string }>;
}

export async function generateStaticParams() {
  return sonoeyeProbes.map((probe) => ({ probeSlug: probe.slug }));
}

export async function generateMetadata({
  params,
}: ProbePageProps): Promise<Metadata> {
  const { probeSlug } = await params;
  const locale = await getLocale();
  const t = getDictionary(locale);
  const probe = getSonoEyeProbeBySlug(probeSlug);
  if (!probe) return { title: t.metadata.productNotFound };

  const detail =
    t.sonoeye.probeDetail.items[
      probeSlug as keyof typeof t.sonoeye.probeDetail.items
    ];
  return {
    title: `SonoEye ${probe.model} | CHISON Handheld Ultrasound`,
    description: detail?.applications ?? t.sonoeye.probes.description,
  };
}

export default async function SonoEyeProbePage({ params }: ProbePageProps) {
  const { probeSlug } = await params;
  const probe = getSonoEyeProbeBySlug(probeSlug);
  if (!probe) notFound();

  return <SonoEyeProbeDetail probe={probe} />;
}
