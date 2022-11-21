import './App.css';
import MatrixBackground from './matrix';
import Footer from './components/Footer';
import Nav from './components/Nav';
import Card from './components/Card';

function App() {

  return (
    <div className="App">
      <MatrixBackground />
      <Nav />
      <div>

        <br></br>

        <h2 id='informacion'> Información Personal:</h2>

        <br></br>

        <div class="container-center">
          <div class="row">
            <div class="col-5">
              <div class="card">
                <center>
                  <img class="logo" src="/logolican.png" width="150" height="150" alt="" />
                </center>
                <br></br>
                <p class="card-title">Lican Santander</p>
              </div>
            </div>
            <div class="col-6">
              <div class="margin">
                <div class="row">
                  <p class="center h5">
                    Desarrolladora de citio web. En buscqueda de un buen ambiente laboral con grandes desafio y mas que todo con muchas ganas de aprender cosas nuevas , donde la cratividad sea un elemento fundamental para el desarrollo del trabajo tanto individual como en el equipo.
                  </p>
                  <a href="Curriculum.pdf" download="Acme Documentation (ver. 2.0.1).txt">Descarga de Curriculum</a>
                </div>
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
          <Card imgSrc="HTML.png">
            <h5 class="card-title">HTML</h5>
            <p class="card-text">El Lenguaje de Marcado de Hipertexto (HTML) es el código que se utiliza para estructurar y desplegar una página web y sus contenidos.</p>
          </Card>
          <Card imgSrc="/CSS.png">
            <h5 class="card-title">CSS</h5>
            <p class="card-text"> CSS es un lenguaje que maneja el diseño y presentación de las páginas web, es decir, cómo lucen cuando un usuario las visita. </p>
          </Card>
          <Card imgSrc="/JS.png">
            <h5 class="card-title">JS</h5>
            <p class="card-text">JavaScript es un lenguaje de programación que los desarrolladores utilizan para hacer páginas web interactivas.</p>
          </Card>

          <br></br>

          <div class="container">
            <div class="card-group">
              <Card imgSrc="/git.png">
                <h5 class="card-title">GIT</h5>
                <p class="card-text"> Git es, con diferencia, el sistema de control de versiones moderno más utilizado del mundo.</p>
              </Card>
              <Card imgSrc="/boostrap.png">
                <h5 class="card-title">BOOSTRAP</h5>
                <p class="card-text">Bootstrap es una biblioteca multiplataforma o conjunto de herramientas de código abierto para diseño de sitios y aplicaciones web.</p>
              </Card>
              <Card imgSrc="/github.png">
                <h5 class="card-title">GITHUB</h5>
                <p class="card-text">GitHub es una forja para alojar proyectos utilizando el sistema de control de versiones Git. Se utiliza principalmente para la creación de código fuente de programas de ordenador.</p>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <br></br>

      <h2 id='redes'> Redes Sociales:</h2>
      <div class="container">
        <center>
          <div class="col-md-4">
            <a href="https://github.com/Lican98" class="btn  rounded-pill px-3 mb-2 mb-lg-0">
              <img src="/github-logo.png" width="80" height="80" alt="" />
            </a>
            <br></br>
            <a href="mailto:lican.m.olea@gmail.com" class="btn  rounded-pill px-3 mb-2 mb-lg-0">
              <img src="/Gmail.png" width="80" height="80" alt="" />
            </a>
            <a href="https://www.linkedin.com/in/lican-santander-olea-9736a711a/" class="btn  rounded-pill px-3 mb-2 mb-lg-0">
              <img src="/linkedin.png" width="80" height="80" alt="" />
            </a>
          </div>
        </center>
      </div>

      <br></br>
      <Footer />
    </div>
  );
}

export default App;

