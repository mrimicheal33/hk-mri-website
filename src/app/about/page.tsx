import type { Metadata } from "next";
import { AboutContent } from "@/components/pages/AboutContent";
import { getDictionary } from "@/i18n/get-dictionary";
import { getLocale } from "@/i18n/get-locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = getDictionary(locale).metadata;
  return { title: t.aboutTitle, description: t.aboutDescription };
}

export default function AboutPage() {
  return <AboutContent />;
}
