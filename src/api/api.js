import axios from "axios";

const api = axios.create({
      baseURL: "https://nc-news-application.herokuapp.com/api",
});

export const fetchArticles = () => {
    return api.get("/articles").then(({ data }) => {
      return data.articles;
    });
};

export const fetchTopicsTitles = () => {
    return api.get("/topics").then(({ data }) => {
      return data.topics;
    });
};

export const fetchTopics = (topic) => {
    return api.get(`/articles?topic=${topic}`).then(({ data }) => {
      return data.articles;
    });
}  

export const fetchFocusArticle = (id) => {
    return api.get(`/articles/${id}`).then(({ data }) => {
      return data.article;
    });
}  

export const patchVotes = (id, voteCount) => {
  return api.patch(`/articles/${id}`, {"inc_votes": voteCount}).then(({ data }) => {
    return data.article;
  });
}

export const fetchArticleComments = (id) => {
  return api.get(`/articles/${id}/comments`).then(({ data }) => {
    return data.comments;
  });
}  

export const postNewComment = (id, newComment, userLogin) => {
  return api.post(`/articles/${id}/comments`, {"username": userLogin.username, "body": newComment}).then(({ data }) => {
    console.log(data)
    return data.comment;
  });
}