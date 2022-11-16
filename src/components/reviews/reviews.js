import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper"
import './reviews.scss'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

function Reviews ({ reviews }) {

   return (
      <section id="reviews">
         <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
         >
            {
               reviews.map((review) => {
                  const {id, message, name, country} = review

                  return (
                     <SwiperSlide key={id}>
                        <div className="review">
                           <p>{ message }</p>
                           <h4>{name}, {country}</h4>
                        </div>
                     </SwiperSlide>
                  )
               })
            }
         </Swiper>
      </section>
   )
}

export default Reviews