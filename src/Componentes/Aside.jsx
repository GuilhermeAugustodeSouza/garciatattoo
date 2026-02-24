import estilos from '../Componentes/Aside.module.css';

export default function Aside() {
  return (
    <div className={estilos.mapFrame}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.6474136432876!2d-43.940505825263784!3d-19.939257538595925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699d0a1998745%3A0x1395f883ce1ed0f!2sAv.%20Get%C3%BAlio%20Vargas%2C%201624%20-%20Funcion%C3%A1rios%2C%20Belo%20Horizonte%20-%20MG%2C%2030112-024!5e0!3m2!1spt-BR!2sbr!4v1771946335389!5m2!1spt-BR!2sbr"
        width="400"
        height="300"
      
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
