import React from 'react'
import styles from './Header.module.css'
import Nav from '../Nav/Nav'

export default function Header() {
  return (
    <header className={styles.containerHeader}>
        <Nav/>
    </header>
  )
}
