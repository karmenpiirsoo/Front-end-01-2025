import { useState } from "react"
import { Link } from "react-router-dom"
//import ostukorvFailist from "../data/ostukorv.json"
import DeleteIcon from '@mui/icons-material/DeleteForeverTwoTone';
import "../css/Cart.css";

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

  function arvutaKokku() {
    let summa = 0        // let lubab muutujal olla muutuv, const on kindel
    // summa = summa + 73 jne
    tooted.forEach(t => summa = summa + t.toode.price * t.kogus);
    return summa;
  }

  function arvutaKogusedKokku() {
      let kogus = 0;
      tooted.forEach(t => kogus = kogus + t.kogus)
      return kogus;
  }

  function vahenda(index) {
    tooted[index].kogus--;
    if (tooted[index].kogus === 0) {
      kustuta(index);
    }
    setTooted(tooted.slice());
    localStorage.setItem("ostukorv", JSON.stringify(tooted))
  }

  function lisa(index) {
    tooted[index].kogus++;
    setTooted(tooted.slice());
    localStorage.setItem("ostukorv", JSON.stringify(tooted))
  }

  return (
    <div>
      {tooted.length > 0 && <button onClick={tyhjenda}>Tühjenda</button>}

        {tooted.map((t, index) => 
        <div className="toode" key={t.toode.name}>
         <div className="nimi">  {t.toode.name}</div>
          <div className="hind">{t.toode.price}€</div>
         <div className="kogus">
          <button className="button"onClick={() => vahenda(index)}>-</button>
          <div >{t.kogus}</div>
          <button className="button" onClick={() => lisa(index)}>+</button>
          </div>
          <div className="kokku">{t.toode.price * t.kogus} €</div>
          <button className="button" onClick={() => kustuta(index)}>
          <DeleteIcon/>
          </button>
          </div>)}
          <br />
          <br />
        {tooted.length === 0 && <Link to="/">Ostukorv on tühi, mine toodete lehele ja lisa midagi ostukorvi</Link>}

        {/* {tooted.length > 0 && <div>Erinevaid tooteid on ostukorvis: {tooted.length} tk</div>} */}
        <div>Tooteid on korvis {arvutaKogusedKokku()} tk</div>
        <div>Kogusumma on {arvutaKokku()} €</div>
    </div>
  )
}

export default Ostukorv