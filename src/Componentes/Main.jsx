import estilos from '../Componentes/Main.module.css';
import Image from 'next/image';
import foto1 from '../../public/tatoos.png'
import foto2 from '../../public/tatoos2.png'
import foto3 from '../../public/tatoos3.png'
import foto4 from '../../public/tatoo4.png'
import foto5 from '../../public/tatoo5.png'
import foto6 from '../../public/tatoo6.png'
import foto7 from '../../public/8c85a7478a2323bd365448a69c191ff4.jpg';
import foto8 from '../../public/descubra-o-nome-dos-principais-estilos-de-tatuagem-maori-getty-20210831213627.webp';
import foto9 from '../../public/maori.jpg';

export default function Main(){
    return(
        <div className={estilos.containerFotos}>
            <div>
   <Image src={foto1} alt={'imagem tatuagem'}></Image>
            </div>

            <div>
   <Image src={foto2} alt={'imagem tatuagem'}></Image>
            </div>

            <div>
   <Image src={foto3} alt={'imagem tatuagem'}></Image>
            </div>

            <div>
   <Image src={foto4} alt={'imagem tatuagem'}></Image>
            </div>

            <div>
   <Image src={foto5} alt={'imagem tatuagem'}></Image>
            </div>

            <div>
   <Image src={foto6} alt={'imagem tatuagem'}></Image>
            </div>

            
            <div>
   <Image src={foto7} alt={'imagem tatuagem'}></Image>
            </div>

            
            <div>
   <Image src={foto8} alt={'imagem tatuagem'}></Image>
            </div>

            
            <div>
   <Image src={foto9} alt={'imagem tatuagem'}></Image>
            </div>

        </div>
    )
}