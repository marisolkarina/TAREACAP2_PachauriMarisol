import { data } from "./data";
import Plato from "./comp/Plato";

const Inicio = () => {

    const {platos} = data;

    return (
        <main className="container">
            <section className="row">
                <p className="fs-3 text-primary mt-4">Platos criollos peruanos Manual</p>
                <Plato platos={platos}/>
            </section>

        </main>
    );
}

export default Inicio;