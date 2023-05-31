import React, { useState, useEffect } from "react";
import Dropdown from "./filter_dropdown/filter_dropdown";
import ProviderCards from "./provider_cards/provider_cards";


import { FaEnvelope, FaMapMarked, FaSearch } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";

function Home() {
    const [showSlider, setShowSlider] = useState(false);
    const [sliderValue, setSliderValue] = useState(0);

    const handleMapIconClick = () => {
        setShowSlider(true);
    };

    const handleSliderChange = (e) => {
        setSliderValue(e.target.value);
    };

    useEffect(() => {
        let timer;
        if (sliderValue > 0) {
            timer = setTimeout(() => {
                setShowSlider(false);
            }, 5000);
        }

        return () => {
            clearTimeout(timer);
        };
    }, [sliderValue]);

    return (
        <div className="h-screen bg-gradient-to-r from-gray-900 to-gray-500 flex flex-col items-center justify-center">
            <div className="fixed top-[10%] w-3/5 bg-black py-5 px-10 z-10">
                <div className="relative text-3xl font-quicksand flex ">
                    <Dropdown />
                    <input
                        type="text"
                        placeholder="Search here..."
                        className="relative text-3xl font-quicksand rounded-full py-4 pl-10 pr-16 bg-gray-900 text-black w-3/5 mr-4"
                    />
                    <FaSearch className="relative right-20 top-10 transform -translate-y-1/2 text-gray-700 text-4xl" />

                    <div>
                        {showSlider ? (
                            <div>
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    step="10"
                                    value={sliderValue}
                                    onChange={handleSliderChange}
                                    className="relative top-3 w-[200px] "
                                />
                                <span className="text-white"> {sliderValue}km</span>
                            </div>
                        ) : (
                            <div className="flex items-center ">
                                <FaMapMarked className="text-white text-5xl" onClick={handleMapIconClick} />
                                <span className="text-white text-3xl ml-2">Near Me</span>
                            </div>
                        )}
                    </div>

                </div>
            </div>
            <ProviderCards />
        </div>
    );
};

export default Home;
