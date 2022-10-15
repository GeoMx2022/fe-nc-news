import { useState, useEffect } from "react";

import { fetchFocusArticle } from "../api/api";

import ArticleFocusCard from "./ArticleFocusCard";
import ErrorsPage from "../Error-handling/ErrorsPage";

export default function ArticleRender({id}) {
    const [focusArticle, setFocusArticle] = useState([]);
    const [isLoading, setIsLoading]  = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        fetchFocusArticle(id)
          .then((data) => {
            setFocusArticle(data);
            setIsLoading(false);
          })
          .catch((err) => {
            setIsLoading(false);
            setError(err);
          })
        },[id])

  if (error) return <ErrorsPage errMsg={error.response.data.msg} />;    
  return (
    <div>
      <div className="articleRender__div">
        {isLoading ? (
            <div className="articleRender__div--loading">
                <h2>Loading...</h2>
            </div>
        ) : (
            <div className="articleRender__div--success">
                <ArticleFocusCard article={focusArticle} id={id}/>    
            </div>
        )}
      </div>
    </div>
  )
}
