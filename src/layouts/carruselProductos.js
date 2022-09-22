import { Carousel } from "react-bootstrap";
import ofertaCirculo from "../img/ofertatwo.png"


const CarruselProductos = (props) => {
  const productos = props.p;

  return (
    <>
      <Carousel className="tamanioCarrusel">
        {productos != null
          ? productos
              .map((p) => (
                <Carousel.Item className="tamanioCarrusel" interval={1500}>
                  <div className="gridCarrusel">
                    {
                      //Esto es para mostrar una imagen si tiene oferta o no
                      p.oferta !== 0 ? (
                        <img className="imagenOfertaCarrusel" alt="ofertanpm " src={ofertaCirculo}></img>
                      ) : null
                    }
                    <img
                      className="d-block w-100 imagenCarrusel"
                      src={p.urlImagen}
                      alt={p.nombre}
                    />
                    <h1 className="tituloCarrusel cortarTexto">{p.nombre}</h1>
                    <div className="precioCarrusel">
                      <p className="precioP">
                        ${p.precio}{" "}
                        <br></br>
                        {p.oferta!==0 ?<spam className="ofertaColor">%{p.oferta}</spam>:null}
                      </p>
                    </div>
                  </div>
                </Carousel.Item>
              ))
              .slice(0, 5)
          : null}
      </Carousel>
    </>
  );
};
export default CarruselProductos;
