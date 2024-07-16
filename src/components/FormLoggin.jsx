import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { dataUsersGET } from '../services/dataUsers/Users_Get';



const FormLoggin = () => {

  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const admin = {
    correo: 'sainex1314@gmail.com',
    password: '86680350'
  }

  const Navigate = useNavigate()

  if (correo === admin.correo && password === admin.password) {
    const token = localStorage.setItem('admin', true)
    const tokenobte = localStorage.getItem('admin')

    if (tokenobte) {
      Navigate('/crud')
    }
  }







      async function GetLog() {

      const data = await dataUsersGET();
      console.log(data);

      let encontrado = false;

      data.forEach(i => {
        if (correo === i.correo && password === i.contrasena) {
          encontrado = true;
          navigate('/home')
        }
      });


      if (encontrado) {

        console.log('El usuario ingresado sí existe');
        // const token = localStorage.setItem('token', true)

      } else {

        console.log('Creo que no existe, o hubo una falla, una de dos, jajaja.');
        // const token = localStorage.setItem('token', false)
      }
  }




  return (
    <>
      <div id="containerLoggin">
        <label htmlFor="correo">Correo</label>
        <input id="correo" value={correo} type="text" placeholder='Correo' onChange={(e) => setCorreo(e.target.value)} />
        <label htmlFor="password">Contrasena</label>
        <input id="password" value={password} type="password" placeholder='Contrasena' onChange={(e) => setPassword(e.target.value)} />
        <button onClick={GetLog}>Iniciar Sesión</button>
      </div>
    </>
  );


}


export default FormLoggin;