import React from 'react'
import styles from './Nav.module.css'
import {Link} from "react-router-dom"

export default function Nav() {
  return (
    <div className={styles.containerNav}>

        <div className={styles.linkNav}>
            <Link to={"/"} className={styles.links}>Página inicial</Link>
        </div>

        <div className={styles.linkNav}>
            <Link to={"/conhecendo"} className={styles.links}>Conhecendo o Léo</Link>
        </div>

        <div className={styles.linkNav}>
            <Link to={"/hobbies"} className={styles.links}>Hobbies e Interesses</Link>
        </div>

        <div className={styles.linkNav}>
            <Link to={"/faleconosco"} className={styles.links}>Fale conosco</Link>
        </div>


    </div>
  )
}
