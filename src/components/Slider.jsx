import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import {FreeMode, Pagination} from 'swiper/modules'
import { Maps } from '../constants'

{/*Credit to WebChain Dev*/}

export default function Slider() {
  return (
    <div className="flex items-center justify-center flex-col">
        <Swiper breakpoints={{
        340: {slidesPerView: 3, spaceBetween: 10},
        700: {slidesPerView: 4, spaceBetween: 10},
        
    }}

    freeMode={true}
    pagination={{
        clickable: true
    }}
    modules={[FreeMode, Pagination]} className="ma-w-[70%] lg:max-w-[70%]"

    >
        {Maps.map((item) => (
            <SwiperSlide key={item.title}>

                <div className="font-custom flex flex-col gap-6 mb-20 group relative shadow-lg text-white rounded-xlpx-2 py-1 h-[600px] w-[420px] lg:h-[400px] lg:w-[500]">
                    <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url(${item.backgroundImage})`}} />
                    <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />
                    <div className="relative flex flex-col gap-5 px-5">
                        <h1 className="text-xl lg:text-6xl font-bold mb-56">{item.title}</h1>
                        <p className="lg:text-[24px]">{item.desc}</p>
                        <p className="lg:text-[16px] font-thin">{item.coords}</p>
                    </div>
                </div>
            </SwiperSlide>
        ))}
    </Swiper>

    </div>
  )
}
