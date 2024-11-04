import { useState, useEffect } from "react";
import getArticle from "../../api";

function ArticlePage() {
  const [article, setArticle] = useState([]);

  useEffect(() => {
    getArticle().then(data => {
      setArticle(data);
    });
  }, []);
  console.log(data);
  return <p>Article Page</p>;
}

export default ArticlePage;
