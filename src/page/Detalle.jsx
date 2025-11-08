//Pagina de Detalles bien mamalones
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { formatCurrency } from "../util/funciones";


const API = 'https://dummyjson.com/products/'

const Detalle = () => {
    const parametro=useParams()
    const [datos, setDatos] = useState([]); //datos: Almacena los productos recibidos de la API.
    const [loading, setLoading] = useState(true); //loading: Indica si la carga está en progreso (para mostrar un spinner).
    const [error, setError] = useState(null); //error: Guarda el mensaje de error si la petición falla.
    const URI = API + parametro.id

const getDatos = async () => {
        try {
            const response = await fetch(URI);
            if (!response.ok) {
                throw new Error("HTTP error! status: " + response.status);
            }
            const data = await response.json();
            setDatos(data);
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
        <h4 className="text-center pt-4">Detalles del producto {parametro.title}</h4>
        <div className="row">
            <div className="col-md-4">
                <img src={datos.thumbnail} alt="" className="img-fluid" />
            </div>
            <div className="col-md-8">
                <h3><b>{datos.title}</b></h3>
                <p>
                    <b className="text-danger">Categoria: {datos.category}</b>  <br/>
                    <b className="text-danger">Marca: {datos.brand}</b> <br />
                    <b className="text-danger">Stock de: {datos.stock}</b> <br />
                </p>
                <p>{datos.description}</p>
                <h4><b className="text-warning">Precio: {formatCurrency(datos.price)}</b></h4>
                
            </div>
        </div>
        {datos.reviews.map((item) => (
            <div className="card container">
                <p>Nombre de usuario: {item.reviewerName}</p>
                <p>{item.comment}</p>
                <p>Fecha de publicacion: {item.date}</p>
                
            </div>
        ))}


    </div>
  )
}

export default Detalle
