interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}

export function SectionHeading({
  label,
  title,
  description,
  align = "left",
  light = false,
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl mb-12 lg:mb-14 ${alignClass}`}>
      {label && (
        <p
          className={`text-xs font-semibold uppercase tracking-widest mb-3 ${
            light ? "text-brand-accent" : "text-brand"
          }`}
        >
          {label}
        </p>
      )}
      <h2
        className={`text-2xl sm:text-3xl lg:text-4xl font-semibold leading-tight tracking-tight mb-4 ${
          light ? "text-white" : "text-text-primary"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-base sm:text-lg leading-relaxed ${
            light ? "text-white/75" : "text-text-secondary"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
