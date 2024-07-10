import { useEffect, useState } from "react"
import { productsGET } from "../services/products/Products_Get"
import { DELETE } from "../services/products/Products_Delete"



const BebidasFriasP = () => {

    const [products, setProducts] = useState([])


    const renderProducts = async () => {
        const dataProducts = await productsGET()
        const filtroBebidasFrias = dataProducts.filter(BebidaFria => BebidaFria.categorias === 'Bebida Fria')
        setProducts(filtroBebidasFrias)
    }

    const handleDelete = async (id) => {
        await DELETE(id);
        renderProducts()
    };
    
    useEffect(() => {
        renderProducts()
    }, [])

  return (
    <>
    <div id="containerFrappesTittle">
    <div id="tittleFrappes">FRAPPÉS</div>
    <div id="containerFrappes">
    {products.map((producto) => (
    <div key={producto.id} id="frappes">
        <img id="imagenProduct" src={producto.link}/>
        <div>{producto.nombre}</div>
        <div>{producto.descripcion}</div>
        <div>{producto.precio}</div>
        <div onClick={() => handleDelete(producto.id)}>Eliminar</div>
    </div>
    ))}
    </div>
    </div>
    </>
  )
}

export default BebidasFriasP

