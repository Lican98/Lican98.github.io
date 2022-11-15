
import './App.css';

function App() {
  return (
    <div className="App">
      <nav class="navbar">
        <div class="container-fluid">
          <img src="/logolican.png" width="80" height="80" alt="" />
          <form class="d-flex">
            <a href='#lenguaje' class="btn  rounded-pill px-3 mb-2 mb-lg-0">Lenguajes Aprendidos</a>
            <a href='#informacion' class="btn  rounded-pill px-3 mb-2 mb-lg-0" >Información Personal</a>
            <a href='#redes' class="btn  rounded-pill px-3 mb-2 mb-lg-0" >Redes Sociales</a>
          </form>
        </div>
      </nav>
      <div>
        <br></br>
        <h2 id='informacion'> Información Personal:</h2>
        <br></br>

        <div class="container-center">
          <div class="row">
            <div class="col-5">
              <div class="card">
                <center>
                  <img class="logo" src="/logolican.png" width="150" height="200" alt="" />
                </center>
                <br></br>
                <p class="card-title">Lican Santander</p>
              </div>
            </div>
            <div class="col-6">
              <div class="row">
                <p class="center h5">
                  Desarrolladora de citio web. En buscqueda de un buen ambiente laboral con grandes desafio y mas que todo con muchas ganas de aprender cosas nuevas , donde la cratividad sea un elemento fundamental para el desarrollo del trabajo tanto individual como en el equipo.
                </p>
              </div>
            </div>
          </div>
        </div>

        <br></br>
        <h2 id='lenguaje'>Lenguajes Aprendidos:</h2>
        <br></br>
      </div>
      <div class="container">
        <div class="card-group">
          <div class="card" >
            <img src="/HTML.png" alt="..." />
            <div class="card-b">
              <h5 class="card-title">HTML</h5>
              <p class="card-text">El Lenguaje de Marcado de Hipertexto (HTML) es el código que se utiliza para estructurar y desplegar una página web y sus contenidos.</p>
            </div>
          </div>
          <div class="card">
            <img src="/CSS.png" alt="..." />
            <div class="card-b">
              <h5 class="card-title">CSS</h5>
              <p class="card-text"> CSS es un lenguaje que maneja el diseño y presentación de las páginas web, es decir, cómo lucen cuando un usuario las visita. </p>
            </div>
          </div>
          <div class="card">
            <img src="/JS.png" alt="..." />
            <div class="card-b">
              <h5 class="card-title">JS</h5>
              <p class="card-text">JavaScript es un lenguaje de programación que los desarrolladores utilizan para hacer páginas web interactivas.</p>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <div class="container">
        <div class="card-group">
          <div class="card">
            <img src="/git.png" alt="..." />
            <div class="card-b">
              <h5 class="card-title">GIT</h5>
              <p class="card-text"> Git es, con diferencia, el sistema de control de versiones moderno más utilizado del mundo.</p>
            </div>
          </div>
          <div class="card">
            <img src="/boostrap.png" alt="..." />
            <div class="card-b">
              <h5 class="card-title">BOOSTRAP</h5>
              <p class="card-text">Bootstrap es una biblioteca multiplataforma o conjunto de herramientas de código abierto para diseño de sitios y aplicaciones web.</p>
            </div>
          </div>
          <div class="card">
            <img src="/github.png" alt="..." />
            <div class="card-b">
              <h5 class="card-title">GITHUB</h5>
              <p class="card-text">GitHub es una forja para alojar proyectos utilizando el sistema de control de versiones Git. Se utiliza principalmente para la creación de código fuente de programas de ordenador.</p>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <h2 id='redes'> Redes Sociales:</h2>
      <embed src="./Curriculum.pdf" type="application/pdf" width="100%" height="600px" />
      <br></br>

      <footer class="bg-black text-center py-5">
        <div class="container px-5">
          <div class="text-white-50 small">
            <div class="mb-2">&copy; Este perfil es total mente seguro
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;