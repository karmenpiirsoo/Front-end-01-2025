import { useState } from "react"
import esindusedJSON from "../../data/esindused.json"

function Esindused() {
  const [linn, setLinn] = useState("Tallinn");
  const [keskused, setKeskused] = useState(esindusedJSON.slice());
  
  const reset = () => {
    setKeskused(esindusedJSON.slice())
  }
  const sorteeriAZ = () => {
    const vastus = keskused.toSorted((a, b) => a.nimi.localeCompare(b.nimi, "et")) // kui on tähemärgid mingis keeles, siis märkida ära keel (kahetäheline kood)
    setKeskused(vastus)
  }

  const sorteeriZA = () => {
    const vastus = keskused.toSorted((a, b) => b.nimi.localeCompare(a.nimi, "et"))
    setKeskused(vastus)
  }

  const sorteeriKolmasTahtAZ = () => {
    const vastus = keskused.toSorted((a, b) => a.nimi[2].localeCompare(b.nimi[2], "et")) // kolmanda tähe arvestuseks märkida ära, et mitte lugeda kahte esimest tähe nurksulgudes
    setKeskused(vastus)
  }

  const filtreeriKellelNeljasTahtS = () => {
    const vastus = esindusedJSON.filter(keskus => keskus.nimi[3] === "s");
    setKeskused(vastus)
  }

  const filtreeriKellelTahemarkeVahemalt7 = () => {
    const vastus = esindusedJSON.filter(keskus => keskus.nimi.length >= 7)
    setKeskused(vastus)
  }

  const filtreeriKellelTahemarkeTapselt9 = () => {
    const vastus = esindusedJSON.filter(keskus => keskus.nimi.length === 9)
    setKeskused(vastus)
  }

  const filtreeriKellelSonaYhendIs = () => {
    const vastus = esindusedJSON.filter(keskus => keskus.nimi.includes("is"))
    setKeskused(vastus)
  }

  const filtreeriKesLoppebTahegaE = () => {
    const vastus = esindusedJSON.filter(keskus => keskus.nimi.endsWith("e"))
    setKeskused(vastus)
  }
  
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
        <button onClick={reset}>Reset</button>
        <button onClick={sorteeriAZ}> Sorteeri A - Z</button>
        <button onClick={sorteeriZA}>Sorteeri Z - A</button>
        <button onClick={sorteeriKolmasTahtAZ}>Sorteeri kolmanda tähe järgi A - Z</button>
        <br />
        <button onClick={filtreeriKellelNeljasTahtS}> Kellel on neljas tähe S</button>
        <button onClick={filtreeriKellelTahemarkeVahemalt7}>Tähemärke vähemalt 7</button>
        <button onClick={filtreeriKellelTahemarkeTapselt9}> Sisaldab täpselt 9 märki</button>
        <button onClick={filtreeriKellelSonaYhendIs}> Kes sisaldab ühendit is</button>
        <button onClick={filtreeriKesLoppebTahegaE}>Lõppeb tähega E</button>
        {keskused.map(keskus => 
          <div key={keskus.nimi}>
            {keskus.nimi} - {keskus.tel} - {keskus.aadress}
          </div>)}
        {/* <div>Ülemiste</div>
        <div>Rocca al Mare</div>
        <div>Magistrali</div>
        <div>Vesse</div>
        <div>Kristiine</div>
        <div>Järveotsa</div> */}
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