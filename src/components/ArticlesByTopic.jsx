import { useState, useEffect} from "react";

import { useParams } from "react-router-dom"; 

import { fetchTopics } from "../api/api";

import ArticleCard from "./ArticleCard";

export default function ArticlesByTopic() {
    const [topicArticleData, setTopicArticleData] = useState([]);
    const [isLoading, setIsLoading]  = useState(true);
    const {topic} = useParams();
    
    useEffect(() => {
        setIsLoading(true)
        fetchTopics(topic).then(topicArticleData =>{
          setTopicArticleData(topicArticleData);
          setIsLoading(false);
        });
      }, [topic]);

  return (
    <div>
      <div className="topicsList__div--dataFetching">
        {isLoading ? (
          <div className="topicsList__div--loading">
            <h2>Loading...</h2>
          </div>
        ) : (
          <div>
            <div>
              {topicArticleData.map((articles) =>(
                <ArticleCard key={articles.article_id} articles={articles} />
              ))}
            </div>
          </div>
        )}
      </div> 
    </div>
  )
}
