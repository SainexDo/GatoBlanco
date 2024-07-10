import { useEffect, useState } from "react"
import { productsGET } from "../services/products/Products_Get"



const TortasP = () => {

    const [products, setProducts] = useState([])


    const renderProducts = async () => {
        const dataProducts = await productsGET()
        const filtroTortas = dataProducts.filter(tortas => tortas.categorias === 'Torta')
        setProducts(filtroTortas)
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

export default TortasP