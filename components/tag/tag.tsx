import { ReactNode } from "react";
import cn from "classnames";
import styles from "./tag.module.css";

interface ITag {
  size?: "small" | "big";
  children: ReactNode;
  color?: "ghost" | "red" | "gray" | "green" | "primary";
  href?: string;
}

function Tag({ size, children, href, color }: ITag) {
  return (
    <div
      className={cn(styles.tag, {
        [styles.small]: size === "small",
        [styles.medium]: size === "big",
        [styles.ghost]: color === "ghost",
        [styles.red]: color === "red",
        [styles.gray]: color === "gray",
        [styles.green]: color === "green",
        [styles.primary]: color === "primary",
      })}
    >
      {href ? <a href={href}> {children}</a> : children}
    </div>
  );
}

export { Tag };
