import React from 'react'
import {useParams} from 'react-router-dom'
import productsFromFile from '../../data/products.json'


function EditProduct() {

  const {index} = useParams() // URL muutuja kätte saamiseks
  // localhost/product/6
  // App.jsx: path='product/:index'
  const found = productsFromFile.find(product => product.id === Number(index))


  return (
    <div>
      <div>{found.title}</div>
    </div>
  )
}

export default EditProduct