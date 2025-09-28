import { CircleDollarSign } from 'lucide-react';
import React from 'react';

const Card = ({ data }) => {
  console.log(data);
  return (
    <div className='p-6 bg-white flex flex-col rounded-xl shadow-lg'>
      <div>
        <img src={data.image_url} alt="" className='h-[250px] w-[300px] object-cover rounded-lg'/>
      </div>
      <div className='flex-1 space-y-2'>
        <h3 className='text-2xl font-poppins font-semibold mt-5'>{data.name}</h3>
        <p className='font-inter '>{data.material}</p>
        <span className='font-poppins text-xl font-bold'>${ data.price}</span>
      </div>
      <button className='flex items-center justify-center gap-2 px-3 py-2 bg-black text-white cursor-pointer mt-5 duration-500 hover:bg-transparent hover:border hover:border-black hover:text-black'>Buy Now <CircleDollarSign></CircleDollarSign> </button>
    </div>
  );
};

export default Card;