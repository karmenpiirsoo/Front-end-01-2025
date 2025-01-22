import { useState } from 'react'

// muutuad
// sõna/string -> ""
// number -> ilma jutumärkideta: 0
// kahendväärtus/boolean -> jutumärkideta: true/false

// Eriomadused
// number ---> kokkuarvutused: liitmine,/lahutamine/korrutamine/jagamine
// sõnad ---> saan võtta erinevaid tähti (esimest, viimast, kas sisaldab). isikukoodid, postiindeks, telefoninr lähevad kõik sõnadeks, kuna neid arvutata vaid neist otsitakse
// kahendväärtus ---> kui on selgelt ksk väärtust, millest üks on tõene, teine väär. nt makstud, täisealine, registreerunud, soodushind jne.
// ei pea kasutama kahendväärtust (true/false) , vaid kasutada "yes"/"no"
// kahendväärtuse eriomadus -> teda saab taguspidi keerata hüüumärgi abil. nt et kasutada aint ühte nuppu jne.
function Avaleht() {
    const [count, setCount] = useState(0)
    const [laigitud, setLaigitud] = useState(false);
    const [sonum, setSonum] = useState("") 

function nulli() {          // vähem märke
  setCount(0);
  setSonum("Kogus nullitud")
  setLaigitud(true)
} 

function vahenda() {
  setCount(count - 1);
  setSonum("Kogus vähendatud");
}

function lisa() {
  setCount(count + 1);
  setSonum("Kogus lisatud");
}

// const nulli = () => {} // kõik, mis ma loon on const (esimesel real on rohkem märke, sisu loogeliste sulgude vahel sama nagu function)

  return (
    <div>
      <div>{sonum}</div>
      {count > 0 && <button onClick={nulli}>Nulli</button>}
      <br />
      <button disabled= {count === 0} onClick={vahenda}>-</button>
      <span>count is {count}</span>
      <button onClick={lisa}>+</button>
      <br />
      { laigitud === true && <img src="/laigitud.svg" alt="" />}
      { laigitud === false && <img src="/mittelaigitud.svg" alt="" />}
      <br />
  
      {/* button onClick={() => setLaigitud(true)}>Laik peale</button>
      <button onClick={() => setLaigitud(false)}>Laik maha</button> */}
      <button onClick={() => setLaigitud(!laigitud)}>Muuda like</button>
    </div>
  )
}

export default Avaleht