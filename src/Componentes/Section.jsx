import estilos from "../Componentes/Section.module.css";

export default function Section() {
  return (
    <div className={estilos.containerSection}>
      <div>
        <h1>NOSSA VISÃO</h1>
        <p>
          Mais do que tatuagens, criamos identidade, atitude e expressão. Nosso
          estúdio nasceu da paixão pela arte e do compromisso em transformar
          ideias em marcas eternas. Acreditamos que cada tatuagem carrega uma
          história única — e nossa missão é dar vida a essa história com
          precisão, estilo e personalidade. Buscamos ser referência em
          qualidade, criatividade e autenticidade, oferecendo um ambiente
          profissional, seguro e acolhedor, onde cada cliente se sente confiante
          para expressar quem realmente é.
        </p>
      </div>

      <div>
        <h1>NOSSA ESSÊNCIA</h1>
        <p>
          Trabalhamos com técnicas modernas, materiais de alto padrão e um
          estilo artístico marcante, inspirado na força, atitude e elegância da
          arte clássica e contemporânea. Cada traço é pensado nos mínimos
          detalhes para garantir um resultado único, duradouro e cheio de
          significado. Aqui, sua ideia ganha forma. Sua história vira arte. Sua
          identidade se torna permanente.
        </p>
      </div>
    </div>
  );
}
