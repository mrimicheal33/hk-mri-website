interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "brand" | "neutral";
}

export function Badge({ children, variant = "default" }: BadgeProps) {
  const styles = {
    default: "bg-brand-light text-brand border border-brand/15",
    brand: "bg-brand text-white",
    neutral: "bg-surface-subtle text-text-secondary border border-border",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider ${styles[variant]}`}
    >
      {children}
    </span>
  );
}
