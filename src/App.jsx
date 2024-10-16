import { useState } from 'react'
import Hero from './components/Hero'
import Generator from './components/Generator'
import {Route, Routes} from 'react-router-dom'
import MapPage, { mapDetailsLoader } from './components/MapPage'
import MapInfo, { mapInfoLoader } from './components/MapInfo'
import NewPlayers from './components/NewPlayers'
import Strategy from './components/Strategy'
import PlayableAgents from './components/Agents'
import CinematicPlayer from './components/CinematicPlayer'

function App() {
  

  return (
      <main className="min-h-screen flex flex-col bg-gradient-to-r from-red-950 from-0% via-stone-950 via-14% to-stone-950 to-90%  text-white text-sm sm:text-base">
      
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/start" element={<Generator />} />
        <Route path="/start/select/:title" element={<MapPage />} loader={mapDetailsLoader}/>
        <Route path="/start/info/:lore" element={<MapInfo />} loader={mapInfoLoader}/>
        <Route path="/newplayer" element={<NewPlayers />} />
        <Route path="/agents" element={<PlayableAgents />} />
        <Route path="/cinematics" element={<CinematicPlayer />} />
        <Route path="/select/:title/:a_name" element={<Strategy />} />
        <Route path="/select/:title/:a_name/offense" element={<Strategy />} />
        <Route path="/select/:title/:a_name/defense" element={<Strategy />} />

        
        
      </Routes>
      
      
      </main>
  )
}

export default App
