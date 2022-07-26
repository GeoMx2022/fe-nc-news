import { useNavigate } from "react-router-dom";

import { useState, useEffect, useContext } from "react";

import { fetchTopicsTitles } from "../api/api";
import { fetchTopics } from "../api/api";

import ArticleCard from "./ArticleCard";

import { v4 as uuidv4 } from "uuid";

export default function TopicsSelector() {
    const [topicTitleData, setTopicTitleData] = useState([]);
    const [topicArticleData, setTopicArticleData] = useState([]);
    const [isLoading, setIsLoading]  = useState(true);
    const [topic, setTopic] = useState("");
    const [IsBtn, setIsBtn] = useState(false);
    let navigate = useNavigate();

    useEffect(() => {
        fetchTopicsTitles().then(topicTitleData =>{
            setTopicTitleData(topicTitleData);
            setIsLoading(false);
            setIsBtn(true);
        });
    }, []);

    useEffect(() => {
        setIsLoading(true)
        fetchTopics(topic).then(topicArticleData =>{
          setTopicArticleData(topicArticleData);
          setIsLoading(false);
        });
      }, [topic]);

    return (
        <div>

          <div className="topicsSelector__div--dataFetching">
            {isLoading ? (
              <div className="topicsSelector__div--loading">
                <h2>Loading...</h2>
              </div>
            ) : (
                <div>
                    {IsBtn === false ? (
                        ""
                    ) : (
                    <div className="topicsSelector__div--map">
                        {topicTitleData.map((topic) =>(
                            <button key={uuidv4()} onClick={() => {
                                navigate(`/topics/${topic.slug}`); 
                                setTopic(topic.slug);
                        }}>{topic.slug}</button>                  
                        ))}
                    </div>  
                    )}
                </div>
           )}
          </div> 

          <div className="topicsList__div--dataFetching">
            {isLoading ? (
                <div className="topicsList__div--loading">
                    <h2>Loading...</h2>
          </div>
            ) : (
          <div>
            {topic === "" ? (
                <h2>Choose a topic</h2>
            ) : (
                <div>
                    {topicArticleData.map((articles) =>(
                    <ArticleCard key={articles.article_id} articles={articles} />
              ))}
                </div>
            )}
          </div>
            )}
         </div> 

        </div>
      )
    }
