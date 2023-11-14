import React from 'react';
import { Link } from "react-router-dom";
const assetPath = '/assets/imgs/';

function Services() {
    return (
      <div className='flex flex-col px-12 2xl:px-0 grow w-full max-w-screen-2xl mx-auto items-center justify-center gap-5'>
         <h2 className='text-6xl text-center font-bold mt-10 text-ppala'>Full range of <div className='bg-[#D3F2EB] '>
                <h1 className='text-gradient text-6xl font-extrabold bg-[#D3F2EB] '>the better specialists</h1>
              </div>for private diagnostics </h2>
        
        <p className='text-[#597C87] mb-10'>Welcome to our Medical Services section, where your health is our priority.<br></br> Explore our range of specialized care to meet your unique healthcare needs.</p>
        

        <div className='flex xw-min flex-row bg-white rounded-sm border border-slate-200 grow-0 shadow-lg'>
            <Link to="/instantconsultation" className='flex-1 flex flex-col justify-center p-8 border-r hover:bg-ppala group'>
                <img src={assetPath + 'icon-now.png'} className='w-10 mb-2'></img>
                <h3 className='text-left text:xl  xl:text-2xl font-semibold mb-2 group-hover:text-white'>Instant <br></br> Consultation</h3>
                <p className='text-left text-slate-600 group-hover:text-slate-300 text-sm'>Talk to one of our specialist right now. </p>
                <p className='text-left'><i class="bi bi-arrow-right-short rounded-full text-6xl text-left text-slate-600 group-hover:text-slate-300"></i></p>
                
            </Link>

            <Link to="/appointments" className='flex-1 flex flex-col justify-center p-8 border-r hover:bg-ppala group'>
                <img src={assetPath + 'icon-calendar.png'} className='w-10 mb-2'></img>
                <h3 className='text-left text:xl  xl:text-2xl font-semibold mb-2 group-hover:text-white'>Book an <br></br> Appointmment</h3>
                <p className='text-left text-slate-600 group-hover:text-slate-400 text-sm'>Book an appointment with one of our specialist.</p>
                <p className='text-left'><i class="bi bi-arrow-right-short rounded-full text-6xl text-left text-slate-600 group-hover:text-slate-400"></i></p>
                
            </Link>

            <Link to="/blog" className='flex-1 flex flex-col justify-center p-8 border-r hover:bg-ppala group'>
                <img src={assetPath + 'icon-light.png'} className='w-10 mb-2'></img>
                <h3 className='text-left text:xl  xl:text-2xl font-semibold mb-2 group-hover:text-white'>Health tips <br></br> and Guidance</h3>
                <p className='text-left text-slate-600 group-hover:text-slate-400'>See our tips for a better life.</p>
                <p className='text-left'><i class="bi bi-arrow-right-short rounded-full text-6xl text-left text-slate-600 group-hover:text-slate-400"></i></p>
                
            </Link>

            <Link to="/selfcheckup" className='flex-1 flex flex-col justify-center p-8 border-r hover:bg-ppala group'>
                <img src={assetPath + 'icon-person.png'} className='w-10 mb-2'></img>
                <h3 className='text-left text:xl  xl:text-2xl font-semibold mb-2 group-hover:text-white'>Self <br></br> Checkup</h3>
                <p className='text-left text-slate-600 group-hover:text-slate-400'>Checkup yourself with our guides.</p>
                <p className='text-left'><i class="bi bi-arrow-right-short rounded-full text-6xl text-left text-slate-600 group-hover:text-slate-400"></i></p>
                
            </Link>
        </div>
      </div>
    );
  }

export default Services;