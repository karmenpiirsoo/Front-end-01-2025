import { useState } from "react"

function Kinkekaart() {
const [summa, setSumma] = useState(20);
// useState sulgude sees (peale seda) käib alg väärtus, mis oleks ees ka peale refreshi.

  return (
    <div>
        <button className={summa === 20 && "valitud"} onClick={() => setSumma(20)}>20 €</button>
        <button className={summa === 50 && "valitud"} onClick={() => setSumma(50)}>50 €</button>
        <button className={summa === 100 && "valitud"} onClick={() => setSumma(100)}>100 €</button>
        <br />
        <div>Kinkekaart {summa}€</div>
    </div>
  )
}

export default Kinkekaart