import { useEffect, useState } from "react"
import { productsGET } from "../services/products/Products_Get"



const PostresP = () => {

    const [products, setProducts] = useState([])


    const renderProducts = async () => {
        const dataProducts = await productsGET()
        const filtroPostres = dataProducts.filter(Postres => Postres.categorias === 'Postre')
        setProducts(filtroPostres)
    }
    
    useEffect(() => {
        renderProducts()
    }, [])

  return (
    <>
    <div id="containerProductsHome">
    {products.map((producto) => (
        <div key={producto.id} id="productosHome">
            <div><img id="imagenProduct" src={producto.link} alt="" /></div>
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

export default PostresP