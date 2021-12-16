const initialState = {
  isLoading: false,
  auth: null,
  err: null,
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { ...state, auth: action.payload };

    case "ERRORAUTH":
      return { ...state, err: action.payload, isLoading: false };

    case "LOGOUT":
      return { ...state, auth: null, err: null };

    default:
      return state;
  }
};

export default auth;
