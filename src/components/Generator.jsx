import React from 'react'
import SectionWrap from './SectionWrap'
import Slider from './Slider'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



export default function Generator() {
  const navigate = useNavigate();
  return (

    
    <div>

      <div className='fixed top-0 left-0 right-0 z-10 p-5'>
      <div className="w-full container mx-auto">

        <div className="w-full flex items-center justify">
        <IconButton aria-label="go back" onClick={() => navigate(-1)}>
            <ArrowBackIosNewIcon className='text-white'/>
        </IconButton>

          <div className="flex w-1/2 justify-end content-center">
          <Link to="/">
      <h4 className="font-bold text-sm text-center my-5 text-red-700">VALO<span className="text-white">STRAT</span></h4>
      </Link>

          </div>
        </div>
      </div>
      </div>


    <div className="py-20 items-center">
      <SectionWrap header={"LETS TALK STRATEGY"} title={"MAP SELECT"} episode={"EPISODE 9"} act={"ACT 2"}> 
        <Slider></Slider>
      </SectionWrap>

      </div>
    </div>
    
  )
}




