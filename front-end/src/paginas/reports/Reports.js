import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Reports() {
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
    const navigate = useNavigate();
    
    const openPDF = () => {
        window.open('/assets/imgs/Example_doc.pdf', '_blank');
      };

    const reports = [
        {
          "id": 1,
          "nombre": "Dr. John Smith",
          "especialidad": "Cardiologist",
          "fecha": "2023-11-09"
        },
        {
          "id": 2,
          "nombre": "Dr. Sarah Johnson",
          "especialidad": "Dermatologist",
          "fecha": "2023-07-15"
        },
        {
          "id": 3,
          "nombre": "Dr. Michael Davis",
          "especialidad": "Pediatrician",
          "fecha": "2023-05-21"
        },
        {
          "id": 4,
          "nombre": "Dr. Emily White",
          "especialidad": "Ophthalmologist",
          "fecha": "2023-03-30"
        },
        {
          "id": 5,
          "nombre": "Dr. David Lee",
          "especialidad": "Orthopedic Surgeon",
          "fecha": "2023-02-14"
        },
        {
          "id": 6,
          "nombre": "Dr. Jennifer Brown",
          "especialidad": "Gynecologist",
          "fecha": "2023-08-18"
        },
        {
          "id": 7,
          "nombre": "Dr. Robert Taylor",
          "especialidad": "Neurologist",
          "fecha": "2023-10-05"
        },
        {
          "id": 8,
          "nombre": "Dr. Laura Hall",
          "especialidad": "ENT Specialist",
          "fecha": "2023-04-26"
        },
        {
          "id": 9,
          "nombre": "Dr. William Clark",
          "especialidad": "Psychiatrist",
          "fecha": "2023-09-12"
        },
        {
          "id": 10,
          "nombre": "Dr. Linda Baker",
          "especialidad": "General Surgeon",
          "fecha": "2023-06-07"
        }
      ]

    return (
      <div className='my-auto grow flex flex-col mx-auto max-w-screen-2xl mt-10 px-12 2xl:px-0 w-full '>
        <div className='relative bg-white pt-10 pb-5 rounded-md border px-12'>
            <p className='text-left font-semibold text-2xl text-ppala mb-1'>Reports</p>
            <p className='text-left text-sm text-slate-700 mb-3'>Welcome to our Medical Reports Dashboard</p>
            <table className='w-full'>
                <thead className='bg-slate-100 h-12'>
                    <th className='text-sm text-ppala w-28'>S.no</th>
                    <th className='text-sm text-ppala text-left'>Doctor name</th>
                    <th className='text-sm text-ppala text-left'>Doctor speciality</th>
                    <th className='text-sm text-ppala text-left'>Appointment Date</th>
                    <th className='w-1/5 text-sm text-ppala text-left'>Actions</th>
                </thead>

                <tbody>
                    {
                        reports.map( (report) => {
                            return(
                            <tr className='border-b border-slate-200 h-14 hover:bg-slate-50'>
                                <td className=''>{report.id}</td>
                                <td className='text-left text-sm font-semibold text-ppala'>{report.nombre}</td>
                                <td className='text-sm text-left'>{report.especialidad}</td>
                                <td className='text-sm text-left'>{report.fecha}</td>
                                <td className='flex flex-row gap-3'>
                                    <button onClick={openPDF} className='text-sm rounded-sm border mt-2 bg-white hover:bg-slate-200 border-slate-300 text-slate-600 py-2 px-3'>View Report</button>
                                    <a href="/assets/imgs/Example_doc.pdf" download> 
                                        <button className='text-sm rounded-sm mt-2 bg-verde hover:bg-verdehover text-white font-semibold py-2 px-3'>Download Report</button>
                                    </a>
                                </td>
                            </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            
            <p className='text-left mt-5 text-sm text-slate-700'>Showing {reports.length} reports</p>


        </div>
          
      </div>
    );
  }

export default Reports;