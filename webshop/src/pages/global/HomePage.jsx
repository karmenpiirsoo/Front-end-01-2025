import React, { useState } from 'react'
import productsFromFile from "../../data/products.json"
import { Divider } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify'


function HomePage() {
  const [products, setProducts] = useState(productsFromFile);

  const sortAZ = () => {
    const response = products.toSorted((a, b) => a.name.localeCompare(b))
    setProducts(response)
  }

  const sortZA = () => {
    const response = products.toSorted((a, b) => b.name.localeCompare(a))
    setProducts(response)
  }

  const priceLowHigh = () => {
    const response = products.toSorted((a, b) => a.price.number - b.price.number)
    setProducts(response)
  }

  const priceHighLow = () => {
    const response = products.toSorted((a, b) => b.price.number - a.price.number)
    setProducts(response)
  }

   const addToCart = (selectedProduct) => {
      const cartLS = JSON.parse(localStorage.getItem("cart")) || []
      const product = cartLS.find(productInCart => productInCart.product.name === selectedProduct.name)
      if (product !== undefined) {
          product.amount = product.amount + 1;
      } else {
      cartLS.push({"product": selectedProduct, "amount": 1});
      }
      localStorage.setItem("cart", JSON.stringify(cartLS));
      toast.success("Edukalt ostukorvi lisatud!");
    }
  return (
    <div>

      <button onClick={sortAZ}>Sort A-Z</button>
      <button onClick={sortZA}>Sort Z-A</button>
      <button onClick={priceLowHigh}>Low to high</button>
      <button onClick={priceHighLow}>High to low</button>

      {products.map(product =>
      <div key={product.id}>
        <img style={{width: "100px"}}src={product.image} alt="" />
        <div>{product.title}</div>
        <div>{product.price}</div>
        <button onClick={() => addToCart(product)}> Add to cart</button>
      </div>
      )}

        <ToastContainer
          position="bottom-right"
          autoClose={4000}
          theme="dark"
          />
    </div>
  )
}

export default HomePage
