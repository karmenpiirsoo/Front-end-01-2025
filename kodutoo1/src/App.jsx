import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <button className="nupp" type="button">Vaata siia!</button>

      <div className="tekst"> Väikesed präänikud on Antarktikas pingviini all kinni</div>

      <div className="tekst2"> Pingviin rullis ennast liustikust alla ja sulpsas vette</div>

      <img className="pilt"src="https://p.ohtuleht.ee/58/i/000334/x-e304ec77-4743-4341-b22a-a6804ec8400d.jpg" alt=""></img>

      <table>
        <tr>
          <th>Pingviin</th>
          <th>Vanus</th>
          <th>Asukoht</th>
        </tr>
        <tr>
          <td>Pepe</td>
          <td>2</td>
          <td>jääpank</td>
        </tr>
        <tr>
          <td>Loolo</td>
          <td>5</td>
          <td>liustik</td>
        </tr>
        <tr>
          <td>Timmu</td>
          <td>3.5</td>
          <td>jääauk</td>
        </tr>
      </table>

      <iframe width="420" height="315"
      src="https://www.youtube.com/watch?v=4PwDFddpo4c" frameborder="0">
      </iframe>
    </>
  )
}

export default App
