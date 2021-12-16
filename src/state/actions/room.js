import * as api from "../../api/index";
import { returnError } from "./error";

export const dataLoading = (isLoading) => async (dispatch) => {
  dispatch({ type: "ACTION_LOADING", payload: isLoading });
};

export const dataSuccess = (isSuccess) => async (dispatch) => {
  dispatch({ type: "ACTION_SUCCESS", payload: isSuccess });
};

export const getRoom = () => async (dispatch) => {
  dispatch(dataLoading(true));
  try {
    const { data } = await api.getAllRooms();
    console.log(data);
    dispatch({ type: "FETCH_ROOM", payload: data });

    dispatch(dataLoading(false));
  } catch (error) {
    // console.log(error)

    // dispatch(returnError(error.response.data, error.response.status))
    dispatch(dataLoading(false));
  }
};

export const getSpecificRoom = (id) => async (dispatch) => {
  dispatch(dataLoading(true));
  try {
    const { data } = await api.getSpecificRoom(id);
    console.log(data);
    dispatch({ type: "FETCH_ROOM", payload: data });

    dispatch(dataLoading(false));
  } catch (error) {
    // console.log(error)

    // dispatch(returnError(error.response.data, error.response.status))
    dispatch(dataLoading(false));
  }
};

export const createRoom = (roomData) => async (dispatch) => {
  dispatch(dataLoading(true));
  try {
    const { data } = await api.createRoom(roomData);
    dispatch({ type: "FETCH_ROOM", payload: data });
    dispatch(dataLoading(false));
    dispatch(dataSuccess(true));
  } catch (error) {
    // console.log(error)

    // dispatch(returnError(error.response.data, error.response.status ))
    dispatch(dataLoading(false));
  }
};

export const updateRoom = (roomID, recordData) => async (dispatch) => {
  dispatch(dataLoading(true));
  try {
    const { data } = await api.editRoom(roomID, recordData);
    dispatch({ type: "FETCH_ROOM", payload: data });
    dispatch(dataLoading(false));
    dispatch(dataSuccess(true));
  } catch (error) {
    // console.log(error)

    // dispatch(returnError(error.response.data, error.response.status ))
    dispatch(dataLoading(false));
  }
};

export const deleteRoom = (recordId) => async (dispatch) => {
  dispatch(dataLoading(true));
  try {
    const { data } = await api.deleteRoom(recordId);

    dispatch({ type: "FETCH_ROOM", payload: data });
    dispatch(dataLoading(false));
    dispatch(dataSuccess(true));
  } catch (error) {
    // console.log(error)

    // dispatch(returnError(error.response.data, error.response.status ))
    dispatch(dataLoading(false));
  }
};

export const resetRoom = () => async (dispatch) => {
  dispatch({ type: "CLEARROOM" });
};
