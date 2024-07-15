import { Link } from 'react-router-dom';
import './Footer.css'; // Asegúrate de importar el archivo de estilos
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h2>Más sobre nosotros</h2>
        <p>Nos encantaria que dejases una reseña acerca de nosotros.</p>
        <h2>Contáctanos</h2>
        <p>Dirección: Puntarenas.</p>
        <p>Teléfono: +506 8668-0350</p>
        <p>Email: snxdoseth@coffe.com</p>
      </div>
      <div className="footer-right">
        <h2>Enlaces Rápidos</h2>
        <p>Acerca de nosotros</p>
        <Link to={'/contact'}>Contacto</Link>
        <p>Trabaja con nosotros</p>
      </div>
    </footer>
  );
}
export default Footer;