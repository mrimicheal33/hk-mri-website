"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useDictionary } from "@/i18n/LocaleProvider";

interface SonoEyeProbeBreadcrumbProps {
  model: string;
}

export function SonoEyeProbeBreadcrumb({ model }: SonoEyeProbeBreadcrumbProps) {
  const t = useDictionary();

  return (
    <nav className="flex flex-wrap items-center gap-2 text-sm mb-10">
      <Link href="/" className="text-text-muted hover:text-brand">
        {t.common.home}
      </Link>
      <ChevronRight size={14} className="text-border-strong" />
      <Link href="/products" className="text-text-muted hover:text-brand">
        {t.nav.products}
      </Link>
      <ChevronRight size={14} className="text-border-strong" />
      <Link href="/products/sonoeye" className="text-text-muted hover:text-brand">
        CHISON SonoEye
      </Link>
      <ChevronRight size={14} className="text-border-strong" />
      <span className="font-medium text-text-primary">SonoEye {model}</span>
    </nav>
  );
}
