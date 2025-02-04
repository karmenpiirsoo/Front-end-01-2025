import { useState } from "react"

function Tooted() {

  const [tooted, setTooted] = useState(['Bmw', 'Nobe', 'Audi', 'Tesla', 'Mazda', 'Ferrari', 'Nissan', 'Bentley', 'Toyota', 'Fiat', 'Mercedes', 'Honda', 'Alfa-Romeo', 'Ford', 'Mitsubishi', 'Hyundai', 'Aston-Martin', 'Bugatti'])

  const reset = () => {
    setTooted(['Bmw', 'Nobe', 'Audi', 'Tesla', 'Mazda', 'Ferrari', 'Nissan', 'Bentley', 'Toyota', 'Fiat', 'Mercedes', 'Honda', 'Alfa-Romeo', 'Ford', 'Mitsubishi', 'Hyundai', 'Aston-Martin', 'Bugatti'])
  }

  const sorteeriAZ = () => {
    const vastus = tooted.toSorted((a, b) => a.localeCompare(b))
    setTooted(vastus)
  }

  const sorteeriZA = () => {
    const vastus = tooted.toSorted((a, b) => b.localeCompare(a))
    setTooted(vastus)
  }

  const sorteeriTahedKasvavalt = () => {
    const vastus = tooted.toSorted((a, b) => a.length - b.length)
    setTooted(vastus)
  }

  const sorteeriTahedKahanevalt = () => {
    const vastus = tooted.toSorted((a, b) => b.length - a.length)
    setTooted(vastus)
  }

  const sorteeriTeineTahtAZ = () => {
    const vastus = tooted.toSorted((a, b) => a[2].localeCompare(b[2]))
    setTooted(vastus)
  }

  const sorteeriKolmasTahtAZ = () => {
    const vastus = tooted.toSorted((a, b) => a[3].localeCompare(b[3]))
    setTooted(vastus)
  }

  const filtreeriEsitahtF = () => {
    const vastus = tooted.filter(toode => toode.startsWith("F", "et"))
    setTooted(vastus)
  }

  return (
    <div>
      <button onClick={reset}>Reset</button>
      <button onClick={sorteeriAZ}>Sorteeri kasvavalt</button>
      <button onClick={sorteeriZA}>Sorteeri kahanevalt</button>
      <button onClick={sorteeriTahedKasvavalt}>Sorteeri tähed kasvavalt</button>
      <button onClick={sorteeriTahedKahanevalt}> Sorteeri tähed kahanevalt</button>
      <button onClick={sorteeriTeineTahtAZ}>Sorteeri teine tähe kasvavalt</button>
      <button onClick={sorteeriKolmasTahtAZ}>Sorteeri kolmas täht kasvavalt</button>
      <button onClick={filtreeriEsitahtF}>Filteeri sõnad, mis algavad tähega F</button>
      {tooted.map(toode => <div key={toode}>{toode}</div>)}
    </div>
  )
}

export default Tooted