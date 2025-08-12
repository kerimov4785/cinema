import React, { use, useContext, useState } from 'react'
import { FaEye } from 'react-icons/fa'
import { IoEyeOffSharp } from 'react-icons/io5'
import { Link, useNavigate } from 'react-router-dom'
import { SignInUser } from '../services/RegisterServices'
import { MovieContext } from '../context/DataContext'
import toast from 'react-hot-toast'

function SignIn() {
    let [passStatus, setPassStatus] = useState(true)
    let [obj, setObj] = useState({})
    let { setUser } = useContext(MovieContext)
    let navigate = useNavigate()
    function newObj(e) {
        setObj({
            ...obj, [e.target.name]: e.target.value
        })
    }
    function gir() {
        SignInUser(obj)
            .then(res => res ? (localStorage['user'] = JSON.stringify(res),
                setUser(res),
                navigate('/profil'),
                toast.success('Welcome')
            ) : null)
    }
    return (
        <div className='pt-[120px] px-10 '>
            <h2 className='text-3xl text-white ' >Giris</h2>
            <div className='flex justify-center flex-col items-center h-[75vh]' >
                <div className='flex flex-col gap-13 ' >
                    <input onChange={(e) => newObj(e)} name='email' placeholder='Elektron poct' type="text" className='border-b-1 border-white w-[600px] p-2  outline-none text-white ' />
                    <div className='relative' >
                        <input onChange={(e) => newObj(e)} name='password' placeholder='Sifre' type={`${passStatus ? 'password' : 'text'}`} className='border-b-1 border-white w-[600px] p-2  outline-none text-white ' />
                        <div onClick={() => setPassStatus(!passStatus)} className='absolute cursor-pointer right-1 top-[50%] translate-y-[-50%] '  >
                            {passStatus ? <FaEye size={20} color='white' /> : <IoEyeOffSharp size={20} color='white' />}
                        </div>
                    </div>
                    <button onClick={() => gir()} className='bg-red-700 hover:bg-red-600  transition duration-300 ease-in-out  py-2 text-white rounded-3xl cursor-pointer  '  >Giris</button>
                </div>
                <p className='mt-10 text-gray-400 '>Burada yenisiniz? <Link className='text-white underline font-bold ' to={'/register/sign-up'}>Qeydiyyat</Link></p>
            </div>
        </div>
    )
}

export default SignIn