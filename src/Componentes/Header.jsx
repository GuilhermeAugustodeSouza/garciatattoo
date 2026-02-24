import estilos from "../Componentes/Header.module.css";
import Image from "next/image";
import logo from "../../public/logotipo.png";

export default function Header() {
  return (
    <div className={estilos.containerLogotipo}>
      <div>
        <Image src={logo} alt={"logoTipo marca"}></Image>
      </div>
    </div>
  );
}
