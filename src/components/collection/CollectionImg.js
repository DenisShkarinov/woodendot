
function CollectionImg (props) {
   return (
      <div className="item-img">
         <img src={props.img} alt={props.title} />
      </div>
   )
}

export default CollectionImg