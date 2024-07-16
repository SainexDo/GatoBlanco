import { useState, useEffect } from "react";
import { productsGET } from "../services/products/Products_Get";
import { TittleproductsGET } from "../services/tittleProducts/TittleProducts_Get";
import { TittlePOST } from '../services/tittleProducts/TittleProducts_Post';
import { productsPost } from "../services/products/Products_Post";


const Producto = () => {


    const [tittleProducts, setTittleProducts] = useState([]);
    const [iconTittle, setIconTittle] = useState('');
    const [categoria, setCategoria] = useState('');
    const [filtrar, setFiltrar] = useState('Connie');
    const [productos, setProductos] = useState([]);
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio] = useState('');
    const [link, setLink] = useState('');
    const [token, setToken] = useState(true);

    const [categorias, setCategorias] = useState('');



    const agregarTitulo = async () => {
        if (iconTittle && categoria !== '') {
        await TittlePOST({ iconTittle, categoria });
        setIconTittle('');
        setCategoria('');
        setTimeout(() => {
            renderTittles();
        }, 10);
        } else {
            console.log('Rellena los espacios');
        }
    };

    const sendDataProduct = async () => {
        console.log('la');
        if ((nombre && descripcion && precio && link) !== '') {
            await productsPost({ nombre: nombre, descripcion: descripcion, precio: precio, link: link, categorias: categorias });
            setNombre('');
            setDescripcion('');
            setPrecio('');
            setLink('');
            renderizarCafe();
        } else {
            console.log('Rellena los campos POST');
        }
    };

    
    const renderTittles = async () => {
        const dataT = await TittleproductsGET();
        setTittleProducts(dataT);
    };


    useEffect(() => {
        renderizarCafe();
        renderTittles();
    }, [filtrar]);




    const renderizarCafe = async () => {
        const data = await productsGET();
        const categoriaFiltrada = data.filter(prdct => prdct.categorias === filtrar);
        setProductos(categoriaFiltrada);
    };



    const handleFilterClick = (categoria) => {
        setFiltrar(categoria);
    };


    return (
        <>
            <div id="crudTittles">
                <input
                    type="text"
                    value={iconTittle}
                    placeholder="Aside: Image"
                    onChange={(e) => setIconTittle(e.target.value)}
                />
                <input
                    type="text"
                    value={categoria}
                    placeholder="Aside: Categoria"
                    onChange={(e) => setCategoria(e.target.value)}
                />
                <button onClick={agregarTitulo}>AggTittles</button>
            </div>
            <div id="crudProducts">
                {token ? (
                    <>
                        <input
                            type="text"
                            value={nombre}
                            placeholder='Main: nombre'
                            onChange={(e) => setNombre(e.target.value)}
                        />
                        <input
                            type="text"
                            value={descripcion}
                            placeholder='Main: descripcion'
                            onChange={(e) => setDescripcion(e.target.value)}
                        />
                        <input
                            type="text"
                            value={precio}
                            placeholder='Main: precio'
                            onChange={(e) => setPrecio(e.target.value)}
                        />
                        <input
                            type="text"
                            value={link}
                            placeholder='Main: link'
                            onChange={(e) => setLink(e.target.value)}
                        />
                        <select onChange={(e) => handleFilterClick(e.target.value)}>
                            <option value="">Selecciona una categoría</option>
                            {tittleProducts.map((titulo, index) => (
                            <option key={index} value={titulo.categoria}>
                                {titulo.categoria}
                            </option>
                            ))}
                        </select>
                        <button onClick={sendDataProduct}>Send</button>
                    </>
                ) : console.log('Aqui es falso')}
            </div>
        </>
    );
};
export default Producto;