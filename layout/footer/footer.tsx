import classNames from "classnames";
import styles from "./footer.module.css";
import cn from "classnames";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { format } from "date-fns";

interface IFooter
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {}

function Footer({ className, ...props }: IFooter) {
  return (
    <div className={cn(className, styles.footer)} {...props}>
      <div>OwlTop © 2020 - {format(new Date(), "yyyy")} Все права защищены</div>
      <a href="#" target="_blank">
        Пользовательское соглашение
      </a>
      <a href="#" target="_blank">
        Политика конфиденциальности
      </a>
    </div>
  );
}

export { Footer };

