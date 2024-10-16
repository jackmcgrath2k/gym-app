
import {React, useState} from 'react';
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';



export default function Hero() {

  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowMessage(true);

    setTimeout(() => {
      setShowMessage(false);
    }, 3000); // hide after 3 seconds
  };

  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[900px] w-full mx-auto p-5">
      <div>
        <h1 className="uppercase font-black font-custom text-red-700 text-5xl sm:text-6xl md:text-7xl lg:text-8xl">VALO<span className="text-white">STRAT</span></h1>
        <p className="font-light">The Ultimate <span className="text-red-700 font-bold">VALORANT</span> training tool.</p>
        </div>
        <p className="uppercase font-semibold">Commit to Conquer.</p>
        <p className="text-sm md:text-base">Train hard, adapt quickly, and execute flawlessly. In this game, hesitation is not an option.
           <br />
           <span className="text-red-700 font-bold">VALO</span><span className="font-semibold">STRAT</span> is where the best come to study and take that next step to greatness.
           <br />
           <br />
           <span className="text-red-700 font-bold">Why play the game when you can dominate it.</span></p>

           <Link to="/start">
           <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900  group bg-gradient-to-br from-red-600 to-red-900 hover:text-white dark:text-white">
            <p className="font-light relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-stone-950 rounded-md group-hover:bg-opacity-0">
            GET STARTED
            </p>
            </button>
            </Link>
            
            <Link to="/"> {/* <Link to="/newplayer"> */}
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900  group bg-gradient-to-br from-stone-600 to-slate-900 hover:text-white dark:text-white" onClick={handleClick}>
            <p className="font-light relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-stone-950 rounded-md group-hover:bg-opacity-0">
            NEW TO VALORANT?
            </p>
            </button>
            {showMessage && (
        <div className="text-red-700 text-sm absolute">
          // UNDER CONSTRUCTION
        </div>
      )}
            </Link>


            
          


          <div className="gitlink">
            <div className="absolute top-5 right-5">
              <div>
              <Link to="https://github.com/jackmcgrath2k/gym-app">
                <GitHubIcon />
              </Link>

              </div>
            </div>
          </div>
    </div>
  )
}
