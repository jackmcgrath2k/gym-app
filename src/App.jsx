import { useState } from 'react'
import Hero from './components/Hero'
import Generator from './components/Generator'
import Slider from './components/Slider'

function App() {
  

  return (
      <main className="min-h-screen flex flex-col bg-gradient-to-r from-red-950 from-0% via-stone-950 via-14% to-stone-950 to-90%  text-white text-sm sm:text-base">
      <Hero />
      <Generator />
      
      
      
      </main>
  )
}

export default App
