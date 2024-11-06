import { useState, useEffect } from "react";
import { getArticle } from "../../api";
import { useParams } from "react-router-dom";
import CommentsLoading from "./CommentsLoading";

function ArticlePage() {
  const [article, setArticle] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

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
      <p>
        {article.votes}
      </p>
      <CommentsLoading />
    </div>
  );
}

export default ArticlePage;
