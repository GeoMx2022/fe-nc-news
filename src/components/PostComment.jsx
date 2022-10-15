import { useState, useContext } from "react";

import { UserLoginContext } from "../contexts/UserLogin";

import { postNewComment } from "../api/api";

import ArticleCommentsCard from "./CommentsCard";
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
      <div className="postComment__div--loading">
        <h2>Loading...</h2>
      </div>
    );

  if (isPosted)
    return (
      <div className="postedItem">
        <p>Your Comment has Been Added:</p>
        <ArticleCommentsCard comment={postedComment} />
      </div>
    );

  if (error) return <ErrorsPage errMsg={error.response.data.msg} />;

  return (
    <div>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <label>
          Comment Text:
          <textarea
            value={newComment}
            onChange={(event) => setNewComment(event.target.value)}
            required
          ></textarea>
        </label>
        <button type="submit">Post Comment</button>
      </form>
    </div>
  );
}
