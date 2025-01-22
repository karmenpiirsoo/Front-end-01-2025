import { useRef, useState } from "react"

function Kinkekaart() {
const [summa, setSumma] = useState(20);
const [kogus, setKogus] = useState(1)
const emailRef = useRef();
const [sonum, setSonum] = useState();

function lisa() {   // olla onClickiga väljakutsutav
  if (emailRef.current.value === "") {
    setSonum("E-mail peab olema sisestatud");
    return;
  }
  
  if (emailRef.current.value.includes("@") === false) {
    setSonum("E-mail peab sisaldama @ märki");
    return; // lõpetab funktsiooni, siit enam edasi ei minda
  }
  
  if (emailRef.current.value.length <5) {
    setSonum("E-mail liiga lühike");
    return;
  }
  setSonum("E-mail sisestatud");
}
// if (emailRef.current.value.includes("@") === false) {        ALUMINE OVERRIDIB ALATI ÜLEMISE
//   setSonum("E-mail peab sisaldama @ märki")
// } else {
//   setSonum("E-mail sisestatud")
// }

// useState sulgude sees (peale seda) käib algväärtus, mis oleks ees ka peale refreshi.

  return (
    <div>
        <button className={summa === 20 ? "valitud" : undefined} onClick={() => setSumma(20)}>20 €</button>
        <button className={summa === 50 ? "valitud" : undefined} onClick={() => setSumma(50)}>50 €</button>
        <button className={summa === 100 ? "valitud" : undefined} onClick={() => setSumma(100)}>100 €</button>
        <br />
        <div>Kinkekaart {summa}€</div>
        <br /><br /><br />
        {/* br võib panna kas kõrvuti või üksteise alla, tähendab ikka 1 br = 1 rida */}
        <button disabled={kogus === 1} onClick={() => setKogus(kogus - 1)}>-</button>
        <span>{kogus}</span>
        {/* selleks, et oleks dünaamiline, peab olema muutuja loogeliste sulgude vahel */}
        <button onClick={() => setKogus(kogus + 1)}>+</button>
        <br /><br />
        <div>Kokku: {summa * kogus}</div>
        <br /><br />
        <div>{sonum}</div>
        <label> Email</label> <br />
        <input ref={emailRef} type="text"/> <br />
        <button onClick={lisa}>Sisesta email</button> <br />
    </div>
  )
}

export default Kinkekaart