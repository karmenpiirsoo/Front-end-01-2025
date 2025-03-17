
import './App.css'
import { Routes , Route} from "react-router-dom"
import Home from './pages/Home'
import Cart from './pages/Cart'
import Settings from './pages/Settings'
import NotFound from './pages/NotFound'
import Products from './pages/Products'
import AboutUs from './pages/AboutUs'
import Stores from './pages/Stores'
import Menu from './components/Menu'
import ManageHome from './pages/Manage/ManageHome'
import ManageProducts from './pages/Manage/ManageProducts'
import {ContactUs} from './pages/ContactUs'


function App() {


  

  return (
    <div>
    <Menu />
    <span className='theme-buttons'>
      
      </span>
      <br /> <br /> <br /> <br />
     

        <div className="tekst">Welcome to our store!</div>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='/settings' element={<Settings/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/aboutus' element={<AboutUs/>} />
          <Route path='/stores' element={<Stores/>} />

          <Route path='/contactus' element={<ContactUs/>}/>

          <Route path='/manage' element={<ManageHome/>} />
          <Route path='/manage-products' element={<ManageProducts/>} />

          <Route path='*' element={<NotFound/>} />
        </Routes>

    </div>
  )
}

export default App
