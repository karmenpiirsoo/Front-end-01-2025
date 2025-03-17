import { useRef, useState } from "react"
import productsJSON from "../../data/products.json"

function ManageProducts() {
  return (
    <div>ManageProducts</div>
  )
}

export default ManageProducts



function HaldaTooted() {
 
    const [products, setProducts] = useState(productsJSON.slice()) // setPildid kasutada siis 
    const nameRef = useRef();
    const priceRef = useRef();
    const pictureRef = useRef();
    const activeRef = useRef()

    function  reset() {
      setProducts(productsJSON.slice()) 
    }

    function remove(index) {
      productsJSON.splice(index, 1);
    setProducts(productsJSON.slice())
    }

    function add() {
      productsJSON.push({
        "name": nameRef.current.value,
        "price": priceRef.current.value,
        "image": pictureRef.current.value,
        "active": activeRef.current.checked
      });
      setProducts(productsJSON.slice()) // --> HTMLi uuendamiseks
    }


  return (
    <div>
      <button onClick={reset}>Reset</button>
      <div>Kokku: {products.length} tk </div>

      <br />
      <label>Product name</label><br />
      <input ref={nameRef}type="text" /><br />
      <label>Price</label><br />
      <input ref={priceRef}type="text" /><br />
      <label>Picture</label><br />
      <input ref={pictureRef}type="text" /><br />
      <label>Active</label><br />
      <input ref={activeRef}type="checkbox" /><br />
      <button onClick={add}>Add</button>
      <br />
      <br />

       <table>
            <thead>
                <tr>
                    <th>Number</th>
                    <th>Index</th>
                    <th>Product name</th>
                    <th>Picture</th>
                    <th>Price</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
            {products.map((product, index) => 
            <tr key={product.name} className={product.active === false  ? "inactive" : undefined}>
                <td>{index + 1}</td>
                <td>{index}</td>
                <td>{product.name}</td>
                <td><img key={product.image} className="ikoon" src={product.image} alt="" /></td>
                <td>{product.price}</td>
                <td><button onClick={() => remove(index)}>x</button></td>
            </tr>)}
            </tbody>
        </table>
    </div>
  )
}
