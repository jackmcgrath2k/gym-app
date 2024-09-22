import { useState } from 'react'
import Hero from './components/Hero'
import Generator from './components/Generator'
import Slider from './components/Slider'

function App() {
  

  return (
      <main className="min-h-screen flex flex-col bg-gradient-to-r
       from-stone-800 to-zinc-950 text-white text-sm sm:text-base">
      <Hero />
      <Slider />
      <Generator />
      
      
      </main>
  )
}

export default App
