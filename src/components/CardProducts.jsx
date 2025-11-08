import { Link } from "react-router-dom";
import { formatCurrency } from "../util/funciones";
import Detalle from "../page/Detalle";

const CardProducts = ({item}) => {
  return (
    //Este es el contenedor como tal
    <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-4">
        
        <div className="card text-center h-100 ">
            <div className="card-header">
                <img src={item.thumbnail} alt={item.price} className="img-fluid" />
            </div>
            <div className="card-body">
                <p className="fs-5">{item.title}</p>
                <p className="fs-6 fw-bold text-danger">Marca: {item.brand}</p>
                <p className="fs-4 text-warning">Precio: {formatCurrency(item.price)}</p>
            </div>
            <div className="card-footer">
                <button className="btn btn-outline-info me-4" data-bs-toggle="modal" data-bs-target= {`#${item.id}`}>
                    Modal
                </button>
                <Link to={`/detalle/${item.id}/${item.title}`} className="btn btn-outline-warning">
                    Detalles

                </Link>
            </div>
        </div>
        
    <div className="modal fade" id={item.id} tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog modal-lg">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">{item.title}</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
      </div>
      <div className="modal-body">
        <div className="row">
            <div className="col-md-4">
                <img src={item.thumbnail} alt="" className="img-fluid" />
            </div>
            <div className="col-md-8">
                <h3><b>{item.title}</b></h3>
                <p>
                    <b className="text-danger">Categoria: {item.category}</b>  <br/>
                    <b className="text-danger">Marca: {item.brand}</b> <br />
                    <b className="text-danger">Stock de: {item.stock}</b> <br />
                </p>
                <p>{item.description}</p>
                <h4><b className="text-warning">Precio: {formatCurrency(item.price)}</b></h4>
                
            </div>
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
        
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default CardProducts
