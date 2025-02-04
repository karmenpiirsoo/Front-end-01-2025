import { useState } from "react"


function Tootajad() {

const [tootajad, setTootajad] = useState(['Pepe', 'Lolo', 'Timmu', 'Lala', 'Frosty', 'Aurora', 'Lumepall'])

  const reset = () => {
    setTootajad(['Pepe', 'Lolo', 'Timmu', 'Lala', 'Frosty', 'Aurora', 'Lumepall'])
  }

  const sorteeriAZ = () => {
    const vastus = tootajad.toSorted((a, b) => a.localeCompare(b))
    setTootajad(vastus)
  }

  const sorteeriZA = () => {
    const vastus = tootajad.toSorted((a, b) => b.localeCompare(a))
    setTootajad(vastus)
  }

  const sorteeriTahedKasvavalt = () => {
    const vastus = tootajad.toSorted((a, b) => a.length - b.length)
    setTootajad(vastus)
  }

  const sorteeriTahedKahanevalt = () => {
    const vastus = tootajad.toSorted((a, b) => b.length - a.length)
    setTootajad(vastus)
  }

  const sorteeriTeineTahtAZ = () => {
    const vastus = tootajad.toSorted((a, b) => a[2].localeCompare(b[2]))
    setTootajad(vastus)
  }

  const sorteeriKolmasTahtAZ = () => {
    const vastus = tootajad.toSorted((a, b) => a[3].localeCompare(b[3]))
    setTootajad(vastus)
  }

  const filtreeriKolmetahte = () => {
    const vastus = tootajad.filter(tootaja => tootaja.lenght === 3)
    setTootajad(vastus)
  }

  const filtreeriRohkemKuiViisTahte = () => {
    const vastus = tootajad.filter(tootaja => tootaja.length > 5)
    setTootajad(vastus)
  }

  const filtreeriMisSisaldavadAi = () => {
    const vastus = tootajad.filter(tootaja => tootaja.includes("ai"))
    setTootajad(vastus)
  }

  const filtreeriNeljasTahtI = () => {
    const vastus = tootajad.filter(tootaja => tootaja[3] === ("i"))
    setTootajad(vastus)
  }

  const filtreeriEsitahtM = () => {
    const vastus = tootajad.filter(tootaja => tootaja.startsWith("M"))
    setTootajad(vastus)
  }

  const filtreeriPaarisArvTahti = () => {
    const vastus = tootajad.filter(tootaja => tootaja.length % 2 === 0)
    setTootajad(vastus)
  }
  

  return (
    <div>
      <button onClick={reset}>Reset</button>
      <br />
      <button onClick={sorteeriAZ}>Sorteeri kasvavalt</button>
      <button onClick={sorteeriZA}>Sorteeri kahanevalt</button>
      <button onClick={sorteeriTahedKasvavalt}>Sorteeri tähed kasvavalt</button>
      <button onClick={sorteeriTahedKahanevalt}> Sorteeri tähed kahanevalt</button>
      <button onClick={sorteeriTeineTahtAZ}>Sorteeri teine tähe kasvavalt</button>
      <button onClick={sorteeriKolmasTahtAZ}>Sorteeri kolmas täht kasvavalt</button>
      <br />
      <button onClick={filtreeriKolmetahte}>Filteeri kolme tähelised sõnad</button>
      <button onClick={filtreeriRohkemKuiViisTahte}>Filteeri sünad rohkem, kui 5 tähega</button>
      <button onClick={filtreeriMisSisaldavadAi}>Filteeri sõnad, mis sisaldavad AI</button>
      <button onClick={filtreeriNeljasTahtI}>Filteeri sõnad, kus neljas täht on I</button>
      <button onClick={filtreeriEsitahtM}>Filteeri sõnad, mis algavad tähega M</button>
      <button onClick={filtreeriPaarisArvTahti}>Filteeri sõnad, kus on paaris arv tähti</button>
      {tootajad.map(tootaja => <div key={tootaja}>{tootaja}</div>)}
    </div>
  )
}

export default Tootajad