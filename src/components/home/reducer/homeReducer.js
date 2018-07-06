const initialState = { 
  name: '',
  password: '',
};

const register = (state = initialState, action) => {
  switch (action.type) {
    case 'REGISTER_USER':
      return {
        ...state,
        name: action.name,
        password: action.password,
      }
    default:
      return state
  }
}

export default register;
