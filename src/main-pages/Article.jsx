import styles from "../styling/Article.module.css";

import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { fetchFocusArticle } from "../api/api";
import { patchVotes } from "../api/api";

import ErrorsPage from "../Error-handling/ErrorsPage";

export default function Article() {
  const { id } = useParams();
  const [focusArticle, setFocusArticle] = useState([]);
  const [disableBtn, setDisableBtn] = useState(false);
  const [voteCount, setVoteCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleUpVotes = (event) => {
    event.preventDefault();
    setVoteCount((currVoteCount) => currVoteCount + 1);
    setError(null);
    patchVotes(id, 1).catch((err) => {
      setVoteCount((currVoteCount) => currVoteCount - 1);
      setError(err);
    });
    setDisableBtn(true);
  };

  const handleDownVotes = (event) => {
    event.preventDefault();
    setVoteCount((currVoteCount) => currVoteCount - 1);
    setError(null);
    patchVotes(id, -1).catch((err) => {
      setVoteCount((currVoteCount) => currVoteCount + 1);
      setError(err);
    });
    setDisableBtn(true);
  };

  useEffect(() => {
    fetchFocusArticle(id)
      .then((data) => {
        setFocusArticle(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, [id]);

  if (error) return <ErrorsPage errMsg={error.response.data.msg} />;
  return (
    <div className="article__div">
      {isLoading ? (
        <div className="article__div--loading">
          <h2>Loading...</h2>
        </div>
      ) : (
        <div className={styles.article__div}>
          <h2>Title: {focusArticle.title}</h2>
          <p>Topic: {focusArticle.topic}</p>
          <p>Author: {focusArticle.author}</p>
          <p>Body: {focusArticle.body}</p>
          <p>Posted: {focusArticle.created_at}</p>
          <Link to={`/articles/${id}/comments`} className="article__Link">View Comments: {focusArticle.comment_count}</Link>
          <p>Votes: {voteCount + focusArticle.votes}</p>
          <button disabled={disableBtn} onClick={handleUpVotes}>👍</button>
          <button disabled={disableBtn} onClick={handleDownVotes}>👎</button>
        </div>
      )}
    </div>
  );
}
