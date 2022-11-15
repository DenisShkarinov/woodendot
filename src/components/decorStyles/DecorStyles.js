import First from './1.webp'
import Second from './2.webp'
import Third from './3.webp'
import Fourth from './4.webp'

import ImgBlock from './ImgBlock'
import './decorStyles.scss'

function DecorStyles () {
   return (
      <section id="decor">
         <ImgBlock src={First} title="First Decor" />
         <ImgBlock src={Second} title="Second Decor" />
         <ImgBlock src={Third} title="Third Decor" />
         <ImgBlock src={Fourth} title="Fourth Decor" />
      </section>
   )
}

export default DecorStyles