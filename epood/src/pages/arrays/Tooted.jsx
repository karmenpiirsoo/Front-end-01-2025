import { useState } from "react"
import tootedFailist from "../../data/tooted.json"
// import ostukorvFailist from "../../data/ostukorv.json"
import Divider from '@mui/material/Divider';
import AutoComplete from "../../components/AutoComplete";
import CarouselGallery from "../../components/CarouselGallery";
// import ImageAccordion from "../../components/ImageAccordion";
import { ToastContainer, toast } from 'react-toastify'

function Tooted() {

  const [tooted, setTooted] = useState(tootedFailist.slice())

  const reset = () => {
    setTooted(tootedFailist.slice())
  }

  const sorteeriAZ = () => {
    const vastus = tooted.toSorted((a, b) => a.name.localeCompare(b))
    setTooted(vastus)
  }

  const sorteeriZA = () => {
    const vastus = tooted.toSorted((a, b) => b.name.localeCompare(a))
    setTooted(vastus)
  }

  const sorteeriTahedKasvavalt = () => {
    const vastus = tooted.toSorted((a, b) => a.name.length - b.name.length)
    setTooted(vastus)
  }

  const sorteeriTahedKahanevalt = () => {
    const vastus = tooted.toSorted((a, b) => b.name.length - a.name.length)
    setTooted(vastus)
  }

  const sorteeriTeineTahtAZ = () => {
    const vastus = tooted.toSorted((a, b) => a.name[2].localeCompare(b[2]))
    setTooted(vastus)
  }

  const sorteeriKolmasTahtAZ = () => {
    const vastus = tooted.toSorted((a, b) => a.name[3].localeCompare(b[3]))
    setTooted(vastus)
  }

  const filtreeriEsitahtF = () => {
    const vastus = tooted.filter(toode => toode.name.startsWith("F", "et"))
    setTooted(vastus)
  }

  const lisaOstukorvi = (klikitudToode) => {
    // ostukorvFailist.push(toode);
    const ostukorvLS = JSON.parse(localStorage.getItem("ostukorv")) || []
    const product = ostukorvLS.find(ostukorviToode => ostukorviToode.toode.name === klikitudToode.name)
    if (product !== undefined) {
        // suurendame kogust
        product.kogus = product.kogus + 1;
    } else {
      // lisame ühe juurde kogusega 1
    ostukorvLS.push({"toode": klikitudToode, "kogus": 1});
    }
    localStorage.setItem("ostukorv", JSON.stringify(ostukorvLS));
    toast.success("Edukalt ostukorvi lisatud!");
  }

  const filterByCountry = (event) => {
    console.log("FILTREERIN")
    const vastus = tootedFailist.filter(toode => toode.country === event.target.innerText)
    setTooted(vastus)
  }

  // 1. võtame localStorage'st (localStorage.getItem))
  // 2. võtame jutumärgid maha (JSON.parse)
  // 3. lisame ühe toote juurde(.push)
  // 4. paneme jutumärgid tagasi(JSON.stringify)
  //5. paneme localStoragesse tagasi (localStorage.setItem)



  return (
    <div>
      {/* <ImageAccordion /> */}
      <CarouselGallery />
      <button onClick={reset}>Reset</button>
      <br />
      <button onClick={sorteeriAZ}>Sorteeri kasvavalt</button>
      <button onClick={sorteeriZA}>Sorteeri kahanevalt</button>
      <button onClick={sorteeriTahedKasvavalt}>Sorteeri tähed kasvavalt</button>
      <br />
      <button onClick={sorteeriTahedKahanevalt}> Sorteeri tähed kahanevalt</button>
      <button onClick={sorteeriTeineTahtAZ}>Sorteeri teine tähe kasvavalt</button>
      <button onClick={sorteeriKolmasTahtAZ}>Sorteeri kolmas täht kasvavalt</button>
      <button onClick={filtreeriEsitahtF}>Filteeri sõnad, mis algavad tähega F</button>
      
      <br /><br /><br />

      <AutoComplete filterByCountry={filterByCountry} />

      {tooted.map(toode => 
      <div key={toode.name}>     
        <img className={toode.active === true ? "toote-pilt" : "pilt-mitteaktiivne"} src={toode.image} alt="" />   
        <div>{toode.name} - {toode.price}€ </div>
        <button disabled={toode.active === false} onClick={() => lisaOstukorvi(toode)}>Lisa ostukorvi</button>
        <Divider/>
        </div>)}

        <ToastContainer
          position="bottom-right"
          autoClose={4000}
          theme="dark"
          />
    </div>
  )
}

export default Tooted