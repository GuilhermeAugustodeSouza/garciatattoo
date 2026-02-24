import estilos from "../Componentes/Header.module.css";
import Image from "next/image";
import logo from "../../public/ChatGPT Image 22 de fev. de 2026, 19_32_17.png";

export default function Header() {
  return (
    <div className={estilos.containerLogotipo}>
      <div>
        <Image src={logo} alt={"logoTipo marca"}></Image>
      </div>
    </div>
  );
}
