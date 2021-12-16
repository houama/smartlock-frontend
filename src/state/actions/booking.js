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

export const checkRoom = (date, time) => async (dispatch) => {
  dispatch({ type: "LOADINGROOM", payload: true });
  api
    .userCheckRoom(date, time.start, time.end)
    .then((res) => {
      dispatch({ type: "USERCHECKROOM", payload: res.data.rooms });
    })
    .catch((err) => {});
};

export const searchUser = (nim) => async (dispatch) => {
  dispatch({ type: "LOADINGSEARCH", payload: true });
  api
    .userSearchUser(nim)
    .then((res) => {
      const { data } = res;
      const payload = data.map((item) => ({
        name: item.first_name + " " + item.last_name,
        nim: item.nim,
        uid: item.uid,
      }));

      dispatch({ type: "USERSEARCHUSER", payload: payload });
    })
    .catch((err) => {
      dispatch({ type: "ERRORSEARCH", payload: err });
    });
};

export const userCreateBooking =
  (nim, roomID, startDate, endDate, participant) => async (dispatch) => {
    dispatch({ type: "LOADINGBOOKING", payload: true });
    api
      .userCreateBooking(nim, roomID, startDate, endDate, participant)
      .then((res) => {
        dispatch({ type: "USERCREATEBOOKING", payload: res.data });
      })
      .catch((err) => {
        console.log(err.response.data);
        dispatch({
          type: "ERRORBOOKING",
          payload: err.response.status + " " + err.response.statusText,
        });
      });
  };

export const resetUserCreateBooking = () => async (dispatch) => {
  dispatch({ type: "CLEARBOOKING" });
};
