import { useNavigate } from "react-router-dom";

import { useState, useEffect, useContext } from "react";
import { fetchTopics } from "../api/api";

import ArticleCard from "./ArticleCard";

export default function Topics() {  
  let navigate = useNavigate();
  const [topicArticleData, setTopicArticleData] = useState([]);
  const [isLoading, setIsLoading]  = useState(true);
  const [topic, setTopic] = useState("");

  const handleTopic = (event) => {
    const LowerCaseTopic = event.target.innerText.toLowerCase();
    navigate(`/topics/${LowerCaseTopic}`); 
    setTopic(LowerCaseTopic); 
  };

  useEffect(() => {
    setIsLoading(true)
    fetchTopics(topic).then(topicArticleData =>{
      setTopicArticleData(topicArticleData);
      setIsLoading(false)
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
        <div className="topicsList__div--btns">
          <button onClick={(e) => handleTopic(e)}>Football</button>
          <button onClick={(e) => handleTopic(e)}>Coding</button>
          <button onClick={(e) => handleTopic(e)}>Cooking</button>
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
