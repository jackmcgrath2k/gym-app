import { useParams } from 'react-router-dom';
import { Maps } from '../constants';
import { useNavigate } from 'react-router-dom';



const MapInfo = () => {
    const { lore } = useParams(); // Extract the lore parameter
    const mapInfo = Maps.find(map => map.lore === lore);
    const navigate = useNavigate();
  
  return (
    <div aria-label="go back" onClick={() => navigate(-1)}>
    <div className="relative w-full h-screen cursor-pointer">
    {/* Blurred Background */}
    <div
        className="absolute inset-0 bg-cover bg-center brightness-50 contrast-125 blur-lg"
        style={{ backgroundImage: `url(${mapInfo.backgroundImage})` }}
    />
    
    {/* Content Layer */}
    <div className='relative z-10'>

    {/* Page Content */}

    <div className='px-56 py-20'>
        <div>
      <h1 className="uppercase font-custom font-black text-9xl">{mapInfo.title}</h1>
      <h1> // <span className={mapInfo.inRotation ? 'text-emerald-500 opacity-70' : 'text-red-700 opacity-100'}>{mapInfo.compRot}</span></h1>
      </div>

      <div className='w full px-4'>
        <div className='max-w[1240px] mx-auto grid md:grid-cols-2'>
        <div className="inset-0 bg-cover bg-center h-[350px] w-[215px] lg:h-[600px] lg:w-[600px]" style={{backgroundImage: `url(${mapInfo.miniBgImage})`}} />

            <div className="max-w-full">
                <h1 className='uppercase font-custom font-medium text-xs mb-3 text-red-700'>// LOCATION <span className='font-medium text-xs text-white'> {mapInfo.location} // {mapInfo.coords}</span></h1>
                
                <p className='text-left font-light text-xl'>{mapInfo.loreInfo}</p> 
                <div className='mt-5'>
                    <h1 className='uppercase font-custom font-black text-7xl text-red-700'>PLAY RATE: <span className='uppercase font-custom font-black text-7xl text-white'>{mapInfo.playRate}</span></h1>
                    <h1 className='uppercase font-custom font-black text-7xl my-2 text-red-700'>FAVOURS: <span className='uppercase font-custom font-black text-7xl text-white'>{mapInfo.sideFav}</span></h1>
                </div>
            </div>
            
        </div>
       </div>
    </div>

      
    </div>
        </div>
        </div>
    
  );
};

export default MapInfo;

export const mapInfoLoader = async ({ params }) => {
    const { lore } = params

    const res = await fetch('http://localhost:5173/start/info'+ lore) 

    return res.json()
}


      