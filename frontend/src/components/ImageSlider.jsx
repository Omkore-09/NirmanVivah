import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import React from 'react'

export default function ImageSlider() {
  return (
    <div className="w-full h-100">
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        modules={[Autoplay]}
      >
        {[1, 2, 3, 4].map((slide) => (
          <SwiperSlide key={slide}>
            <img
              src={`/images/slider-${slide}.jpg`}
              alt={`Slide ${slide}`}
              className="w-full h-100  object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}