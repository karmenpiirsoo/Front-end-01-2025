
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Avaleht from './pages/Avaleht'
import Ostukorv from './pages/Ostukorv'
import Kinkekaart from './pages/Kinkekaart'
import Seaded from './pages/Seaded'
import NotFound from './pages/NotFound'
import LisaToode from './pages/LisaToode'
import Esindused from './pages/arrays/Esindused'
import Menu from './components/Menu'
import Kalkulaator from './pages/Kalkulaator'
import { useState } from 'react'
import Hinnad from './pages/arrays/Hinnad'
import Kasutajad from './pages/arrays/Kasutajad'
import Tootajad from './pages/arrays/Tootajad'
import Pildid from './pages/arrays/Pildid'
import Tooted from './pages/arrays/Tooted'
import ArraysHome from './pages/arrays/ArraysHome'

function App() {
const[tume, setTume] = useState(false) 
// ? : --> kas_on_tõsi ? kui_on : kui_pole
// if (tume === true) {"dark"} else {"light"}
  return (
    <div className={tume === true ? "dark" : "light"}>
    <Menu />
    <span className='theme-buttons'>
      <button onClick={() => setTume(true)}>Tume</button>
      <button onClick={() => setTume(false)}>Hele</button>
      </span>
      <br /> <br /> <br /> <br />
     

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

          <Route path="/arrays" element={<ArraysHome/>} />
          <Route path="/esindused" element={<Esindused/>} />
          <Route path='/hinnad' element={<Hinnad/>} />
          <Route path='/kasutajad' element={<Kasutajad/>} />
          <Route path='/tootajad' element={<Tootajad/>} />
          <Route path='/pildid' element={<Pildid/>} />
          <Route path='/tooted' element={<Tooted/>} />

          <Route path='*' element={<NotFound/>} />
        </Routes>

    </div>
  )
}

export default App

// 1. uue projekti tekitamine HTML, CSS
// 2. routing, link, brauseri ikoon ja kiri
// 3. useState, components
// 4. kalkulaator, värvid, Firebase, dünaamiline CSS
// 5. dünaamiline CSS, function, useRef, kalkulaator
// 6. Toastify(hüpikaken). CSS - grid, flex, !important, emaili väljatõstmine, 
// summa ise sisestamine, index.css menüünuppude liigutamine
// 7. arrays - sorteerimine, filtreerimine