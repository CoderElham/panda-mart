import React, { use } from 'react';
import Card from './Card';

const Backpack = ({backpackPromise}) => {
  const backpackData = use(backpackPromise)
  // console.log(backpackData);
  return (
    <div className='mt-10'>
      <h1 className='mb-5 text-3xl font-poppins font-bold'>Backpack</h1>
      <div className='grid md:grid-cols-4 gap-5'>
        {
          backpackData.map(data=><Card data={data}></Card>)
       }
      </div>
    </div>
  );
};

export default Backpack;