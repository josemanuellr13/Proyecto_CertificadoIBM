import React from 'react';
import vector1 from '../../assets/imgs/vector1.png'
import imgMedico from '../../assets/imgs/medico.png'
import { Link } from "react-router-dom";

function Registro() {
    return (
      <div className='flex flex-row grow'>
          <div className='w-1/2'>
            <img src={imgMedico} className="h-full object-cover"/>
          </div>
  
          <div className='w-1/2 flex items-center justify-center p-5'> 
           <form className='bg-white rounded-md lg:w-2/3 flex flex-col gap-3 p-10 border border-slate-200'>
                <div>
                    <p className='text-left text-xl font-semibold text-ppala'>Hi, welcome to <span className='text-verde font-bold'>Medica</span></p>
                    <p className='text-left text-slate-500'>Welcome to our platform. Already a member? <a  href="/registr" className='text-blue-600'>Log in</a></p>
                </div>

                <div>
                    <p className='text-left text-sm text-slate-500 pb-1'>Name</p>
                    <input className='bg-[#F9FAFF] border border-[#E0E6F6] w-full rounded-sm text-sm p-3' type="text" placeholder='Type your name'/>
                </div>

                <div>
                    <p className='text-left text-sm text-slate-500 pb-1'>Phone</p>
                    <input className='bg-[#F9FAFF] border border-[#E0E6F6] w-full rounded-sm text-sm p-3' type="text" placeholder='Type your Phone'/>
                </div>

                <div>
                    <p className='text-left text-sm text-slate-500 pb-1'>Email</p>
                    <input className='bg-[#F9FAFF] border border-[#E0E6F6] w-full rounded-sm text-sm p-3' type="text" placeholder='Type your email'/>
                </div>

                <div>
                    <p className='text-left text-sm text-slate-500 pb-1'>Password</p>
                    <input className='bg-[#F9FAFF] border border-[#E0E6F6] w-full rounded-sm text-sm p-3' type="text" placeholder='Type your password'/>
                </div>

                <div>
                    <p className='text-left text-sm text-slate-500 pb-1'>Repeat your password</p>
                    <input className='bg-[#F9FAFF] border border-[#E0E6F6] w-full rounded-sm text-sm p-3' type="text"  placeholder='Repeat your password'/>
                </div>

                <div>
                    <p className='text-left text-sm text-slate-700'><input type='checkbox' className="h-4 w-5 text-blue-500 border"/> I accept the site's terms and conditions.</p>
                </div>

                <button className='bg-verde hover:bg-verdehover rounded-sm w-full py-3 text-white font-semibold text-sm'>
                    Create your account
                </button>
           </form>
          </div>
      </div>
    );
  }

export default Registro;