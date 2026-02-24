import Image from 'next/image';
import estilos from '../Componentes/Botao.module.css';
import image from '../../public/button.png'
export default function Botao(){
    return(
        <div className={estilos.botao}>
            <Image src={image} alt={"botao whatsapp"}></Image>
        </div>
    )
}