import * as actions from "../actions/actionTypes";

const initialState = {
  username: null,
  loggedIn: false,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.LOGGIN:
      return {
        username: action.payload.username,
        loggedIn: true,
        token: action.payload.token,
      };
    case actions.LOGGOFF:
      return {
        username: null,
        loggedIn: false,
        token: null,
      };
    default:
      return state;
  }
}

export default reducer;
