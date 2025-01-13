
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Avaleht from './pages/Avaleht'
import Ostukorv from './pages/Ostukorv'
import Kinkekaart from './pages/Kinkekaart'
import Seaded from './pages/Seaded'
import NotFound from './pages/NotFound'
import LisaToode from './pages/LisaToode'

function App() {
  

  return (
    <>
    <Link to="/">
      <img className="pilt" src="https://images.delfi.ee/media-api-image-cropper/v1/da44adf0-b7c0-11eb-b15f-353c262b6e6f.jpg?noup&w=1200&h=711&ch=0.8635&cw=1&cx=0&cy=0&r=16:9" alt="pingviin"/>
    </Link>
    <Link to="/lisa-toode">
      <button>Lisa toode</button>
    </Link>
    <Link to="/osta-kinkekaart">
      <button>Osta kinkekaart</button>
    </Link>
    <Link to="/seaded">
      <button>Seaded</button>
    </Link>
    <Link to="/ostukorv">
      <button>Ostukorvi</button>
    </Link>
      <br />
     

        <div className="tekst">Kõik meie pingviinid</div>
{/* path --> mis järgneb localhost:5173-le
element --> mis HTML ta sellel lehel näitab

path="/ostukorv" localhost:5173/ostukorv näitab <div>Ostukorv</div>
domeen.ee        domeen,ee/ostukorv näitav >div>Ostukorv</div>
path tähendab, mis järgneb domeenmile

Kõikidele rohelistele suure tähega on vajalik import
*/}
        <Routes>
          <Route path="/" element={<Avaleht/>} />
          <Route path='/ostukorv' element={<Ostukorv/>} />
          <Route path='/osta-kinkekaart' element={<Kinkekaart/>} />
          <Route path='/seaded' element={<Seaded/>} />
          <Route path='/lisa-toode' element={<LisaToode/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>

    </>
  )
}

export default App
