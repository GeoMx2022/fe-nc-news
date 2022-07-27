import { useState, useEffect } from "react";

import { fetchArticles } from "../api/api";

import ArticleCard from "../components/ArticleCard";

export default function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading]  = useState(true);

  useEffect(()=>{
      fetchArticles().then(data => {
        setArticles(data);
        setIsLoading(false);
      })
      },[])

  return (
    <div>
      <div className="articlesList__div">
        {isLoading ? (
          <div className="articlesList__div--loading">
            <h2>Loading...</h2>
          </div>
        ) :(
          <div className="articlesList__div--map">
            {articles.map((articles) =>(
              <ArticleCard key={articles.article_id} articles={articles} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
