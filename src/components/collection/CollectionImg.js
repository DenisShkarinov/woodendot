
function CollectionImg (props) {
   return (
      <div className="item-img">
         <img src={props.img} alt={props.info} />
      </div>
   )
}

export default CollectionImg