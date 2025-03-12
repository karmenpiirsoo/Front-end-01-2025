import { useRef, useState } from "react"
import tootedFailist from "../data/tooted.json"
import { TextField, Switch } from "@mui/material";

function LisaToode() {
  const [sonum, setSonum] = useState("Lisa uus toode");
  const NimiRef = useRef();
  const HindRef = useState();
  const PiltRef = useState();
  const aktiivneRef = useState();

  function lisa() {
    if (NimiRef.current.value === "") {
      setSonum("Tühja nimetusega ei saa toodet sisestada!")
    } 
    
    setSonum("Toode sisestatud!")
    tootedFailist.push({
      "name": NimiRef.current.value,
      "price": HindRef.current.value,
      "image": PiltRef.current.value,
      "active": aktiivneRef.current.checked
    });
    
    
  }

  return (
    <div>
      <div>{sonum}</div>
        <br />
        <TextField ref={NimiRef} label="Nimi" variant="outlined" /><br /><br />
        <TextField ref={HindRef} label="Hind" variant="outlined" /><br /><br />
        <TextField ref={PiltRef} label="Pilt" variant="outlined" /><br /><br />
        <span>Aktiine</span>
        <Switch ref={aktiivneRef} defaultChecked /><br />
        {/* <label>Toote nimi</label> <br />
        <input ref={NimiRef} type="text" /> <br />
        <label>Toote hind</label> <br />
        <input ref={HindRef} type="text" /> <br />
        <label>Toote pilt</label> <br />
        <input ref={PiltRef} type="text" /> <br />
        <label>Toode aktiivne</label> <br /> */}
        {/* <input ref={aktiivneRef} type="checkbox" /> <br /> */}
        <button onClick={lisa}>Sisesta</button> <br />
    </div>
  )
}

export default LisaToode