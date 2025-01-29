import { useState } from "react"


function Hinnad() {
  const [hinnad, setHinnad] = useState([73, 751, 448, 8, 455, 227, 449, 737, 96, 9])

  const reset = () => {
    setHinnad([73, 751, 448, 8, 455, 227, 449, 737, 96, 9])
  }

  const sorteeriKasvavalt = () => {
    const vastus = hinnad.toSorted((a, b) => a - b);
    setHinnad(vastus);
  }

  const sorteeriKahanevalt = () => {
    const vastus = hinnad.toSorted((a, b) => b - a);
    setHinnad(vastus)
  }

  const filtreeriSuuremadKui400 = () => {
    const vastus = [73, 751, 448, 8, 455, 227, 449, 737, 96, 9].filter(hind => hind > 400);
    setHinnad(vastus);
  }

  const filtreeriVaiksemadKui500= () => {
    const vastus = [73, 751, 448, 8, 455, 227, 449, 737, 96, 9].filter(hind => hind < 500);
    setHinnad(vastus);
  }

  return (
    <div>
      <button onClick={reset}>Reset</button>
      <button onClick={sorteeriKasvavalt}>Sorteeri kasvavalt</button>
      <button onClick={sorteeriKahanevalt}>Sorteeri kahanevalt</button>
      <button onClick={filtreeriSuuremadKui400}> Jäta alles suuremad kui 400</button>
      <button onClick={filtreeriVaiksemadKui500}> Jäta alles väiksemad kui 500</button>
      {hinnad.map(hind => <div key={hind}>{hind}</div>)}

    </div>
  )
}

export default Hinnad