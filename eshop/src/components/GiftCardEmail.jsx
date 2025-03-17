import { useRef, useState } from "react";
import { TextField } from "@mui/material";

function GiftCardEmail() {


        const emailRef = useRef();
    const [sonum, setSonum] = useState("");
    
        function lisa() { 
            if (emailRef.current.value === "") {
              setSonum("E-mail peab olema sisestatud");
              return;
            }
            
            if (emailRef.current.value.includes("@") === false) {
              setSonum("E-mail peab sisaldama @ märki");
              return; 
            }
            
            if (emailRef.current.value.length <5) {
              setSonum("E-mail liiga lühike");
              return;
            }
            setSonum("E-mail sisestatud");
          }


  return (
    <div>
         <div>{sonum}</div>
        <TextField ref={emailRef} label="Email" variant="filled" /> <br />
        {/* <label> Email</label> <br />
        <input ref={emailRef} type="text"/> <br /> */}
        <button onClick={lisa}>Sisesta email</button> <br />
    </div>
  )
}

export default GiftCardEmail