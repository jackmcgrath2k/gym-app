import React from 'react'
import SectionWrap from './SectionWrap'
import Slider from './Slider'
import { AGENTS } from '../constants/stratdata'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



export default function Generator() {
  const navigate = useNavigate();
  return (

    
    <div className="text-white items-center">
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


    <div className="py-20">
      <SectionWrap header={"LETS TALK STRATEGY"} title={"MAP SELECT"}>
        <Slider></Slider>
      </SectionWrap>

      </div>
    </div>
    
  )
}




