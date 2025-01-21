
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Avaleht from './pages/Avaleht'
import Ostukorv from './pages/Ostukorv'
import Kinkekaart from './pages/Kinkekaart'
import Seaded from './pages/Seaded'
import NotFound from './pages/NotFound'
import LisaToode from './pages/LisaToode'
import Esindused from './pages/Esindused'
import Menu from './components/Menu'
import Kalkulaator from './pages/Kalkulaator'

function App() {
  

  return (
    <>
    <Menu />
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
          <Route path='/esindused' element={<Esindused/>} />
          <Route path='/kalkulaator' element={<Kalkulaator/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>

    </>
  )
}

export default App

// 1. uue projekti tekitamine HTML, CSS
// 2. routing, link, brauseri ikoon ja kiri
// 3. useState, components
// 4. kalkulaator, värvid, Firebase, dünaamiline CSS