"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { company } from "@/data/company";
import { useDictionary } from "@/i18n/LocaleProvider";

export function Header() {
  const t = useDictionary();
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: t.nav.home },
    { href: "/products", label: t.nav.products },
    { href: "/about", label: t.nav.about },
    { href: "/contact", label: t.nav.contact },
  ];

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const linkClass = (href: string) =>
    `text-sm font-bold whitespace-nowrap transition-colors ${
      isActive(href)
        ? "text-brand"
        : "text-text-primary hover:text-brand"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-white border-b-2 border-text-primary/10 shadow-sm">
      <Container>
        <div className="flex items-center justify-between h-14 lg:h-16 gap-6">
          <Link
            href="/"
            className="shrink-0 inline-flex items-end gap-1 sm:gap-1.5 h-full py-1.5 lg:py-2"
            aria-label={company.name}
          >
            <Image
              src={company.logo}
              alt=""
              width={160}
              height={64}
              priority
              className="h-11 sm:h-12 w-auto block shrink-0"
              style={{ width: "auto", height: "auto", maxHeight: "3rem" }}
              aria-hidden
            />
            <span className="pb-px sm:pb-0.5 text-[15px] sm:text-base font-bold text-[#0f1a24] leading-none whitespace-nowrap tracking-tight">
              {company.name}
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8 xl:gap-10 ml-auto">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={linkClass(link.href)}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <LanguageSwitcher />
            <Button href="/contact" variant="primary" size="md">
              {t.common.getQuote}
            </Button>
          </div>

          <div className="flex lg:hidden items-center gap-2 shrink-0 ml-auto">
            <LanguageSwitcher />
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className="p-2 text-text-primary"
              aria-label={t.nav.menu}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </Container>

      {open && (
        <div className="lg:hidden border-t border-border bg-white">
          <Container className="py-4">
            <nav className="flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`py-3 text-base font-semibold border-b border-border last:border-0 ${
                    isActive(link.href) ? "text-brand" : "text-text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                fullWidth
                className="mt-4"
                onClick={() => setOpen(false)}
              >
                {t.common.getQuote}
              </Button>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
