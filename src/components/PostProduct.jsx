import { useState } from 'react'
import { productsPost } from '../services/products/Products_Post'


const PostProduct = () => {

    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio] = useState('');
    const [cafe, setCafe] = useState('Cafe');
    const [batido, setBatido] = useState('Batido');
    const [categorias, setCategorias] = useState('');


    const enviarProductos = async () => {
        productsPost({ nombre: nombre, descripcion: descripcion, precio: '$ ' + precio, categorias: categorias })
        setNombre('')
        setDescripcion('')
        setPrecio('')
    }


  return (
    <>
    <input type="text" value={nombre} placeholder='Nombre' onChange={(e) => setNombre(e.target.value)} />
    <input type="text" value={descripcion} placeholder='Descripcion' onChange={(e) => setDescripcion(e.target.value)} />
    <input type="text" value={precio} placeholder='Precio' onChange={(e) => setPrecio(e.target.value)} />
    <select value={categorias} onChange={(e) => setCategorias(e.target.value)}>
        <option value="">Categorias</option>
        <option value={cafe}>Cafe</option>
        <option value={batido}>Batido</option>
    </select>
    <button onClick={enviarProductos}>Enviar</button>
    </>
  )
}

export default PostProduct