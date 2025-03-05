import { useState } from "react"
import { Link } from "react-router-dom"
import ostukorvFailist from "../data/ostukorv.json"

function Ostukorv() {
  const [tooted, setTooted] = useState(ostukorvFailist.slice())

  const tyhjenda = () => {
    setTooted([]);
  }

  const kustuta= (index) => {
    ostukorvFailist.splice(index, 1);
    setTooted(ostukorvFailist.slice())
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