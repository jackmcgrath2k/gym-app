import React from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



export default function NewPlayers() {
  const navigate = useNavigate();
  return (

    
    <div>
    {/* VALOSTRAT HEADER */}
    <div className='fixed top-0 left-0 right-0 z-10 p-5'>
      <div className="w-full container mx-auto mb-5"> 

        <div className="w-full flex items-center justify">
          <div className="flex w-full justify-center content-center gap-40">
          <h4 className="font-light text-sm text-center my-5 text-white">AGENTS</h4>
          <h4 className="font-light text-sm text-center my-5 text-white">MAPS</h4>
          <Link to="/">
          <h4 className="font-bold text-sm text-center my-5 text-red-700">VALO<span className="text-white">STRAT</span></h4>
          </Link>
          <h4 className="font-light text-sm text-center my-5 text-white">CINEMATICS</h4>
          <h4 className="font-light text-sm text-center my-5 text-white">SOMETHING</h4>
          </div>
        </div>
      </div>
      </div>



    </div>


    
  )
}




