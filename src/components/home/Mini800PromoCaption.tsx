interface Mini800PromoCaptionProps {
  title: string;
  subtitle: string;
  className?: string;
  titleClassName?: string;
}

export function Mini800PromoCaption({
  title,
  subtitle,
  className = "",
  titleClassName = "text-[#6b7280]",
}: Mini800PromoCaptionProps) {
  return (
    <div className={`text-left antialiased ${className}`}>
      <p
        className={`text-xl sm:text-2xl font-bold leading-none mb-1 ${titleClassName}`}
      >
        {title}
      </p>
      <p className="text-[11px] sm:text-xs font-bold text-[#1a1a1a] leading-snug">
        {subtitle}
      </p>
    </div>
  );
}
