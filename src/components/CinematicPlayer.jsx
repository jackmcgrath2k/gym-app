import React, { useState } from 'react'
import ReactPlayer from 'react-player/youtube'
import { Cinematics } from '../constants/cinematics'
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import { IconButton } from '@mui/material';


export default function CinematicPlayer() {
const [positionIndex, setPositionIndex] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8])
const [playingIndex, setPlayingIndex] = useState(null)

const handleNext = () => {
    setPositionIndex((prevIndexes) => {
        const updatedIndexes = prevIndexes.map((prevIndex) => (prevIndex + 1) % 9);
        return updatedIndexes;
    })
}

const positions = [
    'center',
    'left3',
    'left2',
    'left1',
    'left',
    'right',
    'right1',
    'right2',
    'right3'
]

const imageVariants = {
  center: { x: '0%', scale: 1.2, zIndex: 50 },
  left3: { x: '-95%', scale: 0.3, zIndex: 1 }, // Far left off-screen
  left2: { x: '-75%', scale: 0.5, zIndex: 2 },
  left1: { x: '-50%', scale: 0.7, zIndex: 3 },
  left: { x: '-25%', scale: 0.1, zIndex: 4 },
  right: { x: '25%', scale: 0.1, zIndex: 4 },
  right1: { x: '50%', scale: 0.7, zIndex: 3 },
  right2: { x: '75%', scale: 0.5, zIndex: 2 },
  right3: { x: '95%', scale: 0.3, zIndex: 1 }, // Far right off-screen
  
}


  return (
<div>
  {playingIndex !== null && (
    <div className='fixed inset-0 bg-black opacity-80 z-20' onClick={() => setPlayingIndex(null)} />
  )}
<div className='fixed top-0 left-0 right-0 z-10 p-5'>
      <div className="w-full container mx-auto"> 

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


<div className="min-h-screen flex flex-col gap-10 justify-center text-center ">
       
            <div className='flex items-center flex-col justify-center h-screen'>
            {Cinematics.map((Cinematic, id) => (
                <motion.div key={Cinematic.id} src={Cinematic.url} initial="center" animate={positions[positionIndex[id]]}
                variants={imageVariants} transition={{ duration: 0.5}} style={{height: '40%', width: '40%', position: 'absolute'}} >
                <ReactPlayer
                url={Cinematic.url} // Ensure this is a YouTube URL
                light={false} // Displays the thumbnail until clicked
                playing={false} // Starts playing when clicked
                controls={false} // Only shows the thumbnail
                width='100%' // Adjusts to the div size
                height='100%' // Adjusts to the div size
                onPlay={() => setPlayingIndex(id)}
                onPause={() => setPlayingIndex(null)}
                onEnded={() => setPlayingIndex(null)}
              />
              <div>
              <h1 className="font-custom font-black text-white py-10 text-3xl">{Cinematic.title}</h1>
              {positions[positionIndex[id]] === 'center' && (
                <div className='w-full justify'>

                <IconButton >
                  <KeyboardDoubleArrowRightIcon className='text-white' onClick={handleNext}/>
                </IconButton>
                </div>
              )}
              </div>
              
                </motion.div>
        ))}

        </div>

      </div>

</div>

  );
};


