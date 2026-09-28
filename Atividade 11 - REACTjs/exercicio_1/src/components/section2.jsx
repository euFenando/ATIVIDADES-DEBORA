import Styles from "./css/section2.module.css";
import Violao from "../assets/images/guitarrinha.jpg";

function Section2() {
  return (
    <section className={Styles.azul}>
      <div className={Styles.cards}>
        <img src={Violao} alt="violao" />
        <h3>Violão Yamaha C70 II Clássico Nylon Acústico Natural Brilhante</h3>
        <span>R$ 989,00</span>
      </div>

      <div className={Styles.cards}>
        <img src={Violao} alt="violao" />
        <h3>Violão Yamaha C70 II Clássico Nylon Acústico Natural Brilhante</h3>
        <span>R$ 989,00</span>
      </div>

      <div className={Styles.cards}>
        <img src={Violao} alt="violao" />
        <h3>Violão Yamaha C70 II Clássico Nylon Acústico Natural Brilhante</h3>
        <span>R$ 989,00</span>
      </div>
      
      <div className={Styles.cards}>
        <img src={Violao} alt="violao" />
        <h3>Violão Yamaha C70 II Clássico Nylon Acústico Natural Brilhante</h3>
        <span>R$ 989,00</span>
      </div>
    </section>
  );
}

export default Section2;
