import { useState, useEffect } from 'react';
import { productsGET } from '../services/products/Products_Get';


const BuscarProductsHome = () => {

    const [buscador, setBuscador] = useState('');
    const [productos, setProductos] = useState([]);
    const [filtrar, setFiltrar] = useState('');



    useEffect(() => {
        renderAll();
    }, []);

    const renderAll = async () => {
        const data = await productsGET();
        if (filtrar) {
            const categoriaFiltrada = data.filter(prdct => prdct.categorias === filtrar);
            setProductos(categoriaFiltrada);
        } else {
            setProductos(data);
        }
    };


    const filtrarBusqueda = productos.filter(busqueda =>
        busqueda.nombre.toLowerCase().includes(buscador.toLowerCase())
    );
    
    return (
        <div id='container_part_search'>
            <div id='buscador_nav'>
                <input
                    id='buscador'
                    type="text"
                    placeholder="Busqueda..."
                    value={buscador}
                    onChange={(e) => setBuscador(e.target.value)}
                />
            </div>
            <div id='container_productos_home'>
            {filtrarBusqueda.map((producto) => (
                <div key={producto.id} id="productosHome">
                    <img id="imagenProduct" src={producto.link} />
                    <div>{producto.nombre}</div>
                    <div>{producto.descripcion}</div>
                    <div>$ {producto.precio}</div>
                    <div>{producto.categoria}</div>
                </div>
            ))}
            </div>
        </div>
    );
};
export default BuscarProductsHome;