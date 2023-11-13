import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useLoading } from '../../context/LoadingContext';

function Appointments() {
    const assetPath = '/assets/imgs/';
    const [doctors, setDoctors] = useState([{ _id: 0, name: 'a', years_of_experience: 0, specialty : "a", rating: 0 }]);
    const [doctorsCopy, setDoctorsCopy] = useState([{ _id: 0, name: 'a', years_of_experience: 0, specialty : "a", rating: 0 }]);
    const [selectedDoctor, setSelectedDoctor] = useState({ _id: 1, name: 'Name of doctor', years_of_experience: 0, specialty : "a", rating: 0 });
    const [showingBooking, setBook] = useState(false);
    const [bookingSuccesful, setBookingSuccesful] = useState(false);
    const [date, setDate] = useState(null);
    const [hourSelected, setHourSelected] = useState(0);
    const {userData, isAuthenticated} = useAuth();
    const [searchBy, setSearchBy] = useState(0);
    const { setLoading } = useLoading();

    const hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];


    useEffect(() => {
        setLoading(true)
      axios.get('http://localhost:5000/medical_specialists') 
        .then((response) => {
          setDoctors(response.data.medical_specialists);
          setDoctorsCopy(response.data.medical_specialists)
          setLoading(false)
        })
        .catch((error) => {
            setLoading(false)
            console.error(error);
        });
    }, []);

    const createAppointment = () => {
        
        const newAppointment = {
            doctorId: 1,
            clientId: userData._id,
            date: date, 
            time: hourSelected,
        };
        axios.post('http://localhost:5000/appointments', newAppointment)
      .then(response => {
        setBook(false)
        setBookingSuccesful(true) 
        setTimeout( () => {
            setBookingSuccesful(false) 
        }, 3000)
      })
      .catch(error => console.error('Error al crear cita', error));
      };

    const handleSearchBy = (e) => {
        setSearchBy(e.target.value)
          
    };

    const handleSearchByClick = () =>{
        const filteredDoctors = doctorsCopy.filter(doctor => doctor.specialty === searchBy);
        setDoctors(filteredDoctors);  
    }

    const navigate = useNavigate();

    const bookAppointment = (id) => {
        if(isAuthenticated){
            setSelectedDoctor(doctors[id-1])
            setBook(true)
        }else{
            navigate(`/login`);
        }
        
    }

    const handleDateChange = (event) => {
        setDate(event.target.value);
    };

    const handleHourChange = (event) => {
        setHourSelected(event.target.value);
    };

    const handleSelectHour = (hour) => {
        setHourSelected(hour)
    }
    return (
      <div className='flex flex-col grow w-full gap-5 '>

        {/* Agency an appointment */}
        {
        showingBooking ? (
            <div  className='fixed top-0 left-0 flex items-center justify-center bg-black bg-opacity-30  w-full h-screen'>
            <div className='bg-white flex flex-col gap-4 w-1/2 lg:w-1/3 p-5 shadow-md rounded-md'>
                <div className='flex justify-between'>
                    <p className='text-left text-ppala text-lg font-semibold'>Booking an Appointment</p>
                    <button onClick={() => setBook(false)} className='rounded-full'><i className="bi bi-x-lg"></i></button>   
                </div>

                {/* The doctor*/}
                <div>
                    <p className='text-left text-ppala font-semibold mb-1'>The doctor</p>
                    <div className='flex bg-slate-100 border border-slate-200 p-3 gap-3'>
                        <img className='w-24 rounded-md' src={"https://randomuser.me/api/portraits/women/" + selectedDoctor._id + ".jpg"}/>
                        <div>
                            <p className='font-semibold text-ppala'>{selectedDoctor.name}</p>
                        </div>
                    
                    </div>
                </div>


                {/* Pick up the date*/}
                <div>
                    <p className='text-left text-ppala font-semibold mb-1'>Pick up the date</p>
                    <input onChange={handleDateChange} value={date} className='w-full py-2 px-4 rounded-md border border-slate-300' type='date'></input>
                </div>

                {/* Select the hour*/}
                <div>
                    {date ? (
                    <div>
                        <p className='text-left text-ppala font-semibold mb-1'>Select the hour</p>
                        <div className='grid grid-cols-3 gap-3 xl:gap-6'>
                            {hours.map((hour) => (
                            <div key={hour}>
                                {hour % 2 === 0 ? (
                                <button className='w-full bg-gray-200 border border-gray-300 text-gray-400 py-2' disabled>
                                    {hour}:00 
                                </button>
                                ) : (
                                    <div>
                                        {(hour == hourSelected) ? (
                                            <button onClick={ () => handleSelectHour(hour)} className='border bg-blue-100 border-slate-300 ring-2 hover:bg-blue-100 rounded-sm w-full font-semibold text-ppala py-2'>
                                                {hour}:00 
                                            </button>
                                        ): (
                                            <button onClick={ () => handleSelectHour(hour)} className='border border-slate-300 hover:ring-2 text-slate-700 hover:ring-blue-100 hover:bg-blue-50 rounded-sm w-full py-2 ${hour===hourSelected ? `bg-red-300` : `bg-green-400`}'>
                                                {hour}:00 
                                            </button>
                                        )}
                                    </div>
                                )}
                            </div>
                            ))}
                        </div>
                    </div>
                ) : null}
                </div>
                
                

                {/* Resume */}
                {
                    hourSelected ? (
                        <div className='bg-slate-100 border border-slate-200 p-3 text-sm'>
                            The appointment will be scheduled for <b className='text-ppala'>{date}</b> at <b className='text-ppala'>{hourSelected}:00</b>
                        </div>
                    ): null
                }
                
                
                {/* Button submit */}
                {
                    hourSelected? (
                        <button onClick={ () => createAppointment()} className='bg-verde hover:bg-verdehover p-3 text-sm text-white'>
                            Book the appointment
                        </button>
                    ):(
                        
                        <button disabled className='bg-gray-200 p-3 text-sm text-gray-500'>
                            Book the appointment
                        </button>
                    )
                }
                

            </div>
            </div>
        ) : null
        }

        {
            bookingSuccesful ? (
                <div>
                    <div  className='fixed top-0 left-0 flex items-center justify-center bg-black bg-opacity-30  w-full h-screen'>
                    <div className='bg-white flex flex-col items-center gap-4 w-1/2 lg:w-1/3 p-5 shadow-md rounded-md'>
                        <img className='w-1/3' src={assetPath + "correct.png"}/>
                        <p className='text-ppala'>Appointment booked succesfully!</p>
                    </div>
                    </div>
                </div>
            ) : null
        }
        
        
           {/* Buscador */}
          <div className='flex bg-white w-full h-80 border-b'>
            <div className='max-w-screen-2xl mx-auto flex overflow-hidden  w-full'>

                <div className='w-2/3 flex flex-col gap-3 justify-center h-80'>
                    <div className='flex flex-col items-start'>
                        <h1 className='text-ppala text-left text-4xl xl:text-6xl font-bold'>Find a doctor to your</h1>
                        <div className='bg-[#D3F2EB] inline-block left-0'>
                            <h1 className='text-gradient text-4xl xl:text-6xl font-extrabold bg-[#D3F2EB] text-left '>own case.</h1>
                        </div>
                    </div>

                    <p className='text-left text-slate-600 text-sm'>You can search through all our doctors to find the one that's right for you.</p>
                    
                    <div className='flex rounded-md'>
                        <select  value={searchBy} onChange={ (e) => handleSearchBy(e)} className='w-2/3 px-3 text-sm border border-slate-300 shadow-md text-slate-600'>
                            <option value="0" disabled selected hidden>Choose a speciality</option>                            
                            <option value="Dentistry">Dentistry</option>
                            <option value="Dermatology">Dermatology</option>
                            <option value="Radiology">Radiology</option>
                            <option value="Cardiology">Cardiology</option>
                            <option value="Psychiatry">Psychiatry</option>
                        </select>
                        <button onClick={() => handleSearchByClick()} className='bg-verde px-5 py-4 text-white rounded-r-sm hover:bg-verdehover text-sm'>Search <i className="bi bi-search"></i></button>
                    </div>

                    
                </div>

                <div className='w-1/3 h-80'>
                    <img src={assetPath + "figure2.png"} className='h-80 object-contain w-full'></img>
                </div>
            </div>
          </div>

           {/* Especialistas */}
           <div className='max-w-screen-2xl mx-auto w-full'>
                <p className='text-left text-slate-700 text-sm mb-3'>Showing by relevance</p>
                
                {/* Cada especialista */}
                <div className='grid grid-cols-3 xl:grid-cols-4 gap-10 mb-10 '>
                    {doctors.map((doctor, index) => {
                    
                    const renderStars = (rating) => {
                        const stars = [];
                        for (let i = 1; i <= 5; i++) {
                          stars.push(
                            <i key={i} className={`bi bi-star-fill  text-lg ${i <= rating ? 'text-yellow-400' : 'text-gray-200'}`}></i>
                          );
                        }
                        return stars;
                      };

                    return (
                        <div className='flex  flex-col bg-white shadow-md rounded-md overflow-hidden hover:ring-2 ring-blue-200 border border-slate-200'>
                            <div className='bg-slate-100 flex items-center justify-center p-2'>
                                <img className="rounded-full h-24 w-24 object-cover" src={"https://randomuser.me/api/portraits/women/" + doctor._id + ".jpg"} />
                            </div>

                            <div className='px-6 py-4 flex flex-col gap-1'>
                                <div className='flex flex-row justify-between '>
                                    <p className='text-left text-slate-600 inline bg-[#EDF3FF] p-1 px-2 text-sm rounded-md'>{doctor.specialty}</p>
                                    <p className='inline'> <span>{renderStars(doctor.rating)}</span> </p>
                                </div>
                                <p className='text-left font-semibold text-ppala'>{doctor.name}</p>
                                <p className='text-left text-slate-600 text-sm'>{doctor.years_of_experience} years experience</p>
                                <p className='text-left mt-1'><button onClick={() => bookAppointment(doctor._id)} className='bg-verde hover:bg-verdehover p-3 y-4 border-sm text-sm text-white rounded-sm'>Book an Appointment →</button></p>
                            </div>
                        
                        </div>
                    )
                    })}

                </div>
            </div>
          
      </div>
    );
  }

export default Appointments;