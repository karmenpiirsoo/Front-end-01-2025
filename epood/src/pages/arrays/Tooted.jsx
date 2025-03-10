import { useState } from "react"
import tootedFailist from "../../data/tooted.json"
// import ostukorvFailist from "../../data/ostukorv.json"

function Tooted() {

  const [tooted, setTooted] = useState(tootedFailist.slice())

  const reset = () => {
    setTooted(tootedFailist.slice())
  }

  const sorteeriAZ = () => {
    const vastus = tooted.toSorted((a, b) => a.name.localeCompare(b))
    setTooted(vastus)
  }

  const sorteeriZA = () => {
    const vastus = tooted.toSorted((a, b) => b.name.localeCompare(a))
    setTooted(vastus)
  }

  const sorteeriTahedKasvavalt = () => {
    const vastus = tooted.toSorted((a, b) => a.name.length - b.name.length)
    setTooted(vastus)
  }

  const sorteeriTahedKahanevalt = () => {
    const vastus = tooted.toSorted((a, b) => b.name.length - a.name.length)
    setTooted(vastus)
  }

  const sorteeriTeineTahtAZ = () => {
    const vastus = tooted.toSorted((a, b) => a.name[2].localeCompare(b[2]))
    setTooted(vastus)
  }

  const sorteeriKolmasTahtAZ = () => {
    const vastus = tooted.toSorted((a, b) => a.name[3].localeCompare(b[3]))
    setTooted(vastus)
  }

  const filtreeriEsitahtF = () => {
    const vastus = tooted.filter(toode => toode.name.startsWith("F", "et"))
    setTooted(vastus)
  }

  const lisaOstukorvi = (toode) => {
    // ostukorvFailist.push(toode);
    const ostukorvLS = JSON.parse(localStorage.getItem("ostukorv")) || []
    ostukorvLS.push(toode);
    localStorage.setItem("ostukorv", JSON.stringify(ostukorvLS));
  }

  // 1. võtame localStorage'st (localStorage.getItem))
  // 2. võtame jutumärgid maha (JSON.parse)
  // 3. lisame ühe toote juurde(.push)
  // 4. paneme jutumärgid tagasi(JSON.stringify)
  //5. paneme localStoragesse tagasi (localStorage.setItem)
  return (
    <div>
      <button onClick={reset}>Reset</button>
      <br />
      <button onClick={sorteeriAZ}>Sorteeri kasvavalt</button>
      <button onClick={sorteeriZA}>Sorteeri kahanevalt</button>
      <button onClick={sorteeriTahedKasvavalt}>Sorteeri tähed kasvavalt</button>
      <br />
      <button onClick={sorteeriTahedKahanevalt}> Sorteeri tähed kahanevalt</button>
      <button onClick={sorteeriTeineTahtAZ}>Sorteeri teine tähe kasvavalt</button>
      <button onClick={sorteeriKolmasTahtAZ}>Sorteeri kolmas täht kasvavalt</button>
      <button onClick={filtreeriEsitahtF}>Filteeri sõnad, mis algavad tähega F</button>
      {tooted.map(toode => 
      <div key={toode.name}>     
        <img className={toode.active === true ? "toote-pilt" : "pilt-mitteaktiivne"} src={toode.image} alt="" />   
        <div>{toode.name} - {toode.price}€ </div>
        <button disabled={toode.active === false} onClick={() => lisaOstukorvi(toode)}>Lisa ostukorvi</button>
        </div>)}
    </div>
  )
}

export default Tooted