import { useState, useContext } from "react";
import { postedComment } from "../../api";
import { CreateCommentContext } from "./ContextReact";

function AddComment({ article_id }) {
  const [newComm, setNewComm] = useState("");
  const [newCommentPosted, setNewCommentPosted] = useState(false);
  const [error, setError] = useState(null);
  const { handleNewComment } = useContext(CreateCommentContext);

  const sendAMessage = () => {
    if (newCommentPosted) return;
    postedComment(article_id, newComm)
      .then(postedComment => {
        setNewComm("");
        handleNewComment(postedComment);
        setNewCommentPosted(true);
        setError(null);
      })
      .catch(error => {
        setError("Failed comment to be posted");
      });
  };
  const handlePostedMessageBy = event => {
    setNewComm(event.target.value);
    setNewCommentPosted(false);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="add a comment"
        value={newComm}
        onChange={handlePostedMessageBy}
      />
      <button onClick={sendAMessage}>Post Comment</button>
      {error &&
        <p>
          {error}
        </p>}
    </div>
  );
}

export default AddComment;
