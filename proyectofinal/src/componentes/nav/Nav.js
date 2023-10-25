import React from 'react';
import logo from '../../assets/imgs/Logo.png';
function Nav() {
  return (
    <nav className='bg-ppala h-16'>
      <div className=' h-full max-w-screen-2xl mx-auto flex justify-between items-center'>
        {/* Logo */}
        <img className='w-36 h-8' src={logo} alt=""/>


        {/* Botones navegacion */}
        <div className='h-full flex flex-row'>
          <div className='bg-[#315561] flex items-center h-full px-4 border-b-4 border-verde text-white font-medium text-sm' type="#">
            Home
          </div>
          <button className='hover:bg-[#315561] h-full text-slate-300 font-semibold text-sm px-4 ' type="#">Appointments</button>
          <button className='hover:bg-[#315561] h-full text-slate-300 font-semibold text-sm px-4'  type="#">Health Blog</button>
          <button className='hover:bg-[#315561] h-full text-slate-300 font-semibold text-sm px-4' type="#">Revies</button>
        </div>

        {/* Botones Login/Singup */}
        <div className='flex gap-3 flex-row'>
          <button className='border border-slate-400 text-white text-sm rounded-sm px-4 py-2'>Log in</button>
          <button className='bg-verde text-white text-sm font-semibold rounded-sm px-4 py-2'>Sign up</button>

        </div>

      </div>
    </nav>
  );
}

export default Nav;