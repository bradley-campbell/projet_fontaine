const intitialState = { dropDown: false, language: "français" };

const viewReducer = (state = intitialState, action) => {
  switch (action.type) {
    case "DROP_DOWN": {
      return { ...state, dropDown: action.visible };
    }
    default:
      return state;
  }
};

export default viewReducer;
