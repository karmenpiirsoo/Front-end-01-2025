import { Link } from 'react-router-dom'
  

function Menu() {


  return (
    <div className="menu">
      <Link to="/">
        <img className="pilt" src="https://images.delfi.ee/media-api-image-cropper/v1/da44adf0-b7c0-11eb-b15f-353c262b6e6f.jpg?noup&w=1200&h=711&ch=0.8635&cw=1&cx=0&cy=0&r=16:9" alt="pingviin"/>
      </Link>
     <span className="menu-buttons">
      
     <Link to="/aboutus">
        <button>About us</button>
      </Link>
      <Link to="/products">
        <button>Products</button>
      </Link>
      <Link to="/cart">
        <button>Shopping cart</button>
      </Link>
      <Link to="/stores">
        <button>Our stores</button>
      </Link>
      <Link to="/settings">
        <button>Settings</button>
      </Link>
      <Link to="/contactus">
        <button>Contact us</button>
      </Link>
      <Link to="/manage">
        <button>Manage</button>
      </Link>
     </span>
    </div>
  )
}

export default Menu