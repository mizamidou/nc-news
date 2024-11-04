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

const getArticle = () => {
  return axios
    .get("https://backend-nc-2024.onrender.com/api/articles/:article_id")
    .then(response => {
      console.log(response.data);
      return response.data;
    })
    .catch(error => {
      console.log(error);
    });
};

export default (getArticles, getArticle);
