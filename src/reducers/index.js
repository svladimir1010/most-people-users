const initialState = {
  items: [],
  loading: true,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "DATA_LOADED":
      return {
        ...state,
        items: [...state.items, action.payload],
        loading: false,
        error: null
      };

    case "DATA_ERROR":
      return {
        ...state,
        items: [],
        loading: false,
        error: true
      };

    default:
      return state;
  }
};
export default reducer;
