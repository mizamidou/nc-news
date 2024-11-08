import { useState, useEffect } from "react";
import { getArticles } from "../../api";
import { Link } from "react-router-dom";

function HomePage() {
  const [listOfArticles, setListOfArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticles().then(articles => {
      setListOfArticles(articles);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="articles-container">
      <ul>
        {listOfArticles.map(article => {
          return (
            <li key={article.article_id}>
              <div className="article-title">
                <Link to={`/articles/${article.article_id}`}>
                  <h1>
                    {article.title}
                  </h1>
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default HomePage;
