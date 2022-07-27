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