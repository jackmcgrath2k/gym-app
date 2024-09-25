import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import { FreeMode } from 'swiper/modules';
import { agentInfo } from '../constants/stratdata';
import { Link } from 'react-router-dom';


// Parent Layout Component
export default function AppLayout() {
  return (
    <div className="flex flex-col h-screen">
      {/* Other components here */}
      <div className="flex-grow"></div>
      <AgentSlider />
    </div>
  );
}

// Swiper Component
function AgentSlider() {
  return (
    <div className="flex agents-center justify-center flex-col">
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 5,
          },
        }}
        freeMode={true}
        modules={[FreeMode]}
        className="max-w-[80%] lg:max-w-[90%] mb-5"
      >
        {agentInfo.map((agent) => (
 <SwiperSlide key={agent.a_name}>
 <div className="cursor-pointer font-custom flex flex-col mb-20 group relative text-white h-[600px] w-[215px] lg:h-[400px] lg:w-[300px] ">
   {/* Images */}
   <div className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-150" style={{ backgroundImage: `url(${agent.disp})` }} />
   
              {/* Div covering all slide content - makes anywhere clickable */}
              <Link to={`/start/select/${agent.title}`}>
                <div>
                  {/* Hover zoom */}
                  <div className="absolute inset-0" />
                 
                </div>
              </Link>


            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}







