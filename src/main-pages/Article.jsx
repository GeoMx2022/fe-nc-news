import styles from "../styling/Article.module.css";

import { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import { fetchFocusArticle } from "../api/api";
import { patchVotes } from "../api/api";

import ErrorsPage from "../Error-handling/ErrorsPage";
import Navigation from "../components/Navigation"

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
    <div className={styles.article__div}>
      <Navigation />
      {isLoading ? (
        <div className={styles.article__div__loading}>
          <h2>Loading...</h2>
        </div>
      ) : (
        <div>
          <div className={styles.article__div__card}>
            <strong className={styles.article__div__title}>{focusArticle.title}</strong>
            <pre><br className={styles.article__lineBreak}></br></pre>
            <p>{focusArticle.body}</p>
            <pre><br className={styles.article__lineBreak}></br></pre>
            <p><strong>Topic: </strong>{focusArticle.topic}</p>
            <p><strong>Author: </strong>{focusArticle.author}</p>
            <p><strong>Posted: </strong>{focusArticle.created_at}</p>
            <p><strong>Votes: </strong>{voteCount + focusArticle.votes}</p>
            <Link to={`/articles/${id}/comments`} className="article__Link">
              View Comments: {focusArticle.comment_count}
            </Link>
            <div className={styles.article__div__votes}>
              <button disabled={disableBtn} onClick={handleUpVotes}>
                👍
              </button>
              <button disabled={disableBtn} onClick={handleDownVotes}>
                👎
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
