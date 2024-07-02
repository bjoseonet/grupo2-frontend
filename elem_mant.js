header = document.querySelector('header').innerHTML = `
    <div class="navbar">
      <div class="topnav" id="myTopnav">
          <img class="logo" src="../img/logopizzcode.svg" alt="logo">
          <a href="../index.html">HOME</a>
          <a href="../nosotros/nosotros.html">NOSOTROS</a>
          <a href="../contacto/contacto.html">CONTACTENOS</a>
          <a href="crudproduct.html">PRODUCTOS</a>
          <a href="cruduser.html">USUARIOS</a>
          <a href="crudcoment.html">COMENTARIOS</a>
          <a href="../login/login.html"><button>LOGIN</button></a>
          <a href="javascript:void(0);" class="icon" onclick="burguerMenu()">
              <i class="fa fa-bars"></i>
          </a>
          <form id="buscar" class="d-flex my-2 my-lg-0">
            <input id="searchTerm" class="form-control me-sm-2" type="text" placeholder="Buscar" onkeyup="doSearch()">
          </form>

      </div>
    </div>
    `;

header.innerHTML += header;

let footer = (document.querySelector('footer').innerHTML = `
<div>
  <p class="text-presentation">Somos la mejor pizeria de la cuadra. </p>
  <p class='rights-text'>© 2024 Grupo 2. All right reserved.</p>
</div>
<div>
  <h3>Siguenos en nuestras redes</h3>
    <div class="redes-sociales">
      <a href="https://twitter.com/?lang=en" target="_blank"><i class="fab fa-twitter"></i></a>
      <a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook"></i></a>
      <a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a>
    </div>
</div>

`);

footer.innerHTML += footer;
