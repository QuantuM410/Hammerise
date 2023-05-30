import React, { useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
function Dropdown() {
    const [filterdata, setFilterData] = useState("Filter")
    const [isOpen, setIsOpen] = useState(false)
    const filters = [{
        "occupation": "Electrician"
    },
    {
        "occupation": "Carpenter"

    }, {
        "occupation": "Car Wash"
    }]
    return (
        <div className="relative flex flex-col items-center w-[340px] rounded-lg">
            <button onClick={() => setIsOpen((prev) => !prev)} className="bg-[#ffffff] p-4 w-4/5 flex items-center justify-between font-bold font-quicksand text-2xl rounded-lg tracking-wider border-4 border-transparent active:border-gray-800 duration-300 active:text-gray-800">
                {filterdata}
                {!isOpen ? (
                    <AiOutlineCaretDown className="h-8" />
                ) : (
                    <AiOutlineCaretUp />
                )}
            </button>
            {isOpen && (
                <div className="bg-[#ffffff] font-quicksand absolute top-20 flex-col items-start rounded-lg p-2 w-4/5">
                    {filters.map((item) => (
                        <div className="flex w-full p-4 justify-between hover:bg-[#b4b3b3]  cursor-pointer rounded-r-lg border-l-transparent hover:border-l-[#000000] duration-200 border-l-8" >
                            <h1 className="text-2xl font-quicksand" >{item.occupation}</h1>
                        </div>
                    ))}
                </div>
            )}

        </div>
    )
}

export default Dropdown;