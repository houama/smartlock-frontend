const initialState = {
  isLoading: false,
  rooms: [],
};

const userRooms = (state = initialState, action) => {
  switch (action.type) {
    case "USERCHECKROOM":
      return { ...state, isLoading: false, rooms: action.payload };
    case "LOADINGROOM":
      return { ...state, isLoading: action.payload, rooms: [] };
    case "CLEARROOM":
      return { ...state, rooms: [] };
    default:
      return state;
  }
};

export default userRooms;
