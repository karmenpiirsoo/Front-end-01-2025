import { useState } from "react"
import hinnadFailist from "../../data/hinnad.json"


function Hinnad() {
  const [hinnad, setHinnad] = useState(hinnadFailist.slice())

  const reset = () => {
    setHinnad(hinnadFailist.slice())
  }

  const sorteeriKasvavalt = () => {
    const vastus = hinnad.toSorted((a, b) => a.number - b.number);
    setHinnad(vastus);
  }

  const sorteeriKahanevalt = () => {
    const vastus = hinnad.toSorted((a, b) => b.number - a.number);
    setHinnad(vastus)
  }

  const filtreeriSuuremadKui400 = () => {
    const vastus = hinnadFailist.filter(hind => hind.number > 400);
    setHinnad(vastus);
  }

  const filtreeriVaiksemadKui500= () => {
    const vastus = hinnadFailist.filter(hind => hind.number < 500);
    setHinnad(vastus);
  }

  function arvutaKokku() {
    let summa = 0        // let lubab muutujal olla muutuv, const on kindel
    // summa = summa + 73 jne
    hinnad.forEach(hind => summa = summa + hind.number);
    return summa;
  }

  return (
    <div>
      <div>Kokku: {hinnad.length} tk </div>
      <button onClick={reset}>Reset</button>
      <button onClick={sorteeriKasvavalt}>Sorteeri kasvavalt</button>
      <button onClick={sorteeriKahanevalt}>Sorteeri kahanevalt</button>
      <button onClick={filtreeriSuuremadKui400}> Jäta alles suuremad kui 400</button>
      <button onClick={filtreeriVaiksemadKui500}> Jäta alles väiksemad kui 500</button>
      {hinnad.map(hind => 
        <div key={hind.number}>
          {hind.number}
        </div>)}
      <div>Kokku: {arvutaKokku()} €</div>  
      {/* sulud tulevad selleks, et funktsioon tootaks ilma klikita! */}

    </div>
  )
}

export default Hinnad