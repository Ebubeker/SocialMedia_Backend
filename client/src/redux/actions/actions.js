import * as actions from "./actionTypes";

export const loggIn = (username, token) => ({
  type: actions.LOGGIN,
  payload: {
    username,
    token,
  },
});

export const loggOff = () => ({
  type: actions.LOGGOFF,
  payload: {},
});
