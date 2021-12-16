const initialState = {
  rooms: [],
  isLoading: false,
  isSuccess: false,
};

const room = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ROOM":
      return { ...state, rooms: action.payload };

    case "ACTION_LOADING":
      return { ...state, isLoading: action.payload };

    case "ACTION_SUCCESS":
      return { ...state, isSuccess: action.payload };

    case "UPDATE_ROOM":
      return {
        ...state,
        rooms: state.rooms.map((room) =>
          room._id === action.payload._id ? action.payload : room
        ),
      };

    case "DELETE_ROOM":
      return { ...state, rooms: action.payload };

    case "ERROR":
      return { ...state, rooms: [] };

    case "CLEARROOM":
      return { ...state, rooms: [] };

    default:
      return state;
  }
};

export default room;
