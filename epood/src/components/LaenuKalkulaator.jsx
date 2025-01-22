import { useRef, useState } from "react"

function Laenukalkulaator() {
  const ostuhindRef = useRef();
  const [ostuhind, setOstuhind] = useState(75000)

  function arvuta() {
    setOstuhind(ostuhindRef.current.value);
  }

  return (
    <div>
      <div>Näidis kuumakse laenusumma on 75 000€</div>
      <label>Kinnisvara ostuhind</label>
      <input ref={ostuhindRef}type="text" />
      <br />
      <button onClick={arvuta}>Arvuta</button>
      { ostuhind >= 20000 && ostuhind <= 1000000 && <div>Kuumakse: {(ostuhind / 30 / 12).toFixed(2)}€</div>}
      {(ostuhind < 20000 || ostuhind > 1000000) && <div className="punane-veateade"> Laenusumma võib olla vahemikus 20 000 - 1 000 000 €</div>}
    </div>
  )
}

export default Laenukalkulaator