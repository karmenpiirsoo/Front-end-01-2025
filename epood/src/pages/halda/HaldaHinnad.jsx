import { useRef, useState } from "react"
import hinnadFailist from "../../data/hinnad.json"


function HaldaHinnad() {
  const [hinnad, setHinnad] = useState(hinnadFailist.slice())
  const hinnadRef = useRef()

  function reset() {
    setHinnad(hinnadFailist.slice())
  }

  function kustuta(index) {
    hinnadFailist.splice(index, 1);
    setHinnad(hinnadFailist.slice())
  }

  function lisa() {
    hinnadFailist.push(Number(hinnadRef.current.value));
    setHinnad(hinnadFailist.slice());
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
                    <th>Pilt</th>
                    <th>Kustuta nupp</th>
                </tr>
            </thead>
            <tbody>
            {hinnad.map((hind, index) => 
            <tr key={hind}>
                <td>{index + 1}</td>
                <td>{index}</td>
                <td>{hind}</td>
                <td><button onClick={() => kustuta(index)}>x</button></td>
            </tr>)}
            </tbody>
        </table>

    </div>
  )
}

export default HaldaHinnad