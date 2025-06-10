export const reducer = (state, action) => {
  switch (action.type) {
    case "LISTING": {
      return [...action.payload ];
    }
    case "ADD_PROJECT": {
      return [...state, action.payload];
    }
    default:
      return state;
  }
};
