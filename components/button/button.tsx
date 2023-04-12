import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";
import styles from "./button.module.css";
import cn from "classnames";

interface Ibutton
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  appearance: "primary" | "ghost";
}

function Button({ children, appearance, className, ...props }: Ibutton) {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearance === "primary",
        [styles.ghost]: appearance === "ghost",
      })}
      {...props}
    >
      {children}
    </button>
  );
}

export { Button };

