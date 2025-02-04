import { useRef, useState } from "react"
import pildidFailist from "../../data/pildid.json"

function HaldaPildid() {
 
    const [pildid, setPildid] = useState(pildidFailist.slice()) // setPildid kasutada siis 
    const piltRef = useRef();

    function  reset() {
      setPildid(pildidFailist.slice()) 
    }

    function kustuta(index) {
      pildidFailist.splice(index, 1);
    setPildid(pildidFailist.slice())
    }

    function lisa() {
      pildidFailist. push(piltRef.current.value);
      setPildid(pildidFailist.slice()) // --> HTMLi uuendamiseks
    }


  return (
    <div>
      <button onClick={reset}>Reset</button>
      <div>Kokku: {pildid.length} tk </div>

      <br />

      <br />
      <label>Pildi URL</label><br />
      <input ref={piltRef}type="text" /><br />
      <button onClick={lisa}>Lisa</button>
      <br />

       <table>
            <thead>
                <tr>
                    <th>Järjekorranumber</th>
                    <th>Index</th>
                    <th>Pilt</th>
                    <th>Pilt</th>
                    <th>Kustuta nupp</th>
                </tr>
            </thead>
            <tbody>
            {pildid.map((pilt, index) => 
            <tr key={pilt}>
                <td>{index + 1}</td>
                <td>{index}</td>
                <td>{pilt}</td>
                <td><img key={pilt} className="ikoon" src={pilt} alt="" /></td>
                <td><button onClick={() => kustuta(index)}>x</button></td>
            </tr>)}
            </tbody>
        </table>
    </div>
  )
}

export default HaldaPildid