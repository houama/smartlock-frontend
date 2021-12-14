const initialState = {
  bookings: [],
  isLoading: false,
  isSuccess: false,
};

const bookingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_BOOKING":
      return { ...state, bookings: action.payload };

    case "ACTION_LOADING":
      return { ...state, isLoading: action.payload };

    case "ACTION_SUCCESS":
      return { ...state, isSuccess: action.payload };

    case "UPDATE_BOOKING":
      return {
        ...state,
        bookings: state.bookings.map((booking) =>
          booking._id === action.payload._id ? action.payload : booking
        ),
      };

    case "DELETE_NODE":
      return { ...state, bookings: action.payload };

    case "ERROR":
      return { ...state, bookings: [] };

    default:
      return state;
  }
};

export default bookingReducer;
