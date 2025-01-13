import { useState } from 'react'

function Avaleht() {
    const [count, setCount] = useState(0)

  return (
    <div>
         <button className="nupp" onClick={() => setCount((count) => count + 1)}>
        count is {count}
        </button>
    </div>
  )
}

export default Avaleht