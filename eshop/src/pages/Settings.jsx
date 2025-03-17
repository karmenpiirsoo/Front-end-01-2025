import { useState } from "react"

function Settings() {

    const [language, setLanguage] = useState(localStorage.getItem ("language") || "est");
  
    function setLangEng() {
      setLanguage("eng")
      localStorage.setItem("language", "eng")
    }
  
    function setLangEst() {
      setLanguage("est")
      localStorage.setItem("language", "est")
    }
  
    function setLangFra() {
      setLanguage("fr")
      localStorage.setItem("language", "fr")
    }
  


  return (
    <div>
      <button className={language === "eng" ? "selected-langage" : undefined} onClick ={setLangEng}> English</button>
      <button className={language === "est" ? "selcted-language" : undefined} onClick ={setLangEst}>Estonian</button>
      <button className={language === "fra" ? "selected-language" : undefined} onClick ={setLangFra}>French</button>
      <br />
      <br />
      { language === "eng" && <div>This page is in English</div>}
      { language === "est" && <div>See lehekülg on eesti keeles</div> }
      { language === "fra" && <div>Cette page est en Francais</div>}
      
      <br />
      { language !== "eng" && <i>This page is not in English. We are still working on it</i>}
    </div>
  )
}

export default Settings

