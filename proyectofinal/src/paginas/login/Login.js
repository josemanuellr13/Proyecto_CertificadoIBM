import React from 'react';
import imgMedico from '../../assets/imgs/medico2.png'


function Login() {
    return (
      <div className='flex flex-row grow'>
          <div className='w-1/2'>
            <img src={imgMedico} className="h-full object-cover"/>
          </div>
  
          <div className='w-1/2 flex items-center justify-center p-5'> 
           <form className='bg-white rounded-md lg:w-2/3 flex flex-col gap-3 p-10 border border-slate-200'>
                <div>
                    <p className='text-left text-xl font-semibold text-ppala'>Welcome back to <span className='text-verde font-bold'>Medica</span></p>
                    <p className='text-left text-slate-500'>Welcome to our platform. Already a member? <a  href="/registr" className='text-blue-600'>Log in</a></p>
                </div>

                <div>
                    <p className='text-left text-sm text-slate-500 pb-1'>Name</p>
                    <input className='bg-[#F9FAFF] border border-[#E0E6F6] w-full rounded-sm text-sm p-3' type="text" placeholder='Type your name'/>
                </div>

                <div>
                    <p className='text-left text-sm text-slate-500 pb-1'>Password</p>
                    <input className='bg-[#F9FAFF] border border-[#E0E6F6] w-full rounded-sm text-sm p-3' type="password" placeholder='Type your password'/>
                </div>

                <button className='bg-verde hover:bg-verdehover rounded-sm w-full py-3 text-white font-semibold text-sm'>
                    Login
                </button>
           </form>
          </div>
      </div>
    );
  }

export default Login;