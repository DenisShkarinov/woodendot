import Title from "./ItemTitle"
import ShortInfo from "./ItemShortInfo"
import Cost from "./ItemCost"
import ItemDescription from "./ItemDescription"
import ToShop from "./ToShop"

function CollectionTitle (props) {
   return (
      <div className="item-description">
         <Title title={props.title} cost={props.cost} description={props.description} toShop={props.toShop} />
         <ShortInfo shortInfo={props.shortInfo} />
         <Cost cost={props.cost} />
         <ItemDescription description={props.description} />
         <ToShop toShop={props.toShop} />
      </div>
   )
}

export default CollectionTitle