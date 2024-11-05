import { useState, useEffect } from "react";
import { getArticle } from "../../api";
import { useParams } from "react-router-dom";

function ArticlePage() {
  const [article, setArticle] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();
  console.log(article_id);

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
      <p>
        {article.body}
      </p>
    </div>
  );
}

export default ArticlePage;
