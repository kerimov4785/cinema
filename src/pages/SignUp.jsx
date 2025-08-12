import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { FaEye } from 'react-icons/fa'
import { IoEyeOffSharp } from 'react-icons/io5'
import { SignUpUser } from '../services/RegisterServices'
import { useNavigate } from 'react-router-dom'

function SignUp() {
    let [passStatus, setPassStatus] = useState({
        1: false,
        2: false
    })
    let navigate = useNavigate()
    let [obj, setObj] = useState({})
    let [password2, setPassword2] = useState({})
    function qeydiyyat() {
        if (!obj.name || !obj.phone || !obj.password || !obj.surname || !obj.email) {
            toast.error('fill all')
            return
        }
        if (obj.password != password2) {
            toast.error('Passwords do not match')
            return
        }
        SignUpUser(obj)
            .then((item) => item != null ? navigate('/register/sign-in') : null)
    }
    function newObj(e) {
        setObj({
            ...obj, [e.target.name]: e.target.value
        })
    }
    return (
        <div className='pt-[120px] px-10 '>
            <h2 className='text-3xl text-white ' >Qeydiyyat</h2>
            <div className='h-[65vh] flex justify-center flex-col items-center gap-10 ' >
                <div className='flex gap-8' >
                    <div className='flex flex-col w-[400px] gap-8 ' >
                        <input onChange={(e) => newObj(e)} name='name' type="text" placeholder='Ad' className='border-b-1 border-white w-full p-2  outline-none text-white ' />
                        <div className='flex items-center justify-center border-b-1 border-white' >
                            <p className='text-white'>+994</p>
                            <input onChange={(e) => newObj(e)} name='phone' type="text" placeholder='51 511 51 51' className=' p-2 w-full outline-none text-white ' />
                        </div>
                        <div className='relative' >
                            <input onChange={(e) => newObj(e)} name='password' placeholder='Sifre' type={`${passStatus[1] ? 'password' : 'text'}`} className='border-b-1 border-white p-2 w-full outline-none text-white ' />
                            <div onClick={() => setPassStatus({ ...passStatus, 1: !passStatus[1] })} className='absolute cursor-pointer right-1 top-[50%] translate-y-[-50%] '  >
                                {passStatus[1] ? <FaEye size={20} color='white' /> : <IoEyeOffSharp size={20} color='white' />}
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col w-[400px] gap-8 ' >
                        <input onChange={(e) => newObj(e)} name='surname' type="text" placeholder='Soyad' className='border-b-1 border-white w-full p-2  outline-none text-white ' />
                        <input onChange={(e) => newObj(e)} name='email' type="text" placeholder='Elektron poct' className='border-b-1 border-white w-full p-2  outline-none text-white ' />
                        <div className='relative' >
                            <input onChange={(e) => setPassword2(e.target.value)} placeholder='Sifreni testigle' type={`${passStatus[2] ? 'password' : 'text'}`} className='border-b-1 border-white p-2 w-full outline-none text-white ' />
                            <div onClick={() => setPassStatus({ ...passStatus, 2: !passStatus[2] })} className='absolute cursor-pointer right-1 top-[50%] translate-y-[-50%] '  >
                                {passStatus[2] ? <FaEye size={20} color='white' /> : <IoEyeOffSharp size={20} color='white' />}
                            </div>
                        </div>
                    </div>
                </div>
                <button onClick={() => qeydiyyat()} className='bg-red-700 hover:bg-red-600 w-[400px]  transition duration-300 ease-in-out  py-2 text-white rounded-3xl cursor-pointer  '>Qeydiyyat</button>
            </div>
        </div>
    )
}

export default SignUp