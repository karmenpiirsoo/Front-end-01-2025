import { useRef, useState } from "react"
import pricesJSON from "../../data/prices.json"

function ManagePrices() {

  const [hinnad, setHinnad] = useState(pricesJSON.slice())
  const hinnadRef = useRef()

  function reset() {
    setHinnad(pricesJSON.slice())
  }

  function kustuta(index) {
    pricesJSON.splice(index, 1);
    setHinnad(pricesJSON.slice())
  }

  function lisa() {
    pricesJSON.push({
      "number": Number(hinnadRef.current.value),
      "lisaja": "Karmen"
    });
    setHinnad(pricesJSON.slice());
  }


  return (
    <div>
      <div>Kokku: {hinnad.length} tk </div>
      <button onClick={reset}>Reset</button>

      <br />
      <br />

      <label>Lisa hind</label><br />
      <input ref={hinnadRef} type="text" /><br />
      <button onClick={lisa}>Lisa</button>
      <br />

       <table>
            <thead>
                <tr>
                    <th>Järjekorranumber</th>
                    <th>Index</th>
                    <th>Hind</th>
                    <th>Lisaja</th>
                    <th>Kustuta nupp</th>
                </tr>
            </thead>
            <tbody>
            {hinnad.map((hind, index) => 
            <tr key={hind.number}>
                <td>{index + 1}</td>
                <td>{index}</td>
                <td>{hind.number}</td>
                <td>{hind.lisaja}</td>
                <td><button onClick={() => kustuta(index)}>x</button></td>
            </tr>)}
            </tbody>
        </table>


    </div>
  )
}

export default ManagePrices

