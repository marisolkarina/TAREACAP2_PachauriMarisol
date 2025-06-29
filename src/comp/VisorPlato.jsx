import { useState, useEffect } from "react";
import Plato from "./Plato";

const VisorPlato = (props) => {

    const [indice, setIndice] = useState(0);
    const [indiceAuto, setIndiceAuto] = useState(0);

    const {platos, manual} = props;

    const verSiguiente = () => {
        setIndice(indice => (indice===platos.length-1 ? 0 : indice +1));
    }

    const verAnterior = () => {
        setIndice(indice => (indice===0 ? platos.length-1 : indice-1));
    }

    const actualizar = () => {
        setIndiceAuto(indiceAuto => (indiceAuto===platos.length-1 ? 0 : indiceAuto +1));
    }

    useEffect(()=>{
        const x = setInterval(() => {
            actualizar()
        }, 3000);

        return () => clearInterval(x)
    }, [])



    return(

        <Plato platos={platos} manual={manual} indice={manual ? indice : indiceAuto}
                verAnterior={verAnterior} verSiguiente={verSiguiente} />
    )
}

export default VisorPlato;