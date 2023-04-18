import cn from "classnames";
import styles from "./paragraph.module.css";
import { ReactNode } from "react";

interface Iparagraph {
  size?: "small" | "medium" | "big";
  children: ReactNode;
}

function Paragraph({ size = "medium", children }: Iparagraph) {
  return (
    <p
      className={cn(styles.paragraph, {
        [styles.small]: size === "small",
        [styles.medium]: size === "medium",
        [styles.big]: size === "big",
      })}
    >
      {children}
    </p>
  );
}

export { Paragraph };

