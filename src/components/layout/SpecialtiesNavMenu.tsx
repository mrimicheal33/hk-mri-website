"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { getSpecialtyHref } from "@/data/specialties";
import { useDictionary, useLocale } from "@/i18n/LocaleProvider";

interface SpecialtiesNavMenuProps {
  onNavigate?: () => void;
  mobile?: boolean;
}

export function SpecialtiesNavMenu({
  onNavigate,
  mobile = false,
}: SpecialtiesNavMenuProps) {
  const t = useDictionary();
  const locale = useLocale();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const items = t.home.specialties.items;
  const onSpecialtyPath = pathname.startsWith("/specialties");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const list = q
      ? items.filter(
          (item) =>
            item.specialty.toLowerCase().includes(q) ||
            item.needs.toLowerCase().includes(q) ||
            item.recommendedProducts.some(
              (p) =>
                p.name.toLowerCase().includes(q) ||
                p.brand.toLowerCase().includes(q),
            ),
        )
      : [...items];

    return list.sort((a, b) =>
      a.specialty.localeCompare(b.specialty, locale, { sensitivity: "base" }),
    );
  }, [items, locale, query]);

  useEffect(() => {
    if (!open || mobile) return;

    function handlePointer(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
        setQuery("");
      }
    }

    function handleKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        setQuery("");
      }
    }

    document.addEventListener("mousedown", handlePointer);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handlePointer);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open, mobile]);

  useEffect(() => {
    if (open && !mobile) {
      inputRef.current?.focus();
    }
  }, [open, mobile]);

  function closeMenu() {
    setOpen(false);
    setQuery("");
    onNavigate?.();
  }

  if (mobile) {
    return (
      <div className="border-b border-border">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex w-full items-center justify-between py-3 text-base font-semibold text-text-primary"
          aria-expanded={open}
        >
          {t.nav.specialties}
          <ChevronDown
            size={18}
            className={`transition-transform ${open ? "rotate-180" : ""}`}
          />
        </button>
        {open && (
          <div className="pb-3 space-y-2">
            <label className="relative block">
              <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted"
              />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={t.nav.specialtiesSearch}
                className="w-full rounded-lg border border-border bg-white py-2.5 pl-9 pr-3 text-sm text-text-primary outline-none focus:border-brand"
              />
            </label>
            <ul className="max-h-72 overflow-y-auto rounded-lg border border-border bg-white">
              {filtered.map((item) => (
                <li key={item.id}>
                  <Link
                    href={getSpecialtyHref(item.id)}
                    onClick={closeMenu}
                    className={`block px-3 py-2.5 text-sm font-medium transition-colors border-b border-border last:border-0 ${
                      pathname === getSpecialtyHref(item.id)
                        ? "bg-brand-light/70 text-brand"
                        : "text-text-primary hover:bg-brand-light/60 hover:text-brand"
                    }`}
                  >
                    {item.specialty}
                  </Link>
                </li>
              ))}
              {filtered.length === 0 && (
                <li className="px-3 py-4 text-sm text-text-muted">
                  {t.nav.specialtiesEmpty}
                </li>
              )}
            </ul>
          </div>
        )}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => {
        setOpen(false);
        setQuery("");
      }}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`inline-flex items-center gap-1.5 text-sm font-bold whitespace-nowrap transition-colors ${
          open || onSpecialtyPath
            ? "text-brand"
            : "text-text-primary hover:text-brand"
        }`}
        aria-expanded={open}
        aria-haspopup="listbox"
      >
        {t.nav.specialties}
        <ChevronDown
          size={16}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute left-1/2 top-full z-50 w-[min(22rem,calc(100vw-2rem))] -translate-x-1/2 pt-3">
          <div className="rounded-xl border border-border bg-white shadow-[0_16px_40px_rgba(15,26,36,0.12)] overflow-hidden">
            <div className="border-b border-border p-3">
              <label className="relative block">
                <Search
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted"
                />
                <input
                  ref={inputRef}
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={t.nav.specialtiesSearch}
                  className="w-full rounded-lg border border-border bg-surface-muted/50 py-2.5 pl-9 pr-3 text-sm text-text-primary outline-none focus:border-brand focus:bg-white"
                />
              </label>
            </div>
            <ul className="max-h-80 overflow-y-auto py-1" role="listbox">
              {filtered.map((item) => {
                const href = getSpecialtyHref(item.id);
                return (
                  <li key={item.id} role="option">
                    <Link
                      href={href}
                      onClick={closeMenu}
                      className={`block px-4 py-2.5 text-sm font-medium transition-colors ${
                        pathname === href
                          ? "bg-brand-light/70 text-brand"
                          : "text-text-primary hover:bg-brand-light/70 hover:text-brand"
                      }`}
                    >
                      {item.specialty}
                    </Link>
                  </li>
                );
              })}
              {filtered.length === 0 && (
                <li className="px-4 py-5 text-sm text-text-muted">
                  {t.nav.specialtiesEmpty}
                </li>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
