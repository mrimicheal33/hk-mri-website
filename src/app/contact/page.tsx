import type { Metadata } from "next";
import { ContactContent } from "@/components/pages/ContactContent";
import { getDictionary } from "@/i18n/get-dictionary";
import { getLocale } from "@/i18n/get-locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = getDictionary(locale).metadata;
  return { title: t.contactTitle, description: t.contactDescription };
}

export default function ContactPage() {
  return <ContactContent />;
}
