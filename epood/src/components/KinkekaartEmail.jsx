import { useRef, useState } from "react";
import { TextField } from "@mui/material";


function KinkekaartEmail() {
    const emailRef = useRef();
const [sonum, setSonum] = useState("");

    function lisa() {   // olla onClickiga väljakutsutav
        if (emailRef.current.value === "") {
          setSonum("E-mail peab olema sisestatud");
          return;
        }
        
        if (emailRef.current.value.includes("@") === false) {
          setSonum("E-mail peab sisaldama @ märki");
          return; // lõpetab funktsiooni, siit enam edasi ei minda
        }
        
        if (emailRef.current.value.length <5) {
          setSonum("E-mail liiga lühike");
          return;
        }
        setSonum("E-mail sisestatud");
      }

      // if (emailRef.current.value.includes("@") === false) {        ALUMINE OVERRIDIB ALATI ÜLEMISE
//   setSonum("E-mail peab sisaldama @ märki")
// } else {
//   setSonum("E-mail sisestatud")
// }
    return (
    <div>
        <div>{sonum}</div>
        <TextField inputRef={emailRef} label="Email" variant="filled" /> <br />
        {/* <label> Email</label> <br />
        <input ref={emailRef} type="text"/> <br /> */}
        <button onClick={lisa}>Sisesta email</button> <br />
    </div>
  )
}

export default KinkekaartEmail