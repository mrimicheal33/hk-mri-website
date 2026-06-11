import { type ReactNode } from "react";
import { Container } from "@/components/ui/Container";

interface SectionProps {
  children: ReactNode;
  className?: string;
  muted?: boolean;
  border?: boolean;
  id?: string;
}

export function Section({
  children,
  className = "",
  muted = false,
  border = false,
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`py-16 lg:py-24 ${muted ? "bg-surface-muted" : "bg-white"} ${border ? "border-t border-border" : ""} ${className}`}
    >
      <Container>{children}</Container>
    </section>
  );
}
