import styles from "../styling/ArticlesList.module.css"

import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom"

import { fetchArticles } from "../api/api";

import SortBy from "./SortBy";
import ArticleCard from "../components/ArticleCard";
import ErrorsPage from "../Error-handling/ErrorsPage";

export default function ArticlesList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading]  = useState(true);
  const [error, setError] = useState(null);

  function changeSortOrder(event) {
    const dropDownValue = event.target.value;
    if (dropDownValue === "newest") {
      setSearchParams({
        sort_by: "created_at",
        order: "desc",
      });
    } else if (dropDownValue === "oldest") {
      setSearchParams({
        sort_by: "created_at",
        order: "asc",
      });
    } else if (dropDownValue === "mostComments") {
      setSearchParams({
        sort_by: "comment_count",
        order: "desc",
      });
    } else if (dropDownValue === "leastComments") {
      setSearchParams({
        sort_by: "comment_count",
        order: "asc",
      });
    } else if (dropDownValue === "mostVotes") {
      setSearchParams({
        sort_by: "votes",
        order: "desc",
      });
    } else if (dropDownValue === "leastVotes") {
      setSearchParams({
        sort_by: "votes",
        order: "asc",
      });
    }
  }

  useEffect(()=>{
    setIsLoading(true)
      fetchArticles(searchParams)
      .then(data => {
        setArticles(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false)
        setError(err)
      })
      },[searchParams])

  if (error) return <ErrorsPage errMsg={error.response.data.msg}/>    
  return (
    <div className={styles.articletest}>
      <div className="articlesList__div">
        {isLoading ? (
          <div className="articlesList__div--loading">
            <h2>Loading...</h2>
          </div>
        ) :(
          <div>
            <SortBy sortOption={changeSortOrder} />
            <div className="articlesList__div--map">
              {articles.map((articles) =>(
                <ArticleCard key={articles.article_id} articles={articles} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
