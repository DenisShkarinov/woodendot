
function DescriptionItem (props) {
   return (
      <div className="description-item">
         <div className="description-item__image">
            <img src={props.img} alt={props.title} />
         </div>
         <div className="description-item__title">
            <h3>{props.title}</h3>
         </div>
      </div>
   )
}

export default DescriptionItem