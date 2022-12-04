import { useEffect, useState } from "react";

function Gears() {
    const [prednji, setPrednji] = useState("");
    const [zadnji, setZadnji] = useState("");
    const [omjer, setOmjer] = useState("");
    const [poruka, setPoruka] = useState("")

    const onChangeFront = (e) => {
        setPrednji(e.target.value)
        parseInt(prednji)
    }
    const onChangeBack = (e) => {
        setZadnji(e.target.value)
        parseInt(zadnji)
    }

    useEffect(() => {
        const omjerPrijenosa = () => {
            if(prednji === "" && zadnji === "") {
                return ("")
            }else if(prednji / zadnji === Infinity){
                return ("")
            }else{
                let a = prednji / zadnji;
                return (a.toFixed(2))
            }
        };
        setOmjer(omjerPrijenosa);

        const postaviPoruku = () => {
            if(omjer > 0 && omjer < 2){
                return("Prijenosnog omjera ispod 2 smatraju se malim zupčanicima.")
            }else if(omjer >= 2 && omjer < 3){
                return("Prijenosnog omjera između 2 i 3 smatraju se srednje velikim zupčanicima.")
            }else if(omjer >= 3){
                return("Prijenosnog omjera iznad 3 smatraju se velikim zupčanicima.")
            }else{
                return("")
            }
        };
        setPoruka(postaviPoruku);
        
    },[prednji, zadnji, omjer])

    



    return (
        <div>
            <h1>3. Zadatak - Bicycle gear calculator</h1>
            <h3>Nakon što odaberete dolje ponuđene velićine dobit ce te izračun omijera prijenosa.</h3>
            <label>Veličina prednjeg lančanika: </label>
            <select onChange={(e) => {onChangeFront(e)}} name="prednji" id="prednji">
                <option value=""></option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
                <option value="32">32</option>
                <option value="33">33</option>
                <option value="34">34</option>
                <option value="35">35</option>
                <option value="36">36</option>
                <option value="37">37</option>
                <option value="38">38</option>
                <option value="39">39</option>
                <option value="40">40</option>
                <option value="41">41</option>
                <option value="42">42</option>
                <option value="43">43</option>
                <option value="44">44</option>
                <option value="45">45</option>
                <option value="46">46</option>
                <option value="47">47</option>
                <option value="48">48</option>
                <option value="49">49</option>
                <option value="50">50</option>
                <option value="51">51</option>
                <option value="52">52</option>
                <option value="53">53</option>
                <option value="54">54</option>
            </select><br />
            <label>Veličina stražnjeg zupčanika: </label>
            <select onChange={(e) => {onChangeBack(e)}} name="zadnji" id="zadnji">
            <option value=""></option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13">13</option>
                <option value="14">14</option>
                <option value="15">15</option>
                <option value="16">16</option>
                <option value="17">17</option>
                <option value="18">18</option>
                <option value="19">19</option>
                <option value="20">20</option>
                <option value="21">21</option>
                <option value="22">22</option>
                <option value="23">23</option>
                <option value="24">24</option>
                <option value="25">25</option>
                <option value="26">26</option>
                <option value="27">27</option>
                <option value="28">28</option>
                <option value="29">29</option>
                <option value="30">30</option>
                <option value="31">31</option>
                <option value="32">32</option>
                <option value="33">33</option>
            </select>
            <h2>Omjer prijenosa: {omjer}</h2>
            <p>{poruka}</p>
        </div>
    )


}

export default Gears;