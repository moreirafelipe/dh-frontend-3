import './index.css';

const Header = () => {
  return (
    <header>
      <nav class="navbar navbar-expand-lg navbar-dark menu">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">MyFlix</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="#">Inicio</a>
              <a class="nav-link" href="#">Filmes</a>
              <a class="nav-link" href="#">Séries</a>
              <a class="nav-link ">Sobre</a>
            </div>
          </div>
        </div>
      </nav>
      {/*  <h1>MyFlix</h1>
      <nav>
        <ul>
          <li><a href="#header">Inicio</a></li>
          <li><a href="#animals">Favoritos</a></li>
          <li><a href="#galeria">Mais vistos</a></li>
          <li><a href="#galeria">Bem avaliados</a></li>
          <li><a href="#footer">Sobre</a></li>
        </ul>
      </nav> */}
    </header>
  )
}

export default Header;