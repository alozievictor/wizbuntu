import React from "react";

type ButtonVariant = "primary" | "outline" | "footer-outline";

type CommonProps = {
  variant?: ButtonVariant;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  children?: React.ReactNode;
};

type AnchorProps = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "type"> & {
    href: string;
  };

type NativeButtonProps = CommonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonProps = AnchorProps | NativeButtonProps;

const Button = ({
  variant = "primary",
  icon,
  iconPosition = "right",
  className = "",
  children,
  href,
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

  if (href) {
    const { href: anchorHref, ...anchorProps } = props as AnchorProps;
    return (
      <a
        className={`${baseClasses} ${variantClasses} ${className}`}
        href={anchorHref}
        {...(anchorProps as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {iconPosition === "left" && iconElement}
        <span>{children}</span>
        {iconPosition === "right" && iconElement}
      </a>
    );
  }

  const { type, ...buttonProps } = props as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button
      type={type ?? "button"}
      className={`${baseClasses} ${variantClasses} ${className}`}
      {...buttonProps}
    >
      {iconPosition === "left" && iconElement}
      <span>{children}</span>
      {iconPosition === "right" && iconElement}
    </button>
  );
};

export default Button;
