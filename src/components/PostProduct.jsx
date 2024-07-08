import { useState } from 'react'
import { productsPost } from '../services/products/Products_Post'


const PostProduct = () => {

    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio] = useState('');
    const [boxCafe, setBoxCafe] = useState('BoxCafe');
    const [bebidasFrias, setBebidasFrias] = useState('Bebida Fria');
    const [almuerzos, setAlmuerzos] = useState('Almuerzo');
    const [desayunos, setDesayunos] = useState('Desayuno');
    const [expressos, setExpressos] = useState('Expresso');
    const [postres, setPostres] = useState('Postre');
    const [salados, setSalados] = useState('Salado');
    const [tortas, setTortas] = useState('Torta');

    const [categorias, setCategorias] = useState('');


    const enviarProductos = async () => {
        productsPost({ nombre: nombre, descripcion: descripcion, precio: '$ ' + precio, categoria: categorias })
        setNombre('')
        setDescripcion('')
        setPrecio('')
    }


  return (
    <>
    <input type="text" value={nombre} placeholder='Nombre' onChange={(e) => setNombre(e.target.value)} />
    <input type="text" value={descripcion} placeholder='Descripcion' onChange={(e) => setDescripcion(e.target.value)} />
    <input type="text" value={precio} placeholder='Precio' onChange={(e) => setPrecio(e.target.value)} />
    <select id='categorias' value={categorias} onChange={(e) => setCategorias(e.target.value)}>
        <option value="">Categorias</option>
        <option value={boxCafe}>BoxCafe</option>
        <option value={bebidasFrias}>Bebidas Frias</option>
        <option value={almuerzos}>Almuerzos</option>
        <option value={desayunos}>Desayunos</option>
        <option value={expressos}>Expressos</option>
        <option value={postres}>Postres</option>
        <option value={salados}>Salados</option>
        <option value={tortas}>Tortas</option>
    </select>
    <button onClick={enviarProductos}>Enviar</button>
    </>
  )
}

export default PostProduct