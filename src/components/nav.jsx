import logo from "../assets/logo.png"
import { Link } from "react-router-dom"



const Nav = () => {

  return (
    <>
    <nav id="nav">
    <img id="logo" src={logo} alt="logo" />
      <div>
        <div id="tittle1">Gato</div>
        <div id="tittle2">Blanco</div>
      </div>      
      <div id="linkTo">
      <Link id="white" to={'/loggin'}>Iniciar Sesion</Link>
      <Link id="white" to={'/register'}>Registrarse</Link>
      </div>
      
    </nav>
    </>
  )
}

export default Nav