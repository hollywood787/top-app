import { ReactNode } from "react";
import styles from "./sidebar.module.css";

function Sidebar({ ...props }) {
  return <div { ...props }>Sidebar</div>;
}

export { Sidebar };

