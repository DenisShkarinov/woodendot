
function ToShop (props) {
   return (
      <div className="description-link">
         <button id="shop" aria-label={props.toShop}><a href="#" aria-label="To shop">{props.toShop}</a></button>
      </div>
   )
}

export default ToShop