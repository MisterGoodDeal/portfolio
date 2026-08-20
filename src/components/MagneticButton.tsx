import type { ButtonHTMLAttributes, ReactNode } from "react";

import clsx from "clsx";
import { Link } from "react-router-dom";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: string;
  to?: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
};

export default function MagneticButton({
  href,
  to,
  children,
  className,
  variant = "primary",
  ...props
}: Props) {
  const classes = clsx(
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-transform duration-200 hover:scale-[1.03] active:scale-[0.98]",
    variant === "primary"
      ? "bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 text-void shadow-[0_0_32px_rgba(34,211,238,0.25)]"
      : "border border-white/15 bg-white/5 text-white hover:bg-white/10",
    className,
  );

  if (to) {
    return (
      <Link className={classes} to={to}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a className={classes} href={href}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} type="button" {...props}>
      {children}
    </button>
  );
}
