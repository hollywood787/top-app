import { ReactNode } from "react";
import styles from "./header.module.css";

function Header({...props}) {
  return <div {...props}>Header</div>;
}

export { Header };

