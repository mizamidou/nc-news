import { createContext, useState } from "react";

export const CreateCommentContext = createContext();

export const CreateCommentProvider = ({ children }) => {
  const [newComm, setNewComm] = useState("");

  const handleNewComment = newComm => {
    setNewComm(newComm);
  };

  const deleteComment = comment_id => {
    setNewComm(comments =>
      comments.filter(comment => comment.comment_id !== comment_id)
    );
  };
  return (
    <CreateCommentContext.Provider
      value={{ newComm, handleNewComment, deleteComment }}
    >
      {children}
    </CreateCommentContext.Provider>
  );
};
