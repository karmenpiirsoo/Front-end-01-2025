
// arrayd on kohustuslikud:
// kui ma pean neid sorteerima/filtreerima/lehekülgede kaupa panema

import { useState } from "react"
import pildidFailist from "../../data/pildid.json"

// import { useState } from "react"

function Pildid() {
    // const [pildid, setPildid] = ["/edit.png", "/laigitud.svg", "/mittelaigitud.svg", "/next.png", "/vite.svg"]
    const [pildid, setPildid] = useState(pildidFailist.slice()) // setPildid kasutada siis 
    // kui tehad midagi muutuma panna nt filtreerida või sorteeida

    // kirjutada kas ükshaavad või tõmmata andmebaasist (serveris üleval) sisse

    const reset = () => {
      setPildid(pildidFailist.slice())
    }

    const sorteeriTahemargidKasvavalt = () => {
      const vastus = pildid.toSorted((a, b) => a.url.length - b.url.length)
      setPildid(vastus)
    }  

    const sorteeriTahemargidKahanevalt = () => {
      const vastus = pildid.toSorted((a, b) => b.pealkiri.length - a.pealkiri.length)
      setPildid(vastus)
    }

    const filtreeriLaigiPildid = () => {
      const vastus = pildidFailist.filter(pilt => pilt.url.includes("laigitud"));
      setPildid(vastus);
    }

    const filtreeriSvgPildid = () => {
      const vastus = pildidFailist.filter(pilt => pilt.url.includes(".svg"));
      setPildid(vastus);
    }

    const filtreeriPngPildid = () => {
      const vastus = pildidFailist.filter(pilt => pilt.url.includes(".png")); // 
      setPildid(vastus)
    }

    function arvutaKokku() {
      let summa = 0
      pildid.forEach(pilt => summa = summa + pilt.pealkiri.length);
      return summa;
    }

  return (
    <div>
      <button onClick={reset}>Reset</button>
      <div>Kokku: {pildid.length} tk </div>
      <button onClick={sorteeriTahemargidKasvavalt}> Sorteeri pealkirja tähemärgid kasvavalt</button>
      <button onClick={sorteeriTahemargidKahanevalt}>Sorteeri pealkirja tähemärgid kahanevalt</button>
      <br />
      <button onClick={filtreeriLaigiPildid}>Filtreeri laigitud pildid</button>
      <button onClick={filtreeriSvgPildid}>Filtreeri SVG pildid</button>
      <button onClick={filtreeriPngPildid}>Filtreeri PNG pildid</button>
      <br />
        {/* ilus on, kuid mitte kohustuslik: kui on pildid, siis map sees on ainsuses (pilt) või nt tooted ja toode 
        pilt esinene kodrd: edit.png, teine kord: laigitud.svg. Komad on need, mis eraldavad useStates need elemendid! 
        
        key={pilt} -- react soovib jätta tsüklit n'mällu, et ta ei peaks seda korduvalt tegema
            selleks kaustame key={} ja loogeliste sulgude vahele läheb, see mille alusel soovime mällu jätta*/}

            
        {pildid.map(pilt => 
          <div key={pilt.url}>
            <img className="ikoon" src={pilt.url} alt="" />
            <div>Pealkiri: {pilt.pealkiri}</div>
            <div>URL: {pilt.url}</div>
            <div>Kirjeldus: {pilt.kirjeldus}</div>
          </div>
        )}
        <div>Kokku: {arvutaKokku()} märki</div>
        {/* <img className="ikoon" src="/edit.png" alt="" />
        <img className="ikoon" src="laigitud.svg" alt="" />
        <img className="ikoon" src="/mittelaigitud.svg" alt="" />
        <img className="ikoon" src="/next.png" alt="" />
        <img className="ikoon" src="/vite.svg" alt="" /> */}
    </div>
  )
}

export default Pildid