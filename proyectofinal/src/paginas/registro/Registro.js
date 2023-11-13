import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Registro() {
    const assetPath = '/assets/imgs/';
    const [mostrandoMensajeError, setMostrandoMensajeError] = useState(false);
    const [mensajeError, setMensajeError] = useState("Mensaje error");

    const [mostrandoMensajeExito, setMostrandoMensajeExito] = useState(false);
    const [mensajeExito, setMensajeExito] = useState("Mensaje exito");

    const [userData, setUserData] = useState({
        nombre: '',
        correo: '',
        contraseña: '',
        telefono : '',
        fechaNac : ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserData({ ...userData, [name]: value });
    };

    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault();

        // Check if inputs are filled
        if (userData.nombre !== "" && userData.contraseña !== "" && userData.correo !== "" && userData.telefono) {
          await axios
            .post("http://localhost:5000/register", userData)
            .then((res) => {

              if(res.status === 404){
                console.log("ya existe usuario")
              }else{
                setMensajeExito("Usuario creado correctamente.")
                setMostrandoMensajeExito(true)
                  setTimeout(() => {
                    navigate("/login");
                  }, 5000);
              }
            })

            .catch((error) => {
              setMensajeError(error.response.data.mensaje)
              setMostrandoMensajeError(true)
              console.error(error);
            });
        }else{
            setMensajeError("You have to fill all data.")
            setMostrandoMensajeError(true)
        }
      };

    return (
      <div className='flex flex-row grow'>
          <div className='w-1/2'>
            <img src={assetPath + 'medico.png'} className="h-full object-cover"/>
          </div>
  
          <div className='w-1/2 flex items-center justify-center p-5'> 
           <form onSubmit={(e) => onSubmit(e)} className='bg-white rounded-md lg:w-2/3 flex flex-col gap-3 p-10 border border-slate-200'>
                <div>
                    <p className='text-left text-xl font-semibold text-ppala'>Hi, welcome to <span className='text-verde font-bold'>Medica</span></p>
                    <p className='text-left text-slate-500'>Welcome to our platform. Already a member? <a  href="/registr" className='text-blue-600'>Log in</a></p>
                </div>

                <div>
                    <p className='text-left text-sm text-slate-500 pb-1'>Name</p>
                    <input className='bg-[#F9FAFF] border border-[#E0E6F6] w-full rounded-sm text-sm p-3' type="text" name="nombre" value={userData.nombre} onChange={handleInputChange} placeholder='Type your name'/>
                </div>

                <div>
                    <p className='text-left text-sm text-slate-500 pb-1'>Phone</p>
                    <input className='bg-[#F9FAFF] border border-[#E0E6F6] w-full rounded-sm text-sm p-3' type="text" name="telefono" value={userData.telefono} onChange={handleInputChange} placeholder='Type your Phone'/>
                </div>

                <div>
                    <p className='text-left text-sm text-slate-500 pb-1'>Email</p>
                    <input className='bg-[#F9FAFF] border border-[#E0E6F6] w-full rounded-sm text-sm p-3' type="text" name="correo" value={userData.correo} onChange={handleInputChange} placeholder='Type your email'/>
                </div>

                <div>
                    <p className='text-left text-sm text-slate-500 pb-1'>Password</p>
                    <input className='bg-[#F9FAFF] border border-[#E0E6F6] w-full rounded-sm text-sm p-3' type="text" name="contraseña" value={userData.contraseña} onChange={handleInputChange} placeholder='Type your password'/>
                </div>

                <div>
                    <p className='text-left text-sm text-slate-500 pb-1'>Repeat your password</p>
                    <input className='bg-[#F9FAFF] border border-[#E0E6F6] w-full rounded-sm text-sm p-3' type="text"  placeholder='Repeat your password'/>
                </div>

                <div>
                    <p className='text-left text-sm text-slate-700'><input type='checkbox' className="h-4 w-5 text-blue-500 border"/> I accept the site's terms and conditions.</p>
                </div>
                { mostrandoMensajeError ? (
                    <div className='bg-red-500 border'>
                        <p className='text-sm text-left p-3 text-white font-semibold'>{mensajeError}</p>
                    </div>
                )
                    : null
                }

              { mostrandoMensajeExito ? (
                    <div className='bg-green-100 border border-green-300'>
                        <p className='text-sm text-left p-3 text-emerald-700 font-semibold'>{mensajeExito}</p>
                    </div>
                )
                    : null
                }

                <button type="submit" className='bg-verde hover:bg-verdehover rounded-sm w-full py-3 text-white font-semibold text-sm'>
                    Create your account
                </button>
           </form>
          </div>
      </div>
    );
  }

export default Registro;