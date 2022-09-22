import axios from "axios";

const obtenerTodasLasOfertas = async (state) => {
  const peticion =await axios.get(
    'http://localhost:8080/api/Producto/getProductosOfertas'
   // 'https://supertressoles.azurewebsites.net/api/Producto/getProductosOfertas'
  );
  state(peticion.data);
};

export { obtenerTodasLasOfertas };
