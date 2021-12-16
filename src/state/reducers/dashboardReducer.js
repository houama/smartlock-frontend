const initialState = {
  dashboards: [],
  weeks: null,
  counts: null,
  isLoading: false,
  isSuccess: false,
};

const dashboardReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DASHBOARD":
      return { ...state, dashboards: action.payload };
    case "FETCH_WEEK":
      return { ...state, weeks: action.payload };

    case "FETCH_COUNT":
      return { ...state, counts: action.payload };

    case "ACTION_LOADING":
      return { ...state, isLoading: action.payload };

    case "ACTION_SUCCESS":
      return { ...state, isSuccess: action.payload };

    case "ERROR":
      return { ...state, dashboards: [] };

    default:
      return state;
  }
};

export default dashboardReducer;
