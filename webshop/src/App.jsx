import './App.css'
import NavigationBar from '../../epood/src/components/NavigationBar'
import { Route, Routes } from 'react-router-dom'
import HomePage from './global/HomePage'
import ContactUs from './global/ContactUs'
import Cart from './global/Cart'
import NotFound from './global/NotFound'
import Shops from './global/Shops'
import SingleProducts from './global/SingleProducts'
import AdminHome from './admin/AdminHome'
import AddProduct from './admin/AddProduct'
import EditProduct from './admin/EditProduct'
import MaintainCategories from './admin/MaintainCategories'
import MaintainProducts from './admin/MaintainProducts'
import MaintainShops from './admin/MaintainShops'
import Login from './auth/Login'
import Signup from './auth/Signup'

function App() {

  return (
    <>
      <div className='App'>
        <NavigationBar />

        <Routes>
         <Route path='' element={ <HomePage /> } />
         <Route path='contact' element={ <ContactUs /> } />
         <Route path='shops' element={ <Shops /> } />
         <Route path='cart' element={ <Cart /> } />
         <Route path='product/:index' element={ <SingleProducts /> } />

         <Route path='admin' element={ <AdminHome /> } />
         <Route path='admin/add-product' element={ <AddProduct /> } />
         <Route path='admin/edit-product/:index' element={ <EditProduct /> } />
         <Route path='admin/maintain-products' element={ <MaintainProducts /> } />
         <Route path='admin/maintain-categories' element={ <MaintainCategories /> } />
         <Route path='admin/maintain-shops' element={ <MaintainShops /> } />

         <Route path='login' element={ <Login /> } />
         <Route path='signup' element={ <Signup /> } />

         <Route path='*' element={ <NotFound /> } />
        </Routes>

      </div>
    </>
  )
}

export default App
