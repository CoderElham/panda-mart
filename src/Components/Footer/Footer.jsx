import { Copyright } from 'lucide-react';
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className='mt-10 w-11/12 mx-auto bg-pink-100 rounded-xl p-20 mb-10 flex justify-center items-center'>
        <div className='text-center flex flex-col'>
          <h2 className='text-3xl font-poppins font-bold'>LET'S STAY IN TOUCH</h2>
          <p className='text-[18px] font-inter'>Get updates on sales specials and more</p>
          <div className='w-full flex mt-5 font-poppins'>
            <input className='w-full bg-white' type="text" />
            <button className='py-2 px-4 bg-pink-500 font-medium text-white cursor-pointer duration-500 hover:bg-pink-700'>Submit</button>
          </div>
        </div>
      </div>
      <div className='bg-black flex items-center justify-center font-inter'>
        <p className='flex items-center text-[#bebebe] py-5 gap-2'><Copyright></Copyright> Copyright by Md Elham Howlader</p>
      </div>
    </footer>
  );
};

export default Footer;