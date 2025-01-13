import { Link } from "react-router-dom"

function Ostukorv() {
  return (
    <div>
        <Link to="/">Mine avalehele, lisa midagi ostukorvi</Link>
        <div>Pingviinide ostunimekiri</div>
        <div>Kogusumma on .. eur</div>
    </div>
  )
}

export default Ostukorv