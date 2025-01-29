import { Link } from "react-router-dom"

// mozilla vaadata array kohta!!
function ArraysHome() {
  return (
    <div>
        <Link to="/esindused">
        <button>Esindused</button>
      </Link>
      <Link to="/hinnad">
        <button>Hinnad</button>
      </Link>
      <Link to="/kasutajad">
        <button>Kasutajad</button>
      </Link>
      <Link to="/pildid">
        <button>Pildid</button>
      </Link>
      <Link to="/tootajad">
        <button>Töötajad</button>
      </Link>
      <Link to="/tooted">
        <button>Tooted</button>
      </Link>

    </div>
  )
}

export default ArraysHome

