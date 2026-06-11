import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BrandContent } from "@/components/pages/BrandContent";
import { brands, getBrandBySlug } from "@/data/products";
import { getLocalizedBrand } from "@/data/brand-translations";
import { getDictionary } from "@/i18n/get-dictionary";
import { getLocale } from "@/i18n/get-locale";

interface BrandPageProps {
  params: Promise<{ brandSlug: string }>;
}

export async function generateStaticParams() {
  return brands.map((brand) => ({ brandSlug: brand.slug }));
}

export async function generateMetadata({
  params,
}: BrandPageProps): Promise<Metadata> {
  const { brandSlug } = await params;
  const locale = await getLocale();
  const t = getDictionary(locale).metadata;
  const brand = getBrandBySlug(brandSlug);
  if (!brand) return { title: t.brandNotFound };
  const localized = getLocalizedBrand(brand, locale);
  return {
    title: `${brand.name} Products`,
    description: localized.description,
  };
}

export default async function BrandPage({ params }: BrandPageProps) {
  const { brandSlug } = await params;
  const brand = getBrandBySlug(brandSlug);
  if (!brand) notFound();

  return <BrandContent brand={brand} brandSlug={brandSlug} />;
}
