import React from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Maps } from '../constants'
import { agentInfo } from '../constants/stratdata';
import { useParams } from 'react-router-dom';
import SectionWrap from './SectionWrap'

//Has to retrieve agent name from title - done
//Has to retrieve   map name from title - done 
//<Link to={`/select/${mapPage.title}/${image.a_name}`}>


export default function Strategy() {
  const { title } = useParams(); // Extract the title parameter
  const { a_name } = useParams(); // Extract the title parameter

  const mapPage = Maps.find(map => map.title === title);
  const agentPage = agentInfo.find(map => map.a_name === a_name);

  const navigate = useNavigate();

return (

  <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center w-full p-5">
    <div className="absolute inset-0 bg-cover bg-center brightness-125 blur-lg z-0 " style={{ backgroundImage: `url(${mapPage.backgroundImage})` }}/>
    <div className='z-10'>
    {/* VALOSTRAT HEADER */}
    <div className='fixed top-0 left-0 right-0 z-20 p-5'>
      <div className="w-full container mx-auto mb-5"> 

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
      

      {/* MAP TITLE */}
      </div>
      <div>
      <SectionWrap header={"AGENT SELECT"}>
        <p className='text-6xl font-black text-red-700 pb-3'>SELECT YOUR AGENT</p>
      <div>
        <p className="text-black">
          {agentPage.a_name}
          </p></div>
      
      </SectionWrap>
      </div>
      

    </div>
  

    </div>
);
};







