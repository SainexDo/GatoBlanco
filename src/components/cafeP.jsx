import { useEffect, useState } from "react"
import { productsGET } from "../services/products/Products_Get"



const CafeP = () => {

    const [products, setProducts] = useState([])


    const renderProducts = async () => {
        const dataProducts = await productsGET()
        const filtroCafe = dataProducts.filter(cafe => cafe.categorias === 'Cafe')
        setProducts(filtroCafe)
    }
    
    useEffect(() => {
        renderProducts()
    }, [])

  return (
    <>
    {products.map((producto) => (
        <div key={producto.id} id="cafes">
            <div>{producto.nombre}</div>
            <div>{producto.descripcion}</div>
            <div>{producto.precio}</div>
        </div>
    ))}
    </>
  )
}

export default CafeP