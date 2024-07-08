import { useEffect, useState } from "react"
import { productsGET } from "../services/products/Products_Get"



const SaladosP = () => {

    const [products, setProducts] = useState([])


    const renderProducts = async () => {
        const dataProducts = await productsGET()
        const filtroSalados = dataProducts.filter(salados => salados.categoria === 'Salado')
        setProducts(filtroSalados)
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

export default SaladosP