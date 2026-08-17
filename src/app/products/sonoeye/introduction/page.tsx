import type { Metadata } from "next";
import { SonoEyeIntroContent } from "@/components/products/SonoEyeIntroContent";
import { getDictionary } from "@/i18n/get-dictionary";
import { getLocale } from "@/i18n/get-locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = getDictionary(locale).metadata;
  return {
    title: t.sonoeyeIntroTitle,
    description: t.sonoeyeIntroDescription,
  };
}

export default function SonoEyeIntroductionPage() {
  return <SonoEyeIntroContent />;
}
