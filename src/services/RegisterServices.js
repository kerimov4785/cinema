import axios from "axios";
import toast from "react-hot-toast";

const BASE_URL = import.meta.env.VITE_BASE_URL

async function SignUpUser(obj) {
    const res = await axios.get(`${BASE_URL}/users?email=${obj.email}`)
    if (res.data.length != 0) {
        toast.error('This account is already exist')
        return null
    }
    else {        
        const res2 = await axios.post(`${BASE_URL}/users`, obj)
        toast.success('Account is created!!!')
        return res2.data
    }
}

async function SignInUser(obj) {
    const res = await axios.get(`${BASE_URL}/users?email=${obj.email}&password=${obj.password}`)
    if (res.data.length == 0) {
        toast.error('Password or Email is wrong')
    }
    else{
        return res.data[0]
    }
}

export { SignUpUser, SignInUser }