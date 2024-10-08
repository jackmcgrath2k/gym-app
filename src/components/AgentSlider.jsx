import React, { useState } from 'react'
import { motion } from "framer-motion";
import { agentInfo } from '../constants/stratdata';
import { Link } from 'react-router-dom';

const ImageSlider = () => {
  const [positionIndexes, setPositionIndexes] = useState(
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]);


    const handleNext = () => {
      setPositionIndexes((prevIndexes) => {
        const updatedIndexes = prevIndexes.map(
          (prevIndex) => (prevIndex + 1) % 5
        );
        return updatedIndexes;
      })


    }

    const positions = ["center", "left12", "left11","left10", "left9", "left8", "left7", "left6", "left5", "left4", "left3", "left2", "left1", "left", "right", "right1", "right2", "right3", "right4", "right5", "right6", "right7", "right8", "right9", "right10", "right11", "right12"];

    const imageVariants = {
      center: { x: "0%", scale: 1, zIndex: 50 },

      left12: { x: "-2.5%", scale: 0.9, zIndex: 13 },
      left11: { x: "-5%", scale: 0.8, zIndex: 12 },
      left10: { x: "-7.5%", scale: 0.75, zIndex: 11 },
      left9: { x: "-7.5%", scale: 0.75, zIndex: 10 },
      left8: { x: "-10%", scale: 0.6, zIndex: 9 },
      left7: { x: "-20%", scale: 0.5, zIndex: 8 },
      left6: { x: "-30%", scale: 0.45, zIndex: 7 },
      left5: { x: "-40%", scale: 0.4, zIndex: 6 },
      left4: { x: "-50%", scale: 0.35, zIndex: 5 },
      left3: { x: "-60%", scale: 0.3, zIndex: 4 },
      left2: { x: "-70%", scale: 0.2, zIndex: 3 },
      left1: { x: "-80%", scale: 0.25, zIndex: 2 },

      left: { x: "-90%", scale: 0.1, zIndex: 1 }, // far left
      right: { x: "90%", scale: 0.1, zIndex: 1 }, //far right

      right1: { x: "80%", scale: 0.2, zIndex: 2 },
      right2: { x: "-70%", scale: 0.25, zIndex: 3 },
      right3: { x: "-60%", scale: 0.3, zIndex: 4 },
      right4: { x: "-50%", scale: 0.35, zIndex: 5 },
      right5: { x: "-40%", scale: 0.4, zIndex: 6 },
      right6: { x: "-30%", scale: 0.45, zIndex: 7 },
      right7: { x: "-20%", scale: 0.5, zIndex: 8 },
      right8: { x: "-10%", scale: 0.6, zIndex: 9 },
      right9: { x: "-9%", scale: 0.7, zIndex: 10 },
      right10: { x: "-7.5%", scale: 0.75, zIndex: 11 },
      right11: { x: "-5%", scale: 0.8, zIndex: 12 },
      right12: { x: "-2.5%", scale: 0.9, zIndex: 13 },
    };
    return (
      <div>
      <div className='fixed top-0 left-0 right-0 z-10 p-5'>
            <div className="w-full container mx-auto"> 
      
              <div className="w-full flex items-center justify">
                <div className="flex w-full justify-center content-center gap-40">
      
                <Link to="/agents">
                <h4 className="font-light text-sm text-center my-5 text-white">AGENTS</h4>
                </Link>
                
                <Link to="/maps">
                <h4 className="font-light text-sm text-center my-5 text-white">MAPS</h4>
                </Link>
      
                <Link to="/">
                <h4 className="font-bold text-sm text-center my-5 text-red-700">VALO<span className="text-white">STRAT</span></h4>
                </Link>
      
                <Link to="/cinematics">
                <h4 className="font-light text-sm text-center my-5 text-white">CINEMATICS</h4>
                </Link>
      
                <Link to="/">
                <h4 className="font-light text-sm text-center my-5 text-white">SOMETHING</h4>
                </Link>
                </div>
              </div>
            </div>
      </div>
      
      <div className='bottom-0 z-70'>
              <button
          className="text-white mt-[400px] bg-indigo-400 rounded-md py-2 px-4"
          onClick={handleNext}
        >
          Next
        </button>
              </div>
      <div className="min-h-screen flex flex-col gap-10 justify-center text-center ">
             
                  <div className='flex items-center flex-col justify-center h-screen'>
                  {agentInfo.map((agentInfo, index) => (
                      <motion.img key={agentInfo.index} src={agentInfo.disp} initial="center" animate={positions[positionIndexes[index]]}
                      variants={imageVariants} transition={{ duration: 0.5}} style={{height: '65%', width: '37%', position: 'absolute'}} >

                      </motion.img>
              ))}

      
              </div>
      
            </div>
      
      </div>
      
        );
  }
  export default ImageSlider;