import { useState } from "react"
import { Link } from "react-router-dom"
//import ostukorvFailist from "../data/ostukorv.json"
import DeleteIcon from '@mui/icons-material/DeleteForeverTwoTone';

function Cart() {
  const [products, setProducts] = useState(JSON.parse(localStorage.getItem("cart")) || [])

  const empty = () => {
    setProducts([]);
    localStorage.setItem("cart", JSON.stringify([]))
  }

  const remove= (index) => {
    products.splice(index, 1);
    setProducts(products.slice())
    localStorage.setItem("cart", JSON.stringify(products));
  }

  return (
    <div>
      {products.length > 0 && <button onClick={empty}>Empty your cart</button>}

{products.map((product, index) => 
<div key={product.name}>

  {product.name} - {product.price}€
  <button onClick={() => remove(index)}>
  <DeleteIcon/>
  </button>
  </div>)}
  <br />
  <br />
{products.length === 0 && <Link to="/products">Shopping cart is empty</Link>}
{products.length > 0 && <div> Products in your cart: {products.length} tk</div>}
<div> Your total is ... eur</div>
    </div>
  )
}

export default Cart