import CollectionTitle from "./CollectionTitle"
import CollectionImg from "./CollectionImg"
import Cloe from './Cloe.webp'
import Alba from './Alba.webp'
import Batea from './Batea.webp'
import Alada from './Alada.webp'
import Pelican from './Pelican.webp'
import './collection.scss'

function CollectionBlock () {
   return (
      <section id="collection">
         <div className="collection-item right">
            <CollectionTitle title="Cloe" shortInfo="Modular storage system" cost="from $1.176" description="An expansive way to furnish your space exactly how you need it and like it. Transform it in exactly what you need like a bookshelf, tv stand or show rack, you pick." toShop="Shop now" />
            <CollectionImg img={Cloe} title="Cloe"/>
         </div>

         <div className="collection-item ">
            <CollectionImg img={Pelican} title="Pelican"/>
            <CollectionTitle title="Pelican" shortInfo="Shelves with hidden hooks" cost="from $89" description="Store or exhibit your favorite objects in the entrance hall, modern hallways, living rooms and bedrooms with a decorative and minimalist touch." toShop="Shop now" />
         </div>

         <div className="collection-item right">
            <CollectionTitle title="Alada" shortInfo="Floating folding desk" cost="from $534" description="A timeless and discreet folding desk that seamlessly transforms into a decorative shelf in seconds." toShop="Shop now" />
            <CollectionImg img={Alada} title="Cloe"/>
         </div>

         <div className="collection-item ">
            <CollectionImg img={Alba} title="Alba"/>
            <CollectionTitle title="Alba collection" shortInfo="Modular bedside table & shelf" cost="from $272" description="A versatile and modular piece with a sculptural touch that can be used as a wall shelf or as a bedside table with concealed storage." toShop="Shop now" />
         </div>

         <div className="collection-item right">
            <CollectionTitle title="Batea collection" shortInfo="Tables with storage & tray tables" cost="from $272" description="Composed of clean and rounded lines, the Batea Collection includes unique tables with extra functionality like a removable tray, and hidden storage." toShop="Shop now" />
            <CollectionImg img={Batea} title="Batea"/>
         </div>
      </section>
   )
}

export default CollectionBlock