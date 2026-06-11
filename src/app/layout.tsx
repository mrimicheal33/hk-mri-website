import type { Metadata } from "next";
import { Inter, Noto_Sans_TC } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { LocaleProvider } from "@/i18n/LocaleProvider";
import { company } from "@/data/company";
import { getDictionary } from "@/i18n/get-dictionary";
import { getLocale } from "@/i18n/get-locale";
import "./globals.css";

const notoSansTC = Noto_Sans_TC({
  variable: "--font-noto-sans-tc",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = getDictionary(locale).metadata;

  return {
    title: {
      default: t.siteTitle,
      template: `%s | ${company.shortName}`,
    },
    description: t.siteDescription,
    keywords: [
      "HK MRI",
      "CHISON SonoEye",
      "MINDRAY",
      "UNITED IMAGING",
      "medical equipment",
      "ultrasound",
      "Hong Kong",
      "Macau",
    ],
  };
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const dictionary = getDictionary(locale);

  return (
    <html
      lang={locale === "zh" ? "zh-Hant" : "en"}
      className={`${notoSansTC.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased text-text-primary">
        <LocaleProvider locale={locale} dictionary={dictionary}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}
