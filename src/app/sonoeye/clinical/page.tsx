import type { Metadata } from "next";
import { SonoEyeLandingPage } from "@/components/sonoeye/SonoEyeLandingPage";
import { getLocale } from "@/i18n/get-locale";
import { getSonoEyeLanding } from "@/i18n/get-sonoeye-landing";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const content = getSonoEyeLanding(locale, "clinical");
  return {
    title: content.metaTitle,
    description: content.metaDescription,
  };
}

export default function SonoEyeClinicalPage() {
  return <SonoEyeLandingPage variant="clinical" />;
}
