const initialState = {
  isLoading: false,
  data: [],
  err: null,
};

const userBooking = (state = initialState, action) => {
  switch (action.type) {
    case "USERCREATEBOOKING":
      return { ...state, isLoading: false, data: action.payload, err: null };
    case "LOADINGBOOKING":
      return { ...state, isLoading: action.payload, err: null };
    case "ERRORBOOKING":
      return { ...state, err: action.payload, isLoading: false };
    case "CLEARBOOKING":
      return { ...state, data: [] };
    default:
      return state;
  }
};

export default userBooking;
