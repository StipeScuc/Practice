import { useState } from "react";

function Fizzbuzz(){
    const [broj, setBroj] = useState("")
    const [lista, setLista] = useState ([]);

    const onChange = (e) => {
        setBroj(e.target.value)
        setLista([]);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        for (let i = 1; i <= broj; i++) {
            const listaBrojeva = lista
            if (i % 3 === 0 && i % 5 === 0) {
                listaBrojeva.push(" Fizzbuzz");
            } else if (i % 3 === 0) {
                listaBrojeva.push(" Fizz");
            } else if (i % 5 === 0) {
                listaBrojeva.push(" Buzz");
            }else{
                listaBrojeva.push(" " + i);
            }
            setLista([...listaBrojeva])

        }
        setBroj("");
    }


    return (
        <div>
            <h1>1. Zadatak - Fizzbuzz</h1>
            <form onSubmit={(e) => onSubmit(e)}>
                <input onChange={(e) => onChange(e)} value={broj} placeholder="Upiši broj"/>
                <button>Ispiši listu</button>
            </form>
            <p>{lista.toString()}</p>
        </div>
    )
}
export default Fizzbuzz;