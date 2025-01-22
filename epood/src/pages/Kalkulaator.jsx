import { useState } from "react"
import Laenukalkulaator from "../components/Laenukalkulaator"
import MaksimaalneKalkulaator from "../components/MaksimaalneKalkulaator"
import Tavakalkulaator from "../components/Tavakalkulaator"

function Kalkulaator() {
    const [vaade, setVaade] = useState("laen");
  return (
    <div>
        <button onClick={() => setVaade("tava")}>Tavakalkulaator</button>
        <button onClick={() => setVaade("laenu")}>Kodulaenu kalkulaator</button>
        <button onClick={() => setVaade("maks")}>Kodulaenu maksimaalne kalkulaator</button>
        { vaade === "tava" &&<Tavakalkulaator />}
        { vaade === "laenu" && <Laenukalkulaator />}
        { vaade === "maks" && <MaksimaalneKalkulaator />}

    </div>
  )
}

export default Kalkulaator