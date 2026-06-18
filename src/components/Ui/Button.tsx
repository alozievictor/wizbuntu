import React from "react";

type ButtonVariant = "primary" | "outline" | "footer-outline";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

const Button = ({
  variant = "primary",
  icon,
  iconPosition = "right",
  className = "",
  children,
  ...props
}: ButtonProps) => {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 px-6 py-2 cursor-pointer font-bold transition duration-300";

  const variantClasses = {
    primary: "bg-tertiary text-primary hover:bg-tertiary/80",
    outline:
      "border border-tertiary text-tertiary hover:border-tertiary hover:text-primary",
    "footer-outline":
      "border border-border bg-transparent text-primary hover:border-tertiary hover:bg-tertiary hover:text-primary",
  }[variant];

  const iconElement = icon ? <span className="shrink-0">{icon}</span> : null;

  const { type, ...restProps } = props;


  return (
    <button
      type={type ?? "button"}
      className={`${baseClasses} ${variantClasses} ${className}`}
      {...(restProps as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {iconPosition === "left" && iconElement}
      <span>{children}</span>
      {iconPosition === "right" && iconElement}
    </button>
  );
};

export default Button;
