import type { Locale } from "./config";
import { sonoeyeLandingEn, sonoeyeLandingZh } from "./dictionaries/sonoeye-landing";

export function getSonoEyeLanding(
  locale: Locale,
  variant: "clinical" | "roi"
) {
  const dict = locale === "zh" ? sonoeyeLandingZh : sonoeyeLandingEn;
  return dict[variant];
}
