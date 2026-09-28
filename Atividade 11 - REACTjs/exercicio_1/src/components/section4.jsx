import Styles from "./css/section4.module.css"
import Whatsapp from "../assets/images/whats.png"
import Instagram from "../assets/images/insta.png"
import Facebook from "../assets/images/face.png"

function Section4(){
    return(
        <section className= {Styles.section4}>
            <div className= {Styles.form}>
                <form>
                    <label>Entre com seu nome:</label>
                    <input type="text" name="nome" placeholder="Nome"/>

                    <label>Entre com seu email:</label>
                    <input type="email" name="email" placeholder="Email"/>

                    <textarea name="pedido" placeholder="Faça seu pedido por aqui: "></textarea>

                    <button>Enviar</button>
                </form>
            </div>

            <div className= {Styles.redes_sociais}>
                <h3>Acesse também nossas redes sociais:</h3>
                <div className= {Styles.icones}>
                    <img src={Whatsapp} alt="icone-whats" />
                    <img src={Instagram} alt="icone-insta" />
                    <img src={Facebook} alt="icone-face" />
                </div>
            </div>  
        </section>
    )
}

export default Section4