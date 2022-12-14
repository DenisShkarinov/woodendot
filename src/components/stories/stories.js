import StoriesTitle from "./StoriesTitle"
import './stories.scss'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, A11y } from "swiper"
import 'swiper/css'
import 'swiper/css/pagination'

// * images
import First from './1.webp'
import Second from './2.webp'
import Third from './3.webp'

function Stories () {
   return (
      <section id="stories">
         <StoriesTitle title="Our pieces inside your home" info="Get inspired by our products in real-life. Tag us and be featured!" />
         <Swiper 
         modules={[Pagination, A11y]}
            pagination={{clickable: true}}
            spaceBetween={10}
            slidesPerView={1}

            breakpoints={{
               640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
               },
               768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
               },
               1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
               },
            }}
         >
            <SwiperSlide><img src={First} alt="First style" /></SwiperSlide>
            <SwiperSlide><img src={Second} alt="Second style" /></SwiperSlide>
            <SwiperSlide><img src={Third} alt="Third style" /></SwiperSlide>
            <SwiperSlide><img src={First} alt="First style" /></SwiperSlide>
            <SwiperSlide><img src={Second} alt="Second style" /></SwiperSlide>
            <SwiperSlide><img src={Third} alt="Third style" /></SwiperSlide>
            <SwiperSlide><img src={First} alt="First style" /></SwiperSlide>
            <SwiperSlide><img src={Second} alt="Second style" /></SwiperSlide>
            <SwiperSlide><img src={Third} alt="Third style" /></SwiperSlide>
         </Swiper>
      </section>
   )
}

export default Stories