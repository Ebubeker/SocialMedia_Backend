import { createContext, useState } from "react";

export const CommentContext = createContext();

export const CommentProvider = ({ children }) => {
  const [commentIs, setCommentIs] = useState(false);

  return (
    <CommentContext.Provider value={{ commentIs, setCommentIs }}>
      {children}
    </CommentContext.Provider>
  );
};
