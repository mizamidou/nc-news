import axios from "axios";

const getArticles = () => {
  return axios
    .get("https://backend-nc-2024.onrender.com/api/articles")
    .then(response => {
      console.log(response.data.articles);
      return response.data.articles;
    })
    .catch(error => {
      console.log("Thats an error:", error);
    });
};

const getArticle = article_id => {
  return axios
    .get(`https://backend-nc-2024.onrender.com/api/articles/${article_id}`)
    .then(response => {
      console.log(response.body.article);
      return response.body.article;
    })
    .catch(error => {
      console.log(error);
    });
};

export { getArticles, getArticle };
