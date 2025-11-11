import React from 'react';

const Banner = ({title,bgImage}) => {
  return (
    <div className='bg-zinc-400 h-[50vh] md:mt-25 mt-15 flex justify-center items-center bg-center bg-cover'
    style={{backgroundImage:`url(${bgImage})`}} >
      <h2 className='md:text-5xl text-3xl text-zinc-800 bg-white p-5 rounded-lg'>{title}</h2>
    </div>
  );
}

export default Banner;
