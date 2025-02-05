import { useRef, useState } from "react";
import esindusedJSON from "../../data/esindused.json"

function HaldaEsindused() {
  const [keskused, setKeskused] = useState(esindusedJSON.slice());
  const nimiRef = useRef()
  const telRef = useRef()
  const aadressRef = useRef()  
  function reset () {
    setKeskused(esindusedJSON.slice())
  } 

  function kustutaEsimene() {
    esindusedJSON.splice(0, 1);   // splice tahab endale kindlat asja, mida ta kustutab. ehk asjadele tuleb anda järjekorranumber, alustades =st
    setKeskused(esindusedJSON.slice()); // setKeskused on see, mis uuendab HTMLis ja selle sulgudes on muutuja mida ta muudab. kustutamisel kaustada eelmises real olevat funktsiooni
    } // splice alati pigem kasutada ühe kaupa

  function kustutaTeine() {
    esindusedJSON.splice(1, 1)
    setKeskused(esindusedJSON.slice());
  }

  function kustutaKolmas() {
    esindusedJSON.splice(2, 1)
    setKeskused(esindusedJSON.slice());
  }

  function kustutaNeljas() {
    esindusedJSON.splice(3, 1)
    setKeskused(esindusedJSON.slice());
  }

  function kustutaViies() {
    esindusedJSON.splice(4, 1)
    setKeskused(esindusedJSON.slice());
  }

  function kustuta(jrknr) { // järekorranumber
    esindusedJSON.splice(jrknr, 1)
    setKeskused(esindusedJSON.slice());
  }

  const lisa = () => {
    esindusedJSON.push({
      "nimi": nimiRef.current.value,
      "tel": telRef.current.value,
      "aadress": aadressRef.current.value
    });
    setKeskused(esindusedJSON.slice())
  }

    return (
    <div>
      <br />
      <label>Keskuse nimi</label><br />
      <input ref={nimiRef}type="text" /><br />
      <label>Keskuse telefon</label><br />
      <input ref={telRef}type="text" /><br />
      <label>Keskuse aadress</label><br />
      <input ref={aadressRef}type="text" /><br />
      <button onClick={lisa}>Lisa</button>
      <br />

        <button onClick={reset}>Reset</button>
        <br />
        <button onClick={kustutaEsimene}>Kustuta esimine</button>
        <button onClick={kustutaTeine}>Kustuta teine</button>
        <button onClick={kustutaKolmas}>Kustuta kolmas</button>
        <button onClick={kustutaNeljas}>Kustuta neljas</button>
        <button onClick={kustutaViies}>Kustuta viies</button>
        <br /><br />

        <table>
            <thead>
                <tr>
                    <th>Järjekorranumber</th>
                    <th>Index</th>
                    <th>Keskus</th>
                    <th>Telefon</th>
                    <th>Aadress</th>
                    <th>Kustuta nupp</th>
                </tr>
            </thead>
            <tbody>
            {keskused.map((keskus, index) => 
            <tr key={keskus.nimi}>
                <td>{index + 1}</td>
                <td>{index}</td>
                <td>{keskus.nimi}</td>
                <td>{keskus.tel}</td>
                <td>{keskus.aadress}</td>
                <td><button onClick={() => kustuta(index)}>x</button></td>
            </tr>)}
            </tbody>
        </table>

        
    </div>
  )
}

export default HaldaEsindused

// onClick={() => kuystuta()} on sama, mis
// onClick={kustuta}

// esimest kasutame, kui täidame sulge:
// onClick={() => kustuta(2)}

// kui onClick= {kustuta()} ------> neb fuktiooni kohe käima ning seda EI ksuta! paneb kaima ima klikki ootamata

// 