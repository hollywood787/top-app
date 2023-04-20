import { ReactNode } from "react";
import styles from "./htag.module.css";
import { Header } from "./header/header";
import { Sidebar } from "./sidebar/sidebar";
import { Footer } from "./footer/footer";

interface ILayout {
  children: ReactNode;
}

export function Layout({ children }: ILayout) {
  return (
    <>
      <Header />
      <div>
        <Sidebar />
        <div>{children}</div>
      </div>
      <Footer />
    </>
  );
}

