import Styles from "./css/section3.module.css";

function Section3() {
  return (
    <section className={Styles.marrom}>
      <div className={Styles.div3}>
        <iframe className={Styles.mapa} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.122782716492!2d-46.6917602!3d-23.528085899999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef8775663b04f%3A0x923835e9005f8309!2sSenac%20Lapa%20Tito!5e0!3m2!1spt-BR!2sbr!4v1790608993251!5m2!1spt-BR!2sbr" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
      </div>

      <div className={Styles.div4}>
        <h3>Nossa Loja - Instrumentos Musicais</h3>
        <p>Está situada na Rua Tito, 54 - Pompéia, próximo ao teatro Cacilda Becker, em uma construção do século XIX, numa áera de 500m2, com uma varíada gama de instrumentos, em um ambiente agradável para toda família!</p>
      </div>
    </section>
  );
}

export default Section3;
