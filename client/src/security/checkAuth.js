import axios from "axios";
import React, { useState } from "react";

export const userAuthenticated = () => {
  // const [auth, setAuth] = useState(false);
  let stor = JSON.parse(localStorage.reduxState);

  axios
    .get("http://localhost:2000/login/isUserAuth", {
      headers: {
        "x-access-token": stor.token,
      },
    })
    .then((resp) => {
      if (resp.data === "You are authenticated") {
        // setAuth(true);
        alert("true");
      } else {
        // setAuth(false);
        alert("true");
      }
    });

  // return auth;
};
