import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Profile() {
    const assetPath = '/assets/imgs/';
    const [mostrandoMensaje, setMostrandoMensaje] = useState(false);
    const [mensaje, setMensaje] = useState("hola");
    const [AllowditProfile, setAllowditProfile] = useState(false);
    const [AllowChangePassword, setAllowChangePassword] = useState(false);

    const {userData} = useAuth();
    const [usuario, setUsuario] = useState({});
    const [ProfileupdatedSuccesfully, setupdatedSuccesfully] = useState(false);
    const [PasswordupdatedSuccesfully, setPasswordupdatedSuccesfully] = useState(false);
    const [newPassword, setNewPassword] = useState({1:"", 2:""});


    useEffect(() => {
        const id = userData.userId;
        if(id){
            axios.get("http://localhost:5000/usuario/" + id)
          .then(response => {
            setUsuario(response.data);
          })
          .catch(err => {
            console.log(err.response.data.error);
          });
        }

      }, [userData]);

    const handleAllowAllowditProfile = (event) => {
        if(AllowditProfile){
            setAllowditProfile(false)
        }else{
            setAllowditProfile(true)
        }
    };

    const handleAllowChangePassword = (event) => {
        if(AllowChangePassword){
            setAllowChangePassword(false)
        }else{
            setAllowChangePassword(true)
        }
    };

    const updateProfile = (event) => {
        const id = userData.userId;
        if(id){
            axios.put("http://localhost:5000/updateUsuario/" + id, usuario)
          .then(response => {
            setupdatedSuccesfully(true)
            setAllowditProfile(false)
            setTimeout( () => {
                setupdatedSuccesfully(false)
            }, 5000)
            console.log('Usuario actualizado:', response.data);
          })
          .catch(err => {
            console.error('Error al actualizar el usuario:', err);
          });
        }
    };

    const updatePassword = (event) => {
        const id = userData.userId;
        const pass = { newPassword : newPassword[1]}
        if(id){
            axios.put("http://localhost:5000/updatePassword/" + id, pass)
          .then(response => {
            setPasswordupdatedSuccesfully(true)
            setAllowChangePassword(false)
            setTimeout( () => {
                setPasswordupdatedSuccesfully(false)
            }, 5000)
          })
          .catch(err => {
            console.error('Error al actualizar el usuario:', err);
          });
        }
    };

    const handleConfirmAllowditProfile = (event) => {
        if(AllowditProfile){
            setAllowditProfile(false)
        }else{
            setAllowditProfile(true)
        }
    };

    const onChangePhone = (event) => {
        console.log(event)
        usuario.telefono = event.target.value
    }

    const onChangeEmail = (event) => {
        console.log(event)
        usuario.correo = event.target.value
    }

    const onChangePassword1 = (event) => {
        console.log(event)
        setNewPassword({ ...newPassword, 1: event.target.value });
    }

    const onChangePassword2 = (event) => {
        console.log(event)
        setNewPassword({ ...newPassword, 2: event.target.value });
    }

    const navigate = useNavigate();

    return (
      <div className='my-auto grow flex flex-col mx-auto max-w-screen-2xl mt-10 px-12 2xl:px-0 w-full '>
        <div className='relative bg-white pb-10 rounded-md border'>
            <div className='bg-gradient-to-r from-blue-200 to-emerald-100 h-32 mb-14'>
                 
            </div>
            <div className='absolute top-16 left-12 w-28 h-28 flex items-center justify-center bg-emerald-500 border-white border-4 rounded-full'>
                <p className='text-4xl font-semibold text-white'>J</p>
            </div>
            <div className='px-12'>
                <p className='text-left font-semibold text-2xl text-ppala mb-2'>My profile</p>

                <div className='flex flex-row gap-3'>
                    <div className=' w-1/3'>
                        <p className='text-left font-semibold text-ppala mb-1'>Personal information</p>
                        <p className='text-left text-slate-500 text-sm'>Change your identity informations.</p>
                        <p className='text-left mt-2'><button onClick={() => handleAllowAllowditProfile()} className='text-sm border border-slate-300 hover:bg-slate-100 rounded-md text-slate-700 px-4 py-2' type="">Edit profile</button></p>
                        <p hidden={!AllowditProfile} className='text-left mt-2'><button onClick={() => updateProfile()} className='text-sm font-semibold bg-verde hover:bg-verdehover rounded-md text-white px-4 py-2' type="">Save changes</button></p>
                        <p hidden={!AllowditProfile} className='text-left mt-2'><button onClick={() => handleAllowAllowditProfile()} className='text-sm font-semibold bg-red-500 hover:bg-red-600 rounded-md text-white px-4 py-2' type="">Delete changes</button></p>

                    </div>
                    {/* Parte inputs */}
                    <div className='relative flex flex-1 flex-col gap-4 '>
                        <div className='flex flex-col'>
                            <p className='text-left text-slate-600 font-semibold text-sm mb-1'>My name</p>
                            <div className='w-full flex flex-row'>
                                <div className='w-10 h-10 bg-sky-100 mr-2 rounded-sm flex items-center justify-center'>
                                    <i class="bi bi-person text-2xl text-ppala"></i>
                                </div>
                                <input disabled className='border w-full border-slate-300 rounded-sm text-sm p-2 px-3 text-slate-600' type="text"  name="" value={usuario.nombre} />
                            </div>
                        </div>

                        <div className='flex flex-col'>
                            <p className='text-left text-slate-600 text-sm mb-1 font-semibold'>My phone</p>
                            <div className='w-full flex flex-row'>
                                <div className='w-10 h-10 bg-sky-100 mr-2 rounded-sm flex items-center justify-center'>
                                    <i class="bi bi-telephone text-xl text-ppala"></i>
                                </div>
                                <input disabled={!AllowditProfile} onChange={onChangePhone} className='border w-full border-slate-300 rounded-sm text-sm p-2 px-3 text-slate-600' type="text"  name="" defaultValue={usuario.telefono} />
                            </div>
                        </div>

                        <div className='flex flex-col'>
                            <p className='text-left text-slate-600 text-sm mb-1 font-semibold'>My email</p>
                            <div className='w-full flex flex-row'>
                                <div className='w-10 h-10 bg-sky-100 mr-2 rounded-sm flex items-center justify-center'>
                                    <i class="bi bi-envelope text-xl text-ppala"></i>
                                </div>
                                <input disabled={!AllowditProfile} onChange={onChangeEmail}  className='border w-full border-slate-300 rounded-sm text-sm py-2 px-3 text-slate-600' type="text"  defaultValue={usuario.correo} />
                            </div>
                        </div>

                        {
                            ProfileupdatedSuccesfully? (
                            <div className='bg-green-200 w-1/3 p-2 rounded-sm border border-green-300'>
                                <p className='text-sm text-green-800'>Updated succesfully</p>
                            </div>
                            ): null
                        }

                        
                    </div>
                </div>

                <hr className='my-6'/>

                {/* Security */}
                <div className='flex flex-row gap-3'>

                    {/* Parte textos */}
                    <div className='w-1/3'>
                        <p className='text-left font-semibold text-ppala'>Security</p>
                        <p className='text-left text-slate-500 text-sm'>Change your password.</p>
                        <p className='text-left mt-2'><button onClick={handleAllowChangePassword} className='text-sm border border-slate-300 hover:bg-slate-100 rounded-md text-slate-700 px-4 py-2' type="">Edit password</button></p>
                        <p hidden={!AllowChangePassword} className='text-left mt-2'><button onClick={() => updatePassword()} className='text-sm font-semibold bg-verde hover:bg-verdehover rounded-md text-white px-4 py-2' type="">Save changes</button></p>
                        <p hidden={!AllowChangePassword} className='text-left mt-2'><button onClick={() => handleAllowChangePassword()} className='text-sm font-semibold bg-red-500 hover:bg-red-600 rounded-md text-white px-4 py-2' type="">Delete changes</button></p>
                    </div>
                    

                    {/* Parte inputs */}
                    <div className='flex flex-col flex-1 gap-3 '>
                        <div>
                            <p className='text-left text-slate-600 text-sm mb-1 font-semibold'>New password</p>
                            <div className='w-full flex flex-row'>
                                <div className='w-10 h-10 bg-sky-100 mr-2 rounded-sm flex items-center justify-center'>
                                    <i class="bi bi-key text-xl text-ppala"></i>
                                </div>
                                <input disabled={!AllowChangePassword} onChange={onChangePassword1} className='border w-full border-slate-300 rounded-sm text-sm p-2 px-3 text-slate-600' type="password"  name="" placeholder="********" />
                            </div>
                        </div>

                        <div>
                            <p className='text-left text-slate-600 text-sm mb-1 font-semibold'>Repeat password</p>
                            <div className='w-full flex flex-row'>
                                <div className='w-10 h-10 bg-sky-100 mr-2 rounded-sm flex items-center justify-center'>
                                    <i class="bi bi-key text-xl text-ppala"></i>
                                </div>
                                <input disabled={!AllowChangePassword} onChange={onChangePassword2} className='border w-full border-slate-300 rounded-sm text-sm p-2 text-slate-600' type="password"  name="" placeholder="********" />
                            </div>
                        </div>
                        
                        {
                            PasswordupdatedSuccesfully? (
                            <div className='bg-green-200 w-1/3 p-2 rounded-sm border border-green-300'>
                                <p className='text-sm text-green-800'>Updated succesfully</p>
                            </div>
                            ): null
                        }
                            
                    </div>
                </div>
            </div>
            
        </div>
          
      </div>
    );
  }

export default Profile;