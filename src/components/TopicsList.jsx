//import { useState, useEffect, useContext } from "react";
//import { fetchTopics } from "../api/api";

//import ArticleCard from "./ArticleCard";

export default function TopicsList({children}) {
  console.log(children)
  /*
  const [topicArticleData, setTopicArticleData] = useState([]);
  const [isLoading, setIsLoading]  = useState(true);
  
  useEffect(() => {
    setIsLoading(true)
    fetchTopics(topic).then(topicArticleData =>{
      setTopicArticleData(topicArticleData);
      setIsLoading(false)
    });
  }, [topic]);

  return (
    <div>
      <p>Hello there</p>
      <div className="topicsList__div--dataFetching">
        {isLoading ? (
          <div className="topicsList__div--loading">
            <h2>Loading...</h2>
          </div>
        ) : (
          <div>
              {topicArticleData.map((articles) =>(
                <ArticleCard key={articles.article_id} articles={articles} />
              ))}
          </div>
       )}
      </div>
    </div>
  )
  */
 return (
  <p>Hello there</p>
 )
}
