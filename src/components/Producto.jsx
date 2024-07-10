import { useState, useEffect } from "react";
import { productsGET } from "../services/products/Products_Get";
import { DELETE } from "../services/products/Products_Delete";
import { TittleproductsGET } from "../services/tittleProducts/TittleProducts_Get";
import { TittlePOST } from '../services/tittleProducts/TittleProducts_Post';
import { productsPost } from "../services/products/Products_Post";
import { TittleDELETE } from "../services/tittleProducts/TittleProducts_Delete";
import { productPUT } from "../services/products/Products_Put";


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


    const [nombreEdit, setNombreEdit] = useState('');
    const [categoriasEdit, setCategoriasEdit] = useState('');
    const [descripcionEdit, setDescripcionEdit] = useState('');
    const [precioEdit, setPrecioEdit] = useState('');

    
    const [categorias, setCategorias] = useState('');
    const [boxCafe, setBoxCafe] = useState('BoxCafe');
    const [bebidasFrias, setBebidasFrias] = useState('Bebida Fria');
    const [almuerzos, setAlmuerzos] = useState('Almuerzo');
    const [desayunos, setDesayunos] = useState('Desayuno');
    const [expressos, setExpressos] = useState('Expresso');
    const [postres, setPostres] = useState('Postre');
    const [salados, setSalados] = useState('Salado');
    const [tortas, setTortas] = useState('Torta');
    const [modal, setModal] = useState(false);
    const [productIdEdit, setProductIdEdit] = useState('');
    const [buscador, setBuscador] = useState('');


    const agregarTitulo = async () => {
        await TittlePOST({ iconTittle, categoria });
        setIconTittle('');
        setCategoria('');
        renderTittles();
    };


    const sendDataProduct = async () => {
        if ((nombre && descripcion && precio && link && categorias) !== '') {
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


    useEffect(() => {
        renderTittles();
        renderizarCafe();
    }, []);

    
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


    const handleDelete = async (id) => {
        await DELETE(id);
        renderizarCafe();
        renderTittles();
    };


    const handleFilterClick = (categoria) => {
        setFiltrar(categoria);
    };


    const borrarTitulos = async (id) => {
        if (confirm('¿Seguro que quieres eliminar esta categoría?')) {
            await TittleDELETE(id);
            const data = await productsGET();
            const categoriaFiltrada = data.filter(prdct => prdct.id === filtrar);
            console.log(categoriaFiltrada);
            categoriaFiltrada.forEach(e => {
                DELETE(e.id);
            });
        }
        renderTittles();
    };


    const handlePut = async () => {
        if (productIdEdit) {
            if ((productIdEdit && nombreEdit && categoriasEdit && descripcionEdit && precioEdit) !== '') {
                await productPUT(productIdEdit, nombreEdit, categoriasEdit, descripcionEdit, precioEdit);
                setNombreEdit('');
                setCategoriasEdit('');
                setDescripcionEdit('');
                setPrecioEdit('');
                setProductIdEdit(''); // Resetear el ID del producto después de la edición
                setModal(false); // Cerrar el modal
                renderizarCafe();
                renderTittles();
            } else {
                console.log('Rellena los campos');
            }
        }
    };


    const Token = localStorage.setItem("token", token);
    const cambiar = () => {
        setToken(!token);
    };


    const handleModal = (producto) => {
        setProductIdEdit(producto.id); // Establecer el ID del producto que se está editando
        setNombreEdit(producto.nombre);
        setCategoriasEdit(producto.categorias);
        setDescripcionEdit(producto.descripcion);
        setPrecioEdit(producto.precio);
        setModal(true); // Abrir el modal                   YA NO
    };


    const filtrarBusqueda = productos.filter(busqueda =>
        busqueda.nombre.toLowerCase().includes(buscador.toLowerCase())
    );


    return (
        <>
            <input
                type="text"
                placeholder="Buscador"
                value={buscador}
                onChange={(e) => setBuscador(e.target.value)}
            />

            <div id="AllContainer">
                <div id="main">
                    <div id="containerProductsHome"></div>
                    {filtrarBusqueda.map((producto) => (
                        <div key={producto.id} id="productosHome">
                            <img id="imagenProduct" src={producto.link}/>
                            <div>{producto.nombre}</div>
                            <div>{producto.descripcion}</div>
                            <div>$ {producto.precio}</div>
                            <div>{producto.categoria}</div>
                            <button onClick={() => handleModal(producto)}>ABRIR MODAL</button>
                            <div onClick={() => handleDelete(producto.id)}>Eliminar</div>
                        </div>
                    ))}

                    {modal && (
                        <div id="modal">
                            <input type="text" value={nombreEdit} onChange={(e) => setNombreEdit(e.target.value)} />
                            <input type="text" value={descripcionEdit} onChange={(e) => setDescripcionEdit(e.target.value)} />
                            <input type="text" value={precioEdit} onChange={(e) => setPrecioEdit(e.target.value)} />
                            <select value={categoriasEdit} onChange={(e) => setCategoriasEdit(e.target.value)}>
                                <option value="">Categorias</option>
                                <option value={boxCafe}>BoxCafe</option>
                                <option value={bebidasFrias}>Bebidas Frias</option>
                                <option value={almuerzos}>Almuerzos</option>
                                <option value={desayunos}>Desayunos</option>
                                <option value={expressos}>Expressos</option>
                                <option value={postres}>Postres</option>
                                <option value={salados}>Salados</option>
                                <option value={tortas}>Tortas</option>
                            </select>
                            <button onClick={handlePut}>PUT</button>
                        </div>
                    )}
                </div>
                <div id="aside">
                    {tittleProducts.map((producto, index) => (
                        <div key={index} id="tittleProducto">
                            <div onClick={() => handleFilterClick(producto.categoria)}>
                                <img id="iconTittle" src={producto.iconTittle} alt="" />
                            </div>
                            <div onClick={() => handleFilterClick(producto.categoria)}>{producto.categoria}</div>
                            <div onClick={() => borrarTitulos(producto.id)}>eli</div>
                        </div>

                    ))}
                </div>
            </div>
            <div id="crud">
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
            <div id="crud">
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
                            <select id='categorias' value={categorias} onChange={(e) => setCategorias(e.target.value)}>
                                <option value="">Categorias</option>
                                <option value={boxCafe}>BoxCafe</option>
                                <option value={bebidasFrias}>Bebidas Frias</option>
                                <option value={almuerzos}>Almuerzos</option>
                                <option value={desayunos}>Desayunos</option>
                                <option value={expressos}>Expressos</option>
                                <option value={postres}>Postres</option>
                                <option value={salados}>Salados</option>
                                <option value={tortas}>Tortas</option>
                            </select>
                        <button onClick={sendDataProduct}>Send</button>
                    </>
                ) : console.log('Aqui es falso')}
            </div>
            <button onClick={cambiar}>CHANGEEE</button>
        </>
    );
};
export default Producto;