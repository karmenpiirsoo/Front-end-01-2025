import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <img className="pilt"src="https://egcc.ee/wp-content/uploads/2024/04/EGCC_Sea_Course_Signature_3rd_4_3.jpg" alt="" />
        <br />
        <button className="nupp" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <div className="tekst"> Kõik meie tooted</div>
    
    </>
  )
}

export default App
