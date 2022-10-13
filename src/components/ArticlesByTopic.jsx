import { useState, useEffect} from "react";

import { useParams, useSearchParams } from "react-router-dom"; 

import { fetchArticles } from "../api/api";

import ArticleCard from "./ArticleCard";
import SortBy from "./SortBy";

export default function ArticlesByTopic() {
    const [topicArticleData, setTopicArticleData] = useState([]);
    const [isLoading, setIsLoading]  = useState(true);
    const [searchParams, setSearchParams] = useSearchParams();
    const {topic} = useParams();

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
    
    useEffect(() => {
        setIsLoading(true)
        fetchArticles(searchParams, topic).then(topicArticleData =>{
          setTopicArticleData(topicArticleData);
          setIsLoading(false);
        });
      }, [searchParams, topic]);

  return (
    <div>
      <div className="topicsList__div--dataFetching">
        {isLoading ? (
          <div className="topicsList__div--loading">
            <h2>Loading...</h2>
          </div>
        ) : (
          <div>
            <SortBy sortOption={changeSortOrder} />
            <div>
              {topicArticleData.map((articles) => (
                <ArticleCard key={articles.article_id} articles={articles} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
