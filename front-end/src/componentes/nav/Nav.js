import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from "../../context/AuthContext";
import { useLoading } from "../../context/LoadingContext";
import axios from 'axios'; 

function Nav() {
  const location = useLocation();
  const assetPath = '/assets/imgs/';
  const { isAuthenticated, login, logout , userData, setUserData, changeUserData} = useAuth();
  const { loading, setLoading } = useLoading();
  const [showMyProfile, setshowMyProfile] = useState(false);

  const toggleProfile = () => {
    setshowMyProfile(!showMyProfile);
  };

  const token = localStorage.getItem('token');

  // Obtenemos usuario
  useEffect(() => {
    const fetchData = async () => {
      if (token) {
        try {
          setLoading(true);
          const response = await axios.get('http://localhost:5000/a', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
            changeUserData(response.data);
            login();
          setLoading(false);
        } catch (error) {
          console.error('Error al obtener los datos del usuario:', error);
          setLoading(false);
        }
      }else{
        logout()
      }
    };
    fetchData();

  }, [token]);

  // Nos deslogueamos
  const logg = () => {
    logout()
    window.location.reload();
  }


  return (
    <nav className='bg-ppala h-16'>
      <div className=' h-full max-w-screen-2xl mx-auto px-12 2xl:px-0 flex justify-between items-center'>
        {/* Logo */}
        <Link to="/">
          <img className='w-36 h-8' src={assetPath + 'Logo.png'} alt=""/>
        </Link>

        {/* Botones navegacion */}
        <div className='h-full flex flex-row'>
          
            <Link to="/services" className={`flex items-center h-full px-4  font-medium text-sm ${location.pathname === '/services' ? 'bg-[#315561] border-b-4 border-verde text-white' : 'text-slate-300 hover:bg-[#2C4F5A]'}`} type="#">
                Services
            </Link>

            <Link to="/instantconsultation" className={`flex items-center h-full px-4  font-medium text-sm ${location.pathname === '/instantconsultation' ? 'bg-[#315561] border-b-4 border-verde text-white' : 'text-slate-300 hover:bg-[#2C4F5A]'}`} type="#">
                Instant Consultation
            </Link>

            <Link to="/appointments" className={`flex items-center h-full px-4  font-medium text-sm ${location.pathname === '/appointments' ? 'bg-[#315561] border-b-4 border-verde text-white' : 'text-slate-300 hover:bg-[#2C4F5A]'}`} type="#">
                Appointments
            </Link>

            <Link to="/blog" className={`flex items-center h-full px-4  font-medium text-sm ${location.pathname === '/blog' ? 'bg-[#315561] border-b-4 border-verde text-white' : 'text-slate-300 hover:bg-[#2C4F5A]'}`} type="#">
                Health Blog
            </Link>

            
            <Link to="/selfcheckup" className={`flex items-center h-full px-4  font-medium text-sm ${location.pathname === '/selfcheckup' ? 'bg-[#315561] border-b-4 border-verde text-white' : 'text-slate-300 hover:bg-[#2C4F5A]'}`} type="#">
                Self Check-Up
            </Link>
        </div>

        {/* Botones Login/Singup */}
        {
          isAuthenticated ? (
            <div className='relative'>
              <button onClick={toggleProfile} className=' text-white bg-verde hover:bg-verdehover text-sm rounded-sm px-4 py-2'>
                <p className=''><i className="bi bi-person"></i> {userData.userName}</p>
              </button>

              {
                showMyProfile && 
                <div className='absolute flex flex-col bg-white z-50 w-56 right-0 top-12 border border-slate-200 shadow-md shadow-gray-300'>
                    <div className='absolute right-2 -top-3'>
                      <div className='triangulo absolute'>
                      </div>
                    </div>
                  
                    <Link to="profile" className='hover:bg-slate-100 text-sm text-slate-700 py-3 text-left pl-4'><i class="bi  bi-person-lines-fill mr-1"></i> Your profile</Link>
                    <Link to="reports" className='hover:bg-slate-100 text-sm text-slate-700 py-3 text-left pl-4'><i class="bi  bi-file-earmark-text mr-1"></i> Your reports</Link>

                    <hr className=''/>
                    <button onClick={logg} className='hover:bg-slate-100 text-sm text-slate-700 py-3 text-left pl-4'><i class="bi bi-box-arrow-right text- mr-1"></i> Log out</button>
                </div>
              }
              
            </div>
            
          ) : (
            <div className='flex gap-3 flex-row'>
                <Link to="login" className='border border-slate-400 text-white hover:bg-white hover:bg-opacity-20 text-sm rounded-sm px-4 py-2'>Log in</Link>
                <Link to="register" className='bg-verde hover:bg-verdehover text-white text-sm font-semibold rounded-sm px-4 py-2'>Sign up</Link>
            </div>
          )
        }
        

      </div>
    </nav>
  );
}

export default Nav;