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

export const getAllRooms = async () => API.get('/api/rooms')

export const createRoom = async () => API.post('/api/rooms/create')

export const getAllNodes = async () => API.get('/api/nodes')

export const createNode = async (data) => API.post('/api/nodes/create', data)

<<<<<<< HEAD
export const editNode = async (NodeID, data) => API.put(`/api/nodes/${NodeID}/edit`, data)

export const deleteNode = async (NodeID) => API.delete(`/api/nodes/${NodeID}`)
=======
export const editNode = async (nodeID, data) => API.put(`/api/nodes/${nodeID}/edit`, data)

export const deleteNode = async (nodeID) => API.delete(`/api/nodes/${nodeID}`)
>>>>>>> 0e8d024e3a1459e6b3125e315a85fcfa1cdd454d


