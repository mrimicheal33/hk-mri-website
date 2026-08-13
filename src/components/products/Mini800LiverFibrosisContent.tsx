"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ProductCTA } from "@/components/products/ProductCTA";
import { useDictionary } from "@/i18n/LocaleProvider";
import { formatString } from "@/i18n/utils";

const IMAGE = "/images/products/mini800-liver-fibrosis.png";

export function Mini800LiverFibrosisContent() {
  const t = useDictionary();
  const page = t.mini800Science.page;

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
            <Link href="/products/mini800" className="text-text-muted hover:text-brand">
              iLivTouch Mini800
            </Link>
            <ChevronRight size={14} className="text-border-strong" />
            <span className="font-medium text-text-primary">{page.title}</span>
          </nav>

          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand mb-4">
            {page.principlesLabel}
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
            <div className="relative w-full aspect-[4/3] bg-white border border-border overflow-hidden">
              <Image
                src={IMAGE}
                alt={t.mini800Science.imageAlt}
                fill
                unoptimized
                priority
                className="object-contain p-4 sm:p-6"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-semibold text-text-primary mb-3">
                {page.sampleTitle}
              </h2>
              <p className="text-text-secondary leading-relaxed mb-6">
                {page.sampleLead}
              </p>
              <ul className="space-y-3">
                {page.sampleItems.map((item) => (
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
              {page.principlesTitle}
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              {page.principlesBody}
            </p>
            <p className="text-sm italic text-text-primary border-l-2 border-brand pl-4">
              {page.shearNote}
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-xl sm:text-2xl font-semibold text-text-primary mb-3">
              {page.guidelinesTitle}
            </h2>
            <p className="text-text-secondary leading-relaxed mb-6 max-w-3xl">
              {page.guidelinesIntro}
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {page.guidelines.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-text-secondary bg-surface-muted border border-border px-4 py-3"
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

          <div className="mb-4">
            <h2 className="text-xl sm:text-2xl font-semibold text-text-primary mb-6">
              {page.outputsTitle}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {page.outputs.map((item) => (
                <article
                  key={item.title}
                  className="border border-border bg-white p-6"
                >
                  <h3 className="text-sm font-semibold text-text-primary mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-surface-muted border-b border-border">
        <Container className="py-14 lg:py-20">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand mb-3">
            {page.rationaleLabel}
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight mb-8 max-w-3xl">
            {page.rationaleTitle}
          </h2>
          <blockquote className="max-w-3xl mb-8 border-l-2 border-brand pl-5">
            <p className="text-lg text-text-primary italic leading-relaxed mb-2">
              “{page.quote}”
            </p>
            <cite className="text-sm text-text-muted not-italic">
              {page.quoteBy}
            </cite>
          </blockquote>
          <p className="text-text-secondary leading-relaxed max-w-3xl mb-10">
            {page.rationaleBody}
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white border border-border p-6 sm:p-8">
              <h3 className="text-base font-semibold text-text-primary mb-4">
                {page.causesTitle}
              </h3>
              <ul className="space-y-3">
                {page.causes.map((item) => (
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
            <div className="bg-white border border-border p-6 sm:p-8">
              <ul className="space-y-6">
                {page.reversible.map((item, i) => (
                  <li key={item}>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand mb-2">
                      {String(i + 1).padStart(2, "0")}
                    </p>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      {item}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white border-b border-border">
        <Container className="py-14 lg:py-20">
          <h2 className="text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight mb-4">
            {page.traditionalTitle}
          </h2>
          <p className="text-text-secondary leading-relaxed max-w-3xl mb-10">
            {page.traditionalIntro}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
            {page.methods.map((method) => (
              <article
                key={method.name}
                className="border border-border bg-surface-muted p-6"
              >
                <h3 className="text-base font-semibold text-text-primary mb-4">
                  {method.name}
                </h3>
                <ul className="space-y-3">
                  {method.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 text-sm text-text-secondary"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-brand shrink-0 mt-0.5"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>

          <h2 className="text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight mb-8">
            {page.advantagesTitle}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
            {page.advantages.map((item) => (
              <article
                key={item.title}
                className="border border-border bg-white p-6 sm:p-8"
              >
                <h3 className="text-base font-semibold text-text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </article>
            ))}
          </div>

          <h2 className="text-2xl sm:text-3xl font-semibold text-text-primary tracking-tight mb-4">
            {page.departmentsTitle}
          </h2>
          <p className="text-text-secondary leading-relaxed max-w-3xl mb-6">
            {page.departmentsIntro}
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
            {page.departments.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm text-text-secondary bg-surface-muted border border-border px-4 py-3"
              >
                <CheckCircle2
                  size={16}
                  className="text-brand shrink-0 mt-0.5"
                />
                {item}
              </li>
            ))}
          </ul>

          <Button href="/products/mini800" variant="outline" size="md">
            <ArrowLeft size={16} />
            {page.backToProduct}
          </Button>
        </Container>
      </section>

      <ProductCTA
        title={formatString(t.productCta.interestTitle, {
          name: "iLivTouch Mini800",
        })}
        description={formatString(t.productCta.interestDesc, {
          brand: "HISKY",
          name: "iLivTouch Mini800",
        })}
      />
    </div>
  );
}
