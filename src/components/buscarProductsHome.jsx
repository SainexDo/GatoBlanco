import { useState } from 'react'
import { productsGET } from '../services/products/Products_Get'
import { useEffect } from 'react'

const BuscarProductsHome = () => {
    
    const [buscador, setBuscador] = useState('');
    const [productos, setProductos] = useState([])


    useEffect(() => {
        renderAll()
    })

    const renderAll = async () => {
        const data = await productsGET()
        setProductos(data)
    }

    const filtrarBusqueda = productos.filter(busqueda =>
        busqueda.nombre.toLowerCase().includes(buscador.toLowerCase())
    );


  return (
    <div id='container_part_search'>
        <input
            type="text"
            placeholder="Buscador"
            value={buscador}
            onChange={(e) => setBuscador(e.target.value)}
        />

        {filtrarBusqueda.map((producto) => (
            <div key={producto.id} id="productosHome">
                <img id="imagenProduct" src={producto.link}/>
                <div>{producto.nombre}</div>
                <div>{producto.descripcion}</div>
                <div>$ {producto.precio}</div>
                <div>{producto.categoria}</div>
            </div>
        ))}
    </div>
  )
}

export default BuscarProductsHome