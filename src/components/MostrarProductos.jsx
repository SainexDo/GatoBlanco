import { useEffect, useState } from "react"
import { productsGET } from "../services/products/Products_Get"


const MostrarProductos = () => {

    const [products, setProducts] = useState([])


    const renderProducts = async () => {
        const dataProducts = await productsGET()
        setProducts(dataProducts)
    }
    
    useEffect(() => {
        renderProducts()
    }, [])

  return (
    <>
    <div id="containerProductsHome">
    {products.map((producto) => (
        <div key={producto.id}>
            <div>{producto.nombre}</div>
            <div>{producto.descripcion}</div>
            <div>{producto.precio}</div>
        </div>
    ))}
    
    </div>
    </>
  )
}

export default MostrarProductos