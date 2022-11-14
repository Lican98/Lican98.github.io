
import './App.css';

function App() {
  return (
    <div className="App">
      <nav class="navbar">
        <div class="container-fluid">
          <img src="/logolican.png" width="80" height="80" alt="" />
          <form class="d-flex">
            <button class="btn  rounded-pill px-3 mb-2 mb-lg-0" data-bs-toggle="modal">Informacion Personal</button>
            <button class="btn  rounded-pill px-3 mb-2 mb-lg-0" data-bs-toggle="modal">Redes Sociales</button>
          </form>
        </div>
      </nav>
      <div>
        <br></br>
        <h2>Lenguajes Aprendidos</h2>
        <br></br>
      </div>
      <div class="container">
        <div class="card-group">
          <div class="card">
            <img src="/HTML.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">HTML</h5>
              <p class="card-text">El Lenguaje de Marcado de Hipertexto (HTML) es el código que se utiliza para estructurar y desplegar una página web y sus contenidos.</p>
            </div>
          </div>
          <div class="card">
            <img src="/CSS.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">CSS</h5>
              <p class="card-text"> CSS es un lenguaje que maneja el diseño y presentación de las páginas web, es decir, cómo lucen cuando un usuario las visita. </p>
            </div>
          </div>
          <div class="card">
            <img src="/JS.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">JS</h5>
              <p class="card-text">JavaScript es un lenguaje de programación que los desarrolladores utilizan para hacer páginas web interactivas.</p>
            </div>
          </div>
        </div>
      </div>
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
