
import React, { useEffect, useState } from "react";
import { Button, Container} from "react-bootstrap";
import CarruselProductos from "../layouts/carruselProductos";
import { obtenerTodasLasOfertas } from "../funciones/obtenerTodasLasOfertas";
import { obtenerProductosPorCategoria } from "../funciones/obtenerProductosPorCategoria";

import { Link } from 'react-router-dom'


const Home = () => {
  //Cargar las listas de categorias 
  //Fin de productos----------------------------------
 //Inicio Producto Categoria "Ferreteria" id 1100
 const [ferreterias, setFerreterias] = useState(null);
 useEffect(() => {
  obtenerProductosPorCategoria(setFerreterias,1100);
  },[]);
  //Fin Producto Categoria "Ferreteria"
  //Inicio Producto Categoria "Panaderia" id 1200
  const [panaderias, setPanaderias] = useState(null);
 useEffect(() => {
  obtenerProductosPorCategoria(setPanaderias,1200);
  },[]);
  //Fin Producto Categoria "Panaderia"
  //Inicio Producto Categoria "Papeleria" id 1300
  const [papelerias, setPapelerias] = useState(null);
 useEffect(() => {
  obtenerProductosPorCategoria(setPapelerias,1300);
  },[]);
  //Fin Producto Categoria "Papeleria"
  //Inicio Producto Categoria "Carniceria" id 1400
  const [carnicerias, setCarnicerias] = useState(null);
 useEffect(() => {
  obtenerProductosPorCategoria(setCarnicerias,1400);
  },[]);
  //Fin Producto Categoria "Carniceria"
  //Inicio Producto Categoria "Rotiseria" id 1500
  const [rotiserias, setRotiserias] = useState(null);
 useEffect(() => {
  obtenerProductosPorCategoria(setRotiserias,1500);
  },[]);
  //Fin Producto Categoria "Rotiseria"
  //Inicio Producto Categoria "Verduleria" id 1600
  const [verdulerias, setVerdulerias] = useState(null);
 useEffect(() => {
  obtenerProductosPorCategoria(setVerdulerias,1600);
  },[]);
  //Fin Producto Categoria "Verduleria"
  //Inicio Producto Categoria "Alacen" id 1700
  const [almacenes, setAlmacenes] = useState(null);
 useEffect(() => {
  obtenerProductosPorCategoria(setAlmacenes,1700);
  },[]);
  //Fin Producto Categoria "Almacen"
  //Inicio Producto Categoria "Bebidas" id 1800
  const [bebidas, setBebidas] = useState(null);
 useEffect(() => {
  obtenerProductosPorCategoria(setBebidas,1800);
  },[]);
  //Fin Producto Categoria "Bebidas"

  //Carrusel Ofertas
  const [ofertasCaro,setOfertasCaro] = useState(null);
    useEffect(() => {
  obtenerTodasLasOfertas(setOfertasCaro);
  },[]);
  //Fin Carrusel ofertas-----------------------------

// <ProductosCard productosFiltrados={productosFiltrados}></ProductosCard>
  return (
    <> 
    {window.scroll(0,0)}
      <h1>Mira algunas de nuestras OFERTAS!!!</h1>
      <CarruselProductos p={ofertasCaro}></CarruselProductos>
      <Container className="containerHome">
      <section> 
      <div className="banner" id="ferreteria"></div>
      <div className="tituloBoton">
        <h1 className="letraSeccion">Ferreteria</h1>
        

        <Link as={Link} to="/ferreteria"><a class="ver-mas" href="#">Ver Mas<span></span></a></Link>
        
      </div>
      <CarruselProductos p={ferreterias}></CarruselProductos>
      </section>
      <section>
      <div className="banner" id="panaderia"></div>
      <div className="tituloBoton">
        <h1 className="letraSeccion">Panaderia</h1>
        <Link as={Link} to="/panaderia"><a class="ver-mas" href="#">Ver Mas<span></span></a></Link>
      </div>
      <CarruselProductos p={panaderias}></CarruselProductos>
      </section> 
      <section>
      <div className="banner" id="papeleria"></div>
      <div className="tituloBoton">
        <h1 className="letraSeccion">Papeleria</h1>
        <Link as={Link} to="/papeleria"><a class="ver-mas" href="#">Ver Mas<span></span></a></Link>
      </div>
      <CarruselProductos p={papelerias}></CarruselProductos>
      </section> 
      <section>
      <div className="banner" id="carniceria"></div>
      <div className="tituloBoton">
        <h1 className="letraSeccion">Carniceria</h1>
        <Link as={Link} to="/carniceria"><a class="ver-mas" href="#">Ver Mas<span></span></a></Link>
      </div>
      <CarruselProductos p={carnicerias}></CarruselProductos>
      </section> 
      <section>
      <div className="banner" id="rotiseria"></div>
      <div className="tituloBoton">
        <h1 className="letraSeccion">Rotiseria</h1>
        <Link as={Link} to="/rotiseria"><a class="ver-mas" href="#">Ver Mas<span></span></a></Link>
      </div>
      <CarruselProductos p={rotiserias}></CarruselProductos>
      </section> 
      <section>
      <div className="banner" id="verduleria"></div>
      <div className="tituloBoton">
        <h1 className="letraSeccion">Verduleria</h1>
        <Link as={Link} to="/verduleria"><a class="ver-mas" href="#">Ver Mas<span></span></a></Link>
      </div>
      <CarruselProductos p={verdulerias}></CarruselProductos>
      </section> 
      <section>
      <div className="banner" id="almacen"></div>
      <div className="tituloBoton">
        <h1 className="letraSeccion">Almacen</h1>
        <Link as={Link} to="/almacen"><a class="ver-mas" href="#">Ver Mas<span></span></a></Link>
      </div>
      <CarruselProductos p={almacenes}></CarruselProductos>
      </section> 
      <section>
      <div className="banner" id="bebidas"></div>
      <div className="tituloBoton">
        <h1 className="letraSeccion">Bebidas y Refrescos</h1>
        <Link as={Link} to="/bebidas-y-refrescos"><a class="ver-mas" href="#">Ver Mas<span></span></a></Link>
      </div>
      <CarruselProductos p={bebidas}></CarruselProductos>
      </section>      
      </Container>
    </>
  );
};
export default Home;
