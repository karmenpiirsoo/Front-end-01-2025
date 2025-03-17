import { Link } from 'react-router-dom'

function ManageHome() {

  return (
    <div>
             <Link to="/manage-products">
        <button>Manage products</button>
      </Link>
    </div>
  )
}

export default ManageHome