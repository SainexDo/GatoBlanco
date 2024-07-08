import { useEffect, useState } from "react"
import { productsGET } from "../services/products/Products_Get"



const DesayunoP = () => {

    const [products, setProducts] = useState([])


    const renderProducts = async () => {
        const dataProducts = await productsGET()
        const filtroDesayuno = dataProducts.filter(desayuno => desayuno.categoria === 'Desayuno')
        setProducts(filtroDesayuno)
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

export default DesayunoP