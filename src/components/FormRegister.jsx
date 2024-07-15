// import React from 'react'
import { useState } from "react"
import { POST } from "../services/dataUsers/Users_Post"
import { dataUsersGET } from "../services/dataUsers/Users_Get"
import { useNavigate } from "react-router-dom"

const FormRegister = () => {

const [usuario, setUser] = useState('')
const [correo, setCorreo] = useState('')
const [contrasena, setConstrasena] = useState('')

const navigate = useNavigate()

const dataPost = async () => {
  const data = await dataUsersGET();
  if ((usuario && contrasena && correo) === '') {
    console.log('Rellena todos los campos');
    return;
  }
  let ingresarDatos = true;
  for (const i in data) {
    if (usuario === data[i].usuario) {
      console.log('El usuario ya existe');
      ingresarDatos = false;
      break;
    }
  }
  if (ingresarDatos) {
    console.log('Ingresado con éxito');
    POST({ usuario: usuario, correo: correo, contrasena: contrasena });
    navigate('/loggin')
  }
};



  return (
    <>
    <div id="coonatinerRegister">
        <label htmlFor="">Usuario</label>
        <input type="text" placeholder='Usuario' value={usuario} onChange={(e) => setUser(e.target.value)}/>
        <label htmlFor="">Correo</label>
        <input type="text" placeholder='Correo' value={correo} onChange={(e) => setCorreo(e.target.value)}/>
        <label htmlFor="">Contrasena</label>
        <input type="text" placeholder='Contrasena' value={contrasena} onChange={(e) => setConstrasena(e.target.value)}/>
        <button onClick={dataPost}>Registrarse</button>
    </div>
    </>
  )
}

export default FormRegister

// POST({ name: nameReg.value, email: emailReg.value, password: passwordReg.value, tasks: [] })