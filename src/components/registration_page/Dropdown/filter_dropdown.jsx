import React, { useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";

function Dropdown2() {
    const [selectedFilter, setSelectedFilter] = useState('');
    const [isOpen, setIsOpen] = useState(false)
    const filters = [{
        "occupation": "Electrician"
    },
    {
        "occupation": "Carpenter"

    }, {
        "occupation": "Car Wash"
    }]
    const handleFilterClick = (item) => {
        setSelectedFilter(item.occupation);
        setIsOpen(false);
    };
    return (
        <div className="relative flex flex-col items-center w-[340px] rounded-lg">
            <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="bg-[#000000] ml-4 opacity-70 mt-4 p-3 w-4/5 text-white flex items-center justify-between font-bold font-quicksand text-xl rounded-lg tracking-wider border-4 border-transparent active:border-white duration-300 active:text-white"
            >
                {selectedFilter || 'Occupation'}
                {!isOpen ? (
                    <AiOutlineCaretDown className="h-8 text-white" />
                ) : (
                    <AiOutlineCaretUp />
                )}
            </button>
            {isOpen && (
                <div className="bg-[#000000] ml-4 opacity-70 textfont-quicksand absolute top-20 flex-col items-start rounded-lg p-2 w-4/5">
                    {filters.map((item) => (
                        <div
                            key={item.id}
                            className="flex w-full p-4 justify-between hover:bg-[#443c3c] cursor-pointer rounded-r-lg border-l-transparent hover:border-l-[#ffffff] duration-200 border-l-8"
                            onClick={() => handleFilterClick(item)}
                        >
                            <h1 className="text-xl font-quicksand text-white ">{item.occupation}</h1>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Dropdown2;