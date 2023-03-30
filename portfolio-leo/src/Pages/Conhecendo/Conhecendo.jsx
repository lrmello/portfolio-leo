import React from "react";
import styles from "./Conhecendo.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Img0 from "../../assets/img/perfil0.jpg";
import Img1 from "../../assets/img/perfil1.jpg";
import Img2 from "../../assets/img/perfil4.jpg";
import Img3 from "../../assets/img/perfil3.jpg";

export default function Conhecendo() {
  return (
    <div className={styles.conhecendoContainer}>
      <Header />
      <section className={styles.secao}>
        <div className={styles.secSobre}>
          <h1>Sobre mim</h1>
          <p>
            Sou Leonardo Reis, tenho 28 anos, atualmente trabalho como
            Desenvolvedor na RD e estou indo para minha primeira experiência na
            área de tecnologia.
          </p>
          <p>
            Sou formado em Ciência da Computação e atualmente estou estudando
            pós em Data Science
          </p>
          <p>
            Minha paixão por tecnologia é muito forte, pois adoro desenvolver
            sistemas nas horas vagas e jogar vídeo-game
          </p>
        </div>
      </section>

      <section className={styles.secao}>
        <h1 className={styles.textGaleria}>Fotos minhas</h1>

        <div className={styles.secImg}>
          <img src={Img0} alt="Imagem0" className={styles.img} />
          <img src={Img1} alt="Imagem0" className={styles.img} />
          <img src={Img2} alt="Imagem0" className={styles.img} />
          <img src={Img3} alt="Imagem0" className={styles.img} />
        </div>
      </section>

      <Footer className={styles.footer} />
    </div>
  );
}
