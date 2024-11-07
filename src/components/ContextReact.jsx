import { createContext, useState } from "react";

export const CreateCommentContext = createContext();

export const CreateCommentProvider = ({ children }) => {
  const [newComm, setNewComm] = useState("");

  const handleNewComment = newComm => {
    setNewComm(newComm);
  };
  return (
    <CreateCommentContext.Provider value={{ newComm, handleNewComment }}>
      {children}
    </CreateCommentContext.Provider>
  );
};
