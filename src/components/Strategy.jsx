import React, { useState } from 'react';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';
import { Maps } from '../constants';
import { agentInfo, strategies } from '../constants/stratdata';
import ClearIcon from '@mui/icons-material/Clear';

export default function Strategy() {
    const { title } = useParams(); // Extract the title parameter - MAP
    const { a_name } = useParams(); // Extract the agent name - AGENT

    const mapPage = Maps.find(map => map.title === title);
    const agentPage = agentInfo.find(agent => agent.a_name === a_name);
    
    const agentStrategies = strategies[a_name]?.[title]; // Access strategies for the specific agent and map
    const offenseStrategies = agentStrategies?.offense || []; // Get offense strategies
    const defenseStrategies = agentStrategies?.defense || []; // Get defense strategies

    const [activeButton, setActiveButton] = useState(''); // Track which button is active
    const navigate = useNavigate();

    const handleButtonClick = (buttonType) => {
        setActiveButton(buttonType); // Set the active button type
    };

    const handleBackClick = () => {
        setActiveButton(''); // Reset the active button, making both buttons visible again
    };

    return (
        <div className="min-h-screen flex flex-col gap-10 items-center text-center w-full p-5">
            <div
                className="absolute inset-0 bg-cover bg-center brightness-125 blur-lg z-0"
                style={{ backgroundImage: `url(${mapPage.backgroundImage})` }}
            />
            <div className='z-10'>
                <div className="fixed top-0 left-0 right-0 z-20 p-5">
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
                        {/* OFFENSE BUTTON */}
                        {!activeButton && (
                            <button className="relative inline-flex items-center justify-center p-0.5 mb-6 me-2 overflow-hidden text-9xl font-medium text-gray-900 group bg-gradient-to-br from-cyan-400 to-teal-500 hover:text-yellow-100 dark:text-white"
                                onClick={() => handleButtonClick('offense')}>
                                <p className="font-semibold relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-cyan-950 rounded-md group-hover:bg-opacity-0">
                                    OFFENSE
                                </p>
                            </button>
                        )}

                        {/* DEFENSE BUTTON */}
                        {!activeButton && (
                            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-9xl text-gray-900 group bg-gradient-to-br from-red-600 to-red-900 hover:text-yellow-100 dark:text-white"
                                onClick={() => handleButtonClick('defense')}>
                                <p className="font-semibold relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-red-950 rounded-md group-hover:bg-opacity-0">
                                    DEFENSE
                                </p>
                            </button>
                        )}

                        {/* Back Button */}
                        {activeButton && (
                            <ClearIcon className='cursor-pointer items-center hover:text-red-500' onClick={handleBackClick} />
                        )}

                        {/* Displaying Offensive Strategies */}
                        {activeButton === 'offense' && (
                            <div className="flex flex-col">
                                <h1 className="text-cyan-700 font-black text-xl">NOW VIEWING: OFFENSIVE STRATEGIES</h1>
                                {offenseStrategies.length > 0 ? (
                                    offenseStrategies.map((strategy, index) => (
                                        <div className="flex m-3" key={index}>
                                            <div className="flex flex-col items-center bg-stone-900 rounded-md shadow md:flex-row md:max-w-xl text-left">
                                                <h1 className="text-9xl font-black opacity-40 p-1 text-cyan-500">{strategy.stratId}</h1>
                                                <div className="flex flex-col justify-between p-4">
                                                    <h3 className="text-xl font-bold">{strategy.heading}</h3>
                                                    <p className="text-lg text-white">{strategy.stratdesc}</p>

                                                    <div className="flex items-center pt-3">
                                                        <p className="text-cyan-400">// Uses:</p>
                                                        {strategy.util.map((image, imgIndex) => (
                                                            <img className="w-full h-96 md:h-auto md:w-8 ml-2" src={image} alt={`Utility ${imgIndex}`} key={imgIndex} />
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-lg text-red-500">No strategies available.</p>
                                )}
                            </div>
                        )}

                        {/* Displaying Defensive Strategies */}
                        {activeButton === 'defense' && (
                            <div className="flex flex-col">
                                <h1 className="text-red-700 font-black text-xl">NOW VIEWING: DEFENSIVE STRATEGIES</h1>
                                {defenseStrategies.length > 0 ? (
                                    defenseStrategies.map((strategy, index) => (
                                        <div className="flex m-3" key={index}>
                                            <div className="flex flex-col items-center bg-stone-900 rounded-md shadow md:flex-row md:max-w-xl text-left">
                                                <h1 className="text-9xl font-black opacity-40 p-1 text-red-700">{strategy.stratId}</h1>
                                                <div className="flex flex-col justify-between p-4">
                                                    <h3 className="text-xl font-bold">{strategy.heading}</h3>
                                                    <p className="text-lg text-white">{strategy.stratdesc}</p>

                                                    <div className="flex items-center pt-3">
                                                        <p className="text-red-600">// Uses:</p>
                                                        {strategy.util.map((image, imgIndex) => (
                                                            <img className="w-full h-96 md:h-auto md:w-8 ml-2" src={image} alt={`Utility ${imgIndex}`} key={imgIndex} />
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-lg text-red-500">No strategies available.</p>
                                )}
                            </div>
                        )}

                        
                    </div>
                </div>
            </div>
        </div>
    );
}
