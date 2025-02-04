import { useState } from "react";


function HaldaEsindused() {
  const [keskused, setKeskused] = useState(["Ülemiste", "Rocca al Mare", "Magistrali", "Vesse", "Kristiine", "Järveotsa"]);
  
  function reset () {
    setKeskused(["Ülemiste", "Rocca al Mare", "Magistrali", "Vesse", "Kristiine", "Järveotsa"])
  } 

  function kustutaEsimene() {
    keskused.splice(0, 1);   // splice tahab endale kindlat asja, mida ta kustutab. ehk asjadele tuleb anda järjekorranumber, alustades =st
    setKeskused(keskused.slice()); // setKeskused on see, mis uuendab HTMLis ja selle sulgudes on muutuja mida ta muudab. kustutamisel kaustada eelmises real olevat funktsiooni
    } // splice alati pigem kasutada ühe kaupa

  function kustutaTeine() {
    keskused.splice(1, 1)
    setKeskused(keskused.slice());
  }

  function kustutaKolmas() {
    keskused.splice(2, 1)
    setKeskused(keskused.slice());
  }

  function kustutaNeljas() {
    keskused.splice(3, 1)
    setKeskused(keskused.slice());
  }

  function kustutaViies() {
    keskused.splice(4, 1)
    setKeskused(keskused.slice());
  }

  function kustuta(jrknr) { // järekorranumber
    keskused.splice(jrknr, 1)
    setKeskused(keskused.slice());
  }

    return (
    <div>
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
                    <th>Kustuta nupp</th>
                </tr>
            </thead>
            <tbody>
            {keskused.map((keskus, index) => 
            <tr key={keskus}>
                <td>{index + 1}</td>
                <td>{index}</td>
                <td>{keskus}</td>
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