import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

export type SectionSize = "sm" | "md" | "lg" | "xl" | "none";
export type SectionVariant =
  | "default"
  | "primary"
  | "secondary"
  | "dark"
  | "light"
  | "gradient"
  | "none";

export type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  size?: SectionSize;
  variant?: SectionVariant;
  containerSize?: "sm" | "md" | "lg" | "xl" | "2xl" | "full" | "responsive";
  as?: ElementType;
  fullWidth?: boolean;
  noContainer?: boolean;
  noPadding?: boolean;
  ariaLabel?: string;
};

// Define spacing values for consistency across the site
const sectionSizes = {
  none: "", // No padding
  sm: "py-8 md:py-12", // Small sections
  md: "py-12 md:py-16", // Medium sections (default)
  lg: "py-16 md:py-20", // Large sections
  xl: "py-20 md:py-24", // Extra large sections (used sparingly)
};

// Define background styles for different section variants
const sectionVariants = {
  none: "",
  default: "bg-white",
  primary: "bg-[#1e3a5f] text-white",
  secondary: "bg-[#0d9488] text-white",
  dark: "bg-gray-900 text-white",
  light: "bg-slate-50",
  gradient:
    "bg-gradient-to-r from-gray-950 via-slate-900 to-gray-800 text-white",
};

export function Section({
  children,
  className,
  id,
  size = "md",
  variant = "default",
  containerSize = "responsive",
  as: Component = "section",
  fullWidth = false,
  noContainer = false,
  noPadding = false,
  ariaLabel,
}: SectionProps) {
  const sectionClassName = cn(
    // Only add padding if not explicitly disabled
    !noPadding && sectionSizes[size],
    sectionVariants[variant],
    className,
  );

  return (
    <Component id={id} className={sectionClassName} aria-label={ariaLabel}>
      {fullWidth || noContainer ? (
        children
      ) : (
        <Container size={containerSize}>{children}</Container>
      )}
    </Component>
  );
}
