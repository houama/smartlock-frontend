const initialState = {
    isLoading: false,
    data: [],
    err: null
  };
  
  const userSearchUser = (state = initialState, action) => {
    switch (action.type) {
      case "USERSEARCHUSER":
        return { ...state, isLoading: false, data: action.payload, err: null };
      case "LOADINGSEARCH":
        return { ...state, isLoading: action.payload, err: null };
      case "ERRORSEARCH":
        return { ...state, err: action.payload, isLoading: false}
      default:
        return state;
    }
  };
  
  export default userSearchUser
  