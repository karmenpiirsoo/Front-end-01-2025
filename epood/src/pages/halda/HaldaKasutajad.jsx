import kasutajadFailist from "../../data/kasutajad.json"

function HaldaKasutajad() {
  return (
    <div>
      {kasutajadFailist.map(kasutaja => 
      <div key={kasutaja.email}>
        {kasutaja.nimi} - {kasutaja.email}  
      </div> )}
    </div>
  )
}

export default HaldaKasutajad