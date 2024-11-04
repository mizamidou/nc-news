import { useState, useEffect } from "react";
import getArticles from "../../api";

function HomePage() {
  const [listOfArticles, setListOfArticles] = useState([]);

  useEffect(() => {
    getArticles().then(articles => {
      setListOfArticles(articles);
    });
  }, []);
  // console.log(listOfArticles);

  return (
    <div className="articles-container">
      <ul>
        {listOfArticles.map(article => {
          return (
            <li key={article.article_id}>
              <div className="article-title">
                <h1>
                  {article.title}
                </h1>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default HomePage;
