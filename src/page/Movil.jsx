import { useEffect, useState } from "react";
import { formatCurrency } from "../util/funciones";

const API = 'https://dummyjson.com/products/category/smartphones'
const Movil = () => {
    const [datos, setDatos] = useState([]); //datos: Almacena los productos recibidos de la API.
    const [loading, setLoading] = useState(true); //loading: Indica si la carga está en progreso (para mostrar un spinner).
    const [error, setError] = useState(null); //error: Guarda el mensaje de error si la petición falla.
    
    const getDatos = async () => {
        try {
            const response = await fetch(API);
            if (!response.ok) {
                throw new Error("HTTP error! status: " + response.status);
            }
            const data = await response.json();
            setDatos(data.products);
            console.log("Mostrando datos bien epicos de la api")
            console.log(data)
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };
    useEffect(() => {
        getDatos();
    }, []);

    if (loading) {
        return (
            <div className="text-center py-5">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <p>Cargando Registros bien mamalones y epicos...</p>
            </div>
        );
    }
    if (error) {
        return (
            <div className="text-center py-5 text-danger">
                <h4>Elol al calgal los legistlos bien mamalones y epicos</h4>
                <p>{error}</p>
            </div>
        );
    }
    
  
    return (
    <div className="container">
      <h1 className="text-center py-4">PAGINA DE MOVIL BIEN EPICA 3000</h1>
    <div className="row">
        {datos.map((item)=>(
            <div className="col-6 col-sm-6 col-md-4 col-lg-3 mb-4">
                <div className="card text-center h-100 boton ">
                    <div className="card-header">
                        <img src={item.thumbnail} alt={item.price} className="img-fluid" />
                    </div>
                    <div className="card-body">
                        <p className="fs-5">{item.title}</p>
                        <p className="fs-6 fw-bold text-danger">Marca: {item.brand}</p>
                        <p className="fs-4 text-warning">Precio: {formatCurrency(item.price)}</p>
                    </div>
                    <div className="card-footer">
                        <button className="btn btn-outline-info me-4">
                            Modal
                        </button>
                        <button className="btn btn-outline-warning">
                            Detalles
                        </button>
                    </div>
                </div>
            </div>
        ))}
            

    </div>
    </div>
  )
}

export default Movil
