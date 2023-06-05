import React, { useState, useRef } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai";

function ImageUpload() {
    const [uploadedImage, setUploadedImage] = useState(null);
    const fileInputRef = useRef(null);

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            setUploadedImage(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const containerStyle = uploadedImage
        ? {
            backgroundImage: `url(${uploadedImage})`,
        }
        : {};

    return (
        <div className="flex flex-col mx-auto  mt-4 items-center">
            <div    
                className="w-96 h-96 border-4 border-black rounded-2xl bg-cover bg-center bg-no-repeat"
                style={containerStyle}
            >
                {!uploadedImage && (
                    <div className="flex items-center justify-center h-full">
                        <AiOutlineCloudUpload size={100} color="black" />
                    </div>
                )}

                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    ref={fileInputRef}
                />
            </div>

            <button
                onClick={handleButtonClick}
                className="mt-4 px-8 py-4 bg-gray-200 border-none rounded-xl cursor-pointer font-quicksand font-bold text-white text-2xl bg-secondary opacity-80"
            >
                Upload Image
            </button>
        </div>
    );
}

export default ImageUpload;
