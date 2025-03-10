import { useState } from "react"
import { Link } from "react-router-dom"
//import ostukorvFailist from "../data/ostukorv.json"

function Ostukorv() {
  const [tooted, setTooted] = useState(JSON.parse(localStorage.getItem("ostukorv")) || [])

  const tyhjenda = () => {
    setTooted([]);
    localStorage.setItem("ostukorv", JSON.stringify([]))
  }

  const kustuta= (index) => {
    tooted.splice(index, 1);
    setTooted(tooted.slice())
    localStorage.setItem("ostukorv", JSON.stringify(tooted));
  }

  return (
    <div>
      {tooted.length > 0 && <button onClick={tyhjenda}>Tühjenda</button>}

        {tooted.map((toode, index) => 
        <div key={toode.name}>

          {toode.name} - {toode.price}€
          <button onClick={() => kustuta(index)}>X</button>
          </div>)}
          <br />
          <br />
        {tooted.length === 0 && <Link to="/tooted">Ostukorv on tühi, mine toodete lehele ja lisa midagi ostukorvi</Link>}
        {tooted.length > 0 && <div>Tooteid on ostukorvis: {tooted.length} tk</div>}
        <div>Kogusumma on eur</div>
    </div>
  )
}

export default Ostukorv