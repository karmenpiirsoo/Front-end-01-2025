import { useRef, useState } from "react"
import tootedFailist from "../../data/tooted.json"

function HaldaTooted() {
 
    const [tooted, setTooted] = useState(tootedFailist.slice()) // setPildid kasutada siis 
    const NimiRef = useRef();
    const HindRef = useRef();
    const PiltRef = useRef();
    const aktiivneRef = useRef()

    function  reset() {
      setTooted(tootedFailist.slice()) 
    }

    function kustuta(index) {
      tootedFailist.splice(index, 1);
    setTooted(tootedFailist.slice())
    }

    function lisa() {
      tootedFailist.push({
        "name": NimiRef.current.value,
        "price": HindRef.current.value,
        "image": PiltRef.current.value,
        "active": aktiivneRef.current.checked
      });
      setTooted(tootedFailist.slice()) // --> HTMLi uuendamiseks
    }


  return (
    <div>
      <button onClick={reset}>Reset</button>
      <div>Kokku: {tooted.length} tk </div>

      <br />
      <label>Toote nimi</label><br />
      <input ref={NimiRef}type="text" /><br />
      <label>Toote hind</label><br />
      <input ref={HindRef}type="text" /><br />
      <label>Toote pilt</label><br />
      <input ref={PiltRef}type="text" /><br />
      <label>Aktiivne</label><br />
      <input ref={aktiivneRef}type="checkbox" /><br />
      <button onClick={lisa}>Lisa</button>
      <br />
      <br />

       <table>
            <thead>
                <tr>
                    <th>Järjekorranumber</th>
                    <th>Index</th>
                    <th>Toote nimi</th>
                    <th>Toote pilt</th>
                    <th>Toote hind</th>
                    <th>Kustuta nupp</th>
                </tr>
            </thead>
            <tbody>
            {tooted.map((toode, index) => 
            <tr key={toode.name} className={toode.active === false  ? "inactive" : undefined}>
                <td>{index + 1}</td>
                <td>{index}</td>
                <td>{toode.name}</td>
                <td><img key={toode.image} className="ikoon" src={toode.image} alt="" /></td>
                <td>{toode.price}</td>
                <td><button onClick={() => kustuta(index)}>x</button></td>
            </tr>)}
            </tbody>
        </table>
    </div>
  )
}

export default HaldaTooted