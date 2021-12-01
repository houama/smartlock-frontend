import * as api from '../../api/index'
import { returnError } from './error'

export const dataLoading = (isLoading) => async (dispatch) => {
    dispatch({type: 'ACTION_LOADING', payload : isLoading})
}

export const dataSuccess = (isSuccess) => async (dispatch) => {
    dispatch({type: 'ACTION_SUCCESS', payload: isSuccess})
}

export const getRoom = () => async (dispatch) => {
    dispatch(dataLoading(true))
    try {
        const { data } = await api.getAllRooms()
        dispatch({type: 'FETCH_ROOM', payload: data})
        
        dispatch(dataLoading(false))
    }catch (error){
        // console.log(error)

        // dispatch(returnError(error.response.data, error.response.status))
        dispatch(dataLoading(false))
    }
}

export const createRoom = (roomData) => async(dispatch) => {
    
    dispatch(dataLoading(true))
    try{
        const { data } = await api.createRoom(roomData)

        dispatch(dataLoading(false))
        dispatch(dataSuccess(true))

    } catch (error) {
        // console.log(error)

        // dispatch(returnError(error.response.data, error.response.status ))
        dispatch(dataLoading(false))
    }
}

export const updateRoom = (roomID, recordData) => async(dispatch) => {
    
    dispatch(dataLoading(true))
    try{
        // const { data } = await api.updateRoom(roomID, recordData)
        // dispatch({type: 'UPDATE_ROOM', payload: data})
        dispatch(dataLoading(false))
        dispatch(dataSuccess(true))

    } catch (error) {
        // console.log(error)

        // dispatch(returnError(error.response.data, error.response.status ))
        dispatch(dataLoading(false))
    }
}

export const deleteRoom = (recordId) => async(dispatch) => {
    dispatch(dataLoading(true))
    try{
        // const { data } = await api.deleteRoom(recordId)

        // dispatch({type: 'DELETE_ROOM', payload: data})
        dispatch(dataLoading(false))
        dispatch(dataSuccess(true))
        
    } catch (error){
        // console.log(error)

        // dispatch(returnError(error.response.data, error.response.status ))
        dispatch(dataLoading(false))
    }
}