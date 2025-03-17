import { useRef, useState } from "react"
import picturesJSON from "../../data/pictures.json"

function ManagePictures() {

  const [pildid, setPildid] = useState(picturesJSON.slice()) // setPildid kasutada siis 
  const urlRef = useRef();
  const pealkiriRef = useRef();
  const kirjeldusRef = useRef()

  function  reset() {
    setPildid(picturesJSON.slice()) 
  }

  function kustuta(index) {
    picturesJSON.splice(index, 1);
  setPildid(picturesJSON.slice())
  }

  function lisa() {
    picturesJSON. push({
      "url": urlRef.current.value,
      "pealkiri": pealkiriRef.current.value,
      "kirjeldus": kirjeldusRef.current.value
    });
    setPildid(picturesJSON.slice()) // --> HTMLi uuendamiseks
  }



  return (
    <div>
         <button onClick={reset}>Reset</button>
      <div>Kokku: {pildid.length} tk </div>

      <br />
      <label>Pildi URL</label><br />
      <input ref={urlRef}type="text" /><br />
      <label>Pildi pealkiri</label><br />
      <input ref={pealkiriRef}type="text" /><br />
      <label>Pildi kirjeldus</label><br />
      <input ref={kirjeldusRef}type="text" /><br />
      <button onClick={lisa}>Lisa</button>
      <br />
      <br />

       <table>
            <thead>
                <tr>
                    <th>Järjekorranumber</th>
                    <th>Index</th>
                    <th>Pilt</th>
                    <th>Pilt</th>
                    <th>Pildi pealkiri</th>
                    <th>Kirjeldus</th>
                    <th>Kustuta nupp</th>
                </tr>
            </thead>
            <tbody>
            {pildid.map((pilt, index) => 
            <tr key={pilt.url}>
                <td>{index + 1}</td>
                <td>{index}</td>
                <td>{pilt.url}</td>
                <td><img key={pilt.url} className="ikoon" src={pilt.url} alt="" /></td>
                <td>{pilt.pealkiri}</td>
                <td>{pilt.kirjeldus}</td>
                <td><button onClick={() => kustuta(index)}>x</button></td>
            </tr>)}
            </tbody>
        </table>
    </div>
  )
}

export default ManagePictures
