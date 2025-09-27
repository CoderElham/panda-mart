import React from 'react';
import './Banner.css'
import { FaArrowRight } from "react-icons/fa";
const Banner = () => {
  return (
    <div className='w-11/12 mx-auto px-10 bg-[#FEEAE9] flex flex-col-reverse md:flex-row items-center justify-between mt-10 rounded-lg'>
      <div className='w-full md:w-[50%] text-center md:text-start space-y-2'>
        <h1 className='font-poppins text-[32px] md:text-[56px] font-bold'>Mi LED TV 4A PRO 32</h1>
        <p className='font-inter'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        <span className='font-poppins text-[40px] text-pink-500 font-semibold'>$1289</span>
        <button className='px-7 py-2 mx-auto md:mx-0 bg-pink-500 text-white flex items-center gap-2 cursor-pointer uppercase btn-hover rounded-md'>Buy Now <FaArrowRight /></button>
      </div>
      <div className='w-full md:w-[40%]'>
        <img src="./src/assets/banner-images/tv.png" alt="" className='w-full md:w-[80%] ml-auto' />
      </div>
    </div>
  );
};

export default Banner;