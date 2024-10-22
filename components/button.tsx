import clsx from "clsx";
import React, { forwardRef } from "react";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md whitespace-nowrap transition-colors disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        secondary:
          "bg-muted-foreground/10 text-secondary-foreground shadow-sm hover:bg-muted-foreground/20",
        ghost: "hover:bg-accent hover:bg-muted-foreground/10",
        outline:
          "border border-input bg-background shadow-sm hover:bg-muted-foreground/10",
      },
      size: {
        default: "h-9 px-4 py-2 text-md font-medium",
        xs: "h-6 px-3 py-1 text-xs font-medium",
        sm: "h-8 px-4 py-2 text-sm font-medium",
        lg: "h-10 px-6 py-3 text-lg font-bold",
        xl: "h-12 px-6 py-3 text-xl font-bold",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <button
        className={clsx(buttonVariants({ variant, size, className }))}
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
