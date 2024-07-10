import { useEffect, useState } from "react"
import { productsGET } from "../services/products/Products_Get"
import { DELETE } from "../services/products/Products_Delete"



const BoxCafeP = () => {

    const [products, setProducts] = useState([])


    const renderProducts = async () => {
        const dataProducts = await productsGET()
        const filtroBoxCafe = dataProducts.filter(boxCafe => boxCafe.categorias === 'BoxCafe')
        setProducts(filtroBoxCafe)
    }
    
    useEffect(() => {
        renderProducts()
        renderizarCafe()    
    }, [])

    const renderizarCafe = async () => {
        const data = await productsGET();
        setProducts(data);
    };

    const handleDelete = async (id) => {
        await DELETE(id);
        renderizarCafe();
    };

  return (
    <>
    <div id="containerProductsHome">
    {products.map((producto) => (
        <div key={producto.id} id="productosHome">
            <div>{producto.nombre}</div>
            <div>{producto.descripcion}</div>
            <div>{producto.precio}</div>
            <div>{producto.categorias}</div>
            <div onClick={() => handleDelete(producto.id)}>Eliminar</div>

        </div>
    ))}
    </div>
    </>
  )
}

export default BoxCafeP