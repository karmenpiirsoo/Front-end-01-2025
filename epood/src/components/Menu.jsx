import { Link } from 'react-router-dom'
function Menu() {
  return (
    <div className="menu">
      <Link to="/">
        <img className="pilt" src="https://images.delfi.ee/media-api-image-cropper/v1/da44adf0-b7c0-11eb-b15f-353c262b6e6f.jpg?noup&w=1200&h=711&ch=0.8635&cw=1&cx=0&cy=0&r=16:9" alt="pingviin"/>
      </Link>
     <span className="menu-buttons">
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
      <Link to="/kalkulaator">
        <button>Kalkulaator</button>
      </Link>
      <Link to="/arrays">
        <button>Array-d</button>
      </Link>
      <Link to="/halda">
        <button>Halda</button>
      </Link>
     </span>
    </div>
  )
}

export default Menu