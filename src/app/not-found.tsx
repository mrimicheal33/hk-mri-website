"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { useDictionary } from "@/i18n/LocaleProvider";

export default function NotFound() {
  const t = useDictionary();

  return (
    <Container className="py-24 text-center">
      <h1 className="text-4xl font-semibold text-text-primary mb-4">404</h1>
      <p className="text-lg text-text-secondary mb-2">{t.common.pageNotFound}</p>
      <p className="text-sm text-text-muted mb-8">{t.common.pageNotFoundDesc}</p>
      <Button href="/" variant="primary">
        {t.common.backHome}
      </Button>
    </Container>
  );
}
