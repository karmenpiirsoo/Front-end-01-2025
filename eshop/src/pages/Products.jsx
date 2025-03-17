import { useState } from "react"
import productsJSON from '../data/products.json'
// import ostukorvFailist from "../../data/ostukorv.json"
import Divider from '@mui/material/Divider';

function Products() {

  const [products, setProducts] = useState(productsJSON.slice())

  const reset = () => {
    setProducts(productsJSON.slice())
  }

  const sortAZ = () => {
    const response = products.toSorted((a, b) => a.name.localeCompare(b))
    setProducts(response)
  }

  const sortZA = () => {
    const response = products.toSorted((a, b) => b.name.localeCompare(a))
    setProducts(response)
  }

  const sortGrowing = () => {
    const response = products.toSorted((a, b) => a.name.length - b.name.length)
    setProducts(response)
  }

  const sortDecreasing = () => {
    const response = products.toSorted((a, b) => b.name.length - a.name.length)
    setProducts(response)
  }

  const addToCart = (product) => {
    // ostukorvFailist.push(product);
    const cartLS = JSON.parse(localStorage.getItem("cart")) || []
    cartLS.push(product);
    localStorage.setItem("cart", JSON.stringify(cartLS));
  }


  return (
    <div>
      <button onClick={reset}>Reset</button>
      <br />
      <button onClick={sortAZ}>Sort A-Z</button>
      <button onClick={sortZA}>Sort Z-A</button>
      <button onClick={sortGrowing}>Sort letters growing</button>
      <br />
      <button onClick={sortDecreasing}> Sort letters decreasing</button>

      <br /><br />

      {products.map(product => 
      <div key={product.name}>     
        <img className={product.active === true ? "toote-pilt" : "pilt-mitteaktiivne"} src={product.image} alt="" />   
        <div>{product.name} - {product.price}€ </div>
        <button disabled={product.active === false} onClick={() => addToCart(product)}>Add to cart</button>
        <Divider/>
        </div>)}
    </div>
  )
}

export default Products


