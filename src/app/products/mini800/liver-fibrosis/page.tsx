import type { Metadata } from "next";
import { Mini800LiverFibrosisContent } from "@/components/products/Mini800LiverFibrosisContent";
import { getDictionary } from "@/i18n/get-dictionary";
import { getLocale } from "@/i18n/get-locale";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = getDictionary(locale).metadata;
  return {
    title: t.mini800LiverTitle,
    description: t.mini800LiverDescription,
  };
}

export default function Mini800LiverFibrosisPage() {
  return <Mini800LiverFibrosisContent />;
}
