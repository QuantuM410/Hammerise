import React from "react";
import leftsideimage from "../../assets/leftsideimage.png";
import { FaFacebookF, FaGoogle } from 'react-icons/fa';

const Login = () => {
    return (
        <div className="w-full h-screen flex item-start bg-gradient-to-r from-black via-gray-800 to-gray-600 ">
            <div className=" left-screen relative w-50 h-full flex flex-col">
                <div className="absolute top-[25%] left-[13%] flex flex-col">
                    <h1 className=" text-8xl text-[#E0E0E0] font-bold font-quicksand">Welcome to our app</h1>
                    <div className="border-4 w-20 border-white inline-block mx-auto my-7"></div>
                    <p className=" text-4xl font-quicksand font-semibold text-[#E0E0E0] my-15">Login and simplify your search for skilled professionals</p></div>
                <img src={leftsideimage} className="w-full h-full object-cover " />
            </div>
            <div className="right-screen relative w-50 h-full flex flex-col">
                <div className="text-4xl my-5 font-bold font-quicksand flex justify-end">
                    <span className="text-orange-500">Local </span><span className="text-white">Service </span>Provider
                </div>
                <div className="top-[10%] border-2 w-96 border-white inline-block mx-auto mr-0"></div>
                <div className="mx-30 my-40 top-[12%]">
                    <h2 className="text-7xl font-bold font-quicksand text-[#ffffff]">Sign in to your Account</h2>
                    <div className="absolute left-[40%] border-4 w-20 border-white inline-block my-12"></div>
                </div>
                {/* <div className="flex justify-center  ">
                    <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                        <FaFacebookF className="text-5xl text-blue-500" />
                    </a>
                    <a href="#" className="border-2 border-gray-200 rounded-full p-3 mx-1">
                        <FaFacebookF className="text-5xl text-blue-500" />
                    </a>

                </div> */}
                <div className="w-full flex flex-col items-center">
                    <div className="w-3/4 flex flex-col">
                        <input
                            type="email"
                            placeholder="E-mail"
                            className="opacity-70 w-full text-lg font-quicksand text-black py-5 border-b border-white outline-none focus:outline-none px-4 my-4 bg-transparent rounded-2xl transition-transform duration-300 focus:scale-105" />
                        <input
                            type="password"
                            placeholder="Password"
                            className="opacity-70 w-full text-lg font-quicksand text-black py-5 border-b border-white outline-none focus:outline-none px-4 my-5 bg-transparent rounded-2xl transition-transform duration-300 focus:scale-105" />

                    </div>
                    <div className="w-3/4 flex items-center justify-end">
                        <p className="text-2xl font-quicksand text-white underline underline-offset-2 my-2">Forgot Password?</p>
                    </div>
                    <div className="w-full flex flex-col  items-center justify-center">
                        <button className="w-3/4 text-white my-32 bg-[#db6221] rounded-2xl py-5 text-center flex items-center justify-center text-3xl hover:bg-[#e6956a]">
                            Log In
                        </button>
                    </div>

                    <div className="w-full flex items-center justify-center ">
                        <p className="text-2xl font-quicksand text-white">Don't have an account? <span className="font-semibold underline underline-offset-2">Sign up</span></p>
                    </div>

                </div>


            </div>

        </div >

    )
}

export default Login;