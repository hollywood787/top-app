import { ReactNode } from "react";
import styles from "./layout.module.css";
import { Header } from "./header/header";
import { Sidebar } from "./sidebar/sidebar";
import { Footer } from "./footer/footer";

interface ILayout {
  children: ReactNode;
}

export function Layout({ children }: ILayout) {
  return (
    <div className={styles.wrapper}>
      <Header className={styles.header} />
      <Sidebar className={styles.sidebar} />
      <div className={styles.body}>{children}</div>
      <Footer className={styles.footer} />
    </div>
  );
}

