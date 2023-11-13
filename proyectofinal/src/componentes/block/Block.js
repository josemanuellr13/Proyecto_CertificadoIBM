import React, { useState } from 'react';
import { useLoading } from '../../context/LoadingContext';

function Block() {
  const { loading, setLoading } = useLoading(); 

  return (
    <div className='block lg:hidden'>
        <div className=' z-50 bg-white flex flex-col items-center justify-center absolute w-full h-screen '>
            <img src="https://cdn-icons-png.flaticon.com/512/4703/4703487.png"></img>
            <p>Oops! This website is only avaiable for PCs</p>      
        </div>
    </div>
  );
}

export default Block;