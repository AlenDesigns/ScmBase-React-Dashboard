const initialState = {
  pages: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case "GET_POSTS":
      return {
        ...state,
        users: action.payload
      };
    default:
      return state;
  }
}
