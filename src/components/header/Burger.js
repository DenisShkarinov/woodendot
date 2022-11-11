import { useState } from "react"

function Burger () {
   const [burger, setBurger] = useState(false)
   
   return (
      <button className={burger === false ? "burger-button" : "burger-button active"} onClick={() => setBurger(!burger)}>
         <span></span>
         <span></span>
         <span></span>
      </button>
   )
}

export default Burger