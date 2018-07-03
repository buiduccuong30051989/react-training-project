const initialState = { 
  flag: 0
};

const flagReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PLUS':
      return {
        ...state,
        flag: state.flag + 1
      }
    case 'MINUS':
      return {
        ...state,
        flag: state.flag - 1
      }
    default:
      return state
  }
}

export default flagReducer;
