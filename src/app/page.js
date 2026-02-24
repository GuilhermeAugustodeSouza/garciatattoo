
import estilos from './globals.css';
import Header from '../Componentes/Header.jsx';
import Main from '../Componentes/Main.jsx';
import Botao from '../Componentes/Botao';
import Section from '../Componentes/Section';
import Aside from '../Componentes/Aside';
import Footer from '../Componentes/Footer.jsx'

export default function Home() {
  return (
    <div>
   <Header/>
   <Main/>
   <Botao/>
   <Section/>
   <Aside/>
   <Footer/>
    </div>
  );
}
