import React from 'react';
import './Catagories.css'
const Catagories = () => {
  return (
    <div className='w-11/12 mx-auto my-10'>
      <h1 className='mb-5 text-3xl font-poppins font-bold'>Catagories</h1>
      <div className='grid md:grid-cols-3 gap-5'>
        <div className='catagories-card flex justify-between items-center px-5 bg-gradient-to-r from-[#FF9C35] to-[#FFD019] rounded-2xl'>
          <p className='text-3xl font-poppins font-semibold text-white'>Watch</p>
          <img src="../../../src/assets/categories/watch.png" alt="watch" />
        </div>
        <div className='catagories-card flex justify-between items-center px-5 bg-gradient-to-r from-[#FF589B] to-[#FF136F] rounded-2xl'>
          <p className='text-3xl font-poppins font-semibold text-white'>Bags</p>
          <img src="../../../src/assets/categories/bag.png" alt="bag" />
        </div>
        <div className='catagories-card flex justify-between items-center px-5 bg-gradient-to-r from-[#4289FF] to-[#3F07F8] rounded-2xl'>
          <p className='text-3xl font-poppins font-semibold text-white'>Shoes</p>
          <img src="../../../src/assets/categories/shoes.png" alt="shoes" />
        </div>
      </div>
    </div>
  );
};

export default Catagories;