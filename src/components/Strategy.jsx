import React from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Maps } from '../constants';
import { agentInfo, strategies } from '../constants/stratdata';
import { useParams } from 'react-router-dom';

export default function Strategy() {
    const { title } = useParams(); // Extract the title parameter - MAP
    const { a_name } = useParams(); // Extract the agent name - AGENT


    const mapPage = Maps.find(map => map.title === title);
    const agentPage = agentInfo.find(agent => agent.a_name === a_name);
    
    // Retrieve strategies based on the agent name and map title
    const agentStrategies = strategies[a_name]?.[title]; // Access strategies for the specific agent and map
    const offenseStrategies = agentStrategies?.offense || []; // Get offense strategies

    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col gap-10 items-center text-center w-full p-5">
            <div
                className="absolute inset-0 bg-cover bg-center brightness-125 blur-lg z-0"
                style={{ backgroundImage: `url(${mapPage.backgroundImage})` }}
            />
            <div className='z-10'>
                {/* VALOSTRAT HEADER */}
                <div className='fixed top-0 left-0 right-0 z-20 p-5'>
                    <div className="w-full container mx-auto mb-5">
                        <div className="w-full flex items-center justify">
                            <IconButton aria-label="go back" onClick={() => navigate(-1)}>
                                <ArrowBackIosNewIcon className='text-white' />
                            </IconButton>

                            <div className="flex w-1/2 justify-end content-center">
                                <Link to="/">
                                    <h4 className="font-bold text-sm text-center my-5 text-red-700">VALO<span className="text-white">STRAT</span></h4>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row">
                    <div className="left-0">
                        <img className="h-[350px] w-[215px] lg:h-[850px] lg:w-[850px]" src={agentPage.disp} />
                    </div>

                    <div className="flex flex-col justify-center ml-auto">
                        {/* Don't need links - need filtering, maybe an onClick show what is selected/hide */}
                        <button className="relative inline-flex items-center justify-center p-0.5 mb-6 me-2 overflow-hidden text-9xl font-medium text-gray-900 group bg-gradient-to-br from-cyan-400 to-teal-500 hover:text-yellow-100 dark:text-white">
                            <p className="font-semibold relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-cyan-950 rounded-md group-hover:bg-opacity-0">
                                OFFENSE
                            </p>
                        </button>

                        <Link to="/newplayer">
                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-9xl text-gray-900 group bg-gradient-to-br from-red-600 to-red-900 hover:text-yellow-100 dark:text-white">
                                <p className="font-semibold relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-red-950 rounded-md group-hover:bg-opacity-0">
                                    DEFENSE
                                </p>
                            </button>
                        </Link>

                        {/* Displaying Strategies */}
                        <h2 className="text-2xl font-bold">Strategies</h2>
                        <div className="flex flex-col">
                            {offenseStrategies.length > 0 ? (
                                offenseStrategies.map((strategy, index) => (
                                    <p key={index} className="text-lg text-green-500">{strategy}</p>
                                ))
                            ) : (
                                <p className="text-lg text-red-500">No strategies available.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
