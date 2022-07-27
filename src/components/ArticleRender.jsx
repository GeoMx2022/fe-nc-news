import { useState, useEffect } from "react";

import { fetchFocusArticle } from "../api/api";

import ArticleFocusCard from "./ArticleFocusCard";

export default function ArticleRender({id}) {
    const [focusArticle, setFocusArticle] = useState([]);
    const [isLoading, setIsLoading]  = useState(true);

    useEffect(()=>{
        fetchFocusArticle(id).then(data => {
          setFocusArticle(data);
          setIsLoading(false);
        })
        },[])

  return (
    <div>
      <div className="articleRender__div">
        {isLoading ? (
            <div className="articleRender__div--loading">
                <h2>Loading...</h2>
            </div>
        ) : (
            <div className="articleRender__div--success">
                <ArticleFocusCard article={focusArticle}/>    
            </div>
        )}
      </div>
    </div>
  )
}
