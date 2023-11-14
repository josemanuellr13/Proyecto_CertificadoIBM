import React, { useState } from 'react';
import { useLoading } from '../../context/LoadingContext';

function Loading() {
  const { loading, setLoading } = useLoading(); 

  return (
    loading ? (
      <div className='bg-black z-50 flex items-center justify-center absolute w-full h-screen bg-opacity-40'>
        <p className='spinner'><img className='w-32' src="./assets/imgs/loading.png" alt=""/></p>
      </div>
    ) : null
  );
}

export default Loading;