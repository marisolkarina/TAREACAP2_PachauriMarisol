import { Component } from "react";

class Plato extends Component {
    render () {

        const {platos, manual, indice, verAnterior, verSiguiente} = this.props;

        return(

            <div className="mx-4 px-3 border border-1">
                <img src={platos[indice].imagen} alt="plato" className="mt-3 w-100" />
                <p className="fs-4 mt-2">{platos[indice].nombre}</p>
                <p className="fs-5">Precio: S/. {platos[indice].precio}</p>
                {
                    manual ? (
                        <div className="d-flex mb-3 justify-content-evenly">
                            <button className="btn btn-danger" onClick={()=>verAnterior()}>Anterior</button>
                            <button className="btn btn-success" onClick={()=>verSiguiente()}>Siguiente</button>
                        </div>
                    ) : (
                        <></>
                    )
                }
            </div>
        )
    }
}

export default Plato;