import React from 'react'

export default function Hero() {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[900px] w-full mx-auto p-5">
        <h1 className="uppercase font-bold font-custom text-red-900 text-5xl sm:text-6xl md:text-7xl lg:text-8xl">Hercules<span className="text-white">FIT</span></h1>
        <p className="uppercase font-semibold">Commit to Conquer.</p>
        <p className="text-sm md:text-base">Get in the zone and own your workout.
           Every drop of sweat is a testament to your 
           strength and determination.
           <br />
           Push past the limits, embrace 
           the grind, and forge yourself 
           into a powerhouse.</p>

           <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-600 to-red-900 hover:text-white dark:text-white ">
            <p class="font-light relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-stone-900 rounded-md group-hover:bg-opacity-0">
            GET STARTED
            </p>
            </button>

    </div>
  )
}
