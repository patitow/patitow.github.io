import * as React from "react"
import { cn } from "@/lib/utils"
import { ButtonProps as BaseButtonProps } from "@/types"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>, 
          BaseButtonProps {
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = "primary", 
    size = "md", 
    disabled = false,
    loading = false,
    leftIcon,
    rightIcon,
    children,
    ...props 
  }, ref) => {
    const isDisabled = disabled || loading;
    
    const baseClasses = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden"
    
    const variants = {
      primary: "btn-primary",
      glass: "btn-glass",
      secondary: "btn-secondary",
      ghost: "bg-transparent hover:bg-white/10 text-white border border-white/20 hover:border-white/30",
    }
    
    const sizes = {
      sm: "h-8 px-3 text-xs gap-1",
      md: "h-10 px-4 py-2 text-sm gap-2",
      lg: "h-12 px-6 text-base gap-2",
    }

    return (
      <button
        className={cn(baseClasses, variants[variant], sizes[size], className)}
        ref={ref}
        disabled={isDisabled}
        {...props}
      >
        {/* Loading spinner */}
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current" />
          </div>
        )}
        
        {/* Content */}
        <div className={cn('flex items-center gap-2', loading && 'opacity-0')}>
          {leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
        </div>
      </button>
    )
  }
)
Button.displayName = "Button"

export { Button }
