import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="w-full max-w-[1240px] px-5 mx-auto py-16 relative ">
        <div className='flex justify-center items-center flex-col mb-6 sm:mb-0'>
        <h1 className='text-6xl font-bold text-center mb-5'>404</h1>
        <p className='text-2xl font-semibold text-red-400 '>Page Not Found</p>
        </div>
        <Link to='/' className='text-white rounded-xl bg-cyan-900 absolute right-0 inline-block font-bold text-xl lg:text-2xl px-7 py-1 lg:px-10 lg:py-3'>Back</Link>
    </div>
  );
}

export default NotFound;