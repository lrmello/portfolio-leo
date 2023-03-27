import React from 'react'
import styles from './Nav.module.css'
import {Link} from "react-router-dom"

export default function Nav() {
  return (
    <div className={styles.containerHeader}>

        <div className={styles.linkContainer}>
            <Link to={"/"} className={styles.links}>Página inicial</Link>
        </div>

        <div className={styles.linkContainer}>
            <Link to={"/conhecendo"}>Conhecendo o Léo</Link>
        </div>

        <div className={styles.linkContainer}>
            <Link to={"/hobbies"}>Hobbies e Interesses</Link>
        </div>

        <div className={styles.linkContainer}>
            <Link to={"/faleconosco"}>Fale conosco</Link>
        </div>


    </div>
  )
}
