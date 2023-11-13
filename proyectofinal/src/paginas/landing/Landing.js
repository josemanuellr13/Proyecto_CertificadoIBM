import React from 'react';
import { Link } from "react-router-dom";

function Landing() {
  const assetPath = '/assets/imgs/';

  return (
    <div className='flex flex-row grow max-w-screen-2xl mx-auto'>
        <div className='w-1/2 flex flex-col flex-wrap justify-center gap-3 items-start'>
          <div>
            <h1 className='text-ppala text-left text-4xl xl:text-6xl font-bold'>Your health.</h1>
              <div className='bg-[#D3F2EB]'>
                <h1 className='text-gradient text-4xl xl:text-6xl font-extrabold bg-[#D3F2EB] '>Our responsability.</h1>
              </div>
          </div>
            
            
            <p className='text-left text-texto1 w-3/4'>Welcome to our medical consultation service, where your well-being is our top concern. Our team of experienced professionals is here to provide you with comprehensive healthcare and personalized treatment.</p>
            <Link to="/services">
            <button className='bg-verde hover:bg-verdehover rounded-sm text-white px-5 py-3 font-semibold shadow-lg shadow-blue-200' type="">Get Started →</button>
            </Link>

            <div className='w-full mt-5'>
              <p className='text-ppala font-semibold text-left'>We work with the best</p>
              <div className='flex gap-5 xjustify-between w-full'>
                <img className='object-contain' src={assetPath + "logo_philips.png"}></img>
                <img className='object-contain' src={assetPath + "logo_medtronic.png"}></img>
                <img className='object-contain' src={assetPath + "logo_stryke.png"}></img>
                <img className='object-contain' src={assetPath + "logo_varian.png"}></img>
              </div>
            </div>
        </div>

        <div className='w-1/2 flex items-center justify-center p-6'> 
          <img src={assetPath + 'vector1.png'} className="w-full" alt=""/>
        </div>
    </div>
  );
}

export default Landing;