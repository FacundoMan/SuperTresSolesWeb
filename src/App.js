import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route,Navigate,Routes} from "react-router-dom";
//Importar los componentes creados
import Home from "./components/home";
import Ofertas from "./components/ofertas";
import NavBarTresSoles from "./layouts/navbar";
import Productos from "./components/productos";
import Almacen from "./components/categorias/almacen";
import Bebidas from "./components/categorias/bebidas";
import Carniceria from "./components/categorias/carniceria";
import Ferreteria from "./components/categorias/ferreteria";
import Panaderia from "./components/categorias/panaderia";
import Papeleria from "./components/categorias/papeleria";
import Rotiseria from "./components/categorias/rotiseria";
import Verduleria from "./components/categorias/verduleria";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBarTresSoles />}>
            <Route index element={<Home />} />
            <Route path="ofertas" element={<Ofertas />} />
            <Route path="almacen" element={<Almacen />}  /> 
            <Route path="bebidas-y-refrescos" element={<Bebidas />}  />    
            <Route path="carniceria" element={<Carniceria />}  />  
            <Route path="ferreteria" element={<Ferreteria />}  />  
            <Route path="panaderia" element={<Panaderia />}  />  
            <Route path="papeleria" element={<Papeleria />}  />  
            <Route path="rotiseria" element={<Rotiseria />}  />  
            <Route path="verduleria" element={<Verduleria />}  />   
            <Route path="todos-los-productos" element={<Productos />}  />          
           
            
            <Route path="*" element={<Navigate remplace to="/"/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
