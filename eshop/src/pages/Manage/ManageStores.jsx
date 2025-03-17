import { useRef, useState } from "react";
import storesJSON from "../../data/stores.json"

function ManageStores() {

  const [shops, setStores] = useState(storesJSON.slice());
  const nameRef = useRef()
  const phoneRef = useRef()
  const addressRef = useRef()  
  function reset () {
    setStores(storesJSON.slice())
  } 

  function deleteFirst() {
    storesJSON.splice(0, 1);   // splice tahab endale kindlat asja, mida ta kustutab. ehk asjadele tuleb anda järjekorranumber, alustades =st
    setStores(storesJSON.slice()); // setstores on see, mis uuendab HTMLis ja selle sulgudes on muutuja mida ta muudab. kustutamisel kaustada eelmises real olevat funktsiooni
    } // splice alati pigem kasutada ühe kaupa

  function deleteSecond() {
    storesJSON.splice(1, 1)
    setStores(storesJSON.slice());
  }

  function deleteThird() {
    storesJSON.splice(2, 1)
    setStores(storesJSON.slice());
  }

  function deleteFourth() {
    storesJSON.splice(3, 1)
    setStores(storesJSON.slice());
  }

  function deleteFifth() {
    storesJSON.splice(4, 1)
    setStores(storesJSON.slice());
  }

  function remove(jrknr) { // järekorranumber
    storesJSON.splice(jrknr, 1)
    setStores(storesJSON.slice());
  }

  const add = () => {
    storesJSON.push({
      "name": nameRef.current.value,
      "phone": phoneRef.current.value,
      "address": addressRef.current.value
    });
    setStores(storesJSON.slice())
  }

  return (
    <div>
       <br />
      <label>Store name</label><br />
      <input ref={nameRef}type="text" /><br />
      <label>Phone number</label><br />
      <input ref={phoneRef}type="text" /><br />
      <label>Store address</label><br />
      <input ref={addressRef}type="text" /><br />
      <button onClick={add}>Add</button>
      <br />

        <button onClick={reset}>Reset</button>
        <br />
        <button onClick={deleteFirst}>Kustuta esimine</button>
        <button onClick={deleteSecond}>Kustuta teine</button>
        <button onClick={deleteThird}>Kustuta kolmas</button>
        <button onClick={deleteFourth}>Kustuta neljas</button>
        <button onClick={deleteFifth}>Kustuta viies</button>
        <br /><br />

        <table>
            <thead>
                <tr>
                    <th>Järjekorranumber</th>
                    <th>Index</th>
                    <th>store</th>
                    <th>Telefon</th>
                    <th>Aadress</th>
                    <th>Kustuta nupp</th>
                </tr>
            </thead>
            <tbody>
            {shops.map((store, index) => 
            <tr key={store.name}>
                <td>{index + 1}</td>
                <td>{index}</td>
                <td>{store.nimi}</td>
                <td>{store.tel}</td>
                <td>{store.aadress}</td>
                <td><button onClick={() => remove(index)}>x</button></td>
            </tr>)}
            </tbody>
        </table>

        
    </div>
  )
}

export default ManageStores

