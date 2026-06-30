"use client";

import { type FormEvent, useState } from "react";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { company } from "@/data/company";
import { useDictionary } from "@/i18n/LocaleProvider";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function ContactContent() {
  const t = useDictionary();
  const [status, setStatus] = useState<FormStatus>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const productField = form.elements.namedItem("product") as HTMLSelectElement | null;
    const productLabel = productField?.selectedOptions[0]?.text?.trim() ?? "";

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name || !email || !emailPattern.test(email)) {
      setStatus("error");
      return;
    }

    const inquiryEmail = company.contact.inquiryEmail;

    try {
      // FormSubmit only accepts browser-originated requests, not server-side proxies.
      const response = await fetch(
        `https://formsubmit.co/ajax/${encodeURIComponent(inquiryEmail)}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            product: productLabel,
            message,
            _subject: `Quote Inquiry from ${name} — HK MRI Instrument`,
            _replyto: email,
            _captcha: "false",
            _template: "table",
          }),
        }
      );

      let data: { success?: string; message?: string } = {};
      try {
        data = (await response.json()) as { success?: string; message?: string };
      } catch {
        setStatus("error");
        return;
      }

      if (!response.ok || data.success !== "true") {
        setStatus("error");
        return;
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  const contactMethods = [
    {
      icon: Mail,
      label: t.contact.email,
      value: company.contact.email,
      href: `mailto:${company.contact.email}`,
    },
    {
      icon: Phone,
      label: t.contact.phone,
      value: company.contact.phone,
      href: `tel:${company.contact.phone.replace(/\s/g, "")}`,
    },
    {
      icon: MessageCircle,
      label: t.contact.whatsappLabel,
      value: company.contact.whatsappPhone,
      href: company.contact.whatsapp,
    },
    {
      icon: MapPin,
      label: t.contact.address,
      value: t.company.address,
    },
  ];

  return (
    <div>
      <section className="bg-white border-b border-border">
        <Container className="py-16 lg:py-20">
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-brand mb-4">
            {t.contact.label}
          </p>
          <h1 className="text-4xl lg:text-5xl font-semibold text-text-primary tracking-tight mb-5">
            {t.contact.heading}
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl leading-relaxed">
            {t.contact.description}
          </p>
        </Container>
      </section>

      <Section muted>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          <div className="min-w-0">
            <SectionHeading
              label="Get in Touch"
              title={t.contact.getInTouch}
              align="left"
            />
            <div className="space-y-px bg-border border border-border">
              {contactMethods.map((method) => (
                <div
                  key={method.label}
                  className="flex items-center gap-5 bg-white p-5"
                >
                  <method.icon
                    size={20}
                    strokeWidth={1.5}
                    className="text-brand shrink-0"
                  />
                  <div>
                    <div className="text-xs text-text-muted mb-0.5">
                      {method.label}
                    </div>
                    {method.href ? (
                      <a
                        href={method.href}
                        className="text-sm font-medium text-text-primary hover:text-brand transition-colors"
                        {...(method.href.startsWith("http")
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        {method.value}
                      </a>
                    ) : (
                      <span className="text-sm font-medium text-text-primary">
                        {method.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <Button
                href={company.contact.whatsapp}
                variant="whatsapp"
                size="lg"
                external
              >
                <MessageCircle size={18} />
                {t.common.whatsappInstant}
              </Button>
            </div>
          </div>

          <div className="bg-white border border-border p-6 sm:p-8 lg:p-10 min-w-0">
            <h3 className="text-xl font-semibold text-text-primary mb-2">
              {t.contact.formTitle}
            </h3>
            <p className="text-sm text-text-muted mb-8">{t.contact.formDesc}</p>

            {status === "success" ? (
              <div
                className="rounded-md border border-emerald-200 bg-emerald-50 px-4 py-4 text-sm text-emerald-900 leading-relaxed"
                role="status"
              >
                {t.contact.submitSuccess}
              </div>
            ) : (
              <form className="space-y-5" onSubmit={handleSubmit}>
                {status === "error" ? (
                  <div
                    className="rounded-md border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800"
                    role="alert"
                  >
                    {t.contact.submitError}
                  </div>
                ) : null}

                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    {t.contact.nameLabel}
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    disabled={status === "submitting"}
                    placeholder={t.contact.namePlaceholder}
                    className="w-full px-4 py-3 border border-border focus:border-brand outline-none transition-colors text-sm bg-white disabled:opacity-60"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    {t.contact.emailLabel}
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    disabled={status === "submitting"}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border border-border focus:border-brand outline-none transition-colors text-sm bg-white disabled:opacity-60"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    {t.contact.phoneLabel}
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    disabled={status === "submitting"}
                    placeholder="+852"
                    className="w-full px-4 py-3 border border-border focus:border-brand outline-none transition-colors text-sm bg-white disabled:opacity-60"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    {t.contact.productLabel}
                  </label>
                  <select
                    name="product"
                    disabled={status === "submitting"}
                    className="w-full px-4 py-3 border border-border focus:border-brand outline-none transition-colors text-sm bg-white disabled:opacity-60"
                  >
                    <option value="">{t.common.selectProduct}</option>
                    <option value="sonoeye">{t.products.interestSonoeye}</option>
                    <option value="mindray">{t.products.interestMindray}</option>
                    <option value="united-imaging">{t.products.interestUi}</option>
                    <option value="perlove">{t.products.interestPerlove}</option>
                    <option value="ilivtouch">{t.products.interestIlivtouch}</option>
                    <option value="vetoo">{t.products.interestVetoo}</option>
                    <option value="other">{t.common.other}</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary mb-2">
                    {t.contact.messageLabel}
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    disabled={status === "submitting"}
                    placeholder={t.contact.messagePlaceholder}
                    className="w-full px-4 py-3 border border-border focus:border-brand outline-none transition-colors text-sm resize-none bg-white disabled:opacity-60"
                  />
                </div>
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  disabled={status === "submitting"}
                >
                  {status === "submitting" ? t.contact.submitting : t.common.submit}
                </Button>
              </form>
            )}
          </div>
        </div>
      </Section>
    </div>
  );
}
