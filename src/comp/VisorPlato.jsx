import { useState, useEffect, useRef } from "react";
import Plato from "./Plato";

const VisorPlato = (props) => {
    const [indice, setIndice] = useState(0);
    const [indiceAuto, setIndiceAuto] = useState(0);
    const [modoManualAuto, setModoManualAuto] = useState(false);

    const {platos, manual} = props;

    const intervaloRef = useRef(null);

    const verSiguiente = () => {
        setIndice(indice => (indice===platos.length-1 ? 0 : indice+1));
    };

    const verAnterior = () => {
        setIndice(indice => (indice===0 ? platos.length-1 : indice-1));
    };

    const actualizar = () => {
        setIndiceAuto(indiceAuto => (indiceAuto===platos.length-1 ? 0 : indiceAuto+1));
    };

    useEffect(() => {
        const x = setInterval(() => {
            actualizar();
        }, 3000);
        return () => clearInterval(x);
    }, []);

    const detenerAutomatico = () => {
        setModoManualAuto(true);
        setIndice(indiceAuto);
    };

    const continuarAutomatico = () => {
        setModoManualAuto(false);
        intervaloRef.current = setInterval(() => {
            actualizar();
        }, 3000);
    };

    return (
        <div>
            <Plato platos={platos} manual={manual || modoManualAuto}
                indice={manual ? indice : (modoManualAuto ? indice : indiceAuto)}
                verAnterior={verAnterior} verSiguiente={verSiguiente} />

            {
                !manual && (
                    <>
                        {
                            modoManualAuto ? (
                                <div className="d-flex justify-content-center mt-2">
                                    <button className="btn btn-primary me-2" onClick={continuarAutomatico}>Continuar Automático</button>
                                </div>
                            ) : (
                                <div className="d-flex justify-content-center mt-2">
                                    <button className="btn btn-warning" onClick={detenerAutomatico}>Parar</button>
                                </div>
                            )
                        }
                    </>
                )
            }
        </div>
    );
};

export default VisorPlato;

