import React from 'react'
import SectionWrap from './SectionWrap'
import AgentSlider from './AgentSlider'

import { Link } from 'react-router-dom';




export default function PlayableAgents() {

  return (

    
    <div>

    {/* VALOSTRAT HEADER */}
    <div className='fixed top-0 left-0 right-0 z-10 p-5'>
      <div className="w-full container mx-auto mb-5"> 

        <div className="w-full flex items-center justify">
          <div className="flex w-full justify-center content-center gap-40">

          <Link to="/agents">
          <h4 className="font-light text-sm text-center my-5 text-white">AGENTS</h4>
          </Link>

          <Link to="/">
          <h4 className="font-bold text-sm text-center my-5 text-red-700">VALO<span className="text-white">STRAT</span></h4>
          </Link>

          <Link to="/cinematics">
          <h4 className="font-light text-sm text-center my-5 text-white">CINEMATICS</h4>
          </Link>

          </div>
        </div>
      </div>
      </div>



    


    <div className="py-20 items-center">
      
        <AgentSlider></AgentSlider>
      

      </div>
    </div>
    
  )
}




