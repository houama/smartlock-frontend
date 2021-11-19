import axios from 'axios'
import Cookies from 'js-cookie'

const API = axios.create({
    //TODO: change baseUrl
    baseURL : process.env.REACT_APP_BASE_URL
})

API.interceptors.request.use((req) => {
    if(Cookies.get().token){
        req.headers.Authorization = `Bearer ${Cookies.get().token}`
    }

    return req;
})

export const signIn = async (authData) => {
    return API.post('/api/auth/login', authData)
}


