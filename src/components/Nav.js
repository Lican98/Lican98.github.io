function Nav (){
    return(
        <nav className="navbar">
        <div class="container-fluid">
          <img src="/logolican.png" width="80" height="80" alt="" />
          <form class="d-flex">
            <a href='#lenguaje' class="btn  rounded-pill px-3 mb-2 mb-lg-0">Lenguajes Aprendidos</a>
            <a href='#redes' class="btn  rounded-pill px-3 mb-2 mb-lg-0" >Redes Sociales</a>
          </form>
        </div>
      </nav>
    )
}

export default Nav