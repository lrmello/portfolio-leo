import React from 'react'
import styles from "./Projetos.module.css"
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import IconProjeto from '../../assets/icons/projetos.png'

export default function Projetos() {
  return (
    <div>
        <Header/>
        <section className={styles.projetosFeitos}>
          <div className={styles.projetoContainer}> 
          
            <h1>Projetos Finalizados</h1>
            <img src={IconProjeto} alt="" className={styles.img} />
            <a href="https://github.com/lrmello/projetoModuloUmResilia" className={styles.links} target="_blank">Portfolio v1</a>
          
            <a href="">
            </a>
          </div>
        </section>

        <section className={styles.projetosAndamento}>
          <h1>Projetos em andamento</h1>
        </section>
        <Footer/>
    </div>
  )
}
