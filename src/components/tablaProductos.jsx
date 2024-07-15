import { useEffect, useState } from "react";
import { productsGET } from "../services/products/Products_Get";
import { productPUT } from "../services/products/Products_Put";
import { DELETE } from "../services/products/Products_Delete";
import { TittleproductsGET } from "../services/tittleProducts/TittleProducts_Get";


const TablaProductos = () => {  //Genero una tabla para administrar los productod


  const [Producto, setProducto] = useState([]);
  const [modal, setModal] = useState(false);
  const [nombreEdit, setNombreEdit] = useState('');
  const [categoriasEdit, setCategoriasEdit] = useState('');
  const [descripcionEdit, setDescripcionEdit] = useState('');
  const [precioEdit, setPrecioEdit] = useState('');
  const [image, setImage] = useState('');
  const [productIdEdit, setProductIdEdit] = useState('');
  const [tittleProducts, setTittleProducts] = useState([]);
  const [iconTittle, setIconTittle] = useState('');
  const [categoria, setCategoria] = useState('');
  const [filtrar, setFiltrar] = useState('');
  const [buscador, setBuscador] = useState('');


  const getInTable = async () => {
    const dataTable = await productsGET();  //Llamar productos a la tabla.
    setProducto(dataTable);
  };


  const handleDelete = async (id) => {  //Eliminar
    await DELETE(id);
    getInTable();
  };


  const handlePut = async () => {
    if (productIdEdit && nombreEdit && categoriasEdit && descripcionEdit && precioEdit !== '') {
      await productPUT(productIdEdit, nombreEdit, categoriasEdit, descripcionEdit, precioEdit, image);
      setNombreEdit('');
      setCategoriasEdit('');
      setDescripcionEdit('');
      setPrecioEdit('');
      setProductIdEdit('');
      setImage('');
      setModal(false);
      getInTable();
    } else {
      console.log('Rellena los campos');
    }
  };


  const handleModal = (producto) => {
    setProductIdEdit(producto.id);
    setNombreEdit(producto.nombre);
    setCategoriasEdit(producto.categorias);
    setDescripcionEdit(producto.descripcion);
    setPrecioEdit(producto.precio);
    setImage(producto.link);
    setModal(true);
  };


  const renderTittles = async () => {
    const dataT = await TittleproductsGET();
    setTittleProducts(dataT);
  };


  const renderAll = async () => {
    const data = await productsGET();
    if (filtrar) {
      const categoriaFiltrada = data.filter(prdct => prdct.categorias === filtrar);
      setProducto(categoriaFiltrada);
    } else {
      setProducto(data);
    }
  };


  useEffect(() => {
    getInTable();
    renderTittles();
  }, []);


  useEffect(() => {
    renderAll();
  }, [filtrar]);


  const filtrarBusqueda = Producto.filter(busqueda =>
    busqueda.nombre.toLowerCase().includes(buscador.toLowerCase())
  );


  return (
    <>
      <div id='container_part_search'>
        <div id='buscador_nav'>
          {tittleProducts.map((titulo, index) => (
            <div
              key={index}
              value={titulo.categoria}
              onClick={() => setFiltrar(titulo.categoria)}
              style={{ cursor: 'pointer' }}
            >
              {titulo.categoria}
            </div>
          ))}
          <input
            id='buscador'
            type="text"
            placeholder="Busqueda..."
            value={buscador}
            onChange={(e) => setBuscador(e.target.value)}
          />
        </div>
      </div>
      <div id="container_table_products">
        <div id="table_Products_titlle">
          <div>Nombre</div>
          <div>Descripcion</div>
          <div>Precio</div>
          <div>Imagen</div>
          <div>Editar</div>
        </div>
        {filtrarBusqueda.map((producto) => (
          <div id="table_Products" key={producto.id}>
            <div>{producto.nombre}</div>
            <div>{producto.descripcion}</div>
            <div>{producto.precio}</div>
            <div><img id="imgTable" src={producto.link} alt="" /></div>
            <div id="divBotonEditar"><button onClick={() => handleModal(producto)} id="botonEditar">Editar</button></div>
          </div>
        ))}
      </div>
      {modal && (
        <div id="modal">
          <input type="text" value={nombreEdit} onChange={(e) => setNombreEdit(e.target.value)} />
          <input type="text" value={descripcionEdit} onChange={(e) => setDescripcionEdit(e.target.value)} />
          <input type="text" value={precioEdit} onChange={(e) => setPrecioEdit(e.target.value)} />
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
          <select value={categoriasEdit} onChange={(e) => setCategoriasEdit(e.target.value)}>
            <option value="">Categorias</option>
            {tittleProducts.map((titulo, index) => (
              <option key={index} value={titulo.categoria}>{titulo.categoria}</option>
            ))}
          </select>
          <button onClick={handlePut}>Confirmar</button>
          <button onClick={() => handleDelete(productIdEdit)}>Eliminar</button>
        </div>
      )}
    </>
  );
};
export default TablaProductos;