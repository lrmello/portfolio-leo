import React from "react";
import styles from "./Nav.module.css";
import { NavLink } from "react-router-dom";

export default function Nav() {
  return (
    <div className={styles.containerNav}>
      <div className={styles.linkNav}>
        <NavLink exact to={"/"} className={styles.links}>
          Página inicial
        </NavLink>
      </div>

      <div className={styles.linkNav}>
        <NavLink to={"/conhecendo"} className={styles.links} activeClassName={styles.active}>
          Conhecendo o Léo
        </NavLink>
      </div>

      <div className={styles.linkNav}>
        <NavLink to={"/hobbies"} className={styles.links} activeClassName={styles.active}>
          Hobbies e Interesses
        </NavLink>
      </div>

      <div className={styles.linkNav}>
        <NavLink to={"/projetos"} className={styles.links} activeClassName={styles.active}>
          Projetos
        </NavLink>
      </div>

      <div className={styles.linkNav}>
        <NavLink to={"/faleconosco"} className={styles.links} activeClassName={styles.active}>
          Fale conosco
        </NavLink>
      </div>
    </div>
  );
}
