import { type ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

/**
 * Single site-wide content container.
 * All page sections should use this — never nest inside grid columns.
 */
export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
