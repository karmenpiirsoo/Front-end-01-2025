import { useState } from "react"

// kollane (kordub) - funktsioon, funktsionaalsus. alati sulud lõpus, v.a [muutuja, set]
// suure tähega roheline - imporditud väärtus
// tumesinine - määratlus  function, const(), div, img, button
// tavaline sinine - muutuja (ise loonud)
// helesssinine - omadus   onClick, className, src
// valge - märgid ja mida näitame HTMLis tavainimesele
// lilla - import, return, export jne käsklused/tegevused
// oranz - sõnaline väärtus, alati jutumärkide sees!
// heleroheline - numbriline väärtus
// tumesinine - boolean väärtus / undefined (tühjus väärtus)

// const - ei saa anda muutujale võrdusmärgiga enam väärtust peärast tema loomist
// const muutujale annan väärtuse set kaudu, esimene väärtus tuleb (funktsiooni) järel sulgudes
// let - lubab anda väärtust, kasutatakse Reactis
// var - ei kasutata Reactis, kasutatakse tavalises JavaScriptis

function Tavakalkulaator() {
  const [summa, setSumma] = useState(0);
  const [tehe, setTehe] = useState("korrutamine");
// kahe kaldkriipsuga kommentaare saab panna ainult returnśt üles poole. muidu toggle line comment.
// sulud - kollase sulu sees on lilla sulg, lilla sulu sees on sinine, sinise sees on kollane
  return (
    <div>
      {tehe === "korrutamine" && <div>{summa} * 2.619 = {(summa * 2.619).toFixed(3)}</div>}
      {tehe === "jagamine" && <div>{summa} / 2.619 = {(summa / 2.619).toFixed(3)}</div>}
      {tehe === "liitmine" && <div>{summa} + 2.619 = {(summa + 2.619).toFixed(3)}</div>}
      {tehe === "lahutamine" && <div>{summa} - 2.619 = {(summa - 2.619).toFixed(3)}</div>}
      {/* iga tingimus tuleb eraldi kirja panna */}
      <button onClick={() => setSumma(7)}>7</button>
      <button onClick={() => setSumma(8)}>8</button>
      <button onClick={() => setSumma(9)}>9</button>
      <button onClick={() => setTehe("korrutamine")}>X</button>
      <br />
      <button onClick={() => setSumma(4)}>4</button>
      <button onClick={() => setSumma(5)}>5</button>
      <button onClick={() => setSumma(6)}>6</button>
      <button onClick={() => setTehe("lahutamine")}>-</button>
      <br />
      <button onClick={() => setSumma(1)}>1</button>
      <button onClick={() => setSumma(2)}>2</button>
      <button onClick={() => setSumma(3)}>3</button>
      <button onClick={() => setTehe("liitmine")}>+</button>
      <br />
      <button onClick={() => setSumma(0)}>C</button>
      <button onClick={() => setSumma(0)}>0</button>
      <button onClick={() => setTehe("jagamine")}>/</button>
      <button className="blue">=</button>
      <br />
    </div>
  )
}

export default Tavakalkulaator

// default tähendab, et võetakse ühe lehe kaupa