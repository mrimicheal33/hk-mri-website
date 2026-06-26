interface PerlovePromoCaptionProps {
  title: string;
  subtitle: string;
  className?: string;
}

export function PerlovePromoCaption({
  title,
  subtitle,
  className = "",
}: PerlovePromoCaptionProps) {
  return (
    <div className={`text-left antialiased ${className}`}>
      <p className="text-xl sm:text-2xl font-bold text-[#1a3a6e] leading-none mb-1 font-serif">
        {title}
      </p>
      <p className="text-[11px] sm:text-xs font-semibold text-[#1a3a6e] leading-snug">
        {subtitle}
      </p>
    </div>
  );
}
