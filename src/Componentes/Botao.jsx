import Image from "next/image";
import estilos from "../Componentes/Botao.module.css";
import image from "../../public/button.png";

export default function Botao() {
  const numero = "5531987049074";
  const mensagem = "Olá, gostaria de mais informações";
  const link = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

  return (
    <div className={estilos.botao}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <Image src={image} alt="Botão WhatsApp" />
      </a>
    </div>
  );
}
