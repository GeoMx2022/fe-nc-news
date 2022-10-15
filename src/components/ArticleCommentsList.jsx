import { useState, useEffect } from "react";

import { fetchArticleComments } from "../api/api";

import ArticleCommentsCard from "../components/ArticleCommentsCard";
import ErrorsPage from "../Error-handling/ErrorsPage";

export default function ArticleCommentsList({id}) {
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading]  = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        fetchArticleComments(id)
          .then((data) => {
            setComments(data);
            setIsLoading(false);
          })
          .catch((err) => {
            setIsLoading(false);
            setError(err);
          });
        },[id])

  if (error) return <ErrorsPage errMsg={error.response.data.msg} />;    
  return (
    <div>
      <div className="articleCommentsList__div">
        {isLoading ? (
          <div className="articleCommentsList__div__loading">
            <h2>Loading...</h2>
          </div>
        ) :(
          <div className="articleCommentsList__div__map">
            {comments.map((comment) =>(
              <ArticleCommentsCard key={comment.comment_id} comment={comment} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
