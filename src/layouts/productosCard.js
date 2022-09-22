import React from "react";
import { Card, Button,Row, Col,Image } from "react-bootstrap";
import ofertaImagen from "../imagenes/ofertaStiker.png";
const productosCard = (props) => {

const productos=props.productosFiltrados;
return (
    <>
    <Row>
          {productos != null
            ? productos.map((producto) => (
                <Col sm>
                  {" "}
                  <Card
                    style={{ width: "18rem" }}
                    key={producto.id}
                    className="box"
                  >
                   {//Esto es para mostrar una imagen si tiene oferta o no
                   producto.oferta>0 ? <Card.Img className="imagenOferta" src={ofertaImagen}></Card.Img>:null
                   }   
                    <Card.Img variant="top" className="imagenCard"src={producto.urlImagen} />
                    <Card.Body>
                      <Card.Title className="productoEstilo">{producto.nombre}</Card.Title>
                      <Card.Body className="productoEstilo">${producto.precio}{producto.oferta!==0 ?<spam className="ofertaColor">%{producto.oferta}</spam>:null}</Card.Body>
                      <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            : <section><Image className="imgNotFound"  src="https://dbeautyloungeindia.com/wp-content/uploads/2021/05/nproduct.png">
              </Image></section>}
        </Row>
    </>
  );
};
export default productosCard;