import { useEffect, useRef, useState } from "react";

function MaintainCategories() {
  const [categories, setCategories] = useState([])
  
  const categoryRef = useRef()
  const url = "https://webshop0125-default-rtdb.europe-west1.firebasedatabase.app/categories.json"

useEffect(() => {
  fetch(url) // eraldi datas json faili ei tule, vaid info on plves databaasis
  .then(res => res.json()) // võtab kogu tagastuse, mis siit lehelt tuleb (metainfo)
  .then(json => setCategories(json || [])) // mille pärast me päriselt seda teeme , alati kasutada mõlemat .then'i!
}, []);
  
   const addCategory = () => {
    categories.push({"name": categoryRef.current.value});
    setCategories(categories.slice());
    fetch(url, {method: "PUT", body: JSON.stringify(categories)})
   }


  return (
    <div>
      <label>Category</label> <br />
      <input ref={categoryRef} type="text" /> <br />
      <button onClick={addCategory}>Sisesta</button>
      {categories.map(category => <div key={category.name}>{category.name}</div>)}
    </div>
  )
}

export default MaintainCategories