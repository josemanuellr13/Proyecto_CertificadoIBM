import React from 'react';
import logo from '../../assets/imgs/Logo.png';
import { Link, useLocation } from 'react-router-dom';


function Nav() {
  const location = useLocation();

  return (
    <nav className='bg-ppala h-16'>
      <div className=' h-full max-w-screen-2xl mx-auto px-12 2xl:px-0 flex justify-between items-center'>
        {/* Logo */}
        <img className='w-36 h-8' src={logo} alt=""/>


        {/* Botones navegacion */}
        <div className='h-full flex flex-row'>
            <Link to="/" className={`flex items-center h-full px-4  font-medium text-sm ${location.pathname === '/' ? 'bg-[#315561] border-b-4 border-verde text-white' : 'text-slate-300 hover:bg-[#2C4F5A]'}`} type="#">
                Home
            </Link>

            <Link to="/services" className={`flex items-center h-full px-4  font-medium text-sm ${location.pathname === '/services' ? 'bg-[#315561] border-b-4 border-verde text-white' : 'text-slate-300 hover:bg-[#2C4F5A]'}`} type="#">
                Services
            </Link>

            <Link to="/appointments" className={`flex items-center h-full px-4  font-medium text-sm ${location.pathname === '/appointments' ? 'bg-[#315561] border-b-4 border-verde text-white' : 'text-slate-300 hover:bg-[#2C4F5A]'}`} type="#">
                Appointments
            </Link>

            <Link to="/blog" className={`flex items-center h-full px-4  font-medium text-sm ${location.pathname === '/blog' ? 'bg-[#315561] border-b-4 border-verde text-white' : 'text-slate-300 hover:bg-[#2C4F5A]'}`} type="#">
                Health Blog
            </Link>

            <Link to="/reviews" className={`flex items-center h-full px-4  font-medium text-sm ${location.pathname === '/reviews' ? 'bg-[#315561] border-b-4 border-verde text-white' : 'text-slate-300 hover:bg-[#2C4F5A]'}`} type="#">
                Reviews
            </Link>
        </div>

        {/* Botones Login/Singup */}
        <div className='flex gap-3 flex-row'>
          <Link to="login" className='border border-slate-400 text-white hover:bg-white hover:bg-opacity-20 text-sm rounded-sm px-4 py-2'>Log in</Link>
          <Link to="register" className='bg-verde hover:bg-verdehover text-white text-sm font-semibold rounded-sm px-4 py-2'>Sign up</Link>

        </div>

      </div>
    </nav>
  );
}

export default Nav;