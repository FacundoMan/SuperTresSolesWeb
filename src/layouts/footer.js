const Footer = () => {
  const year = new Date().getFullYear();

  return(
    <>
    <footer className="footer-distributed">

<div className="footer-left">

  <h3>Super 3 Soles</h3>
  <br>
  </br>
<p className="footerp">
📅ABIERTO TODOS LOS DIAS DE 8:00 a 22:00
<br></br>
📌NO CERRAMOS AL MEDIODIA👌
</p>
 

  
</div>

<div className="footer-center">

  <div>
    <i className="fa fa-map-marker"></i>
    <p><span>Leandro Gomez 123</span> Durazno, Uruguay</p>
  </div>

  <div>
    <i className="fa fa-phone"></i>
    <p>43626350</p>
  </div>

  <div>
    <i className="fa fa-envelope"></i>
    <p><a href="https://www.facebook.com/lostrres.soles">Facebook:LosTres Soles</a></p>
  </div>

</div>

<div className="footer-right">

  <p className="footer-company-about">
    <span>Sombre la compania</span>
    Super 3 Soles es una empresa de autoservicio ubicada en el departamento de Durazno, está en constante crecimiento y con los mejores productos.
  </p>
</div>
<p className="footer-company-name">Super 3 Soles © {year}</p>
</footer>
    </>
  ) 
};

export default Footer;