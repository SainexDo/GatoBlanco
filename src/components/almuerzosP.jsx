import { useEffect, useState } from "react"
import { productsGET } from "../services/products/Products_Get"



const AlmuerzosP = () => {

    const [products, setProducts] = useState([])


    const renderProducts = async () => {
        const dataProducts = await productsGET()
        const filtroAlmuerzos = dataProducts.filter(almuerzos => almuerzos.categorias === 'Almuerzo')
        setProducts(filtroAlmuerzos)
    }
    
    useEffect(() => {
        renderProducts()
    }, [])

  return (
    <>
    <div id="containerProductsHome">
    {products.map((producto) => (
        <div key={producto.id} id="productosHome">
            <div>{producto.nombre}</div>
            <div>{producto.descripcion}</div>
            <div>{producto.precio}</div>
            <div>{producto.categorias}</div>
        </div>
    ))}
    
    </div>
    </>
  )
}

export default AlmuerzosP