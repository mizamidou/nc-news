import { useState, useEffect, useContext } from "react";
import { getArticle } from "../../api";
import { useParams } from "react-router-dom";
import CommentsLoading from "./CommentsLoading";
import Voting from "./Voting";
import AddComment from "./AddComment";
import { CreateCommentContext } from "./ContextReact";
import DeletedComment from "./DeletedComment";

function ArticlePage() {
  const [article, setArticle] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();
  const { newComm } = useContext(CreateCommentContext);
  const { comment_id } = useParams();

  useEffect(
    () => {
      getArticle(article_id).then(fetchedArticle => {
        setArticle(fetchedArticle);
        setIsLoading(false);
      });
    },
    [article_id]
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="article-container">
      <h1>
        {article.title}
      </h1>
      <img src={article.article_img_url} />
      <p>
        {article.body}- {article.author}
      </p>
      <CommentsLoading />
      <Voting article_id={article_id} itinialVotes={article.votes} />
      <AddComment article_id={article_id} newComment={newComm} />
      <DeletedComment article_id={article_id} comment_id={comment_id} />
    </div>
  );
}

export default ArticlePage;
