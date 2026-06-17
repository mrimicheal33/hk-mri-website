"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { SonoEyeNav, SonoEyeNavMobile } from "@/components/layout/SonoEyeNav";
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

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      <Container>
        <div className="flex items-center justify-between h-16 lg:h-[4.5rem] gap-4">
          <nav className="hidden lg:flex items-center gap-8 flex-1">
            {navLinks.slice(0, 2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium whitespace-nowrap transition-colors ${
                  isActive(link.href)
                    ? "text-brand"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <SonoEyeNav />
            {navLinks.slice(2).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium whitespace-nowrap transition-colors ${
                  isActive(link.href)
                    ? "text-brand"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <LanguageSwitcher />
            <Button href="/contact" variant="primary" size="md">
              {t.common.getQuote}
            </Button>
          </div>

          <div className="flex lg:hidden items-center gap-2 shrink-0">
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
              {navLinks.slice(0, 2).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`py-3 text-base font-medium border-b border-border ${
                    isActive(link.href) ? "text-brand" : "text-text-primary"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <SonoEyeNavMobile onNavigate={() => setOpen(false)} />
              {navLinks.slice(2).map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`py-3 text-base font-medium border-b border-border last:border-0 ${
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
