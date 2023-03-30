import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import perfilInicio from "../../assets/img/perfil6.jpg";
import styles from "./PaginaInicial.module.css";

export default function PaginaInicial() {
  return (
    <>
      <Header />
      <div className={styles.inicioBody}>
        <div className={styles.centroInicio}>
          <div className={styles.imagemPerfil}>
            <img src={perfilInicio} alt="Imagem inicial" />
          </div>

          <div className={styles.textoContainer}>
            <span>
              <h2>
                Nessa página você poderá navegar mais conhecendo sobre mim no
                menu acima
              </h2>
            </span>
          </div>

          <div className={styles.textoEu}>
              <p>Sou o Leonardo Reis, Mais conhecido como Léo,
                estou sempre curioso e apaixanado por tecnologia e quero emergir cada vez mais por esse mundão 
              </p>

              <p>Atualmente estou trabalhando com desenvolvimento de software, aplicando melhorias e fazendo a magia acontecer </p>
          </div>

        </div>
      </div>
      <Footer className={styles.footer} />
    </>
  );
}
