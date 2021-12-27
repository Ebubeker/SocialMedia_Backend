import * as actions from "../actions/actionTypes";

const initialState = {
  username: null,
  loggedIn: false,
  token: null,
  id: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.LOGGIN:
      return {
        username: action.payload.username,
        loggedIn: true,
        token: action.payload.token,
        id: action.payload.id,
      };
    case actions.LOGGOFF:
      return {
        username: null,
        loggedIn: false,
        token: null,
        id: null,
      };
    default:
      return state;
  }
}

export default reducer;
