import * as api from "../../api/index";
import { returnError } from "./error";

export const dataLoading = (isLoading) => async (dispatch) => {
  dispatch({ type: "ACTION_LOADING", payload: isLoading });
};

export const dataSuccess = (isSuccess) => async (dispatch) => {
  dispatch({ type: "ACTION_SUCCESS", payload: isSuccess });
};

export const getBooking = () => async (dispatch) => {
  dispatch(dataLoading(true));
  try {
    const { data } = await api.getAllBookings();
    console.log(data);
    dispatch({ type: "FETCH_BOOKING", payload: data });

    dispatch(dataLoading(false));
  } catch (error) {
    // console.log(error)

    // dispatch(returnError(error.response.data, error.response.status))
    dispatch(dataLoading(false));
  }
};

export const updateStatusBooking =
  (bookingID, recordData) => async (dispatch) => {
    dispatch(dataLoading(true));
    try {
      const { data } = await api.editBookingStatus(bookingID, recordData);
      dispatch({ type: "FETCH_BOOKING", payload: data });
      dispatch(dataLoading(false));
      dispatch(dataSuccess(true));
    } catch (error) {
      // console.log(error)

      // dispatch(returnError(error.response.data, error.response.status ))
      dispatch(dataLoading(false));
    }
  };

export const deleteBooking = (recordId) => async (dispatch) => {
  dispatch(dataLoading(true));
  try {
    const { data } = await api.deleteBooking(recordId);

    dispatch({ type: "FETCH_BOOKING", payload: data });
    dispatch(dataLoading(false));
    dispatch(dataSuccess(true));
  } catch (error) {
    // console.log(error)

    // dispatch(returnError(error.response.data, error.response.status ))
    dispatch(dataLoading(false));
  }
};
