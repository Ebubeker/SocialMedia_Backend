import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const InboxContext = createContext();

export const InboxProvider = ({ children }) => {
  let stor = JSON.parse(localStorage.reduxState);

  const [inboxUser, setInboxUser] = useState({});
  //   const [user, setUser] = useState([]);
  let count = 0;

  //   useEffect(() => {
  //     axios.get("/login/getuser").then((result) => setUser(result.data));
  //   }, []);

  //   useEffect(() => {
  //     console.log(user);
  //   }, []);

  //   //   user.map((us) => {
  //   //     if (count === 0) {
  //   //       if (stor.id !== us._id) {
  //   //         setInboxUser(us);
  //   //         count++;
  //   //       }
  //   //     }
  //   //   });

  return (
    <InboxContext.Provider value={{ inboxUser, setInboxUser }}>
      {children}
    </InboxContext.Provider>
  );
};
