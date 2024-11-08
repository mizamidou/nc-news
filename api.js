import axios from "axios";

const getArticles = () => {
  return axios
    .get("https://backend-nc-2024.onrender.com/api/articles")
    .then(response => {
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
      return response.data.article;
    })
    .catch(error => {
      console.log(error);
    });
};

const getComments = article_id => {
  return axios
    .get(
      `https://backend-nc-2024.onrender.com/api/articles/${article_id}/comments`
    )
    .then(response => {
      return response.data.comments;
    })
    .catch(error => {
      console.log(error);
    });
};

const updatedVotes = (article_id, voteChange) => {
  return axios
    .patch(`https://backend-nc-2024.onrender.com/api/articles/${article_id}`, {
      inc_votes: voteChange
    })
    .then(response => {
      return response.data.votes;
    })
    .catch(error => {
      console.log(error);
    });
};

const postedComment = (article_id, newComm) => {
  return axios
    .post(
      `https://backend-nc-2024.onrender.com/api/articles/${article_id}/comments`,
      {
        author: "cooljmessy",
        body: newComm
      }
    )
    .then(response => {
      return response.data.comments;
    })
    .catch(error => {
      console.log(error);
    });
};

const deletedComment = (article_id, comment_id) => {
  console.log(comment_id);
  return axios
    .delete(`https://backend-nc-2024.onrender.com/api/comments/${comment_id}`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
    });
};

export {
  getArticles,
  getArticle,
  getComments,
  updatedVotes,
  postedComment,
  deletedComment
};
