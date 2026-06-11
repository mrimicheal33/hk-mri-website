import Link from "next/link";
import { type ReactNode } from "react";

type Variant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "whatsapp"
  | "inverse"
  | "on-dark";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  external?: boolean;
  type?: "button" | "submit";
  fullWidth?: boolean;
  onClick?: () => void;
}

const base =
  "inline-flex items-center justify-center gap-2 font-semibold tracking-wide transition-all duration-200 ease-out rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/35 focus-visible:ring-offset-2 active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-to-b from-[#0078a8] to-brand text-white shadow-[0_1px_2px_rgba(15,26,36,0.08),0_4px_14px_rgba(0,95,138,0.28)] hover:from-[#0088bc] hover:to-brand-hover hover:shadow-[0_2px_6px_rgba(15,26,36,0.1),0_8px_20px_rgba(0,95,138,0.32)]",
  secondary:
    "bg-gradient-to-b from-[#2d3848] to-text-primary text-white shadow-[0_2px_8px_rgba(15,26,36,0.18)] hover:from-[#3a4658] hover:to-[#243040] hover:shadow-[0_4px_12px_rgba(15,26,36,0.22)]",
  outline:
    "border-2 border-brand/25 text-brand bg-white shadow-sm hover:bg-brand-light hover:border-brand hover:text-[#004a6e]",
  ghost:
    "text-text-secondary hover:text-brand hover:bg-brand-light/70",
  whatsapp:
    "bg-gradient-to-b from-[#1fc9a5] to-[#128c7e] text-white shadow-[0_2px_8px_rgba(18,140,126,0.32)] hover:from-[#28d4ad] hover:to-[#0f9d8f] hover:shadow-[0_4px_14px_rgba(18,140,126,0.38)]",
  inverse:
    "bg-white text-brand shadow-[0_2px_10px_rgba(15,26,36,0.14)] hover:bg-[#f8fbfd] hover:text-[#004a6e] hover:shadow-[0_4px_16px_rgba(15,26,36,0.18)]",
  "on-dark":
    "border-2 border-white/45 text-white bg-white/8 backdrop-blur-sm hover:bg-white/16 hover:border-white/80 hover:text-white",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-[15px] sm:text-base",
};

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className = "",
  external,
  type = "button",
  fullWidth = false,
  onClick,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${fullWidth ? "w-full" : ""} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        onClick={onClick}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
