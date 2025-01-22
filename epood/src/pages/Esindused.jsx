import { useState } from "react"

function Esindused() {
    const [linn, setLinn] = useState("Tallinn");
  return (
// && asemel kasutasa ? ja : , undefined tähendab JS tühjust
    <div>
        {/* <div>Hetkel aktiivne linn: {linn}</div> */}
        <button className={linn === "Tallinn" ? "valitud-linn": undefined} onClick={() => setLinn("Tallinn")}>Tallinn</button>
        <button className={linn === "Tartu" ? "valitud-linn": undefined} onClick={() => setLinn("Tartu")}>Tartu</button>
        <button className={linn === "Narva" ? "valitud-linn": undefined} onClick={() => setLinn("Narva")}>Narva</button>
        <button className={linn === "Pärnu" ? "valitud-linn": undefined} onClick={() => setLinn("Pärnu")}>Pärnu</button>
        <br />

        {linn === "Tallinn" &&
        <>
        <div>Ülemiste</div>
        <div>Rocca al Mare</div>
        <div>Magistrali</div>
        <div>Vesse</div>
        <div>Kristiine</div>
        <div>Järveotsa</div>
        </>}

        {linn === "Tartu" &&
        <>
        <div>Raatuse</div>
        <div>Lõunakeskus</div>
        </>}

        {linn === "Narva" && <div>Fama</div>}

        {linn === "Pärnu" && <div>Port Artur 2</div>}

        { linn !== "Tallinn" && <i>Tellimused väljaspool Tallinnat võtavad aega vähemalt 5 tööpäeva</i>}
     </div>
  )
}

export default Esindused