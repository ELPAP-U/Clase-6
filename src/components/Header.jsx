import { Link } from "react-router-dom"


const Header = () => {
  return (
    <nav className="navbar NAVEGACION navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">GrandAxioma Conglomeration</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 p-2">
        <li className="nav-item">
          <Link to ={'/inicio'} className="nav-link active" aria-current="page" href="#">Inicio</Link>
        </li>
        <li className="nav-item">
          <Link to={'/movil'} className="nav-link" href="#">Movil</Link>
        </li>
        <li className="nav-item">
          <Link to={'/laptops'} className="nav-link" href="#">Laptops</Link>
        </li>
        <li className="nav-item">
          <Link to={'/comestibles'} className="nav-link" href="#">Comestibles</Link>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Productos
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Producto1</a></li>
            <li><a className="dropdown-item" href="#">Producto2</a></li>
            <li><a className="dropdown-item" href="#">Producto3</a></li>
          </ul>
          <li className="nav-item">
          <a className="nav-link" href="#">Contactos</a>
        </li>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Buscar</button>
      </form>
    </div>
  </div>
</nav>

  )
}

export default Header
