import { useState } from "react"
import { Link } from "react-router-dom"

function Ostukorv() {
  const [tooted, setTooted] = useState(["Coca", "Fanta", "Sprite"])

  return (
    <div>
        {tooted.map(toode => <div key={toode}>{toode}</div>)}
        <Link to="/">Mine avalehele, lisa midagi ostukorvi</Link>
        <div>Pingviinide ostunimekiri</div>
        <div>Kogusumma on .. eur</div>
    </div>
  )
}

export default Ostukorv