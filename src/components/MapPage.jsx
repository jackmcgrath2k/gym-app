import { useParams } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { IconButton } from '@mui/material';
import { Maps } from '../constants'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import React from 'react'
import SectionWrap from './SectionWrap'
import { agentInfo } from '../constants/stratdata';

const MapPage = () => {
  const { title } = useParams(); // Extract the title parameter

  const mapPage = Maps.find(map => map.title === title);

  const navigate = useNavigate();

return (

  <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center w-full p-5">
    <div className="absolute inset-0 bg-cover bg-center brightness-125 blur-lg z-0 " style={{ backgroundImage: `url(${mapPage.backgroundImage})` }}/>
    <div className='z-10'>
    {/* VALOSTRAT HEADER */}
    <div className='fixed top-0 left-0 right-0 z-10 p-5'>
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
      </div>

      {/* MAP TITLE */}
      <div className='relative justify-center py-20'>
      <h1 className="uppercase font-custom font-black text-10xl text-red-700 m-20">{mapPage.title}</h1>
      </div>
      
      <div>
      <SectionWrap header={"SELECT YOUR AGENT"}>
        
      </SectionWrap>
      </div>

    </div>
        <div className='grid grid-cols-5 gap-4'>
        {agentInfo.map((image) => (
          <div className='relative group' key={image.img}>
            <div className='h-[100px] w-[100px] m-1 object-cover border-4 border-stone-500 border-opacity-40 hover:bg-gradient-to-br from-red-600 to-red-900 hover:border-red-800'>
            <img src={image.img} alt={image.name} className="object-cover hover:scale-110" />
            </div>
          </div>
        ))}
      </div>
    </div>
);
};

export default MapPage;

export const mapDetailsLoader = async ({ params }) => {
    const { title } = params

    const res = await fetch('http://localhost:5173/start/select'+ title) 

    return res.json()
}

