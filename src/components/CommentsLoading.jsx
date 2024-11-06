import { useState, useEffect } from "react";
import { getComments } from "../../api";
import { useParams } from "react-router-dom";

function CommentsLoading() {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(
    () => {
      getComments(article_id).then(fetchedComments => {
        setComments(fetchedComments);
        setIsLoading(false);
      });
    },
    [article_id]
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="comments-container">
      <h1>Comments </h1>
      <ul>
        {comments.map(comment => {
          return (
            <ul key={comment.comment_id}>
              {comment.body}-{comment.author}
            </ul>
          );
        })}
      </ul>
    </div>
  );
}

export default CommentsLoading;
