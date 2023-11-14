import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { AuthProvider, useAuth, AuthContext } from "../../context/AuthContext";
import { LoadingProvider, useLoading } from "../../context/LoadingContext";

function Blog() {
    const assetPath = '/assets/imgs/';
    const [healthTips, setHealthTips] = useState([{ image: 'a', title: 'a', description: 'a' }]);

    

    useEffect(() => {
      axios.get('http://localhost:5000/health_tips') 
        .then((response) => {
          setHealthTips(response.data.health_tips);
        })
        .catch((error) => {
          console.error(error);
        });
    }, []);

    return (
      <div className='flex flex-col grow w-full '>
        {/* Banner */}
        <div className='relative  flex bg-white w-full h-80 overflow-hidden border-b border-slate-300'>
              <img className='absolute w-full object-cover h-80' src={assetPath + "bg-tips.png"}></img>
              <div className='px-12 2xl:px-0 flex flex-col justify-center z-30 max-w-screen-2xl mx-auto w-full'>
                  <p className='text-left text-5xl xl:text-6xl font-bold text-white mb-1'>We want you to be <br/> <span className='text-[#C8F5EA]'>healthier.</span></p>
                  <p className='text-left text-white'>You can follow our tips to get a better life health.</p>
              </div>
        </div>

        {/* Otros articulos */}
        <div className='max-w-screen-2xl mx-auto px-12 2xl:px-0 gap-5 mt-5'>
              <p className='text-left text-slate-700 text-sm mb-3'>Showing by <span className='font-semibold'>most recent</span></p>
              <div className='grid grid-cols-3 gap-8 mb-10'>
                  {healthTips.map((tip, index) => {
                    return (
                    <div className='flex flex-col bg-white shadow-md rounded-md overflow-hidden hover:ring-2 ring-blue-200'>
                        <img src={ assetPath + tip.image} className="h-40 object-cover"/>
                        <div className='p-5 flex flex-col gap-2 '>
                            <p className='text-left font-semibold text-ppala'>{tip.title}</p>
                            <p className='text-left text-with-ellipsis-3 text-sm text-slate-600'>{tip.description}</p>
                            <p className='text-left mt-1'><button className='bg-verde hover:bg-verdehover p-3 y-4 border-sm text-sm text-white rounded-sm'>Read more</button></p>
                        </div>
                    
                    </div>
                    )
                  })}

              </div>
        </div>

           {/* Otros articulos */}
          
      </div>
    );
  }

export default Blog;