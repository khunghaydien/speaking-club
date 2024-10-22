import clsx from "clsx";
import React, { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const iconVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-muted-foreground/10 hover:bg-muted-foreground/20",
        none: "",
      },
      size: {
        default: "h-9 w-9",
        xs: "h-6 w-6",
        sm: "h-8 w-8",
        lg: "h-10 w-10 ",
        xl: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface IconProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof iconVariants> {}

const WrappedIcon = forwardRef<HTMLDivElement, IconProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <div
        className={clsx(iconVariants({ variant, size, className }))}
        {...props}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);

WrappedIcon.displayName = "WrappedIcon";

const withIcon = (Icon: React.ComponentType) => {
  return ({
    variant = "default",
    size = "default",
    className,
    ...props
  }: {
    className?: string;
    variant?: "default" | "none";
    size?: "default" | "xs" | "sm" | "lg" | "xl";
  }) => {
    return (
      <WrappedIcon
        variant={variant}
        size={size}
        className={className}
        {...props}
      >
        <Icon />
      </WrappedIcon>
    );
  };
};
