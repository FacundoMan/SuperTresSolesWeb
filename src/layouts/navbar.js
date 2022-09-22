import { Fragment } from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";

import almacenIcono from "../img/Almacen.png";
import bebidasIcono from "../img/Bebidas.png";
import carniceriaIcon from "../img/Carniceria.png";
import ferreteriaIcon from "../img/Ferreteria.png";
import panaderiaIcon from "../img/Panaderia.png";
import papeleriaIcon from "../img/Papeleria.png";
import rotiseriaIcon from "../img/Rotiseria.png";
import verduleriaIcon from "../img/Verduleria.png";
import logoTresSoles from "../img/logo3Soles.png";
import Footer from "../layouts/footer.js";



const NavBarTresSoles = () => {
  return (
    <>
      <Navbar sticky="top" className="navBg" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img className="logoImg" alt="Logo supermercado 3 soles" src={logoTresSoles} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="menuTexto" as={Link} to="/">
                Inicio
              </Nav.Link>

              <NavDropdown  title="Categorias" id="basic-nav-dropdown">
                <NavDropdown.Item className="menuTexto" as={Link} to="/todos-los-productos">Todos los productos</NavDropdown.Item>
                <NavDropdown.Item className="menuTexto" as={Link} to="/almacen"><spam><img alt="almacen" className="iconoMenu" src={almacenIcono}/></spam> Almacen</NavDropdown.Item>
                <NavDropdown.Item className="menuTexto" as={Link} to="/bebidas-y-refrescos"><spam><img alt="bebida" className="iconoMenu" src={bebidasIcono}/></spam> Bebidas y refrescos</NavDropdown.Item>
                <NavDropdown.Item className="menuTexto" as={Link} to="/carniceria"><spam><img alt="carniceria" className="iconoMenu" src={carniceriaIcon}/></spam> Carniceria</NavDropdown.Item>
                <NavDropdown.Item className="menuTexto" as={Link} to="/ferreteria"><spam><img alt="ferreteria" className="iconoMenu" src={ferreteriaIcon}/></spam> Ferreteria</NavDropdown.Item>
                <NavDropdown.Item className="menuTexto" as={Link} to="/panaderia"><spam><img alt="panaderia" className="iconoMenu" src={panaderiaIcon}/></spam> Panaderia</NavDropdown.Item>
                <NavDropdown.Item className="menuTexto" as={Link} to="/papeleria"><spam><img alt="papeleria" className="iconoMenu" src={papeleriaIcon}/></spam> Papeleria</NavDropdown.Item>
                <NavDropdown.Item className="menuTexto" as={Link} to="/rotiseria"><spam><img alt="rotiseria" className="iconoMenu" src={rotiseriaIcon}/></spam> Rotiseria</NavDropdown.Item>
                <NavDropdown.Item className="menuTexto" as={Link} to="/verduleria"><spam><img alt="verduleria" className="iconoMenu" src={verduleriaIcon}/></spam> Verduleria</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="menuTexto" as={Link} to="/ofertas">
                Ofertas
              </Nav.Link>
             

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <section className="sectionNavbar">
      <Outlet></Outlet>
      <Footer></Footer>
      </section>
      
    </>
  );
};
export default NavBarTresSoles;
