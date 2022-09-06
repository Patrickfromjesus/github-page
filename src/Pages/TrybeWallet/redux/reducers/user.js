export const IS_LOGGED = 'IS_LOGGED';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case IS_LOGGED:
    return {
      ...state,
      email: action.email,
    };
  default:
    return state;
  }
};

export default user;
