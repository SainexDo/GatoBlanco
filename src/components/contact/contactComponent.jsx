import "../contact/contactComponent.css"

const ContactComponent = () => {
  return (
    <div id="contactContainer">
        <div id="containTwo">
            <label htmlFor="">Nombre completo</label>
            <input id="inputContact" type="text" />
        </div>
        <div id="containTwo">
            <label htmlFor="">Correo Electronico</label>
            <input id="inputContact" type="text" />
        </div>
        <div id="containTwo">
            <label htmlFor="">Numero de Contacto</label>
            <input id="inputContact" type="text" />
        </div>
        <div id="containTwo">
            <label htmlFor="">Mensaje</label>
            <input id="inputContact" type="text" />
        </div>
        <div id="buttonEnviar">Enviar</div>
    </div>
  )
}

export default ContactComponent