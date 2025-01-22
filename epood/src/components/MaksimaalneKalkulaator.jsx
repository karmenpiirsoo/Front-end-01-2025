import { useRef, useState } from "react";

function MaksimaalneKalkulaator() {
  const sissetulekRef = useRef();
  const [sissetulek, setSissetulek] = useState(900);

function arvuta() {
setSissetulek(sissetulekRef.current.value);

}

  return (
    <div>
      <div>Näidispakkumise netosissetulek on 900€</div>
      <label>Netosissetulek</label>
      <input ref={sissetulekRef}type="text" />
      <button onClick={arvuta}>Arvuta</button>
      {sissetulek >= 900 && <div>Maksimaalne pakutav limiit: {(sissetulek-300) * 93}€</div>}
      {sissetulek < 900 && <div>Maksimaalse limiidi arvutamiseks on netosissetulek liiga väike.</div>}
    </div>
  )
}

export default MaksimaalneKalkulaator