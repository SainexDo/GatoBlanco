import { useEffect, useState } from "react"
import { productsGET } from "../services/products/Products_Get"




const MostrarProductos = () => {

    const [products, setProducts] = useState([])


    const renderProducts = async () => {
        const dataProducts = await productsGET()
        // const filtroCafe = dataProducts.filter(cafe => cafe.categoria === 'Cafe')
        setProducts(dataProducts)
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

export default MostrarProductos