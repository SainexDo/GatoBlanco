import { useEffect, useState } from "react";
import { productsGET } from "../services/products/Products_Get";
import { productPUT } from "../services/products/Products_Put";
import { DELETE } from "../services/products/Products_Delete";

const TablaProductos = () => {
  const [Producto, setProducto] = useState([]);
  const [modal, setModal] = useState(false);

  const [nombreEdit, setNombreEdit] = useState('');
  const [categoriasEdit, setCategoriasEdit] = useState('');
  const [descripcionEdit, setDescripcionEdit] = useState('');
  const [precioEdit, setPrecioEdit] = useState('');
  const [image, setImage] = useState('')
  const [productIdEdit, setProductIdEdit] = useState('');

  const [boxCafe, setBoxCafe] = useState('BoxCafe');
  const [bebidasFrias, setBebidasFrias] = useState('Bebida Fria');
  const [almuerzos, setAlmuerzos] = useState('Almuerzo');
  const [desayunos, setDesayunos] = useState('Desayuno');
  const [expressos, setExpressos] = useState('Expresso');
  const [postres, setPostres] = useState('Postre');
  const [salados, setSalados] = useState('Salado');
  const [tortas, setTortas] = useState('Torta');
  const [ProductDelete, setProductDelete] = useState('')



  const getInTable = async () => {
    const dataTable = await productsGET();
    setProducto(dataTable);
  };
  
  const handleDelete = async () => {
    await DELETE(productIdEdit);
    getInTable()
};

  const handlePut = async () => {
    console.log('jaja');
    if (productIdEdit) {
        if ((productIdEdit && nombreEdit && categoriasEdit && descripcionEdit && precioEdit) !== '') {
            await productPUT(productIdEdit, nombreEdit, categoriasEdit, descripcionEdit, precioEdit, image);
            setNombreEdit('');
            setCategoriasEdit('');
            setDescripcionEdit('');
            setPrecioEdit('');
            setProductIdEdit('');
            setModal(false);
            getInTable()
        } else {
            console.log('Rellena los campos');
        }
    }
};

  useEffect(() => {
    getInTable();
  }, []);

  const handleModal = (producto) => {
    setProductIdEdit(producto.id);
    setNombreEdit(producto.nombre);
    setCategoriasEdit(producto.categorias);
    setDescripcionEdit(producto.descripcion);
    setPrecioEdit(producto.precio);
    setImage(producto.link)
    setModal(true);
};





  return (
    <>
      <div id="container_table_products">
        <div id="table_Products_titlle">
            <div>Nombre</div>
            <div>Descripcion</div>
            <div>Precio</div>
            <div>Imagen</div>
            <div>Editar</div>
        </div>
      {Producto.map((producto) => (
          <>
          <div id="table_Products">
            <div>{producto.nombre}</div>
            <div>{producto.descripcion}</div>
            <div>{producto.precio}</div>
            <div><img id="imgTable" src={producto.link} alt="" /></div>
            <div id="divBotonEditar"><button onClick={() => handleModal(producto)} id="botonEditar">Editar</button></div>
          </div>
        </>
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
            <option value={boxCafe}>BoxCafe</option>
            <option value={bebidasFrias}>Bebidas Frias</option>
            <option value={almuerzos}>Almuerzos</option>
            <option value={desayunos}>Desayunos</option>
            <option value={expressos}>Expressos</option>
            <option value={postres}>Postres</option>
            <option value={salados}>Salados</option>
            <option value={tortas}>Tortas</option>
        </select>
        <button onClick={handlePut}>Confirmar</button>
        <button onClick={() => handleDelete(Producto.id)}>Eliminar</button>
    </div>
    )}
    </>

  );
};

export default TablaProductos;