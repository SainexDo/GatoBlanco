import { useEffect, useState } from "react"
import { productsGET } from "../services/products/Products_Get"



const ExpressosP = () => {

    const [products, setProducts] = useState([])


    const renderProducts = async () => {
        const dataProducts = await productsGET()
        const filtroExpressos = dataProducts.filter(expressos => expressos.categoria === 'Expresso')
        setProducts(filtroExpressos)
    }
    
    useEffect(() => {
        renderProducts()
    }, [])

  return (
    <>
    {products.map((producto) => (
        <div key={producto.id} id="productosHome">
            <div>{producto.nombre}</div>
            <div>{producto.descripcion}</div>
            <div>{producto.precio}</div>
            <div>{producto.categoria}</div>
        </div>
    ))}
    </>
  )
}

export default ExpressosP