import * as api from "../../api/index";

export const dataLoading = (isLoading) => async (dispatch) => {
  dispatch({ type: "ACTION_LOADING", payload: isLoading });
};

export const dataSuccess = (isSuccess) => async (dispatch) => {
  dispatch({ type: "ACTION_SUCCESS", payload: isSuccess });
};

export const getDashboardData = () => async (dispatch) => {
  dispatch(dataLoading(true));
  try {
    const { data } = await api.getDashboardData();

    console.log(data);

    let arrWeek = [];
    let arrCount = [];

    data.map((dash) => {
      arrWeek.push(`Week - ${dash._id.week}`);
      arrCount.push(dash.count);
    });

    console.log(arrWeek);
    console.log(arrCount);

    dispatch({ type: "FETCH_WEEK", payload: arrWeek });
    dispatch({ type: "FETCH_COUNT", payload: arrCount });
    dispatch({ type: "FETCH_DASHBOARD", payload: data });
    dispatch(dataLoading(false));
    dispatch(dataSuccess(true));
  } catch (error) {
    // console.log(error)

    // dispatch(returnError(error.response.data, error.response.status ))
    dispatch(dataLoading(false));
  }
};
