import { useRef, useState } from "react"

function LisaToode() {
  const [sonum, setSonum] = useState("Lisa uus toode");
  const nimiRef = useRef();

  function lisa() {
    if (nimiRef.current.value === "") {
      setSonum("Tühja nimetusega ei saa toodet sisestada!")
    } else {
      setSonum("Toode sisestatud!")
    }
    
  }

  return (
    <div>
      <div>{sonum}</div>
        <label>Toote nimi</label> <br />
        <input ref={nimiRef} type="text" /> <br />
        <button onClick={lisa}>Sisesta</button> <br />
    </div>
  )
}

export default LisaToode