import axios from "axios";

const todosLosProductos = async (state) => {
  const peticion =await axios.get(
    'http://localhost:8080/api/Producto/getProductos'
  // 'https://supertressoles.azurewebsites.net/api/Producto/getProductos'
  );
  state(peticion.data);
};

export { todosLosProductos };
