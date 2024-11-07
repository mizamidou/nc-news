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
    console.log("Receiving a new comm:", article_id);
    postedComment(article_id, newComm)
      .then(postedComment => {
        console.log("Posted a newComm:", article_id);
        setNewComm("");
        handleNewComment(postedComment);
        setNewCommentPosted(true);
        setError(null);
      })
      .catch(error => {
        console.log("That's an errror:", error);
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
