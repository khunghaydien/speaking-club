import clsx from "clsx";
import React, { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap transition-colors disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      intent: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-muted-foreground/20",
        ghost: "bg-accent",
        outline:
          "border border-input bg-background hover:bg-muted-foreground/10",
      },
      size: {
        default: "h-9 px-4 py-2 text-base font-medium",
        xs: "h-6 px-1 py-1 text-xs font-medium",
        sm: "h-8 px-2 py-1 text-sm font-medium",
        lg: "h-10 px-6 py-3 text-lg font-bold",
        xl: "h-12 px-8 py-4 text-xl font-bold",
      },
      shadow: {
        default: "shadow-none",
        md: "shadow-md",
        sm: "shadow-sm",
        lg: "shadow-lg",
        xl: "shadow-xl",
        inner: "shadow-inner",
      },
      roundness: {
        none: "rounded-none",
        default: "rounded-md",
        sm: "rounded-sm",
        lg: "rounded-lg",
        xl: "rounded-xl",
        full: "rounded-full",
      },
    },
    defaultVariants: {
      intent: "default",
      size: "default",
      shadow: "default",
      roundness: "default",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, intent, size, shadow, roundness, children, ...props }, ref) => {
    return (
      <button
        className={clsx(
          buttonVariants({ intent, size, shadow, roundness, className })
        )}
        {...props}
        ref={ref}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
