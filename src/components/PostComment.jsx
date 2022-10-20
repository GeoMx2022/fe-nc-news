import styles from "../styling/PostComment.module.css";

import { useState, useContext } from "react";

import { UserLoginContext } from "../contexts/UserLogin";

import { postNewComment } from "../api/api";

import CommentsCard from "../components/CommentsCard";
import ErrorsPage from "../Error-handling/ErrorsPage";

export default function PostComment({ id }) {
  const { userLogin } = useContext(UserLoginContext);
  const [isPosted, setIsPosted] = useState(false);
  const [newComment, setNewComment] = useState("");
  const [postedComment, setPostedComment] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsPosted(false);
    setIsLoading(true);
    postNewComment(id, newComment, userLogin)
      .then((data) => {
        setPostedComment(data);
        setIsLoading(false);
        setIsPosted(true);
      })
      .catch((err) => {
        setIsPosted(false);
        setIsLoading(false);
        setError(err);
      });
  };

  if (isLoading)
    return (
      <div className={styles.postComment__div__loading}>
        <h2>Loading...</h2>
      </div>
    );

  if (isPosted)
    return (
      <div className={styles.postComment__div__isPosted}>
        <p className={styles.postComment__div__isPosted__p}>Your comment has been added:</p>
        <CommentsCard comment={postedComment} />
      </div>
    );

  if (error) return <ErrorsPage errMsg={error.response.data.msg} />;

  return (
    <div>
      <form className={styles.postComment__div__container}
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <label className={styles.postComment__label}>
          Comment Text:
          <textarea
            className={styles.postComment__textarea}
            value={newComment}
            onChange={(event) => setNewComment(event.target.value)}
            required
          ></textarea>
        </label>
        <button type="submit" className={styles.postComment__btn}>Post</button>
      </form>
    </div>
  );
}
