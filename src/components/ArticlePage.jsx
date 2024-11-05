import { useState, useEffect } from "react";
import { getArticle } from "../../api";

function ArticlePage({ article_id }) {
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(
    () => {
      getArticle(article_id).then(response => {
        setArticle(body.article);
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
      <h1 key={(article_id = 2)}>
        {article.title}
      </h1>
      <p>
        {article.body}
      </p>
    </div>
  );
}

export default ArticlePage;
