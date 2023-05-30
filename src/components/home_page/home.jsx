import React, { useState, useEffect } from "react";
import { FaEnvelope, FaMapMarked, FaSearch } from "react-icons/fa";
import user_profile_image from "../../assets/test_image.jpeg";
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
                <div className="relative text-3xl font-quicksand flex">
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
                            <div className="flex items-center">
                                <FaMapMarked className="text-white text-5xl" onClick={handleMapIconClick} />
                                <span className="text-white text-3xl ml-2">Near Me</span>
                            </div>
                        )}
                    </div>

                </div>
            </div>


            <div className="group flex flex-col items-center">
                <div className="relative flex w-[500px] h-[300px] font-quicksand bg-secondary rounded-3xl group-hover:h-[400px] duration-300 text-white text-3xl">
                    <div className="expert_image absolute top-[-30%] w-[225px] h-[225px] bg-primary left-[26%] rounded-3xl">
                        <img
                            src={user_profile_image}
                            className="w-full h-full object-cover rounded-3xl"
                            alt="User Profile"
                        />
                    </div>
                    <div className="justify-center flex flex-col items-center absolute bottom-10 left-0 py-4 px-6 w-full group-hover:opacity-0 duration-300">
                        <h2 className="text-white font-bold">Name</h2>
                        <p className="text-gray-300 text-2xl">Occupation</p>
                    </div>
                    <div className="justify-center flex flex-col items-center absolute bottom-10 left-0 py-4 px-6 w-full opacity-0 group-hover:opacity-100 duration-300">
                        <h2 className="text-white font-bold">Name</h2>
                        <p className="text-gray-300 text-2xl">Occupation</p>
                        <div className="border-4 w-40 border-white inline-block mx-auto my-7"></div>
                        <div className="flex items-center">
                            <FaPhone className="mr-2" />
                            <p className="text-gray-300 text-2xl">Contact</p>
                        </div>
                        <div className="flex items-center mt-2">
                            <FaEnvelope className="mr-2" />
                            <p className="text-gray-300 text-2xl">Mail</p>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Home;
