import './learn.scss'
// images
import Design from './design.webp'
import Footprint from './footprint.webp'
import Made from './made.webp'
import Wood from './wood.webp'
// component
import LearnItem from './LearnItem'

function Learn () {
   return (
      <section id="learn-about">
         <LearnItem src={Design} title='design' description='We create furniture pieces with personality, designed to transform your space.' />
         <LearnItem src={Footprint} title='Footprint' description='We are committed to look after what we love, nature.' />
         <LearnItem src={Made} title='made' description='Our local design, and production in the village of Iscar, Spain.'  />
         <LearnItem src={Wood} title='wood' description='Our characteristic and main material, and its unique and timeless attributes.'  />
      </section>
   )
}

export default Learn