import React from "react";
import format from "date-fns/format";
import ptBr from "date-fns/locale/pt-BR";
import styles from "./styles.module.scss";
import Link from "next/link";

export function Header() {
  const currentDate = format(new Date(), "EEEEEE,  d MMMM", { locale: ptBr });
  return (
    <header className={styles.headerContainer}>
      <Link href="/">
        <a>
          <img src="/logo.svg" alt="PodCast" />
        </a>
      </Link>
      <p>O melhor para você ouvir, sempre</p>
      <span>{currentDate}</span>
    </header>
  );
}
