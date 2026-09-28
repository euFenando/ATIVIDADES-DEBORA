import Styles from "./css/footer.module.css"
import Whatsapp from "../assets/images/whats.png"
import Instagram from "../assets/images/insta.png"
import Facebook from "../assets/images/face.png"

function Footer() {
  return (
    <footer>
      <h2>Nossa Loja - Instrumentos Musicais</h2>
      <p>Rua Tito, 54 - Lapa São Paulo - Brasil</p>

      <div className={Styles.icones_footer}>
        <img src={Whatsapp} alt="icone-whats" />
        <img src={Instagram} alt="icone-insta" />
        <img src={Facebook} alt="icone-face" />
      </div>
    </footer>
  )
}

export default Footer;
