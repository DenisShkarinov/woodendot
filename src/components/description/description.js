import DescriptionItem from "./descriptionItem"
import "./description.scss"
import Shipping from'./shipping.webp'
import Eco from './eco.webp'
import Spain from './spain.webp'
import Award from './award.webp'
import Stars from './falling-star.webp'

function Description () {
   return (
      <section id="description">
         <DescriptionItem img={Shipping} title="free shipping" />
         <DescriptionItem img={Award} title="awarded product design" />
         <DescriptionItem img={Eco} title="Ecofriendly Approach" />
         <DescriptionItem img={Spain} title="crafted in spain" />
         <DescriptionItem img={Stars} title="4.8 star reviews" />
      </section>
   )
}

export default Description