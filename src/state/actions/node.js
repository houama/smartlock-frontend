import * as api from "../../api/index";
import { returnError } from "./error";

export const dataLoading = (isLoading) => async (dispatch) => {
  dispatch({ type: "ACTION_LOADING", payload: isLoading });
};

export const dataSuccess = (isSuccess) => async (dispatch) => {
  dispatch({ type: "ACTION_SUCCESS", payload: isSuccess });
};

export const getNodes = () => async (dispatch) => {
  dispatch(dataLoading(true));
  try {
    const { data } = await api.getAllNodes();

    dispatch({ type: "FETCH_NODE", payload: data });

    dispatch(dataLoading(false));
  } catch (error) {
    // console.log(error)

    dispatch(returnError(error.response.data, error.response.status));
    dispatch(dataLoading(false));
  }
};

export const getAvailableNodes = (id) => async (dispatch) => {
  dispatch(dataLoading(true));
  try {
    const { data } = await api.getAllNodes();

    let availableNodes = [];

    data.map((node) => {
      if (node.Room === null || node.id === id) {
        availableNodes.push({ id: node.id, name: node.name });
      }
    });

    console.log(availableNodes);
    dispatch({ type: "AVAILABLE_NODE", payload: availableNodes });

    dispatch(dataLoading(false));
  } catch (error) {
    // console.log(error)

    dispatch(returnError(error.response.data, error.response.status));
    dispatch(dataLoading(false));
  }
};

export const createNode = (recordData) => async (dispatch) => {
  dispatch(dataLoading(true));
  try {
    const { data } = await api.createNode(recordData);

    dispatch({ type: "FETCH_NODE", payload: data });
    dispatch(dataLoading(false));
    dispatch(dataSuccess(true));
  } catch (error) {
    // console.log(error)

    dispatch(returnError(error.response.data, error.response.status));
    dispatch(dataLoading(false));
  }
};

export const updateNode = (nodeID, recordData) => async (dispatch) => {
  dispatch(dataLoading(true));
  try {
    const { data } = await api.editNode(nodeID, recordData);
    dispatch({ type: "FETCH_NODE", payload: data });
    dispatch(dataLoading(false));
    dispatch(dataSuccess(true));
  } catch (error) {
    // console.log(error)

    // dispatch(returnError(error.response.data, error.response.status ))
    dispatch(dataLoading(false));
  }
};

export const deleteNode = (nodeID) => async (dispatch) => {
  dispatch(dataLoading(true));
  try {
    const { data } = await api.deleteNode(nodeID);

    dispatch({ type: "FETCH_NODE", payload: data });
    dispatch(dataLoading(false));
    dispatch(dataSuccess(true));
  } catch (error) {
    // console.log(error)

    // dispatch(returnError(error.response.data, error.response.status ))
    dispatch(dataLoading(false));
  }
};
