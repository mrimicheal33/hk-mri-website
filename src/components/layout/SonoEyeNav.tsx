"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { useDictionary } from "@/i18n/LocaleProvider";

const sonoeyePaths = ["/sonoeye/clinical", "/sonoeye/roi", "/products/sonoeye"];

export function SonoEyeNav({ onNavigate }: { onNavigate?: () => void }) {
  const t = useDictionary();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const links = [
    { href: "/sonoeye/clinical", label: t.nav.sonoeyeClinical },
    { href: "/sonoeye/roi", label: t.nav.sonoeyeRoi },
    { href: "/products/sonoeye", label: t.nav.sonoeyeSpecs },
  ];

  const isActive = sonoeyePaths.some((p) => pathname.startsWith(p));

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className={`inline-flex items-center gap-1 text-sm font-medium whitespace-nowrap transition-colors ${
          isActive
            ? "text-brand"
            : "text-text-secondary hover:text-text-primary"
        }`}
        aria-expanded={open}
        aria-haspopup="true"
      >
        {t.nav.sonoeye}
        <ChevronDown
          size={14}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-2 min-w-[220px] bg-white border border-border shadow-lg py-2 z-50">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => {
                setOpen(false);
                onNavigate?.();
              }}
              className={`block px-4 py-2.5 text-sm transition-colors ${
                pathname.startsWith(link.href)
                  ? "text-brand bg-brand-light/50 font-medium"
                  : "text-text-secondary hover:text-brand hover:bg-surface-muted"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export function SonoEyeNavMobile({ onNavigate }: { onNavigate?: () => void }) {
  const t = useDictionary();
  const pathname = usePathname();

  const links = [
    { href: "/sonoeye/clinical", label: t.nav.sonoeyeClinical },
    { href: "/sonoeye/roi", label: t.nav.sonoeyeRoi },
    { href: "/products/sonoeye", label: t.nav.sonoeyeSpecs },
  ];

  return (
    <div className="py-2 border-b border-border">
      <p className="py-2 text-base font-medium text-brand">{t.nav.sonoeye}</p>
      <div className="pl-4 space-y-1 pb-2">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onNavigate}
            className={`block py-2 text-sm ${
              pathname.startsWith(link.href)
                ? "text-brand font-medium"
                : "text-text-secondary"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
