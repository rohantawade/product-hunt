export default (state, action) => {
  switch (action.type) {
    case "FETCH_FILTERED_DATA":
      return {
        ...state,
        products: [...action.payload],
      };
    case "FETCH_PRODUCT_COMMENTS":
      return {
        ...state,
        comments: [...action.payload],
      };
    case "STORE_PRODUCT_LIKE":
      return {
        ...state,
        activities: [...state.activities, action.payload],
      };
    default:
      return state;
  }
};
