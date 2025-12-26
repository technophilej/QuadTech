import type { ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";

export type ContainerSize =
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "full"
  | "responsive";

export type ContainerProps = {
  children: ReactNode;
  size?: ContainerSize;
  className?: string;
  as?: ElementType;
  fullWidthOnMobile?: boolean;
};

/**
 * Container component with responsive max-width
 * - sm: max-width 640px
 * - md: max-width 768px
 * - lg: max-width 1024px
 * - xl: max-width 1280px
 * - 2xl: max-width 1440px
 * - full: width 100%
 * - responsive: max-width 1280px by default, 1440px on screens >= 1600px
 */
export function Container({
  children,
  size = "responsive",
  className,
  as: Component = "div",
  fullWidthOnMobile = false,
}: ContainerProps) {
  const sizeClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    "2xl": "max-w-[1440px]",
    full: "",
    responsive: "max-w-[1280px] 2xl:max-w-[1440px]",
  };

  return (
    <Component
      className={cn(
        "w-full mx-auto",
        fullWidthOnMobile
          ? "px-0 sm:px-4 md:px-6 lg:px-8"
          : "px-4 sm:px-6 lg:px-8",
        sizeClasses[size],
        className,
      )}
    >
      {children}
    </Component>
  );
}

/**
 * Content container with max-width optimized for text readability
 */
export function ContentContainer({
  children,
  className,
  as: Component = "div",
}: Omit<ContainerProps, "size" | "fullWidthOnMobile">) {
  return (
    <Component
      className={cn(
        "max-w-prose mx-auto w-full px-4 sm:px-6 lg:px-0",
        className,
      )}
    >
      {children}
    </Component>
  );
}

/**
 * Section with background that extends full-width but constrains content
 */
export function FullWidthSection({
  children,
  className,
  contentClassName,
  containerSize = "responsive",
  as: Component = "section",
}: ContainerProps & {
  contentClassName?: string;
  containerSize?: ContainerSize;
}) {
  return (
    <Component className={cn("w-full", className)}>
      <Container size={containerSize} className={contentClassName}>
        {children}
      </Container>
    </Component>
  );
}
