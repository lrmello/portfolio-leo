import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import perfilInicio from '../../assets/img/perfil6.jpg'
import styles from './PaginaInicial.module.css'

export default function PaginaInicial() {
  return (
   <>
   <Header/>
    <div className={styles.inicioBody}>
        <div className={styles.centroInicio}>

           <div className={styles.imagemPerfil}>
              <img src={perfilInicio} alt="Imagem inicial" />
              <span><h2>Nessa página você poderá navegar mais conhecendo sobre mim no menu acima</h2></span>
           </div>
            <Footer/>
        </div>
      </div>
      </>
  )
}
