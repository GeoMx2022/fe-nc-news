import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { fetchArticleComments } from "../api/api";

import CommentsCard from "../components/CommentsCard";
import ErrorsPage from "../Error-handling/ErrorsPage";
import Article from "../main-pages/Article";
import PostComment from "../components/PostComment";

export default function Comments() {
  const { id } = useParams();
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchArticleComments(id)
      .then((data) => {
        setComments(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  }, [id]);

  if (error) return <ErrorsPage errMsg={error.response.data.msg} />;
  return (
    <div>
      <Article id={id} />
      <PostComment id={id} />
      <p>Previous comments:</p>
      <div className="comments__div">
        {isLoading ? (
          <div className="comments__div__loading">
            <h2>Loading...</h2>
          </div>
        ) : (
          <div className="comments__div__map">
            {comments.map((comment) => (
              <CommentsCard key={comment.comment_id} comment={comment} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
