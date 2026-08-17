"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ProductCTA } from "@/components/products/ProductCTA";
import { useDictionary } from "@/i18n/LocaleProvider";

const IMAGE = "/images/products/sonoeye-hero.png";

export function SonoEyeIntroContent() {
  const t = useDictionary();
  const page = t.sonoeyeIntro.page;

  return (
    <div>
      <section className="bg-white border-b border-border">
        <Container className="py-10 lg:py-16">
          <nav className="flex flex-wrap items-center gap-2 text-sm mb-10">
            <Link href="/" className="text-text-muted hover:text-brand">
              {t.common.home}
            </Link>
            <ChevronRight size={14} className="text-border-strong" />
            <Link href="/products" className="text-text-muted hover:text-brand">
              {t.nav.products}
            </Link>
            <ChevronRight size={14} className="text-border-strong" />
            <Link
              href="/products/sonoeye"
              className="text-text-muted hover:text-brand"
            >
              CHISON SonoEye
            </Link>
            <ChevronRight size={14} className="text-border-strong" />
            <span className="font-medium text-text-primary">{page.title}</span>
          </nav>

          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand mb-4">
            {page.settingsLabel}
          </p>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-text-primary tracking-tight mb-4 max-w-4xl">
            {page.title}
          </h1>
          <p className="text-base sm:text-lg text-text-secondary leading-relaxed mb-8 max-w-3xl">
            {page.subtitle}
          </p>
          <p className="text-text-secondary leading-relaxed max-w-3xl mb-12">
            {page.intro}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center mb-16">
            <div className="relative w-full aspect-[4/3] bg-surface-muted overflow-hidden">
              <Image
                src={IMAGE}
                alt={page.imageAlt}
                fill
                unoptimized
                priority
                className="object-contain p-6"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-text-primary mb-3">
                {page.settingsTitle}
              </h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                {page.settingsIntro}
              </p>
              <ul className="space-y-3">
                {page.settings.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-text-secondary"
                  >
                    <CheckCircle2
                      size={16}
                      className="text-brand shrink-0 mt-0.5"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="max-w-3xl mb-16">
            <h2 className="text-xl sm:text-2xl font-semibold text-text-primary mb-4">
              {page.designTitle}
            </h2>
            <p className="text-text-secondary leading-relaxed mb-6">
              {page.designIntro}
            </p>
            <ul className="space-y-3">
              {page.designItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-text-secondary"
                >
                  <CheckCircle2
                    size={16}
                    className="text-brand shrink-0 mt-0.5"
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <h2 className="text-xl sm:text-2xl font-semibold text-text-primary mb-6">
            {page.solutionsTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
            {page.solutions.map((item) => (
              <article
                key={item.title}
                className="border border-border bg-white p-6 sm:p-8"
              >
                <h3 className="text-base font-semibold text-text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface-muted border-b border-border">
        <Container className="py-14 lg:py-20">
          <h2 className="text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight mb-8">
            {page.toolsTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {page.tools.map((item) => (
              <article
                key={item.title}
                className="bg-white border border-border p-6"
              >
                <h3 className="text-sm font-semibold text-text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white border-b border-border">
        <Container className="py-14 lg:py-20">
          <h2 className="text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight mb-4">
            {page.probesTitle}
          </h2>
          <p className="text-text-secondary leading-relaxed max-w-3xl mb-8">
            {page.probesIntro}
          </p>

          <div className="overflow-x-auto border border-border mb-16">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead className="bg-surface-muted text-text-primary">
                <tr>
                  <th className="px-4 py-3 font-semibold">
                    {page.probesHeaders.model}
                  </th>
                  <th className="px-4 py-3 font-semibold">
                    {page.probesHeaders.center}
                  </th>
                  <th className="px-4 py-3 font-semibold">
                    {page.probesHeaders.freq}
                  </th>
                  <th className="px-4 py-3 font-semibold">
                    {page.probesHeaders.elements}
                  </th>
                  <th className="px-4 py-3 font-semibold">
                    {page.probesHeaders.fov}
                  </th>
                  <th className="px-4 py-3 font-semibold">
                    {page.probesHeaders.depth}
                  </th>
                  <th className="px-4 py-3 font-semibold">
                    {page.probesHeaders.apps}
                  </th>
                </tr>
              </thead>
              <tbody>
                {page.probes.map((probe) => (
                  <tr key={probe.model} className="border-t border-border">
                    <td className="px-4 py-3 font-medium text-text-primary whitespace-nowrap">
                      {probe.href ? (
                        <Link
                          href={probe.href}
                          className="text-brand hover:underline"
                        >
                          SonoEye {probe.model}
                        </Link>
                      ) : (
                        <>SonoEye {probe.model}</>
                      )}
                    </td>
                    <td className="px-4 py-3 text-text-secondary">
                      {probe.center}
                    </td>
                    <td className="px-4 py-3 text-text-secondary">
                      {probe.freq}
                    </td>
                    <td className="px-4 py-3 text-text-secondary">
                      {probe.elements}
                    </td>
                    <td className="px-4 py-3 text-text-secondary">
                      {probe.fov}
                    </td>
                    <td className="px-4 py-3 text-text-secondary">
                      {probe.depth}
                    </td>
                    <td className="px-4 py-3 text-text-secondary">
                      {probe.apps}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight mb-4">
            {page.studyTitle}
          </h2>
          <p className="text-text-secondary leading-relaxed max-w-3xl mb-4">
            {page.studyBody}
          </p>
          <p className="text-sm italic text-text-muted max-w-3xl mb-10">
            {page.studyCite}
          </p>

          <Button href="/products/sonoeye" variant="outline" size="md">
            <ArrowLeft size={16} />
            {page.backToProduct}
          </Button>
        </Container>
      </section>

      <ProductCTA
        title={t.sonoeye.cta.title}
        description={t.sonoeye.cta.description}
      />
    </div>
  );
}
