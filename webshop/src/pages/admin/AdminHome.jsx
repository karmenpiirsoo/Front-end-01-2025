import { Link } from 'react-router-dom'


// kui impordid ainult tüki mingist moodulist, nt useState, Link, Route react'ist või react-router-dom'st, siis lähevad loogelised sulud!!
function AdminHome() {
  return (
    <div>
      <Link to="/admin/maintain-categories">
      <button>Maintain categories</button>
      </Link>
    </div>
  )
}

export default AdminHome
