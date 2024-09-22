import React, { useState, useEffect } from 'react'
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import song from '../assets/song.wav';


export default function Hero() {
const [isMuted, setIsMuted] = useState(false)

  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[900px] w-full mx-auto p-5">
        <h1 className="uppercase font-black font-custom text-red-900 text-5xl sm:text-6xl md:text-7xl lg:text-8xl">VALO<span className="text-white">TACT</span></h1>
        <p className="uppercase font-semibold">Commit to Conquer.</p>
        <p className="text-sm md:text-base">Train hard, adapt quickly, and execute flawlessly. In this game, hesitation is not an option.
           <br />
           <span className="text-red-900 font-bold">VALO</span><span className="font-semibold">TACT</span> is where the best come to study and take that next step to greatness.
           Why play the game when you can dominate it.</p>

           <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-600 to-red-900 hover:text-white dark:text-white ">
            <p className="font-light relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-stone-900 rounded-md group-hover:bg-opacity-0">
            GET STARTED
            </p>
            </button>



          <div className="audio-buttons">
            <div className="absolute top-5 right-5">
              <div>
              {isMuted ? <VolumeOffIcon /> : <VolumeUpIcon />}
              </div>
            </div>
          </div>
    </div>
  )
}
