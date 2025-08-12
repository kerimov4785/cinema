import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { MovieContext } from '../context/DataContext';
import toast from 'react-hot-toast';
import Loader from '../components/Loader';

function Profil() {
    const navigate = useNavigate();
    let { user, userLoader, setUserLoader, setUser } = useContext(MovieContext)
    console.log(user, userLoader)
    useEffect(() => {
        if (!user && userLoader) {
            navigate('/register/sign-in');
        }
    }, [user, navigate, userLoader]);

    function exit() {
        setUser(null)
        localStorage['user'] = ''
    }
    if (!user) {
        return <Loader />
    }
    return (
        <div className='h-[100vh] px-10'>
            <h3 className='text-white text-3xl  pt-25'>Menim Profilim</h3>
            <div className='flex justify-between mt-5' >
                <div className='p-[50px] bg-neutral-600  w-[30%] h-[400px] justify-center rounded-3xl flex flex-col items-center gap-10' >
                    <img className='w-[140px] ' src="../src/assets/person.png" alt="" />
                    <div className='flex gap-2 justify-center '>
                        <div onClick={() => exit()} className='rounded-2xl px-3 py-2 bg-gray-300 hover:bg-white transition duration-300  font-bold cursor-pointer ' >Cixis</div>
                        <div className='rounded-2xl px-3 py-2 bg-red-400 text-white hover:bg-red-600 font-bold cursor-pointer  transition duration-300  ' >Hesabi sil</div>
                    </div>
                </div>
                <div className='flex flex-col justify-between w-[68%] '>
                    <div className='bg-neutral-600 p-[20px] h-[47%] rounded-3xl flex flex-col justify-between '>
                        <div className='border-1 border-neutral-300 px-4 py-3 rounded-xl ' >
                            <h4 className='text-neutral-300' >{user.surname} {user.name}</h4>
                        </div>
                        <div className='self-end px-5 py-2 font-bold cursor-pointer bg-neutral-300 hover:bg-white transition duration-300 rounded-3xl '>Deyis</div>
                    </div>
                    <div className='bg-neutral-600 p-[20px] h-[47%] rounded-3xl flex flex-wrap  gap-5 '>
                        <div className='border-1 border-neutral-300 px-4 py-3 rounded-xl w-[48%]  h-min ' >
                            <h4 className='text-neutral-300' >+994 {user.phone}</h4>
                        </div>
                        <div className='border-1 border-neutral-300 px-4 py-3 rounded-xl w-[48%]  h-min ' >
                            <h4 className='text-neutral-300' >{user.email}</h4>
                        </div>
                        <div className='border-1 border-neutral-300 px-4 py-3 rounded-xl w-[48%]  h-min ' >
                            <h4 className='text-neutral-300' >{user.password.split('').map(_ => { return '*' })}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profil