const variants = {
  primary: "bg-secondary text-white cursor-pointer hover:bg-primary",
  secondary: "bg-primary text-white cursor-pointer hover:opacity-90",
  outline: "border border-primary text-primary cursor-pointer hover:bg-primary/5",
  ghost: "text-secondary cursor-pointer hover:bg-black/5",
  danger: "bg-red-600 text-white cursor-pointer hover:bg-red-700",
};

const sizes = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2.5 text-base",
  lg: "px-6 py-3 text-lg",
};

export default function Button({
  children,
  variant = "primary",
  size = "sm",
  icon: Icon,
  iconPosition = "left",
  iconSize = "18px",
  fullWidth = false,
  className = "",
  type = "button",
  disabled = false,
  ...props
}) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={`
        inline-flex items-center justify-center gap-2 px-7 py-3
        transition
        disabled:pointer-events-none
        disabled:opacity-50
        ${variants[variant] ?? variants.primary}
        ${sizes[size] ?? sizes.md}
        ${fullWidth ? "w-full" : ""}
        ${className}
      `}
      {...props}
    >
      {Icon && iconPosition === "left" && (
        <Icon aria-hidden="true" size={iconSize} className="shrink-0" />
      )}

      {children}

      {Icon && iconPosition === "right" && (
        <Icon aria-hidden="true" size={iconSize} className="shrink-0" />
      )}
    </button>
  );
}
