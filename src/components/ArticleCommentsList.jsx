import { useState, useEffect } from "react";

import { fetchArticleComments } from "../api/api";

import ArticleCommentsCard from "../components/ArticleCommentsCard";

export default function ArticleCommentsList({id}) {
    const [comments, setComments] = useState([]);
    const [isLoading, setIsLoading]  = useState(true);

    useEffect(()=>{
        fetchArticleComments(id).then(data => {
          setComments(data);
          setIsLoading(false);
        })
        },[id])

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
