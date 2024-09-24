import {React} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/free-mode'
import {FreeMode} from 'swiper/modules'
import { Maps } from '../constants'
import Info from '@mui/icons-material/Info'
import { IconButton } from '@mui/material'
import { Link } from 'react-router-dom';


export default function Slider() {
  return (
    

    <div className="relative flex items-center justify-center flex-col">
        <Swiper slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 15,
          },
    }}

    freeMode={true}
    
    modules={[FreeMode]} className="max-w-[80%] lg:max-w-[90%]"

    >
        {Maps.map((item) => (
            <SwiperSlide key={item.title}>

                <div className="cursor-pointer font-custom flex flex-col gap-6 mb-20 group relative text-white px-2 py-2 h-[350px] w-[215px] lg:h-[400px] lg:w-[400px]" 
                >
                    {/*Images*/}
                    <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: `url(${item.backgroundImage})`}} />

                    {/*Div covering all slide content - makes anywhere clickable*/}
                    <Link to={`/start/select/${item.title}`}><div>

                    {/*Shady gradient thing to make text more legible*/}
                    <div className="absolute inset-0 bg-gradient-to-b from-stone-900" />

                    {/*Hover shade*/}
                    <div className="absolute inset-0 bg-black opacity-10 group-hover:opacity-50" />

                    {/*Text*/}
                    <div className="relative flex flex-col gap-5 px-5">
                    <h1 className="uppercase text-xl lg:text-6xl font-extrabold text-red-600">{item.title}</h1>
                        <p className="lg:text-[24px] font-extralight">{item.desc}</p>
                        <p className="lg:text-[16px] font-thin">{item.coords}</p>
                    </div>

                    </div></Link>
                    
                    {/*Info*/}
                    <div className="absolute flex bottom-0 right-0 px-5 py-5">
                    <Link to={`/start/info/${item.lore}`}>
                    <IconButton>
                    <Info className="text-white hover:opacity-50" />
                    </IconButton>
                    </Link>
                    </div>
                </div>
            </SwiperSlide>
        ))}
    </Swiper>

    </div>
  )
}
