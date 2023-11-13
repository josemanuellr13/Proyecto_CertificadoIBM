import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../../context/AuthContext'; 
import { useLoading } from '../../context/LoadingContext';

function Login() {
  const assetPath = '/assets/imgs/';
  const [inputs, setInputs] = useState({ correo: "", contraseña: "" });
  const [mostrandoMensaje, setMostrandoMensaje] = useState(false);
  const [mensaje, setMensaje] = useState("hola");
  
  const { correo, contraseña } = inputs;

  const { isAuthenticated, login, logout } = useAuth();
  const { setLoading } = useLoading();
  const navigate = useNavigate();

  const HandleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setMostrandoMensaje(false)

    // Check if inputs are filled
    if (correo !== "" && contraseña !== "") {
      const Usuario = {
        correo,
        contraseña,
      };

      await axios
        .post("http://localhost:5000/login", Usuario)
        .then((res) => {
          setLoading(true)
          const { data } = res;

          if(data.correcto){
            setTimeout(() => {
              localStorage.setItem("token", data?.usuario.token)
              login()
              setLoading(false)
              navigate(`/`);
            }, 1500);
          }else{
            setMensaje(data.mensaje)
            setMostrandoMensaje(true)
            setLoading(false)
          }
          
          
        })

        .catch((error) => {
          setMensaje("Error de conexion")
          setMostrandoMensaje(true)
          console.error(error);
        });

      
    }else{
      setMensaje("Escriba correo y contraseña")
      setMostrandoMensaje(true)
    }
  };


    return (
      <div className='flex flex-row grow'>
          <div className='w-1/2'>
            <img src={assetPath + 'medico2.png'} className="h-full object-cover"/>
          </div>
  
          <div className='w-1/2 flex items-center justify-center p-5'> 
           <form onSubmit={(e) => onSubmit(e)} className='bg-white rounded-md lg:w-2/3 flex flex-col gap-3 p-10 border border-slate-200'>
                <div>
                    <p className='text-left text-xl font-semibold text-ppala'>Welcome back to <span className='text-verde font-bold'>Medica</span></p>
                    <p className='text-left text-slate-500'>Welcome to our platform. Already a member? <a  href="/registr" className='text-blue-600'>Log in</a></p>
                </div>

                <div>
                    <p className='text-left text-sm text-slate-500 pb-1'>Email</p>
                    <input name='correo' value={correo} onChange={(e) => HandleChange(e)} className='bg-[#F9FAFF] border border-[#E0E6F6] w-full rounded-sm text-sm p-3' type="text" placeholder='Type your email'/>
                </div>

                <div>
                    <p className='text-left text-sm text-slate-500 pb-1'>Password</p>
                    <input name='contraseña' value={contraseña} onChange={(e) => HandleChange(e)} className='bg-[#F9FAFF] border border-[#E0E6F6] w-full rounded-sm text-sm p-3' type="password" placeholder='Type your password'/>
                </div>

                {
                  mostrandoMensaje ? (
                    <div className='bg-red-500 rounded'>
                        <p className='text-sm  p-3 text-white font-semibold text-center'>{mensaje}</p>
                    </div>
                  ) : null
                }

                <button type='submit' className='bg-verde hover:bg-verdehover rounded-sm w-full py-3 text-white font-semibold text-sm'>
                    Login
                </button>
           </form>
          </div>
      </div>
    );
  }

export default Login;