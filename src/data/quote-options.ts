import type { Locale } from "@/i18n/config";
import { products, getCategoryLabel } from "@/data/products";
import { sonoeyeProbes } from "@/data/sonoeye-probes";

export interface QuoteOption {
  id: string;
  brand: string;
  productName: string;
  model: string;
}

export interface QuoteBrandGroup {
  brand: string;
  options: QuoteOption[];
}

const SONOEYE_PRODUCT_NAME: Record<Locale, string> = {
  en: "Handheld Ultrasound",
  zh: "手持超聲波",
};

function getProductLineName(
  product: (typeof products)[number],
  locale: Locale
): string {
  return getCategoryLabel(product.category, locale);
}

export function getQuoteOptionGroups(locale: Locale): QuoteBrandGroup[] {
  const groups = new Map<string, QuoteOption[]>();

  for (const product of products) {
    const brand = product.brand;

    if (product.id === "sonoeye") {
      continue;
    }

    const list = groups.get(brand) ?? [];
    list.push({
      id: product.id,
      brand,
      productName: getProductLineName(product, locale),
      model: product.name,
    });
    groups.set(brand, list);
  }

  const chisonOptions = groups.get("CHISON") ?? [];
  for (const probe of sonoeyeProbes) {
    chisonOptions.push({
      id: `sonoeye-probe-${probe.slug}`,
      brand: "CHISON",
      productName: SONOEYE_PRODUCT_NAME[locale],
      model: `SonoEye ${probe.model}`,
    });
  }
  if (chisonOptions.length > 0) {
    groups.set("CHISON", chisonOptions);
  }

  return [...groups.keys()]
    .sort((a, b) => a.localeCompare(b))
    .map((brand) => ({
      brand,
      options: groups.get(brand)!.sort(
        (a, b) =>
          a.productName.localeCompare(b.productName) ||
          a.model.localeCompare(b.model),
      ),
    }));
}

export function formatQuoteOptionLabel(
  option: QuoteOption,
  locale: Locale
): string {
  const sep = locale === "zh" ? " · " : " | ";
  return `${option.brand}${sep}${option.productName}${sep}${option.model}`;
}

export function getQuoteOptionById(
  id: string,
  locale: Locale
): QuoteOption | undefined {
  for (const group of getQuoteOptionGroups(locale)) {
    const match = group.options.find((option) => option.id === id);
    if (match) return match;
  }
  return undefined;
}

export function formatQuoteSelection(
  ids: string[],
  locale: Locale,
  otherLabel: string
): string {
  const lines = ids
    .filter((id) => id !== "other")
    .map((id) => {
      const option = getQuoteOptionById(id, locale);
      return option ? formatQuoteOptionLabel(option, locale) : id;
    });

  if (ids.includes("other")) {
    lines.push(otherLabel);
  }

  return lines.join("\n");
}
