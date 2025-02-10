import { useState } from "react"


function Seaded() {
  const [keel, setKeel] = useState(localStorage.getItem ("keel") || "est");

  function muudaKeelEst() {
    setKeel("est")
    localStorage.setItem("keel", "est")
  }

  function muudaKeelEng() {
    setKeel("eng")
    localStorage.setItem("keel", "eng")
  }

  function muudaKeelRus() {
    setKeel("rus")
    localStorage.setItem("keel", "rus")
  }

  function muudaKeelEsp() {
    setKeel("esp")
    localStorage.setItem("keel", "esp")
  }
  return (
    <div>
      <button className={keel === "est" ? "valitud-keel" : undefined} onClick ={muudaKeelEst}> Eesti</button>
      <button className={keel === "eng" ? "valitud-keel" : undefined} onClick ={muudaKeelEng}>English</button>
      <button className={keel === "rus" ? "valitud-keel" : undefined} onClick ={muudaKeelRus}>Pyccku</button>
      <button className={keel === "esp" ? "valitud-keel" : undefined} onClick ={muudaKeelEsp}>Espanol</button>
      <br />
      <div>Hetkel aktiivse keele lühend: {keel}</div>
      <br />
      { keel === "est" && <div>Leht on eesti keeles</div>}
      { keel === "eng" && <div>Page is in English</div> }
      { keel === "rus" &&<div>Cтраница на русском языке</div>}
      { keel === "esp" &&<div>La pagina esta en espanol</div>}
      <br />
      { keel !== "est" && <i>Leht on võõrkeeles. Hetkel tõlked puuduvad.</i>}
      </div>
  )
}

export default Seaded