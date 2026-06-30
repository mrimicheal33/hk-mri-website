"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/** Instant scroll to top on route change — avoids flash/jank from smooth scrolling during navigation. */
export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
