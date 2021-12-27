import * as actions from "./actionTypes";

export const loggIn = (username, token, id) => ({
  type: actions.LOGGIN,
  payload: {
    username,
    token,
    id,
  },
});

export const loggOff = () => ({
  type: actions.LOGGOFF,
  payload: {},
});
