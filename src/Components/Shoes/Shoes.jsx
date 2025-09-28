import React, { use } from 'react';
import Card from './Card';

const Shoes = ({ fetchPromise }) => {
  const shoesData = use(fetchPromise);
  return (
      <div>
      <h1 className='mb-5 text-3xl font-poppins font-bold'>Shoes</h1>
      <div className='grid md:grid-cols-4 gap-5'>
        {
          shoesData.map(data=><Card key={data.id} data={data}></Card>)
        }
      </div>
    </div>
  );
};

export default Shoes;