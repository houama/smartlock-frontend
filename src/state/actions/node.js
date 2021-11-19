import * as api from '../../api/index'
import { returnError } from './error'

export const dataLoading = (isLoading) => async (dispatch) => {
    dispatch({type: 'ACTION_LOADING', payload : isLoading})
}

export const dataSuccess = (isSuccess) => async (dispatch) => {
    dispatch({type: 'ACTION_SUCCESS', payload: isSuccess})
}

export const getData = () => async (dispatch) => {
    dispatch(dataLoading(true))
    try {
        // const { data } = await api.getRecord()
        // dispatch({type: 'FETCHRECORD', payload: data})
        
        dispatch(dataLoading(false))
    }catch (error){
        // console.log(error)

        dispatch(returnError(error.response.data, error.response.status))
        dispatch(dataLoading(false))
    }
}

export const createNode = (recordData) => async(dispatch) => {
    
    dispatch(dataLoading(true))
    try{
        // const { data } = await api.createNode(recordData)
        
        dispatch(dataLoading(false))
        dispatch(dataSuccess(true))

    } catch (error) {
        // console.log(error)

        dispatch(returnError(error.response.data, error.response.status ))
        dispatch(dataLoading(false))
    }
}

export const updateNode = (nodeID, recordData) => async(dispatch) => {
    
    dispatch(dataLoading(true))
    try{
        // const { data } = await api.updateRoom(nodeID, recordData)
        // dispatch({type: 'UPDATE_NODE', payload: data})
        dispatch(dataLoading(false))
        dispatch(dataSuccess(true))

    } catch (error) {
        // console.log(error)

        // dispatch(returnError(error.response.data, error.response.status ))
        dispatch(dataLoading(false))
    }
}

export const deleteNode = (recordId) => async(dispatch) => {
    dispatch(dataLoading(true))
    try{
        // const { data } = await api.deleteNode(recordId)

        // dispatch({type: 'DELETE_NODE', payload: data})
        dispatch(dataLoading(false))
        dispatch(dataSuccess(true))
        
    } catch (error){
        // console.log(error)

        // dispatch(returnError(error.response.data, error.response.status ))
        dispatch(dataLoading(false))
    }
}