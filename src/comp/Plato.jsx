import { useState } from "react";

const Plato = (props) => {

    const [indice, setIndice] = useState(0);

    const {platos} = props;

    const verSiguiente = () => {
        setIndice(
            indice => indice+1
        )
    }

    const verAnterior = () => {
        setIndice(
            indice => indice-1
        )
    }

    return(

        <div className="col-4 border border-1">
            <img src={platos[indice].imagen} alt="plato" className="mt-3 w-100" />
            <p className="fs-4 mt-2">{platos[indice].nombre}</p>
            <p className="fs-5">Precio: S/. {platos[indice].precio}</p>
            <div className="d-flex mb-3 justify-content-between">
                <button className="btn btn-danger" onClick={verAnterior}>Anterior</button>
                <button className="btn btn-success" onClick={verSiguiente}>Siguiente</button>
            </div>
        </div>
    )
}

export default Plato;