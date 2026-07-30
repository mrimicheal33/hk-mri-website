import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SpecialtyContent } from "@/components/pages/SpecialtyContent";
import {
  isSpecialtyId,
  specialtyIds,
  type SpecialtyId,
} from "@/data/specialties";
import { getDictionary } from "@/i18n/get-dictionary";
import { getLocale } from "@/i18n/get-locale";

interface SpecialtyPageProps {
  params: Promise<{ specialtyId: string }>;
}

export function generateStaticParams() {
  return specialtyIds.map((specialtyId) => ({ specialtyId }));
}

export async function generateMetadata({
  params,
}: SpecialtyPageProps): Promise<Metadata> {
  const { specialtyId } = await params;
  const locale = await getLocale();
  const t = getDictionary(locale);

  if (!isSpecialtyId(specialtyId)) {
    return { title: t.metadata.specialtyNotFound };
  }

  const item = t.home.specialties.items.find(
    (entry) => entry.id === specialtyId,
  );
  if (!item) return { title: t.metadata.specialtyNotFound };

  return {
    title: item.specialty,
    description: item.pitch,
  };
}

export default async function SpecialtyPage({ params }: SpecialtyPageProps) {
  const { specialtyId } = await params;
  if (!isSpecialtyId(specialtyId)) notFound();

  return <SpecialtyContent specialtyId={specialtyId as SpecialtyId} />;
}
