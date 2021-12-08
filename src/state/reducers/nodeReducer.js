const initialState = {
  nodes: [],
  isLoading: false,
  isSuccess: false,
  availableNodes: null,
};

const nodeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_NODE":
      return { ...state, nodes: action.payload };

    case "AVAILABLE_NODE":
      return { ...state, availableNodes: action.payload };

    case "ACTION_LOADING":
      return { ...state, isLoading: action.payload };

    case "ACTION_SUCCESS":
      return { ...state, isSuccess: action.payload };

    case "UPDATE_NODE":
      return {
        ...state,
        nodes: state.nodes.map((node) =>
          node._id === action.payload._id ? action.payload : node
        ),
      };

    case "DELETE_NODE":
      return { ...state, nodes: action.payload };

    case "ERROR":
      return { ...state, nodes: [] };

    default:
      return state;
  }
};

export default nodeReducer;
