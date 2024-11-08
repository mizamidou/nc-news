import { useState, useContext } from "react";
import { CreateCommentContext } from "./ContextReact";
import { deletedComment } from "../../api";

function DeletedComment({ article_id, comment_id }) {
  const [deletedMessages, setDeletedMessages] = useState(false);
  const { deletedComment } = useContext(CreateCommentContext);

  const handleDeletedMessage = () => {
    deletedComment(article_id, comment_id)
      .then(() => {
        setDeletedMessages(true);
      })
      .catch(() => {
        setError("Failed comment to be deleted");
      });
  };

  return (
    <div>
      <button onClick={handleDeletedMessage}>Delete Comment</button>
    </div>
  );
}

export default DeletedComment;
