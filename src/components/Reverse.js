import { useState } from "react";

function Reverse(){
    const [lista, setLista] = useState([1, 2, "da", 2.50, "ne", 3, 4, 5, 6, 7, 8]);

    const onClick = () => {
        const obrnutaLista = [];
        for (let i = lista.length - 1; i >= 0; i--) {
            obrnutaLista.push(lista[i]);
        }
        setLista(obrnutaLista)
    }

    return (
        <div>
            <h1>2. Zadatak - obrnuti redoslijed</h1>
            <p>Klikom na gum će se obrnuti redoslijed dolje navedenog niza</p>
            {lista.toString()}<br/>
            <button onClick={onClick}>Klikni</button>
        </div>
    )
}

export default Reverse;