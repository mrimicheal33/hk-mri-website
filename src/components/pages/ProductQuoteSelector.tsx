"use client";

import { getQuoteOptionGroups } from "@/data/quote-options";
import { useDictionary, useLocale } from "@/i18n/LocaleProvider";

interface ProductQuoteSelectorProps {
  disabled?: boolean;
  selectedIds: string[];
  onChange: (ids: string[]) => void;
}

export function ProductQuoteSelector({
  disabled,
  selectedIds,
  onChange,
}: ProductQuoteSelectorProps) {
  const t = useDictionary();
  const locale = useLocale();
  const groups = getQuoteOptionGroups(locale);

  function toggle(id: string, checked: boolean) {
    if (checked) {
      onChange([...selectedIds, id]);
      return;
    }
    onChange(selectedIds.filter((value) => value !== id));
  }

  return (
    <div className="border border-border bg-white">
      <div className="hidden sm:grid sm:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)_auto] gap-3 px-4 py-2.5 bg-surface-muted border-b border-border text-[11px] font-semibold uppercase tracking-[0.12em] text-text-muted">
        <span>{t.contact.quoteColBrandProduct}</span>
        <span>{t.contact.quoteColModel}</span>
        <span className="text-right">{t.contact.quoteColSelect}</span>
      </div>

      <div className="max-h-72 overflow-y-auto divide-y divide-border">
        {groups.map((group) => (
          <div key={group.brand}>
            <div className="px-4 py-2.5 bg-brand/5 border-b border-border">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand">
                {group.brand}
              </p>
            </div>
            <ul className="divide-y divide-border">
              {group.options.map((option) => {
                const checked = selectedIds.includes(option.id);
                const inputId = `quote-${option.id}`;

                return (
                  <li key={option.id}>
                    <label
                      htmlFor={inputId}
                      className={`grid grid-cols-[auto_minmax(0,1fr)] sm:grid-cols-[auto_minmax(0,1.1fr)_minmax(0,1fr)] gap-3 items-start px-4 py-3 cursor-pointer transition-colors ${
                        checked ? "bg-brand/5" : "hover:bg-surface-muted/70"
                      } ${disabled ? "opacity-60 cursor-not-allowed" : ""}`}
                    >
                      <input
                        id={inputId}
                        type="checkbox"
                        name="product"
                        value={option.id}
                        checked={checked}
                        disabled={disabled}
                        onChange={(event) =>
                          toggle(option.id, event.target.checked)
                        }
                        className="mt-1 h-4 w-4 accent-brand shrink-0"
                      />
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-text-primary">
                          {option.productName}
                        </p>
                        <p className="sm:hidden text-xs text-text-muted mt-0.5">
                          {t.contact.quoteColModel}: {option.model}
                        </p>
                      </div>
                      <p className="hidden sm:block text-sm text-text-secondary pt-0.5">
                        {option.model}
                      </p>
                    </label>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}

        <label
          htmlFor="quote-other"
          className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition-colors ${
            selectedIds.includes("other")
              ? "bg-brand/5"
              : "hover:bg-surface-muted/70"
          } ${disabled ? "opacity-60 cursor-not-allowed" : ""}`}
        >
          <input
            id="quote-other"
            type="checkbox"
            name="product"
            value="other"
            checked={selectedIds.includes("other")}
            disabled={disabled}
            onChange={(event) => toggle("other", event.target.checked)}
            className="h-4 w-4 accent-brand shrink-0"
          />
          <span className="text-sm font-medium text-text-primary">
            {t.common.other}
          </span>
        </label>
      </div>

      <p className="px-4 py-2.5 text-xs text-text-muted border-t border-border bg-surface-muted">
        {t.contact.quoteMultiHint}
      </p>
    </div>
  );
}
