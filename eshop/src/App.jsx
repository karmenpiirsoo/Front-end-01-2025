
import './App.css'
import { Routes , Route} from "react-router-dom"
import Home from './pages/Home'
import Cart from './pages/Cart'
import GiftCard from './pages/GiftCards'
import Settings from './pages/Settings'
import NotFound from './pages/NotFound'
import Products from './pages/Products'
import Stores from './pages/arrays/Stores'
import Menu from './components/Menu'
import { useState } from 'react'
import Prices from './pages/arrays/Prices'
import Users from './pages/arrays/Users'
import Employees from './pages/arrays/Employees'
import Pictures from './pages/arrays/Pictures'
import ArraysProducts from './pages/Arrays/ArraysProducts'
import ArraysHome from './pages/arrays/ArraysHome'
import ManageStores from './pages/Manage/ManageStores'
import ManagePrices from './pages/Manage/ManagePrices'
import ManageUsers from './pages/Manage/ManageUsers'
import ManagePictures from './pages/Manage/ManagePictures'
import ManageProducts from './pages/Manage/ManageProducts'
import { useTranslation } from 'react-i18next';
import Map from './pages/Map'
import {ContactUs} from './pages/ContactUs'
import ManageHome from './pages/Manage/ManageHome'
import ManageEmpoyees from './pages/Manage/ManageEmpoyees'


function App() {

  const { i18n } = useTranslation();
  const[tume, setTume] = useState(localStorage.getItem("mode") || "false"); // true või false ei lähe localstoragesse, aga saab kasutada kui lisada jutumärgid

  function tumeMode() {
    setTume("true"); 
    localStorage.setItem("mode", "true")
  }

  function heleMode() {
    setTume("false"); 
    localStorage.setItem("mode", "false")
  }

  function muudaKeelEn() {
    i18n.changeLanguage("en")
    localStorage.setItem("keel", "en")
  }

  function muudaKeelEt() {
    i18n.changeLanguage("et")
    localStorage.setItem("keel", "et")
  }

  function muudaKeelEs() {
    i18n.changeLanguage("es")
    localStorage.setItem("keel", "es")
  }

  return (
    <div className={tume === "true" ? "dark" : "light"}>
    <Menu />
    <span className='theme-buttons'>
      <button onClick={tumeMode}>Tume</button>
      <button onClick={heleMode}>Hele</button>
      <img className= "lang" onClick={muudaKeelEn} src="/english.png" alt="" />
      <img className= "lang" onClick={muudaKeelEt} src="/estonian.png" alt="" />
      <img className= "lang" onClick={muudaKeelEs} src="/spanish.png" alt="" />
      </span>
      <br /> <br /> <br /> <br />
     

        <div className="tekst">Kõik meie pingviinid</div>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/giftcard' element={<GiftCard/>} />
          <Route path='/settings' element={<Settings/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/stores' element={<Stores/>} />

          <Route path="/arrays" element={<ArraysHome/>} />
          <Route path="/stores" element={<Stores/>} />
          <Route path='/prices' element={<Prices/>} />
          <Route path='/users' element={<Users/>} />
          <Route path='/employees' element={<Employees/>} />
          <Route path='/pictures' element={<Pictures/>} />
          <Route path='/arraysproducts' element={<ArraysProducts/>} />

          <Route path="/manage-home" element={<ManageHome/>} />
          <Route path="/manage-stores" element={<ManageStores/>} />
          <Route path='/manage-prices' element={<ManagePrices/>} />
          <Route path='/manage-users' element={<ManageUsers/>} />
          <Route path='/manage-employees' element={<ManageEmployees/>} />
          <Route path='/manage-pictures' element={<ManagePictures/>} />
          <Route path='/manage-products' element={<ManageProducts/>} />

          <Route path='/map' element={<Map/>} />
          <Route path='/ContactUs' element={<ContactUs/>} />

          <Route path='*' element={<NotFound/>} />
        </Routes>

    </div>
  )
}

export default App
