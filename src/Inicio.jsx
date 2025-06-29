import { data } from "./data";
import VisorPlato from "./comp/VisorPlato";

const Inicio = () => {

    const {platos} = data;

    

    return (
        <main className="container">
            <p className="fs-3 text-primary mt-4 text-center">Platos criollos peruanos</p>
            <section className="d-flex justify-content-center">
                <VisorPlato platos={platos} manual={true}/>
                <VisorPlato platos={platos} manual={false}/>
            </section>

        </main>
    );
}

export default Inicio;