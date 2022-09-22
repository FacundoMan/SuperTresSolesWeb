import axios from "axios";

const obtenerProductosPorCategoria = async (state,idCategoria) => {
  const peticion =await axios.get(
   'http://localhost:8080/api/Producto/getProductos/'+idCategoria
  // 'https://supertressoles.azurewebsites.net/api/Producto/getProductos/'+idCategoria
  );
  state(peticion.data);
};

export { obtenerProductosPorCategoria };