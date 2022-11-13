function Burger ({ burgerIsPressed, setBurgerIsPressed }) {
   
   return (
      <button className={burgerIsPressed === false ? "burger-button" : "burger-button active"} onClick={() => setBurgerIsPressed(!burgerIsPressed)}>
         <span></span>
         <span></span>
         <span></span>
      </button>
   )
}

export default Burger