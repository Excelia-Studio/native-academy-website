import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "radix-ui"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-full border border-transparent bg-clip-padding text-sm font-semibold whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring/30 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-2 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm",
        outline:
          "border-border bg-background hover:bg-accent hover:text-accent-foreground aria-expanded:bg-muted aria-expanded:text-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
        ghost:
          "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 focus-visible:ring-destructive/20",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "min-h-[44px] px-6 py-2.5 gap-2 text-sm font-semibold rounded-full [&_svg:not([class*='size-'])]:size-4",
        xs: "min-h-[28px] px-3 py-1 gap-1 text-xs font-medium rounded-full [&_svg:not([class*='size-'])]:size-3",
        sm: "min-h-[36px] px-4 py-2 gap-1.5 text-xs font-semibold rounded-full [&_svg:not([class*='size-'])]:size-3.5",
        lg: "min-h-[50px] px-7 py-3 gap-2.5 text-base font-semibold rounded-full [&_svg:not([class*='size-'])]:size-5",
        xl: "min-h-[56px] px-8 py-3.5 gap-3 text-lg font-bold rounded-full [&_svg:not([class*='size-'])]:size-5",
        icon: "size-11 p-0 rounded-full [&_svg:not([class*='size-'])]:size-4",
        "icon-xs": "size-7 p-0 rounded-full [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-9 p-0 rounded-full [&_svg:not([class*='size-'])]:size-3.5",
        "icon-lg": "size-13 p-0 rounded-full [&_svg:not([class*='size-'])]:size-5",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot.Root : "button"

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
