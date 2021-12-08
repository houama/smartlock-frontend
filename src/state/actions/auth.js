import * as api from '../../api'
import Cookies from 'js-cookie'
import decode from 'jwt-decode'

export const signIn = (authData) => async (dispatch) => {
    api.signIn(authData)
    .then((res) => {
        const token = res.data.token

        Cookies.set('token', token, { path: '/', secure: true, sameSite: 'none' })

        dispatch({type: 'LOGIN_SUCCESS', payload: decode(token)})
    })
    .catch((err) => {
        
    })
}

export const logOut = (history) => async (dispatch) => {
    Cookies.remove('token')
    dispatch({type: 'LOGOUT'})
}