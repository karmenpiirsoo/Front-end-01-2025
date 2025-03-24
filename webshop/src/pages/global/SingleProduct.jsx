import React from 'react'
import { useParams } from 'react-router-dom'
import productsFromFile from "../../data/products.json"

function SingleProduct() {

  const {index} = useParams() // URL muutuja kätte saamiseks
  // localhost/product/6
  // App.jsx: path='product/:index'
  const found = productsFromFile.find(product => product.id === Number(index))


  return (
    <div>
      <br />
      <div>{found.title}</div>
     <br />
      <div><img className='image' src={found.image} alt="" /></div>
      <br />
      <div>{found.price}</div>
     <br />
      <div>{found.description}</div><br /><br /><br />
      <div>{found.category}</div>
    </div>
  )
}

export default SingleProduct