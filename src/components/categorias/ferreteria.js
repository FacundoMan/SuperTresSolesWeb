import { Image } from "react-bootstrap";
import { Card, Col, Row } from "react-bootstrap";
import ofertaStiker from "../../img/ofertaStiker.png";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Container} from "react-bootstrap";
import { obtenerProductosPorCategoria } from "../../funciones/obtenerProductosPorCategoria";
const Ferreteria = () => {
 //Inicio de todos los productos
 const [productos, setProductos] = useState(null);
 const [buscar, setBuscar] = useState("");

 //Llamo a la api para cargar los datos con "todosLosProductosy se lo seteo a la constante productos"
 useEffect(() => {
   obtenerProductosPorCategoria(setProductos,1100);
 }, []);

 //Filtrado de busqueda
 const buscarProducto = (e) => {
   setBuscar(e.target.value);
 };
 //Metodo de filtrado
 let productosFiltrados = [];
 if (!buscar) {
   productosFiltrados = productos;
 } else {
   productosFiltrados = productos.filter((p) =>
     p.nombre.toLowerCase().includes(buscar.toLocaleLowerCase())
   );
 }

    return (
      <>
      {window.scroll(0,0)}
       <Container className="containerHome">
       <div className="banner" id="ferreteria"></div>
      <div className="tituloBoton">
        <h1 className="letraSeccion">Ferreteria</h1>
      </div>
       <div className="input-group col-md-4 tamanio">
      <input
          value={buscar}
          onChange={buscarProducto}
          type="text"
          placeholder="Buscar"
          className="form-control py-2 sinBorde"
        />
      <span className="input-group-append iconoBuscar" >
      <FontAwesomeIcon color="black" icon={faMagnifyingGlass}></FontAwesomeIcon>
      </span>
      </div>    
      <Row>
          {productosFiltrados != null
            ? productosFiltrados.map((producto) => (
              
                <Col sm>
                  {" "}
                  <Card
                    style={{ width: "18rem" }}
                    key={producto.id}
                    className="box"
                  >
                 
                   {//Esto es para mostrar una imagen si tiene oferta o no
                   producto.oferta!==0 ? <Card.Img className="imagenOferta" src={ofertaStiker}></Card.Img>:null
                   }   
                    <Card.Img variant="top" src={producto.urlImagen} />
                    <Card.Body>
                      <Card.Title className="productoEstilo">{producto.nombre}</Card.Title>
                      <Card.Body className="productoEstilo">${producto.precio}{producto.oferta!==0 ?<spam className="ofertaColor">%{producto.oferta}</spam>:null}</Card.Body>
                      
                    </Card.Body>
                  </Card>
                </Col>
              ))
            : <section className="noHayLista"><Image src="https://dbeautyloungeindia.com/wp-content/uploads/2021/05/nproduct.png">
              </Image></section>}
        </Row>
        </Container>
      </>
    );
  };
  export default Ferreteria;