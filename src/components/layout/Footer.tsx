"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { company } from "@/data/company";
import { brands } from "@/data/products";
import { useDictionary } from "@/i18n/LocaleProvider";

export function Footer() {
  const t = useDictionary();

  return (
    <footer className="bg-footer text-white">
      <Container className="py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-4">
            <div className="mb-6">
              <Image
                src={company.logo}
                alt={company.name}
                width={220}
                height={88}
                className="h-14 w-auto max-w-[220px] object-contain"
                style={{ width: "auto", height: "auto" }}
              />
            </div>
            <p className="text-sm text-white/60 leading-relaxed max-w-sm">
              {t.company.description}
            </p>
          </div>

          <div className="lg:col-span-3 lg:col-start-6">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/40 mb-5">
              {t.footer.brands}
            </h3>
            <ul className="space-y-3">
              {brands.map((brand) => (
                <li key={brand.slug}>
                  <Link
                    href={`/brands/${brand.slug}`}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {brand.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/40 mb-5">
              {t.footer.navigation}
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/sonoeye/clinical", label: t.nav.sonoeyeClinical },
                { href: "/sonoeye/roi", label: t.nav.sonoeyeRoi },
                { href: "/products/sonoeye", label: t.nav.sonoeyeSpecs },
                { href: "/products", label: t.footer.productOverview },
                { href: "/about", label: t.nav.about },
                { href: "/contact", label: t.nav.contact },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/40 mb-5">
              {t.footer.contact}
            </h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li>{company.contact.email}</li>
              <li>{company.contact.phone}</li>
              <li>{t.company.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-4 text-xs text-white/40">
          <p>
            &copy; {new Date().getFullYear()} {company.name}
          </p>
          <p>{t.company.footerAgent}</p>
        </div>
      </Container>
    </footer>
  );
}
