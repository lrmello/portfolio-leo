import React ,{useState} from "react";
import styles from "./FaleConosco.module.css"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import IconLinkedin from "../../assets/icons/icone-linkedin.svg"
import IconGmail from "../../assets/icons/gmail.png"
import IconGithub from "../../assets/icons/github.png"

export default function FaleConosco() {
  const [isFormIncomplete, setIsFormIncomplete] = useState(false)

  function handleSubmit(event){
    event.preventDefault()
    const form = event.target;
    const requiredInputs = form.querySelector("[required]")

    for(const input of requiredInputs){
      if(!input.value){
        setIsFormIncomplete(true)
        return
      }
    }  
    setIsFormIncomplete(false)  
  }

  return (
  <div className={styles.faleContainer}>
      <Header/>
      <form className={styles.formContainer}>
        
        <div className={styles.inputContainer}>
          <label htmlFor="name" className={styles.label}>Nome:</label>
          <input type="email" id="email" name="name"  className={styles.input}/>
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="email" className={styles.label}>E-mail:</label>
          <input type="email" id="email" name="name" className={styles.input} />
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="phone" className={styles.label}>Telefone:</label>
          <input type="phone" id="email" name="name" className={styles.input}/>
        </div>

        <div className={styles.inputContainer}>
          <label htmlFor="message"className={styles.label}>Mensagem:</label>
          <textarea name="message" id="message" className={styles.textarea}></textarea>
        </div>

        {isFormIncomplete && <p className={styles.warning}>Por favor, preencha todos os campos</p> }
        <button type="submit" className={styles.submit}>Enviar</button>

      </form>

      <div className={styles.contatos}>
        <h3>Contatos:</h3>
        <div className={styles.iconContatos}>
        <a href="https://www.linkedin.com/in/leonardo-reis-95228893/" target="_blank">
            <img src={IconLinkedin} alt="Icone Linkedin" className={styles.iconContatos}/>
        </a>

        <a href="mailto:leonardo.reis28051995@gmail.com" target="_blank">
            <img src={IconGmail} alt="Icone Gmail" className={styles.iconContatos} />
        </a>

        <a href="https://github.com/lrmello" target="_blank">
            <img src={IconGithub} alt="Icone Github" className={styles.iconContatos} />
        </a>
        </div>
      </div>

      <Footer/>
  </div>
  )
}
