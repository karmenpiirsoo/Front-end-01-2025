import './App.css'
import NavigationBar from './components/NavigationBar'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/global/HomePage'
import ContactUs from './pages/global/ContactUs'
import Cart from './pages/global/Cart'
import NotFound from './pages/global/NotFound'
import Shops from './pages/global/Shops'
import SingleProduct from './pages/global/SingleProduct'
import AdminHome from './pages/admin/AdminHome'
import AddProduct from './pages/admin/AddProduct'
import EditProduct from './pages/admin/EditProduct'
import MaintainCategories from './pages/admin/MaintainCategories'
import MaintainProducts from './pages/admin/MaintainProducts'
import MaintainShops from './pages/admin/MaintainShops'
import Login from './pages/auth/Login'
import Signup from './pages/auth/Signup'

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
         <Route path='product/:index' element={ <SingleProduct /> } />

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
